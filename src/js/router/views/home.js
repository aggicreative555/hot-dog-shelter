import { navToggler } from "../../utilities/navToggler";
import { buttonBase } from "../../ui/components/buttons/buttonTemplate";

function initializeHome() {
  navToggler();

  const container = document.getElementById("main");
  const linkEl = document.createElement("a");
  linkEl.classList.add("group");
  linkEl.appendChild(buttonBase({ type: "primary", label: "Adopt Now" }));

  container.appendChild(linkEl);
}

initializeHome();
