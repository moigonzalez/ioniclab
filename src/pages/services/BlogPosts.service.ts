import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BlogPostsService {
	private blogPostsEP = 'http://localhost:8888/moigonz.com/blogposts';

	constructor (private http: Http) { }

	getBlogPosts(): Observable<[String]> {
		let blogPosts = this.http
							.get(this.blogPostsEP)
							.map((res: Response) => res.json())
							.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
		return blogPosts;
	}
}