import { useState, useEffect, useRef } from 'react'
import MovieList from '../components/MovieList'

export default function Home() {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const inputRef = useRef()

  const fetchMovie = async (query) => {
    try {
      setLoading(true)
      const res = await fetch(`https://www.omdbapi.com?apikey=9236f6af&s=${query}`)
      const data = await res.json()
      setMovies(data.Search || [])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMovie("SUPER")
  }, [])  // <-- runs only once

  const handleSearch = (e) => {
    e.preventDefault()
    const query = inputRef.current.value.trim()
    if (query) fetchMovie(query)
  }

  return (
    <div className="home">
      <form onSubmit={handleSearch}>
        <input className="searchInput" ref={inputRef} placeholder="Search for a movie..." />
        <button type="submit">Search 🔎</button>
      </form>

      {loading ? (
        <h2>Loading movies...</h2>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  )
}
