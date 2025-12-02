import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetail() {

  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getSingleMovie() {
      const res = await fetch(`https://www.omdbapi.com?apikey=9236f6af&i=${id}`)
      const data = await res.json()
      console.log(data);
      setMovie(data)
      setLoading(false)
    }


    getSingleMovie()
  }, [id])

  if (loading) {
    return <h2>Loading movie details...</h2>
  }

  if (!movie) {
    return <h2>Movie not found</h2>
  }

  return (
    <div className="movie-detail">
      <h2>{movie.Title}</h2>
      <img alt={movie.Title} src={movie.Poster} />
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Released:</strong> {movie.Released}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
    </div>
  )
}
