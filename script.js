const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject; //shortcut
    // const { dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
  .forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      renderTodoList();
  })
  })
}


/*
  for(let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject; //shortcut
    // const { dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${i}, 1);
      renderTodoList();
    " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  }

  */

  document.querySelector('.js-add-todo-button').addEventListener('click', () => {
    addTodo();
  });

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value.trim(); // Trim spaces from the input

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  // Clear previous error messages
  document.querySelector('.js-name-error').textContent = '';
  document.querySelector('.js-date-error').textContent = '';

  let isValid = true;


  // Validate name input
  if (name === '') {
    document.querySelector('.js-name-error').textContent = 'Todo name is required';
    isValid = false;
  }

  // Validate date input
  if (dueDate === '') {
    document.querySelector('.js-date-error').textContent = 'Due date is required';
    isValid = false;
  }


  // If valid, add todo to the list
  if (isValid) {
  todoList.push({
      // name: name,
      // dueDate: dueDate
      name, //shorthand property syntax
      dueDate
    });
  inputElement.value = '';
  dateInputElement.value = '';
  renderTodoList();
  }
}