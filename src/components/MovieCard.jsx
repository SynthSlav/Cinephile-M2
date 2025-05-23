import { Card, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { motion } from 'framer-motion';

const MotionButton = motion.create(Button);

export default function MovieCard({ movie, onClick, onAddToWatchlist, children }) {

  // Function to handle card click
  // and trigger the onClick prop with the movie ID
  const handleCardClick = () => {
    onClick(movie.imdbID);
  };
  
  // Function to handle the "Add to Watchlist" button click
  // and trigger the onAddToWatchlist prop with the movie object
  const handleAddToWatchlistClick = (e) => {
    e.stopPropagation();
    onAddToWatchlist(movie);
  };

  return (
    <Card
      className='h-100 shadow-sm card-style mov-card'
      onClick={handleCardClick}
      style={{ cursor: 'pointer', width: '100%', maxWidth: '320px' }}
    >
      <Card.Img
        variant='top'
        src={movie.Poster !== "N/A" ? movie.Poster : `Image for ${movie.Title} not available`}
        alt={`${movie.Title} poster`}
        style={{ objectFit: 'contain', height: '100%', width: '100%', maxHeight: '300px', objectPosition: 'center' }}
      />
      <Card.Body>
        <Card.Title>
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
        {onAddToWatchlist && (
          <MotionButton
            className='mt-auto align-self-first cine-btn'
            size='sm'
            onClick={handleAddToWatchlistClick}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ padding: "0.6rem"}}
            aria-label='Add to watchlist'
          >
            Add to Watchlist
          </MotionButton>
        )}
        {/* Render children if provided */}
        {children}   
      </Card.Body>
    </Card>
  );
}