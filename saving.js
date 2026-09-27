function UpdateSave() {
    window.alert("save function got triggered");
    localStorage.setItem("general", document.getElementById("general").value);
    localStorage.setItem("dates", document.getElementById("dates").value);
    localStorage.setItem("KIM", document.getElementById("KIM").value);
    localStorage.setItem("projects", document.getElementById("projects").value);
    localStorage.setItem("urgent", document.getElementById("urgent").value);
}