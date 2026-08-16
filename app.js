

let set = setInterval(()=> {
    const date = new Date();

const clock = document.querySelector("#clock");
let options ={
    timeZone:'Asia/Karachi',
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit'
}
    clock.textContent = date.toLocaleTimeString('en-UN',options)

    let Audio = document.querySelector("audio");
    // Audio.play();
}, 1000);



