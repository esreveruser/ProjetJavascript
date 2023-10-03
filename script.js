"use strict";

class task{
    constructor(name, date, status){
        this.name = name;
        this.date = date;
        this.status = status; 
    }
    affiche(){
        alert(`${this.name}, ${this.date}, ${this.status}`);
    }
}


formList.onsubmit = () =>{
    const li = document.createElement("li");
    const delet = document.createElement("span");

    delet.textContent = "(x)";
    delet.onclick = () => delListe(li);
    li.innerHTML = champList.value;
    li.appendChild(delet);
    liste.appendChild(li);
    champList.value = "";
    return false;
}

formTask.onsubmit = () =>{
    const li = document.createElement("li");
    li.textContent = champTask.value;
    task.appendChild(li);
    champTask.value = "";
    return false;
}

function delListe(element) {
    element.remove();
}