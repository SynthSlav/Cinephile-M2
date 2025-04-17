import { useState } from 'react';
import { Tab, Tabs, Card, Button, Row, Col } from 'react-bootstrap';

export default function Watchlist({ watchlist, onRemove, onMarkWatched }) {
  const [activeTab, setActiveTab] = useState('toWatch');

  return (
    <div className="watchlist-container">
      <h2 className="mb-4">My Watchlist</h2>
      
      <Tabs activeKey={activeTab} onSelect={k => setActiveTab(k)} className="mb-4">
        <Tab eventKey="toWatch" title={`To Watch (${watchlist.toWatch.length})`}>
          <WatchlistSection 
            movies={watchlist.toWatch}
            onRemove={onRemove}
            onAction={onMarkWatched}
            actionText="Mark as Watched"
          />
        </Tab>
        <Tab eventKey="watched" title={`Watched (${watchlist.watched.length})`}>
          <WatchlistSection 
            movies={watchlist.watched}
            onRemove={onRemove}
            actionText="Remove"
          />
        </Tab>
      </Tabs>
    </div>
  );
}

const WatchlistSection = ({ movies, onRemove, onAction, actionText }) => (
  <Row xs={1} md={2} lg={3} xl={4} className="g-4">
    {movies.map(movie => (
      <Col key={movie.imdbID}>
        <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder-movie.png'}
                />
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <div className="d-flex gap-2">
              <Button variant="danger" size="sm" onClick={() => onRemove(movie.imdbID)}>
                Remove
              </Button>
              {onAction && (
                <Button variant="success" size="sm" onClick={() => onAction(movie.imdbID)}>
                  {actionText}
                </Button>
              )}
            </div>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);