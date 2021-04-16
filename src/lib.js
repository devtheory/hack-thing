

google.addEventListener('onmouseover', () => {
  console.log("HOVERRR")
})

google.addEventListener('onmouseexit', () => {
  console.log("PECE")
})

google.hover(() => {
  google.css('opacity', '.5')
}, () => {
  google.css('opacity', '.3')
})
