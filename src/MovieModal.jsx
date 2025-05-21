import './MovieModal.css';

function MovieModal({ movie, onClose }) {
    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <div className="modal-content">
                    <img
                        className="modal-poster"
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt={movie.title}
                    />
                    <div className="modal-details">
                        <h2>{movie.title}</h2>
                        <p><strong>개봉일:</strong> {movie.release_date}</p>
                        <p><strong>별점:</strong> ⭐ {movie.vote_average}</p>
                        <p className="overview">{movie.overview || '줄거리가 없습니다.'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieModal;
