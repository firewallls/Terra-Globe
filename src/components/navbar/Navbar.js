import TopBarActions from "./topbarActions/TopBarActions.js";
import TopBarStatus from "./TopBarStatus.js";

export default function Navbar(containerElement) {
    containerElement.style.zIndex = '1';
    const classes = `fixed top-0 left-0 right-0 h-[5.34vh] min-h-[48px] grid grid-cols-[1fr_auto_1fr] items-stretch px-4 sm:px-6 bg-overlay-topbar backdrop-blur-topbar shadow-topbar text-text-primary font-sans z-[200]`

    containerElement.innerHTML = `
    <div class="${classes}">
            <div id="navbar-logo" class="flex items-center justify-start min-w-0">
                <span class="font-bebas text-[18px] sm:text-[22px] tracking-[6px] sm:tracking-[8px] text-text-primary whitespace-nowrap overflow-hidden text-ellipsis">
                    TERRA
                </span>
            </div>
            <div id="navbar-status" class="hidden sm:flex items-center justify-center min-w-0 px-2 overflow-hidden"></div>
            <div id="navbar-actions" class="flex items-center justify-end min-w-0"></div>
            <div class="absolute bottom-0 left-0 w-full h-px bg-border"></div>
    </div>
  `;

    const statusContainer = containerElement.querySelector('#navbar-status');
    const actionsContainer = containerElement.querySelector('#navbar-actions');

    TopBarStatus(statusContainer);
    TopBarActions(actionsContainer);
}