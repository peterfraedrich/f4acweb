/////////////// DYNAMIC CSS LOADER //////////////////////
	// create CSS element
	css = document.createElement('link');
	css.setAttribute('type', 'text/css');
	css.setAttribute('rel', 'stylesheet');
	css.setAttribute('id', 'dyn-css');

	// check size of screen and load appropriate CSS //
	if (window.innerWidth <= 1080) {
		css.setAttribute('href','./css/style_mobile.css')
	} else {
		css.setAttribute('href','./css/style_desktop.css')
	}
	document.getElementsByTagName('head')[0].appendChild(css);				

	// watch the screen size after init load
	window.addEventListener('resize', function () {
		if (window.innerWidth <= 1080) {
			document.getElementById('dyn-css').setAttribute('href','./css/style_mobile.css')
		} else {
			document.getElementById('dyn-css').setAttribute('href','./css/style_desktop.css')
		}
	}, true);
/////////////////////////////////////////////////////////////

//////////////// NAV FUNCTIONS //////////////////////////////

	// homepage
	var home = function () {
		document.getElementById('home_content').style.display = 'block';
		document.getElementById('tour_content').style.display = 'none';
		document.getElementById('bio_content').style.display = 'none';
		document.getElementById('merch_content').style.display = 'none';
		document.getElementById('music_content').style.display = 'none';
	}
	var tour = function () {
		document.getElementById('home_content').style.display = 'none';
		document.getElementById('tour_content').style.display = 'block';
		document.getElementById('bio_content').style.display = 'none';
		document.getElementById('merch_content').style.display = 'none';
		document.getElementById('music_content').style.display = 'none';;
	}
	var bio = function () {
		document.getElementById('home_content').style.display = 'none';
		document.getElementById('tour_content').style.display = 'none';
		document.getElementById('bio_content').style.display = 'block';
		document.getElementById('merch_content').style.display = 'none';
		document.getElementById('music_content').style.display = 'none';
	}
	var merch = function () {
		document.getElementById('home_content').style.display = 'none';
		document.getElementById('tour_content').style.display = 'none';
		document.getElementById('bio_content').style.display = 'none';
		document.getElementById('merch_content').style.display = 'block';
		document.getElementById('music_content').style.display = 'none';
	}
	var music = function () {
		document.getElementById('home_content').style.display = 'none';
		document.getElementById('tour_content').style.display = 'none';
		document.getElementById('bio_content').style.display = 'none';
		document.getElementById('merch_content').style.display = 'none';
		document.getElementById('music_content').style.display = 'block';
	}