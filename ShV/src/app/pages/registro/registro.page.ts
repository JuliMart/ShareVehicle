import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss'],
})
export class RegistroPage implements OnInit {

  email:string = "";
  contrasena:string = "";
  apellido:string = "";
  nombre:string = "";
  rut: string = "";
  usuario: string = "";

  constructor(
              private auth:AngularFireAuth,
              private helper:HelperService,
              private router:Router,
              private storageService:StorageService
              ) { }

  ngOnInit() {
    this.userView();
    
  }

  async userView(){
    console.log("USUARIOS STORAGE",await this.storageService.obtenerUsuario());
  }


  async registro(){
    const loader = await this.helper.showLoader("Cargando");
    try {
      const request = await this.auth.createUserWithEmailAndPassword(this.email,this.contrasena);
      var user = 
      [
        {
          correo:this.email,
          nombre:this.nombre,
          apellido:this.apellido,
          rut:this.rut,
          usuario:this.usuario,
          contrasena:this.contrasena
        }
      ]
      this.storageService.guardarUsuario(user);

      await this.router.navigateByUrl('login');
      await loader.dismiss();
      await this.helper.showAlert("Usuario registrado correctamente", "Información");

    } catch (error:any) {
      if (error.code == 'auth/invalid-email') {
        await this.helper.showAlert("El formato del correo no es valido.","Error de validación");
        await loader.dismiss();
      }
    }
  }



}
export { StorageService };

