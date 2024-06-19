import { Component } from "@angular/core";
import { Title } from "../../components/Title/title.component";
import { GiftsService } from "../../services/gifts.service";
import { ReceiptService } from "../../services/receipt.service";
import { NgFor } from "@angular/common";
import { Router } from "@angular/router";


@Component({
    selector: "gifts",
    templateUrl: "./gifts.component.html",
    styleUrls: ["./gifts.component.scss"],
    imports: [Title, NgFor],
    standalone: true
})
export class Gifts  {
    constructor(
        private giftsService: GiftsService, 
        public router: Router, 
        private receiptService: ReceiptService
    ) {}

    gifts = this.giftsService.gifts;

    toggleGiftTaken(gift: any) {
        gift.taken = !gift.taken;
    }

    submitGifts() {
        const newMessage = this.giftsService.gifts.every(gift => gift.taken === false) ? 
        "We hope you change your mind 😉" : 
        `Thank you so much for ${this.giftsService.getCommits()} 😍`;
        this.receiptService.setMessage(newMessage);
        this.router.navigateByUrl("/thanks");
    }
}