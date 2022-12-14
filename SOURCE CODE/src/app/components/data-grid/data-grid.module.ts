import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DataGridComponent } from "./data-grid.component";
import { GridHeaderModule } from "./header/header.module";
import { RowModule } from "./row/row.module";

@NgModule({
    declarations: [DataGridComponent],
    exports: [DataGridComponent],
    imports: [ GridHeaderModule, RowModule, CommonModule ]

})
export class DataGridModule {}
