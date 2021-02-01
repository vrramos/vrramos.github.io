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
        let background = localStorage.background
        if (background) document.body.style.backgroundColor = background
        
        let fontColor = localStorage.fontColor
        if (fontColor) article().style.color = fontColor
        
        let fontSize = localStorage.fontSize
        if (fontSize) article().style.fontSize = `${fontSize}px`

        let lineHeight = localStorage.lineHeight
        if (lineHeight) article().style.lineHeight = `${lineHeight}`

        let fontType = localStorage.fontType
        if (fontType) article().style.fontFamily = `${fontType}`
    } else {
        document.write("Sem suporte para Web Storage")
    }
}

function article() {
    return document.getElementsByTagName('article')[0]
}

function changeBackgroundColor() {
    const btnBackground = document.querySelectorAll('.btnBackgroundColor')
    for(let button of btnBackground) {
        button.addEventListener('click', () => {            
            let changeBackground = event.target.innerHTML
            localStorage.setItem("background", changeBackground)
            document.body.style.backgroundColor = changeBackground
        })
    }
}

function changeFontColor() {
    const btnFontColor = document.querySelectorAll('.selectFontColor')
    for(let button of btnFontColor) {
        button.addEventListener('click', () => {            
            let changeFontColor = event.target.innerHTML
            localStorage.setItem("fontColor", changeFontColor)
            article().style.color = changeFontColor
        })
    }
}

function changeFontSize() {
    const btnFontSize = document.querySelectorAll('.selectFontSize')
    for(let button of btnFontSize) {
        button.addEventListener('click', () => {            
            let changeFontSize = event.target.innerHTML
            localStorage.setItem("fontSize", changeFontSize)
            article().style.fontSize = `${changeFontSize}px`
        })
    }
}

function changeLineHeight() {
    const btnLineHeight = document.querySelectorAll('.selectLineHeight')
    for(let button of btnLineHeight) {
        button.addEventListener('click', () => {            
            let lineHeight = event.target.innerHTML
            localStorage.setItem("lineHeight", lineHeight)
            article().style.lineHeight = `${lineHeight}`
        })
    }
}

function changeFontType() {
    const btnFontType = document.querySelectorAll('.fontType')
    for(let button of btnFontType) {
        button.addEventListener('click', () => {            
            let fontType = event.target.innerHTML
            localStorage.setItem("fontType", fontType)
            article().style.fontFamily = `${fontType}`
        })
    }
}
