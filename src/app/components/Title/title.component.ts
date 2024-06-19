import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    selector: "twiggy-title",
    templateUrl: "./title.component.html",
    styleUrls: ["./title.component.scss"]
})
export class Title {
    @Input() title: string = "unset"
}