import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { ToolsComponent } from './Content/tools/tools.component';
import { FotoComponent } from './Content/foto/foto.component';
import { ReviewComponent } from './Content/review/review.component';
import { EducacionComponent } from './Content/educacion/educacion.component';
import { ContactoComponent } from './Content/contacto/contacto.component';
import { CvComponent } from './Content/cv/cv.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';

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
    CvComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
