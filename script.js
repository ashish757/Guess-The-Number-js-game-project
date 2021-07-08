const select = (query) => document.querySelector(query)
let input =  select(".form .input input")
let won =  select(".won")
let form =  select(".form")
let tries = select(".tries")
let errorMsg = select(".input-error-check")
let hint = select('.hint p')
let answer = Math.ceil(Math.random() * 99)
let trial = 0

select("#check").addEventListener('click', () => {
    if (!Number(input.value)) errorMsg.classList.add('show')
    else {
        errorMsg.classList.remove('show')
       
        trial++
        let inputNumber = Number(input.value) // this is the user's entered number
        if (inputNumber > answer) {
            hint.innerHTML = "you need to guess a <span>smaller</span> number"
        }
        else if (inputNumber < answer) {
            hint.innerHTML = "you need to guess a <span>greater</span> number"
        }
        if (inputNumber === answer) {
            won.classList.add("show")
            form.classList.add("hide")
            tries.innerText = trial
        }
        input.value = ''
    }
})

select("#replay").addEventListener('click', () => {
    answer = Math.ceil(Math.random() * 99)
    trial = 0
    won.classList.remove("show")
    form.classList.remove("hide")
})