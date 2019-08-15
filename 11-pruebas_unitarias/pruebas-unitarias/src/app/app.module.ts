import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MiComponenteComponent } from './mi-componente/mi-componente.component';

@NgModule({
  declarations: [AppComponent, MiComponenteComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
