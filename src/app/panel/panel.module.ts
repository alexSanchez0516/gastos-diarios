import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CreateSpentComponent } from './pages/create-spent/create-spent.component';
import { CreateEntranceComponent } from './pages/create-entrance/create-entrance.component';
import { CreateCategoryComponent } from './pages/create-category/create-category.component';
import { CategorysComponent } from './pages/categorys/categorys.component';
import { SpentsComponent } from './pages/spents/spents.component';
import { EntrancesComponent } from './pages/entrances/entrances.component';
import { CategoryComponent } from './pages/category/category.component';
import { SpentComponent } from './pages/spent/spent.component';
import { EntranceComponent } from './pages/entrance/entrance.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { MainComponent } from './pages/main/main.component';
import { ConfigUserComponent } from './pages/config-user/config-user.component';
import {MaterialModule} from "../material/material.module";
import {SharedModule} from "../shared/shared.module";
import {NgChartsModule} from "ng2-charts";
import { MenuMainComponent } from './components/menu-main/menu-main.component';
import { MovementsComponent } from './pages/movements/movements.component';


@NgModule({
  declarations: [
    HomeComponent,
    CreateSpentComponent,
    CreateEntranceComponent,
    CreateCategoryComponent,
    CategorysComponent,
    SpentsComponent,
    EntrancesComponent,
    CategoryComponent,
    SpentComponent,
    EntranceComponent,
    DashboardComponent,
    BarChartComponent,
    DoughnutChartComponent,
    MainComponent,
    ConfigUserComponent,
    MenuMainComponent,
    MovementsComponent,
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    MaterialModule,
    SharedModule,
    NgChartsModule
  ]
})
export class PanelModule { }
