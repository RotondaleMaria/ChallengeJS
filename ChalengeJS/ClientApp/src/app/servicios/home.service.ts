import { Injectable } from '@angular/core';
import { Home } from '../modelos/home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  public FormularioDeOperaciones: Home[]=[

    {id:1, fecha: "05/02/2021", concepto:"Cuenta plazo fijo" , monto:5166, tipo:"Ingreso", categoria: "Inversion"},
    {id:2, fecha: "05/01/2021", concepto:"Venta acciones" , monto: 10520, tipo:"Ingreso", categoria: "Inversion"},
    {id:3, fecha: "05/01/2021", concepto:"Ganancia fondo de inversiones" , monto:5000, tipo:"Ingreso", categoria: "Inversion"},
    {id:4, fecha: "05/01/2021", concepto:"Cuenta a sueldo" , monto:30500, tipo:"Ingreso", categoria: "Haberes"},
    {id:5, fecha: "05/08/2021", concepto:"Seguro auto" , monto:7100, tipo:"Egreso", categoria: "Auto"},
    {id:6, fecha: "05/05/2021", concepto:"Telefono" , monto:2700, tipo:"Egreso", categoria: "Impuestos"},
    {id:7, fecha: "05/05/2021", concepto:"Luz" , monto:1205, tipo:"Egreso", categoria: "Impuestos"},
    {id:8, fecha: "05/05/2021", concepto:"Gas" , monto:1050, tipo:"Egreso", categoria: "Impuestos"},
    {id:9, fecha: "05/07/2021", concepto:"Cable e internet" , monto:3105, tipo:"Egreso", categoria: "Impuestos"},
    {id:10, fecha: "05/10/2021",concepto:"Compra supermercado" , monto:9624, tipo:"Egreso", categoria: "Comida"},
    {id:11, fecha: "05/15/2021",concepto:"Patente auto" , monto:5800, tipo:"Egreso", categoria: "Auto"},
    {id:12, fecha: "05/21/2021",concepto:"Swiss medical" , monto:1165, tipo:"Egreso", categoria: "Salud"},
    {id:13, fecha: "05/21/2021",concepto:"Combustible" , monto:4175, tipo:"Egreso", categoria: "Auto"},
    {id:14, fecha: "05/22/2021",concepto:"Municipal" , monto:3260, tipo:"Egreso", categoria: "Impuestos"},
  ];

  CrearId(){
    return this.FormularioDeOperaciones.length + 1
  } 

  MostrarTodos():Home[]{
  
    return this.FormularioDeOperaciones.slice();
  }

  TotalEgresos():number{

    return this.FormularioDeOperaciones.filter(x=> x.tipo =="Egreso").reduce((a, b) => a + b.monto, 0);
  
  }

  TotalIngresos():number{

    return this.FormularioDeOperaciones.filter(x=> x.tipo =="Ingreso").reduce((a, b) => a + b.monto, 0);
  
  }

  Diferencia():number{
    return this.TotalIngresos() - this.TotalEgresos();
  }
  

  
  BorrarOperecion(opId:number): any {
    
    this.FormularioDeOperaciones.forEach((value,index) =>{
      if (value.id == opId)
        this.FormularioDeOperaciones.splice(index,1)
    });
    return 0;
  }

  Buscar(opId:number):Home{
    opId = + opId;
    return this.FormularioDeOperaciones.find(x=> x.id === opId);
  }

  BuscarPorCategoria(nom:string):Home[]{
    return this.FormularioDeOperaciones.filter(x=> x.categoria.toLowerCase() === nom.toLowerCase());
}


  Crear(home:Home) {
    this.FormularioDeOperaciones.unshift(home);

  }
  Editar(home:Home) {
  console.log("Modificar: " + home.concepto + " " + home.fecha);

  var indice= this.FormularioDeOperaciones.findIndex(x=> x.id === home.id);
  this.FormularioDeOperaciones[indice]=home;
  }

}


