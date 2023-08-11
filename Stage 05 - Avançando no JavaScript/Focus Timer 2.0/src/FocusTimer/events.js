import * as el from "./elements.js";
import * as actions from "./actions.js";

export function registerControls() {
  el.controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    if (typeof actions[action] != "function") {
      return;
    }
    actions[action]();
  });

  el.cards.addEventListener("click", (event) => {
    const type = event.target.dataset.type;
    if (typeof actions[type] != "function") {
      return;
    }

    actions[type]();
  });
}
