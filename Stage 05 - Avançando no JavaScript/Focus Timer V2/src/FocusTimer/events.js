import state from "./state.js";
import { controls } from "./elements.js";
import * as actions from "./actions.js";
import * as el from "./elements.js";
import { updateDisplay } from "./timer.js";

export function registerControls() {
  // Adiciona um ouvinte de evento de clique ao elemento de controles
  controls.addEventListener("click", (event) => {
    // Obtém a ação associada ao elemento clicado usando o atributo de dataset
    const action = event.target.dataset.action;

    // Verifica se a ação é uma função válida no objeto 'actions'
    if (typeof actions[action] != "function") {
      return; // Se a ação não for uma função válida, sai imediatamente
    }

    // Chama a função associada à ação no objeto 'actions'
    actions[action]();
  });
}

export function setMinutes() {
  // Limpar o conteúdo ao focar no elemento de minutos
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = "";
  });

  // Aceitar apenas dígitos ao pressionar teclas
  el.minutes.onkeypress = (event) => /\d/.test(event.key);

  // Atualizar os minutos e segundos após perder o foco
  el.minutes.addEventListener("blur", (event) => {
    const inputMinutes = parseInt(event.currentTarget.textContent);
    const validMinutes = Math.min(inputMinutes, 60);

    state.minutes = validMinutes;
    state.seconds = 0;

    updateDisplay();
    el.minutes.removeAttribute("contenteditable");
  });
}
