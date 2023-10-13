//Gérer les tâches

//FONCTION D'AJOUT DE TÂCHES
function addingTask(event, taskTxt, listDiv) {
    //Création d'un contenaire type "ul" pour tâche
    const newTask = document.createElement("ul");
    newTask.classList.add("task");
    listDiv.appendChild(newTask);

    //Création d'un paragraphe pour afficher les tâches
    const printTask = document.createElement("p");
    printTask.innerText = taskTxt.value;
    newTask.appendChild(printTask);

    //Création d'un bouton pour supprimer la tâche
    const btnDeleteTask = document.createElement("button");
    btnDeleteTask.classList.add("btn-del-task");
    btnDeleteTask.innerText = "Supprimer tâche";
    btnDeleteTask.addEventListener("click", deleteTask);
    newTask.appendChild(btnDeleteTask);
    taskTxt.value = "";

    //Création d'un input type checkbox
    const btnCheckTask = document.createElement("input");
    btnCheckTask.setAttribute("type", "checkbox");
    btnDeleteTask.classList.add("checkDoTask");
    newTask.appendChild(btnCheckTask);

    //Création d'un input type date pour sélectionner la date voulu
    const inputDate = document.createElement("input");
    inputDate.setAttribute("type", "date");
    newTask.appendChild(inputDate);

    //Création d'un bouton pour appliquer la modification du nom de la tâche
    const modTask = document.createElement("button");
    modTask.classList.add("btn-mod-task");
    modTask.innerText = "Modifier tâche";
    newTask.appendChild(modTask);
    modTask.addEventListener("click", () => modifyTask(event, printTask, newTask, newtaskmod));

    //Création de l'input type text pour entrer le nouveau nom de la tâche
    const newtaskmod = document.createElement("input");
    newtaskmod.setAttribute("placeholder", "Modifier votre tâche...");
    newTask.appendChild(newtaskmod);
}

    //FONCTION DE SUPPRESSION DE TÂCHES
function deleteTask(event) {
    const itemToDel = event.target;
    itemToDel.parentElement.remove();
}

    //FONCTION DE MODIFICATION DE TÂCHES
function modifyTask(event, tasktomod, newTask, newtaskmod) {
    const itemToMod = event.target;
    tasktomod.innerText = newtaskmod.value;
    newtaskmod.value = "";
}