import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Collapse({ collapsedLabel, expandedLabel, isExpanded, children }) {

  const [collapse, setCollapse] = useState(isExpanded);

  const handleCollapse = () => {
    setCollapse(prev => !prev);
  }

  const style = { visibility: 'visible', maxHeight: '500px' };

  return (
    <div className="collapse">
      <div
        className="collapse__container"
        style={collapse ? style : null}
      >
        {children}
      </div>
      <a className="collapse__link" href="!#" onClick={handleCollapse}>
        {collapse ? expandedLabel : collapsedLabel}
      </a>
    </div>
  );
}

Collapse.propTypes = {
  collapsedLabel: PropTypes.string,
  expandedLabel: PropTypes.string,
  isExpanded: PropTypes.bool,
}

Collapse.defaultProps = {
  isExpanded: true,
};