export default function FiltersRow(container, { regions, popFilters, activeRegion, activePop, onFilterRegion, onFilterPop }) {
  container.innerHTML = `
    <div class="flex flex-wrap gap-1.5 px-4 py-2.5 border-b border-border shrink-0">
      <div 
        class="cmd-filter-chip px-2.5 h-[26px] flex items-center bg-surface-mid border ${!activeRegion ? 'border-signal text-signal bg-signal-tint' : 'border-border text-text-secondary'} rounded-[13px] font-familjen text-[10px] font-medium tracking-widest cursor-pointer uppercase transition-all select-none hover:border-border-strong hover:text-text-primary"
        data-region=""
      >ALL</div>
      ${regions.map(r => `
        <div 
          class="cmd-filter-chip px-2.5 h-[26px] flex items-center bg-surface-mid border ${activeRegion === r ? 'border-signal text-signal bg-signal-tint' : 'border-border text-text-secondary'} rounded-[13px] font-familjen text-[10px] font-medium tracking-widest cursor-pointer uppercase transition-all select-none hover:border-border-strong hover:text-text-primary"
          data-region="${r}"
        >${r}</div>
      `).join('')}
      ${popFilters.map(p => `
        <div 
          class="cmd-filter-chip px-2.5 h-[26px] flex items-center bg-surface-mid border ${activePop === p.value ? 'border-signal text-signal bg-signal-tint' : 'border-border text-text-secondary'} rounded-[13px] font-familjen text-[10px] font-medium tracking-widest cursor-pointer uppercase transition-all select-none hover:border-border-strong hover:text-text-primary"
          data-pop="${p.value}"
        >${p.label}</div>
      `).join('')}
    </div>
  `

  container.querySelectorAll('[data-region]').forEach(chip => {
    chip.addEventListener('click', () => onFilterRegion(chip.dataset.region))
  })

  container.querySelectorAll('[data-pop]').forEach(chip => {
    chip.addEventListener('click', () => onFilterPop(parseInt(chip.dataset.pop, 10)))
  })
}
