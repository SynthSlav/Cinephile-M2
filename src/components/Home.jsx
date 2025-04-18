import { useState } from "react"
import { Form, Button, Alert, Spinner, Row, Col } from "react-bootstrap"
import MovieCard from "./MovieCard"
import MovieCardDetail from "./MovieCardDetail"

export default function Main({movies, loading, error, onSearch, selectedMovie, fetchMovieDetails, detailLoading, onBackToList, onAddToWatchlist }) {
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

    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="home-container">
            <h1 className="my-4">Welcome to Cinephile</h1>
            <h3>A platform specifically designed for addicts of the Big Screen</h3>
            <h5>Start by searching for a movie/show title</h5>
            {/* Search input form */}
            <Form onSubmit={handleSubmit} className="mb-4">
                <Form.Group controlId="searchForm">
                    <Row className="text-center">
                        <Col md={8} sm={6} xs={6} className="p-4">
                            <Form.Control 
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search for a movie/show..."
                                disabled={loading}
                            />
                        </Col>
                        <Col md={4} sm={6} xs={6} className="p-4">
                            <Button
                                type="submit"
                                disabled={loading || !searchTerm.trim()}
                                className={`w-100 search-button ${isHovered ? 'hover' : ''}`}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                {loading ? (
                                    <>
                                        <Spinner size="sm" className="me-2" />
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
            <Row xs={1} md={2} lg={3} xl={4} className="g-4 pb-4">
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