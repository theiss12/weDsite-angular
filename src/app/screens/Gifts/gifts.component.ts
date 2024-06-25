import { Component } from "@angular/core";
import { Title } from "../../components/Title/title.component";
import { GiftsService } from "../../services/gifts.service";
import { ReceiptService } from "../../services/receipt.service";
import { NgFor, NgClass } from "@angular/common";
import { Router } from "@angular/router";

@Component({
    selector: "gifts",
    templateUrl: "./gifts.component.html",
    styleUrls: ["./gifts.component.scss"],
    imports: [Title, NgFor, NgClass],
    standalone: true
})
export class Gifts {
    constructor(
        private giftsService: GiftsService,
        public router: Router,
        private receiptService: ReceiptService
    ) { }

    gifts = this.giftsService.gifts;
    customGift: string = "";
    currentBackgroundIndex: number = 0;

    toggleGiftTaken(gift: any) {
        gift.taken = !gift.taken;
    }

    saveCustomGift(event: any) {
        this.customGift = event.target.value;
    }

    submitGifts() {
        let commits = this.giftsService.getCommits();
        commits = commits === "" ? this.customGift : commits + `, ${this.customGift}`;
        const newMessage = commits === "" ?
            "We hope you change your mind 😉" :
            `Thank you so much for ${commits} 😍`;
        this.receiptService.setMessage(newMessage);
        this.router.navigateByUrl("/thanks");
    }
}