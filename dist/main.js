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
    }

    isExpired() {
        let now = new Date ();
        return now > this.dueDate;
    }

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

        tr.appendChild(tdTitle);
        tr.appendChild(tdDescription);
        tr.appendChild(tdDueDate);
        tr.appendChild(tdPriority);
        tr. appendChild(tdFinished);
        table.appendChild(tr);
    }
}

function addToDo() {
    let title = prompt("Add To Do");
    const ToDo1 = new MyListItemClass (title, 'desk', new Date(), 1, false);
    ToDo1.createTableRow();
}

// test form
function toggleForm(){
    document.body.classList.toggle('activeForm');
}


//Function that renders different To Do Lists

//DOM-modules

//User Interface functions

    //view all projects

    //view all todos in each project

    //expand todo list item to see/edit details

    //delete a todo


