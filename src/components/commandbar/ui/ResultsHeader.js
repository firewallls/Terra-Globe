export default function ResultsHeader(container, { count }) {
  container.innerHTML = `
    <div class="flex justify-between items-center px-4 pt-2 pb-1 shrink-0">
      <span class="font-azeret-mono text-[9px] font-light tracking-[0.15em] text-text-tertiary uppercase">Results</span>
      <span id="cmd-results-count" class="font-azeret-mono text-[10px] text-text-secondary">
        ${count} ${count === 1 ? 'country' : 'countries'}
      </span>
    </div>
  `
}
