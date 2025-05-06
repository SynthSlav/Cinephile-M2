import { Card, Button, Row, Col, Badge } from 'react-bootstrap';

export default function MovieCardDetail({ movie, onBack, detailLoading }) {
    // Capitalizes the first letter of the movie's type
    const capitalizedType = movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1);
    
    // Conditional rendering: displays a loading message while movie details are being fetched.
    if (detailLoading) {
        return <div>Loading details</div>
    }

    return (
        <Card className='mb-4 shadow-md card-deets px-4 mx-4'>
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
                        <Card.Title style={{padding: '0.5rem 1rem'}} as="h2">{movie.Title} <small>( {movie.Year} )</small></Card.Title>

                        <div className='mb-3'>
                            <Badge bg="secondary" className='me-2'>Type: {capitalizedType}</Badge>
                            <Badge bg="secondary" className='me-2'>Content Rating: {movie.Rated}</Badge>
                            <Badge bg="secondary">Genre: {movie.Genre?.split(', ').map(genre => (
                                <span key={genre} className='me-1'>{genre}</span>
                            ))}</Badge>
                        </div>

                        <Row className='my-4'>
                            <div className='cbody-info'><strong>Director: {movie.Director}</strong></div>
                            <div className='cbody-info'><strong>Cast: {movie.Actors}</strong></div>
                            <div className='cbody-info'><strong>Awards: {movie.Awards}</strong></div>
                            <div className='cbody-info'><strong>Plot: {movie.Plot}</strong></div>
                        </Row>

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