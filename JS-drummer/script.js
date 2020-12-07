window.addEventListener("load", ()=>{
    var loader = document.querySelector(".loader-wrapper");
    loader.style.display = "none";
    var main = document.querySelector(".main");
    main.style.display = "flex";

});
var pads = document.querySelectorAll(".sounds");
var keyNames = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
var keyNamesJSON = {
    "A":"CLAP",
    "S":"HI-HAT",
    "D":"KICK",
    "F":"OPENHAT",
    "G":"BOOM",
    "H":"RIDE",
    "J":"SNARE",
    "K":"TOM",
    "L":"TINK"
};
var sounds = ["clap.wav", "hihat.wav", "kick.wav", "openhat.wav", "boom.wav", "ride.wav", "snare.wav", "tom.wav", "tink.wav"];
var audios = [];
var kick = document.querySelector(".kick");
var boom = document.querySelector(".boom");
var hat = document.querySelector(".hat");
var ride = document.querySelector(".ride-up");
var openhat = document.querySelector(".open-up");
var snareAndTom = document.querySelector(".snare-tom");
var tom = document.querySelector(".tom");
var snare = document.querySelector(".snare");
var tink = document.querySelector(".tink");
var drum = [snareAndTom, hat, kick, openhat, boom, ride, snare, tom, tink];
var rightShoulder = document.querySelector(".right-shoulder");
var rightFrontArm = document.querySelector(".right-frontArm");
var rightDrumStick = document.querySelector(".right-drum-stick");
var leftShoulder = document.querySelector(".left-shoulder");
var leftFrontArm = document.querySelector(".left-frontArm");
var leftDrumStick = document.querySelector(".left-drum-stick");
var clapParts = [rightShoulder, rightFrontArm, rightDrumStick, leftShoulder, leftFrontArm, leftDrumStick];
var clapAnims = ["right-shoulder-clap", "right-frontArm-clap", "right-drum-stick-clap", "left-shoulder-clap",  "left-frontArm-clap", "left-drum-stick-clap"];
var hatParts = [leftShoulder, leftFrontArm, leftDrumStick]
var hatAnims = ["left-shoulder-hat", "left-frontArm-hat", "left-drum-stick-hat"];
var openhatParts = [rightShoulder, rightFrontArm, rightDrumStick, openhat];
var openhatAnims = ["right-shoulder-openhat", "right-frontArm-openhat", "right-drum-stick-openhat", "open-up-playing"];
var boomParts = [rightShoulder, rightFrontArm, rightDrumStick];
var boomAnims = ["right-shoulder-boom", "right-frontArm-boom", "right-drum-stick-boom"];
var rideParts = [leftShoulder, leftFrontArm, leftDrumStick, ride];
var rideAnims = ["left-shoulder-ride", "left-frontArm-ride", "left-drum-stick-ride", "ride-up-playing"];
var snareParts = [leftShoulder, leftFrontArm, leftDrumStick];
var snareAnims = ["left-shoulder-clap",  "left-frontArm-clap", "left-drum-stick-clap"];
var tomParts = [rightShoulder, rightFrontArm, rightDrumStick];
var tomAnims = ["right-shoulder-clap", "right-frontArm-clap", "right-drum-stick-clap"];
var globalParts = [clapParts, hatParts, ,openhatParts, boomParts, rideParts, snareParts, tomParts];
var globalAnims = [clapAnims, hatAnims, ,openhatAnims, boomAnims, rideAnims, snareAnims, tomAnims];
pads.forEach((pad, index)=>{
    let key = document.createElement("p");
    key.className = "soundsKey";
    key.innerHTML = keyNames[index];
    let soundType = document.createElement("p");
    soundType.className = "soundTypes";
    soundType.innerHTML = keyNamesJSON[keyNames[index]];
    var audio = document.createElement("audio");
    audio.src = `sounds/${sounds[index]}`;
    audios.push(audio);
    pad.appendChild(audio);
    pad.appendChild(key);
    pad.appendChild(soundType);
});
console.log(audios);
window.addEventListener("keydown", (e)=>{
    if(e.keyCode == 65){
        if(!audios[0]) return;
        audios[0].currentTime = 0;
        audios[0].play();
        audios[0].parentElement.classList.add("playStatus");
        drum[0].classList.add("playDrum");
        clapParts.forEach((part,index) => {part.classList.add(clapAnims[index]);});
    }
    if(e.keyCode == 83){
        if(!audios[1]) return;
        audios[1].currentTime = 0;
        audios[1].play();
        audios[1].parentElement.classList.add("playStatus");
        drum[1].classList.add("playDrum");
        hatParts.forEach((part, index) => {
            part.classList.add(hatAnims[index]);
        });
    }
    if(e.keyCode == 68){
        if(!audios[2]) return;
        audios[2].currentTime = 0;
        audios[2].play();
        audios[2].parentElement.classList.add("playStatus");
        drum[2].classList.add("playDrum");
    }
    if(e.keyCode == 70){
        if(!audios[3]) return;
        audios[3].currentTime = 0;
        audios[3].play();
        audios[3].parentElement.classList.add("playStatus");
        openhatParts.forEach((part, index) => {
            part.classList.add(openhatAnims[index]);
        });
    }
    if(e.keyCode == 71){
        if(!audios[4]) return;
        audios[4].currentTime = 0;
        audios[4].play();
        audios[4].parentElement.classList.add("playStatus");
        drum[4].classList.add("playDrum");
        boomParts.forEach((part, index) => {
            part.classList.add(boomAnims[index]);
        });
    }
    if(e.keyCode == 72){
        if(!audios[5]) return;
        audios[5].currentTime = 0;
        audios[5].play();
        audios[5].parentElement.classList.add("playStatus");
        rideParts.forEach((part, index) => {
            part.classList.add(rideAnims[index]);
        });
    }
    if(e.keyCode == 74){
        if(!audios[6]) return;
        audios[6].currentTime = 0;
        audios[6].play();
        audios[6].parentElement.classList.add("playStatus");
        drum[6].classList.add("playDrum");
        snareParts.forEach((part, index) => {
            part.classList.add(snareAnims[index]);
        });
    }
    if(e.keyCode == 75){
        if(!audios[7]) return;
        audios[7].currentTime = 0;
        audios[7].play();
        audios[7].parentElement.classList.add("playStatus");
        drum[7].classList.add("playDrum");
        tomParts.forEach((part, index) => {
            part.classList.add(tomAnims[index]);
        });
    }
    if(e.keyCode == 76){
        if(!audios[8]) return;
        audios[8].currentTime = 0;
        audios[8].play();
        audios[8].parentElement.classList.add("playStatus");
        drum[8].classList.add("playDrum");
    }
})
pads.forEach((pad) => pad.addEventListener("transitionend", removeClass));
function removeClass(e){
    if(e.propertyName !== "transform") return;
    this.classList.remove("playStatus");
    drum[[...pads].indexOf(this)].classList.remove("playDrum");
    globalParts[[...pads].indexOf(this)].forEach((part, index) => {
        part.classList.remove(globalAnims[[...pads].indexOf(this)][index]);
    })
}
