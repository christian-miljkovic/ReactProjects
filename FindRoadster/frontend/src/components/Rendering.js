import React, { Component } from "react";

class Rendering extends React.Component {
  
    constructor(props){
        super(props);
    }

    render(){

      return (
        <div> 
            <p>hello</p>       
            <div id="main-container" style={{width: 100, height: 100}}>Main</div>
            <script src="https://typpo.github.io/spacekit/src/lib/three.r98.min.js"></script>
            <script src="https://typpo.github.io/spacekit/src/lib/TrackballControls.js"></script>
            <script src="https://typpo.github.io/spacekit/build/spacekit.js"></script>
            <script>
                var options = {{basePath: "https://typpo.github.io/spacekit/src"}}
                const viz = new Spacekit.Simulation(document.getElementById("main-container"));
                
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
            </script> 
        </div>                               
      )
    }
  }
  
  export default Rendering;