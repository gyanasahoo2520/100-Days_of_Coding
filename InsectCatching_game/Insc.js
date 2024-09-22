const screens = document.querySelectorAll('.screen');
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
let seconds; // Will start at the time limit and count down
let score = 0
let selected_insect = {}
let gameInterval; // New variable to store the game interval
const timeLimit = 20; // Set the time limit to 30 seconds

start_btn.addEventListener('click', () => screens[0].classList.add('up'))

choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_insect = { src, alt }
        screens[1].classList.add('up')
        setTimeout(createInsect, 1000)
        startGame()
    })
})

function startGame() {
    seconds = timeLimit; // Start with the time limit (30 seconds)
    gameInterval = setInterval(decreaseTime, 1000)
}

function decreaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds--

    // Check if the time reaches 0
    if (seconds < 0) {
        endGame() // Call end game when time runs out
    }
}

function createInsect() {
    if (seconds < 0) return; // Prevent insects from being created after the time limit

    const insect = document.createElement('div')
    insect.classList.add('insect')
    const { x, y } = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`

    insect.addEventListener('click', catchInsect)

    game_container.appendChild(insect)
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

function catchInsect() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addInsects()
}

function addInsects() {
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}

function increaseScore() {
    score++
    scoreEl.innerHTML = `Score: ${score}`
}

// New function to handle the end of the game
function endGame() {
    clearInterval(gameInterval) // Stop the timer
    game_container.innerHTML = `<h1>Game Over!</h1><h2>Your final score is: ${score}</h2>` // Show game over and score
    message.classList.add('visible') // Show the message element (could be customized for game over)
}
