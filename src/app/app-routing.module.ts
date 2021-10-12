import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLayoutComponent } from './layouts/page-layout/page-layout.component';
import { BlogCreateComponent } from './pages/blog/blog-create/blog-create.component';
import { BlogViewComponent } from './pages/blog/blog-view/blog-view.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'blog/create',
        component: BlogCreateComponent,
      },
      {
        path: 'blog/:id',
        component: BlogViewComponent,
      },

    ],
  },

  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
