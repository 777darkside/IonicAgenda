import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactoFormPage } from '../pages/contactos/contacto-form';
import { TareaFormPage } from '../pages/tareas/tarea-form';
import { CitasFormPage } from '../pages/citas/citas-form';
import { ContactosPage } from '../pages/contactos/contactos';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { TareasPage } from '../pages/tareas/tareas';
import { CitasPage } from '../pages/citas/citas';


import { AuthService } from './services/auth.service';
import { ContactoService } from './services/contacto.service';
import { TareaService } from './services/tarea.service';
import { CitaService } from './services/citas.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ContactosPage,
    ContactoFormPage,
    TareaFormPage,
    CitasFormPage,
    HomePage,
    TabsPage,
    LoginPage,
    TareasPage,
    CitasPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactosPage,
    HomePage,
    ContactoFormPage,
    TareaFormPage,
    CitasFormPage,
    TabsPage,
    LoginPage,
    TareasPage,
    CitasPage
  ],
  providers: [
    StatusBar,
    AuthService,
    ContactoService,
    TareaService,
    CitaService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
