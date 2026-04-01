import ViewToggle from './ViewToggle.js';
import { toggleCommandBar } from '../../commandbar/CommandBar.js';

export default function TopBarActions(containerElement) {
    containerElement.innerHTML = `
    <div class="flex items-center gap-2.5">
      <div id="navbar-view-toggle" class="flex items-center"></div>
      <div class="tooltip flex items-center justify-center px-2" id="search-trigger">
          <span class="font-familjen text-[18px] text-text-secondary cursor-pointer transition-colors duration-200 search-icon-hover">
            ⌕
          </span>
          <span class="tooltip-text">⌘+K to search</span>
      </div>
    </div>
  `;

    const viewToggleContainer = containerElement.querySelector('#navbar-view-toggle');
    ViewToggle(viewToggleContainer);

    containerElement.querySelector('#search-trigger').addEventListener('click', () => {
        toggleCommandBar();
    });
}