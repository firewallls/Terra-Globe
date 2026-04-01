export const getFiltered = (countries, filter, sort) => {
  const q = filter.search.trim().toLowerCase()
  
  return countries
    .filter(c => {
      if (filter.region && c.region !== filter.region) return false
      if (filter.pop && (c.population || 0) < filter.pop) return false
      if (!q) return true
      
      const name = (c.name?.common || '').toLowerCase()
      const capital = (c.capital?.[0] || '').toLowerCase()
      const region = (c.region || '').toLowerCase()
      
      return name.includes(q) || capital.includes(q) || region.includes(q)
    })
    .sort((a, b) => {
      const sorts = {
        'pop-desc': () => (b.population || 0) - (a.population || 0),
        'pop-asc': () => (a.population || 0) - (b.population || 0),
        'area-desc': () => (b.area || 0) - (a.area || 0),
        'default': () => (a.name?.common || '').localeCompare(b.name?.common || '')
      }
      return (sorts[sort] || sorts['default'])()
    })
}
