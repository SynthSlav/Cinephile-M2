import { useState } from "react"
import { Form, Button, Alert, Spinner, Row, Col } from "react-bootstrap"
import MovieCard from "./MovieCard"
import MovieCardDetail from "./MovieCardDetail"

export default function Main({movies, loading, error, onSearch, selectedMovie, fetchMovieDetails, detailLoading, onBackToList, onAddToWatchlist}) {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSearch(searchTerm);
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
        )
    }

    return (
        <div className="home-container">
            {/* Search input form */}
            <Form onSubmit={handleSubmit} className="mb-4">
                <Form.Group controlId="searchForm">
                    <Row className="align-items-center">
                        <Col md={8}>
                            <Form.Control 
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search for a movie/show..."
                                disabled={loading}
                            />
                        </Col>
                        <Col md={4}>
                            <Button 
                                type="submit"
                                variant="primary"
                                disabled={loading || !searchTerm.trim()}
                                className="w-100"
                            >
                            {loading ? (
                                <>
                                    <Spinner 
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        className="me-2"
                                    />
                                    Searching...
                                </>
                            ) : 'Search'}
                            </Button>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>

            {/* error */}

            {error && <Alert variant="danger">{error}</Alert>}

            {/* Movies */}
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {movies.map((movie) =>(
                    <Col key={movie.imdbID}>
                        <MovieCard 
                            movie={movie} 
                            onClick={() => fetchMovieDetails(movie.imdbID)} 
                            onAddToWatchlist={onAddToWatchlist}

                        />
                    </Col>
                ))}                
            </Row>
        </div>
    )
}