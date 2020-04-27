import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule} from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { SheredComponent } from './shered/shered.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    HeaderComponent,
  
    LoaderComponent,
  
    SheredComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
