

let arrayOfLinks = document.getElementsByClassName('project_link')
let img1 = document.getElementById('img-1')


arrayOfLinks[0].addEventListener('mouseover', ()=>{
    img1.classList.add('transparent_img_on')
})

arrayOfLinks[0].addEventListener('mouseout', ()=>{
    img1.classList.remove('transparent_img_on')
})