import { Link } from 'react-router'

function LibraryHeader() {
  return (
    <div>
      <header>
        <h1>Library Management System</h1>
        <p>This is a Library System that will help you to manage the books</p>
        <Link to="/books">BOOKS</Link>{' '}
        <Link to="/office">Office</Link>{' '}
        <Link to="/office-list">Office List</Link>{' '}
        <Link to="/">Logout</Link>
      </header>
    </div>
  )
}

export default LibraryHeader
