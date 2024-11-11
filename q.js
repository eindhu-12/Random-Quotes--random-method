let list=["The only way to do great work is to love what you do.",
    "Success is not final; failure is not fatal: It is the courage to continue that counts." ,
    "Don’t watch the clock; do what it does. Keep going.",
    "Success usually comes to those who are too busy to be looking for it." ,
    "Believe you can and you're halfway there." ,
    "Your time is limited, don’t waste it living someone else’s life.",
    "Happiness is not something ready-made. It comes from your own actions." ,
    "Start where you are. Use what you have. Do what you can.",
    "The best way to predict the future is to create it.",
    "It does not matter how slowly you go, as long as you do not stop.",
    "Don’t be afraid to give up the good to go for the great.",
    "What we think, we become.",
    "The journey of a thousand miles begins with a single step.",
    "The only limit to our realization of tomorrow is our doubts of today." ,
    "If opportunity doesn’t knock, build a door." ,
    "Success is not the key to happiness. Happiness is the key to success.",
    "Dream big and dare to fail.",
    "The only impossible journey is the one you never begin.",
    "Be the change that you wish to see in the world." ,
    "You miss 100% of the shots you don’t take." 

];
let qut=document.querySelector("span")
function randomQuote(){
    let x=Math.floor(Math.random()*20)
    let g=Math.floor(Math.random()*255)
    let r=Math.floor(Math.random()*255)
    let b=Math.floor(Math.random()*255)
    qut.textContent=list[x];
    qut.style.backgroundColor="white"
    qut.style.padding="10px";
    qut.style.borderRadius="20px"
    document.body.style.backgroundColor=`rgb(${r},${g},${b})`;
}