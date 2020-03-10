import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'shi-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private renderer: Renderer2) { }

    public navigation: any[];

    ngOnInit(): void {
        this.navigation = [
            {
                name: 'About',
                link: 'about'
            },
            {
                name: 'Experience',
                link: 'experience'
            },
            {
                name: 'Projects',
                link: 'projects'
            },
            {
                name: 'Contact',
                link: 'contact'
            }
        ];
    }

    scrollToHeader(element) {
        const el = this.renderer.selectRootElement(`#${element}`, true);
        const yOffset = -32;
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: yCoordinate, behavior: 'smooth'});
    }

}
