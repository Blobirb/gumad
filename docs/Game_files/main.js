var Engine = null;
var Game = null;
var Utils = null;

function startGame() {
    Engine = document.getElementById("gameFrame").contentWindow.Engine;
    Game = document.getElementById("gameFrame").contentWindow.Game;
    Utils = document.getElementById("gameFrame").contentWindow.Utils;

    Game.DYNAMIC_REPEAT_FIX = false;

    Engine.System.run();
}
window.onload = startGame;