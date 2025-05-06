// Home.jsx
import { useState, useEffect } from "react";
import { Form, Button, Alert, Spinner, Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";
import MovieCardDetail from "./MovieCardDetail";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

// Creates a motion-enabled Col component from React Bootstrap's Col.
const MotionCol = motion.create(Col);

export default function Main({
  // Props passed to the component
  movies,
  loading,
  error,
  onSearch,
  selectedMovie,
  fetchMovieDetails,
  detailLoading,
  onBackToList,
  onAddToWatchlist,
  setSelectedMovie
}) {
  // State to store the user's search term.
  const [searchTerm, setSearchTerm] = useState("");

  // State to control the visibility of the search results.
  const [showResults, setShowResults] = useState(false);

  // Hook to access the current URL location from React Router.
  const location = useLocation();

  // useEffect hook to clear the selected movie when the route changes.
  useEffect(() => {
    setSelectedMovie(null);
  }, [location, setSelectedMovie]);

  // Function to handle the form submission.
  // It prevents the default form submission behavior, sets the showResults state to false,
  // and then calls the onSearch function with the search term after a short delay.
  // The delay is used to allow the UI to update before the search is executed
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(false);
    setTimeout(() => {
      onSearch(searchTerm);
      setShowResults(true);
    }, 10);
  };

  // Function to handle the movie card click event.
  // It fetches the details of the selected movie using its ID.
  const handleMovieClick = (id) => {
    fetchMovieDetails(id);
  };

  return (
    <div className="home-container">
      <h1 className="my-4">Welcome to Cinephile</h1>
      <h3>A platform specifically designed for addicts of the Big Screen</h3>
      <h5>Start by searching for a movie/show title</h5>

      <Form onSubmit={handleSubmit} className="mb-4">
        <Form.Group controlId="searchForm">
          <Row className="text-center gx-0">
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
                className={`w-100 search-button`}
              >
                {loading ? (
                  <>
                    <Spinner size="sm" className="me-2" />
                    Searching...
                  </>
                ) : (
                  "Search"
                )}
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>

      {error && <Alert variant="danger">{error}</Alert>}

      <div style={{ overflow: "hidden", position: "relative" }}>
        <AnimatePresence mode="wait">
          {selectedMovie ? (
            <motion.div
              key="detail"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="container mt-4"
            >
              <MovieCardDetail
                movie={selectedMovie}
                onBack={onBackToList}
                detailLoading={detailLoading}
              />
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {showResults && movies.length > 0 && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: { staggerChildren: 0.1 }
                    }
                  }}
                  style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
                >
                  <Row xs={1} md={2} lg={3} xl={4} className="g-4 pb-4">
                    {movies.map((movie) => (
                      <MotionCol
                        key={movie.imdbID}
                        className="d-flex justify-content-center mx-auto"
                        variants={{
                          hidden: { opacity: 0, y: 30, scale: 0.9 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: { type: "spring", stiffness: 300, damping: 20 }
                          }
                        }}
                        whileHover={{ scale: 1.03, originY: 0 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <MovieCard
                          movie={movie}
                          onClick={() => handleMovieClick(movie.imdbID)}
                          onAddToWatchlist={onAddToWatchlist}
                        />
                      </MotionCol>
                    ))}
                  </Row>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}