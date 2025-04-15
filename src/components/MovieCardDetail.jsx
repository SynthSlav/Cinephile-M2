import { Card, Button, Row, Col, Badge } from 'react-bootstrap';

export default function MovieCardDetail({ movie, onBack, detailLoading }) {
    if (detailLoading) {
        return <div>Loading details</div>
    }

    return (
        <Card className='mb-4 shadow-lg'>
            <Button
                variant='light'
                onClick={onBack}
                className='position-absolute start m-2'
            >
                Back to results.
            </Button>
            <Row className='g-0'>
                <Col md={5}>
                    <Card.Img 
                        src={movie.Poster !== "N/A" ? movie.Poster : `Image for ${movie.Title} not available`}
                        className='rounded-start h-100'
                        style={{ objectFit: 'cover', minHeight: "500px"}}
                    />
                </Col>
                <Col md={7}>
                    <Card.Body className='p-4'>
                        <Card.Title as="h2">{movie.Title} <small>( {movie.Year} )</small></Card.Title>

                        <div className='mb-3'>
                            <Badge bg="secondary" className='me-2'>Type: {movie.Type}</Badge>
                            <Badge bg="secondary" className='me-2'>{movie.Rated}</Badge>
                            <Badge bg="secondary">Genre {movie.Genre?.split(', ').map(genre => (
                                <span key={genre} className='me-1'>{genre}</span>
                            ))}</Badge>
                        </div>

                        <Card.Text className='mb-4'>
                            <strong>Director: {movie.Director}</strong>
                            <strong>Cast: {movie.Actors}</strong>
                            <strong>Plot: {movie.Plot}</strong>
                        </Card.Text>

                        {movie.imdbRating && (
                            <Badge bg='warning' text='dark' className='fs-6'>
                                IMDb Rating: {movie.imdbRating} / 10
                            </Badge>
                        )}
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}