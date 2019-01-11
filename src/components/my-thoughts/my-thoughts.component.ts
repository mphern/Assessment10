import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models/post-model';

@Component({
  selector: 'app-my-thoughts',
  templateUrl: './my-thoughts.component.html',
  styleUrls: ['./my-thoughts.component.scss']
})
export class MyThoughtsComponent implements OnInit {

  constructor() { }

  
  newThought: boolean = false;
  postTitle: string;
  postText: string;
  postsList: Post[] = [];

  ngOnInit() {

  }

  AddPost(thoughtTitle: string, text: string)
  {
    var post: Post = {
      title: thoughtTitle,
      thought: text
    };
    this.postsList.push(post);
    this.newThought = !this.newThought;
  }

  DeletePost(index: number)
  {
    this.postsList.splice(index, 1);
  }

}
