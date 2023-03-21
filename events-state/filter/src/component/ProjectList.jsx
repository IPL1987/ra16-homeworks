import React from 'react';

export default class ProjectList extends React.Component {
  render() {
    const { projects } = this.props;
    
    return (
      <div className = 'projects'>
        {projects.map((el, index) => <div className = 'project' key={index}> 
          <img className = 'img' src={el.img} alt = 'portfolio-cards.png' />
        </div>)}
      </div>
    );
  }
}