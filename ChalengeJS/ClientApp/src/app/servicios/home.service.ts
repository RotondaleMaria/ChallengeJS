import { Injectable } from '@angular/core';
import { Home } from '../modelos/home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  public FormularioDeOperaciones: Home[]=[

      {id: 1, concepto: " Frutas y verduras ", monto: 165.23, fecha: "01/03/2021", tipo: "ingreso", categoria: "comida"},
      {id: 2, concepto: "Luz", monto: 1526 , fecha: "01/03/2021", tipo: "egreso" , categoria:"impuestos"},
      {id: 3, concepto: " Gas ", monto: 1050.36 , fecha: "12/05/2021", tipo: "ingreso", categoria: "ventas"},
    
  ];

  CrearId(){
    return this.FormularioDeOperaciones.length + 1
  } 

  MostrarTodos():Home[]{
  
    return this.FormularioDeOperaciones.slice();
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

  BuscarPorConcepto(nom:string):Home[]{
    return this.FormularioDeOperaciones.filter(x=> x.concepto.toLowerCase() === nom.toLowerCase());
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


