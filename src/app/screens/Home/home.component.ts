import { Component, OnInit } from "@angular/core";
import { Cover } from "../../components/Cover/cover.component";
import { CommonModule } from "@angular/common";

@Component({
    standalone: true,
    selector: "home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
    imports: [Cover, CommonModule],
})
export class Home implements OnInit {
    
    coverPages: string[] = [
        "assets/images/invite/invite-hu-1.png",
        "assets/images/invite/invite-hu-2.png",
        "assets/images/invite/invite-de-1.png",
        "assets/images/invite/invite-de-2.png",
    ];

    time = new Date(2025, 8, 6);

    ngOnInit(): void {
        window?.scroll(0, 0);
    }
}