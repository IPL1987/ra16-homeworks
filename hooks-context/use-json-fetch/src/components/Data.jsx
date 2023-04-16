import useJsonFetch from '../hooks/userJsonFetch';
import PropTypes from 'prop-types';

export function Data({ endpoint, title }) {
  const [data, loading, error] = useJsonFetch(`${process.env.REACT_APP_TEST_URL}${endpoint}`);

  return (
    <div>
      {title}: {(loading && 'Loading...') || (data && data.status) || (error && error.status)}
    </div>
  );
}

Data.propTypes = {
  endpoint: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}