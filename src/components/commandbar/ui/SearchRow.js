export default function SearchRow(container, { onInput, onClose }) {
  if (container.children.length === 0) {
    container.innerHTML = `
      <div class="flex items-center gap-2.5 px-4 h-[52px] border-b border-border shrink-0">
        <span class="text-signal text-base shrink-0">⌕</span>
        <input
          id="cmd-input"
          type="text"
          class="flex-1 bg-transparent border-none outline-none font-familjen text-[15px] text-text-primary min-w-0 placeholder:text-text-tertiary"
          placeholder="Search country, capital or region…"
          autocomplete="off"
          spellcheck="false"
        >
        <span id="cmd-esc-badge" class="px-1.5 py-0.5 bg-surface-mid border border-border-strong rounded-[3px] font-azeret-mono text-[9px] tracking-widest text-text-tertiary cursor-pointer shrink-0 select-none transition-colors hover:text-text-secondary">
          ESC
        </span>
      </div>
    `
    
    container.querySelector('#cmd-input').addEventListener('input', e => onInput(e.target.value))
    container.querySelector('#cmd-esc-badge').addEventListener('click', onClose)
  }
}
