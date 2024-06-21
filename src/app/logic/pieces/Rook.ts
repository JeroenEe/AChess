import { TCoordinates } from '../ChessBoard';
import { Square } from '../Square';
import { Piece, TPiece, TColor, EPieces } from './Piece';

export class Rook extends Piece implements TPiece {
  constructor(color: TColor, parent: Square) {
    super(color, EPieces.ROOK, parent);
  }

  override isLegalMove(from: Square, to: Square): boolean {
    throw new Error('Method not implemented.');
  }
}
