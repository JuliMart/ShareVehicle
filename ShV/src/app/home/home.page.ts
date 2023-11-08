import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage { 
  usuario: string = '';
  contrasena: string = '';

  constructor(private router: Router) {}

  login() {
    const usuarioValido = this.usuario.length >= 3 && this.usuario.length <= 8;
    const contrasenaValida = /^\d{4}$/.test(this.contrasena);

    if (usuarioValido && contrasenaValida) {
      localStorage.setItem('usuario', this.usuario);
      this.router.navigate(['/main']);
    } else {
      console.log('Credenciales incorrectas');
    }
  }
}
