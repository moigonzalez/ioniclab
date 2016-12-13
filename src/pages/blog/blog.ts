import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import { BlogPostsService } from '../services/BlogPosts.service';

@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
  providers: [BlogPostsService]
})
export class BlogPage implements OnInit {
	blogPosts: String[];

	constructor(public navCtrl: NavController, private blogPostsService: BlogPostsService) { }

	getBlogPosts(): void {
		this.blogPostsService.getBlogPosts().subscribe(blogPosts => {
															this.blogPosts = blogPosts;
														},
														err => {
															console.log(err);
														});
	}

	ngOnInit(): void {
		this.getBlogPosts();
	}
}
