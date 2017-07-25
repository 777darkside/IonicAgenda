import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { AuthService } from './auth.service';

@Injectable()
export class CitaService {
  private headers:Headers;
  private url:string;
  private url2:string;

  constructor(
    private http:Http,
    private auth:AuthService
  ) {
    this.url = "http://localhost:3000/api/v1/cita";
    this.url2 = "http://localhost:3000/api/v1/contacto";
    let config = {
      'Content-Type': 'application/json',
      'Authorization': this.auth.getToken()
    }
    this.headers = new Headers(config);
  }

  public obtenerCita() {
    return this.http.get(this.url, { headers: this.headers })
    .map(res => {
      console.log("OBTENIENDO LA CITA -> " + res.json());
      return res.json();
    });
  }

  public obtenerContacto() {
    return this.http.get(this.url2, { headers: this.headers })
    .map(res => {
      console.log("OBTENIENDO LOS CONTACTOS ->" + res.json());
      return res.json();
    });
  }

  public buscarCita(idCita:any) {
    let uri = `${this.url}/${idCita}`;
    return this.http.get(uri, { headers: this.headers })
    .map(res => {
      console.log(res.json());
      return res.json();
    });
  }

  public eliminarCita(id:any) {
    return this.http.delete(this.url+"/"+id, {headers: this.headers})
    .map(res => {
      return res.json();
    });
  }

    public editarCita(cita:any) {
    let id = cita.cita_id;
    let data = JSON.stringify(cita);
    return this.http.put(this.url +"/"+ id, data, { headers: this.headers })
    .map(res => {
      return res.json();
    });
  }

    public nuevaCita(cita:any) {
    let data = JSON.stringify(cita);
    return this.http.post(this.url, data, { headers: this.headers })
    .map(res => {
      return res.json();
    });
  }
/*
  public nuevoContacto(contacto:any) {
    let data = JSON.stringify(contacto);
    return this.http.post(this.url, data, { headers: this.headers })
    .map(res => {
      return res.json();
    });
  }

  public editarContacto(contacto:any, idContacto:any) {
    let uri = this.url + '/' +idContacto;
    let data = JSON.stringify(contacto);
    return this.http.put(uri, data, { headers : this.headers })
    .map(res => {
      return res.json();
    });
  }
*/









}
