var container = document.getElementsByClassName('level1')[0];
var level = 1
var res = 0
var row = ['a', 'b']
var column = ['a', 'b']
var startBtn = document.getElementById('btn')
// var chsLvl = document.getElementById('chooseLvl')
// var lvlLis = document.getElementsByClassName('lvlLi')
var logo = document.getElementsByClassName('logo')[0]
var title = document.getElementById('title')
var line = document.getElementsByClassName('line')[0]
var timer = 0
var timerBtn = 5
var interval
var defeat = document.getElementById('defeat')
if (level == 1) interval = 30
var twoPlayers = false
var timerMode = true
var pvp = false
var scoreBoard = document.getElementsByClassName('score')[0]
var score1 = document.getElementsByClassName('score1')[0]
var score2 = document.getElementsByClassName('score2')[0]
var sbMinutes = document.getElementById('minutes')
var minutes = 0
var playerName = document.getElementsByClassName('player1')[0]
var playerName2 = document.getElementsByClassName('player2')[0]
var player = 0
var player2 = 0
var scorePlayer1 = 0
var scorePlayer2 = 0
var comp = 0
var mode = document.getElementById('mode')
var chooseMode = document.getElementById('choose-mode')
var modeLi = document.getElementsByClassName('mode-li')
var menu = document.getElementsByClassName('menu')[0]
var exit = document.getElementById('exit')

score1.innerText = `${player}`
score2.innerText = `${comp}`

mode.addEventListener('click', () => {
    function display() {
        mode.style.display = 'flex'
        chooseMode.style.display = 'none'
        startBtn.style.pointerEvents = 'all'
        startBtn.style.opacity = '1'
        window.removeEventListener('click', display)
    }
    chooseMode.style.display = 'flex'
    mode.style.display = 'none'
    startBtn.style.pointerEvents = 'none'
    startBtn.style.opacity = '0.6'
    setTimeout(() => {
        window.addEventListener('click', display)
    }, 200)
    for (let i = 0; i < modeLi.length; i++) {
        const element = modeLi[i];
        element.addEventListener('click', () => {
            switch (i) {
                case 0:
                    timerMode = true
                    twoPlayers = false
                    pvp = false
                    display()
                    break;
                case 1:
                    timerMode = false
                    twoPlayers = true
                    pvp = false
                    var playerPrompt = prompt('Red player name')
                    playerName.innerText = playerPrompt ? `${playerPrompt}` : 'plyr'
                    display()
                    break;
                case 2:
                    timerMode = false
                    twoPlayers = false
                    pvp = true
                    var playerPrompt = prompt('Red player name')
                    var playerPrompt2 = prompt('Blue player name')
                    playerName.innerText = playerPrompt? `${playerPrompt}` : 'plyr1'
                    playerName2.innerText = playerPrompt2? `${playerPrompt2}` : 'plyr2'
                    display()
                    break;
            }
        })
    }
})

if (!twoPlayers && !pvp) {
    scoreBoard.style.display = 'none'
    logo.style.left = '10px'
}


// for (let i = 0; i < lvlLis.length; i++) {
//     const lvlLi = lvlLis[i];
//     lvlLi.addEventListener('click', () => {
//         clearInterval(timerLine)
//         chsLvl.style.display = 'none'
//         level = i + 1
//         switch(level){
//             case 1:
//                 break;
//                 case 1:
//                 break;
//                 case 1:
//                 break;
//                 case 1:
//                 break;
//                 case 1:
//                 break;
//                 case 1:
//                 break;
//                 case 1:
//                 break;
//                 default:
//         }
//         lvlBtnWdth()
//     })
// }

// }
if (startBtn.innerText === 'START') {

    startBtn.addEventListener('click', () => {
        mode.style.display = 'none'
        startBtn.style.pointerEvents = 'none';

        // if (chsLvl.style.display == 'none') {
        //     chsLvl.style.display = 'block'
        // } else {
        //     chsLvl.style.display = 'none'
        // }
        container.className = `level${level}`
        startBtn.innerText = timerBtn
        var timer1 = setInterval(() => {

            timerBtn--
            startBtn.innerText = timerBtn
            if (timerBtn == 0) {
                menu.style.display = 'none'
                startBtn.style.display = 'none';
                clearInterval(timer1)
                levelSwitch()

            }
        }, 1000)
    })
}


lvlBtnWdth()

function lvlBtnWdth() {
    if (level < 5 && window.innerWidth < 576) {
        line.style.top = '0px'
        logo.style.width = '110px'
        logo.style.height = '30px'
        title.style.fontSize = '10px'
        title.style.marginLeft = '24px'
        startBtn.style.width = '100px'
        // chsLvl.style.width = '100px'
    }

    if (level >= 5 && window.innerWidth < 576) {
        line.style.top = '0px'
        startBtn.style.width = '50px'
        // chsLvl.style.width = '50px'
        logo.style.width = '70px'
        logo.style.height = '15px'
        title.style.fontSize = '6px'
        title.style.marginLeft = '14px'
    }

}

function startTimer() {
    function tick() {
        timer++
        line.style.width = `${timer}px`
        if (line.style.width === `${window.innerWidth}px`) {
            container.innerHTML = ''
            defeat.style.display = 'flex'
            window.addEventListener('click', defWin)
            clearInterval(timerLine)
        }
    }
    const timerLine = setInterval(tick, interval)
    return timerLine
}



function defWin() {
    level = 1
    res = 0
    row = ['a', 'b']
    column = ['a', 'b']
    timer = 0
    interval = 40
    player = 0
    player2 = 0
    scorePlayer1 = 0
    scorePlayer2 = 0
    comp = 0
    score1.innerText = `${scorePlayer1}`
    score2.innerText = `${scorePlayer2}`
    sbMinutes.innerText = `00`
    line.style.width = `${timer}px`
    container.innerHTML = ''
    startBtn.style.pointerEvents = 'all';
    startBtn.style.display = 'flex'
    menu.style.display = 'block'
    mode.style.display = 'flex'
    logo.style.left = '10px'
    logo.style.right = 'auto'
    timerBtn = 5
    startBtn.innerText = 'START'
    defeat.style.display = 'none'
    scoreBoard.style.display = 'none'
    exit.style.display = 'none'
    exit.style.right = '10px'
    exit.style.top = '10px'
    scoreBoard.classList.remove('score-win')
    if(timerLine)clearInterval(timerLine)
    window.removeEventListener('click', defWin)
}

function createLevel() {
    if (twoPlayers || pvp) {
        logo.style.left = 'auto'
        logo.style.right = '10px'
        scoreBoard.style.display = 'block'
        if (window.innerWidth > 576) {
            exit.style.right = '180px'
            exit.style.top = '15px'
        } else {
            exit.style.right = '130px'
            exit.style.top = '15px'
        }
        
    }
    if(pvp) {
        score2.innerText = `comp`
    }
    if (timerMode) {
        console.log(interval)
        timerLine = startTimer()
    }
    exit.style.display = 'block'
    container.innerHTML = ''
    lvlBtnWdth()
    var rowColCon = row.concat(column)
    var rowCol = row.length + column.length
    rand1 = Math.floor(Math.random() * (rowCol - 1))
    for (let i = 0; i < rowCol; i++) {
        var card = document.createElement('div');
        var backCard = document.createElement('div')
        var frontCard = document.createElement('div')
        card.className = 'card'
        backCard.className = 'back'
        frontCard.className = 'front'
        card.appendChild(frontCard)
        card.appendChild(backCard)

        container.appendChild(card)
        var cardsFront = document.getElementsByClassName('front')
        cardsFront[i].innerHTML = `
        <img id='imgFront' src="./footb2/${rowColCon[rand1]}.png" alt="" srcset="">
        <h1>${rowColCon[rand1]}</h1>`
        rowColCon = rowColCon.toSpliced(rand1, 1)
        rand1 = Math.floor(Math.random() * (rowColCon.length - 1))
    }

    var cards = document.getElementsByClassName('card')
    var front = document.getElementsByClassName('front')
    var back = document.getElementsByClassName('back')
    var compare = []
    var cardArrF = []
    var cardArrB = []
    var cardsTurn = []
    var playerComp = 0
    var firstPlayer = true
    var secondPlayer = false
    var compRand
    var turnedCards = []
    for (let turnedCard of cards) {
        turnedCards.push(turnedCard)
    }
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (card.className === 'card' && cardsTurn.length < 2) {
            card.addEventListener('click', cardTurn)
        }
        else {
            card.removeEventListener('click', cardTurn)
        }
        function cardTurn() {
            card.className = 'turn-card'
            card.style.pointerEvents = 'none'
            cardsTurn.push(card)
            compare.unshift(front[i].innerText)
            cardArrB.push(back[i])
            cardArrF.push(front[i])
            if (cardArrF.length == 2) {
                for (let card of cards) {
                    card.style.pointerEvents = 'none'
                }
                setTimeout(() => {
                    if (compare[0] == compare[1]) {
                        if (pvp) {
                            if (firstPlayer) {
                                player++
                            }
                            if (secondPlayer) {
                                player2++
                            }
                        }
                        if (twoPlayers) {
                            player++
                        }
                        if (timerMode) {
                            timer = timer - 15
                        }

                        for (let card of cards) {
                            card.style.pointerEvents = 'all';
                        }
                        cardArrF[0].parentElement.style.pointerEvents = 'none';
                        cardArrF[1].parentElement.style.pointerEvents = 'none';
                        res++
                        compare = []
                        cardsTurn = []
                        cardArrF = []
                        cardArrB = []
                        if (res == row.length) {
                            if (pvp || twoPlayers) {
                                if (player > player2) {
                                    scorePlayer1++
                                    score1.innerText = `${scorePlayer1}`
                                } else if (player < player2) {
                                    scorePlayer2++
                                    score2.innerText = `${scorePlayer2}`
                                } else {
                                    scorePlayer1++
                                    score1.innerText = `${scorePlayer1}`
                                    scorePlayer2++
                                    score2.innerText = `${scorePlayer2}`
                                }
                            }

                            if(timerLine)clearInterval(timerLine)
                            player = 0
                            player2 = 0
                            timer = 0
                            interval
                            compare = []
                            cardArrF = []
                            cardArrB = []
                            cardsTurn = []
                            clearInterval(compTurn)
                            k = 0
                            var turnBack = setInterval(() => {
                                turnedCards[k].className = 'card'
                                k++
                                if (k == turnedCards.length) {
                                    clearInterval(turnBack)
                                }
                            }, 100)
                            level++
                            setTimeout(() => {
                                levelSwitch()
                            }, 1000)

                        }
                    } else {
                        if (pvp && cardArrF.length == 2) {
                            if (firstPlayer) {
                                firstPlayer = false
                                secondPlayer = true

                            } else {
                                firstPlayer = true
                                secondPlayer = false
                            }
                        }

                        if (twoPlayers) {
                            playerComp++
                        }

                        if (res == row.length) {
                            console.log('kraj')
                            container.innerHTML = ''
                            return
                        } else {
                            playerComp++
                            for (let cardTurned of cardsTurn) {
                                cardTurned.className = 'card'
                            }
                            var cards2 = document.getElementsByClassName('card')
                            for (let card2 of cards2) {
                                card2.style.pointerEvents = 'all'
                            }
                            cardsTurn = []
                            compare = []
                            cardArrF = []
                            cardArrB = []

                            if (playerComp != 0 && twoPlayers) {
                                cardsTurn = []
                                let compare = []
                                var cards2 = document.getElementsByClassName('card')
                                var cardsArr = []
                                for (let card2 of cards2) {
                                    card2.style.pointerEvents = 'none'
                                    cardsArr.push(card2)
                                }
                                compRand = Math.floor(Math.random() * cardsArr.length)
                                var turn = 0
                                var compTurn = setInterval(() => {
                                    turn++
                                    const card = cardsArr[compRand];
                                    var frontComp = card.firstChild
                                    cardsTurn.push(card)
                                    compare.unshift(frontComp.innerText)
                                    card.className = 'turn-card'
                                    cardsArr = cardsArr.toSpliced(compRand, 1)
                                    compRand = Math.floor(Math.random() * cardsArr.length)
                                    if (turn == 2) {
                                        if (compare[0] == compare[1]) {
                                            player2++
                                            turn = 0
                                            res++
                                            cardsTurn = []
                                            compare = []
                                            cardArrF = []
                                            cardArrB = []
                                            compRand = Math.floor(Math.random() * cardsArr.length)
                                            if (res == row.length) {
                                                if (player > player2) {
                                                    scorePlayer1++
                                                    score1.innerText = `${scorePlayer1}`
                                                } else if (player < player2) {
                                                    scorePlayer2++
                                                    score2.innerText = `${scorePlayer2}`
                                                } else {
                                                    scorePlayer1++
                                                    score1.innerText = `${scorePlayer1}`
                                                    scorePlayer2++
                                                    score2.innerText = `${scorePlayer2}`
                                                }
                                                player = 0
                                                player2 = 0
                                                clearInterval(compTurn)
                                                setTimeout(() => {

                                                    for (let card3 of turnedCards) {
                                                        card3.className = 'card'
                                                    }
                                                }, 300)
                                                level++
                                                setTimeout(() => {
                                                    levelSwitch()
                                                }, 1000)
                                            }
                                        } else {
                                            clearInterval(compTurn)
                                            playerComp = 0
                                            compare = []
                                            var turnBack = setInterval(() => {
                                                for (let cardTurned of cardsTurn) {
                                                    cardTurned.className = 'card'
                                                    cardTurned.style.pointerEvents = 'all'
                                                    cardsTurn = cardsTurn.toSpliced(0, 1)
                                                }
                                                if (cardsTurn.length == 0) {
                                                    clearInterval(turnBack)
                                                    var cards3 = document.getElementsByClassName('card')
                                                    for (let card3 of cards3) {
                                                        card3.style.pointerEvents = 'all'
                                                    }
                                                }
                                            }, 500)
                                        }
                                    }

                                }, 1000)
                            }
                        }
                    }
                }, 500)
            }
        }
    }
}

function levelSwitch() {
    switch (level) {

        case 1:
            res = 0
            timer = 0
            if (window.innerWidth < 576) interval = 40
            else interval = 20
            container.className = 'level1'
            container.innerHTML = ''
            row = ['a', 'b']
            column = ['a', 'b']
            createLevel()
            break;
        case 2:
            res = 0
            timer = 0
            minutes = generateRandom(10, 25)
            sbMinutes.innerText = `${minutes}`
            if (window.innerWidth < 576) interval = 60
            else interval = 30
            container.className = 'level2'
            container.innerHTML = ''
            row = ['a', 'b', 'c', 'd']
            column = ['a', 'b', 'c', 'd']
            createLevel()
            break;
        case 3:
            res = 0
            timer = 0
            minutes = generateRandom(25, 45)
            sbMinutes.innerText = `${minutes}`
            if (window.innerWidth < 576) interval = 90
            else interval = 45
            container.className = 'level3'
            container.innerHTML = ''
            row = ['a', 'b', 'c', 'd', 'e', 'f']
            column = ['a', 'b', 'c', 'd', 'e', 'f']
            createLevel()
            break;
        case 4:
            res = 0
            timer = 0
            minutes = generateRandom(45, 60)
            sbMinutes.innerText = `${minutes}`
            if (window.innerWidth < 576) interval = 140
            else interval = 70
            container.className = 'level4'
            container.innerHTML = ''
            row = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
            column = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
            createLevel()
            break;
        case 5:
            res = 0
            timer = 0
            minutes = generateRandom(60, 75)
            sbMinutes.innerText = `${minutes}`
            if (window.innerWidth < 576) interval = 190
            else interval = 95
            container.className = 'level5'
            container.innerHTML = ''
            row = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']
            column = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']
            createLevel()
            break;
        case 6:
            res = 0
            timer = 0
            minutes = generateRandom(75, 90)
            sbMinutes.innerText = `${minutes}`
            if (window.innerWidth < 576) interval = 250
            else interval = 125
            container.className = 'level6'
            container.innerHTML = ''
            row = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r']
            column = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r']
            createLevel()
            break;

        default:
            minutes = 90
            sbMinutes.innerText = `${minutes}`
            if (pvp || twoPlayers) {
                container.innerHTML = ''
                scoreBoard.style.display = 'block'
                scoreBoard.classList.add('score-win')
                window.addEventListener('click', defWin)
            }
            if (timerMode) {
                container.innerHTML = ''
                defeat.style.display = 'flex'
                window.addEventListener('click', defWin)
                defeat.style.color = 'green'
                defeat.innerHTML = '<h1>VICTORY!</h1>'

            }
            break;
    }
}

function generateRandom(min, max) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    return rand;
}












