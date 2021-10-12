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
  Blog,
  DeletePostInput,
} from 'src/app/API.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss'],
})
export class BlogViewComponent implements OnInit {
  private paramSubscription: Subscription | null = null;
  private postCreateSubscription: Subscription | null = null;
  private postDeleteSubscription: Subscription | null = null;
  createForm: FormGroup;
  blogId: string | null = null;
  posts: Array<Post> = [];
  blog: Blog | undefined | null;
  showCreateForm: boolean = false;

  constructor(
    private api: APIService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.createForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      content: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit() {
    this.paramSubscription = this.route.paramMap.subscribe(async (params) => {
      this.blogId = params.get('id');
      let id: ModelIDInput = { eq: this.blogId };
      let filter: ModelPostFilterInput = { blogID: id };
      this.posts = (await this.api.ListPosts(filter)).items as Post[];
      this.blog = this.posts.find((x) => x.blog)?.blog;

      if (!this.blog && this.blogId) {
        this.blog = (await this.api.GetBlog(this.blogId)) as Blog;
      }
    });

    this.postCreateSubscription = <Subscription>(
      this.api.OnCreatePostListener.subscribe((event: any) => {
        const newPost = event.value.data.onCreatePost;
        this.posts = [newPost, ...this.posts];
      })
    );

    this.postDeleteSubscription = <Subscription>(
      this.api.OnDeletePostListener.subscribe((event: any) => {
        const deletePost = event.value.data.onDeletePost;
        this.posts = this.posts.filter(x => x.id != deletePost.id);
      })
    );
  }

  async createPost(post: CreatePostInput) {
    if (this.blogId) {
      post.blogID = this.blogId;
      await this.api.CreatePost(post);
      this.createForm.reset();
      this.showCreateForm = !this.showCreateForm;
    }
  }

  deletePost(post: Post) {
    let deletePostInput: DeletePostInput = { id: post.id };
    this.api.DeletePost(deletePostInput);
  }

  ngOnDestroy() {
    if (this.paramSubscription) {
      this.paramSubscription.unsubscribe();
    }
    if (this.postCreateSubscription) {
      this.postCreateSubscription.unsubscribe();
    }
    if (this.postDeleteSubscription) {
      this.postDeleteSubscription.unsubscribe();
    }
    this.paramSubscription = null;
    this.postCreateSubscription = null;
    this.postDeleteSubscription = null;
  }
}
