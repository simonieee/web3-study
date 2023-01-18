import { useWeb3React } from "@web3-react/core";
import { useState } from "react";
import { injected } from "../connectors";
import "../../css/connect.css";

function Activate() {
  const { activate, active } = useWeb3React();

  const [activating, setActivating] = useState(false);

  const handleActive = (event) => {
    event.preventDefault();

    async function _activate(activate) {
      setActivating(true);
      await activate(injected);
      setActivating(false);
    }

    _activate(activate);
  };

  return (
    <button className="activate-btn" disabled={active} onClick={handleActive}>
      Connect
    </button>
  );
}

function Deactivate() {
  const { deactivate, active } = useWeb3React();

  const handleDeactivate = (event) => {
    event.preventDefault();

    deactivate();
  };

  return (
    <button
      className="deactivate-btn"
      disabled={active}
      onClick={handleDeactivate}
    >
      Disconnect
    </button>
  );
}

export function Connect() {
  const context = useWeb3React();
  if (context.error) {
    window.alert(context.error);
  }

  return (
    <div>
      <Activate />
      <Deactivate />
    </div>
  );
}
