import { Component, OnInit } from '@angular/core';
import{Home} from '../modelos/home';
import {HomeService} from '../servicios/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public FormularioDeOperacion:Home[];
  public campobuscado:string;


  constructor(private servicioHome: HomeService){}

  ngOnInit(){

    this.FormularioDeOperacion=this.servicioHome.MostrarTodos(); 

  }

  Borrar(operacionId:number) {
    
    this.servicioHome.BorrarOperecion(operacionId);
    this.FormularioDeOperacion= this.servicioHome.MostrarTodos();
  }

  verificarEstado(operacionId:number) {
    var libreria:Home;
    libreria = this.servicioHome.Buscar(operacionId);
    if(libreria.tipo){
      alert("Ingreso");
    }
    else{
      alert("Egreso")
    }
  }

    BuscarOperacion(){
      this.FormularioDeOperacion=this.servicioHome.BuscarPorConcepto(this.campobuscado);
      console.log(this.FormularioDeOperacion);
    }

}
