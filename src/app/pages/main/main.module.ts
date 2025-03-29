import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from 'src/app/components/login/login.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { MainComponent } from './main.component';
import { HomeComponent } from "../../components/home/home.component";


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainRoutingModule,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent
]
})
export class MainModule { }
