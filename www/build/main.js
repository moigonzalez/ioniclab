webpackJsonp([0],{

/***/ 253:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 253;

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blog_blog__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__weather_weather__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about__ = __webpack_require__(511);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__blog_blog__["a" /* BlogPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__weather_weather__["a" /* WeatherPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__about_about__["a" /* AboutPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({template:/*ion-inline-start:"/Users/moigonzalez/sites/ioniclab/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Blog" tabIcon="paper"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Weather" tabIcon="partly-sunny"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/moigonzalez/sites/ioniclab/src/pages/tabs/tabs.html"*/
        }), 
        __metadata('design:paramtypes', [])
    ], TabsPage);
    return TabsPage;
}());
//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/moigonzalez/sites/ioniclab/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n    	Ionic Lab\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-slides pager>\n\n	  <ion-slide>\n	  	<img src="assets/images/logo32.jpg">\n	    <h1>Welcome to the IonicLab</h1>\n	    <small>by moigonz</small>\n	  </ion-slide>\n\n	  <ion-slide>\n	  	<ion-icon name="paper"></ion-icon>\n	    <h2>Check out the Blog</h2>\n	    <small>with data from Drupal 8 endpoint</small>\n	  </ion-slide>\n\n	  <ion-slide>\n	  	<ion-icon name="partly-sunny"></ion-icon>\n	    <h2>Check out the Weather</h2>\n	    <small>using the OpenWeather API</small>\n	  </ion-slide>\n\n	</ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/moigonzalez/sites/ioniclab/src/pages/home/home.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_BlogPosts_service__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blogDetail_blogPageDetail__ = __webpack_require__(509);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogPage = (function () {
    function BlogPage(navCtrl, blogPostsService) {
        this.navCtrl = navCtrl;
        this.blogPostsService = blogPostsService;
    }
    BlogPage.prototype.getBlogPosts = function () {
        var _this = this;
        this.blogPostsService.getBlogPosts()
            .subscribe(function (blogPosts) {
            _this.blogPosts = blogPosts;
        }, function (err) {
            console.log(err);
        });
    };
    BlogPage.prototype.navDetailPage = function (event) {
        event.preventDefault();
        var nid = event.currentTarget.dataset.targetNid;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__blogDetail_blogPageDetail__["a" /* BlogPageDetail */], {
            nid: nid
        });
    };
    BlogPage.prototype.ngOnInit = function () {
        this.getBlogPosts();
    };
    BlogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({
            selector: 'page-blog',template:/*ion-inline-start:"/Users/moigonzalez/sites/ioniclab/src/pages/blog/blog.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Blog :)\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n		<div *ngFor="let blogPost of blogPosts">\n			<div class="blog-post-wrapper" [attr.data-target-nid]="blogPost.nid" (click)="navDetailPage($event)">\n				<h2 class="a-blogpost--title" [innerHTML]="blogPost.title"></h2>\n				<div class="a-blogpost--body" [innerHTML]="blogPost.body"></div>\n			</div>\n		</div>\n</ion-content>\n'/*ion-inline-end:"/Users/moigonzalez/sites/ioniclab/src/pages/blog/blog.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_BlogPosts_service__["a" /* BlogPostsService */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_3__blogDetail_blogPageDetail__["a" /* BlogPageDetail */]]
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_BlogPosts_service__["a" /* BlogPostsService */]])
    ], BlogPage);
    return BlogPage;
}());
//# sourceMappingURL=blog.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPostsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appSettings__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BlogPostsService = (function () {
    function BlogPostsService(http) {
        this.http = http;
    }
    BlogPostsService.prototype.getBlogPosts = function () {
        var blogPosts = this.http
            .get("" + __WEBPACK_IMPORTED_MODULE_3__appSettings__["a" /* AppSettings */].BLOGPOSTS_EP)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
        return blogPosts;
    };
    BlogPostsService.prototype.getBlogPost = function (nid) {
        var blogPost = this.http
            .get(__WEBPACK_IMPORTED_MODULE_3__appSettings__["a" /* AppSettings */].BLOGPOST_EP + "/" + nid)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
        return blogPost;
    };
    BlogPostsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Injectable */])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], BlogPostsService);
    return BlogPostsService;
}());
//# sourceMappingURL=BlogPosts.service.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = (function () {
    function AppSettings() {
    }
    Object.defineProperty(AppSettings, "BLOGPOSTS_EP", {
        get: function () {
            return 'https://moigonz.com/blogposts';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings, "BLOGPOST_EP", {
        get: function () {
            return "https://moigonz.com/blogpost";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings, "OpenWeatherAPIKey", {
        get: function () {
            return '79305d11f88bd1fb7ef3dd98faa5e911';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings, "CURRENT_WEATHER_BY_CITY_EP", {
        get: function () {
            return 'https://api.openweathermap.org/data/2.5/weather?q=';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSettings, "CURRENT_WEATHER_BY_COORD_EP", {
        get: function () {
            return 'https://api.openweathermap.org/data/2.5/weather?';
        },
        enumerable: true,
        configurable: true
    });
    return AppSettings;
}());
//# sourceMappingURL=appSettings.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogPageDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_BlogPosts_service__ = __webpack_require__(482);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogPageDetail = (function () {
    function BlogPageDetail(navCtrl, navParams, blogPostsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.blogPostsService = blogPostsService;
    }
    BlogPageDetail.prototype.getBlogPost = function (nid) {
        var _this = this;
        this.blogPostsService.getBlogPost(nid).subscribe(function (blogPost) {
            _this.blogPost = blogPost[0];
        }, function (err) {
            console.log(err);
        });
    };
    BlogPageDetail.prototype.ngOnInit = function () {
        this.getBlogPost(this.navParams.get('nid'));
    };
    BlogPageDetail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({
            selector: 'page-blog-detail',template:/*ion-inline-start:"/Users/moigonzalez/sites/ioniclab/src/pages/blogDetail/blogPageDetail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n		{{blogPost?.title}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<h2 class="a-blogpost--title" [innerHTML]="blogPost?.title"></h2>\n	<div class="a-blogpost--body" [innerHTML]="blogPost?.body"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/moigonzalez/sites/ioniclab/src/pages/blogDetail/blogPageDetail.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_BlogPosts_service__["a" /* BlogPostsService */]]
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_BlogPosts_service__["a" /* BlogPostsService */]])
    ], BlogPageDetail);
    return BlogPageDetail;
}());
//# sourceMappingURL=blogPageDetail.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_native__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_OpenWeather_service__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WeatherPage = (function () {
    function WeatherPage(navCtrl, openWeatherService) {
        this.navCtrl = navCtrl;
        this.openWeatherService = openWeatherService;
    }
    WeatherPage.prototype.getCurrentWeatherForCity = function (cityName) {
        var _this = this;
        this.isLoadingLocation = true;
        this.openWeatherService
            .getCurrentWeatherForCityName(cityName)
            .subscribe(function (currentWeather) {
            _this.currentWeather = currentWeather;
            _this.currentWeatherIcon = _this.selectIconForWeatherId(currentWeather.weather[0].icon);
            _this.isLoadingLocation = false;
            _this.isLocationAvailable = true;
        }, function (err) {
            console.log(err);
        });
    };
    WeatherPage.prototype.getCurrentWeatherForCoord = function (LatLon) {
        var _this = this;
        this.openWeatherService
            .getCurrentWeatherForCoord(LatLon)
            .subscribe(function (currentWeather) {
            _this.currentWeather = currentWeather;
            _this.currentWeatherIcon = _this.selectIconForWeatherId(currentWeather.weather[0].icon);
        }, function (err) {
            console.log(err);
        });
    };
    WeatherPage.prototype.selectIconForWeatherId = function (weatherId) {
        switch (weatherId) {
            case '50d':
                return 'cloudy';
            case '11d':
                return 'thunderstorm';
            case '09d':
            case '10d':
                return 'rainy';
            case '13d':
                return 'snow';
            case '01d':
                return 'sunny';
            case '01n':
                return 'moon';
            case '02d':
                return 'partly-sunny';
            case '02n':
                return 'cloudy-night';
            case '03d':
            case '03n':
            case '04d':
            case '04n':
                return 'cloudy';
            default:
                return 'partly-sunny';
        }
    };
    WeatherPage.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoadingLocation = true;
        this.isLocationAvailable = false;
        __WEBPACK_IMPORTED_MODULE_1_ionic_native__["a" /* Geolocation */].getCurrentPosition({ maximumAge: 100000, timeout: 10000 })
            .then(function (resp) {
            var userLocation = {};
            userLocation.lat = resp.coords.latitude;
            userLocation.lon = resp.coords.longitude;
            _this.getCurrentWeatherForCoord(userLocation);
            _this.isLoadingLocation = false;
            _this.isLocationAvailable = true;
        }, function (err) {
            _this.isLoadingLocation = false;
            _this.isLocationAvailable = false;
        });
    };
    WeatherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({
            selector: 'page-weather',template:/*ion-inline-start:"/Users/moigonzalez/sites/ioniclab/src/pages/weather/weather.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Weather :)\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div [hidden]="isLocationAvailable || isLoadingLocation">\n		<p>Your geolocation seems unavailable, please enter the name of your city below: </p>\n		<form (ngSubmit)="getCurrentWeatherForCity(cityName)">\n			<ion-item>\n				<ion-label floating>Name of your city</ion-label>\n				<ion-input type="text" [(ngModel)]="cityName" name="cityName"></ion-input>\n			</ion-item>\n			<div class="text-right margin-top">\n				<button ion-button type="submit">Enter</button>\n			</div>\n		</form>\n	</div>\n	<div [hidden]="!isLocationAvailable">\n		<header class="text-center">\n			<h1 class="currentWeather--title"> {{currentWeather?.name}} </h1>\n			<h4 class="currentWeather--time">Last checked @ {{ currentWeather?.dt * 1000 | date:\'hh:mma\':\'UTC+01:00\' }}</h4>\n			<ion-icon class="currentWeather--icon" [name]="currentWeatherIcon"></ion-icon>\n			<small class="currentWeather--description">{{ currentWeather?.weather[0].description }}</small>\n			<div class="currentWeather--temp">{{ currentWeather?.main.temp }}°C</div>\n		</header>\n		<section class="currentWeather--info text-center margin-top">\n			<div>\n				<label>Min. temperature:</label><span>{{ currentWeather?.main.temp_min }}<span>°C</span></span>\n			</div>\n			<div>\n				<label>Max. temperature:</label><span>{{ currentWeather?.main.temp_max }}<span>°C</span></span>\n			</div>\n			<div>\n				<label>Sunrise:</label><span>{{ currentWeather?.sys.sunrise * 1000 | date:\'hh:mma\':\'UTC+01:00\' }}</span>\n			</div>\n			<div>\n				<label>Sunset:</label><span>{{ currentWeather?.sys.sunset * 1000 | date:\'hh:mma\':\'UTC+01:00\' }}</span>\n			</div>\n		</section>\n	</div>\n	<div [hidden]="!isLoadingLocation" class="spinner--loading">\n		<ion-spinner></ion-spinner>\n		<small class="spinner__info">Very busy getting your location</small>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/moigonzalez/sites/ioniclab/src/pages/weather/weather.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_OpenWeather_service__["a" /* OpenWeatherService */]]
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_OpenWeather_service__["a" /* OpenWeatherService */]])
    ], WeatherPage);
    return WeatherPage;
}());
//# sourceMappingURL=weather.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/moigonzalez/sites/ioniclab/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	Moises Gonzalez :)\n</ion-content>\n'/*ion-inline-end:"/Users/moigonzalez/sites/ioniclab/src/pages/about/about.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());
//# sourceMappingURL=about.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(606);


// Compile and launch the module
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_about_about__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_blog_blog__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_weather_weather__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_blogDetail_blogPageDetail__ = __webpack_require__(509);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_blog_blog__["a" /* BlogPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_weather_weather__["a" /* WeatherPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_blogDetail_blogPageDetail__["a" /* BlogPageDetail */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */])
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_blog_blog__["a" /* BlogPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_weather_weather__["a" /* WeatherPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_blogDetail_blogPageDetail__["a" /* BlogPageDetail */]
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicErrorHandler */] }]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(479);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["c" /* StatusBar */].styleDefault();
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* Splashscreen */].hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Component */])({template:/*ion-inline-start:"/Users/moigonzalez/sites/ioniclab/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/moigonzalez/sites/ioniclab/src/app/app.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */]])
    ], MyApp);
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenWeatherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appSettings__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OpenWeatherService = (function () {
    function OpenWeatherService(http) {
        this.http = http;
    }
    OpenWeatherService.prototype.getCurrentWeatherForCityName = function (cityName) {
        var curentWeather = this.http
            .get("" + __WEBPACK_IMPORTED_MODULE_3__appSettings__["a" /* AppSettings */].CURRENT_WEATHER_BY_CITY_EP + cityName + "&units=metric&appid=" + __WEBPACK_IMPORTED_MODULE_3__appSettings__["a" /* AppSettings */].OpenWeatherAPIKey)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
        return curentWeather;
    };
    OpenWeatherService.prototype.getCurrentWeatherForCoord = function (LatLon) {
        var curentWeather = this.http
            .get(__WEBPACK_IMPORTED_MODULE_3__appSettings__["a" /* AppSettings */].CURRENT_WEATHER_BY_COORD_EP + "lat=" + LatLon.lat + "&lon=" + LatLon.lon + "&units=metric&appid=" + __WEBPACK_IMPORTED_MODULE_3__appSettings__["a" /* AppSettings */].OpenWeatherAPIKey)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
        return curentWeather;
    };
    OpenWeatherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Injectable */])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], OpenWeatherService);
    return OpenWeatherService;
}());
//# sourceMappingURL=OpenWeather.service.js.map

/***/ })

},[512]);
//# sourceMappingURL=main.js.map