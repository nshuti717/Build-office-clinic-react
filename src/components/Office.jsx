import { useState } from 'react'
import axios from 'axios'
import LibraryButton from './LibraryButton'

function Office() {
  const [officeName, setOfficeName] = useState('')
  const [officeNumber, setOfficeNumber] = useState('')
  const [offNumber, setOffNumber] = useState('')

  async function saveOffice() {
    const response = await axios.post('http://localhost:8083/api/offices/save', {
      name: officeName,
      officeNumber: officeNumber,
    })

    if (response.status === 200) alert('The office is saved successful')
    else alert('The office not saved')
  }

  async function deleteOffice() {
    const response = await axios.delete(
      `http://localhost:8083/api/offices/delete-by-office-number/${offNumber}`
    )

    if (response.status === 204) alert('The office is deleted successful')
    else alert('The office not deleted')
  }

  return (
    <div>
      <h1>Save Office</h1>
      <label>Office Name:</label>{' '}
      <input type="text" onChange={e => setOfficeName(e.target.value)} />
      <br />
      <label>Office Number:</label>{' '}
      <input type="text" onChange={e => setOfficeNumber(e.target.value)} />
      <br />
      <LibraryButton buttonLabel="Save" onClickButton={saveOffice} />
      <h1>Delete Office</h1>
      <label>Office Number:</label>{' '}
      <input type="text" onChange={e => setOffNumber(e.target.value)} />
      <br />
      <LibraryButton buttonLabel="Delete" onClickButton={deleteOffice} />
    </div>
  )
}

export default Office

