import { Component, OnInit } from '@angular/core';
import { Resource } from '../../models/resource';

@Component({
    selector: 'shi-useful-link-bar',
    templateUrl: './useful-link-bar.component.html',
    styleUrls: ['./useful-link-bar.component.scss']
})
export class UsefulLinkBarComponent implements OnInit {
    constructor() {}

    public resources: Resource[];

    ngOnInit(): void {
        this.resources = [
            {
                name: 'Facebook',
                link: 'https://www.facebook.com/shinkhouse',
                icon: 'facebook'
            },
            {
                name: 'Twitter',
                link: 'https://www.twitter.com/shinkhouse',
                icon: 'twitter'
            },
            {
                name: 'Linkedin',
                link: 'https://www.linkedin.com/in/shinkhouse',
                icon: 'linkedin'
            },
            {
                name: 'Instagram',
                link: 'https://www.instagram.com/samuel.t.hinkhouse',
                icon: 'instagram'
            },
            {
                name: 'GitHub',
                link: 'https://www.github.com/shinkhouse',
                icon: 'github'
            },
            {
                name: 'CodePen',
                link: 'https://www.codepen.io/shinkhouse',
                icon: 'codepen'
            }
        ];
    }

    getUsefulLinkTitleText(resource: Resource): string {
        return `Find Samuel Hinkhouse on ${resource.name}`;
    }
}
