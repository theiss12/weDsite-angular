import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from "@angular/core";
import { NgSwitch, NgSwitchCase, NgSwitchDefault, NgIf } from "@angular/common";

@Component({
    standalone: true,
    selector: "question",
    templateUrl: "./question.component.html",
    styleUrls: ["./question.component.scss"],
    imports: [NgSwitch, NgSwitchCase, NgSwitchDefault, NgIf]
})
export class Question implements OnInit, OnDestroy {
    @Input() index: number = -1;
    @Input() formData: any = {};
    @Output() indexOutput = new EventEmitter<number>();
    
    dataProperties: string[] = [];
    name: string = "";
    type: string = "";
    answer: string = "";

    saveAnswer(event: any) {
        this.answer = event.target.value;
    }

    setFormData() {
        let answer: any = this.answer;
        switch (this.type) {
            case "number":
                answer = parseInt(answer);
                answer =  isNaN(answer) ? 0 : answer;
                break;
            case "boolean": 
                answer = answer === "No" || answer === "" ? false : true;
        }
        this.formData[this.name] = answer;
    }

    emitIndexChange(indexChange: number) {
        this.setFormData();
        const nexIndex = this.index + indexChange;
        this.indexOutput.emit(nexIndex);
    }

    ngOnInit(): void {
        this.dataProperties = Object.keys(this.formData);
        this.name = this.dataProperties[this.index];
        this.type = typeof this.formData[this.name];
        if (this.type !== "boolean") {
            this.answer = this.formData[this.name];
        }
    }

    ngOnDestroy(): void {
        this.setFormData();
    }
}