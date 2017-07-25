import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ContactoService } from '../../app/services/contacto.service';
import { CitaService } from '../../app/services/citas.service';
import { CitasPage } from './citas';


@Component({
  selector: 'page-citas-form',
  templateUrl: 'citas-form.html'
})
export class CitasFormPage {
  private citas:any = {
    cita_asunto: "",
    cita_fecha: "",
    cita_lugar: "",
    cita_usuario: 0,
    contacto_id: 0
  };
  private contactos:any[] = [];
  private parametro:string;
  private encabezado:string;

  private inicializar() {
    this.contactoService.obtenerContactos()
    .subscribe(contactos => this.contactos = contactos);
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toast: ToastController,
    public contactoService: ContactoService,
    public citaService: CitaService
  ) {
    this.parametro = this.navParams.get('parametro');
    if(this.parametro != 'nuevo') {
      this.encabezado = "Detalle de Cita";
      this.inicializar();
      this.citaService.buscarCita(this.parametro)
      .subscribe(cita => this.citas = cita);
    } else {
      this.encabezado = "Nueva Cita";
      this.inicializar();
    }
  }

  public guardar() {
            console.log("THAS WHAT IM FUCKIN SENDIN -> " + this.citas)
    this.citaService.nuevaCita(this.citas)
    .subscribe(res => {
      this.toast.create({
        message: res.mensaje,
        duration: 2000
      }).present();
      if(res.estado) {
        this.navCtrl.push(CitasPage);
      } else {
        this.citas.cita_asunto = "";
        this.citas.cita_fecha = "";
        this.citas.cita_lugar = "";
        this.citas.contacto_id = 0;
      }
    });
  }

  public editar() {
      console.log("THAS WHAT IM FUCKIN SENDIN -> " + this.citas)
    this.citaService.editarCita(this.citas)
    .subscribe(res => {
      this.toast.create({
        message: res.mensaje,
        duration: 2000
      }).present();
      if(res.estado) {
        this.navCtrl.push(CitasPage);
      } else {
        this.citas.cita_asunto = "";
        this.citas.cita_fecha = "";
        this.citas.cita_lugar = "";
        this.citas.contacto_id = 0;
      }
    });
  }

  public eliminar() {
    this.citaService.eliminarCita(this.citas.cita_id)
    .subscribe(res => {
      this.toast.create({
        message:res.mensaje,
        duration: 2000
      }).present();
      if(res.estado) {
        this.navCtrl.push(CitasPage);
      }
    });

  }

}
