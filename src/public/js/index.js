
let p1 = document.getElementsByClassName('p_1')
let p2 = document.getElementsByClassName('p_2')
let p3 = document.getElementsByClassName('p_3')


//VIGOR

let divVigor = document.getElementById('div-vigor')

divVigor.addEventListener('click', ()=>{
    window.location = 'http://localhost:3000/web-motors'
    // window.open('http://localhost:3000/web-motors')
})

window.onload = ()=>{
    let n = window.innerWidth / 187.5
    let s = n.toString()
    console.log(s)
    let n2 = n * 0.375
    let s2 = n2.toString() 

    p1[0].style.fontSize = s + 'rem'
    p2[0].style.fontSize = s2 + 'rem'
    p3[0].style.fontSize = s2 + 'rem'
    p1[1].style.fontSize = s + 'rem'
    p2[1].style.fontSize = s2 + 'rem'
    p3[1].style.fontSize = s2 + 'rem'
    p1[2].style.fontSize = s + 'rem'
    p2[2].style.fontSize = s2 + 'rem'
    p3[2].style.fontSize = s2 + 'rem'
    p1[3].style.fontSize = s + 'rem'
    p2[3].style.fontSize = s2 + 'rem'
    p3[3].style.fontSize = s2 + 'rem'
    p1[6].style.fontSize = s + 'rem'
    p2[6].style.fontSize = s2 + 'rem'
    p3[6].style.fontSize = s2 + 'rem'
    p1[7].style.fontSize = s + 'rem'
    p2[7].style.fontSize = s2 + 'rem'
    p3[7].style.fontSize = s2 + 'rem'
    p1[9].style.fontSize = s + 'rem'
    p2[9].style.fontSize = s2 + 'rem'
    p3[9].style.fontSize = s2 + 'rem'
}

window.onresize = ()=>{
    
    let n = window.innerWidth / 187.5
    let s = n.toString()
    let n2 = n * 0.375
    let s2 = n2.toString() 

    p1[0].style.fontSize = s + 'rem'
    p2[0].style.fontSize = s2 + 'rem'
    p3[0].style.fontSize = s2 + 'rem'
    p1[1].style.fontSize = s + 'rem'
    p2[1].style.fontSize = s2 + 'rem'
    p3[1].style.fontSize = s2 + 'rem'
    p1[2].style.fontSize = s + 'rem'
    p2[2].style.fontSize = s2 + 'rem'
    p3[2].style.fontSize = s2 + 'rem'
    p1[3].style.fontSize = s + 'rem'
    p2[3].style.fontSize = s2 + 'rem'
    p3[3].style.fontSize = s2 + 'rem'
    p1[6].style.fontSize = s + 'rem'
    p2[6].style.fontSize = s2 + 'rem'
    p3[6].style.fontSize = s2 + 'rem'
    p1[7].style.fontSize = s + 'rem'
    p2[7].style.fontSize = s2 + 'rem'
    p3[7].style.fontSize = s2 + 'rem'
    p1[9].style.fontSize = s + 'rem'
    p2[9].style.fontSize = s2 + 'rem'
    p3[9].style.fontSize = s2 + 'rem'
}





