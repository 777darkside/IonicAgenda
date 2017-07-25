import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TareaService } from '../../app/services/tarea.service';
import { TareaFormPage } from './tarea-form';

@Component({
  selector: 'page-tareas',
  templateUrl: 'tareas.html'
})
export class TareasPage {
  private tarea:any[] = [];

  constructor(
    public navCtrl: NavController,
    public tareaService: TareaService
  ) {
    this.inicializar();
  }

  private inicializar() {
        console.log("INTENTANDO INIZIALIXR")
    this.tareaService.obtenerTareas()
    .subscribe(tarea => this.tarea = tarea);
  }

  public verForm(parametro) {
    this.navCtrl.push(TareaFormPage, {parametro});
  }

}
