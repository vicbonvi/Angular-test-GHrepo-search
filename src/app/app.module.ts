import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importamos el HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';

@NgModule({
  declarations: [AppComponent, RepoDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Agregamos el HttpClientModule a los imports
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
