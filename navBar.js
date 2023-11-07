const body = document.querySelector('body')
const navHam = document.querySelector('.navHam')
const navButton = document.querySelector('.navButton')
const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')

const modeButton = document.querySelector('.mode')
const modeSwitch = document.querySelector('.switch')

// Remove this to reuse navbar
const root = document.querySelector(':root')

let navHamClick = false
navHam.addEventListener('click', () => {
    if (!navHamClick) {
        // Button Changes
        line1.style.transform = 'rotate(45deg)'
        line2.style.opacity = '0'
        line3.style.transform = 'rotate(-45deg)'

        // view nav button
        navButton.style.opacity = '1'
        navButton.style.height = '15vh'
        navButton.style.marginTop = '2vh'

        navHamClick = true
    } else {
        /// button changes reverse
        line1.style.transform = ''
        line2.style.opacity = '1'
        line3.style.transform = ''

        // hide nav button
        navButton.style.opacity = '0'
        navButton.style.height = '0vh'
        navButton.style.marginTop = '0vh'

        navHamClick = false
    }
})

// Dark and light mode
let nightMode = true
modeButton.addEventListener('click', () => {
    if (nightMode) {
        modeSwitch.style.left = '32px'
        body.style.backgroundColor = '#B4DDFF'
        body.style.color = '#000'

        // remove this to reuse theme
        root.style.setProperty('--dullColor', '#B4DDFF10, #B4DDFF20, #B4DDFF');
        root.style.setProperty('--titleColor', '#00000080')
        root.style.setProperty('--stroke', '4px #000')
        root.style.setProperty('--boxBorder', '#00000050')
        document.querySelector('.mainHeading').style.color = '#fff'
        document.querySelector('.mainHeading').style.textShadow = '0px 0px 10px #fff'
        document.querySelector('.paraDeco').style.backgroundColor = '#000'

        nightMode = false
    } else {
        modeSwitch.style.left = '2px'
        body.style.backgroundColor = '#212121'
        body.style.color = '#fff'

        // remove this to reuse theme
        root.style.setProperty('--dullColor', '#21212160, #21212170, #212121');
        root.style.setProperty('--titleColor', '#ffffff80')
        root.style.setProperty('--stroke', '3px #fff')
        root.style.setProperty('--boxBorder', '#ffffff50')
        document.querySelector('.mainHeading').style.color = '#000'
        document.querySelector('.mainHeading').style.textShadow = '0px 0px 5px #000'
        document.querySelector('.paraDeco').style.backgroundColor = '#fff'
        
        nightMode = true
    }
})