import React from 'react';
import '../css/Board.css';
import Piece from './Piece.js';
import Pawn from './PieceTypes/Pawn.js';

class Square extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="square" style={{background: this.props.color}}>
                <Piece type={this.props.type} />
            </div>
        );
    }
}

class Board extends React.Component{

    constructor(props){
        super(props);
    }

    renderRow(isOdd){
        if(isOdd===true){
            return(
                <div className="row">
                    <Square color={"#ffffff"}/>
                    <Square color={"#000000"}/>
                    <Square color={"#ffffff"}/>
                    <Square color={"#000000"}/>
                    <Square color={"#ffffff"}/>
                    <Square color={"#000000"}/>
                    <Square color={"#ffffff"}/>
                    <Square color={"#000000"}/>
                </div>          
            );
        }
        else{
            return(
                <div className="row">
                    <Square color={"#000000"}/>
                    <Square color={"#ffffff"}/>
                    <Square color={"#000000"}/>
                    <Square color={"#ffffff"}/>
                    <Square color={"#000000"}/>
                    <Square color={"#ffffff"}/>
                    <Square color={"#000000"}/>
                    <Square color={"#ffffff"}/>
                </div>          
            );
        }
    }

    render(){
        return(
            <div>
                {this.renderRow(true)}
                {this.renderRow(false)}
                {this.renderRow(true)}
                {this.renderRow(false)}
                {this.renderRow(true)}
                {this.renderRow(false)}
                {this.renderRow(true)}
                {this.renderRow(false)}
            </div>
        );
    }
}

export default Board;