import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Title } from "../Title/title.component";
import { ReceiptService } from "../../services/receipt.service";

@Component({
    selector: "receipt",
    templateUrl: "./receipt.component.html",
    styleUrls: ["./receipt.component.scss"],
    standalone: true,
    imports: [Title]
})
export class Receipt {
    message: string = "";

    constructor(private router: Router, private receiptService: ReceiptService) {
        let newMessage = this.receiptService.getMessage();
        newMessage = newMessage === "" ? "Just for existing 😍" : newMessage;
        this.message = newMessage;
    }

    goToHomeScreen() {
        this.router.navigateByUrl("/home");
    }
}