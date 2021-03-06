export const handleCopy = (calculations, csvSeparator) => {
  const toCsv = (obj) =>
    Object.keys(obj).reduce(
      (acc, key) => `${acc}${obj[key]}${csvSeparator}`,
      ''
    )
  const copy = function (e) {
    e.preventDefault()
    const text = toCsv(calculations)
    console.log({ m: 'handleCopy', text })
    if (e.clipboardData) {
      e.clipboardData.setData('text/plain', text)
    } else if (window.clipboardData) {
      window.clipboardData.setData('Text', text)
    }
  }

  window.addEventListener('copy', copy)
  document.execCommand('copy')
  window.removeEventListener('copy', copy)
}

export const monthlyDollars = (n) => (isNaN(n) ? 'N/A' : `$${n.toLocaleString()}/mo`)

export const dollars = (n) => (isNaN(n) ? 'N/A' : `$${n.toLocaleString()}`)