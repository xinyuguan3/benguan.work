import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ShowBook from './ShowBook'
import WorkDetail from './components/WorkDetail'
import BlogHome from './components/BlogHome'
import BlogPost from './components/BlogPost'
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ShowBook />} />
          <Route path="/work/:workId" element={<WorkDetail />} />
          <Route path="/blog" element={<BlogHome />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
