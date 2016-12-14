import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { BlogPostsService } from '../services/BlogPosts.service';
import { BlogPage } from '../blog/blog';

@Component({
  selector: 'page-blog-detail',
  templateUrl: 'blogPageDetail.html',
  providers: [BlogPostsService]
})
export class BlogPageDetail implements OnInit {
	blogPost: String;

	constructor(public navCtrl: NavController, public navParams: NavParams, private blogPostsService: BlogPostsService) { }

	getBlogPost(nid): void {
		this.blogPostsService.getBlogPost(nid).subscribe(blogPost => {
															this.blogPost = blogPost[0];
															console.log(this.blogPost);
														},
														err => {
															console.log(err);
														});
	}

	ngOnInit(): void {
		this.getBlogPost(this.navParams.get('nid'));
	}
}
