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

    return (
        <Card
            className='h-100 shadow-sm card-style'
            onClick={() => onClick(movie.imdbID)}
            style={{ cursor: 'pointer' }}
            onMouseEnter={handleMouseCardEnter}
            onMouseLeave={handleMouseCardLeave}
        >
            <Card.Img 
                variant='top'
                src={movie.Poster !== "N/A" ? movie.Poster : `Image for ${movie.Title} not available`}
                alt={`${movie.Title} poster`}
            />
            <Card.Body>
            <Card.Title className="text-truncate">
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