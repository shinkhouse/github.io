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
                name: 'Fizzbuzz Contacts',
                description: 'A simple Contacts web app inspired by Google Contacts',
                url: 'https://shinkhouse.github.io/fizzbuzz-contacts-portal/contacts',
                sourceCode: 'https://github.com/shinkhouse/fizzbuzz-contacts-portal',
                icon: 'github',
                date: new Date('11/15/2021')
            },
            {
                name: 'Cookbook',
                description: 'A little starter cookbook application',
                url: 'https://shinkhouse.github.io/cookbook',
                sourceCode: 'https://github.com/shinkhouse/cookbook',
                icon: 'github',
                date: new Date('1/05/2022')
            },
            {
                name: 'Microsoft To Do Clone',
                description: 'Microsoft To Do application clone build in React',
                url: 'https://shinkhouse.github.io/react-todo/',
                sourceCode: 'https://github.com/shinkhouse/react-todo',
                icon: 'github',
                date: new Date('04/15/2021')
            },
            {
                name: 'Giphy Search',
                description: 'Angular based application to search for Gifs by keyword. Used Giphy API.',
                url: 'https://shinkhouse.github.io/giphy-v2/',
                sourceCode: 'https://github.com/shinkhouse/giphy-v2',
                icon: 'github',
                date: new Date('1/1/2019')
            },
            {
                name: 'Calculator',
                description: 'I made this calculator as one of my first projects with JavaScript.',
                url: 'https://shinkhouse.github.io/calculator/',
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
                description: 'Chat application built using Node.js, featuring my handmade emoji picker menu.',
                url: 'https://messaging-server-shinkhouse.herokuapp.com/',
                sourceCode: 'https://github.com/shinkhouse/chat-application',
                icon: 'github',
                date: new Date('2/1/2019')
            },
            {
                name: 'Portfolio v2',
                description: 'The second iteration of my portfolio website.',
                sourceCode: 'https://github.com/shinkhouse/portfolio-v2',
                url: 'https://shinkhouse.github.io/portfolio-v2',
                icon: 'github',
                date: new Date('6/1/2016')
            },
            {
                name: 'Portfolio v3',
                description: 'The third iteration of my portfolio website.',
                sourceCode: 'https://github.com/shinkhouse/portfolio-v3',
                url: 'https://shinkhouse.github.io/portfolio-v3',
                icon: 'github',
                date: new Date('9/1/2016')
            },
            {
                name: 'Portfolio v4',
                description: 'The fourth iteration of my portfolio website.',
                sourceCode: 'https://github.com/shinkhouse/portfolio-v4',
                url: 'https://shinkhouse.github.io/portfolio-v4',
                icon: 'github',
                date: new Date('1/1/2018')
            },
            {
                name: 'Portfolio v6',
                description: 'The sixth iteration of my portfolio website.',
                url: 'https://shinkhouse.github.io/portfolio-v6',
                sourceCode: 'https://github.com/shinkhouse/portfolio-v6',
                icon: 'github',
                date: new Date('6/1/2019')
            },
            {
                name: 'Felt Message Board',
                description: 'Inspired by my high school felt letter record board, I made this felt message generator.',
                url: 'https://shinkhouse.github.io/felt-message-board',
                sourceCode: 'https://github.com/shinkhouse/felt-message-board',
                icon: 'github',
                date: new Date('1/1/2017')
            },
            {
                name: 'Weather',
                description: 'Using Darksky and Google Maps apis, made this app to get the weather.',
                url: 'https://shinkhouse.github.io/weather',
                sourceCode: 'https://github.com/shinkhouse/weather',
                icon: 'github',
                date: new Date('2/1/2020')
            }
        ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
}
