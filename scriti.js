const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const day = document.getElementById('day')

var monthName = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Augusto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
]

const clock = setInterval(function time() {
    let today = new Date()
    let d = today.getDate()
    let m = today.getMonth()
    let y = today.getFullYear()
    let h = today.getHours()
    let min = today.getMinutes()
    let sec = today.getSeconds()

    day.innerHTML = `${d} ${monthName[m]} ${y}`
    hour.textContent = h
    minute.innerText = min
    second.innerText = sec

})