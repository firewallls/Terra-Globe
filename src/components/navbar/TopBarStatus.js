export default function TopBarStatus(containerElement) {
    containerElement.innerHTML = `
    <div class="flex items-center gap-1 sm:gap-2">
      <div class="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green pulse-dot" style="box-shadow: 0 0 4px var(--color-green-tint);"></div>
      <span class="font-azeret-mono text-[8px] sm:text-ui-label tracking-[1.5px] sm:tracking-[2px] text-text-secondary uppercase whitespace-nowrap">
        195 COUNTRIES  ·  LIVE DATA
      </span>
    </div>
  `;
}