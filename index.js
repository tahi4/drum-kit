function startTransition(e)

{
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
     //you can select full tags w/o giving a . or # 
    //here we took the audio tag and specified that we're selecting the data-key el for the keycode
    const key =  document.querySelector(`.key[data-key = "${e.keyCode}"]`) //for keycode
    if (!audio){ return }
    //if no keycode relates to audio then return nothing
    audio.currentTime = 0 //restarts audio
    audio.play() //.play() starts current audio
    key.classList.add("playing") //previously the key class didnt have a playing (but we need that for transition effect)
}

const keys = document.querySelectorAll(".key")
function removeTransition(e){
   // if(e.propertyName !== "transform"){return} //basically skip it if ts not a transform
    //console.log(e.propertyName) //we dont need the first two lines (only used for our own understanding lol)
    this.classList.remove("playing") 
// this = what is called against it e.g. remove transition is in an addEventListner and against it is a key (so this = key)
}
window.addEventListener("keydown", startTransition)
//window function used to show that when this window opens and we press down on a key, this function will happen
keys.forEach( key => key.addEventListener("transitionend", removeTransition)) //for each key when the transition ends , we remove the transitio 
