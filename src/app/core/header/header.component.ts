import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'shi-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    constructor(private renderer: Renderer2) {}

    public navigation: any[];
    public hideHeader: boolean = false;
    public scrollPosition: number = 0;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const currentScrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        console.log(currentScrollPos, this.scrollPosition, (currentScrollPos < this.scrollPosition));
        if (currentScrollPos < this.scrollPosition) {
            // User is scrolling up
            this.hideHeader = false;
        } else if (currentScrollPos > 16) {
            // User is scrolling down
            this.hideHeader = true;
        }
        this.scrollPosition = currentScrollPos;
    }

    doesHeaderHaveBackground(): boolean {
        return this.scrollPosition >= 16;
    }

    ngOnInit(): void {
        this.navigation = [
            {
                name: 'About',
                link: 'about',
            },
            {
                name: 'Projects',
                link: 'projects',
            },
        ];
    }

    scrollToHeader(element) {
        const el = this.renderer.selectRootElement(`#${element}`, true);
        const yOffset = -32;
        const yCoordinate = el.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
    }
}
