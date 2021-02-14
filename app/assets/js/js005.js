const xhr = new XMLHttpRequest()
xhr.addEventListener('load', (e) => {
    console.log(e)
})
xhr.open('GET', 'https://opendata.epa.gov.tw/api/v1/ATM00679')
xhr.send()
