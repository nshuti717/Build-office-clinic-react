import './App.css'
import { Route, Routes } from 'react-router'
import Office from './components/Office'
import OfficeList from './components/OfficeList'
import LibraryLogin from './components/LibraryLogin'
import LibraryBooks from './components/LibraryBooks'
import LibraryHeader from './components/LibraryHeader'

function App() {
  return (
    <div>
      <LibraryHeader />
      <main>
        <Routes>
          <Route path="/" element={<LibraryLogin />} />
          <Route path="/office" element={<Office />} />
          <Route path="/office-list" element={<OfficeList />} />
          <Route path="/books" element={<LibraryBooks />} />
          <Route path="*" element={<LibraryLogin />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
