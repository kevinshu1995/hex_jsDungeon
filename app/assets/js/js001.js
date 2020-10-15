let mainList = document.getElementById('mainList')
let chartNum = 8
let strInner = ''
window.onload = function () {
    updateList()
}

function updateList() {
    //title
    let strOut = `
    <li class="l-card-title">
    	<h1>九九乘法表</h1>
    	<h2>MULTIPLICATION CHART</h2>
    </li>
    `
    for (let i = 0; i < chartNum; i++) {
        innerList(i + 2)
        strOut += `<li class="l-card">
     					<ul class="l-card__wrap">
        					<li class="l-card__title">${i + 2}</li>
        					${strInner}
      					</ul>
    				</li>`
        strInner = ''
    }
    mainList.innerHTML = strOut || ''
}

function innerList(num) {
    for (let j = 0; j < 9; j++) {
        strInner += `<li>${num}x${j + 1}=${num * (j + 1)}</li>`
    }
}
