import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  }, 
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'product',
    component: ProductsComponent
  },
  {
    path: 'product/edit',
    component: FormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
