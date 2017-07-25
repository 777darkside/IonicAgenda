import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ContactoService } from '../../app/services/contacto.service';
import { ContactosPage } from './contactos';

@Component({
  selector: 'page-contacto-form',
  templateUrl: 'contacto-form.html'
})
export class ContactoFormPage {
  private contacto:any = {
    contacto_nombre: "",
    contacto_apellido: "",
    contacto_direccion: "",
    contacto_telefono: "",
    contacto_correo: "",
    contacto_tipo: 1
  };
  private parametro:string;
  private encabezado:string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toast: ToastController,
    public contactoService: ContactoService
  ) {
    this.parametro = this.navParams.get('parametro');
    if(this.parametro != 'nuevo') {
      this.encabezado = "Detalle Contacto";
      this.contactoService.buscarContacto(this.parametro)
      .subscribe(contacto => this.contacto = contacto);
    } else {
      this.encabezado = "Nuevo Contacto";
    }
  }

  public eliminar(id:any){
    console.log("TRHOUGHT DELETE NIGGA")
    this.contactoService.eliminarContacto(id)
      .subscribe(res => {
        this.toast.create({
          message: res.mensaje,
          duration: 2000
        }).present();
        if(res.estado) {
          this.navCtrl.push(ContactosPage);
        } else {
        this.toast.create({
          message: res.mensaje,
          duration: 2000
        }).present();
      }
    });
  }

  public guardar() {
    if(this.parametro === "nuevo") {
      this.contactoService.nuevoContacto(this.contacto)
      .subscribe(res => {
        this.toast.create({
          message: res.mensaje,
          duration: 2000
        }).present();
        if(res.estado) {
          this.navCtrl.push(ContactosPage);
        } else {
          this.contacto.contacto_nombre = "DSADFSADFASDF";
          this.contacto.contacto_apellido = "";
          this.contacto.contacto_direccion = "";
          this.contacto.contacto_telefono = "";
          this.contacto.contacto_correo = "";
          this.contacto.contacto_tipo = 0;
      }
    });
    } else {
        this.contactoService.editarContacto(this.contacto, this.parametro)
      .subscribe(res => {
        this.toast.create({
          message: res.mensaje,
          duration: 2000
        }).present();
        if(res.estado) {
          this.navCtrl.push(ContactosPage);
        } else {
          this.contacto.contacto_nombre = "";
          this.contacto.contacto_apellido = "";
          this.contacto.contacto_direccion = "";
          this.contacto.contacto_telefono = "";
          this.contacto.contacto_correo = "";
          this.contacto.contacto_tipo = 0;
      }
    });
    }
  }
}
