window.onload = () => {    
    compatibleCheck()
    changeBackgroundColor()
    changeFontColor()
    changeFontSize()
    changeLineHeight()
    changeFontType()
}

function compatibleCheck() {
    if (typeof(Storage) != "undefined") {
        let fontSize = localStorage.fontSize
        if (fontSize) document.getElementsByTagName('article')[0].style.fontSize = `${changeFontSize}px`
    } else {
        document.write("Sem suporte para Web Storage")
    }
}

function changeBackgroundColor() {
    const btnBackground = document.querySelectorAll('.btnBackgroundColor')
    for(let button of btnBackground) {
        button.addEventListener('click', () => {            
            let changeBackground = event.target.innerHTML
            localStorage.setItem("background Color", changeBackground)
            document.body.style.backgroundColor = changeBackground
        })
    }
}

function changeFontColor() {
    const btnFontColor = document.querySelectorAll('.selectFontColor')
    for(let button of btnFontColor) {
        button.addEventListener('click', () => {            
            let changeFontColor = event.target.innerHTML
            localStorage.setItem("Font Color", changeFontColor)
            document.getElementsByTagName('article')[0].style.color = changeFontColor
        })
    }
}

function changeFontSize() {
    const btnFontSize = document.querySelectorAll('.selectFontSize')
    for(let button of btnFontSize) {
        button.addEventListener('click', () => {            
            let changeFontSize = event.target.innerHTML
            localStorage.setItem("Font Size", changeFontSize)
            document.getElementsByTagName('article')[0].style.fontSize = `${changeFontSize}px`
        })
    }
}

function changeLineHeight() {
    const btnLineHeight = document.querySelectorAll('.selectLineHeight')
    for(let button of btnLineHeight) {
        button.addEventListener('click', () => {            
            let lineHeight = event.target.innerHTML
            localStorage.setItem("Font Line Height", lineHeight)
            document.getElementsByTagName('article')[0].style.lineHeight = `${lineHeight}`
        })
    }
}

function changeFontType() {
    const btnFontType = document.querySelectorAll('.fontType')
    for(let button of btnFontType) {
        button.addEventListener('click', () => {            
            let fontType = event.target.innerHTML
            localStorage.setItem("Font Type", fontType)
            document.getElementsByTagName('article')[0].style.fontFamily = `${fontType}`
        })
    }
}

