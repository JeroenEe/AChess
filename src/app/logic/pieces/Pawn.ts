import { TCoordinates } from '../ChessBoard';
import Movement from '../Movement';
import { Square } from '../Square';
import { Piece, TPiece, TColor, EPieces } from './Piece';

export class Pawn extends Piece implements TPiece {
  constructor(color: TColor, parent: Square) {
    super(color, EPieces.PAWN, parent);
  }

  override isLegalMove(from: Square, to: Square): boolean {
    if (
      from.piece == null ||
      Movement.isOutOfBounds(to.coordinates.xIndex, to.coordinates.yIndex) ||
      Movement.isFriendlyFire(from.piece, to.piece)
    )
      return false;
    else return true;
  }

  // TODO: En Passant

  // TODO: Regular move is one square forward (or two if opening move)

  // TODO: Capture is one square diagonally forward
}
