import { Component } from "@angular/core";
import { GiftsService } from "../../services/gifts.service";
import { NgFor, NgIf } from "@angular/common";

@Component({
    selector: "thank-you",
    templateUrl: "./thank-you.component.html",
    styleUrls: ["./thank-you.component.scss"],
    imports: [NgFor, NgIf],
    standalone: true
})
export class ThankYou {
    giftedItems: any[] = [];
    noGifts = true;

    constructor(public giftService: GiftsService) {
        this.giftedItems = this.giftService.gifts.filter(gift => gift.taken === true);
        this.noGifts = this.giftedItems.length === 0;
    }

    isLastItem(gift: any): boolean {
        const index = this.giftedItems.findIndex(currentGift => currentGift.id === gift.id);
        const maxIndex = this.giftedItems.length - 1;
        return index === maxIndex;
    }
}