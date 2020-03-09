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
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt lobortis neque in sodales. Nullam non gravida turpis, sit amet iaculis felis. Nulla id tempus risus. Curabitur porta non lorem sit amet egestas.',
                url: 'www.google.com',
                sourceCode: 'www.github.com'
            },
            {
                name: 'Test',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt lobortis neque in sodales. Nullam non gravida turpis, sit amet iaculis felis. Nulla id tempus risus. Curabitur porta non lorem sit amet egestas.',
                url: 'www.google.com',
                sourceCode: 'www.github.com'
            },
            {
                name: 'Test',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt lobortis neque in sodales. Nullam non gravida turpis, sit amet iaculis felis. Nulla id tempus risus. Curabitur porta non lorem sit amet egestas.',
                url: 'www.google.com',
                sourceCode: 'www.github.com'
            },
            {
                name: 'Test',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt lobortis neque in sodales. Nullam non gravida turpis, sit amet iaculis felis. Nulla id tempus risus. Curabitur porta non lorem sit amet egestas.',
                url: 'www.google.com',
                sourceCode: 'www.github.com'
            },
        ];
    }

}
