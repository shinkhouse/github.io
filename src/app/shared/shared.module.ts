import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioCardComponent } from './components/portfolio-card/portfolio-card.component';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UsefulLinkBarComponent } from './components/useful-link-bar/useful-link-bar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [CommonModule, MaterialModule, FlexLayoutModule, HttpClientModule],
    declarations: [PortfolioCardComponent, UsefulLinkBarComponent],
    exports: [
        PortfolioCardComponent,
        UsefulLinkBarComponent,
        MaterialModule,
        FlexLayoutModule
    ]
})
export class SharedModule {}
