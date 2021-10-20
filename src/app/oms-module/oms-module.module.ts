import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OmsModuleRoutingModule } from './oms-module-routing.module';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ManageproductComponent } from './components/manageproduct/manageproduct.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { ProductService } from './service/product.service';


@NgModule({
  declarations: [
    AddproductComponent,
    ManageproductComponent
  ],
  imports: [
    CommonModule,
    OmsModuleRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ProductService]
})
export class OmsModuleModule { }
