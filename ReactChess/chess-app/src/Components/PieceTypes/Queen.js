import React from 'react';

class Queen extends React.Component{

    render(){
        if(this.props.color === 'white'){
            return(
                <div>
                    &#9813;
                </div>
            );
        }
        else{
            return(
                <div>
                    &#9819;
                </div>
            );
        }
        
    }

}

export default Queen;