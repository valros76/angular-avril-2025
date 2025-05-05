import { Routes } from '@angular/router';
import { WebSnapListComponent } from '@/components/web-snap-list/web-snap-list.component';
import { LandingPageComponent } from '@/components/landing-page/landing-page.component';
import { WebSnapComponent } from '@/components/web-snap/web-snap.component';
import { ErrorComponent } from './components/error/error.component';

import { authRoutes } from './routes/auth.routes';
import { AuthGuard } from './guards/auth/auth.guard';

const appTitle = "WebSnapApp";

export const routes: Routes = [
  {
    path: "",
    title: `Accueil - ${appTitle}`,
    pathMatch: "full",
    loadComponent: () => import("@/components/landing-page/landing-page.component").then(m => m.LandingPageComponent)
  },
  {
    path:"websnaps",
    title: `Liste des websnap - ${appTitle}`,
    canActivate: [AuthGuard],
    loadComponent: () => import("@/components/web-snap-list/web-snap-list.component").then(m => m.WebSnapListComponent)
  },
  {
    path:"websnaps/websnap/:id",
    title:`WebSnap - ${appTitle}`,
    canActivate: [AuthGuard],
    loadComponent: () => import("@/components/web-snap/web-snap.component").then(m => m.WebSnapComponent)
  },
  {
    path: "auth",
    loadChildren: () => import("./routes/auth.routes").then(m => m.authRoutes)
  },
  {
    path:"erreur/404",
    title: `Erreur 404 - ${appTitle}`,
    loadComponent: () => import("@/components/error/error.component").then(m => m.ErrorComponent)
  },
  {
    path:"**",
    redirectTo: "erreur/404"
  }
];
