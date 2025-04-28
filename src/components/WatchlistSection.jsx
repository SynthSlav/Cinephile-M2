import { Card, Col, Row, Button } from "react-bootstrap";

export default function WatchlistSection({
  movies,
  onRemove,
  onAction,
  actionText,
  onMovieClick,
}) {
  return (
    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
      {movies.map((movie) => (
        <Col key={movie.imdbID}>
          <div
            className="h-100"
            onClick={() => onMovieClick(movie.imdbID)}
            style={{ cursor: "pointer" }}
          >
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder-movie.png"}
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
}
