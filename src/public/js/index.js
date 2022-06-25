let projects = document.getElementsByClassName('testes_p')
let mcImg1 = document.getElementById('mc-1-id')

let mcImgHeight = mcImg1.offsetTop;

let divTMc = document.getElementById('div-title-mc')


// window.onload = ()=>{
//     mcImg1.addEventListener('click', ()=>{
//         // location('http://localhost:3000/web-motors')
//         alert('salve')
//     })
// }
divTMc.addEventListener('click', ()=>{
    window.location = 'http://localhost:3000/web-motors'
    // alert('salve')
    // window.open('http://localhost:3000/web-motors')
})


// let teste = 3;

// console.log(mcImgHeight.toString() + 'px')

// projects[0].style.top = mcImgHeight.toString() + 'px'
// projects[0].style.top = '-50vh'

