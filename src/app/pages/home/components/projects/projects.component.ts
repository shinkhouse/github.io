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
                name: 'Giphy Search',
                description: 'Angular based application to search for Gifs by keyword. Used Giphy API.',
                url: 'https://www.samuelhinkhouse.me/giphy',
                sourceCode: '',
                icon: 'github'
            },
            {
                name: 'Calculator',
                description: 'I made this calculator as one of my first projects with JavaScript.',
                url: 'https://www.samuelhinkhouse.me/JavaScript/calculator/',
                sourceCode: '',
                icon: 'github'
            },
            {
                name: 'Emoji Picker Menu',
                description: '',
                url: 'https://codepen.io/shinkhouse/pen/wQpPYj',
                sourceCode: '',
                icon: 'codepen'
            },
            {
                name: 'Chat Application',
                description: '',
                url: 'https://messaging-server-shinkhouse.herokuapp.com/',
                sourceCode: '',
                icon: 'github'
            },
            {
                name: 'Instagram Heart Effect',
                description: '',
                url: 'https://codepen.io/shinkhouse/pen/KrjQoY',
                sourceCode: '',
                icon: 'codepen'
            },
        ];
    }

}
