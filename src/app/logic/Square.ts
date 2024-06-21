import { Piece } from './pieces/Piece';
import ChessBoard, { TCoordinates, TColor } from './ChessBoard';

export class Square {
  coordinates: TCoordinates;
  color: TColor;
  piece?: Piece;

  private parent: ChessBoard;

  constructor(
    coordinates: TCoordinates,
    color: TColor,
    parent: ChessBoard,
    piece?: Piece
  ) {
    this.coordinates = coordinates;
    this.color = color;
    this.parent = parent;
    this.piece = piece;
  }

  get name(): string {
    return this.coordinates.x + this.coordinates.y;
  }
}
