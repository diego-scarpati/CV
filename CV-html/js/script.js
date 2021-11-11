let pixelGlasses = document.getElementById('pixel');
let contact = document.getElementById('contact');
let address = document.getElementById('address');
let map = document.getElementById('map');
let closeMap = document.getElementById('close');
contact.addEventListener('mouseover', ()=>{
    pixelGlasses.style.display = 'initial'
})
contact.addEventListener('mouseout', ()=>{
    pixelGlasses.style.display = 'none'
})
address.addEventListener('click', ()=>{
    map.style.display = 'flex'
})
closeMap.addEventListener('click', ()=>{
    map.style.display = 'none'
})