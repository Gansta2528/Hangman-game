let words = ["tea", "computer", "biology", "uncopyrightable", "strengths", "bruh"]
let secretWord = words[getRndInteger(0, words.length - 1)]
let letters = []
let attemptes =3
let sound = new Audio("videoplayback.mp3")
document.querySelector(".starting").onclick = function () {
    document.querySelector(".funny_letter").disabled=false
    document.querySelector(".checking").disabled=false
    secretWord = words[getRndInteger(0, words.length - 1)]
    document.querySelector(".word").value=""
    attemptes = 3
    document.querySelector(".attempts").innerHTML=attemptes
    letters = []
    document.querySelector(".funny_letter").value=""
   }
document.querySelector(".checking").onclick = function () {
    let userFunnyLetters = document.querySelector(".funny_letter").value
    if (userFunnyLetters === secretWord){
    alert("Congrats you just won 1.1 seconds ago!")
    document.querySelector(".checking").disabled=true
    document.querySelector(".funny_letter").disabled=true
    return
    }
   if (secretWord.indexOf(userFunnyLetters)==-1){
attemptes-=1
document.querySelector(".attempts").innerHTML=attemptes
}


    letters.push(userFunnyLetters)
    console.log(letters)
    let pizzaonelove = ""
    console.log(userFunnyLetters[0])
    for (let i = 0; i < secretWord.length; i++) {
        if (letters.indexOf(secretWord[i]) != -1) {

            pizzaonelove += secretWord[i]
        }
        else {
            pizzaonelove += "*"
        }
    }
    document.querySelector(".word").value = pizzaonelove
    document.querySelector(".funny_letter").value = ""
    if (secretWord == pizzaonelove) {
        alert("Wow, you finally won something in your life, woah yay!")
    }
if (attemptes == 0){
document.querySelector(".funny_letter").disabled=true
document.querySelector(".checking").disabled=true
}


}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function stopfire(){
    document.querySelector(".firegif").style.display="none"
    sound.stop()
}

document.querySelector(".ezpz").onclick=function(){
    attemptes=7
    document.querySelector(".attempts").innerHTML=attemptes
    }
    document.querySelector(".nrml").onclick=function(){
        attemptes=5
        document.querySelector(".attempts").innerHTML=attemptes
    }
    document.querySelector(".hardashell").onclick=function(){
        attemptes=3
        document.querySelector(".attempts").innerHTML=attemptes
        sound.currentTime=25
        sound.volume=0.2
        sound.play()
        document.querySelector(".firegif").style.display="block"
        setTimeout(() => {
            document.querySelector(".firegif").style.display="none"
    sound.pause()
        }, 2000);

    }