const btnPlus = document.querySelectorAll(".btnPlus")
const btnMinus = document.querySelectorAll(".btnMinus")
const num = document.querySelectorAll(".num")
const btnPlusAll = document.getElementById("btnPlusAll")
const btnMinusAll = document.getElementById("btnMinusAll")
const btnEqualZero = document.getElementById("btnEqualZero")

btnPlus.forEach((btn, index)=> {
    btn.addEventListener("click", () => {
        num[index].innerHTML = parseInt(num[index].innerHTML) + 1
    })
})
btnMinus.forEach((btn, index)=> {
    btn.addEventListener("click", () => {
        num[index].innerHTML = parseInt(num[index].innerHTML) - 1
    })
})


btnMinusAll.addEventListener("click", () => {
    num.forEach(item => {
        item.innerHTML = parseInt(item.innerHTML) - 1
    })
})

btnPlusAll.addEventListener("click", () => {
    num.forEach(item => {
        item.innerHTML = parseInt(item.innerHTML) + 1
    })
})

btnEqualZero.addEventListener("click", () => {
    num.forEach(item => {
        item.innerHTML = 0
    })
})