import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CitaService } from '../../app/services/citas.service';
import { CitasFormPage } from './citas-form';

@Component({
  selector: 'page-citas',
  templateUrl: 'citas.html'
})
export class CitasPage {
  private citas:any[] = [];

  constructor(
    public navCtrl: NavController,
    public citaService: CitaService
  ) {
    this.inicializar();
  }

  private inicializar() {
    console.log("INIZIALIZANDOOOO >:V")
    this.citaService.obtenerCita()
    .subscribe(c => this.citas = c);
  }

  public verForm(parametro) {
    this.navCtrl.push(CitasFormPage, {parametro});
  }

}
