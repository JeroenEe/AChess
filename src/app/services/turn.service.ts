import { Injectable } from '@angular/core';
import { TColor } from '../logic/ChessBoard';

@Injectable({ providedIn: 'root' })
export class TurnService {
  changeTurn() {
    this._turn = this._turn === 'white' ? 'black' : 'white';
  }

  private _turn: TColor = 'white';

  get turn() {
    return this._turn;
  }
}
