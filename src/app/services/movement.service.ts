import { Injectable } from '@angular/core';
import { Square } from '../logic/Square';

@Injectable({ providedIn: 'root' })
export class MovementService {
  constructor() {}

  async move(from: Square, to: Square): Promise<boolean> {
    // No need to check anything if it stays in the same place.
    if (from?.coordinates == to?.coordinates) {
      return false;
    }

    // Check if the move can be done
    if (from.piece?.isLegalMove(from, to)) {
      to.piece = from.piece;
      from.piece = undefined;
      return true;
    } else return false;
  }
}
