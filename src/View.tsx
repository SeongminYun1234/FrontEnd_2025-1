import { useEffect, useState } from 'react';
import { fetchPopularMovies } from './MovieApi';
import type { Movie } from './MovieApi';
import MovieCard from './MovieCard';

function View() {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const data = await fetchPopularMovies();
                setMovies(data);
            } catch (e) {
                console.error(e);
            }
        };
        getMovies();
    }, []);

    return (
        <div className="p-6 bg-black min-h-screen text-white">
            <h1 className="text-3xl font-bold mb-6 text-red-500">Movie List</h1>
            <div className="grid grid-cols-5 gap-4">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} onClick={() => { }} />
                ))}
            </div>
        </div>
    );
}

export default View;
