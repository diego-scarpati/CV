let pixelGlasses = document.getElementById('pixel');
let contact = document.getElementById('contact');
contact.addEventListener('mouseover', ()=>{
    pixelGlasses.style.display = 'initial'
})
contact.addEventListener('mouseout', ()=>{
    pixelGlasses.style.display = 'none'
})