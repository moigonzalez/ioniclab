import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { BlogPostsService } from '../services/BlogPosts.service';
import { BlogPageDetail } from '../blogDetail/blogPageDetail';

@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
  providers: [ BlogPostsService ],
  entryComponents: [ BlogPageDetail ]
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

	navDetailPage(event): void {
		event.preventDefault();
		let nid = event.currentTarget.dataset.targetNid;
		this.navCtrl.push(BlogPageDetail, {
			nid: nid
		});
	}

	ngOnInit(): void {
		this.getBlogPosts();
	}
}
