import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'notes',
    loadComponent: () => import('./notes/notes.page').then( m => m.NotesPage),
  },
  {
    path: 'notes/new',
    loadComponent: () => import('./new-note/new-note.component').then(m => m.NewNoteComponent),
  },
  {
    path: 'account',
    loadComponent: () => import('./account/account.page').then(m => m.AccountPage),
  },
  {
    path: 'account/login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'account/register',
    loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent),
  },
];
