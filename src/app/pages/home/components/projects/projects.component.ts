import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/models/project';

@Component({
    selector: 'shi-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
    constructor() {}
    public projects: Project[];
    public showTable: boolean;
    ngOnInit(): void {
        this.showTable = false;
        this.projects = [
            {
                name: 'Microsoft To Do Clone',
                description:
                    'Microsoft To Do application clone build in React',
                url: 'https://shinkhouse.github.io/react-todo/',
                sourceCode: 'https://github.com/shinkhouse/react-todo',
                icon: 'github',
                date: new Date('04/15/2021')
            },
            {
                name: 'Giphy Search',
                description:
                    'Angular based application to search for Gifs by keyword. Used Giphy API.',
                url: 'https://www.samuelhinkhouse.me/giphy',
                sourceCode: '',
                icon: 'github',
                date: new Date('1/1/2019')
            },
            {
                name: 'Calculator',
                description:
                    'I made this calculator as one of my first projects with JavaScript.',
                url: 'https://www.samuelhinkhouse.me/JavaScript/calculator/',
                sourceCode: 'https://github.com/shinkhouse/calculator',
                icon: 'github',
                date: new Date('1/1/2017')
            },
            {
                name: 'Emoji Picker Menu',
                description: '',
                url: 'https://codepen.io/shinkhouse/pen/wQpPYj',
                sourceCode: '',
                icon: 'codepen',
                date: new Date('1/1/2019')
            },
            {
                name: 'Chat Application',
                description: '',
                url: 'https://messaging-server-shinkhouse.herokuapp.com/',
                sourceCode: '',
                icon: 'github',
                date: new Date('2/1/2019')
            },
            {
                name: 'Portfolio v2',
                description: 'The second iteration of my portfolio website.',
                sourceCode: 'https://github.com/shinkhouse/portfolio-v2',
                url: 'https://www.samuelhinkhouse.me/v2',
                icon: 'github',
                date: new Date('6/1/2016')
            },
            {
                name: 'Portfolio v3',
                description: 'The third iteration of my portfolio website.',
                sourceCode: 'https://github.com/shinkhouse/portfolio-v3',
                url: 'https://www.samuelhinkhouse.me/v3',
                icon: 'github',
                date: new Date('9/1/2016')
            },
            {
                name: 'Portfolio v4',
                description: 'The fourth iteration of my portfolio website.',
                sourceCode: 'https://github.com/shinkhouse/portfolio-v4',
                url: 'https://www.samuelhinkhouse.me/v4',
                icon: 'github',
                date: new Date('1/1/2018')
            },
            {
                name: 'Portfolio v6',
                description: 'The sixth iteration of my portfolio website.',
                url: 'https://www.samuelhinkhouse.me/v6',
                sourceCode: 'https://github.com/shinkhouse/portfolio-v6',
                icon: 'github',
                date: new Date('6/1/2019')
            },
            {
                name: 'Felt Message Board',
                description: 'Inspired by my high school felt letter record board, I made this felt message generator.',
                url: 'https://www.samuelhinkhouse.me/projects/feltmessageboard',
                sourceCode: 'https://github.com/shinkhouse/felt-message-board',
                icon: 'github',
                date: new Date('1/1/2017')
            },
            {
                name: 'Weather',
                description: 'Using Darksky and Google Maps apis, made this app to get the weather.',
                url: '',
                sourceCode: 'https://github.com/shinkhouse/weather',
                icon: 'github',
                date: new Date('2/1/2020')
            }
        ].sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
    }
}
