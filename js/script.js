let inputElement = document.querySelector('.todo-input')
let addBtn = document.querySelector('.btn-add')
let ulList = document.querySelector('.todo-list')
let doneBtn = document.querySelector('.btn-done')
let editBtn = document.querySelector('.btn-edit')
let removeBtn = document.querySelector('.btn-remove')
let errorInfo = document.querySelector('.error-info')
let editInputElement = document.querySelector('.popup-input')
let popup = document.querySelector('.popup')
let popupBtnOk = document.querySelector('.popup-btn-ok')
let popupBtnCancel = document.querySelector('.popup-btn-cancel')

let newTask
let todoToEdit

const addTaskToList = () => {
	if (inputElement.value !== '') {
		newTask = document.createElement('li')
		let inputValue = inputElement.value
		newTask.textContent = inputElement.value
		ulList.append(newTask)
		createNewButtons()
		inputElement.value = ''
		errorInfo.textContent = ''
	} else {
		errorInfo.textContent = 'Musisz wpisać zadanie!'
	}
}

const createNewButtons = () => {
	const buttons = document.createElement('div')
	buttons.classList.add('tools')
	newTask.append(buttons)
	const done = document.createElement('button')
	done.classList.add('btn-done')
	done.textContent = 'DONE'
	const edit = document.createElement('button')
	edit.classList.add('btn-edit')
	edit.textContent = 'EDIT'
	const remove = document.createElement('button')
	remove.classList.add('btn-remove')
	remove.textContent = 'REMOVE'
	buttons.append(done, edit, remove)
}

const clickCheck = e => {
	if (e.target.matches('.btn-done')) {
		e.target.closest('li').classList.toggle('done')
	} else if (e.target.matches('.btn-edit')) {
		editTodo(e)
	} else if (e.target.matches('.btn-remove')) {
		removeTodo(e)
	}
}

const editTodo = e => {
	todoToEdit = e.target.closest('li')
	editInputElement.value = todoToEdit.firstChild.textContent
	popup.style.display = 'flex'
}
const popupOk = () => {
	todoToEdit.firstChild.textContent = editInputElement.value
	popup.style.display = 'none'
}
const popupCancel = () => {
	popup.style.display = 'none'
}

const removeTodo = e => {
	e.target.closest('li').remove()
	const allTodos = ulList.querySelectorAll('li')

	if (allTodos.length === 0) {
		errorInfo.textContent = 'Brak zadań na liście.'
	}
}

addBtn.addEventListener('click', addTaskToList)
ulList.addEventListener('click', clickCheck)
popupBtnOk.addEventListener('click', popupOk)
popupBtnCancel.addEventListener('click', popupCancel)
