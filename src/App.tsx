import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ShowBook from './ShowBook'
import WorkDetail from './components/WorkDetail'
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ShowBook />} />
          <Route path="/work/:workId" element={<WorkDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
