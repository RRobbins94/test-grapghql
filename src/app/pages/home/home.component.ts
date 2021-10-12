import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIService, Blog, CreateBlogInput } from 'src/app/API.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private subscription: Subscription | null = null;
  createForm: FormGroup;
  blogs: Array<Blog> = [];
  showCreateForm: boolean = false;

  constructor(
    private api: APIService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.createForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  async ngOnInit() {
    this.blogs = (await this.api.ListBlogs(undefined, 5)).items as Blog[];

    this.subscription = <Subscription>this.api.OnCreateBlogListener.subscribe(
      (event: any) => {
        const newBlog = event.value.data.onCreateBlog;
        this.blogs = [newBlog, ...this.blogs];
      }
    );
  }

  async createBlog(blog: CreateBlogInput) {
    await this.api.CreateBlog(blog);
    this.createForm.reset();
    this.showCreateForm = !this.showCreateForm;
  }

  openBlog(blog: Blog): void {
    this.router.navigate([`blog/${blog.id}`]);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }
}
