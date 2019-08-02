import React from 'react';

class Piece extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            type:props.type,
            _id: props._id,
            alive: true 
        };
    }

    render(){
        return(
            <div>
                {this.state.type}
            </div>
        );
    }

}


export default Piece;