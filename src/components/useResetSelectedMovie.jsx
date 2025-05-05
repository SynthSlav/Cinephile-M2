import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useResetSelectedMovie(setSelectedMovie) {
  const location = useLocation();

  useEffect(() => {
    setSelectedMovie(null);
  }, [location, setSelectedMovie]);
}

export default useResetSelectedMovie;