//Gérer les listes

    //FONCTION D'AJOUT DE TÂCHES
    function addList(event) {
        event.preventDefault();
    
        //Création d'une div "list" pour l'ajout des listes
        const listDiv = document.createElement("div");
        listDiv.classList.add("list");
        listes.appendChild(listDiv);
    
        //Création d'une div pour mettre dedans le input text, bouton supp et boutton ajouter
        const divido = document.createElement("div");
        divido.classList.add("container-div-list");
        listDiv.appendChild(divido);
    
        //Création d'un élément h1 pour afficher le nom des listes
        const newList = document.createElement("h1");
        newList.innerText = btnAddListName.value;
        newList.classList.add("list-name");
        divido.appendChild(newList);
    
        //Création du d'un bouton pour supprimer la liste
        const btnDeleteList = document.createElement("button");
        btnDeleteList.classList.add("btn-del-list");
        btnDeleteList.innerText = "Supprimer liste";
        divido.appendChild(btnDeleteList);
    
        //Création d'un input type text pour ajouter une tâche lorsqu'une liste est créé
        const addTask = document.createElement("input");
        addTask.classList.add("input-add-task");
        addTask.setAttribute("type", "text");
        addTask.setAttribute("placeholder", "Ajouter une tâche...");
        divido.appendChild(addTask);
        
        //Création d'un bouton pour ajouter une tâche lorsqu'une liste est créé
        const btnAddTask = document.createElement("button");
        btnAddTask.classList.add("btn-add-task");
        btnAddTask.innerText = "Ajouter tâche";
        divido.appendChild(btnAddTask);
        btnAddTask.addEventListener("click", () => addingTask(event, addTask, listDiv));
    
        //Réinitialisation du champs dans le placeholder
        btnAddListName.value = "";
    }
    
        //FONCTION DE SUPPRESSION DE LISTES
    function deleteList(event) {
        const itemToDel = event.target;
        if (itemToDel.classList[0] === "btn-del-list") {
            itemToDel.parentElement.parentElement.remove();
        }
    }