let gameBox = document.querySelector(".container .game");
let timer = document.querySelector(".container .timer");
let time;

const emojis = ["😀", "😀", "😁", "😁", "😛", "😛", "😎", "😎", "😱", "😱", "😞", "😞", "🙂‍↔️", "🙂‍↔️", "🥳", "🥳"];

let shuffleEmojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);

let point = [];
let singlePoint = 0;


for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.classList.add("item");

    box.onclick = (e) => {
        e.target.classList.add("boxOpen");
        let boxes = document.querySelectorAll(".boxOpen");
        setTimeout(() => {
            if (boxes.length > 1) {
                if (boxes[0].innerHTML == boxes[1].innerHTML) {
                    boxes[0].classList.add("boxMatch");
                    point.push(singlePoint++);
                    boxes[1].classList.add("boxMatch");
                    point.push(singlePoint++);
                    boxes[1].classList.remove("boxOpen");
                    boxes[0].classList.remove("boxOpen");
                    if (point.length == emojis.length) {
                        gameBox.innerHTML = "hai vinto!"

                    }
                } else {
                    boxes[1].classList.remove("boxOpen");
                    boxes[0].classList.remove("boxOpen");
                }
            }
        }, 500);

    }

    box.innerHTML = shuffleEmojis[i];
    gameBox.appendChild(box);
}

/* -------------------------------------------------------------------------------- */
/* ! Timer */
/* -------------------------------------------------------------------------------- */
let sec = 0;
let min = 0;
intervalId = '';
function startTimer() {
    intervalId = setInterval(() => {
        sec++;
        time = timer.textContent = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
        if (sec === 60) {
            min++;
            sec = 0;
            time = timer.textContent = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
        }

    }, 1000);
}
startTimer();