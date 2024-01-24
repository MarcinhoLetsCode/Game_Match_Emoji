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
    document.querySelector(".game").appendChild(box);
}

function inicialize() {
    
}


//inicialize();
