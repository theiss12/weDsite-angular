import { Component, Input } from "@angular/core";
import { NgFor, NgClass } from "@angular/common";

@Component({
    standalone: true,
    selector: "gallery",
    templateUrl: "./gallery.component.html",
    styleUrls: ["./gallery.component.scss"],
    imports: [NgFor, NgClass]
})
export class Gallery {
    @Input() imageUrls: string[] = [];
    selectedImageIndex: number = 0;
    isInspectorOpen: boolean = false;

    swapImage(url: string) {
        const newIndex = this.imageUrls.indexOf(url);
        this.selectedImageIndex = newIndex;
    }

    moveImageIndex(amount: number) {
        let newIndex = this.selectedImageIndex + amount;
        const maxIndex = this.imageUrls.length - 1
        if (newIndex > maxIndex) newIndex = 0;
        if (newIndex < 0) newIndex = maxIndex;
        this.selectedImageIndex = newIndex;
    }

    toggleInspector() {
        this.isInspectorOpen = !this.isInspectorOpen;
    }
}