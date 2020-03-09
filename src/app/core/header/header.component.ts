import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public navigation: any[];

  ngOnInit(): void {
      this.navigation = [
          {
              name: 'About',
              link: '#about'
          },
          {
            name: 'Experience',
            link: '#experience'
        },
        {
            name: 'About',
            link: '#work'
        },
        {
            name: 'Contact',
            link: '#contact'
        }
      ];
  }

}
