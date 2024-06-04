import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/serviceApp/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(private userService: UserService, private router: Router) { }

  login() {
    const credentials = {
      email: this.email,
      password: this.password
    };

    console.log(credentials);
    

    this.userService.login(credentials).subscribe(
      response => {
        // Connexion réussie, rediriger vers la page d'accueil ou une autre page
        alert('Connexion réussie!');
        this.router.navigate(['/home']);
      },
      error => {
        console.error('Erreur lors de la connexion', error);
        // Afficher un message d'erreur à l'utilisateur, par exemple avec une alerte ou un message dans l'interface utilisateur
      }
    );
  }
}

