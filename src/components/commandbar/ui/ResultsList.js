import { formatNum } from '../logic/data.js'

export default function ResultsList(container, { countries, isLoading, searchQuery }) {
  if (isLoading) {
    container.innerHTML = `<div class="p-8 text-center font-azeret-mono text-[11px] tracking-widest text-text-tertiary">Loading countries…</div>`
    return
  }

  if (countries.length === 0) {
    container.innerHTML = `<div class="p-8 text-center font-azeret-mono text-[11px] tracking-widest text-text-tertiary">No results for "<em>${searchQuery}</em>"</div>`
    return
  }

  container.innerHTML = `
    <div id="cmd-results-list" class="overflow-y-auto flex-1 h-full scroll-smooth scrollbar-thin scrollbar-thumb-signal-tint">
      ${countries.map(c => `
        <div class="group flex items-center gap-3 px-4 h-[52px] cursor-pointer relative transition-colors border-b border-border last:border-none hover:bg-signal-tint" data-cca3="${c.cca3}">
          <div class="absolute left-0 top-0 bottom-0 w-[3px] bg-signal origin-left scale-x-0 transition-transform group-hover:scale-x-100"></div>
          <span class="text-lg w-6 text-center shrink-0">${c.flag || '🌐'}</span>
          <div class="flex-1 min-w-0">
            <div class="font-familjen text-[13px] font-medium text-text-primary truncate">${c.name?.common || '—'}</div>
            <div class="font-azeret-mono text-[10px] font-light text-text-secondary tracking-widest">${c.capital?.[0] || '—'} · ${c.region || '—'}</div>
          </div>
          <span class="font-azeret-mono text-[11px] font-light text-text-tertiary shrink-0">${formatNum(c.population)}</span>
        </div>
      `).join('')}
    </div>
  `
}
