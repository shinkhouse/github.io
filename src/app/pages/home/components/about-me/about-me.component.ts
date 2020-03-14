import { Component, OnInit } from "@angular/core";

@Component({
    selector: "shi-about-me",
    templateUrl: "./about-me.component.html",
    styleUrls: ["./about-me.component.scss"]
})
export class AboutMeComponent implements OnInit {
    constructor() {}
    public technologies: any[];
    ngOnInit(): void {
        this.technologies = [
            "JavaScript (ES6+)",
            "HTML & (S)CSS",
            "TypeScript",
            "Angular",
            "AngularJS",
            "NodeJS",
            "Express",
            "MySQL",
            "Java"
        ];
    }
}
