import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './components/addproduct/addproduct.component';

const routes: Routes = [
   {
     path:'addproduct',
     component: AddproductComponent
   }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OmsModuleRoutingModule { }
