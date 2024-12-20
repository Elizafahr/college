class Reminder {
  constructor (event, date, time) {
    this.event = event
    this.date = date
    this.time = time
    this.timerId = null;   
  }

   // Запуск таймера напоминания
  startReminderTimer() {
    const targetDateTime = new Date(`${this.date} ${this.time}`);
    const currentTime = new Date();
    const timeRemaining = targetDateTime.getTime() - currentTime.getTime();

    if (timeRemaining > 0) {
       this.timerId = setTimeout(() => {
        
        Sound.playReminderSound();
        this.removeFromCalendar();
         document.querySelector(".modal").style.display = "block";
        document.getElementById('modalText').innerHTML=`Напоминание: ${this.event} - Время вышло!`;
      
        setTimeout(() => {
            document.querySelector(".modal").style.display = "none";
            document.getElementById('modalText').innerHTML=``;
          }, 10000);
      }, timeRemaining);
    

   
    }
  }

  // Проверка валидности даты
  static isValidDate (date, time) {
    const selectedDateTime = new Date(`${date} ${time}`)
    return selectedDateTime > new Date()
  }
  getEvent () {
    return this.event
  }
  getDate () {
    return this.date
  }
  getTime () {
    return this.time
  }

  // Удаление из календаря
  removeFromCalendar() {
    calendar.reminders = calendar.reminders.filter(
      r => !(r.event === this.event && r.date === this.date && r.time === this.time)
    );
    displayReminders();
  }
}

class Calendar {
  constructor () {
    this.reminders = []
    this.currentMonth = new Date().getMonth()
    this.currentYear = new Date().getFullYear()
  }

  // Добавление напоминания
  addReminder (reminder) {
    if (!this.hasDuplicateReminder(reminder)) {
      this.reminders.push(reminder)
    }
  }

  // Удаление напоминания
  removeReminder (reminder) {
    this.reminders = this.reminders.filter(
      r => r.event !== reminder.event && r.date !== reminder.date
    )
  }
 // Редактирование напоминания
  editReminder (reminderItem) {
    const timeEdit = document.getElementById('timeEdit').value.trim()
    const newEvent = document.getElementById('newEvent').value
    const newDate = document.getElementById('newDate').value

    const currentDate = new Date()
    const selectedDate = new Date(newDate + 'T' + timeEdit)
    if (selectedDate <= currentDate) {
        alert("Пожалуйста, выберите дату и время в будущем");
        return;
      }
       
    else{
        if (newEvent && newDate && timeEdit) {
        reminderItem.event = newEvent
        reminderItem.time = timeEdit
        reminderItem.date = newDate
        document.querySelector('.ask-edit').style.display = 'none'

     }     
    }

  }
  hasDuplicateReminder (reminder) {
    //нет ли уже такого напоминания
    return this.reminders.some(
      r => r.event === reminder.event && r.date === reminder.date
    )
  }

  
}

// Воспроизведение звука напоминания
class Sound {
  static playReminderSound () {
    const audio = new Audio('sound.mp3')
    audio.play()
  }
}

const calendar = new Calendar()

generateCalendar(calendar.currentYear, calendar.currentMonth)

function generateCalendar (year, month) {
  const calendarContainer = document.getElementById('calendar')
  calendarContainer.innerHTML = ''

  //шапка календаря
  const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
  for (let i = 1; i <= 7; i++) {
    const calendarCell = document.createElement('div')
    calendarCell.className = 'calendar-cell-date'
    calendarCell.textContent = days[i - 1]
    calendarContainer.appendChild(calendarCell)
  }

  //пустые ячейки, от редыдущего месяца
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstDayOfMonth = new Date(year, month, 1).getDay()

  for (let i = 1; i < firstDayOfMonth; i++) {
    const emptyCell = document.createElement('div')
    emptyCell.className = 'calendar-cell'
    calendarContainer.appendChild(emptyCell)
  }

  //Все ячейки
  for (let day = 1; day <= daysInMonth; day++) {
    const calendarCell = document.createElement('div')
    calendarCell.className = 'calendar-cell'
    calendarCell.textContent = day

    // Проверка, является ли дата прошедшей
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth()
    if (
      currentYear === year &&
      currentMonth === month &&
      day >= currentDate.getDate()
    ) {
      calendarCell.classList.add('usual')
    } else {
      calendarCell.classList.add('inactive')
    }

    const hasReminder = calendar.reminders.some(
      reminder => reminder.getDate() === `${year}-${month + 1}-${day}`
    )
    if (hasReminder) {
      calendarCell.style.color = 'red'
    }

    calendarCell.addEventListener('click', () => {
      // Удалить класс "active" у всех ячеек для сброса
      const cells = document.getElementsByClassName('calendar-cell')
      for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove('active')
      }

      // Добавить класс "active" к выбранной ячейке
      calendarCell.classList.add('active')

      const selectedDate = new Date(year, month, day + 1)
      document.getElementById('date-input').valueAsDate = selectedDate
    })

    calendarContainer.appendChild(calendarCell)
  }
}

// добавление нпоминания
document.getElementById('reminder-form').addEventListener('submit', e => {
  e.preventDefault()
  const cells = document.getElementsByClassName('calendar-cell')
  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove('active')
  }
  const eventInput = document.getElementById('event-input')
  const dateInput = document.getElementById('date-input')
  const timeInput = document.getElementById('time-input')

  const event = eventInput.value.trim()
  const date = dateInput.value.trim()
  const time = timeInput.value.trim()

  if (!event || !date || !time) {
    alert('Заполните все поля')
    return
  }

  if (!Reminder.isValidDate(date, time)) {
    alert('Пожалуйста, выберите дату в будущем')
    return
  }

  const reminder = new Reminder(event, date, time)
  calendar.addReminder(reminder)
  displayReminders()

  eventInput.value = ''
  dateInput.value = ''
  timeInput.value = ''
})



//показать форму редактирования
function showEditForm () {
  document.getElementById('editFormContainer').style.display = 'block'
}

//таблица с напоминаниями
function displayReminders () {
  const reminderList = document.getElementById('reminder-list')
  reminderList.innerHTML = ''

  calendar.reminders.forEach(reminder => {
    reminder.startReminderTimer()
    const row = document.createElement('tr')
    const dateCell = document.createElement('td')
    dateCell.classList.add('date')

    const timeCell = document.createElement('td')
    timeCell.classList.add('time')

    const eventCell = document.createElement('td')
    eventCell.classList.add('event')

    const actionsCell = document.createElement('td')

    const deleteButton = document.createElement('button')
    const editButton = document.createElement('button')
    editButton.classList.add('edit')

    dateCell.textContent = reminder.getDate()
    timeCell.textContent = reminder.getTime()
    eventCell.textContent = reminder.getEvent()

    deleteButton.textContent = 'Delete'
    editButton.textContent = 'Edit'

    deleteButton.addEventListener('click', () => {
      calendar.removeReminder(reminder)
      displayReminders()
    })
    editButton.addEventListener('click', () => {
      showEditForm()
      calendar.editReminder(reminder)
      displayReminders()
    })
    document.getElementById('saveBtn').addEventListener('click', () => {
      calendar.editReminder(reminder)
      displayReminders()
      document.getElementById('timeEdit').value = ''
      document.getElementById('newEvent').value = ''
      document.getElementById('newDate').value = '' 
    })

    row.appendChild(dateCell)
    row.appendChild(timeCell)
    row.appendChild(eventCell)
    actionsCell.appendChild(deleteButton)
    actionsCell.appendChild(editButton)
    row.appendChild(actionsCell)
    reminderList.appendChild(row)
  })
}

displayReminders()
generateCalendar(calendar.currentYear, calendar.currentMonth)
