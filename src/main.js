import './style.css'
import StarsField from './Starfield.js'
import Navbar from "./components/navbar/Navbar.js";
import CommandBar from "./components/commandbar/CommandBar.js";

document.querySelector('#app').innerHTML = `
  <canvas id="starCanvas" style="width: 100vw; height: 100vh; overflow: hidden"></canvas>
  <nav id="navbar"></nav>
  <div id="commandbar-mount"></div>
`

StarsField(document.getElementById('starCanvas'));
Navbar(document.getElementById('navbar'));
CommandBar(document.getElementById('commandbar-mount'));