import { Component } from '@angular/core';
import { UserService } from 'src/app/serviceApp/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // Définir les propriétés pour le formulaire
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  constructor(private userService: UserService) { }

  register(form: any) {
    const userData = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    };



    this.userService.registerUser(userData).subscribe(
      response => {
        console.log('Inscription réussie', response);
        // Redirection ou affichage d'un message de succès
        alert('Inscription réussie!');
      },
      error => {
        console.error('Erreur lors de l\'inscription', error);
      }
    );
  }
}


