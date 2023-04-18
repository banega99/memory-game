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
if (level == 1) interval = 50

// level.btn.


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
if(startBtn.innerText === 'START'){
    startBtn.addEventListener('click', () => {
        startBtn.style.pointerEvents = 'none';
        // if (chsLvl.style.display == 'none') {
        //     chsLvl.style.display = 'block'
        // } else {
        //     chsLvl.style.display = 'none'
        // }
        container.className = 'level1'
        startBtn.innerText = timerBtn
        var timer1 = setInterval(()=>{
            
            timerBtn --
            startBtn.innerText = timerBtn
            if(timerBtn == 0){
                startBtn.style.display = 'none';
                clearInterval(timer1)
                createLevel()
                
            }
        }, 1000)
    })
}


lvlBtnWdth()

// levelSwitch()

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

//Resenje za problem kada tastatura natelefonu pomera sadrzaj stranice na gore
// setTimeout(function () {
//     let viewheight = window.innerHeight;
//     let viewwidth = window.innerWidth;
//     let viewport = document.querySelector("meta[name=viewport]");
//     viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0");
// }, 300);



// createLevel()
function createLevel() {
    console.log(interval)
    var timerLine = setInterval(() => {
        timer++
        console.log(interval)
        // console.log(timer)
        line.style.width = `${timer}px`
        if (line.style.width === `${window.innerWidth}px`) {
            container.innerHTML = ''
            defeat.style.display = 'flex'
            defeat.addEventListener('click', () => {
                level = 1
                res = 0
                row = ['a', 'b']
                column = ['a', 'b']
                timer = 0
                interval = 50
                line.style.width = `${timer}px`
                container.innerHTML = ''
                startBtn.style.pointerEvents = 'all';
                startBtn.style.display = 'flex'
                timerBtn = 5
                startBtn.innerText = 'START'
                defeat.style.display = 'none'
            })
            clearInterval(timerLine)
        }
    }, interval)

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
        card.appendChild(backCard)
        card.appendChild(frontCard)
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
    if (res < row.length) {
        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            card.addEventListener('click', () => {
                card.style.pointerEvents = 'none';
                // console.log(card)
                front[i].style.transform = 'perspective(900px) rotateY(0deg)'
                back[i].style.transform = 'perspective(900px) rotateY(180deg)'
                compare.push(front[i].innerText)
                cardArrB.push(back[i])
                cardArrF.push(front[i])
                if (cardArrF.length == 2) {

                    for (let card of cards) {
                        card.style.pointerEvents = 'none';
                    }
                    setTimeout(() => {
                        if (compare[0] == compare[1]) {
                            timer = timer - 20
                            for (let card of cards) {
                                card.style.pointerEvents = 'all';
                            }
                            cardArrF[0].parentElement.style.pointerEvents = 'none';
                            cardArrF[1].parentElement.style.pointerEvents = 'none';
                            res++
                            compare = []
                            cardArrF = []
                            cardArrB = []
                            if (res == row.length) {
                                clearInterval(timerLine)
                                timer = 0
                                interval
                                compare = []
                                cardArrF = []
                                cardArrB = []
                                level++
                                if(level > 6){
                                    defeat.style.display = 'block'
                                    defeat.style.color = 'green'
                                    defeat.innerText = 'VICTORY'
                                }
                                for (let l = 0; l < front.length; l++) {
                                    const front1 = front[l];
                                    const back1 = back[l];
                                    front1.style.transform = 'perspective(900px) rotateY(180deg)'
                                    back1.style.transform = 'perspective(900px) rotateY(0deg)'

                                }
                                card.style.pointerEvents = 'all';
                                levelSwitch()
                            }
                        } else {
                            for (let card of cards) {
                                card.style.pointerEvents = 'all';
                            }
                            for (let k = 0; k < cardArrF.length; k++) {
                                cardArrF[k].style.transform = 'perspective(900px) rotateY(180deg)'
                                cardArrB[k].style.transform = 'perspective(900px) rotateY(0deg)'
                            }

                            compare = []
                            cardArrF = []
                            cardArrB = []
                        }
                    }, 500)

                }
            })
        }
    }
}



function levelSwitch() {
    switch (level) {
        case 2:
            res = 0
            timer = 0
            interval = 80

            container.className = 'level2'
            container.innerHTML = ''
            row = ['a', 'b', 'c', 'd']
            column = ['a', 'b', 'c', 'd']
            createLevel()
            break;
        case 3:
            res = 0
            timer = 0
            interval = 150

            container.className = 'level3'
            container.innerHTML = ''
            row = ['a', 'b', 'c', 'd', 'e', 'f']
            column = ['a', 'b', 'c', 'd', 'e', 'f']
            createLevel()
            break;
        case 4:
            res = 0
            timer = 0
            interval = 220

            container.className = 'level4'
            container.innerHTML = ''
            row = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
            column = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
            createLevel()
            break;
        case 5:
            res = 0
            timer = 0
            interval = 300

            container.className = 'level5'
            container.innerHTML = ''
            row = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']
            column = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']
            createLevel()
            break;
        case 6:
            res = 0
            timer = 0
            interval = 380
            container.className = 'level6'
            container.innerHTML = ''
            row = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r']
            column = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r']
            createLevel()
            break;

        default:
            break;
    }
}












