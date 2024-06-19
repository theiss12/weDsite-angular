import { Component } from "@angular/core";
import { NgFor, NgClass } from "@angular/common";
import { RouterLink, RouterModule, Router } from "@angular/router";

@Component({
    standalone: true,
    selector: "navigation",
    templateUrl: "./navigation.component.html",
    styleUrls: ["./navigation.component.scss"],
    imports: [NgFor, NgClass, RouterLink, RouterModule]
})
export class Navigation {
    navigationItems = [
        {label: "Home", endpoint: "/home"},
        {label: "Photos", endpoint: "/fotos"},
        {label: "Schedule", endpoint: "/schedule"},
        {label: "Accommodation", endpoint: "/accomodation"}, // directions too!!!
        {label: "Wedding Gifts", endpoint: "/gifts"},
        {label: "RSVP", endpoint: "/rsvp"},
    ]

    constructor(public router: Router) {}

    closed: boolean = true;

    toggleClosed() {
        this.closed = !this.closed;
    }
}