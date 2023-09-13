import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-new-pass',
  templateUrl: './new-pass.page.html',
  styleUrls: ['./new-pass.page.scss'],
})
export class NewPassPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
    
  }
  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: '',
      message: `Su contraseña ha sido reestablecida. Inicie sesión nuevamente. ${this.correoElectronico}`,
      buttons: ['OK'],
    });
  
    await alert.present();
  }
  correoElectronico: string = '';
}
