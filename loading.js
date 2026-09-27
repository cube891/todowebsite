function load() {
    document.getElementById("general").innerHTML = localStorage.getItem("general");
    document.getElementById("dates").innerHTML = localStorage.getItem("dates");
    document.getElementById("KIM").innerHTML = localStorage.getItem("KIM");
    document.getElementById("projects").innerHTML = localStorage.getItem("projects");
    document.getElementById("urgent").innerHTML = localStorage.getItem("urgent");
}