import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { TareaService } from '../../app/services/tarea.service';
import { TareasPage } from './tareas';

@Component({
  selector: 'page-tarea-form',
  templateUrl: 'tarea-form.html'
})
export class TareaFormPage {
  private tarea:any = {
    tarea_descripcion: "",
    tarea_fecha: "",
    tarea_inicio: "",
    tarea_fin: "",
    tarea_estado: 3
  };
  private parametro:string;
  private encabezado:string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toast: ToastController,
    public tareaService: TareaService
  ) {
    this.parametro = this.navParams.get('parametro');

    if(this.parametro != 'nuevo') {
      this.encabezado = "Detalle Tarea";
      this.tareaService.buscarTarea(this.parametro)
      .subscribe(tarea => this.tarea = tarea);
          console.log(this.tarea);
    } else {
      this.encabezado = "Nueva Tarea";
    }
  }

  public eliminar(id:any){
    console.log("TRHOUGHT DELETE NIGGA")
    this.tareaService.eliminarTarea(id)
      .subscribe(res => {
        this.toast.create({
          message: res.mensaje,
          duration: 2000
        }).present();
        if(res.estado) {
          this.navCtrl.push(TareasPage);
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
        console.log(this.tarea)
      this.tareaService.nuevaTarea(this.tarea)
      .subscribe(res => {
        this.toast.create({
          message: res.mensaje,
          duration: 2000
        }).present();
        if(res.estado) {
          this.navCtrl.push(TareasPage);
        } else {
          this.tarea.tarea_descripcion = "";
          this.tarea.tarea_fecha = "";
          this.tarea.tarea_inicio = "";
          this.tarea.tarea_fin = "";
          this.tarea.tarea_estado = 3;
      }
    });
    } else {
        this.tareaService.editarTarea(this.tarea, this.parametro)
      .subscribe(res => {
        this.toast.create({
          message: res.mensaje,
          duration: 2000
        }).present();
        if(res.estado) {
          this.navCtrl.push(TareasPage);
        } else {
          this.tarea.tarea_descripcion = "";
          this.tarea.tarea_fecha = "";
          this.tarea.tarea_inicio = "";
          this.tarea.tarea_fin = "";
          this.tarea.tarea_estado = 3;
      }
    });
    }
  }
}