import Star from "./Star";
import PropTypes from 'prop-types'

export default function Stars ({count}) {
  if (typeof count !== 'number' || isNaN(count) || count < 1 || count > 5) {
    return null;
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {Array(count).fill().map((_, count) => <li key={count}><Star /></li>)}
    </ul>
  );
}

Stars.propTypes = {
  count: PropTypes.number.isRequired
}