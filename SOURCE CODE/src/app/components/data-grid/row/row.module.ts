import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RowComponent } from "src/app/components/data-grid/row/row.component";
import {ModalComponent} from "../modal/modal.component";

@NgModule({
    declarations: [RowComponent, ModalComponent],
    exports: [RowComponent, ModalComponent],
    imports: [CommonModule]
})
export class RowModule {}
