import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';
import {HomeService} from '../../servicios/home.service';
import {Home, tipo, categoria} from '../../modelos/home';
import { FetchDataComponent } from 'src/app/fetch-data/fetch-data.component';





@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formOperacion:FormGroup;
  operacionId:number;
  tipos:tipo[];
  titulo:string;
  categorias:categoria[];



  constructor(private fb:FormBuilder,
              private HomeSrv: HomeService,
              private activatedRoute:ActivatedRoute,
              private router:Router,) { }

  ngOnInit() {

    this.formOperacion= this.fb.group({
      fecha:'',
      concepto:'',
      monto:'',
      tipo:'',
      categoria:'',
  
    });




    this.tipos=[
      {id:1, descripcion: "Ingreso"},
      {id:2, descripcion: "Egreso"}
    ];

    this.categorias=[
      {id:1, descripcion:"Inversion"},
      {id:2, descripcion:"Haberes"},
      {id:3, descripcion:"Gastos"},
      {id:4, descripcion:"Comida"},
      {id:5, descripcion:"Auto"},
      {id:6, descripcion:"Impuestos"},
      {id:7, descripcion:"Otros"},
      {id:8, descripcion:"Salud"}
    ];

    this.activatedRoute.params.subscribe(
      params => {
        this.operacionId= params['id'];
        console.log("Operacion Id: " + this.operacionId);
        if(isNaN(this.operacionId)){
          //no es numerico
          this.titulo="Ingresar nueva operacion";
          return;
        }
        else{
          //es numerico
          var home = this.HomeSrv.Buscar(this.operacionId);
          this.titulo="Modificar los datos de la operacion:" + " " +home.concepto + " " + home.fecha;
          //llenar el campo formulario
          this.formOperacion.patchValue({
            fecha:home.fecha,
            concepto:home.concepto,
            monto:home.monto,
            tipo:home.tipo,
            categoria:home.categoria,
          });
        }
      }
    );
  }

  GuardarFormulario() {
    
    let home: Home=Object.assign({}, this.formOperacion.value);
    home.id= +this.operacionId;
    // if (isNaN(this.libreriaId)){

      if(home.id>0){
        //editar
        this.HomeSrv.Editar(home);
      }
      else{
        //crear
        home.id = this.HomeSrv.CrearId()
        this.HomeSrv.Crear(home);
      }
      this.router.navigate(["/home"])
    }


}
