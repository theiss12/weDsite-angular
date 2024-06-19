import { Component } from "@angular/core";
import { Title } from "../../components/Title/title.component"
import { NgFor } from "@angular/common";

@Component({
    standalone: true,
    selector: "schedule",
    templateUrl: "./schedule.component.html",
    styleUrls: ["./schedule.component.scss"],
    imports: [Title, NgFor]
})
export class Schedule {
    program: any[] = [
        {time: "16:00", label: "CEREMONY"},
        {time: "18:30", label: "DINNER"},
        {time: "20:00", label: "WEDDING CAKE"},
        {time: "23:30", label: "DANCE IN RED DRESS"},
    ]
}