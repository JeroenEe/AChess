import { Piece } from './pieces/Piece';

export default class Movement {
  static isOutOfBounds(rowIndex: number, colIndex: number): boolean {
    return rowIndex < 0 || rowIndex > 7 || colIndex < 0 || colIndex > 7;
  }

  static isFriendlyFire(from: Piece, to?: Piece): boolean {
    return from.color == to?.color;
  }
}
