import { useState, useRef } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import WatchlistSection from "./WatchlistSection";
import MovieCardDetail from "./MovieCardDetail";
import "./transitions.css";
import { AnimatePresence, motion } from "framer-motion";

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

  // const listRef = useRef(null);
  // const detailRef = useRef(null);

  const handleMovieClick = (id) => {
    fetchMovieDetails(id);
  };

  return (
    <div className="watchlist-container">
      <h2 className="mb-4">My Watchlist</h2>

      <AnimatePresence mode="wait">
        {selectedMovie ? (
          <motion.div
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
          </motion.div>
        ) : (
          <motion.div
            key="watchlist"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            style={{ overflowX: "hidden" }}
          >
            <Tabs
              activeKey={activeTab}
              onSelect={(t) => setActiveTab(t)}
              className="mb-4 justify-content-center"
            >
              <Tab eventKey="toWatch" title={`To Watch (${watchlist.toWatch.length})`}>
                <AnimatePresence mode="wait">
                  {activeTab === "toWatch" && (
                    <motion.div
                      key="toWatch"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <WatchlistSection
                        movies={watchlist.toWatch}
                        onRemove={onRemove}
                        onAction={onMarkWatched}
                        actionText="Mark as Watched"
                        onMovieClick={handleMovieClick}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Tab>
              <Tab eventKey="watched" title={`Watched (${watchlist.watched.length})`}>
                <AnimatePresence mode="wait">
                  {activeTab === "watched" && (
                    <motion.div
                      key="watched"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <WatchlistSection
                        movies={watchlist.watched}
                        onRemove={onRemove}
                        actionText="Remove"
                        onMovieClick={handleMovieClick}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Tab>
            </Tabs>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
