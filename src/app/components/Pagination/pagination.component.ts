import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { NgFor, NgClass } from "@angular/common";

@Component({
    standalone: true,
    selector: "pagination",
    templateUrl: "./pagination.component.html",
    styleUrls: ["./pagination.component.scss"],
    imports: [NgFor, NgClass]
})
export class Pagination implements OnInit {
    @Input() numberOfPages: number = 0;
    @Input() activePage: number = -1;
    @Output() pageOutput = new EventEmitter<number>();
    pageNumbers: any[] = [];

    ngOnInit(): void {
        this.pageNumbers = [...Array(this.numberOfPages)].map((element, index) => index);
    }

    emitPageChange(clickEvent: any) {
        const page = parseInt(clickEvent.target.value);
        this.activePage = page;
        this.pageOutput.emit(page);
    }
}