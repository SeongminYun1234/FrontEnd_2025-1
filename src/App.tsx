import { useEffect, useState } from 'react';
import { fetchPopularMovies } from './MovieApi.ts';
import MovieCard from './MovieCard';
import MovieModal from './MovieModal';
import './App.css';

// Movie 타입 정의
interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
}

function App() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const data = await fetchPopularMovies();
                setMovies(data);
            } catch (error) {
                console.error('영화 데이터를 불러오는데 실패했습니다.', error);
            }
        };
        getMovies();
    }, []);

    const openModal = (movie: Movie) => {
        setSelectedMovie(movie);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedMovie(null);
        setIsModalOpen(false);
    };

    return (
        <div className="app">
            <div className="container">
                <h1 className="title">Movie List</h1>
                <div className="movie-grid">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} onClick={() => openModal(movie)} />
                    ))}
                </div>
            </div>

            {isModalOpen && selectedMovie && (
                <MovieModal movie={selectedMovie} onClose={closeModal} />
            )}
        </div>
    );
}

export default App;
