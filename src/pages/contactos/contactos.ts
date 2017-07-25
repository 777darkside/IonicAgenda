import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactoService } from '../../app/services/contacto.service';
import { ContactoFormPage } from './contacto-form';

@Component({
  selector: 'page-contactos',
  templateUrl: 'contactos.html'
})
export class ContactosPage {
  private contactos:any[] = [];

  constructor(
    public navCtrl: NavController,
    public contactoService: ContactoService
  ) {
    this.inicializar();
  }

  private inicializar() {
    this.contactoService.obtenerContactos()
    .subscribe(contactos => this.contactos = contactos);
  }

  public verForm(parametro) {
    this.navCtrl.push(ContactoFormPage, {parametro});
  }

}
