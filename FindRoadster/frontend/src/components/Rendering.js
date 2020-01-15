import React, { Component } from "react";
import Spacekit from '../helper/spacekit'

class Rendering extends React.Component {
  
    constructor(props){
        super(props);
    }

    render(){
      return (
        <div className="main-view"></div>        
      )
    }

    componentDidMount(){
        const viz = new Spacekit.Simulation(document.getElementsByClassName('main-container'), {
            basePath: 'https://typpo.github.io/spacekit/src',
          });
          
          // Create a background using Yale Bright Star Catalog data.
          viz.createStars();
          
          // Create our first object - the sun - using a preset space object.
          viz.createObject('sun', Spacekit.SpaceObjectPresets.SUN);
          
          // Then add some planets
          viz.createObject('mercury', Spacekit.SpaceObjectPresets.MERCURY);
          viz.createObject('venus', Spacekit.SpaceObjectPresets.VENUS);
          viz.createObject('earth', Spacekit.SpaceObjectPresets.EARTH);
          viz.createObject('mars', Spacekit.SpaceObjectPresets.MARS);
          viz.createObject('jupiter', Spacekit.SpaceObjectPresets.JUPITER);
          viz.createObject('saturn', Spacekit.SpaceObjectPresets.SATURN);
          viz.createObject('uranus', Spacekit.SpaceObjectPresets.URANUS);
          viz.createObject('neptune', Spacekit.SpaceObjectPresets.NEPTUNE);
    }
  }
  
  export default Rendering;