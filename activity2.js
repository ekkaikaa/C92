function getscore() {
    score = localStorage.getItem("Points");
    document.getElementById("update").innerHTML ="<h1> score: " + score + "</h1>"
}

function back() {
    window.location ="activity_1.html"
}