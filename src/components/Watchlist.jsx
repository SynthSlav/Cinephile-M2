import { useState } from 'react';
import { Tab, Tabs, Card, Button, Row, Col } from 'react-bootstrap';
import MovieCardDetail from './MovieCardDetail'; // Adjust path as needed

export default function Watchlist({ 
  watchlist, 
  onRemove, 
  onMarkWatched,
  fetchMovieDetails,
  selectedMovie,
  onBackToList,
  detailLoading
}) {
  const [activeTab, setActiveTab] = useState('toWatch');

  const handleMovieClick = (id) => {
    fetchMovieDetails(id);
  };

  if (selectedMovie) {
    return (
      <div className="container mt-4">
        <MovieCardDetail
          movie={selectedMovie}
          onBack={onBackToList}
          detailLoading={detailLoading}
        />
      </div>
    );
  }

  return (
    <div className="watchlist-container">
      <h2 className="mb-4">My Watchlist</h2>
      
      <Tabs activeKey={activeTab} onSelect={t => setActiveTab(t)} className="mb-4 justify-content-center" style={{ gap: "2rem" }}>
        <Tab eventKey="toWatch" title={<span style={{ fontSize: '1.1rem', padding: '0.5rem 1rem' }}>To Watch ({watchlist.toWatch.length})</span>}>
          <WatchlistSection 
            movies={watchlist.toWatch}
            onRemove={onRemove}
            onAction={onMarkWatched}
            actionText="Mark as Watched"
            onMovieClick={handleMovieClick}
          />
        </Tab>
        <Tab eventKey="watched" title={<span style={{ fontSize: '1.1rem', padding: '0.5rem 1rem' }}>Watched ({watchlist.watched.length})</span>}>
          <WatchlistSection 
            movies={watchlist.watched}
            onRemove={onRemove}
            actionText="Remove"
            onMovieClick={handleMovieClick}
          />
        </Tab>
      </Tabs>
    </div>
  );
}

const WatchlistSection = ({ movies, onRemove, onAction, actionText, onMovieClick }) => (
  <Row xs={1} md={2} lg={3} xl={4} className="g-4">
    {movies.map(movie => (
      <Col key={movie.imdbID}>
        <div 
          className="h-100" 
          onClick={() => onMovieClick(movie.imdbID)} 
          style={{ cursor: 'pointer' }}
        > 
          <Card className="h-100 shadow-sm">
            <Card.Img
              variant="top"
              src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder-movie.png'}
            />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
            </Card.Body>
            <Card.Footer className="bg-white">
              <div className="d-flex gap-2">
                <Button 
                  variant="danger" 
                  size="sm" 
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemove(movie.imdbID);
                  }}
                >
                  Remove from Watchlist
                </Button>
                {onAction && (
                  <Button 
                    variant="success" 
                    size="sm" 
                    onClick={(e) => {
                      e.stopPropagation();
                      onAction(movie.imdbID);
                    }}
                  >
                    {actionText}
                  </Button>
                )}
              </div>
            </Card.Footer>
          </Card>
        </div>
      </Col>
    ))}
  </Row>
);