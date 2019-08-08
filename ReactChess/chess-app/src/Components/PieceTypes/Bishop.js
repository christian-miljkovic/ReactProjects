import React from 'react';

class Bishop extends React.Component{

    render(){
        if(this.props.color === 'white'){
            return(
                <div>
                    &#9815;
                </div>
            );
        }
        else{
            return(
                <div>
                    &#9821;
                </div>
            );
        }
        
    }

}

export default Bishop;