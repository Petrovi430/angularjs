(function() {
	var app = angular.module('aboutEnglish', []);

	app.controller('SiteController', ['$http', function($http) {
		var site = this;
		$http.get('./data.json').success(function(data) {
			site.en = data.content[0];
			site.ua = data.content[1];
			site.view = site.en;
			site.lang = "en";
		});
		site.changeLang = function() {
			site.view = (site.view == site.en) ? site.ua : site.en;
			site.lang = (site.view == site.en) ? "en" : "ua";
		}
		site.viewContent = function(id) {
			return id !== 'famous';
		}
		site.viewMap = function(id) {
			return id === 'localization';
		}
		site.viewForm = function(id) {
			return id === 'contact';
		}
	}]);
	app.controller('SlideController', function() {
		this.indexSlide = 0;
		this.selectSlide = function(setSlide, data) {
			this.indexSlide += setSlide;
			if(this.indexSlide>data.content.length-1){
				this.indexSlide = 0;
			}
			if(this.indexSlide<0){
				this.indexSlide = data.content.length-1;
			}
		}
		this.showSlide = function(currentItem, data) {
			return currentItem === data.content[this.indexSlide];
		}
	})
	app.directive('famousSpeakers', function() {
		return{
			restrict:'A',
			templateUrl: 'famous-speakers.html'
		};
	});
})();


