import { Card, Button } from 'react-bootstrap';

export default function MovieCard({movie, onClick, onAddToWatchlist}) {
    return (
        <Card
            className='h-100 shadow-sm'
            onClick={() => onClick(movie.imdbID)}
            style={{ cursor: 'pointer' }}
        >
            <Card.Img 
                variant='top'
                src={movie.Poster !== "N/A" ? movie.Poster : `Image for ${movie.Title} not available`}
                alt={`${movie.Title} poster`}
            />
            <Card.Body>
                <Card.Title className='text-truncate'>Title: {movie.Title}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>Year: {movie.Year}</Card.Subtitle>
                <Button
                    variant='outline-primary'
                    className='mt-auto align-self-first'
                    size='sm'
                    onClick={(e) => {
                        e.stopPropagation();
                        onAddToWatchlist(movie);
                      }}
                >
                    Add to Watchlist
                </Button>
            </Card.Body>
        </Card>
    )
}