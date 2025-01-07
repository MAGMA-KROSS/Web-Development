let state = 0; // Tracks the current state (0, 1, 2, 3)

// Initial click to start the sequence
document.addEventListener("click", function handleClick(event) {
    if (event.button === 0) { // 0 is for left-click
        if (state === 0) {
            handleState1();
        } else if (state === 1) {
            handleState2();
        } else if (state === 2) {
            handleState3();
        }
    }
});

// Functions to handle different states
function handleState1() {
    state = 1; // Move to the next state
    document.querySelector(".buddy").style.animation = "none";
}

function handleState2() {
    state = 2; // Move to the next state
    document.querySelector(".buddy").style.display = "none";
    document.querySelector(".p1").style.display = "block";

    setTimeout(() => {
        document.querySelector(".p2").style.display = "block";
    }, 2000);

    setTimeout(() => {
        document.querySelector(".p3").style.display = "block";
    }, 4000);
}

function handleState3() {
    state = 3; // Move to the final state
    document.querySelector(".p1").innerHTML = " ";
    document.querySelector(".p2").innerHTML = " ";
    document.querySelector(".p3").innerHTML = " ";
    document.querySelector(".Ximg").style.height = "0";
    document.querySelector(".Oimg").style.display = "inline-block";
    document.querySelector(".Dbox").style.border = "2px solid #FF6700";
    document.querySelector(".Dbox").style.boxShadow = "0 0 15px #FF6700";
    document.querySelector(".p1").style.display = "none";
    document.querySelector(".p2").style.display = "none";
    document.querySelector(".p3").style.display = "none";
    document.querySelector(".players").style.display = "block";
    document.querySelector(".players").style.height = "150px";
    document.querySelector(".bot").style.display = "block";
    document.querySelector(".bot").style.height = "150px";
}

// Handle bot click
document.querySelector(".bot").addEventListener("click", () => {
    document.querySelector(".Oimg").style.height = "0";
    document.querySelector(".trobo").style.display = "block";
    document.querySelector(".bot").style.display = "none";
    document.querySelector(".players").style.display = "none";
    document.querySelector(".Dbox").style.border = "2px solid #00FFFF";
    document.querySelector(".Dbox").style.boxShadow = "0 0 15px #00FFFF";
    document.querySelector(".round1").style.display = "block ";
    document.querySelector(".round1").style.height = "150px";
    document.querySelector(".round2").style.display = "block";
    document.querySelector(".round2").style.height = "150px";
    document.querySelector(".round3").style.display = "block";
    document.querySelector(".round3").style.height = "150px";
});
// Handle 1v1 click
document.querySelector(".players").addEventListener("click", () => {
    document.querySelector(".Oimg").style.height = "0";
    document.querySelector(".trobo").style.display = "block";
    document.querySelector(".bot").style.display = "none";
    document.querySelector(".players").style.display = "none";
    document.querySelector(".Dbox").style.border = "2px solid #00FFFF";
    document.querySelector(".Dbox").style.boxShadow = "0 0 15px #00FFFF";
    document.querySelector(".round1").style.display = "block ";
    document.querySelector(".round1").style.height = "150px";
    document.querySelector(".round2").style.display = "block";
    document.querySelector(".round2").style.height = "150px";
    document.querySelector(".round3").style.display = "block";
    document.querySelector(".round3").style.height = "150px";
});
// Handle rounds click
document.querySelector(".round1").addEventListener("click", () => {
    document.querySelector(".trobo").style.display = "none";
    document.querySelector(".frobo").style.height = "1150px";
    document.querySelector(".frobo2").style.height = "650px";
    document.querySelector(".Dbox").style.border = "2px solid #9B4DFF";
    document.querySelector(".Dbox").style.boxShadow = "0 0 15px #9B4DFF";
    document.querySelector(".round1").style.display = "none ";
    document.querySelector(".round1").style.height = "0";
    document.querySelector(".round2").style.display = "none";
    document.querySelector(".round2").style.height = "0";
    document.querySelector(".round3").style.display = "none";
    document.querySelector(".round3").style.height = "0";
    document.querySelector(".threex").style.display = "block";
    document.querySelector(".threex").style.height = "150px";
    document.querySelector(".fourx").style.display = "block";
    document.querySelector(".matrix-size").style.height = "60vh";
    document.querySelector(".fourx").style.height = "150px";
});
document.querySelector(".round2").addEventListener("click", () => {
    document.querySelector(".trobo").style.display = "none";
    document.querySelector(".frobo").style.height = "1150px";
    document.querySelector(".frobo2").style.height = "650px";
    document.querySelector(".Dbox").style.border = "2px solid #9B4DFF";
    document.querySelector(".Dbox").style.boxShadow = "0 0 15px #9B4DFF";
    document.querySelector(".round1").style.display = "none ";
    document.querySelector(".round1").style.height = "0";
    document.querySelector(".round2").style.display = "none";
    document.querySelector(".round2").style.height = "0";
    document.querySelector(".round3").style.display = "none";
    document.querySelector(".round3").style.height = "0";
    document.querySelector(".threex").style.display = "block";
    document.querySelector(".threex").style.height = "150px";
    document.querySelector(".fourx").style.display = "block";
    document.querySelector(".fourx").style.height = "150px";
    document.querySelector(".matrix-size").style.height = "60vh";
});
document.querySelector(".round3").addEventListener("click", () => {
    document.querySelector(".matrix-size").style.height = "60vh";
    document.querySelector(".trobo").style.display = "none";
    document.querySelector(".frobo").style.height = "1150px";
    document.querySelector(".frobo2").style.height = "650px";
    document.querySelector(".Dbox").style.border = "2px solid #9B4DFF";
    document.querySelector(".Dbox").style.boxShadow = "0 0 15px #9B4DFF";
    document.querySelector(".round1").style.display = "none ";
    document.querySelector(".round1").style.height = "0";
    document.querySelector(".round2").style.display = "none";
    document.querySelector(".round2").style.height = "0";
    document.querySelector(".round3").style.display = "none";
    document.querySelector(".round3").style.height = "0";
    document.querySelector(".threex").style.display = "block";
    document.querySelector(".threex").style.height = "150px";
    document.querySelector(".fourx").style.display = "block";
    document.querySelector(".fourx").style.height = "150px";
});
document.querySelector(".fourx").addEventListener("click", () => {
    document.querySelector(".threex").style.display = "none";
    document.querySelector(".threex").style.height = "0";
    document.querySelector(".fourx").style.display = "none";
    document.querySelector(".fourx").style.height = "0";
    document.querySelector(".start-the-match").style.display = "inline";
    document.querySelector(".a").style.display = "none";
    
    
});
document.querySelector(".threex").addEventListener("click", () => {
    document.querySelector(".b").style.display = "none";
    document.querySelector(".threex").style.display = "none";
    document.querySelector(".threex").style.height = "0";
    document.querySelector(".fourx").style.display = "none";
    document.querySelector(".fourx").style.height = "0";
    document.querySelector(".start-the-match").style.display = "inline";

});
