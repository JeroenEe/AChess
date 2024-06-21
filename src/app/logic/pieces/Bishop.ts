import { TCoordinates } from '../ChessBoard';
import { Square } from '../Square';
import { Piece, TPiece, TColor, EPieces } from './Piece';

export class Bishop extends Piece implements TPiece {
  constructor(color: TColor, parent: Square) {
    super(color, EPieces.BISHOP, parent);
  }

  override isLegalMove(from: Square, to: Square): boolean {
    throw new Error('Method not implemented.');
  }
}
