import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePageComponent {
  nombreUsuario: string = ''; // Variable para capturar el nombre de usuario

  constructor(private router: Router) {}

  navegarAMain() {
    // Verifica si se ha ingresado un nombre de usuario
    if (this.nombreUsuario.trim() !== '') {
      // Navega a la página /main y pasa el nombre de usuario como parámetro
      this.router.navigate(['/main'], { queryParams: { usuario: this.nombreUsuario } });
    }
  }
}
