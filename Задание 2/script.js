const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');
const showAllBtn = document.getElementById('show-all');
const showCompletedBtn = document.getElementById('show-completed');
const showActiveBtn = document.getElementById('show-active');

let todos = [];

// Функция для добавления новой задачи
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText === '') return;

    const todo = {
        id: Date.now(),
        text: todoText,
        completed: false
    };
    todos.push(todo);
    todoInput.value = ''; 
    renderTodos();
}

// Функция для отображения задач в списке
function renderTodos(filter = 'all') {
    todoList.innerHTML = ''; 

    todos.forEach(todo => {
        if (filter === 'completed' && !todo.completed) return;
        if (filter === 'active' && todo.completed) return;

        const li = document.createElement('li');
        li.className = 'todo-item' + (todo.completed ? ' completed' : '');

        li.innerHTML = `
            <span class="todo-text ${todo.completed ? 'completed' : ''}">
                ${todo.text}
            </span>
            <button data-id="${todo.id}">Удалить</button>
        `;

        li.querySelector('.todo-text').addEventListener('click', () => toggleComplete(todo.id));

        todoList.appendChild(li);
    });
}

// Функция для завершения задачи
function toggleComplete(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            todo.completed = !todo.completed;
        }
        return todo;
    });
    renderTodos();
}

// Функция для удаления задачи
todoList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const id = parseInt(e.target.dataset.id, 10);
        todos = todos.filter(todo => todo.id !== id);
        renderTodos();
    }
});

// Добавление задачи
addTodoBtn.addEventListener('click', addTodo);

// Фильтрация
showAllBtn.addEventListener('click', () => renderTodos('all'));
showCompletedBtn.addEventListener('click', () => renderTodos('completed'));
showActiveBtn.addEventListener('click', () => renderTodos('active'));
