import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NgFor } from '@angular/common';

@Component({
    selector: 'shi-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss'],
    standalone: true,
    imports: [NgFor, MatIcon]
})
export class AboutMeComponent implements OnInit {
    constructor() {}
    public technologies: any[];
    ngOnInit(): void {
        this.technologies = [
            'JavaScript (ES6+)',
            'HTML & (S)CSS',
            'TypeScript',
            'Angular',
            'AngularJS',
            'NodeJS',
            'Express',
            'MySQL',
            'Java'
        ];
    }
}
