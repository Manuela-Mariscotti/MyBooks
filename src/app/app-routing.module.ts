import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLibroComponent } from './pages/add-libro/add-libro.component';
import { HomeComponent } from './pages/home/home.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { UpdateLibroComponent } from './pages/update-libro/update-libro.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "registro", component: RegistroComponent},
  {path: "perfil", component: PerfilComponent},
  {path: "libros", component : LibrosComponent},
  {path: "addLibro", component: AddLibroComponent},
  {path: "updateLibro", component: UpdateLibroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
