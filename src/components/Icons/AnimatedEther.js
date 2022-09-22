import * as React from 'react'
import ReactAnime from 'react-animejs'
import Ether from './Ether'

export function AnimatedEther({ width }) {
  const { Anime } = ReactAnime

  const targets = '#animated-ether-svg'

  return (
    <Anime
      initial={[
        {
          targets,
          rotate: 360,
          duration: 3200,
          loop: true,
          elasticity: 600,
          easing: 'easeOutElastic',
          delay: 80,
        },
      ]}
    >
      <Ether width={width} id="animated-ether-svg" />
    </Anime>
  )
}
