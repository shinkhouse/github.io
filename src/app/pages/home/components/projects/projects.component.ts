import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/models/project';

@Component({
    selector: 'shi-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    constructor() { }
    public projects: Project[];
    ngOnInit(): void {
        this.projects = [
            {
                name: 'Test',
                description: 'text description',
                url: 'www.google.com',
                sourceCode: 'www.github.com'
            },
            {
                name: 'Test',
                description: 'text description',
                url: 'www.google.com',
                sourceCode: 'www.github.com'
            },
            {
                name: 'Test',
                description: 'text description',
                url: 'www.google.com',
                sourceCode: 'www.github.com'
            },
            {
                name: 'Test',
                description: 'text description',
                url: 'www.google.com',
                sourceCode: 'www.github.com'
            },
        ];
    }

}
