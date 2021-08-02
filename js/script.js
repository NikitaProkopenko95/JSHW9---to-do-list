let input  = document.querySelector('#input');
let btn  = document.querySelector('#btn');
let result  = document.querySelector('#result');


btn.addEventListener('click', (e) => {
    if(input.value === "") return
    createDelElem(input.value)
    input.value = ''; 
})

let input1 = document.getElementById('input')
    input.addEventListener('keyup', function(e) {
    if(e.keyCode == 13) {
        createDelElem(input.value)
        input.value = '';
    }
})

function createDelElem(value) {
    let li = document.createElement('li')
    let btn = document.createElement('button')
    let btnRed = document.createElement('button')

    li.className = 'li'
    li.textContent = value

    btnRed.className = 'btnRed'
    btnRed.textContent = 'Готово'
    li.appendChild(btnRed)

    btn.className = 'btn'
    btn.textContent = 'Удалить'
    li.appendChild(btn)
    
    btn.addEventListener('click', (e) => {
        result.removeChild(li)
    })

    li.addEventListener('click', (e) => {
        li.classList.toggle('li_active')
    })

    result.appendChild(li)
}
