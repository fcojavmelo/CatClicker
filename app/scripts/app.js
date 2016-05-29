/*eslint-env jquery */
'use strict';

// shortcutting DOM
var d = document;

$(d).ready(function(){
	// cat class
class Cat {
	constructor(name){
		this.img = 'images/' + name + '.jpg';
		this.name = name;
		this.clicks = 0;
	}
}

// model
var model = {
	//declaring cats array for storage
	cats: new Array(),
	currentCat: Cat,
	// filling up the arrray
	init: function() {
			this.cats.push( new Cat('Thom'),
							new Cat('Andy'),
							new Cat('John'),
							new Cat('Mark'),
							new Cat('Tony') );
			this.currentCat = this.cats[0];
			console.log(this.cats);
			}
};

// octopus
var octopus = {
	init: function() {
		model.init();
		viewCatList.init();
		viewCat.init();
	},
	getAllCats: function() {
		return model.cats;
	},
	getCurrentCat: function() {
		return model.currentCat;
	},
	setCurrentCat: function(cat) {
		// console.log('catClicked called' + cat.name);
		model.currentCat = cat;
		viewCat.render();
	},
	incrementCounter: function() {
		model.currentCat.clicks++;
		viewCat.renderCounterOnly();
	}
};

// catlist view
var viewCatList = {
	init: function() {
		this.catList = $('.catList');
		this.catListArray = this.catList.children();
		this.render();
	},
	render: function() {
		octopus.getAllCats().forEach(function(cat) {
			var li = d.createElement('li');
			$(li).html(cat.name);
			$(li).attr('style', 'cursor: pointer');
			// $(li).addClass('active');
			$(li).click((function(catCopy){
				return function(){
					octopus.setCurrentCat(catCopy);
					if(this.catListArray.hasClass('active')){
						this.catListArray.removeClass('active');
					}
					$(li).addClass('active');
				};
			})(cat));
			$(li).appendTo(viewCatList.catList);
		});
	}
};

// cat View
var viewCat = {
	init: function() {
		this.catImg = $('.catImg');
		this.catName = $('.catName');
		this.numClicks = $('.numClicks');
		this.catImg.click(function(){
			octopus.incrementCounter();
		});
		this.render();
	},
	render: function() {
		console.log('viewCat.render() called');
		// var html = '<h1>' + cat.name + '</h1><img src="' + cat.img + '" class="img-responsive" alt="img"><h2>Number of clicks: ' + cat.clicks + '</h2>';
		var cat = octopus.getCurrentCat();
		this.catImg.attr('src', cat.img);
		this.catName.html(cat.name);
		this.numClicks.html('Number of clicks = ' + cat.clicks);
	},
	renderCounterOnly: function(){
		var cat = octopus.getCurrentCat();
		this.numClicks.html('Number of clicks = ' + cat.clicks);
	}
};

octopus.init();

});









