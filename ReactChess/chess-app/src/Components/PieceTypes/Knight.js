import React from 'react';

class Knight extends React.Component{

    render(){
        if(this.props.color === 'white'){
            return(
                <div>
                    &#9816;
                </div>
            );
        }
        else{
            return(
                <div>
                    &#9822;
                </div>
            );
        }
        
    }

}

export default Knight;