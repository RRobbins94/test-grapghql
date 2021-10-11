import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, CreateUserInput, User } from 'src/app/API.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: User | undefined;
  users: User[] | undefined;
  createForm: FormGroup;

  constructor(private api: APIService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      email: ['', Validators.required],
      userName: ['', Validators.required],
    });
  }

  async ngOnInit() {
    this.user = await this.api.GetUser('1');

    this.users = (await this.api.ListUsers()).items as User[];
  }

  async createUser(user: CreateUserInput) {
    await this.api.CreateUser(user);
    this.createForm.reset();
  }
}
