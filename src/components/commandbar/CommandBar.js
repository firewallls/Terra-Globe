import { loadCountries } from './logic/data.js'
import { getFiltered } from './logic/filtering.js'
import SearchRow from './ui/SearchRow.js'
import FiltersRow from './ui/FiltersRow.js'
import SortRow from './ui/SortRow.js'
import ResultsHeader from './ui/ResultsHeader.js'
import ResultsList from './ui/ResultsList.js'

let allCountries = []
let currentFilter = { search: '', region: '', pop: 0 }
let currentSort = 'name'
let isOpen = false
let dataLoaded = false
let debounceTimer = null

const REGIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
const POP_FILTERS = [
  { label: '1M+ Pop', value: 1_000_000 },
  { label: '100M+ Pop', value: 100_000_000 }
]
const SORT_OPTIONS = [
  { label: 'Name', value: 'name' },
  { label: 'Pop ↓', value: 'pop-desc' },
  { label: 'Pop ↑', value: 'pop-asc' },
  { label: 'Area ↓', value: 'area-desc' }
]

const render = () => {
  const bar = document.getElementById('command-bar')
  if (!bar) return

  const filtered = getFiltered(allCountries, currentFilter, currentSort)
  
  SearchRow(bar.querySelector('#cmd-search-container'), {
    onInput: val => {
      clearTimeout(debounceTimer)
      debounceTimer = setTimeout(() => {
        currentFilter.search = val
        render()
      }, 240)
    },
    onClose: closeCommandBar
  })

  FiltersRow(bar.querySelector('#cmd-filters-container'), {
    regions: REGIONS,
    popFilters: POP_FILTERS,
    activeRegion: currentFilter.region,
    activePop: currentFilter.pop,
    onFilterRegion: region => {
      currentFilter.region = region
      currentFilter.pop = 0
      render()
    },
    onFilterPop: pop => {
      currentFilter.pop = currentFilter.pop === pop ? 0 : pop
      currentFilter.region = ''
      render()
    }
  })

  SortRow(bar.querySelector('#cmd-sort-container'), {
    sortOptions: SORT_OPTIONS,
    currentSort,
    onSort: sort => {
      currentSort = sort
      render()
    }
  })

  ResultsHeader(bar.querySelector('#cmd-results-header-container'), {
    count: filtered.length
  })

  ResultsList(bar.querySelector('#cmd-results-list-container'), {
    countries: filtered,
    isLoading: !dataLoaded,
    searchQuery: currentFilter.search
  })
  
  const input = document.getElementById('cmd-input')
  if (input && input.value !== currentFilter.search) {
     input.value = currentFilter.search
  }
}

export const openCommandBar = () => {
  isOpen = true
  const bar = document.getElementById('command-bar')
  if (!bar) return
  
  bar.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-4', 'scale-[0.97]')
  bar.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0', 'scale-100')
  
  const accent = bar.querySelector('.cmd-accent-line')
  accent.classList.add('scale-x-100')
  
  const input = document.getElementById('cmd-input')
  if (input) { input.focus(); input.select(); }
}

export const closeCommandBar = () => {
  isOpen = false
  const bar = document.getElementById('command-bar')
  if (!bar) return
  
  bar.classList.add('opacity-0', 'pointer-events-none', '-translate-y-4', 'scale-[0.97]')
  bar.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0', 'scale-100')
  
  bar.querySelector('.cmd-accent-line').classList.remove('scale-x-100')
}

export const toggleCommandBar = () => isOpen ? closeCommandBar() : openCommandBar()

export default function CommandBar(mountEl) {
  mountEl.innerHTML = `
    <div id="command-bar" class="fixed top-16 left-1/2 -translate-x-1/2 -translate-y-4 scale-[0.97] w-[min(560px,calc(100vw-32px))] max-h-[min(620px,calc(100vh-96px))] bg-overlay-command backdrop-blur-command border border-border rounded-default shadow-command z-[300] opacity-0 pointer-events-none flex flex-col overflow-hidden transition-all duration-300 ease-out">
      <div class="cmd-accent-line h-0.5 bg-gradient-to-r from-signal via-[rgba(0,229,255,0.25)] to-transparent shrink-0 origin-left scale-x-0 transition-transform duration-[350ms] delay-75 ease-out"></div>
      <div id="cmd-search-container"></div>
      <div id="cmd-filters-container"></div>
      <div id="cmd-sort-container"></div>
      <div id="cmd-results-header-container"></div>
      <div id="cmd-results-list-container" class="flex-1 overflow-hidden"></div>
    </div>
  `

  render()

  loadCountries()
    .then(data => {
      allCountries = data
      dataLoaded = true
      render()
    })
    .catch(() => {
      dataLoaded = true
      render()
    })

  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      toggleCommandBar()
    }
    if (e.key === 'Escape' && isOpen) closeCommandBar()
  })

  document.addEventListener('mousedown', e => {
    const bar = document.getElementById('command-bar')
    if (bar && !bar.contains(e.target) && !e.target.closest('.search-icon-hover')) {
      closeCommandBar()
    }
  })
}
