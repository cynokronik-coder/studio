import { useEffect, useRef, useState } from "react";
import { createScene } from "./scene.js";

const rooms = [
  { id: 1, name: "Room 1", title: "THE FUTURE IS HUMAN.", mapped: true },
  { id: 2, name: "Room 2", title: "Unmapped reference state", mapped: false },
  { id: 3, name: "Room 3", title: "The Collective Field", mapped: true },
  { id: 4, name: "Room 4", title: "Unmapped reference state", mapped: false },
  { id: 5, name: "Room 5", title: "Unmapped reference state", mapped: false }
];

function Arrow({ direction = "down" }) {
  const rotation = direction === "up" ? "rotate(180deg)" : direction === "left" ? "rotate(90deg)" : direction === "right" ? "rotate(-90deg)" : "none";
  return <span className="arrow-glyph" style={{ transform: rotation }} aria-hidden="true">⌄</span>;
}

function SceneCanvas({ roomId }) {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return undefined;
    sceneRef.current = createScene(canvasRef.current, roomId);
    return () => {
      sceneRef.current?.dispose();
      sceneRef.current = null;
    };
  }, []);

  useEffect(() => {
    sceneRef.current?.setRoom(roomId);
  }, [roomId]);

  return <canvas ref={canvasRef} className="scene-canvas" aria-hidden="true" />;
}

function App() {
  const [activeRoomId, setActiveRoomId] = useState(1);
  const [activeHotspot, setActiveHotspot] = useState("");
  const [notice, setNotice] = useState("");
  const activeRoom = rooms.find((room) => room.id === activeRoomId) ?? rooms[0];
  const isRoomThree = activeRoomId === 3;

  function chooseRoom(room) {
    if (!room.mapped) {
      setNotice(`${room.name} has not been inspected yet. Its reference state is intentionally not fabricated.`);
      return;
    }
    setActiveRoomId(room.id);
    setActiveHotspot("");
    setNotice("");
  }

  function showUnverified(label) {
    setNotice(`${label}: the visual marker is present in the public preview, but its full action has not yet been verified.`);
    setActiveHotspot(label);
  }

  return (
    <main className="experience">
      <SceneCanvas roomId={activeRoomId} />

      <div className="ambient-grain" aria-hidden="true" />
      <header className="top-bar">
        <span className="room-label">{activeRoom.name.toUpperCase()}</span>
        <span className="interaction-label">INTERACTION</span>
      </header>

      <section className="experience-frame" aria-label={`${activeRoom.name} immersive scene`}>
        <div className="frame-inner-glow" aria-hidden="true" />

        <div className="scene-heading">
          {activeRoomId === 1 ? (
            <>
              <h1>THE FUTURE IS HUMAN.</h1>
              <p>Die Welt braucht deine einzigartige Gabe.</p>
            </>
          ) : isRoomThree ? (
            <>
              <h1 className="room-three-title">The <em>Collective Field</em></h1>
              <p>Die Welt braucht deine einzigartige Gabe.</p>
            </>
          ) : (
            <>
              <h1>{activeRoom.title}</h1>
              <p>Reference capture required before this room can be reconstructed.</p>
            </>
          )}
        </div>

        {isRoomThree && (
          <div className="hotspots" aria-label="Observed interactive hotspots">
            <button className="hotspot hotspot-left" onClick={() => showUnverified("HIGHER WE")}>
              <span className="hotspot-dot" /> HIGHER WE
            </button>
            <button className="hotspot hotspot-center" onClick={() => showUnverified("Love intelligence")}>
              <span className="hotspot-dot" /> Love intelligence
            </button>
            <button className="hotspot hotspot-right" onClick={() => showUnverified("FUTURE HUMAN")}>
              <span className="hotspot-dot" /> FUTURE HUMAN
            </button>
          </div>
        )}

        {notice && (
          <div className="notice" role="status">
            <span>{notice}</span>
            <button onClick={() => { setNotice(""); setActiveHotspot(""); }} aria-label="Dismiss message">×</button>
          </div>
        )}

        <button
          className="edge-control edge-control-left"
          onClick={() => chooseRoom(rooms.find((room) => room.id === (activeRoomId === 3 ? 1 : 1)))}
          aria-label="Return to Room 1"
          title="Return to Room 1"
        >
          <Arrow direction="up" />
        </button>

        <footer className="journey-navigation">
          <div className="journey-word journey-word-future">FUTURE</div>
          <div className="room-indicators" aria-label="Room navigation">
            {rooms.map((room) => (
              <button
                key={room.id}
                className={`room-indicator ${activeRoomId === room.id ? "is-active" : ""} ${!room.mapped ? "is-unmapped" : ""}`}
                onClick={() => chooseRoom(room)}
                aria-label={room.mapped ? `Go to ${room.name}` : `${room.name}, not yet mapped`}
                aria-current={activeRoomId === room.id ? "step" : undefined}
                title={room.mapped ? room.name : `${room.name} — reference inspection required`}
              >
                <span />
              </button>
            ))}
          </div>
          <div className="journey-word journey-word-human">HUMAN</div>
          <div className="journey-hint">Click to explore</div>
        </footer>

        <div className="utility-actions">
          <button className="utility-button" onClick={() => setNotice("Information panel destination has not yet been verified.")} aria-label="Information">
            <span aria-hidden="true">▤</span>
          </button>
          <button className="utility-button" onClick={() => setNotice("Contact destination has not yet been verified.")} aria-label="Contact">
            <span aria-hidden="true">✉</span>
          </button>
        </div>
      </section>

      <div className="prototype-tag">INTERFACE STUDY · NOT AN OFFICIAL FUTURE HUMAN WEBSITE</div>
    </main>
  );
}

export default App;
