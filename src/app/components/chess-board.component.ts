import { Component, OnInit, computed, inject } from '@angular/core';
import ChessBoard from '../logic/ChessBoard';
import { Square } from '../logic/Square';
import { CommonModule } from '@angular/common';
import { MovementService } from '../services/movement.service';

@Component({
  standalone: true,
  selector: 'chess-board',
  imports: [CommonModule],
  templateUrl: 'chess-board.component.html',
  styleUrls: ['chess-board.component.scss'],
})
export class ChessBoardComponent implements OnInit {
  chessBoard: ChessBoard = new ChessBoard();
  board = computed(() => this.chessBoard.board);
  movementService = inject(MovementService);

  ngOnInit() {
    this.chessBoard.placeChessPieces();
  }

  dragging: Square | null = null;

  isValidTargetSquare(square: Square) {
    return computed(() => {
      return this.dragging != null && this.dragging.piece != null
        ? this.dragging.piece.isLegalMove(this.dragging, square)
          ? 'valid'
          : ''
        : '';
    });
  }

  targetSquare: Square | null = null;

  async onDragStart(event: DragEvent, square: Square) {
    this.dragging = square;
    if (this.dragging?.piece != null) {
      console.log('drag start', event, square);
    }
  }

  async onDragEnd(event: DragEvent) {
    if (this.dragging != null && this.targetSquare != null) {
      const targetSquare = this.movementService.move(
        this.dragging,
        this.targetSquare
      );
    }
    this.dragging = null;
    this.targetSquare = null;
  }

  async onDragOver(event: DragEvent, square: Square) {
    if (square != null) {
      this.targetSquare = square;
    } else this.targetSquare = null;
  }

  // async justLogThis(name: string, event: DragEvent) {
  //   console.log('just log this:', event);
  // }
}
