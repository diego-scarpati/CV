// Make pixel glasses appear when hovering Contact
// let pixelGlasses = document.getElementById('pixel');
// let contact = document.getElementById('contact');
// const minWidth = window.matchMedia('(min-width: 901px)')
// const personal = document.querySelector('#personal')
// const screenSize = mql => {
//     if (mql.matches) {
//         contact.addEventListener('mouseover', ()=>{
//             pixelGlasses.style.display = 'initial'
//         })
//         contact.addEventListener('mouseout', ()=>{
//             pixelGlasses.style.display = 'none'
//         })
//     }
// }
// screenSize(minWidth)
// minWidth.addListener(screenSize)
// window.addEventListener("resize", screenSize)

// Clickable event to open and close map over address
let address = $('#address');
let map = $('#map-div');
let closeMap = $('#close');
address.click( ()=>{
    map.toggle()
})
closeMap.click( ()=>{
    map.css('display', 'none')
})

// Clickable event to open and close pdf over JavaScript
const javaScript = $('#JavaScript');
const javaScriptDiv = $('#JavaScript-div');
const javaScriptBtn = $('#JavaScript-btn');
javaScript.click( ()=>{
    javaScriptDiv.toggle()
})
javaScriptBtn.click( ()=>{
    javaScriptDiv.css('display', 'none')
})
// Clickable event to open and close pdf over Agile
const agile = $('#Agile');
const agileDiv = $('#Agile-div');
const agileBtn = $('#Agile-btn');
agile.click( ()=>{
    agileDiv.toggle()
})
agileBtn.click( ()=>{
    agileDiv.css('display', 'none')
})
// Clickable event to open and close pdf over PyBoot
const pyBoot = $('#PyBoot');
const pyBootDiv = $('#PyBoot-div');
const pyBootBtn = $('#PyBoot-btn');
pyBoot.click( ()=>{
    pyBootDiv.toggle()
})
pyBootBtn.click( ()=>{
    pyBootDiv.css('display', 'none')
})
// Clickable event to open and close pdf over BI
const bI = $('#BI');
const bIDiv = $('#BI-div');
const bIBtn = $('#BI-btn');
bI.click( ()=>{
    bIDiv.toggle()
})
bIBtn.click( ()=>{
    bIDiv.css('display', 'none')
})
