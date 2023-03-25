import Star from "./Star";
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'

export default function Stars ({count=0}) {
  if (typeof count !== 'number' || isNaN(count) || count < 1 || count > 5) {
    return null;
  }
  const starsItems = [];
  for (let i = 0; i < count; i++) {
    starsItems.push(<Star key={nanoid(5)} />)    
  }
  console.log(count);

  return (
    <ul className="card-body-stars u-clearfix">
      {starsItems}
    </ul>
  );
}

Stars.propTypes = {
  count: PropTypes.number.isRequired
}