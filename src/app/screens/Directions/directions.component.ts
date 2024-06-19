import { Component } from "@angular/core";
import { Title } from "../../components/Title/title.component";

@Component({
    standalone: true,
    selector: "directions",
    templateUrl: "./directions.component.html",
    styleUrls: ["./directions.component.scss"],
    imports: [Title]
})
export class Directions {

}