// Make pixel glasses appear when hovering Contact
let pixelGlasses = document.getElementById('pixel');
let contact = document.getElementById('contact');
contact.addEventListener('mouseover', ()=>{
    pixelGlasses.style.display = 'initial'
})
contact.addEventListener('mouseout', ()=>{
    pixelGlasses.style.display = 'none'
})

// Clickable event to open and close map over address
let address = document.getElementById('address');
let map = document.getElementById('map');
let closeMap = document.getElementById('close');
address.addEventListener('click', ()=>{
    map.style.display = 'flex'
})
closeMap.addEventListener('click', ()=>{
    map.style.display = 'none'
})

// Clickable event to open and close pdf over Agile
let agile = document.getElementById('Agile');
let agileDiv = document.getElementById('Agile-div');
let agileBtn = document.getElementById('Agile-btn');
agile.addEventListener('click', ()=>{
    agileDiv.style.display = 'flex'
})
agileBtn.addEventListener('click', ()=>{
    agileDiv.style.display = 'none'
})
// Clickable event to open and close pdf over PyBoot
let pyBoot = document.getElementById('PyBoot');
let pyBootDiv = document.getElementById('PyBoot-div');
let pyBootBtn = document.getElementById('PyBoot-btn');
pyBoot.addEventListener('click', ()=>{
    pyBootDiv.style.display = 'flex'
})
pyBootBtn.addEventListener('click', ()=>{
    pyBootDiv.style.display = 'none'
})
// Clickable event to open and close pdf over BI
let bI = document.getElementById('BI');
let bIDiv = document.getElementById('BI-div');
let bIBtn = document.getElementById('BI-btn');
bI.addEventListener('click', ()=>{
    bIDiv.style.display = 'flex'
})
bIBtn.addEventListener('click', ()=>{
    bIDiv.style.display = 'none'
})
