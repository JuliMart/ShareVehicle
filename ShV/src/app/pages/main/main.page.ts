import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  usuario = '';

  constructor() { }

  ngOnInit() {
    this.usuario = localStorage.getItem('usuario') || '';
  }
}
