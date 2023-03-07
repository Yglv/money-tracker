const select = document.querySelector('.main__select') as HTMLSelectElement

select.addEventListener('change', event => {
  const cardsList = document.querySelectorAll('.main__card')
  const cardsTextList = document.querySelectorAll('.card__text__category')
  const lastIndexes = []
  const selectedValue = select.value
  for (let i = 0; i < cardsTextList.length; i++) {
    if (cardsTextList[i].textContent === selectedValue) {
      lastIndexes.push(i)
    }
  }
  console.log(lastIndexes)
  console.log(cardsList)
  for (let i = 0; i < cardsList.length; i++) {
    for (let j = 0; j < lastIndexes.length; j++) { 
      if (lastIndexes.includes(i)) {
        (cardsList[i] as HTMLElement).style.display = 'block'
      }
      else {
        (cardsList[i] as HTMLElement).style.display = 'none'
      }
    }
  }
  if (select.value === 'Выберите категорию') {
    location.reload()
  }
})
