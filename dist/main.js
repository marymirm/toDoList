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
        tr.id = "tr"

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

        // Collapsible with button
        const tdCollapsible = document.createElement("td");
        tdCollapsible.classList.add("tdCollapsible");

        const collapsible = document.createElement("button");
        collapsible.classList.add("collapsible");


        // Collapsible functionality is all the way up here because the addEventListener
        // has to be added to collapsible as soon as it is created, otherwise it misses the event on pageload and won't work.
        collapsible.addEventListener("click", function (colEvent) {
            colEvent.currentTarget.classList.toggle("active");
            let content = pContent;
            if (content.style.display === "none") {
            content.style.display = "block";
            } else {
            content.style.display = "none";
            }
        });

        collapsible.id = "collapsible"
        collapsible.innerHTML = "+";
        
        const content = document.createElement("div");
        content.classList.add ("content");

        const pContent = document.createElement("p");
        pContent.classList.add ("content");
        pContent.id = "content";
        pContent.textContent = "To do item created on: " + new Date;

        const delBtn = document.createElement("button");
        delBtn.classList.add ("delBtn");
        delBtn.addEventListener("click", function() {
            console.log("clickity")
            // const tr = document.getElementById("tr")
            tr.remove();
            creationDateAndDelBtn.remove();
        })
        delBtn.innerHTML = "x"

        //expandible info: date of creation and later on, a delete button
        const creationDateAndDelBtn = document.createElement("tr")

        tr.appendChild(tdTitle);
        tr.appendChild(tdDescription);
        tr.appendChild(tdDueDate);
        tr.appendChild(tdPriority);
        tr.appendChild(tdFinished);
        tr.appendChild(tdCollapsible);
        tdCollapsible.appendChild(collapsible);
        creationDateAndDelBtn.appendChild(content)
        content.appendChild(pContent);
        content.appendChild(delBtn);
        table.appendChild(tr);
        table.appendChild(creationDateAndDelBtn);
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



    //Functionality for creating new to do lists
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", submit);

function submit () {
    const ul = document.getElementById("taskList")
    const newList = document.createElement("li")
    newList.textContent = document.getElementById("input").value;

    ul.appendChild(newList);
}



// form functionality
function toggleForm(){
    document.body.classList.toggle('activeForm');
};




// Functionality for Collapsible

// function makeItCollapse () {
//     let coll = document.getElementsByClassName("collapsible");
//     let i;
//     pContent = document.getElementById("content")

//     console.log("Collapsible wired")
//         for (i = 0; i < coll.length; i++) {
//         coll[i].addEventListener("click", function(colEvent) {
//             colEvent.currentTarget.classList.toggle("active");
//             let content = pContent;
//             if (content.style.display === "block") {
//             content.style.display = "none";
//             } else {
//             content.style.display = "block";
//             }
//         });
//     }
// }




//Function that renders different To Do Lists

//DOM-modules

//User Interface functions

    //view all projects

    //view all todos in each project

    //expand todo list item to see/edit details

    //delete a todo


