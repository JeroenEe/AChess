import { TColor, TCoordinates } from '../ChessBoard';
import { Square } from '../Square';

export type TPiece = {
  color: string;
  type: EPieces;
  parent: Square;
  isLegalMove(from: Square, to: Square): boolean;
};

export abstract class Piece implements TPiece {
  color: TColor;
  type: EPieces;
  parent: Square;
  imageFileName = (): string => getPieceSvgName(this.type, this.color);

  constructor(color: TColor, type: EPieces, parent: Square) {
    this.color = color;
    this.type = type;
    this.parent = parent;
  }

  abstract isLegalMove(from: Square, to: Square): boolean;
}

function getPieceSvgName(type: EPieces, color: TColor): string {
  const credits = 'reshot'; // Lovely icons!
  const fileName = `${credits}-icon-${type}-${color}.svg`;
  return fileName;
}

export enum EPieces {
  PAWN = 'pawn',
  ROOK = 'rook',
  KNIGHT = 'knight',
  BISHOP = 'bishop',
  QUEEN = 'queen',
  KING = 'king',
}
export { TColor };
