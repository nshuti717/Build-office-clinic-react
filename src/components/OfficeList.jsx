import { useEffect, useState } from 'react'
import axios from 'axios'

function OfficeList() {
  const [offices, setOffices] = useState([])
  const [searchText, setSearchText] = useState('')

  async function loadOffices() {
    const response = await axios.get('http://localhost:8083/api/offices/all')
    setOffices(response.data)
  }

  useEffect(() => {
    loadOffices()
  }, [])

  async function deleteOffice(officeNumber) {
    const response = await axios.delete(
      `http://localhost:8083/api/offices/delete-by-office-number/${encodeURIComponent(officeNumber)}`
    )

    if (response.status === 204) {
      alert('The office is deleted successful')
      loadOffices()
    }
  }

  const filteredOffices = offices.filter((office) => {
    const officeName = (office.name || '').toLowerCase()
    const officeNumber = String(office.officeNumber || office.roomNumber || '').toLowerCase()
    const search = searchText.toLowerCase()

    return officeName.includes(search) || officeNumber.includes(search)
  })

  return (
    <div>
      <h1>Available Offices</h1>
      <label>Search by office name or number: </label>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <table border="1" cellPadding="8" style={{ margin: '20px auto', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Office Number</th>
            <th>Office Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredOffices.map((office, index) => (
            <tr key={office.id}>
              <td>{index + 1}</td>
              <td>{office.officeNumber || office.roomNumber}</td>
              <td>{office.name}</td>
              <td>
                <button onClick={() => deleteOffice(office.officeNumber || office.roomNumber)}>
                  Delete
                </button>{' '}
                <button disabled>Update</button>
              </td>
            </tr>
          ))}
          {filteredOffices.length === 0 && (
            <tr>
              <td colSpan="4">No offices found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default OfficeList
