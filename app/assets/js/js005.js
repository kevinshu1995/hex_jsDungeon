const countyAQI = new CountyAQI()
countyAQI.init()
function CountyAQI() {
    const vm = this
    let DATA = null

    this.init = () => {
        vm.getData().then((result) => {
            console.log('response data', result)
            DATA = vm.get_filteredCounties(result.records)
            vm.setDom_fillSelectOptions()
        })
        document
            .getElementById('county')
            .addEventListener('change', function (e) {
                vm.fillCountyData(e)
            })
        document
            .getElementById('selectedCountySiteList')
            .addEventListener('click', function (e) {
                vm.switchCurrentDisplayCountySite(e)
            })
    }

    this.getData = async function () {
        // * 資料來源 (後面是避開快取)
        const url =
            'https://data.epa.gov.tw/api/v1/aqx_p_432?api_key=efdc6239-d8be-4415-9515-fbbf072aadf4'
        const api = `${url}${/\?/.test(url) ? '&' : '?'}${new Date().getTime()}`
        return await fetch(api)
            .then((res) => res.json())
            .catch((err) => {
                console.error(err)
                vm.fetchErrorHandler()
            })
    }

    this.fillCountyData = (e) => {
        const value = e.target.value
        if (!value || !DATA) return
        const result = DATA[value].sort((a, b) => b.AQI - a.AQI)
        vm.set_county(value)
        vm.setTextContent_selectedCountySite(DATA[value][0])
        vm.setDom_SelectedList(result)
        vm.setTextContent_selectedCounty(DATA[value][0])
    }

    this.switchCurrentDisplayCountySite = (e) => {
        const allData = DATA[document.getElementById('county').value]
        const selectedTarget = e.target.closest('[data-siteid]')
        if (selectedTarget) {
            const targetData = allData.find(
                (data) => data.SiteId === selectedTarget.dataset.siteid
            )
            vm.setTextContent_selectedCountySite(targetData)
        }
    }

    this.fetchErrorHandler = () => {
        const error = document.getElementById('errorText')
        error.classList.remove('hidden')
    }

    this.get_filteredCounties = (allData = {}) => {
        return allData.reduce((accumulator, current) => {
            const current_county = current.County
            accumulator[current_county] === undefined
                ? (accumulator[current_county] = [current])
                : accumulator[current_county].push(current)
            return accumulator
        }, {})
    }

    this.setDom_fillSelectOptions = () => {
        if (!DATA) return
        const counties = Object.keys(DATA)
        const el_select = document.getElementById('county')
        const fragment = document.createDocumentFragment()
        counties.forEach((county) => {
            const el_option = document.createElement('option')
            ;[el_option.textContent, el_option.value] = [county, county]
            fragment.appendChild(el_option)
        })
        el_select.appendChild(fragment)
    }

    this.set_county = (current_county_text) => {
        document.getElementById(
            'current_county'
        ).textContent = current_county_text
    }

    this.setDom_SelectedList = (AllCountyData = []) => {
        const fragment = document.createDocumentFragment()
        AllCountyData.forEach((item) => {
            const div = document.createElement('div')
            div.classList.add('col', 'mb-4', 'w-full', 'sm:w-1/2')
            div.dataset['siteid'] = item.SiteId
            const div_inside = document.createElement('div')
            div_inside.classList.add('countyWrap', 'border-2')
            const county = document.createElement('h4')
            county.classList.add('countyWrap__county')
            county.textContent = item.SiteName
            const value = document.createElement('p')
            value.classList.add('countyWrap__value', vm.get_BgClass(item.AQI))
            value.textContent = item.AQI

            div_inside.appendChild(county)
            div_inside.appendChild(value)
            div.appendChild(div_inside)
            fragment.appendChild(div)
        })
        document.getElementById('selectedCountySiteList').innerHTML = ''
        document.getElementById('selectedCountySiteList').appendChild(fragment)
    }

    this.setTextContent_selectedCounty = (current_county_data = {}) => {
        const el_wrap = document.getElementById('selectedCounty')
        const el_county = document.getElementById('current_county')
        const el_time = document.getElementById('updateTime')
        el_wrap.classList.remove('opacity-0')
        el_county.textContent = current_county_data.County
        el_time.textContent = current_county_data.PublishTime
    }

    this.setTextContent_selectedCountySite = (current_county_data = {}) => {
        document
            .querySelector('#selectedCountySite')
            .classList.remove('opacity-0')
        const el_county = document.querySelector(
            '#selectedCountySite .countyWrap__county'
        )
        const el_value = document.querySelector(
            '#selectedCountySite .countyWrap__value'
        )
        const el_O3 = document.querySelector('#value_O3')
        const el_PM10 = document.querySelector('#value_PM10')
        const el_PM25 = document.querySelector('#value_PM25')
        const el_CO = document.querySelector('#value_CO')
        const el_SO2 = document.querySelector('#value_SO2')
        const el_NO2 = document.querySelector('#value_NO2')

        const emptyValue = '-'
        ;[
            el_county.textContent,
            el_value.textContent,
            el_O3.textContent,
            el_PM10.textContent,
            el_PM25.textContent,
            el_CO.textContent,
            el_SO2.textContent,
            el_NO2.textContent,
        ] = [
            current_county_data.SiteName,
            current_county_data.AQI || emptyValue,
            current_county_data.O3 || emptyValue,
            current_county_data.PM10 || emptyValue,
            current_county_data['PM2.5'] || emptyValue,
            current_county_data.CO || emptyValue,
            current_county_data.SO2 || emptyValue,
            current_county_data.NO2 || emptyValue,
        ]
        el_value.classList.forEach((el_value_class) => {
            if (el_value_class !== 'countyWrap__value')
                el_value.classList.remove(el_value_class)
        })
        if (current_county_data.AQI)
            el_value.classList.add(vm.get_BgClass(current_county_data.AQI))
    }

    this.get_BgClass = (aqi) => {
        const statusColor = [
            {
                class: 'bg-level-1',
                range: [0, 50],
            },
            {
                class: 'bg-level-2',
                range: [51, 100],
            },
            {
                class: 'bg-level-3',
                range: [101, 150],
            },
            {
                class: 'bg-level-4',
                range: [151, 200],
            },
            {
                class: 'bg-level-5',
                range: [201, 300],
            },
            {
                class: 'bg-level-6',
                range: [301, 400],
            },
        ]
        const result = statusColor.find((item) => {
            return item.range[0] < aqi && item.range[1] > aqi
        })
        return result === undefined ? '' : result.class
    }
}
