import { Component, Input, OnInit } from "@angular/core";
import { NgFor } from "@angular/common";

@Component({
    selector: "tiles",
    templateUrl: "./tiles.component.html",
    styleUrls: ["./tiles.component.scss"],
    imports: [NgFor],
    standalone: true
})
export class Tiles implements OnInit{
    @Input() inputImageUrls:string[]= [];
    renderImageUrls: string[][] = [];

    ngOnInit(): void {
        const threes = [];
        for (let i = 0; i < this.inputImageUrls.length; i += 3) {
            threes.push(this.inputImageUrls.slice(i, i + 3));
        }
        this.renderImageUrls = threes;
    }

    // getStyleAttributeValue(url: string) {
    //     return `background-image: url(${url});`;
    // }
}