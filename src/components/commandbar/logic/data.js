export const formatNum = n => {
  if (!n) return '—'
  if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(1) + 'B'
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M'
  if (n >= 1_000) return (n / 1_000).toFixed(0) + 'K'
  return n.toString()
}

export const loadCountries = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,population,area,cca3,flag')
  return res.json()
}
