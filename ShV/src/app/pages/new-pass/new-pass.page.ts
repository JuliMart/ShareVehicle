import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-pass',
  templateUrl: './new-pass.page.html',
  styleUrls: ['./new-pass.page.scss'],
})
export class NewPassPage implements OnInit {
  email: string = '';

  constructor() { }

  ngOnInit() { }

  reset() {
<<<<<<< HEAD
=======
    // Agrega lógica para restablecer la contraseña
>>>>>>> 8a04bccfade98ba203b815198442f549e4cccee5
  }
}
