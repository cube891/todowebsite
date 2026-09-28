function UpdateSave() {
    localStorage.setItem("general", document.getElementById("general").value);
    localStorage.setItem("dates", document.getElementById("dates").value);
    localStorage.setItem("KIM", document.getElementById("KIM").value);
    localStorage.setItem("projects", document.getElementById("projects").value);
    localStorage.setItem("urgent", document.getElementById("urgent").value);
    
}

document.addEventListener("keydown", function CheckForSaving(event) {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "s") {
    event.preventDefault()
    window.alert("saved")
    UpdateSave()
  }
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "d") {
    event.preventDefault()
    window.open("doc.html", "_blank")
  }
});

document.addEventListener('visibilitychange', function CheckForClosing() {
    if (document.visibilityState === 'hidden') {
        UpdateSave()
    }
});