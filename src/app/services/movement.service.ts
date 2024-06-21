import { Injectable } from '@angular/core';
import { Square } from '../logic/Square';
import ChessBoard from '../logic/ChessBoard';

@Injectable({ providedIn: 'root' })
export class MovementService {
  constructor() {}

  async move(from: Square, to: Square) {
    // No need to move if it stays in the same place.
    if (from?.coordinates == to?.coordinates) {
      return;
    }
    if (from.piece?.isLegalMove(from, to)) {
      to.piece = from.piece;
      from.piece = undefined;
    }
  }
}
