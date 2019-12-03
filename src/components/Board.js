import React, { Component } from "react";
import { WOW } from 'wowjs/dist/wow';
import Cell from "./Cell";
import './Board.css';

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25
  }

  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard()
    }
  }


  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  componentDidMount() {
    new WOW().init()
  }

  createBoard() {
    const { nrows, ncols, chanceLightStartsOn } = this.props
    let board = [];
    for (let y = 0; y < nrows; y++) {
      let row = [];
      for (let x = 0; x < ncols; x++) {
        row.push(Math.random() < chanceLightStartsOn)
      }
      board.push(row);
    }
    return board;
  }

  /** handle changing a cell: update board & determine if winner */


  flipCellsAround(coordinate) {
    console.log("Flipping", coordinate)
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coordinate.split("-").map(Number);

    function flipCell(y, x) {
      // if this coordinate is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    flipCell(y, x);
    flipCell(y, x - 1);
    flipCell(y, x + 1);
    flipCell(y - 1, x);
    flipCell(y + 1, x);

    // win when every cell is turned off  
    // this.setState({ board, hasWon });
    let hasWon = board.every(row => row.every(cell => !cell));

    this.setState({
      hasWon: hasWon,
      board: board
    })
  }

  makeTable = () => {
    const { ncols, nrows } = this.props;
    const { board, hasWon } = this.state;
    let tableBoard = [];
    for (let y = 0; y < nrows; y++) {
      let row = [];
      for (let x = 0; x < ncols; x++) {
        let coordinate = `${y}-${x}`;
        row.push(
          <Cell
            key={coordinate}
            isLit={board[y][x]}
            flipCellsAroundMe={() => this.flipCellsAround(coordinate)}
          />)
      }
      tableBoard.push(<tr>{row}</tr>)
    }
    return (
      <table classNam="Board">
        <tbody>
          {tableBoard}
        </tbody>
      </table>
    )
  }

  /** Render game board or winning message. */

  render() {
    const { hasWon } = this.state;
    return (
      <div className="wow zoomIn slow">
        <div className="styleOne">
          {hasWon ? (
            <div className="winner">
              <span className="neon-orange">You</span>
              <span className="neon-blue">Win!</span>
            </div>
          ) : (
              <div>
                <div className="Board-title">
                  <div className="neon-orange">Game</div>
                  <div className="neon-blue">On!</div>
                </div>
                {this.makeTable()}
              </div>
            )}
        </div>
      </div>
    )
  }
}


export default Board;
