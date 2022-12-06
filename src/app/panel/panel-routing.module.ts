import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {MainComponent} from "./pages/main/main.component";
import {SpentsComponent} from "./pages/spents/spents.component";
import {EntrancesComponent} from "./pages/entrances/entrances.component";
import {CreateSpentComponent} from "./pages/create-spent/create-spent.component";
import {CreateEntranceComponent} from "./pages/create-entrance/create-entrance.component";
import {CategorysComponent} from "./pages/categorys/categorys.component";
import {CreateCategoryComponent} from "./pages/create-category/create-category.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {ConfigUserComponent} from "./pages/config-user/config-user.component";
import {ErrorPageComponent} from "../shared/error-page/error-page.component";
import {CategoryComponent} from "./pages/category/category.component";
import {EntranceComponent} from "./pages/entrance/entrance.component";
import {SpentComponent} from "./pages/spent/spent.component";
import {MovementsComponent} from "./pages/movements/movements.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'inicio',
        component: MainComponent
      },
      {
        path: 'gastos',
        component: SpentsComponent
      },
      {
        path: 'ingresos',
        component: EntrancesComponent
      },
      {
        path: 'categorias',
        component: CategorysComponent
      },
      {
        path: 'movimientos',
        component: MovementsComponent
      },
      {
        path: 'crear-gasto',
        component: CreateSpentComponent
      },
      {
        path: 'crear-ingreso',
        component: CreateEntranceComponent
      },
      {
        path: 'crear-categoria',
        component: CreateCategoryComponent
      },
      {
        path: 'gasto/:id',
        component: SpentComponent
      },
      {
        path: 'ingreso/:id',
        component: EntranceComponent
      },
      {
        path: 'categoria/:id',
        component: CategoryComponent
      },
      {
        path: 'editar-gasto/:id',
        component: CreateSpentComponent
      },
      {
        path: 'editar-ingreso/:id',
        component: CreateEntranceComponent
      },
      {
        path: 'editar-categoria/:id',
        component: CreateCategoryComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'opciones',
        component: ConfigUserComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      },
      {
        path: '404',
        component: ErrorPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }