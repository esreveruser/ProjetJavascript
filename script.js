//Sélecteurs

const btnAddListName = document.querySelector(".btnAddListName");
const btnAddList = document.querySelector(".btnAddList");
const listes = document.querySelector(".listes");

//Event listeners

btnAddList.addEventListener("click", addList);
listes.addEventListener("click", deleteList);

//Fonctions

function addList(event) {
    //LISTES
    //Empêche bug
    event.preventDefault();
    //Création d'une div pour l'ajout des listes
    const listDiv = document.createElement("div");
    //Ajout de la classe "liste" dans la div
    listDiv.classList.add("list");
    //Création d'un li pour l'ajout de la liste
    const newList = document.createElement("h1");
    newList.innerText = btnAddListName.value;
    //Ajout de la classe "listName" dans le li
    newList.classList.add("list-name");
    //Ajout du li dans la div
    listDiv.appendChild(newList);
    //Création d'un bouton pour supprimer la liste
    const btnDeleteList = document.createElement("button");
    //Ajout de la classe "btn-del-list" dans le bouton
    btnDeleteList.classList.add("btn-del-list");
    btnDeleteList.innerText = "Supprimer la liste";
    //Ajout du bouton dans la div list
    listDiv.appendChild(btnDeleteList);
    //Ajout de la div list dans la liste non ordonnée "listes" 
    listes.appendChild(listDiv);
    //Réinitialisation du champs dans le placeholder
    btnAddListName.value = "";
    //TACHES
    //Création d'un input type text pour ajouter une tâche
    const addTask = document.createElement("input");
    //Ajout de la classe "input-add-task" dans le input
    addTask.classList.add("input-add-task");
    //Ajout du type text dans le input
    addTask.setAttribute("type", "text");
    //Ajout du placeholder dans le input
    addTask.setAttribute("placeholder", "Ajouter une tâche...");
    //Ajout du input dans la div list
    listDiv.appendChild(addTask);
    //Création d'un bouton pour ajouter une tâche
    const btnAddTask = document.createElement("button");
    btnAddTask.classList.add("btn-add-task");
    btnAddTask.innerText = "Ajouter une tâche";
    listDiv.appendChild(btnAddTask);
    btnAddTask.addEventListener("click", () => addingTask(event, addTask, listDiv));
}

function deleteList(event) {
    const itemToDel = event.target;
    if (itemToDel.classList[0] === "btn-del-list") {
        itemToDel.parentElement.remove();
    }
}

function addingTask(event, taskTxt, listDiv) {
    const newTask = document.createElement("ul");
    newTask.classList.add("task");
    listDiv.appendChild(newTask);

    const printTask = document.createElement("p");
    printTask.innerText = taskTxt.value;
    newTask.appendChild(printTask);

    const btnDeleteTask = document.createElement("button");
    btnDeleteTask.classList.add("btn-del-task");
    btnDeleteTask.innerText = "Delete task";
    btnDeleteTask.addEventListener("click", deleteTask);
    newTask.appendChild(btnDeleteTask);
    taskTxt.value = "";

    const btnCheckTask = document.createElement("input");
    btnCheckTask.setAttribute("type", "checkbox");
    btnDeleteTask.classList.add("checkDoTask");
    console.log(btnCheckTask.value);
    newTask.appendChild(btnCheckTask);

    const calendrierdevacance = document.createElement("input");
    calendrierdevacance.setAttribute("type", "date");
    newTask.appendChild(calendrierdevacance);

    const modTask = document.createElement("button");
    modTask.classList.add("btn-mod-task");
    modTask.innerText = "Modifier tâche";
    newTask.appendChild(modTask);
    modTask.addEventListener("click", () => modifyTask(event, printTask, newTask, newtaskmod));




    const newtaskmod = document.createElement("input");
    newtaskmod.setAttribute("placeholder", "Modifier votre tâche...");
    newTask.appendChild(newtaskmod);
}

function deleteTask(event) {
    const itemToDel = event.target;
    itemToDel.parentElement.remove();
}

function modifyTask(event, tasktomod, newTask, newtaskmod) {
    const itemToMod = event.target;
    tasktomod.innerText = newtaskmod.value;
    newtaskmod.value = "";
}
