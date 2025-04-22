import { Card, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

export default function MovieCard({movie, onClick, onAddToWatchlist}) {

  const handleMouseCardEnter = (e) => {
    e.currentTarget.classList.add("card-hover");
    e.currentTarget.querySelector('.card-title').classList.remove("text-truncate");
  };

  const handleMouseCardLeave = (e) => {
    e.currentTarget.classList.remove("card-hover");
    e.currentTarget.querySelector('.card-title').classList.add("text-truncate");
  };

  const handleCardButtonEnter = (e) => {
    e.currentTarget.classList.add("cine-btn:hover");
  };

    return (
        <Card
            className='h-100 shadow-sm card-style mov-card'
            onClick={() => onClick(movie.imdbID)}
            style={{ cursor: 'pointer',  width: '100%', maxWidth: '320px' }}
            onMouseEnter={handleMouseCardEnter}
            onMouseLeave={handleMouseCardLeave}
        >
            <Card.Img 
                variant='top'
                src={movie.Poster !== "N/A" ? movie.Poster : `Image for ${movie.Title} not available`}
                alt={`${movie.Title} poster`}
                style={{ objectFit: 'contain', height: '100%', width: '100%', maxHeight: '300px', objectPosition: 'center' }}
            />
            <Card.Body>
            <Card.Title >
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id={`tooltip-${movie.imdbID}`}>
                {movie.Title}
              </Tooltip>
            }
          >
            <span>{movie.Title}</span>
          </OverlayTrigger>
        </Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>Year: {movie.Year}</Card.Subtitle>
                <Button
                    className='mt-auto align-self-first cine-btn'
                    size='sm'
                    onClick={(e) => {
                        e.stopPropagation();
                        onAddToWatchlist(movie);
                      }}
                    onMouseEnter={handleCardButtonEnter}
                >
                    Add to Watchlist
                </Button>
            </Card.Body>
        </Card>
    )
}