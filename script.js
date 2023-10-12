//Sélecteurs

const btnAddListName = document.querySelector(".btnAddListName");
const btnAddList = document.querySelector(".btnAddList");
const listes = document.querySelector(".listes");

//Event listeners

btnAddList.addEventListener("click", addList);
listes.addEventListener("click", deleteList);

//Fonctions

function addList(event) {
    //Empêche bug
    event.preventDefault();
    //Création d'une div pour l'ajout des listes
    const listDiv = document.createElement("div");
    //Ajout de la classe "liste" dans la div
    listDiv.classList.add("list");
    //Création d'un li pour l'ajout de la liste
    const newList = document.createElement("li");
    newList.innerText = btnAddListName.value;
    //Ajout de la classe "listName" dans le li
    newList.classList.add("list-name");
    //Ajout du li dans la div
    listDiv.appendChild(newList);
    //Création d'un bouton pour supprimer la liste
    const btnDeleteList = document.createElement("button");
    //Ajout de la classe "btn-del-list" dans le bouton
    btnDeleteList.classList.add("btn-del-list");
    //Ajout du bouton dans la div list
    listDiv.appendChild(btnDeleteList);
    //Ajout de la div list dans la liste non ordonnée "listes" 
    listes.appendChild(listDiv);
    //Réinitialisation du champs dans le placeholder
    btnAddListName.value = "";
    //
    //Création d'un input type text pour ajouter une tâche
    const addTask = document.createElement("input");
    addTask.classList.add("input-add-task");
    // addTask.innerHTML = "remplace";
    listDiv.appendChild(addTask);
    //Création d'un input type date pour ajouter à la tâche une deadline
    const addDate = document.createElement("input");
    listDiv.appendChild(addTask);
}

function deleteList(event) {
    const itemToDel = event.target;
    if (itemToDel.classList[0] === "btn-del-list") {
        itemToDel.parentElement.remove();
    }
}

function addTasks(event) {
    //Empêche bug
    event.preventDefault();
    //Création d'une div pour l'ajout des tâches
    const taskDiv = document.createElement("div");
    //Ajout de la classe "task" dans la div
    taskDiv.classList.add("task");
    //Création d'un li pour l'ajout de la tâche
    const newTask = document.createElement("li");
    newTask.innerText = btnAddTaskName.value;
    //Ajout de la classe "taskName" dans le li
    newTask.classList.add("task-name");
    //Ajout du li dans la div
    taskDiv.appendChild(newTask);
    //Création d'un bouton pour supprimer la tâche
    const btnDeleteTask = document.createElement("button");
    //Ajout de la classe "btn-del-task" dans le bouton
}