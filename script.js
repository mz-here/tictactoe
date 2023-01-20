let audioTurn = new Audio('ting.mp3');
let gameover = new Audio('gameover.mp3');
let turn = 'X';
let isgameover = false;

const changeTurn = () => {
    return turn === 'X' ? '0' : 'X';
}
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 0.1, 5, 0],
        [3, 4, 5, 0.1, 15, 0],
        [6, 7, 8, 0.1, 25, 0],
        [0, 3, 6, -10, 15, 90],
        [1, 4, 7, 0, 15, 90],
        [2, 5, 8, 10, 15, 90],
        [0, 4, 8, 0.3, 15, 45],
        [2, 4, 6, 0.3, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            isgameover = true;
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won";
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "50px";
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.height = "50px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "30vw";
            gameover.play();

        }
    })
}



let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})


btn.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".line").style.width = "0vw";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.height = "0px";
})

