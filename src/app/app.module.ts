import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';
import { StoresComponent } from './stores/stores.component';
import { CareersComponent } from './careers/careers.component';
import { StorebycityComponent } from './storebycity/storebycity.component';
import { JobsComponent } from './jobs/jobs.component';
import { NewproductsComponent } from './newproducts/newproducts.component';
import { PromotionComponent } from './promotion/promotion.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { TestComponent } from './test/test.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'categories/:cat', component: CategoriesComponent},
  {path: 'products/:id', component: ProductsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'careers', component: CareersComponent},
  {path: 'stores', component: StoresComponent},
  {path: 'stores/:loc', component: StorebycityComponent},
  {path: 'careers/:id', component: JobsComponent},
  {path: 'newproducts', component: NewproductsComponent},
  {path: 'promotion', component: PromotionComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'map/:id', component: MapComponent},
  {path: 'test', component: TestComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoriesComponent,
    AboutComponent,
    StoresComponent,
    CareersComponent,
    StorebycityComponent,
    JobsComponent,
    NewproductsComponent,
    PromotionComponent,
    CheckoutComponent,
    HomeComponent,
    MapComponent,
    TestComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
