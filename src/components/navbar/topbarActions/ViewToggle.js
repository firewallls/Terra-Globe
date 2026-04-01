export default function ViewToggle(containerElement) {
    containerElement.innerHTML = `
    <div class="flex items-center gap-2">
      <button class="actionBtns px-3 sm:px-4 py-2 flex items-center justify-center font-familjen text-[10px] sm:text-ui-navitem uppercase text-text-primary hover:text-text-primary whitespace-nowrap">
        MAP
      </button>
      <div class="w-px h-5 bg-border mx-1 sm:mx-2"></div>

      <button class="actionBtns px-3 sm:px-4 py-2 flex items-center justify-center gap-1 sm:gap-1.5 font-familjen text-[10px] sm:text-ui-navitem uppercase text-text-secondary border-b-2 border-transparent hover:text-text-primary whitespace-nowrap">
        COMPARE
        <span class="hidden sm:flex items-center justify-center bg-signal text-text-on-accent text-[8px] sm:text-[9px] font-bold rounded-sm px-0.5 sm:px-1 py-0.5 min-w-[16px] sm:min-w-[18px] h-[14px] sm:h-[16px] font-mono tracking-normal shadow-marker">
          12
        </span>
      </button>
    </div>
  `;
}