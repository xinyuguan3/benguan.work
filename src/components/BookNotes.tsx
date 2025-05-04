import { useState, useEffect } from 'react';
import './BookNotes.css';

interface Note {
  content: string;
  author: string;
  time: string;
}

interface BookNotesProps {
  bookId: string;
  visible: boolean;
  position: { x: number; y: number };
}

const BookNotes = ({ bookId, visible, position }: BookNotesProps) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (visible && bookId) {
      fetchNotes();
    }
  }, [visible, bookId]);

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.douban.com/v2/book/${bookId}/annotations`);
      if (!response.ok) throw new Error('Failed to fetch notes');
      const data = await response.json();
      setNotes(data.annotations.slice(0, 2)); // 只取前两条笔记
    } catch (err) {
      setError('Failed to load notes');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!visible) return null;

  return (
    <div 
      className="book-notes-container"
      style={{
        left: position.x,
        top: position.y
      }}
    >
      <div className="notes-header">
        <span className="notes-title">读书笔记</span>
        <span className="notes-count">× {notes.length}</span>
      </div>
      
      <div className="notes-content">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : (
          notes.map((note, index) => (
            <div key={index} className="note-item">
              <div className="note-text">{note.content}</div>
              <div className="note-meta">
                <span className="note-author">{note.author}</span>
                <span className="note-time">{note.time}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookNotes; 