import React from 'react';

class King extends React.Component{

    render(){
        if(this.props.color === 'white'){
            return(
                <div>
                    &#9812;
                </div>
            );
        }
        else{
            return(
                <div>
                    &#9818;
                </div>
            );
        }
        
    }

}

export default King;