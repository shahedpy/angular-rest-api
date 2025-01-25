import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    PostsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'restapi';
}
