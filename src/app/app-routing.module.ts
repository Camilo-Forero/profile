import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExampleComponent } from './components/example/example.component';

const routes: Routes = 
[ 
  {
    path:'', component:HomeComponent,
    children:
    [
      {path:'home', component:HomeComponent}
    ]
  },
  {
    path:'about', component:AboutComponent
  },
  {
    path:'examples', component:ExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
