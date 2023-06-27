import React, { useEffect, useState } from 'react';
import './homes.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from './../../components/movielist/movieList'
 

const Home = () => {

    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")

            .then(res => res.json())  /*doughtsee promises */
            .then(data => setPopularMovies(data.results))
    }, [])


    // useEffect( () => {   

    //     const getUser = async()=>{
    //         const URL ="https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US";
    //         const result = await fetch(URL)
    //         const newres = await result.JSON()
    //      data(newres)
    //         console.log(data)
    //         // setData(newres)
    //     }
    //     setData()

    // },[])

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={true}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} >
                                {/* <span>{movie.original_title}</span>  */}
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>

                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">
                                        {movie ? movie.original_title : ""}
                                    </div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average : ""}
                                            <i className="fa-solid fa-star"></i>{" "}
                                        </span>

                                    </div>
                                    <div className="posterImage__description">
                                        {movie ? movie.overview : ""}
                                    </div>
                                </div>

                            </Link>

                        ))
                    }
                </Carousel>
                <MovieList />
                
            </div>

        </>
    )
}

export default Home  