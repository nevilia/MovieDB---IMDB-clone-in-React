import React, {useEffect, useState} from 'react'
import './Home.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'
import MovieList from '../components/MovieList'

export default function Home() {

    const [popularMovies, setPopularMovies] = useState([])

    useEffect( () => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=8aec4173b8f364853956eb2e985a8bb1')
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])

    console.log(popularMovies)

    

  return (
    <div>
        <div className="poster">
            <Carousel 
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
            >
                {
                    popularMovies.map(movie => (
                        <Link style={{textDecoration:"none",color:"white"}} key={movie.id} to={`/movie/${movie.id}`} >
                            
                            <div className="posterImage">
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                            </div>

                            <div className="posterImage__overlay">
                                <div className="posterImage__title">
                                    {movie ? movie.original_title : " "}
                                </div>
                                <div className="posterImage__runtime">
                                    { movie ? movie.release_date : ""}
                                    <span className="rating">
                                        { movie ? movie.vote_average : ""}
                                        <i className="fas fa-star" /> {" "}
                                    </span>
                                </div>
                                <div className="posterImage__description">
                                    { movie ? movie.overview : ""}
                                </div>
                            </div>
                        </Link>
                        
                    ))
                }
            </Carousel>
            <MovieList/>
        </div>
    </div>
  )
}
