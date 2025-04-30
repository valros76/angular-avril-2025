import { Routes } from '@angular/router';
import { WebSnapListComponent } from '@/components/web-snap-list/web-snap-list.component';
import { LandingPageComponent } from '@/components/landing-page/landing-page.component';
import { WebSnapComponent } from '@/components/web-snap/web-snap.component';
import { ErrorComponent } from './components/error/error.component';

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
    loadComponent: () => WebSnapListComponent
  },
  {
    path:"websnaps/websnap/:id",
    title:`WebSnap - ${appTitle}`,
    loadComponent: () => WebSnapComponent,
  },
  {
    path:"erreur/404",
    title: `Erreur 404 - ${appTitle}`,
    loadComponent: () => ErrorComponent
  },
  {
    path:"**",
    redirectTo: "erreur/404"
  }
];
