import React, { Component } from 'react';
import styled from 'styled-components';
import Jeans from '../jeans';

const JeansGrid = styled.div`
  display: grid; 
  max-width: 1200px; 
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin: 0 auto; 
  padding: 50px; 
`;

class App extends Component {

  state = {
    itemHovered: null
  }

  handleMouseEnter(id) {
    this.setState({ itemHovered: id })
  }

  handleMouseLeave(id) {
    this.setState({ itemHovered: null });
  }

  render() {
    return (
      <JeansGrid>
        {
          Array.apply(null, Array(12)).map((v, i) => (
            <Jeans
              key={i}
              id={i + 1}
              itemHovered={this.state.itemHovered}
              hoverHandler={this.handleMouseEnter.bind(this)}
              exitHandler={this.handleMouseLeave.bind(this)}
            />
          ))
        }

      </JeansGrid>
    );
  }
}

export default App;
