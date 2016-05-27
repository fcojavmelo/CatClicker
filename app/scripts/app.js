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
	// filling up the arrray
	init: function() {
			this.cats.push( new Cat('Thom'),
							new Cat('Andy'),
							new Cat('John'),
							new Cat('Mark'),
							new Cat('Tony') );
			console.log(this.cats);
			},
	getAllCats: function() {
		return this.cats;
	},
	getFirstCat: function() {
		return this.cats[0];
	},
	getCat: function(cat) {
		return;
	}
};

// octopus
var octopus = {
	init: function() {
		model.init();
		viewCatList.init();
		viewCat.init();
	},
	getCats: function() {
		return model.getAllCats();
	},
	getFirstCat: function() {
		return model.getFirstCat();
	},
	catSelected: function(cat) {
		// console.log('catClicked called' + cat.name);
		viewCat.render(cat);
	},
	catClicked: function() {

	}
};

// catlist view
var viewCatList = {
	init: function() {
		this.catList = $('.catList');
		viewCatList.render();
	},
	render: function() {
		octopus.getCats().forEach(function(cat) {
			var li = d.createElement('li');
			$(li).html(cat.name);
			$(li).click(function() {
				octopus.catSelected(cat);
			});
			$(li).appendTo(viewCatList.catList);
		});
	}
};

// cat View
var viewCat = {
	init: function() {
		this.catInfo = $('.catInfoView');
		var cat = octopus.getFirstCat();
		viewCat.render(cat);
	},
	render: function(cat) {
		// console.log('viewCat.render() called');
		var html = '<h1>' + cat.name + '</h1><img src="' + cat.img + '" class="img-responsive" alt="img"><h2>Number of clicks: ' + cat.clicks + '</h2>';
		this.catInfo.html(html);
		$('.catInfoView').children('img').click(function() {
			cat.clicks++;
			viewCat.render(cat);
		});
	}
};

octopus.init();

});









