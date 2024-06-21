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
      Movement.isFriendlyFire(from.piece, to.piece) ||
      this.invalidMoveAction(from, to)
    )
      return false;
    else return true;
  }

  invalidMoveAction(from: Square, to: Square): boolean {
    switch (from.piece!.color) {
      case 'white':
        if (
          this.isWhiteForwardMove(from, to) &&
          this.notSideways(from, to) &&
          this.notBlocked(from, to)
        )
          return false;
        else return true;
      case 'black':
        if (
          this.isBlackForwardMove(from, to) &&
          this.notSideways(from, to) &&
          this.notBlocked(from, to)
        )
          return false;
        else return true;
      default:
        throw new Error('No pawn color could be determined');
    }
  }

  isWhiteForwardMove(from: Square, to: Square): boolean {
    if (from.coordinates.yIndex === 1) {
      if (to.coordinates.yIndex === from.coordinates.yIndex + 2) return true;
    }
    if (to.coordinates.yIndex === from.coordinates.yIndex + 1) return true;
    else return false;
  }

  isBlackForwardMove(from: Square, to: Square): boolean {
    if (from.coordinates.yIndex === 6) {
      if (to.coordinates.yIndex === from.coordinates.yIndex - 2) return true;
    }
    if (to.coordinates.yIndex === from.coordinates.yIndex - 1) return true;
    else return false;
  }

  notSideways(from: Square, to: Square): boolean {
    if (to.coordinates.xIndex === from.coordinates.xIndex) return true;
    else return false;
  }

  notBlocked(from: Square, to: Square): boolean {
    // Check if something is between the pawn and the destination
    if (Math.abs(from.coordinates.yIndex - to.coordinates.yIndex) == 2) {
      if (from.piece?.color == 'black') {
        const inBetweenSquare = from.parent.getSquareByIndexes(
          to.coordinates.xIndex,
          to.coordinates.yIndex - 2
        );
        if (inBetweenSquare.piece != null) return false;
      }

      if (from.piece?.color == 'white') {
        const inBetweenSquare = from.parent.getSquareByIndexes(
          to.coordinates.xIndex,
          to.coordinates.yIndex + 2
        );
        if (inBetweenSquare.piece != null) return false;
      }
    }

    // Check if something is straight ahead of the pawn, assuming the forward move logic is sound.
    if (to.piece == null) return true;
    else return false;
  }

  // TODO: En Passant

  // TODO: Regular move is one square forward (or two if opening move)

  // TODO: Capture is one square diagonally forward
}
