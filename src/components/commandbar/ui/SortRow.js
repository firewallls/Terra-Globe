export default function SortRow(container, { sortOptions, currentSort, onSort }) {
  container.innerHTML = `
    <div class="flex items-center px-4 h-[38px] border-b border-border shrink-0 gap-0">
      <div class="font-azeret-mono text-[9px] font-light tracking-[0.15em] text-text-tertiary uppercase mr-3 shrink-0">Sort:</div>
      ${sortOptions.map(s => `
        <div 
          class="px-2.5 h-[38px] flex items-center font-familjen text-[10px] font-bold tracking-widest uppercase cursor-pointer relative transition-colors select-none shrink-0 ${currentSort === s.value ? 'text-text-primary' : 'text-text-tertiary hover:text-text-secondary text-text-tertiary'}"
          data-sort="${s.value}"
        >
          ${s.label}
          ${currentSort === s.value ? '<div class="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-signal rounded-sm"></div>' : ''}
        </div>
      `).join('')}
    </div>
  `

  container.querySelectorAll('[data-sort]').forEach(item => {
    item.addEventListener('click', () => onSort(item.dataset.sort))
  })
}
