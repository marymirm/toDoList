myToDoList = [];


// make your individual to-do item
class toDoItem {
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
            // Hide delBtn too
            if (delBtn.style.display === "none") {
                delBtn.style.display = "block";
                } else {
                delBtn.style.display = "none";
                }
        });

        collapsible.id = "collapsible"
        collapsible.innerHTML = "+";
        
        const content = document.createElement("div");
        content.classList.add ("content");

        const pContent = document.createElement("p");
        pContent.classList.add ("content");
        // pContent.id = "content";
        pContent.textContent = "To do item created on: " + new Date;

        const delBtn = document.createElement("button");
        delBtn.classList.add ("delBtn");
        delBtn.classList.add ("content");
        delBtn.addEventListener("click", function() {
            console.log("clickity")
            tr.remove();
            creationDateAndDelBtn.remove();
        })
        delBtn.innerHTML = "x"

        //expandible info: date of creation and a delete button
        const creationDateAndDelBtn = document.createElement("div");
        creationDateAndDelBtn.id = 'creationDateAndDelBtn';

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
    input.value = "";
};

// find right list with its specified date ID
function addToDo() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let dueDate = document.getElementById("dueDate").value;
    let priority = document.getElementById("priority").value;
    
    const ToDo = new toDoItem (title, description, dueDate, priority);

    let idListSpanElementInHTML = document.getElementById('idList').innerHTML; // this, in the HTML, is a span-element that contains the listId (the creation date), and is set to display: none. This links the todo to a specific list
    myToDoList.forEach (function (list) {
        if (list.listId === idListSpanElementInHTML) {
            list.tasks.push(ToDo);
        }
    })
    ToDo.createTableRow();
    clearForm();
};


            // ------------------------ STEP 1 ------------------------- //
    //Functionality for creating new to do lists, to which individual to-do items can be added.

function addList() {
    let input = document.getElementById("input").value;
    const newList = new toDoList (input);
    myToDoList.push(newList);
    newList.submit();
    clearForm();
}

//submit button
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", addList);

// form functionality
function toggleForm(){
    document.body.classList.toggle('activeForm');
};
    
class toDoList{
    constructor (input) {
        this.input = input
        this.tasks = [];
        this.listId = Date.now().toString(); // this creates a unique ID for each list
    }
    submit () {
        const ul = document.getElementById("taskList")
        const newListName = document.createElement("li") // The only information this contains is it's date-id code.
        newListName.id = this.listId;
        newListName.textContent = this.input;
        let l = this;  // let l is needed to specify that 'this' refers to the constructor and not newListName.id = THIS.listId
        newListName.onclick = function () { // addEventListener does not work in this case
            console.log(l.tasks);
            renderListWithItsTasks(l)
        };

        const listDelBtn = document.createElement("button");
        listDelBtn.classList.add ("listDelBtn");
        listDelBtn.addEventListener("click", function() {
            newListName.remove();
            listDelBtn.remove();
        })
        listDelBtn.innerHTML = "x"
    
        ul.appendChild(newListName);
        newListName.appendChild(listDelBtn);
    }
}

// innerHTML is an invisible text area that is needed to identify a list by the ID (the date) assigned to it.
function renderListWithItsTasks (activeList) {
    let idListSpanElementInHTML = document.getElementById("idList");
    idListSpanElementInHTML.innerHTML = activeList.listId;

    
        const currentTR = document.querySelectorAll('#tr');
        const currentContentDIVs = document.querySelectorAll('.content')

            // Here, get all CURRENT table rows into an array
            // --> currentTR.push(tr) and currentContentDIVs.push(creationAndDelBtn) in lines 27 and 93

            // here use a for loop or some way to iterate over it
            // for each of them, remove it like you've done in previous code.
            if (currentTR.length > 0) { // check if the array is empty, if not, run for-loop. currentTr.length is an integer so can be bigger than 0. currentTR > 0 doesnt work because its an array.
                for(let i = 0; i <= currentTR.length; i++) { // length of the two const above is the same, so just one loop is enough
                    currentTR[i].remove();
                    // const tr = document.getElementById('tr');
                    // tr.remove();
                    currentContentDIVs[i].remove();
                    // const creationDateAndDelBtn = document.getElementById('creationDateAndDelBtn');
                    // creationDateAndDelBtn.remove();
                    }
            } else {
                return
            }
            // Current DOM elements are removed, we can move onto to adding new ones.
    
            // loop through myToDoList
            for (let i = 0; i <= myToDoList.length; i++) {
             // find the corresponding list using the ID........>> activeList.listId === idListSpanElementInHTML
                if (activeList.listId === idListSpanElementInHTML) {
                    // Whenever we find that list, access that list's tasks array.
                    const tasksVariable = this.tasks;
                    // For each of the tasks inside of that tasks arrayy, run the createTableRow() method.
                    tasksVariable.forEach(function (tasks) {
                    tasks[i].createTableRow();
                        });      
                    }    
                }
        }

 
