import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, Blog, CreateBlogInput } from 'src/app/API.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  blogs: Blog[] | undefined;
  createForm: FormGroup;

  constructor(private api: APIService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  async ngOnInit() {
    this.blogs = (await this.api.ListBlogs()).items as Blog[];
  }

  async createBlog(blog: CreateBlogInput) {
    await this.api.CreateBlog(blog);
    this.createForm.reset();
  }
}
