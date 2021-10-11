import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NavbarComponent, PageLayoutComponent],
  imports: [
    CommonModule,
    CoreModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
})
export class LayoutsModule {}
