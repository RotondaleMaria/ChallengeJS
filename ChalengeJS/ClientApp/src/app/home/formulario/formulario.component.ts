import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';
import {HomeService} from '../../servicios/home.service';
import {Home, concepto} from '../../modelos/home';




@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formOperacion:FormGroup;
  operacionId:number;
  conceptos:concepto[];
  titulo:string;


  constructor(private fb:FormBuilder,
              private HomeSrv: HomeService,
              private activatedRoute:ActivatedRoute,
              private router:Router,) { }

  ngOnInit() {
    this.formOperacion= this.fb.group({
      concepto:'',
      monto:'',
      fecha:'',
      tipo:'',
      categoria:'',
  
    });

    this.conceptos=[
      {id:1, descripcion: "ingreso"},
      {id:2, descripcion: "egreso"}
    ];
    this.activatedRoute.params.subscribe(
      params => {
        this.operacionId= params['id'];
        console.log("Libreria Id: " + this.operacionId);
        if(isNaN(this.operacionId)){
          //no es numerico
          this.titulo="Ingresar nueva operacion";
          return;
        }
        else{
          //es numerico
          var home = this.HomeSrv.Buscar(this.operacionId);
          this.titulo="Modificar los datos de la operacion: " + home.concepto + "" + home.fecha;
          //llenar el campo formulario
          this.formOperacion.patchValue({
            concepto:home.concepto,
            monto:home.monto,
            fecha:home.fecha,
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
