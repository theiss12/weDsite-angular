import { Component } from "@angular/core";
import { NgFor, NgIf } from "@angular/common";
import { Router } from "@angular/router";
import { Question } from "../../components/Question/question.component";
import { TableComponent } from "../../components/Table/table.component";
import { ReceiptService } from "../../services/receipt.service";

@Component({
    selector: "rsvp",
    templateUrl: "./rsvp.component.html",
    styleUrls: ["./rsvp.component.scss"],
    imports: [NgFor, NgIf, Question, TableComponent],
    standalone: true
})
export class RSVP {

    formData = {
        name: "",
        coming: false,
        companions: 0,
        allergy: "",
    };

    dataProperties = Object.keys(this.formData);

    currentQuestion = 0;

    constructor(public router: Router, private receiptService: ReceiptService) { }

    submitFormData() {
        console.log(this.formData);
        const newMessage = this.formData.coming ? "We are looking forward to seeing you! 😉" : "We are sorry you can't make it 😢";
        this.receiptService.setMessage(newMessage);
        this.router.navigateByUrl("/thanks");
    }

    setCurrentQuestion(newQuestion: number) {
        this.currentQuestion = newQuestion;
    }
}