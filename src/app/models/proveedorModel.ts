export class ProveedorModel {
    name: string;
    businessName: string;
    direction: string;
    enabled: string;
  }
  export class Proveedor {
    name: string;
    businessName: string;
    direction: string;
    enabled: string;
  }
  export class ProveedorResponseModel {
    data: Proveedor;
    code: number;
    status: string;
    page: number;
  }