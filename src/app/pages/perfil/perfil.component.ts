import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public miUsuario : Usuario;
  public cartelUsuarioModificado : boolean;

  constructor() { 
    this.miUsuario = new Usuario(1,"Cecilia","Roth","ceciliaroth@gmail.com","http://ceciliaroth.com","cecilia123")
    this.cartelUsuarioModificado = true;
  }

  public nombreCompleto():string{
    return this.miUsuario.nombreCompleto();
  }

  modificar(nuevoNombre: string, nuevoApellido: string, nuevoEmail: string, nuevoUrl : string){
    console.log("Nombre inicial"+this.miUsuario.nombre);
    if( nuevoNombre !=""){
      this.miUsuario.nombre = nuevoNombre;
    }if(nuevoApellido !=""){
      this.miUsuario.apellido = nuevoApellido;
    }if (nuevoEmail !="") {
      this.miUsuario.email = nuevoEmail;
    }if(nuevoUrl !=""){
      this.miUsuario.url = nuevoUrl;
    }
    this.cartelUsuarioModificado = false;
    console.log("Nombre final"+this.miUsuario.nombre);
    
  }

  ngOnInit(): void {
  }

}
