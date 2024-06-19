import { Component } from "@angular/core";
import { Gallery } from "../../components/Gallery/gallery.component";
import { Title } from "../..//components/Title/title.component";

@Component({
    standalone: true,
    selector: "fotos",
    templateUrl: "./fotos.component.html",
    styleUrls: ["./fotos.component.scss"],
    imports: [Gallery, Title]
})
export class Fotos {
    favourites: string[] = [
        "assets/images/gallery/g1.jpg",
        "assets/images/gallery/g2.jpg",
        "assets/images/gallery/g3.jpg",
        "assets/images/gallery/g4.jpg",
        "assets/images/gallery/g5.jpg",
        "assets/images/gallery/g6.jpg",
        "assets/images/gallery/g7.jpg"
    ];
}