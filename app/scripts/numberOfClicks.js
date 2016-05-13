/*eslint-env jquery */

$(document).ready(function(){

	var i = 0;
	var cat1Name = 'Thom';
	var cat2Name = 'Andy';
	var catNames = [cat1Name, cat2Name];
	var numOfClicksCat1 = 0;
	var numOfClicksCat2 = 0;

	$('div[id^=cat] > div[name=info] > h1[name=cat_name]').each(function(){
		$(this).html(catNames[i]);
		i++;
	});

	$('img[id^=img_cat]').click(function() {
		var catNumber = $(this).attr('id').charAt(7);
		// alert(catNumber);
		var cat = $('div[id=cat' + catNumber + '] > div[name=info] > h1[name=numOfClicks]');
		switch (catNumber) {
			case '1':
				numOfClicksCat1++;
				cat.html('Number of clicks: ' + numOfClicksCat1);
				break;
			case '2':
				numOfClicksCat2++;
				cat.html('Number of clicks: ' + numOfClicksCat2);
				break;
		}
	});
});
