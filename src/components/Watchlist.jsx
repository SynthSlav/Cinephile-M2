import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";
import WatchlistSection from "./WatchlistSection";
import MovieCardDetail from "./MovieCardDetail";
import "./transitions.css";

// This component displays the user's watchlist, allowing them to view, remove, or mark movies as watched.
// It uses Bootstrap for styling and Framer Motion for animations.
const MotionDiv = motion.div;

export default function Watchlist({
  watchlist,
  onRemove,
  onMarkWatched,
  fetchMovieDetails,
  selectedMovie,
  onBackToList,
  detailLoading,
}) {
  const [activeTab, setActiveTab] = useState("toWatch");

  const handleMovieClick = (id) => {
    fetchMovieDetails(id);
  };

  return (
    <div className="watchlist-container">
      <h2 className="mb-4">My Watchlist</h2>

      <AnimatePresence mode="wait">
        {selectedMovie ? (
          <MotionDiv
            key={selectedMovie.imdbID}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 0.3,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="container mt-4"
            style={{ overflowX: "hidden" }}
          >
            <MovieCardDetail
              movie={selectedMovie}
              onBack={onBackToList}
              detailLoading={detailLoading}
            />
          </MotionDiv>
        ) : (
          <MotionDiv
            key="watchlist"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="px-3"
            style={{ overflowX: "hidden", paddingLeft: "1rem", paddingRight: "1rem" }}
          >
            <Tabs
              activeKey={activeTab}
              onSelect={(t) => setActiveTab(t)}
              className="mb-4 justify-content-center"
            >
              <Tab eventKey="toWatch" title={`To Watch (${watchlist.toWatch.length})`}>
                <AnimatePresence>
                  {activeTab === "toWatch" && watchlist.toWatch.length > 0 && (
                    <WatchlistSection
                      movies={watchlist.toWatch}
                      onRemove={onRemove}
                      onAction={onMarkWatched}
                      actionText="Mark as Watched"
                      onMovieClick={handleMovieClick}
                      key="toWatchList"
                    />
                  )}
                  {activeTab === "toWatch" && watchlist.toWatch.length === 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-center mt-3"
                      key="emptyToWatch"
                    >
                      Your "To Watch" list is empty.
                    </motion.div>
                  )}
                </AnimatePresence>
              </Tab>
              <Tab eventKey="watched" title={`Watched (${watchlist.watched.length})`}>
                <AnimatePresence>
                  {activeTab === "watched" && watchlist.watched.length > 0 && (
                    <WatchlistSection
                      movies={watchlist.watched}
                      onRemove={onRemove}
                      actionText="Remove"
                      onMovieClick={handleMovieClick}
                      key="watchedList"
                    />
                  )}
                  {activeTab === "watched" && watchlist.watched.length === 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-center mt-3"
                      key="emptyWatched"
                    >
                      Your "Watched" list is empty.
                    </motion.div>
                  )}
                </AnimatePresence>
              </Tab>
            </Tabs>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
}