import React from 'react';

class Pawn extends React.Component{

    render(){
        if(this.props.color === 'white'){
            return(
                <div>
                    &#x2659;
                </div>
            );
        }
        else{
            return(
                <div>
                    &#9823;
                </div>
            );
        }
        
    }

}

export default Pawn;