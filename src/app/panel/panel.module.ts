import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelRoutingModule } from './panel-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CreateSpentComponent } from './pages/create-spent/create-spent.component';
import { CreateEntranceComponent } from './pages/create-entrance/create-entrance.component';
import { SpentsComponent } from './pages/spents/spents.component';
import { EntrancesComponent } from './pages/entrances/entrances.component';
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
import {ReactiveFormsModule} from "@angular/forms";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import { AmountFormComponent } from './components/amount-form/amount-form.component';
import { RemindersComponent } from './pages/reminders/reminders.component';
import {environment} from "../../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";

@NgModule({
  declarations: [
    HomeComponent,
    CreateSpentComponent,
    CreateEntranceComponent,
    SpentsComponent,
    EntrancesComponent,
    SpentComponent,
    EntranceComponent,
    DashboardComponent,
    BarChartComponent,
    DoughnutChartComponent,
    MainComponent,
    ConfigUserComponent,
    MenuMainComponent,
    MovementsComponent,
    AmountFormComponent,
    RemindersComponent,
  ],
    imports: [
        CommonModule,
        PanelRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
        SweetAlert2Module.forRoot({fireOnInit: true}),
        SharedModule,
        NgChartsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireStorageModule
    ]
})
export class PanelModule { }


