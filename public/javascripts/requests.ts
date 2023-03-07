const form = document.querySelector('#body__form') as HTMLFormElement
const deleteButton = document.querySelector('#delete__button') as HTMLButtonElement

interface IData{
  [key:string]: FormDataEntryValue
}

form?.addEventListener('submit', async event => {
  event.preventDefault()
  const formData = new FormData(form)
  const data: IData = {
    key: ''
  }
  formData.forEach((value, key) => {
    data[key] = value
  })
  console.log(data)
  const response = await fetch('/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
  if (response.ok) {
    const result = await response.json()
    console.log(result.message)
  } else {
    console.log('Sign Up Error')
  }
  location.reload()
})

interface IDeleteData{
  id: string
}

async function DeleteCard (event: Event): Promise<void> {
  const data: IDeleteData = {
    id: ''
  }
  let id: string | undefined = ''
  if (event.target !== null && event.target instanceof HTMLButtonElement){
    id = event.target.dataset.id
  }
  if (id !== undefined){
    data.id = id
  }
  const response = await fetch('/delete', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
  if (response.ok) {
    const result = await response.json()
    console.log(result.message)
  } else {
    console.log('Sign Up Error')
  }
  window.location.reload()
}
