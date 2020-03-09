import { Component, OnInit } from '@angular/core';
import { Resource } from '../../models/resource';

@Component({
    selector: 'shi-useful-link-bar',
    templateUrl: './useful-link-bar.component.html',
    styleUrls: ['./useful-link-bar.component.scss']
})
export class UsefulLinkBarComponent implements OnInit {

    constructor() { }

    public resources: Resource[];

    ngOnInit(): void {
        this.resources = [
            {
                name: 'facebook',
                link: 'https://www.facebook.com/shinkhouse',
                icon: 'facebook'
            },
            {
                name: 'twitter',
                link: 'https://www.twitter.com/shinkhouse',
                icon: 'twitter'
            },
            {
                name: 'linkedin',
                link: 'https://www.linkedin.com/in/shinkhouse',
                icon: 'linkedin'
            },
            {
                name: 'instagram',
                link: 'https://www.instagram.com/shinkhouse',
                icon: 'instagram'
            },
            {
                name: 'github',
                link: 'https://www.github.com/shinkhouse',
                icon: 'github'
            },
            {
                name: 'codepen',
                link: 'https://www.codepen.io/shinkhouse',
                icon: 'codepen'
            },
        ];
    }

}
