import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'game',
    pathMatch: 'full',
  },
  {
    path: 'game',
    loadComponent: () =>
      import('./components/chess-board.component').then(
        (m) => m.ChessBoardComponent
      ),
  },
];
