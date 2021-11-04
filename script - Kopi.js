let points;
let liv;
let myRand;
let speed;
let posArray;

//panda
const panda1 = document.querySelector("#panda_container1");
const panda2 = document.querySelector("#panda_container2");
const panda3 = document.querySelector("#panda_container3");

//poop
const poop1 = document.querySelector("#poop_container1");
const poop2 = document.querySelector("#poop_container2");
const poop3 = document.querySelector("#poop_container3");

//liv
const liv1 = document.querySelector("#liv1");
const liv2 = document.querySelector("#liv2");
const liv3 = document.querySelector("#liv3");

//sound
const soundpunch = document.querySelector("#sound_punch");
const soundfart = document.querySelector("#sound_fart");
const soundninja = document.querySelector("#sound_ninja");
const soundoff = document.querySelector("#sound_off_container");
const soundon = document.querySelector("#sound_on_container");

//screen, buttons, iu
const time = document.querySelector("#time_board_container");

const start = document.querySelector("#start");
const ready = document.querySelector("#ready");
const notready = document.querySelector("#not_ready");
const ui = document.querySelector("#game_ui");
const foreground = document.querySelector("#game_foreground");
const info = document.querySelector("#info_screen");
const over = document.querySelector("#game_over");


window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    //cleaning up
    soundninja.pause();
    start.classList = "";
    soundoff.classList = "";

    ready.classList.add("skjul");
    notready.classList.add("skjul");
    soundon.classList.add("skjul");

    //skjul skærme
    ui.classList.add("skjul");
    foreground.classList.add("skjul");
    info.classList.add("skjul");
    over.classList.add("skjul");
    document.querySelector("#level_complete").classList.add("skjul");

    //click listeners
    document.querySelector("#play").addEventListener("click", infoGame);
    soundoff.addEventListener("click", soundOff);
    soundon.addEventListener("click", soundOn);
}



function soundOff() {
    //visuals
    soundon.classList = "";
    soundoff.classList.add("skjul");


    soundninja.play();
    soundninja.volume = 0.1;
}

function soundOn() {
    //visuals
    soundoff.classList = "";
    soundon.classList.add("skjul");

    soundninja.pause();
    document.querySelector.currentTime = 0;

}



function infoGame() {
    console.log("infoGame");
    ready.classList = "";
    notready.classList = "";

    info.classList = "";
    start.classList.add("skjul");
    document.querySelector("#game_elements").classList.add("skjul");

    soundon.classList.add("skjul");
    soundoff.classList.add("skjul");

    ready.addEventListener("click", startGame);
    notready.addEventListener("click", sidenVises);

}



function startGame() {
    console.log("startGame");
    posArray = ["pos1", "pos2", "pos3", "pos4", "pos5", "pos6", "pos7", "pos8", "pos9"];


    //point
    points = 0;
    document.querySelector("#score_board_number").innerHTML = points;

    liv = 3;
    liv1.classList.remove("gray");
    liv2.classList.remove("gray");
    liv3.classList.remove("gray");


    speed = 1;


    //time
    time.firstElementChild.classList.add("time");
    time.addEventListener("animationend", stopSpillet);

    shuffle(posArray);

    //graphics
    info.classList.add("skjul");
    over.classList.add("skjul");
    document.querySelector("#level_complete").classList.add("skjul");
    document.querySelector("#game_elements").classList.add("vis");

    ui.classList.add("vis");
    foreground.classList.add("vis");

    //pandas

    panda1.classList.add(posArray.shift());
    myRand = Math.floor(Math.random() * 4) + 1;
    panda1.classList.add("delay" + myRand);
    panda1.classList.add("speed" + speed);


    panda2.classList.add(posArray.shift());
    myRand = Math.floor(Math.random() * 4) + 1;
    panda2.classList.add("delay" + myRand);
    panda2.classList.add("speed" + speed);


    panda3.classList.add(posArray.shift());
    myRand = Math.floor(Math.random() * 4) + 1;
    panda3.classList.add("delay" + myRand);
    panda3.classList.add("speed" + speed);

    ///poops

    poop1.classList.add(posArray.shift());
    myRand = Math.floor(Math.random() * 4) + 1;
    poop1.classList.add("delay" + myRand);
    poop1.classList.add("speed" + speed);


    poop2.classList.add(posArray.shift());
    myRand = Math.floor(Math.random() * 4) + 1;
    poop2.classList.add("delay" + myRand);
    poop2.classList.add("speed" + speed);

    poop3.classList.add(posArray.shift());
    myRand = Math.floor(Math.random() * 4) + 1;
    poop3.classList.add("delay" + myRand);
    poop3.classList.add("speed" + speed);

    //Start op_ned-animationer på alle elementer
    panda1.classList.add("pop");
    panda2.classList.add("pop");
    panda3.classList.add("pop");

    poop1.classList.add("evilpop");
    poop2.classList.add("evilpop");
    poop3.classList.add("evilpop");


    //Lyt efter op_ned-animationer er færdig
    panda1.addEventListener("animationiteration", pandaReset);
    panda2.addEventListener("animationiteration", pandaReset);
    panda3.addEventListener("animationiteration", pandaReset);

    poop1.addEventListener("animationiteration", poopReset);
    poop2.addEventListener("animationiteration", poopReset);
    poop3.addEventListener("animationiteration", poopReset);


    //lyt til klik
    panda1.addEventListener("mousedown", mousedownPanda);
    panda2.addEventListener("mousedown", mousedownPanda);
    panda3.addEventListener("mousedown", mousedownPanda);

    poop1.addEventListener("mousedown", mousedownPoop);
    poop2.addEventListener("mousedown", mousedownPoop);
    poop3.addEventListener("mousedown", mousedownPoop);
}
//animation for at klikke panda
function mousedownPanda() {
    console.log("mousedownPanda");
    this.removeEventListener("mousedown", mousedownPanda);

    //sound
    soundpunch.currentTime = 0;
    soundpunch.play();
    soundpunch.volume = 0.7;

    this.classList.add("rotation");

    points++;
    document.querySelector("#score_board_number").innerHTML = points;
    if (points >= 15) {
        speed = 3;
    } else if (points == 5) {
        speed = 2;
    } else {
        console.log("else");
    }


    this.firstElementChild.classList.add("forsvind");
    this.addEventListener("animationend", pandaReset);
}

//panda reset animation
function pandaReset() {
    console.log("pandaReset");
    //Laver classList om til en string (bogstaver)
    let test = String(this.classList);

    //Gemmer den class der har pos og et tal efter f.eks. pos8 og laver det om til en string
    let matches = String(test.match(/pos\d+/));

    //Sætter den positioner der var på elemetet tilbage i arrayet
    posArray.push(matches);

    this.firstElementChild.classList = "";
    this.classList = "";

    this.offsetHeight;
    shuffle(posArray);

    this.classList.add(posArray.shift());

    this.classList.add("speed" + speed);

    //Start op_ned-animationer på element
    this.classList.add("pop");

    //Lyt efter klik på element
    this.addEventListener("mousedown", mousedownPanda);
}

//animation for at klikke poop

function mousedownPoop() {
    console.log("mousedownPoop");
    this.removeEventListener("mousedown", mousedownPoop);

    //sound
    soundfart.currentTime = 0;
    soundfart.play();
    soundfart.volume = 0.9;

    this.classList.add("pause");
    this.firstElementChild.classList.add("forsvind");

    document.querySelector("#liv" + liv).classList.add("gray");
    liv--;

    this.addEventListener("animationend", poopReset);

    if (liv <= 0) {
        console.log("liv <= 0");
        stopSpillet();
    }
}

//poop rest animation
function poopReset() {
    console.log("poopReset");
    //Laver classList om til en string (bogstaver)
    let test = String(this.classList);

    //Gemmer den class der har pos og et tal efter f.eks. pos8 og laver det om til en string
    let matches = String(test.match(/pos\d+/));

    //Sætter den positioner der var på elemetet tilbage i arrayet
    posArray.push(matches);
    this.firstElementChild.classList = "";
    this.classList = "";

    this.offsetHeight;
    shuffle(posArray);

    this.classList.add(posArray.shift());


    this.classList.add("speed" + speed);

    this.classList.add("evilpop");


    this.addEventListener("mousedown", mousedownPoop);

}

function stopSpillet() {
    console.log("stopSpillet");

    //Start timer
    time.firstElementChild.classList.remove("time");
    time.removeEventListener("animationend", stopSpillet);

    poop1.classList = "";
    poop1.firstElementChild.classList = "";

    poop2.classList = "";
    poop2.firstElementChild.classList = "";

    poop3.classList = "";
    poop3.firstElementChild.classList = "";

    panda1.firstElementChild.classList = "";
    panda1.classList = "";

    panda2.classList = "";
    panda2.firstElementChild.classList = "";

    panda3.classList = "";
    panda3.firstElementChild.classList = "";

    panda1.removeEventListener("animationiteration", pandaReset);
    panda1.removeEventListener("mousedown", mousedownPanda);
    panda1.removeEventListener("animationend", pandaReset);

    panda2.removeEventListener("animationiteration", pandaReset);
    panda2.removeEventListener("mousedown", mousedownPanda);
    panda2.removeEventListener("animationend", pandaReset);


    panda3.removeEventListener("animationiteration", pandaReset);
    panda3.removeEventListener("mousedown", mousedownPanda);
    panda3.removeEventListener("animationend", pandaReset);

    poop1.removeEventListener("animationiteration", poopReset);
    poop1.removeEventListener("mousedown", mousedownPoop);
    poop1.removeEventListener("animationend", poopReset);

    poop2.removeEventListener("animationiteration", poopReset);
    poop2.removeEventListener("mousedown", mousedownPoop);
    poop2.removeEventListener("animationend", poopReset);

    poop3.removeEventListener("animationiteration", poopReset);
    poop3.removeEventListener("mousedown", mousedownPoop);
    poop3.removeEventListener("animationend", poopReset);

    if (liv <= 0) {
        gameover();
    } else if (points >= 15) {
        levelComplete();
    } else {
        gameover();
    }


}

function gameover() {
    console.log("gameover");
    foreground.classList = "";
    foreground.classList.add("skjul");
    ui.classList = "";
    ui.classList.add("skjul");

    over.classList = "";

    document.querySelector("#home1").addEventListener("click", sidenVises);
    document.querySelector("#restart1").addEventListener("click", startGame);



}

function levelComplete() {
    console.log("levelComplete");
    //skjul alt der ikke er lvlcom
    foreground.classList = "";
    foreground.classList.add("skjul");
    ui.classList = "";
    ui.classList.add("skjul");

    //fjern skjul fra lvlcom
    document.querySelector("#level_complete").classList = "";

    //vis points

    level_complete_points.textContent = "✰" + points + "✰";
    //buttons
    document.querySelector("#home2").addEventListener("click", sidenVises);
    document.querySelector("#restart2").addEventListener("click", startGame);

}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
