
// eslint-disable-next-line no-unused-vars
const plusButton = document.querySelector('#plus__button') as HTMLButtonElement
const minusButton = document.querySelector('#minus__button') as HTMLButtonElement 
const closeButton = document.querySelector('#close__button') as HTMLButtonElement
const modal = document.querySelector('#modal') as HTMLDivElement
const spendingCategories: Array<string> = ['Еда', 'Гигиена', 'Жильё', 'Здоровье', 'Кафе', 'Машина', 'Одежда', 'Питомцы',
  'Подарки', 'Развлечения', 'Связь', 'Cпорт', 'Cчета', 'Транспорт', 'Такси']
const profitCategories: Array<string> = ['Депозиты', 'Зарплата', 'Сбережения']

minusButton?.addEventListener('click', event => {
  event.preventDefault()
  form.innerHTML = ''

  const input = document.createElement('input')
  input.required = true
  input.type = 'number'
  input.name = 'sum'
  input.setAttribute('placeholder', 'Введите сумму')
  input.setAttribute('max', '0')
  input.setAttribute('min', '-1000000000')
  input.setAttribute('value', '+')
  input.classList.add('modal__body__input')
  form.append(input)

  const select = document.createElement('select')
  select.classList.add('modal__body__input')
  select.required = true
  select.id = 'select'
  select.name = 'category' 
  select.setAttribute('form', 'body__form')
  const defaultOption = document.createElement('option')
  defaultOption.textContent = 'Выберите категорию'
  defaultOption.disabled = true
  defaultOption.selected = true
  select.append(defaultOption)
  form.append(select)
  for (let i = 0; i < spendingCategories.length; i++) {
    const option = new Option(spendingCategories[i], spendingCategories[i])
    select.append(option)
  }

  const confirmButton = document.createElement('button')
  confirmButton.classList.add('modal__body__confirm')
  confirmButton.textContent = 'Подтвердить'
  form.append(confirmButton)

  modal.style.display = 'block'
})

plusButton.addEventListener('click', event => {
  event.preventDefault()
  form.innerHTML = ''

  const input = document.createElement('input')
  input.required = true
  input.type = 'number'
  input.name = 'sum'
  input.setAttribute('placeholder', 'Введите сумму')
  input.setAttribute('min', '0')
  input.setAttribute('max', '1000000000')
  input.classList.add('modal__body__input')
  form.append(input)

  const select = document.createElement('select')
  select.classList.add('modal__body__input')
  select.required = true
  select.id = 'select'
  select.name = 'category'
  select.setAttribute('form', 'body__form')
  select.required = true

  const defaultOption = document.createElement('option')
  defaultOption.textContent = 'Выберите категорию'
  defaultOption.disabled = true
  defaultOption.selected = true
  select.append(defaultOption)
  form.append(select)
  for (let i = 0; i < profitCategories.length; i++) {
    const option = new Option(profitCategories[i], profitCategories[i])
    select.append(option)
  }

  const confirmButton = document.createElement('button')
  confirmButton.classList.add('modal__body__confirm')
  confirmButton.textContent = 'Подтвердить'
  form.append(confirmButton)

  modal.style.display = 'block'
})


closeButton.addEventListener('click', event => {
  event.preventDefault()
  modal.innerHTML = ''
  modal.style.display = 'none'
})
