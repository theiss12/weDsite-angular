import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class ReceiptService {
    private message: string = "";

    setMessage(newMessage: string): void {
        this.message = newMessage;
    }

    getMessage(): string {
        return this.message;
    }
}