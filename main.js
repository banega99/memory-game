var container = document.getElementsByClassName('level1')[0];
var level = 1
console.log(level)
var res = 0
var row = ['a', 'b']
var column = ['a', 'b']
var levelBtn = document.getElementById('btn')
var chsLvl = document.getElementById('chooseLvl')
var lvlLis = document.getElementsByClassName('lvlLi')

for (let i = 0; i < lvlLis.length; i++) {
    const lvlLi = lvlLis[i];
    lvlLi.addEventListener('click',()=>{
        level = i
        console.log(level)
        levelSwitch()
    })
    
    
}

levelBtn.addEventListener('click', ()=>{
    if(chsLvl.style.display == 'none'){
        chsLvl.style.display = 'block'
    }else {
        chsLvl.style.display = 'none'
    }
})

if(level < 5 && window.innerWidth < 576) {
    var logo = document.getElementsByClassName('logo')[0]
    var title = document.getElementById('title')
    logo.style.width = '120px'
    logo.style.height = '40px'
    title.style.fontSize = '12px'
    title.style.marginLeft = '24px'
}

if(level > 5) { 
    levelBtn.style.width = '50px'
    chsLvl.style.width = '50px'
}

//Resenje za problem kada tastatura natelefonu pomera sadrzaj stranice na gore
setTimeout(function () {
    let viewheight = window.innerHeight;
    let viewwidth = window.innerWidth;
    let viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0");
}, 300);

createLevel()
function createLevel(){ 
    var rowColCon = row.concat(column)
    var rowCol = row.length + column.length
    rand1 = Math.floor(Math.random()*(rowCol - 1))
    rand2 = Math.floor(Math.random()*(row.length))
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
        rand1 = Math.floor(Math.random()*(rowColCon.length - 1))
    }
    
    var cards = document.getElementsByClassName('card') 
    var front = document.getElementsByClassName('front')
    var back = document.getElementsByClassName('back')
    var compare = []
    var cardArrF = []
    var cardArrB = []
    
    if(res < row.length) {
        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            card.addEventListener('click', ()=> {
                front[i].style.transform = 'perspective(900px) rotateY(0deg)'
                back[i].style.transform = 'perspective(900px) rotateY(180deg)'
                compare.push(front[i].innerText)
                cardArrB.push(back[i])
                cardArrF.push(front[i])
                if(cardArrF.length == 2){
                    for (let card of cards){
                        card.style.pointerEvents = 'none';
                    }
                    setTimeout(()=>{
                        if(compare[0] == compare[1]){
                            for (let card of cards){
                                card.style.pointerEvents = 'all';
                            }
                            cardArrF[0].parentElement.style.pointerEvents = 'none';
                            cardArrF[1].parentElement.style.pointerEvents = 'none';
                            res ++
                            compare = []
                            cardArrF = []
                            cardArrB = []
                            if (res == row.length){
                                compare = []
                                cardArrF = []
                                cardArrB = []
                                level ++
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
                            for (let card of cards){
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
                    
                } else {
                    for (let card of cards){
                        card.style.pointerEvents = 'all';
                    }
                }
            })
        }
    }    
}

levelSwitch()

function levelSwitch(){
    switch (level) {
        case 2:
            res = 0
            container.className = 'level2'
            container.innerHTML = ''
            row = ['a', 'b', 'c', 'd']
            column = ['a', 'b', 'c', 'd']
            createLevel()
            break;
        case 3:
            res = 0
            container.className = 'level3'
            container.innerHTML = ''
            row = ['a', 'b', 'c', 'd', 'e', 'f']
            column = ['a', 'b', 'c', 'd', 'e', 'f']
            createLevel()
            break;
        case 4:
            res = 0
            container.className = 'level4'
            container.innerHTML = ''
            row = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
            column = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
            createLevel()
            break;
        case 5:
            res = 0
            container.className = 'level5'
            container.innerHTML = ''
            row = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']
            column = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']
            createLevel()
            break;
        case 6:
            res = 0
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












