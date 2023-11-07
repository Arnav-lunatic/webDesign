const body = document.querySelector('body')
const navHam = document.querySelector('.navHam')
const navButton = document.querySelector('.navButton')
const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')

const modeButton = document.querySelector('.mode')
const modeSwitch = document.querySelector('.switch')

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

let nightMode = true
modeButton.addEventListener('click', () => {
    if (nightMode) {
        modeSwitch.style.left = '32px'
        body.style.backgroundColor = '#fff'
        body.style.color = '#000'

        nightMode = false
    } else {
        modeSwitch.style.left = '2px'
        body.style.backgroundColor = '#212121'
        body.style.color = '#fff'

        nightMode = true
    }
})