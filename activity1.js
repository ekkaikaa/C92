Score = 0;

function updatescore() {
Score= Score + 1;
document.getElementById("score").innerHTML = "Score -" + Score;
}

function savescore() {
    localStorage.setItem("Points",Score);
    
}

function nextpage() {
    window.location = "activity_2.html"; 
}