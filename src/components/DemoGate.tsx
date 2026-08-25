import { DEMO_DISCLAIMER } from "@/lib/site-data";
import { DemoGateClient } from "./DemoGateClient";

export function DemoGate() {
  return (
    <>
      <div
        id="demo-modal"
        className="demo-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-text"
      >
        <div className="demo-modal-panel">
          <p id="demo-modal-text" className="demo-modal-text">
            {DEMO_DISCLAIMER}
          </p>
          <button type="button" id="demo-dismiss-btn" className="demo-modal-btn">
            看 Demo
          </button>
        </div>
      </div>

      <div id="demo-badge" className="demo-badge" aria-label="Demo 示範網站">
        DEMO
      </div>

      <DemoGateClient />
    </>
  );
}
