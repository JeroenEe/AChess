import { Square } from './Square';
import { Bishop } from './pieces/Bishop';
import { King } from './pieces/King';
import { Knight } from './pieces/Knight';
import { Pawn } from './pieces/Pawn';
import { Queen } from './pieces/Queen';
import { Rook } from './pieces/Rook';

export default class ChessBoard {
  board: Square[][];

  constructor() {
    this.board = this.createBoard();
  }

  createBoard() {
    const board: Square[][] = [];
    const colors: TColor[] = ['white', 'black'];

    for (let i = 0; i < 8; i++) {
      const row: Square[] = [];
      colors.reverse();

      for (let j = 0; j < 8; j++) {
        const color: TColor = colors[j % 2];
        const coordinates: TCoordinates = {
          x: X[j],
          y: Y[i],
          xIndex: j,
          yIndex: i,
        };
        row.push(new Square(coordinates, color, this));
      }

      board.unshift(row); // Make sure the board is oriented correctly
    }

    return board;
  }

  getSquareByIndexes(x: number, y: number): Square {
    return this.board[y][x];
  }

  placeChessPieces(savedGrid?: Square[][]) {
    if (savedGrid) {
      this.board = savedGrid;
    } else {
      // Place black pawns
      this.board[1].forEach((square) => {
        square.piece = new Pawn('black', square);
      });

      // Place white pawns
      this.board[6].forEach((square) => {
        square.piece = new Pawn('white', square);
      });

      // Place rooks
      this.board[0][0].piece = new Rook('black', this.board[0][0]);
      this.board[0][7].piece = new Rook('black', this.board[0][7]);
      this.board[7][0].piece = new Rook('white', this.board[7][0]);
      this.board[7][7].piece = new Rook('white', this.board[7][7]);

      // Place knights
      this.board[0][1].piece = new Knight('black', this.board[0][1]);
      this.board[0][6].piece = new Knight('black', this.board[0][6]);
      this.board[7][1].piece = new Knight('white', this.board[7][1]);
      this.board[7][6].piece = new Knight('white', this.board[7][6]);

      // Place bishops
      this.board[0][2].piece = new Bishop('black', this.board[0][2]);
      this.board[0][5].piece = new Bishop('black', this.board[0][5]);
      this.board[7][2].piece = new Bishop('white', this.board[7][2]);
      this.board[7][5].piece = new Bishop('white', this.board[7][5]);

      // Place queens
      this.board[0][3].piece = new Queen('black', this.board[0][3]);
      this.board[7][3].piece = new Queen('white', this.board[7][3]);

      // Place kings
      this.board[0][4].piece = new King('black', this.board[0][4]);
      this.board[7][4].piece = new King('white', this.board[7][4]);
    }
  }
}

export type TColor = 'white' | 'black';
export type TCoordinates = { x: TX; y: TY; xIndex: number; yIndex: number };
export type TX = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';
export type TY = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
export const X: TX[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
export const Y: TY[] = ['1', '2', '3', '4', '5', '6', '7', '8'];
