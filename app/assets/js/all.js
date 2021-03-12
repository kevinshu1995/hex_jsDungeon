import SwiperCore, { Pagination, Autoplay, Lazy } from 'swiper/core'
SwiperCore.use([Pagination, Autoplay, Lazy])

const swiper = new SwiperCore('.swiper-container', {
    lazy: true,
    autoplay: {
        stopOnLastSlide: true,
    },
    breakpoints: {
        slidesPerView: 1,
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
    pagination: {
        el: '.swiper-pagination',
    },
})
const dropdown = new Dropdown()

dropdown.init()

function Dropdown(option = {}) {
    this.el_dropdowns = document.querySelectorAll('.dropdown')
    this.el_dropdownsList = document.querySelectorAll('.dropdown-list')

    this.init = function () {
        this.dropdowns()
    }

    this.dropdowns = function () {
        if (this.el_dropdowns.length <= 0 || this.el_dropdownsList <= 0) return
        this.el_dropdowns.forEach((el_dropdown) => {
            el_dropdown.addEventListener('click', function (e) {
                const child = [...this.children]
                child
                    .find((child) => child.classList.contains('dropdown-list'))
                    .classList.toggle('dropdown-show')
            })
        })
    }
}
