import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { AuthService } from './auth.service';

@Injectable()
export class ContactoService {
  private headers:Headers;
  private url:string;

  constructor(
    private http:Http,
    private auth:AuthService
  ) {
    this.url = "http://localhost:3000/api/v1/contacto";
    let config = {
      'Content-Type': 'application/json',
      'Authorization': this.auth.getToken()
    }
    this.headers = new Headers(config);
  }

  public obtenerContactos() {
    return this.http.get(this.url, { headers: this.headers })
    .map(res => {
      return res.json();
    });
  }

  public buscarContacto(idContacto:any) {
    let uri = `${this.url}/${idContacto}`;
    return this.http.get(uri, { headers: this.headers })
    .map(res => {
      return res.json();
    });
  }

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

  public eliminarContacto(idContacto:any) {
    let uri = `${this.url}/${idContacto}`;
    return this.http.delete(uri, { headers: this.headers })
    .map(res => {
      return res.json();
    });
  }









}
