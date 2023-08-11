import state from "./state.js";
import * as el from "./elements.js";
import { reset } from "./actions.js";
import { kichenTimer } from "./sounds.js";

export function countdown() {
  // Verifica se o cronômetro está em execução
  if (!state.isRunning) {
    return; // Se não estiver em execução, retorna imediatamente
  }

  // Obtém os valores atuais de minutos e segundos a partir dos elementos DOM
  let minutes = parseInt(el.minutes.textContent);
  let seconds = parseInt(el.seconds.textContent);

  // Decrementa os segundos
  seconds--;

  // Verifica se os segundos estão abaixo de zero
  if (seconds < 0) {
    seconds = 59; // Reinicia os segundos para 59
    minutes--; // Decrementa os minutos
  }

  // Verifica se os minutos estão abaixo de zero
  if (minutes < 0) {
    reset();
    kichenTimer.play();
    return; // Se os minutos estiverem abaixo de zero, retorna e encerra a contagem
  }

  // Atualiza o display com os novos valores de minutos e segundos
  updateDisplay(minutes, seconds);

  // Configura um timeout para chamar recursivamente a função countdown após 1 segundo
  setTimeout(countdown, 1000);
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes;
  seconds = seconds ?? state.seconds;

  el.minutes.textContent = String(minutes).padStart(2, "0");
  el.seconds.textContent = String(seconds).padStart(2, "0");
}
