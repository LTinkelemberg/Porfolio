import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolsComponent } from './tools/tools.component';
import { FotoComponent } from './foto/foto.component';
import { ReviewComponent } from './review/review.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CvComponent } from './cv/cv.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ToolsComponent,
    FotoComponent,
    ReviewComponent,
    EducacionComponent,
    ContactoComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
