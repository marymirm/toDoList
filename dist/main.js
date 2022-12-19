myToDos = [];

console.log("javascript connected correctly");

class MyListItemClass {
    constructor (title, description, dueDate, priority, finished) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.finished = finished;
    };

    setFinished(finished) {
        this.finished = finished;
    };

    isExpired() {
        let now = new Date ();
        return now > this.dueDate;
    };

    createTableRow() {
        const table = document.getElementById("table");
        const tr = document.createElement("tr");

        const tdTitle = document.createElement("td");
        tdTitle.textContent = this.title;

        const tdDescription = document.createElement("td");
        tdDescription.textContent = this.description;

        const tdDueDate = document.createElement("td");
        tdDueDate.textContent = this.dueDate;

        const tdPriority = document.createElement("td");
        tdPriority.textContent = this.priority;

        const tdFinished = document.createElement("td");
        tdFinished.textContent = this.finished;

        //Collapsible with button
        const tdCollapsible = document.createElement("td");
        tdCollapsible.classList.add("tdCollapsible");
        const collapsible = document.createElement("button")
        collapsible.classList.add("collapsible");
        collapsible.innerHTML = "+";


        tr.appendChild(tdTitle);
        tr.appendChild(tdDescription);
        tr.appendChild(tdDueDate);
        tr.appendChild(tdPriority);
        tr.appendChild(tdFinished);
        tr.appendChild(tdCollapsible);
        tdCollapsible.appendChild(collapsible);
        // tr.appendChild(content)
        // content.appendChild(pContent);
        table.appendChild(tr);
    }
}

function clearForm() {
    title.value = "";
    description.value = "";
    dueDate.value = "";
    priority.value = "";
};


function addToDo() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let dueDate = document.getElementById("dueDate").value;
    let priority = document.getElementById("priority").value;
    
    const ToDo = new MyListItemClass (title, description, dueDate, priority);
    myToDos.push(ToDo);
    console.log("To do item added to", ToDo, "and pushed to", myToDos)
    ToDo.createTableRow();
    clearForm();
};


// Functionality for Collapsible
let coll = document.getElementsByClassName("table");
let i;

console.log("Collapsible wired")
for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
    content.style.display = "none";
    } else {
    content.style.display = "block";
    }
    
});
}





// test form
function toggleForm(){
    document.body.classList.toggle('activeForm');
};


//Function that renders different To Do Lists

//DOM-modules

//User Interface functions

    //view all projects

    //view all todos in each project

    //expand todo list item to see/edit details

    //delete a todo


