import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ma propre application de gestion de devoirs';

  isChecked = false;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (!this.authService.loggedIn) {
      this.authService.logIn();
    } else {
      this.authService.logOut();
      // et on renvoi vers la home page
      this.router.navigate(['/home']);
    }
  }
}
