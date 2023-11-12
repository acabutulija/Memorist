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
    loadComponent: () => import('./notes/notes.page').then( m => m.NotesPage)
  },
  {
    path: 'account',
    loadComponent: () => import('./account/account.page').then( m => m.AccountPage)
  },
  {
    path: 'new-note',
    loadComponent: () => import('./new-note/new-note.component').then(m => m.NewNoteComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./account-component/account-component.component').then(m => m.AccountComponentComponent)
  }
];
