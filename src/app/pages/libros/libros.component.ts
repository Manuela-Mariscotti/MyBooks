import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/shared/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public libros : Libro [];

  constructor(public librosService : LibrosService) {
    // this.libros = [
    //   new Libro(13569,556,"La conjura de los necios","tapa blanda","John Kennedy Toole",15.99,`../../../assets/la-conjura-de-los-necios.jpg`),
    //   new Libro(18769,334,"Los renglones torcidos de dios","tapa blanda","Torcuato Luca De Tena",8.95,`../../../assets/los-renglones-torcidos-de-dios.jpg`),
    //   new Libro(159693,604,"Cien años de soledad","tapa dura","Gabriel García Márquez",20.99,`../../../assets/cien-años-de-soledad.jpg`),
    //   new Libro(40699,896,"La casa de los espiritus","tapa dura","Isabel Allende",30.99,`../../../assets/la-casa-de-los-espiritus.jpg`)
    // ]
     
  }

  // insertarLibro(nuevoTitulo : string, nuevoAutor : string, nuevoTipoLibro : string , nuevoPrecio : number , nuevoPhoto : string, nuevoId_libro : number){
  //   let nuevoLibro = new Libro (nuevoId_libro,null,nuevoTitulo,nuevoTipoLibro,nuevoAutor,nuevoPrecio,nuevoPhoto)
  //   this.libros.push(nuevoLibro)
  // }  

  buscarUnLibro(id_libro:number){
    let libroEncontrado = this.librosService.getOne(id_libro)
    console.log(libroEncontrado);
    this.libros = [libroEncontrado]

  }
  
  eliminarUnLibro(id_libro:number){
    this.librosService.delete(id_libro)
    
  }

  ngOnInit(): void {

    this.libros = this.librosService.getAll()

  }

}
 