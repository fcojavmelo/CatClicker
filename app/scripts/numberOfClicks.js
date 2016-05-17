/*eslint-env jquery */
'use strict';

class Cat {
	constructor(name){
		this.img = 'images/' + name + '.jpg';
		this.name = name;
		this.numbClicks = 0;
	}
}

$(document).ready(function(){

	// the list in which are gonna insert every cat in the array
	var catList = $('ul[name=catList]');

	// the section in which are gonna insert the actual view of the cat(name, image, and number of clicks)
	var catDisplay = $('div[name=catDisplay]');

	//the actual array of cat objects
	var cats = [ new Cat('Thom'),
				new Cat('Andy'),
				new Cat('John'),
				new Cat('Mark'),
				new Cat('Tony') ];

	var clicker = function (cat, numbclickstag){
		console.log(cat.name + ' Image clicked');
		cat.numbClicks++;
		// console.log(cat.numbClicks);
		$(numbclickstag).html('Number of Clicks = ' + cat.numbClicks);
	};

	//loop to add the cats to the list, and attach and event trigger to display the cat view when a cat's name is clicked
	$.each(cats, function(i, cat) {

		// var catInfo = '<img src="' + cat.img + '" class="img-responsive" width="640" height="420" alt="image"><h1>' + cat.name + '</h1><h1>Number of clicks: ' + cat.numbClicks + '</h1>';
		var imgtag, numbclickstag, nametag;
		imgtag = document.createElement('img');
		numbclickstag = document.createElement('h1');
		nametag = document.createElement('h1');
		$(numbclickstag).html('Number of Clicks = ' + cat.numbClicks);
		$(nametag).html(cat.name);
		$(imgtag).addClass('img-responsive').attr('src', cat.img).attr('width', '640').attr('alt', 'image');
		// $(imgtag).click(function (){
		// 			console.log(cat.name + ' Image clicked');
		// 			cat.numbClicks++;
		// 			// console.log(cat.numbClicks);
		// 			$(numbclickstag).html('Number of Clicks = ' + cat.numbClicks);
		// 		});
		$(imgtag).data('event', 'click');
		//var catInfo = $(imgtag).add(nametag).add(numbclickstag);
		//console.log( 'catInfo = ' + catInfo + '\ncatInfo[0] = ' + catInfo[0] + '\n$(catInfo) =' + $(catInfo) + '\n$(catInfo[0]) =' + $(catInfo[0]) + '\n$(catInfo)[0] =' + $(catInfo)[0] );
		//console.log($(catInfo)[0])
		// $(catInfo)[0].click(function(){
		// 	// return function(){
		// 		console.log('$(catInfo)[0] called');
		// 		cat.numbClicks++;
		// 		console.log(cat.numbClicks);
		// 		$(numbclickstag).html('Number of Clicks = ' + cat.numbClicks);
		// 	// };
		// });
		// catInfo[0].click(function(){
		// 	// return function(){
		// 		console.log('catInfo[0] called');
		// 		cat.numbClicks++;
		// 		console.log(cat.numbClicks);
		// 		$(numbclickstag).html('Number of Clicks = ' + cat.numbClicks);
		// 	// };
		// });
		var li = document.createElement('li');
		var a = document.createElement('a');
		//li = $(a).appendTo(li);
		$(a).append(cat.name).attr('name', 'select_' + cat.name).appendTo(li);
		$(li).appendTo(catList);
		$(a).click((function(imgtagCopy, nametagCopy, numbclickstagCopy){
			// e.preventDefault();
			return function(){
				var catInfo = $(imgtagCopy).add(nametagCopy).add(numbclickstagCopy);
				console.log(cat.name + ' clicked');
				console.log($(catInfo).data('event'));
				console.log(catInfo);
				catDisplay.html(catInfo);
				$(imgtag).click(function (){
					console.log(cat.name + ' Image clicked');
					cat.numbClicks++;
					// console.log(cat.numbClicks);
					$(numbclickstag).html('Number of Clicks = ' + cat.numbClicks);
				});
			};
		})(imgtag, nametag, numbclickstag));
		// li.appendTo('<a href=\'\' name=\'select_' + cat.name + '\' >' + cat.name + '</a>').click(function(){
		// 	catDisplay.html(catInfo);
		// });

		// alert(cat.name);
		// $li.add('a').attr('name', 'select_' + cat.name);
		// catList.append($li);
	});


});
