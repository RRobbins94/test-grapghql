import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  APIService,
  Post,
  ModelPostFilterInput,
  ModelIDInput,
  CreatePostInput,
} from 'src/app/API.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  private paramSubscription: Subscription | null = null;
  private postSubscription: Subscription | null = null;
  createForm: FormGroup;
  blogId: string | null = null;
  posts: Array<Post> = [];

  constructor(
    private api: APIService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
    });
  }

  async ngOnInit() {
    this.paramSubscription = this.route.paramMap.subscribe(async (params) => {
      this.blogId = params.get('id');
      let id: ModelIDInput = { eq: this.blogId };
      let filter: ModelPostFilterInput = { blogID: id };
      this.posts = (await this.api.ListPosts(filter)).items as Post[];
    });

    this.postSubscription = <Subscription>(
      this.api.OnCreatePostListener.subscribe((event: any) => {
        const newPost = event.value.data.onCreatePost;
        this.posts = [newPost, ...this.posts];
      })
    );
  }

  async createPost(post: CreatePostInput) {
    if (this.blogId) {
      post.blogID = this.blogId;
      await this.api.CreatePost(post);
      this.createForm.reset();
    }
  }

  ngOnDestroy() {
    if (this.paramSubscription) {
      this.paramSubscription.unsubscribe();
    }
    this.paramSubscription = null;
  }
}
