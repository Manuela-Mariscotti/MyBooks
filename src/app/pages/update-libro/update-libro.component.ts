import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/shared/libros.service';

@Component({
  selector: 'app-update-libro',
  templateUrl: './update-libro.component.html',
  styleUrls: ['./update-libro.component.css']
})
export class UpdateLibroComponent implements OnInit {

  public cartelLibroEditado : boolean;

  constructor(public librosService : LibrosService) { 
    this.cartelLibroEditado = true;
  }
  editarLibro(id_libro:number,titulo:string,tipoLibro:string,autor:string,precio:number,photo:string){
    let libroEditado = new Libro(id_libro,null,titulo,tipoLibro,autor,precio,photo)
    this.librosService.edit(libroEditado)
    this.cartelLibroEditado = false
  }

  ngOnInit(): void {
  }

}
