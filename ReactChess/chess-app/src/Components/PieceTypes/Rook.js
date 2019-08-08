import React from 'react';

class Rook extends React.Component{

    render(){
        if(this.props.color === 'white'){
            return(
                <div>
                    &#9814;
                </div>
            );
        }
        else{
            return(
                <div>
                    &#9820;
                </div>
            );
        }
        
    }

}

export default Rook;