"use strict";


class Listes{
    constructor(listes){
        this.listes = [];
    }
    add_listes(liste){
        this.listes.push(liste);
        const L = new Listes(listes)
    }
}

class Liste{
    constructor(name, tasks){
        this.name = name;
        this.tasks = [];
    }
    add_liste(name, task){
        tasks = [];
        this.tasks.push(task);
        const l = new Liste(name, tasks);
    }
}

class Task{
    constructor(name, date, status){
        this.name = name;
        this.date = date;
        this.status = status; 
    }
    add_task(name, date){
        const t = new Task(name, date, false);
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

function delListe(element) {
    element.remove();
}