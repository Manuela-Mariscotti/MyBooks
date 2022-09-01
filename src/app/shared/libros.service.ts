import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';


@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private libros: Libro[];

  constructor() {
    this.libros = [
      new Libro(13569,556,"La conjura de los necios","tapa blanda","John Kennedy Toole",15.99,`../../../assets/la-conjura-de-los-necios.jpg`),
      new Libro(18769,334,"Los renglones torcidos de dios","tapa blanda","Torcuato Luca De Tena",8.95,`../../../assets/los-renglones-torcidos-de-dios.jpg`),
      new Libro(159693,604,"Cien años de soledad","tapa dura","Gabriel García Márquez",20.99,`../../../assets/cien-años-de-soledad.jpg`),
      new Libro(40699,896,"La casa de los espiritus","tapa dura","Isabel Allende",30.99,`../../../assets/la-casa-de-los-espiritus.jpg`)
    ]

   }

  public getAll(): Libro[]{
    return this.libros;
  }

  public getOne(id_libro: number):Libro{
    let libroEncontrado;
    let currentId_libro;
    for (let i = 0; i < this.libros.length; i++) {
      currentId_libro =  this.libros[i].id_libro;
      if (currentId_libro == id_libro) {
        libroEncontrado = this.libros[i];
      }
    }
    return libroEncontrado;
  }

  public add(libro:Libro):void{
    this.libros.push(libro);
  }

  public edit(libro:Libro):boolean{
    let libroEditado = libro;
    let id_libro= libroEditado.id_libro;
    let resultado;
    for (let i = 0; i < this.libros.length; i++) {
      let libroActual = this.libros[i]
      if (id_libro == libroActual.id_libro) {
        libroActual.titulo = libroEditado.titulo;
        libroActual.tipoLibro = libroEditado.tipoLibro;
        libroActual.autor = libroEditado.autor;
        libroActual.precio = libroEditado.precio;
        libroActual.photo = libroEditado.photo;
        resultado = true;
      }
    }
    return resultado;
  }

  public delete(id_libro: number):boolean{
    
    let current_Id_libro;
    let resultado;
    for (let i = 0; i < this.libros.length; i++) {
      current_Id_libro =  this.libros[i].id_libro;
      if (current_Id_libro == id_libro) {
        
        this.libros.splice(i,1)
        resultado = true
      }
    }
    return resultado;
  }
}

// - getAll(): Libro[]
// - getOne(id_libro: number): Libro
// - add(libro: Libro): void
// - edit(libro: Libro): boolean
// - delete(id_libro: number): boolean