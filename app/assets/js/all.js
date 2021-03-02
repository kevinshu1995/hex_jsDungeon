const dropdown = new Dropdown()

window.onload = () => {
    dropdown.init()
}

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
                child.find((child) => child.classList.contains('dropdown-list'))
                    .classList.toggle('block')
            })
        })
    }
}
