import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-registro',
<<<<<<< HEAD
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  email: string = "";
  contrasena: string = "";
  nombre: string = "";
  apellido: string = "";
  rut: string = "";

  constructor(
    private auth: AngularFireAuth,
    private helper: HelperService,
    private router: Router,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.userView();
  }

  async userView() {
    console.log("USUARIOS STORAGE", await this.storageService.obtenerUsuario());
  }

  async registro() {
    const loader = await this.helper.showLoader("Cargando");
    try {
      const request = await this.auth.createUserWithEmailAndPassword(this.email, this.contrasena);
      const user = [{
        correo: this.email,
        nombre: this.nombre,
        apellido: this.apellido,
        rut: this.rut,
        contrasena: this.contrasena
      }];
=======
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
>>>>>>> 8a04bccfade98ba203b815198442f549e4cccee5
      this.storageService.guardarUsuario(user);

      await this.router.navigateByUrl('login');
      await loader.dismiss();
      await this.helper.showAlert("Usuario registrado correctamente", "Información");
<<<<<<< HEAD
    } catch (error: any) {
      if (error.code == 'auth/invalid-email') {
        await this.helper.showAlert("El formato del correo no es válido.", "Error de validación");
=======

    } catch (error:any) {
      if (error.code == 'auth/invalid-email') {
        await this.helper.showAlert("El formato del correo no es valido.","Error de validación");
>>>>>>> 8a04bccfade98ba203b815198442f549e4cccee5
        await loader.dismiss();
      }
    }
  }
<<<<<<< HEAD
}
=======



}
export { StorageService };

>>>>>>> 8a04bccfade98ba203b815198442f549e4cccee5
