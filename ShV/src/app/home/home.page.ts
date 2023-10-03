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
  login()
  {
    // Verificar las credenciales (esto es un ejemplo básico, debes implementar tu propia lógica de autenticación)
    const usuarioValido = this.usuario.length >= 3 && this.usuario.length <= 8;
    const contrasenaValida = /^\d{4}$/.test(this.contrasena);

    if (usuarioValido && contrasenaValida) {
      // Guardar el valor de usuario en el almacenamiento local
      localStorage.setItem('usuario', this.usuario);

      // Navegar a la página de Registro
      this.router.navigate(['/main']);
    } else {
      // Mostrar un mensaje de error o manejar la autenticación incorrecta
      console.log('Credenciales incorrectas');
    }
  }
}


