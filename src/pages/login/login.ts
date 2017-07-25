import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AuthService } from '../../app/services/auth.service';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private usuario:any = {
    nick:"",
    contrasena: ""
  }
  constructor(
    public navCtrl: NavController,
    public toast: ToastController,
    public auth: AuthService
  ) {
  }

  public iniciarSesion() {
    this.auth.autenticar(this.usuario)
    .subscribe(res => {

      this.toast.create({
        message: res.mensaje,
        duration: 2000
      }).present();

      if(res.estado) {
        setTimeout(() => {
          this.navCtrl.setRoot(TabsPage);
        }, 3000);
      }

    });
  }
}
