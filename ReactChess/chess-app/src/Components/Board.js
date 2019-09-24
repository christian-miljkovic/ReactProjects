import React from 'react';
import '../css/Board.css';
import Piece from './Piece.js';
import Pawn from './PieceTypes/Pawn.js';
import Rook from './PieceTypes/Rook.js';
import Bishop from './PieceTypes/Bishop.js';
import Knight from './PieceTypes/Knight.js';
import Queen from './PieceTypes/Queen';
import King from './PieceTypes/King.js';

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
        this.state = {
            squares: Array(8).fill(null).map(()=>new Array(8).fill(null)),
            };
        
            // instantiate the pawns on the board
            for(let i = 0; i < this.state.squares[0].length; i++){
                this.state.squares[1][i] = <Pawn color={"black"}/>
            }

            // instantiate the pawns on the board
            for(let i = 0; i < this.state.squares[0].length; i++){
                this.state.squares[5][i] = <Pawn color={"white"}/>
            }

            // instantiate the rooks
            this.state.squares[6][0] = <Rook color={"white"}/>
            this.state.squares[6][7] = <Rook color={"white"}/>
            this.state.squares[0][0] = <Rook color={"black"}/>
            this.state.squares[0][7] = <Rook color={"black"}/>

            //instantiate the knights
            this.state.squares[6][1] = <Knight color={"white"}/>
            this.state.squares[6][6] = <Knight color={"white"}/>
            this.state.squares[0][1] = <Knight color={"black"}/>
            this.state.squares[0][6] = <Knight color={"black"}/>

            //instantiate the bishops
            this.state.squares[6][2] = <Bishop color={"white"}/>
            this.state.squares[6][5] = <Bishop color={"white"}/>
            this.state.squares[0][2] = <Bishop color={"black"}/>
            this.state.squares[0][5] = <Bishop color={"black"}/>  
            
            //instantiate the queens
            this.state.squares[6][3] = <Queen color={"white"}/>
            this.state.squares[0][3] = <Queen color={"black"}/>

            //instantiate the kings
            this.state.squares[6][4] = <King color={"white"}/>
            this.state.squares[0][4] = <King color={"black"}/>            
    }

    handleClick(row,col){
      // to implement 
    }

    renderRow(isOdd, rowNumber){
        if(isOdd===true){
            return(
                <div className="row">
                    <Square color={"#ffffff"} onClick={()=>this.handleClick(rowNumber,0)} type={this.state.squares[rowNumber][0]} />
                    <Square color={"#A9A9A9"} onClick={()=>this.handleClick(rowNumber,1)} type={this.state.squares[rowNumber][1]} />
                    <Square color={"#ffffff"} onClick={()=>this.handleClick(rowNumber,2)} type={this.state.squares[rowNumber][2]} />
                    <Square color={"#A9A9A9"} onClick={()=>this.handleClick(rowNumber,3)} type={this.state.squares[rowNumber][3]} />
                    <Square color={"#ffffff"} onClick={()=>this.handleClick(rowNumber,4)} type={this.state.squares[rowNumber][4]} />
                    <Square color={"#A9A9A9"} onClick={()=>this.handleClick(rowNumber,5)} type={this.state.squares[rowNumber][5]} />
                    <Square color={"#ffffff"} onClick={()=>this.handleClick(rowNumber,6)} type={this.state.squares[rowNumber][6]} />
                    <Square color={"#A9A9A9"} onClick={()=>this.handleClick(rowNumber,7)} type={this.state.squares[rowNumber][7]} />
                </div>          
            );
        }
        else{
            return(
                <div className="row">
                    <Square color={"#A9A9A9"} onClick={()=>this.handleClick(rowNumber,0)} type={this.state.squares[rowNumber][0]} />
                    <Square color={"#ffffff"} onClick={()=>this.handleClick(rowNumber,1)} type={this.state.squares[rowNumber][1]} />
                    <Square color={"#A9A9A9"} onClick={()=>this.handleClick(rowNumber,2)} type={this.state.squares[rowNumber][2]} />
                    <Square color={"#ffffff"} onClick={()=>this.handleClick(rowNumber,3)} type={this.state.squares[rowNumber][3]} />
                    <Square color={"#A9A9A9"} onClick={()=>this.handleClick(rowNumber,4)} type={this.state.squares[rowNumber][4]} />
                    <Square color={"#ffffff"} onClick={()=>this.handleClick(rowNumber,5)} type={this.state.squares[rowNumber][5]} />
                    <Square color={"#A9A9A9"} onClick={()=>this.handleClick(rowNumber,6)} type={this.state.squares[rowNumber][6]} />
                    <Square color={"#ffffff"} onClick={()=>this.handleClick(rowNumber,7)} type={this.state.squares[rowNumber][7]} />
                </div>          
            );
        }
    }    

    render(){
        return(
            <div>
                <div className="row">
                    {this.renderRow(true, 0)}
                    {this.renderRow(false, 1)}
                    {this.renderRow(true, 2)}
                    {this.renderRow(false, 3)}
                    {this.renderRow(true, 3)}
                    {this.renderRow(false, 4)}
                    {this.renderRow(true, 5)}
                    {this.renderRow(false, 6)}
                </div>                
            </div>
        );
    }
}

export default Board;