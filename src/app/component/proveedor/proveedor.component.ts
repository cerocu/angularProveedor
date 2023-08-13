import { Component, OnInit } from '@angular/core';
import { ProveedorServiceService } from 'src/app/services/proveedor-service.service';
import { Proveedor,ProveedorResponseModel,ProveedorModel } from 'src/app/models/proveedorModel';
import { MatCardModule } from '@angular/material/card'; // Importar correctamente MatCardModule
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {
  
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  proveedorsResponse: ProveedorResponseModel;
  proveedors: Proveedor//[] = [ 
     //{ name: 'ee', businessName:'Ciudad A',enabled:'false', direction:'dsdsdsd' }
  
//];
  displayedColumns: string[] = ['name', 'businessName', 'direction', 'enabled','action'];

  constructor(private proveedorService: ProveedorServiceService) { }

  ngOnInit(): void {
    console.log("se entro");
    this.getAllProveedor();
  }
  getAllProveedor(): void {
    this.proveedorService.getAllProveedor().subscribe(response => {
      console.log("pinto");
      console.log(response.data);
      console.log("pinto");
      
     // this.proveedors.push(response.data);
      this.proveedors=response.data;
      console.log("pinto2");
      console.log(this.proveedors);
      console.log("pinto2");
    });
  }


}
