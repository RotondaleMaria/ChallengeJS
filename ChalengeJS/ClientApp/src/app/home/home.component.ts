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
  totalEgreso:number;
  totalIngreso:number;
  diferencia:number;



  constructor(private servicioHome: HomeService){

  }

  ngOnInit(){

    this.FormularioDeOperacion=this.servicioHome.MostrarTodos(); 
    this.totalEgreso = this.servicioHome.TotalEgresos();
    this.totalIngreso = this.servicioHome.TotalIngresos();
    this.diferencia= this.servicioHome.Diferencia()
  }


  Borrar(operacionId:number) {
    
    this.servicioHome.BorrarOperecion(operacionId);
    this.FormularioDeOperacion= this.servicioHome.MostrarTodos();
    this.totalEgreso = this.servicioHome.TotalEgresos();
    this.totalIngreso = this.servicioHome.TotalIngresos();
    this.diferencia = this.servicioHome.Diferencia()
  }

    BuscarOperacion(){
      this.FormularioDeOperacion=this.servicioHome.BuscarPorCategoria(this.campobuscado);
      console.log(this.FormularioDeOperacion);
    }

}
