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
        return now > this.dueDate
    }

    createTableRow() {
        const table = document.getElementById("table1");
        const tr = document.createElement("tr");

        const tdTitle = document.createElement("td");
        tdTitle.textContent = this.title;

        const tdDescription = document.createElement("td");
        tdDescription.textContent = this.description;


        tr.appendChild(tdTitle);
        tr.appendChild(tdDescription);
        table.appendChild(tr);
    }
}

function addToDo() {
    let title = prompt("Add To Do");
    console.log(title, new Date());
    const ToDo1 = new MyListItemClass (title, 'desk', new Date(), 1, false);
    ToDo1.createTableRow();
}



//Function that renders different To Do Lists

//DOM-modules

//User Interface functions

    //view all projects

    //view all todos in each project

    //expand todo list item to see/edit details

    //delete a todo


