import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/shared/libros.service';


@Component({
  selector: 'app-add-libro',
  templateUrl: './add-libro.component.html',
  styleUrls: ['./add-libro.component.css']
})
export class AddLibroComponent implements OnInit {

  public cartelLibroPublicado : boolean;

  constructor(public librosService : LibrosService) { 
    this.cartelLibroPublicado = true;
  }

  nuevoLibro(id_libro:number,titulo:string,tipoLibro:string,autor:string,precio:number,photo:string){
    let libroNuevo = new Libro(id_libro,null,titulo,tipoLibro,autor,precio,photo)
    this.librosService.add(libroNuevo)
    this.cartelLibroPublicado = false
  }

  ngOnInit(): void {
  }

}
