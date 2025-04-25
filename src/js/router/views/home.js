import { navToggler } from "../../utilities/navToggler";
import { buttonBase } from "../../ui/components/buttons/buttonTemplate";
import { signUpCard } from "../../ui/components/post/signUpCard";

function initializeHome() {
  navToggler();

  signUpCard();
}

initializeHome();
