import React, { Component } from 'react';
import { TweenMax, TimelineMax } from 'gsap';

import {
  HoverPopupContainer,
  ZoomZone,
  Dots,
  Black,
  Blue,
  Turquoise,
  Price
} from './hoverPopup.styled';


export default class HoverPopup extends Component {
  state = {
    jeansHovered: false
  }

  componentDidMount() {
    const tl = new TimelineMax();

    tl.add(TweenMax.from('.hover-container', 0.3, { opacity: 0 }));
    tl.add(TweenMax.staggerFrom('.dot', 0.25, { opacity: 0, y: 15 }, 0.05));
    tl.add(TweenMax.from('.price', 0.25, { opacity: 0, y: 10 }), '-=0.15');
  }

  toggleJeansHovered() {
    this.setState({ jeansHovered: !this.state.jeansHovered });
  }

  render() {
    const { jeansHovered } = this.state;
    return (
      <HoverPopupContainer
        className='hover-container'
        jeansHovered={jeansHovered}
      >
        <ZoomZone
          onMouseEnter={this.toggleJeansHovered.bind(this)}
          onMouseLeave={this.toggleJeansHovered.bind(this)}
        />

        <Dots>
          <Black className='dot' />
          <Blue className='dot' />
          <Turquoise className='dot' />
        </Dots>

        <Price className='price' jeansHovered={jeansHovered}>
          $ 119,<span style={{ fontSize: '0.6rem', verticalAlign: 'top' }}>95</span>
        </Price>

      </HoverPopupContainer>
    );
  }
}