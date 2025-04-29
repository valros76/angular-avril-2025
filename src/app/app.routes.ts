import { Routes } from '@angular/router';
import { WebSnapListComponent } from './components/web-snap-list/web-snap-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const appTitle = "WebSnapApp";

export const routes: Routes = [
  {
    path: "",
    title: `Accueil - ${appTitle}`,
    loadComponent: () => LandingPageComponent
  },
  {
    path:"websnaps",
    title: `Liste des websnap - ${appTitle}`,
    loadComponent: () => WebSnapListComponent,
    children:[
      {
        path:"websnap/:id",
        title:`WebSnap - ${appTitle}`,
        loadComponent: () => WebSnapListComponent
      }
    ]
  },
  {
    path:"erreur/404",
    title: `Erreur 404 - ${appTitle}`,
    loadComponent: () => WebSnapListComponent
  },
  {
    path:"**",
    redirectTo: "erreur/404"
  }
];
