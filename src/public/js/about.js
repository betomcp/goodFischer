let loopImg = document.getElementById('img-loop')
let imgLoopHeight = parseFloat(loopImg.clientHeight) 
let staticImg = document.getElementById('img-static')
let imgStaticHeight = parseFloat(staticImg.clientHeight)

let topValue = ((imgStaticHeight + (imgLoopHeight / 2)) * -1) + 10
let rightValue = (imgLoopHeight / 2) - 15

// var root = document.querySelector(':root');
    
// loopImg.style.top = topValue.toString() + 'px'
// loopImg.style.right = rightValue.toString() + 'px';


window.onload = ()=>{
    // root.style.setProperty('--top', topValue.toString() + 'px');
    // root.style.setProperty('--right', rightValue.toString() + 'px');
    // loopImg.style.top = topValue.toString() + 'px'
    // loopImg.style.right = rightValue.toString() + 'px';

    loopImg = document.getElementById('img-loop')
    imgLoopHeight = parseFloat(loopImg.clientHeight) 
    staticImg = document.getElementById('img-static')
    imgStaticHeight = parseFloat(staticImg.clientHeight)

    topValue = ((imgStaticHeight + (imgLoopHeight / 2)) * -1) + 10
    rightValue = (imgLoopHeight / 2) - 15
    
    loopImg.style.top = topValue.toString() + 'px'
    loopImg.style.right = rightValue.toString() + 'px'
}

window.onresize = ()=>{

    loopImg = document.getElementById('img-loop')
    imgLoopHeight = parseFloat(loopImg.clientHeight) 
    staticImg = document.getElementById('img-static')
    imgStaticHeight = parseFloat(staticImg.clientHeight)

    topValue = ((imgStaticHeight + (imgLoopHeight / 2)) * -1) + 10
    rightValue = (imgLoopHeight / 2) - 15
    
    loopImg.style.top = topValue.toString() + 'px'
    loopImg.style.right = rightValue.toString() + 'px'
}


