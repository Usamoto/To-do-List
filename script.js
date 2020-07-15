/* 

TODO: get elements (by Id)


*/

// * The Procedural Way

const date = new Date();
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
// date
const indexDate = document.getElementById('categoriesDate');
if (indexDate) {
  indexDate.textContent = `Today, ${date.getDate()} ${
  months[date.getMonth()]
} ${date.getFullYear()}`;
}

const categoryDate = document.getElementById('categoryDate');
if (categoryDate) {
  categoryDate.textContent = `Today, ${date.getDate()} ${
  months[date.getMonth()]
} ${date.getFullYear()}`;
}


// containers
const categories = document.getElementById('categories');
const toDos = document.getElementById('toDos');
// add category or to-do
const addToDo = document.getElementById('addToDo');
const addCategory = document.getElementById('addCategory');

const backToCategory = document.getElementById('backToCategory');

const addCategoryForm = document.getElementById('addCategoryForm');
const addCategoryOverlay = document.getElementById('addCategoryOverlay');

const addTodoForm = document.getElementById("addTodoForm");
const addTodoOverlay = document.getElementById("addTodoOverlay");

if (backToCategory) {
  backToCategory.addEventListener('click', () => {
    window.location.href = 'http://127.0.0.1:5500/index.html'
  })
}

if (addToDo) {
  const todoInput = addTodoForm.querySelector('input');
  const noTodos = document.getElementById('noTodos');

  addToDo.addEventListener('click', () => {
    addTodoForm.classList.remove('invisible');
    addTodoOverlay.classList.remove('invisible');
  })

  addTodoOverlay.addEventListener("click", () => {
    addTodoForm.classList.add("invisible");
    addTodoOverlay.classList.add("invisible");
    todoInput.value = '';
  })

  addTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (todoInput.value.trim()) {

      const todoEl = document.createElement("div");
      todoEl.classList.add("category");

      const circleLink = document.createElement("div");
      circleLink.classList.add("circle-link");

      const circle = document.createElement("div");
      circle.classList.add("circle");

      const todoName = document.createElement("p");
      todoName.classList.add("category-link");
      todoName.textContent = todoInput.value.trim();
      circleLink.appendChild(circle);
      circleLink.appendChild(todoName);
      todoEl.appendChild(circleLink);

      const icons = document.createElement('div');
      icons.classList.add('icons');

      const editIcon = document.createElement('i');
      editIcon.classList.add('material-icons');
      editIcon.textContent = 'create';

      const trashIcon = document.createElement('i');
      trashIcon.classList.add('material-icons');
      trashIcon.textContent = 'delete';

      trashIcon.addEventListener('click', () => {
        document.querySelector('.categories-container').removeChild(todoEl);
        if (document.querySelector('.categories-container').childElementCount <= 5) {
          noTodos.classList.remove('invisible');
        }
      })

      icons.appendChild(editIcon);
      icons.appendChild(trashIcon);

      todoEl.appendChild(icons);
      noTodos.classList.add('invisible');
      document.querySelector('.categories-container').appendChild(todoEl);

      addTodoForm.classList.add("invisible");
      addTodoOverlay.classList.add("invisible");
      todoInput.value = '';
    }
  })
}

if (addCategory) {
  const categoryFormInput = addCategoryForm.querySelector('input');
  const noCategories = document.getElementById('noCategories');

  addCategory.addEventListener('click', () => {
    addCategoryForm.classList.remove('invisible');
    addCategoryOverlay.classList.remove('invisible');
  })

  addCategoryOverlay.addEventListener('click', () => {
    addCategoryForm.classList.add('invisible');
    addCategoryOverlay.classList.add('invisible');
    categoryFormInput.value = 'Untitled category';
  })

  addCategoryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (categoryFormInput.value.trim()) {

      const categoryEl = document.createElement('div');
      categoryEl.classList.add('category');
      const categoryLink = document.createElement("a");
      categoryLink.classList.add("category-link");
      categoryLink.href = `/category.html?categoryname=${categoryFormInput.value.trim()}`;
      categoryLink.textContent = categoryFormInput.value.trim();
      categoryEl.appendChild(categoryLink);

      const icons = document.createElement('div');
      icons.classList.add('icons');

      const editIcon = document.createElement('i');
      editIcon.classList.add('material-icons');
      editIcon.textContent = 'create';

      const trashIcon = document.createElement('i');
      trashIcon.classList.add('material-icons');
      trashIcon.textContent = 'delete';

      trashIcon.addEventListener('click', () => {
        document.querySelector('.categories-container').removeChild(categoryEl);
        if (document.querySelector('.categories-container').childElementCount <= 5) {
          noCategories.classList.remove('invisible');
        }
      })

      icons.appendChild(editIcon);
      icons.appendChild(trashIcon);

      categoryEl.appendChild(icons);
      noCategories.classList.add('invisible');
      document.querySelector('.categories-container').appendChild(categoryEl);



      addCategoryForm.classList.add('invisible');
      addCategoryOverlay.classList.add('invisible');
      categoryFormInput.value = 'Untitled category';
    }
  })
}