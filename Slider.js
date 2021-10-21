import React, { Component } from 'react';

const Slide = props => {
  const { movieGroup } = props;
  return <div className="new-releases-slide">{movieGroup}</div>;
};

let movieArr = [];

class Slider extends Component {
 
  createNestedArr = () => {
   
    return this.props.movie.map((item, i) => {
      return <Slide key={i} movieGroup={item} />;
    });
  };

 

  render() {
    return (
      <React.Fragment>
        <div
          className="movie-carousel"
          
        >
          {this.createNestedArr()}
        </div>
      </React.Fragment>
    );
  }
}

export default Slider;