import { Component, Input } from "@angular/core";
import { NgFor, NgClass} from "@angular/common";
import { Pagination } from "../Pagination/pagination.component";

@Component({
    standalone: true,
    selector: "cover",
    templateUrl: "./cover.component.html",
    styleUrls: ["./cover.component.scss"],
    imports: [NgFor, NgClass, Pagination]
})
export class Cover {
    @Input() imageUrls: string[] = [];
    currentPage: number = 0;
    currentDirection: number = 1;

    activateImage(imageUrl: string) {
        const urlIndex: number = this.imageUrls.indexOf(imageUrl);
        return this.currentPage === urlIndex;
    }

    movePage(direction: number) {
        this.currentDirection = direction;
        let newPage = this.currentPage + direction;
        const maxPage = this.imageUrls.length - 1;
        if (newPage < 0) newPage = maxPage;
        if (newPage > maxPage) newPage = 0;
        this.currentPage = newPage;
    }

    handlePagination(newPage: number) {
        this.currentDirection = 0;
        this.currentPage = newPage;
    }
}