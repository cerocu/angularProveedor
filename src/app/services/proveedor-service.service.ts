import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedor,ProveedorModel,ProveedorResponseModel } from 'src/app/models/proveedorModel';
@Injectable({
  providedIn: 'root'
})
export class ProveedorServiceService {
  public apiUrl: string; // Replace with your API endpoint
  constructor(private http: HttpClient) { 
     this.apiUrl = 'http://localhost:8080/proveedor/'; // Replace with your API endpoint
  }


  getAllProveedor(): Observable<ProveedorResponseModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'page': '1',
        'pageSize': '2' // Ejemplo de encabezado personalizado
      })
    };
    return this.http.get<ProveedorResponseModel>(this.apiUrl,httpOptions);
  }
}
