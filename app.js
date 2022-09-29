// change mode (dark / light)
const btnMode = document.querySelector('.btn-mode')
const modeImgDark = document.querySelector('.img-mode-dark')
const modeImgLight = document.querySelector('.img-mode-light')
const bgDesktopDark = document.querySelector('.bg-desktop-dark')
const bgDesktopLight = document.querySelector('.bg-desktop-light')
const newList = document.querySelector('.new')
const list = document.querySelector('.list')
const bottom = document.querySelector('.bottom')
const footer = document.querySelector('footer')
const body = document.body

btnMode.addEventListener('click', handleMode) 

function handleMode() {
     body.classList.toggle('light')
     bgDesktopLight.classList.toggle('active')
     bgDesktopDark.classList.toggle('active')
     modeImgDark.classList.toggle('active')
     modeImgLight.classList.toggle('active')
     newList.classList.toggle('active')
     list.classList.toggle('active')
     bottom.classList.toggle('active')
     footer.classList.toggle('active')
}

// create items
const todoText = document.querySelector('textarea')
const nbItems = document.querySelector('.nb-items')
let items

document.addEventListener('keypress', (e) => {
  if(e.keyCode === 13) {
    createNewList()
    showNbItems()
  }
})

function createNewList() {
    items = document.createElement('div')
    items.className = 'item'
    items.innerHTML = `
        <div class="check-btn"></div>
        <p>${todoText.value}</p>
    `
    list.appendChild(items)
  
    items.addEventListener('click', (e) => {
      e.target.classList.toggle('done')
    })
    
    todoText.value = "";
}

// delete all task done
const btnClearCompleted = document.querySelector('.clear-completed')
  
btnClearCompleted.addEventListener('click', clearCompleted)

function clearCompleted() {
  const todo = document.querySelectorAll('.item')
  if(todo.length > 0) {
    todo.forEach(td => {
      if(td.classList.contains('done')) {
        td.remove()
      }
    })
    showNbItems()
  }
}

// change color buttons
const btnViews = document.querySelectorAll(".btn-view");
const clickedBtn = "blue";

function change(el, clickedBtn) {
  btnViews.forEach(btn => {
    if(btn.classList.contains(clickedBtn)) {
      btn.classList.remove(clickedBtn);
    }
  });
  el.classList.add(clickedBtn);
}

btnViews.forEach(btn => {
  btn.addEventListener('click', () => {
    change(btn, clickedBtn);
  })
})


// only show unfinished tasks
const activeBtn = document.querySelector('.active-btn')

activeBtn.addEventListener('click', showUnfinishedTasks)

function showUnfinishedTasks() {
  const todo = document.querySelectorAll('.item')
  if(todo.length > 0) {
    todo.forEach(td => {
      if(td.classList.contains('done')) {
        td.style.display = 'none'
      } else {
        td.style.display = 'flex'
      }
    })
  }
}

// only show finish tasks
const completedBtn = document.querySelector('.completed-btn')

completedBtn.addEventListener('click', showFinishedTasks)

function showFinishedTasks() {
  const todo = document.querySelectorAll('.item')
  if(todo.length > 0) {
    todo.forEach(td => {
      if(td.classList.contains('done')) {
        td.style.display = "flex"
      } else {
        td.style.display = 'none'
      }
    })
  }
}

// show all tasks
const btnAll = document.querySelector('.btn-all')

btnAll.addEventListener('click', showAllTasks)

function showAllTasks() {
  const todo = document.querySelectorAll('.item')
  if(todo.length > 0) {
    todo.forEach(td => {
      td.style.display = 'flex'
    })
  }
}

// show items number
function showNbItems() {
  const todo = document.querySelectorAll('.item')
  if(todo.length > 1) {
    nbItems.innerHTML = `${todo.length} items`;
  } else if(todo.length > 0) {
    nbItems.innerHTML = `${todo.length} item`;
  } else {
    nbItems.innerHTML = '0 item'
  }
}