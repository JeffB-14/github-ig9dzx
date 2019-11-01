import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { CustomFooterComponent } from '../shared/components/customfooter/customfooter.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    CustomFooterComponent
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    CustomFooterComponent
  ]
})
export class LayoutModule { }
