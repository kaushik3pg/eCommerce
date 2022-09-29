import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderModule } from './components/header/header.module';
import { NavbarModule } from './features/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SearchbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    HeaderModule, NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
