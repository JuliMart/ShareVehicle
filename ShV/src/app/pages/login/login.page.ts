import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
<<<<<<< HEAD
import { AngularFireAuth } from '@angular/fire/compat/auth';
=======
>>>>>>> 8a04bccfade98ba203b815198442f549e4cccee5


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string = "";
  contrasena:string = "";

<<<<<<< HEAD
  constructor(private router:Router,
    private helperService:HelperService,
    private auth: AngularFireAuth) { }

  ngOnInit() {
    console.log("Resultado suma metodo desde un servicio:",this.helperService.sumar(10,50));
    
  }

  async login() {
    if (this.email.trim() === "") {
      this.helperService.showAlert("Debe ingresar un email", "Advertencia");
      return;
    }
    if (this.contrasena.trim() === "") {
      this.helperService.showAlert("Debe ingresar una contraseña.", "Advertencia");
      return;
    }

    try {
      const userCredential = await this.auth.signInWithEmailAndPassword(this.email, this.contrasena);
      // Autenticación exitosa, puedes redirigir a la siguiente página
      this.router.navigateByUrl("menu");
    } catch (error) {
      console.error("Error de autenticación:", error);
      this.helperService.showAlert("Credenciales no válidas.", "Error de autenticación");
    }
  }
}
=======
  constructor(private router:Router,private helperService:HelperService) { }

  ngOnInit() {
    console.log("Resultado suma metdo desde un servicio:",this.helperService.sumar(10,50));
    
  }


  login(){
    if (this.email == "") {
      //alert("Debe ingresar un email.");
      this.helperService.showAlert("Debe ingresar un email", "Advertencia");
      return;
    }
    if (this.contrasena == "") {
      alert("Debe ingresar una contraseña.")
      return;
    }
    
    if (this.email == "micorreo" && this.contrasena == "123") {
      //alert("Login correcto.");
      this.router.navigateByUrl("menu");
    }else{
      alert("Crdeneciales no validas.");
    }
    
  }

}
>>>>>>> 8a04bccfade98ba203b815198442f549e4cccee5
