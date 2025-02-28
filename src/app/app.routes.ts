import { Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { CartComponent } from './features/pages/cart/cart.component';
import { CategoriesComponent } from './features/pages/categories/categories.component';
import { ProductsComponent } from './features/pages/products/products.component';
import { LoginComponent } from './features/authentication/login/login.component';
import { RegistrationComponent } from './features/authentication/registration/registration.component';
import { NotFoundComponent } from './features/layout/not-found/not-found.component';

import { routeGuard } from './core/guards/routeGuard/route.guard';
import { ProductDetailsComponent } from './features/layout/product-details/product-details.component';
import { AllOrdersComponent } from './features/layout/all-orders/all-orders.component';
import { ShippingAddressComponent } from './core/services/eCommerceAPI/shipping-address/shipping-address.component';

export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:"home", component:HomeComponent,title:"home",canActivate:[routeGuard]},
  {path:"cart", component:CartComponent,title:"cart",canActivate:[routeGuard]},
  {path:"brands", loadComponent:() => import('./features/pages/brands/brands.component').then(_class=>_class.BrandsComponent),title:"brands",canActivate:[routeGuard]},
  {path:"categories", component:CategoriesComponent,title:"categories",canActivate:[routeGuard]},
  {path:"products", component:ProductsComponent,title:"products",canActivate:[routeGuard]},
  {path:"allorders", component:AllOrdersComponent,title:"all-orders",canActivate:[routeGuard]},
  {path:"shipping-address/:cart_Id", component:ShippingAddressComponent,title:"shipping_Address",canActivate:[routeGuard]},
  {path:"product-details/:id", component:ProductDetailsComponent,title:"product-details =",canActivate:[routeGuard]},

  {path:"login", component:LoginComponent,title:"login"},
  {path:"registration", component:RegistrationComponent,title:"registration"},
  {path:"**", component:NotFoundComponent,title:"not-found"},
];
