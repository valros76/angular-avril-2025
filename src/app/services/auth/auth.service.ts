import { User } from "@/models/user.model";
import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal, WritableSignal } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, tap } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class AuthService{
  private authApiUrl: string = "http://localhost:3000/users";
  isAuthenticated: WritableSignal<boolean> = signal<boolean>(!!localStorage.getItem("fake-jwt"));
  private authToken: WritableSignal<string | null> = signal<string | null>(localStorage.getItem("fake-jwt"));

  private http = inject(HttpClient);
  private router = inject(Router);

  getToken(): string | null{
    return this.authToken();
  }

  login(username: string, password: string): Observable<User[] | undefined>{
    return this.http.get<User[]>(`${this.authApiUrl}?username=${username}&password=${password}`).pipe(
      tap(users => {
        const user = users[0];
        if(!user || !user.token){
          alert("Connexion échouée :  Nom d'utilisateur ou mot de passe incorrect.");
          this.isAuthenticated.set(false);
          this.authToken.set(null);
          throw new Error("Le nom de l'utilisateur ou le mot de passe sont incorrect / L'utilisateur n'existe pas dans la base de données.");
        }

        localStorage.setItem("fake-jwt", user.token);
        this.authToken.set(user.token);
        this.isAuthenticated.set(true);
        this.router.navigate(["/websnaps"]);
      })
    );
  }

  logout(): void{
    localStorage.removeItem("fake-jwt");
    this.authToken.set(null);
    this.isAuthenticated.set(false);
    this.router.navigate(["/auth/login"]);
  }

  isLoggedIn(): boolean{
    return this.isAuthenticated();
  }
}