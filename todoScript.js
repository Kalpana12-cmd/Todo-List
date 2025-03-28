let arr = []; // Start with an empty array

fun1();

function fun1() {
    let htmlElement = '';

    arr.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject;
        const html = `
            <div> ${name} </div>
            <div> ${dueDate} </div>
            <button class="update-todo-button" data-index="${index}">Update</button>
            <button class="delete-todo-button" data-index="${index}">Delete</button> 
        `;
        htmlElement += html;
    });

    document.querySelector('.container').innerHTML = htmlElement;

    // Attach event listeners for delete buttons
    document.querySelectorAll('.delete-todo-button').forEach(deleteButton => {
        deleteButton.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            arr.splice(index, 1);
            fun1();
        });
    });

    // Attach event listeners for update buttons
    document.querySelectorAll('.update-todo-button').forEach(updateButton => {
        updateButton.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            updateTask(index);
        });
    });
}

// Add button event listener
document.querySelector('.js-add-button').addEventListener('click', () => {
    content();
});

function content() {
    const bar = document.querySelector('.js-bar');
    const name = bar.value.trim();
    const dateInputElement = document.querySelector('.calender');
    const dueDate = dateInputElement.value;

    if (name === "" || dueDate === "") {
        alert("Please enter a valid task and date.");
        return;
    }

    arr.push({ name, dueDate });

    bar.value = '';
    dateInputElement.value = '';

    fun1();
}

// Function to update a task
function updateTask(index) {
    const newName = prompt("Enter new task name:", arr[index].name);
    const newDueDate = prompt("Enter new due date:", arr[index].dueDate);

    if (newName !== null && newDueDate !== null && newName.trim() !== "" && newDueDate.trim() !== "") {
        arr[index].name = newName.trim();
        arr[index].dueDate = newDueDate.trim();
        fun1();
    } else {
        alert("Invalid input. Task not updated.");
    }
}
