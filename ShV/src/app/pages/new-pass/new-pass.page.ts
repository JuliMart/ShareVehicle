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
    // Agrega lógica para restablecer la contraseña
  }
}
