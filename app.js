let body = document.querySelector('body')
let heading = document.createElement('h1')
let div =document.createElement('div')

heading.innerText ='Quote of the day'
heading.style.marginLeft ='43%'
body.appendChild(heading)

body.appendChild(div)
div.style.width ='30vw'
div.style.height ='8vh'
div.style.border ='1px solid gray'
div.style.borderRadius ='25px'
div.style.margin ='auto'
div.style.display ='flex'
div.style.justifyContent ='center'
div.style.alignItems = 'center'


let divButton = document.createElement('div')
divButton.innerHTML = `Random Quote`
divButton.style.width ='200px'
divButton.style.marginLeft = '44%'
divButton.style.height ='50px'
divButton.style.color ='white'
divButton.style.backgroundColor ='gray'
divButton.style.borderRadius ='25px'
divButton.style.marginTop ='50px'

divButton.style.display ='flex'
divButton.style.justifyContent ='center'
divButton.style.alignItems = 'center'
body.appendChild(divButton)

console.log(Math.floor(Math.random()*4))

divButton.addEventListener('click', ()=>{
    let random = Math.floor(Math.random()*4)
    if(random === 0){
        div.innerText ='Life is easy to enjoy'
    }
     else if(random ===1){
        div.innerText ='You will never walk alone'
    } else if( random ===2){
        div.innerText ='Better regret of trying'
    } else{
        div.innerText ='Racism can be healed reading'
    }
})


