let state = Math.floor(Math.random() * 2);;
if (state===0) {
    document.querySelector(".frobo").style.filter = "drop-shadow(0 0 25px #00FFAB)";
    
} else {     
    document.querySelector(".frobo2").style.filter = "drop-shadow(0 0 25px #00FFAB)";
   }
let id0 = 3;
let id1 = 3;
let id2 = 3;
let id3 = 3;
let id4 = 3;
let id5 = 3;
let id6 = 3;
let id7 = 3;
let id8 = 3;
// Function definitions


function states(event) {
    if (state === 1) {
        zero();
        state = 0;
    } else if (state === 0) {
        katta();
        state = 1;
    }
}

function katta() {
    document.querySelector(".zero .cross").style.display = "block";
    document.querySelector(".frobo2").style.filter = "drop-shadow(0 0 25px #00FFAB)";
    document.querySelector(".frobo").style.filter = "drop-shadow(0 0 0 #00FFAB)";
    id0 = 1;
}

function zero() {
    document.querySelector(".zero .circle").style.display = "block";
    document.querySelector(".frobo").style.filter = "drop-shadow(0 0 25px #00FFAB)";
    document.querySelector(".frobo2").style.filter = "drop-shadow(0 0 0 #00FFAB)";
    id0 = 0;
}

function states1(event) {
    if (state === 1) {
        zero1();
        state = 0;
    } else if (state === 0) {
        katta1();
        state = 1;
    }
}

function katta1() {
    document.querySelector(".one .cross").style.display = "block";
    document.querySelector(".frobo2").style.filter = "drop-shadow(0 0 25px #00FFAB)";
    document.querySelector(".frobo").style.filter = "drop-shadow(0 0 0 #00FFAB)";
    id1 = 1;
}

function zero1() {
    document.querySelector(".one .circle").style.display = "block";
    document.querySelector(".frobo").style.filter = "drop-shadow(0 0 25px #00FFAB)";
    document.querySelector(".frobo2").style.filter = "drop-shadow(0 0 0 #00FFAB)";
    id1 = 0;
}

function states2(event) {
    if (state === 1) {
        zero2();
        state = 0;
    } else if (state === 0) {
        katta2();
        state = 1;
    }
}

function katta2() {
    document.querySelector(".two .cross").style.display = "block";
    document.querySelector(".frobo2").style.filter = "drop-shadow(0 0 25px #00FFAB)";
    document.querySelector(".frobo").style.filter = "drop-shadow(0 0 0 #00FFAB)";
    id2 = 1;
}

function zero2() {
    document.querySelector(".two .circle").style.display = "block";
    document.querySelector(".frobo").style.filter = "drop-shadow(0 0 25px #00FFAB)";
    document.querySelector(".frobo2").style.filter = "drop-shadow(0 0 0 #00FFAB)";
    id2 = 0;
}

function states3(event) {
    if (state === 1) {
        zero3();
        state = 0;
    } else if (state === 0) {
        katta3();
        state = 1;
    }
}

function katta3() {
    document.querySelector(".three .cross").style.display = "block";
    document.querySelector(".frobo2").style.filter = "drop-shadow(0 0 25px #00FFAB)";
    document.querySelector(".frobo").style.filter = "drop-shadow(0 0 0 #00FFAB)";
    id3 = 1;
}

function zero3() {
    document.querySelector(".three .circle").style.display = "block";
    document.querySelector(".frobo").style.filter = "drop-shadow(0 0 25px #00FFAB)";
    document.querySelector(".frobo2").style.filter = "drop-shadow(0 0 0 #00FFAB)";
    id3 = 0;
}

function states4(event) {
    if (state === 1) {
        zero4();
        state = 0;
    } else if (state === 0) {
        katta4();
        state = 1;
    }
}

function katta4() {
    document.querySelector(".four .cross").style.display = "block";
    document.querySelector(".frobo2").style.filter = "drop-shadow(0 0 25px #00FFAB)";
    document.querySelector(".frobo").style.filter = "drop-shadow(0 0 0 #00FFAB)";
    id4 = 1;
}

function zero4() {
    document.querySelector(".four .circle").style.display = "block";
    document.querySelector(".frobo").style.filter = "drop-shadow(0 0 25px #00FFAB)";
    document.querySelector(".frobo2").style.filter = "drop-shadow(0 0 0 #00FFAB)";
    id4 = 0;
}

function states5(event) {
    if (state === 1) {
        zero5();
        state = 0;
    } else if (state === 0) {
        katta5();
        state = 1;
    }
}

function katta5() {
    document.querySelector(".five .cross").style.display = "block";
    document.querySelector(".frobo2").style.filter = "drop-shadow(0 0 25px #00FFAB)";
    document.querySelector(".frobo").style.filter = "drop-shadow(0 0 0 #00FFAB)";
    id5 = 1;
}

function zero5() {
    document.querySelector(".five .circle").style.display = "block";
    document.querySelector(".frobo").style.filter = "drop-shadow(0 0 25px #00FFAB)";
    document.querySelector(".frobo2").style.filter = "drop-shadow(0 0 0 #00FFAB)";
    id5 = 0;
}

function states6(event) {
    if (state === 1) {
        zero6();
        state = 0;
    } else if (state === 0) {
        katta6();
        state = 1;
    }
}

function katta6() {
    document.querySelector(".six .cross").style.display = "block";
    document.querySelector(".frobo2").style.filter = "drop-shadow(0 0 25px #00FFAB)";
    document.querySelector(".frobo").style.filter = "drop-shadow(0 0 0 #00FFAB)";
    id6 = 1;
}

function zero6() {
    document.querySelector(".six .circle").style.display = "block";
    document.querySelector(".frobo").style.filter = "drop-shadow(0 0 25px #00FFAB)";
    document.querySelector(".frobo2").style.filter = "drop-shadow(0 0 0 #00FFAB)";
    id6 = 0;
}

function states7(event) {
    if (state === 1) {
        zero7();
        state = 0;
    } else if (state === 0) {
        katta7();
        state = 1;
    }
}

function katta7() {
    document.querySelector(".seven .cross").style.display = "block";
    document.querySelector(".frobo2").style.filter = "drop-shadow(0 0 25px #00FFAB)";
    document.querySelector(".frobo").style.filter = "drop-shadow(0 0 0 #00FFAB)";
    id7 = 1;
}

function zero7() {
    document.querySelector(".seven .circle").style.display = "block";
    document.querySelector(".frobo").style.filter = "drop-shadow(0 0 25px #00FFAB)";
    document.querySelector(".frobo2").style.filter = "drop-shadow(0 0 0 #00FFAB)";
    id7 = 0;
}

function states8(event) {
    if (state === 1) {
        zero8();
        state = 0;
    } else if (state === 0) {
        katta8();
        state = 1;
    }
}

function katta8() {
    document.querySelector(".eight .cross").style.display = "block";
    document.querySelector(".frobo2").style.filter = "drop-shadow(0 0 25px #00FFAB)";
    document.querySelector(".frobo").style.filter = "drop-shadow(0 0 0 #00FFAB)";
    id8 = 1;
}

function zero8() {
    document.querySelector(".eight .circle").style.display = "block";
    document.querySelector(".frobo").style.filter = "drop-shadow(0 0 25px #00FFAB)";
    document.querySelector(".frobo2").style.filter = "drop-shadow(0 0 0 #00FFAB)";
    id8 = 0;
}




// Event listeners
document.querySelector(".zero").addEventListener('click', states, { once: true });
document.querySelector(".one").addEventListener('click', states1, { once: true });
document.querySelector(".two").addEventListener('click', states2, { once: true });
document.querySelector(".three").addEventListener('click', states3, { once: true });
document.querySelector(".four").addEventListener('click', states4, { once: true });
document.querySelector(".five").addEventListener('click', states5, { once: true });
document.querySelector(".six").addEventListener('click', states6, { once: true });
document.querySelector(".seven").addEventListener('click', states7, { once: true });
document.querySelector(".eight").addEventListener('click', states8, { once: true });


function win() {
    setTimeout(function () {
        if ((id0 === id1 && id1 === id2 && id0 === 0) || ((id3 === id4 && id4 === id5 && id3 === 0)) || ((id6 === id7 && id7 === id8 && id6 === 0)) || ((id0 === id3 && id3 === id6 && id0 === 0)) || ((id1 === id4 && id4 === id7 && id1 === 0)) || ((id2 === id5 && id5 === id8 && id2 === 0)) || ((id0 === id4 && id4 === id8 && id0 === 0)) || ((id2 === id4 && id4 === id6 && id2 === 0))) {

            document.querySelector(".game").style.display = "none";
            document.querySelector(".result").getElementsByTagName("div")[0].innerHTML = "Zero";
            document.querySelector(".result").getElementsByTagName("div")[1].innerHTML = "win";
            document.querySelector(".result").style.display = "flex";
            document.querySelector(".Dbox").style.border = "2px solid #FFFF33";
            document.querySelector(".Dbox").style.boxShadow = "0 0 15px #FFFF33";
            document.querySelector(".frobo2").style.transform = "scale(1.25)";
            document.querySelector(".frobo2").style.filter = "drop-shadow(0 0 65px #FFFF33)";
            document.querySelector(".frobo").style.filter = "invert(0.2)";
            

        } else if ((id0 === id1 && id1 === id2 && id0 === 1) || ((id3 === id4 && id4 === id5 && id3 === 1)) || ((id6 === id7 && id7 === id8 && id6 === 1)) || ((id0 === id3 && id3 === id6 && id0 === 1)) || ((id1 === id4 && id4 === id7 && id1 === 1)) || ((id2 === id5 && id5 === id8 && id2 === 1)) || ((id0 === id4 && id4 === id8 && id0 === 1)) || ((id2 === id4 && id4 === id6 && id2 === 1))) {
            document.querySelector(".game").style.display = "none";
            document.querySelector(".result").getElementsByTagName("div")[0].innerHTML = "Kross";
            document.querySelector(".result").getElementsByTagName("div")[1].innerHTML = "win";
            document.querySelector(".result").style.display = "flex";
            document.querySelector(".Dbox").style.border = "2px solid #FFFF33";
            document.querySelector(".Dbox").style.boxShadow = "0 0 15px #FFFF33";
            document.querySelector(".frobo").style.transform = "scale(1.25)";
            document.querySelector(".frobo").style.filter = "drop-shadow(0 0 65px #FFFF33)";
            document.querySelector(".frobo2").style.filter = "invert(0.2)";
        }

        else if(id0 !== 3 && id1 !== 3 && id2 !== 3 && id3 !== 3 && id4 !== 3 && id5 !== 3 && id6 !== 3 && id7 !== 3 && id8 !== 3){
            document.querySelector(".game").style.display = "none";
            document.querySelector(".result").getElementsByTagName("div")[0].innerHTML = "Draw";
            document.querySelector(".result").getElementsByTagName("div")[1].innerHTML = " ";
            document.querySelector(".result").style.display = "flex";
            document.querySelector(".Dbox").style.border = "2px solid #FFFF33";
            document.querySelector(".Dbox").style.boxShadow = "0 0 15px #FFFF33";
            document.querySelector(".frobo").style.transform = "scale(1.25)";
            document.querySelector(".frobo2").style.transform = "scale(1.25)";
            document.querySelector(".frobo").style.filter = "drop-shadow(0 0 65px #FFFF33)";
            document.querySelector(".frobo2").style.filter = "drop-shadow(0 0 65px #FFFF33)";
            document.querySelector(".frobo").style.filter = "invert(0.2)";
            document.querySelector(".frobo2").style.filter = "invert(0.2)";
        }
        else {
            check();
        }
    }, 100);
}
function check() {
    if ((id0 === id1 && id1 === id2 && id0 === 0) || ((id3 === id4 && id4 === id5 && id3 === 0)) || ((id6 === id7 && id7 === id8 && id6 === 0)) || ((id0 === id3 && id3 === id6 && id0 === 0)) || ((id1 === id4 && id4 === id7 && id1 === 0)) || ((id2 === id5 && id5 === id8 && id2 === 0)) || ((id0 === id4 && id4 === id8 && id0 === 0)) || ((id2 === id4 && id4 === id6 && id2 === 0))) {
        return;
    } else if ((id0 === id1 && id1 === id2 && id0 === 1) || ((id3 === id4 && id4 === id5 && id3 === 1)) || ((id6 === id7 && id7 === id8 && id6 === 1)) || ((id0 === id3 && id3 === id6 && id0 === 1)) || ((id1 === id4 && id4 === id7 && id1 === 1)) || ((id2 === id5 && id5 === id8 && id2 === 1)) || ((id0 === id4 && id4 === id8 && id0 === 1)) || ((id2 === id4 && id4 === id6 && id2 === 1))) {
        return;
    }
    else {
        win();
    }
}
win()
check()


