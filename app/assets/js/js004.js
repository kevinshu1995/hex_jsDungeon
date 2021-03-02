function getTime(){
    let location = document.querySelectorAll('.location')
    let dateText = document.querySelectorAll('.date')
    let timeText = document.querySelectorAll('.time')

    let timezone = {
        'NEW YORK': 'America/New_York',
        'LONDON': 'Europe/London',
        'BANGKOK': 'Asia/Bangkok',
        'TAIWAN': 'Asia/Taipei',
        'SYDNEY': 'Australia/Sydney',
    }

    location.forEach( (item, index) => {
        timeText[index].textContent = currentTime(timezone[item.textContent]).time
        dateText[index].textContent = `${currentTime(timezone[item.textContent]).date} ${currentTime(timezone[item.textContent]).year}`
    })
}

function currentTime(timeZone){
    let locale = 'en-US'
    let options_YYYY = {
        timeZone,
        year : 'numeric',
    }
    let options_HHMM = {
        timeZone,
        hour12 : false,
        hour: 'numeric',
        minute: '2-digit'
    }
    let options_MMDD = {
        timeZone,
        month : 'short',
        day : 'numeric',
    }
    return {
        year: new Date().toLocaleString(locale, options_YYYY),
        date: new Date().toLocaleString(locale, options_MMDD),
        time: new Date().toLocaleString(locale, options_HHMM),
    }
}

getTime()
window.setInterval('getTime();', 1000)