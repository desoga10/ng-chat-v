import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'chat',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/chat/chat.component').then((com) => com.ChatComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((com) => com.LoginComponent),
  },
  {
    path: '',
    loadComponent: () =>
      import('./pages/login/login.component').then((com) => com.LoginComponent),
  },
];
