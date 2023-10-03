import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  usuario: string = ''; // Agrega una propiedad para almacenar el nombre de usuario

  constructor() { }

  ngOnInit() {
    // Obtener el nombre de usuario almacenado en el almacenamiento local
    this.usuario = localStorage.getItem('usuario') || '';
  }


}
