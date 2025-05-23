// WatchlistSection.jsx
import { Card, Col, Row, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import MovieCard from "./MovieCard";

// Variables to make bootstrap components motion-enabled
const MotionCol = motion.create(Col);
const MotionButton = motion.create(Button);

export default function WatchlistSection({
  // props
  movies,
  onRemove,
  onAction,
  actionText,
  onMovieClick,
}) {
  return (
    <motion.div 
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      initial="hidden"
      animate="visible"
      style={{ marginBottom: "1rem"}}
    >
      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {movies?.map((movie) => (
          <MotionCol
            key={movie.imdbID}
            className="d-flex justify-content-center mx-auto"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
            }}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
          >
            <MovieCard
              movie={movie}
              onClick={onMovieClick}
              onAddToWatchlist={null}
            >
              <div className="d-flex gap-2 mt-3">
                <MotionButton
                  variant="danger"
                  size="sm"
                  className="remove-watchlist-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemove(movie.imdbID);
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.1 }}
                  aria-label={`Remove ${movie.Title} from watchlist`}
                >
                  Remove from Watchlist
                </MotionButton>
                {onAction && (
                  <MotionButton
                    variant="success"
                    size="sm"
                    className="mark-watched-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onAction(movie.imdbID);
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.1 }}
                    aria-label={`Mark ${movie.Title} as watched`}
                  >
                    {actionText}
                  </MotionButton>
                )}
              </div>
            </MovieCard>
          </MotionCol>
        ))}
      </Row>
    </motion.div>
  );
}