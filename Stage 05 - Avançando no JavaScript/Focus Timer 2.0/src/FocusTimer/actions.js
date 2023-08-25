import state from "./state.js";
import * as timer from "./timer.js";

export function start() {
  state.isRunning = document.documentElement.classList.add("running");

  timer.countDown();
}

export function stop() {
  state.isRunning = document.documentElement.classList.remove("running");
}

export function volup() {
  console.log("Aumentando o tempo");
}

export function voldown() {
  console.log("Baixando o tempo");
}

export function nature() {
  document.body.style.backgroundColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--nature-background-color");
  document.getElementById("nature").classList.toggle("nature");
}

export function rain() {
  document.body.style.backgroundColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--rain-background-color");
  document.getElementById("rain").classList.toggle("rain");
}

export function store() {
  document.body.style.backgroundColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--store-background-color");
  document.getElementById("store").classList.toggle("store");
}

export function fire() {
  document.body.style.backgroundColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--fire-background-color");
  document.getElementById("fire").classList.toggle("fire");
}
