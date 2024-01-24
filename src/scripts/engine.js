const emojis = [
    '😘',
    '😘',
    '😁',
    '😁',
    '😍',
    '😍',
    '😱',
    '😱',
    '😹',
    '😹',
    '🥵',
    '🥵',
    '💩',
    '💩',
    '🤑',
    '🤑'
];

let openCards = [];

//let shuffleEmojis = emojis.sort(() =>(Math.random() > 0.5) ? 2 : -1);
//console.log(emojis.sort(() =>(Math.random() > 0.5) ? 2 : -1));
let shuffleEmojis = 
emojis.sort(() =>
{if (Math.random() > 0.5) {
    //console.log(2);
    return 2;
} else {
    //console.log(-1);
    return -1;
}});
//console.log(shuffleEmojis);

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    //alert("Hello");
    if (openCards.length < 2) {
        if (!this.classList.contains("boxMatch")) {
            if (this.classList.contains("boxOpen")) {
                console.log('Ja Existe');
                this.classList.remove("boxOpen");
                openCards.pop(this);
            } else {
                this.classList.add("boxOpen");
                openCards.push(this);
            }
        }
        
        console.log(this);
        console.log(openCards);
    }

    if (openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if(openCards[0].innerText === openCards[1].innerHTML ){
        console.log('Isso Aíii');
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
        //openCards[0].classList.remove("boxOpen");
        //openCards[1].classList.remove("boxOpen");
        openCards[0].disabled = "disabled";
        openCards[1].disabled = "disabled";
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");

    }
    openCards = [];

    //console.log(document.querySelectorAll(".boxMatch").length);
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        
        alert("Winner!");
        
    }
}

//function inicialize() {
    
//}

//inicialize();
