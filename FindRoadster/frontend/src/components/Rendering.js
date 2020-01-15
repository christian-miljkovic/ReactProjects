import React from "react";
import Script from 'react-load-script'

class Rendering extends React.Component {
  
    constructor(props){
        super(props);
    }


    componentDidMount() {

        setTimeout(() => 
            { 
            
                let script = document.createElement("script");
        
                script.innerText = `console.log('got in here');
        
                const viz = new Spacekit.Simulation(document.getElementById("main-container"), {basePath: "https://typpo.github.io/spacekit/src"});
                
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
                viz.createObject('neptune', Spacekit.SpaceObjectPresets.NEPTUNE);`
                script.async = false;
            
                document.body.appendChild(script);}
            , 1000);

        
      }


    render(){

      return (   
        <div>                   
        </div>                                   
      )
    }

    handleScriptCreate() {
        this.setState({ scriptLoaded: false })
    }
      
    handleScriptError() {
        this.setState({ scriptError: true })
    }
      
    handleScriptLoad() {
        this.setState({ scriptLoaded: true })
    }
  }
  
  export default Rendering;