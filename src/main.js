import './style.css'
import StarsField from './starfield.js'
import Navbar from "./components/Navbar.js";
document.querySelector('#app').innerHTML = `
  <canvas id="starCanvas" style="width: 100vw; height: 100vh; overflow: hidden"></canvas>
  <nav id="navbar" class="bg-overlay-topbar tex"></nav>
`

StarsField(document.getElementById('starCanvas'));
Navbar(document.getElementById('navbar'));