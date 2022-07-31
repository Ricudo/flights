import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "src/app/app.component";
import { DataGridModule } from "src/app/components/data-grid/data-grid.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
    declarations: [AppComponent],
    imports: [
      BrowserModule,
      DataGridModule,
      HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
