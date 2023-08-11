import state from "./state.js";
import * as events from "./events.js";
// import * as timer from "./timer.js";

// Função para iniciar o temporizador com os minutos e segundos especificados
export function start(minutes, seconds) {
  // Define os minutos e segundos no objeto de estado
  state.minutes = minutes;
  state.seconds = seconds;
  // Registra os eventos de controle para interagir com o temporizador
  events.registerControls();
}
