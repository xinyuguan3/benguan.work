import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ShowBook from './ShowBook'
import WorksPage from './components/WorksPage'
import WorkDetail from './components/WorkDetail'
import BlogHome from './components/BlogHome'
import BlogPost from './components/BlogPost'
import ReadingPage from './components/ReadingPage'
import { works } from './data/works'
import './App.css'

function App() {
  const firstWorkId = works[0]?.id
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ShowBook />} />
          <Route
            path="/works"
            element={
              firstWorkId
                ? <Navigate to={`/works/${firstWorkId}`} replace />
                : <WorksPage />
            }
          />
          <Route path="/works/:workId" element={<WorkDetail />} />
          <Route path="/reading" element={<ReadingPage />} />
          <Route path="/blog" element={<BlogHome />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
