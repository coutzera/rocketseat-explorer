import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js";

// Função para alternar entre o estado de execução e pausa
export function toggleRunning() {
  // Alterna a classe "running" na raiz do documento para refletir o estado de execução
  state.isRunning = document.documentElement.classList.toggle("running");

  // Chama a função 'countdown' do objeto 'timer' para iniciar ou pausar a contagem regressiva
  timer.countdown();
  sounds.buttonPressAudio.play();
}

// Função para redefinir o estado e a aparência do temporizador
export function reset() {
  // Define o estado de execução como falso
  state.isRunning = false;

  // Remove a classe "running" da raiz do documento para remover a aparência de execução
  document.documentElement.classList.remove("running");

  // Chama a função 'updateDisplay' do objeto 'timer' para atualizar a exibição do temporizador
  timer.updateDisplay();
  sounds.buttonPressAudio.play();
}

// Função de configuração (ainda não implementada)
export function set() {
  // Esta função pode ser implementada para configurar o temporizador com valores específicos
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus();
}

// Função para alternar o estado de som/música
export function toggleMusic() {
  // Alterna a classe "music-on" na raiz do documento para controlar o estado de som/música
  state.isMute = document.documentElement.classList.toggle("music-on");
  if (state.isMute) {
    sounds.bgAudio.play();
    return;
  }

  sounds.bgAudio.pause();
}
