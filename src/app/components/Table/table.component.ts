import { Component, Input } from "@angular/core";
import { NgFor } from "@angular/common";
@Component({
    selector: "table-component",
    templateUrl: "./table.component.html",
    styleUrls: ["./table.component.scss"],
    standalone: true,
    imports: [NgFor]
})
export class TableComponent {
    @Input() head: string[] = [];
    @Input() body: string[][] = [[]];
}