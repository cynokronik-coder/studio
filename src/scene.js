import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uPointer;

  void main() {
    vUv = uv;
    vec3 pos = position;
    float wave = sin((uv.x * 5.0 + uTime * 0.12)) * cos((uv.y * 4.0 - uTime * 0.08));
    pos.z += wave * 0.012;
    pos.x += uPointer.x * 0.018 * (uv.y - 0.5);
    pos.y += uPointer.y * 0.014 * (uv.x - 0.5);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform float uTime;
  uniform float uRoom;
  uniform vec2 uResolution;
  uniform vec2 uPointer;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 5; i++) {
      value += amplitude * noise(p);
      p *= 2.03;
      amplitude *= 0.5;
    }
    return value;
  }

  vec3 roomOne(vec2 uv, float t) {
    vec2 p = uv + uPointer * 0.025;
    float slow = fbm(p * vec2(7.0, 10.0) + vec2(t * 0.015, -t * 0.01));
    float detail = fbm(p * vec2(31.0, 44.0) + slow * 2.0);
    float moss = smoothstep(0.18, 0.88, slow * 0.72 + detail * 0.44);
    vec3 deep = vec3(0.035, 0.052, 0.027);
    vec3 olive = vec3(0.18, 0.22, 0.075);
    vec3 mossGreen = vec3(0.31, 0.35, 0.12);
    vec3 color = mix(deep, olive, smoothstep(0.12, 0.78, slow));
    color = mix(color, mossGreen, moss * 0.55);
    float grain = hash(floor(uv * uResolution * 0.72 + t * 0.2));
    color += (grain - 0.5) * 0.065;

    vec2 cell = uv * vec2(92.0, 57.0);
    vec2 id = floor(cell);
    vec2 f = fract(cell) - 0.5;
    float seed = hash(id);
    vec2 center = vec2(hash(id + 2.7), hash(id + 8.1)) - 0.5;
    float petalShape = length((f - center * 0.65) * vec2(1.0, 1.7));
    float flower = (1.0 - smoothstep(0.008, 0.055, petalShape)) * step(0.88, seed);
    vec3 pale = vec3(0.72, 0.72, 0.55);
    color += pale * flower * 0.5;

    vec2 flyCell = floor(uv * vec2(23.0, 15.0));
    float flySeed = hash(flyCell);
    vec2 flyPos = (flyCell + vec2(hash(flyCell + 1.0), hash(flyCell + 3.0))) / vec2(23.0, 15.0);
    flyPos.x = fract(flyPos.x + t * (0.003 + flySeed * 0.009));
    float flyDist = length((uv - flyPos) * vec2(uResolution.x / uResolution.y, 1.0));
    float glow = exp(-flyDist * 210.0) * step(0.965, flySeed);
    color += vec3(0.88, 0.92, 0.55) * glow * (0.5 + 0.5 * sin(t * 1.8 + flySeed * 8.0));

    float vignette = (1.0 - smoothstep(0.22, 0.92, length((uv - 0.5) * vec2(1.12, 0.9))));
    return color * mix(0.55, 1.0, vignette);
  }

  vec3 roomThree(vec2 uv, float t) {
    vec2 p = uv + uPointer * 0.018;
    float clouds = fbm(p * vec2(5.0, 7.0) + vec2(t * 0.012, -t * 0.009));
    float strata = fbm(p * vec2(17.0, 26.0) + clouds * 2.4);
    float stone = smoothstep(0.18, 0.85, clouds * 0.75 + strata * 0.35);
    vec3 charcoal = vec3(0.025, 0.028, 0.03);
    vec3 umber = vec3(0.19, 0.12, 0.075);
    vec3 warmStone = vec3(0.31, 0.22, 0.13);
    vec3 color = mix(charcoal, umber, stone);
    color = mix(color, warmStone, smoothstep(0.62, 0.91, strata) * 0.34);
    float grain = hash(floor(uv * uResolution * 0.8));
    color += (grain - 0.5) * 0.07;

    for (int i = 0; i < 17; i++) {
      float fi = float(i);
      float phase = t * (0.13 + mod(fi, 4.0) * 0.018) + fi * 1.71;
      vec2 pos = vec2(
        fract(fi * 0.279 + t * (0.009 + mod(fi, 3.0) * 0.003)),
        0.19 + 0.62 * fract(hash(vec2(fi, 2.7)) + sin(phase) * 0.13)
      );
      vec2 delta = uv - pos;
      delta.x *= uResolution.x / uResolution.y;
      float angle = sin(phase * 0.65) * 0.18;
      delta = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)) * delta;
      float body = exp(-length(vec2(delta.x * 2.8, delta.y * 13.0)) * 2.5);
      float tail = exp(-length(vec2((delta.x + sign(delta.x) * 0.018) * 9.0, delta.y * 20.0)) * 1.8) * 0.22;
      float glow = exp(-length(delta) * 70.0);
      float light = body + tail + glow * 0.16;
      color += vec3(1.0, 0.79, 0.43) * light * (0.42 + 0.25 * sin(phase * 1.7));
    }

    float vignette = (1.0 - smoothstep(0.18, 0.95, length((uv - 0.5) * vec2(1.15, 0.92))));
    return color * mix(0.45, 1.0, vignette);
  }

  void main() {
    vec2 uv = vUv;
    vec3 color = uRoom > 1.5 ? roomThree(uv, uTime) : roomOne(uv, uTime);
    gl_FragColor = vec4(color, 1.0);
  }
`;

export function createScene(canvas, initialRoom = 1) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: "high-performance"
    });
  } catch (error) {
    canvas.dataset.webgl = "unavailable";
    return {
      setRoom() {},
      dispose() {}
    };
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-2, 2, 1.125, -1.125, 0.1, 10);
  camera.position.z = 2;

  const uniforms = {
    uTime: { value: 0 },
    uRoom: { value: initialRoom },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uPointer: { value: new THREE.Vector2(0, 0) }
  };

  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader
  });
  const geometry = new THREE.PlaneGeometry(4, 2.25, 64, 40);
  const plane = new THREE.Mesh(geometry, material);
  scene.add(plane);

  const pointer = new THREE.Vector2(0, 0);
  let frameId = 0;
  let disposed = false;
  let lastTime = 0;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize() {
    const width = Math.max(1, canvas.clientWidth);
    const height = Math.max(1, canvas.clientHeight);
    renderer.setSize(width, height, false);
    uniforms.uResolution.value.set(width * renderer.getPixelRatio(), height * renderer.getPixelRatio());
  }

  function onPointerMove(event) {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
    uniforms.uPointer.value.copy(pointer);
  }

  function animate(now) {
    if (disposed) return;
    frameId = requestAnimationFrame(animate);
    const elapsed = now * 0.001;
    if (!prefersReducedMotion) {
      uniforms.uTime.value = elapsed;
    }
    if (now - lastTime > 14) {
      renderer.render(scene, camera);
      lastTime = now;
    }
  }

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);
  canvas.addEventListener("pointermove", onPointerMove);
  resize();
  frameId = requestAnimationFrame(animate);

  return {
    setRoom(roomId) {
      uniforms.uRoom.value = roomId;
    },
    dispose() {
      disposed = true;
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    }
  };
}
