var n, c = 0;
function navigate(n){
	if(hamCheck == 0)
	{
		var menu = document.getElementsByClassName("links")[0];
		menu.style.transform = "translateX(-100vw)";
		setTimeout(function(){
			var menu = document.getElementsByClassName("links")[0];
			document.getElementsByClassName("hamburger")[0].style.display = "block";
		}, 480);
		goHome();
	}
	if(n!=c)
	{
		var games = document.getElementsByClassName("games")[0];
		var rules = document.getElementsByClassName("rules")[0];
		var contacts = document.getElementsByClassName("contacts")[0];
		var about = document.getElementsByClassName("about")[0];
		switch(n){
			case 0:
			{
				probcheck = 0;
				if(c == 1){
					rules.style.animation = "closeRegContainer 0.5s ease 1 forwards";
				}
				if(c == 2){
					contacts.style.animation = "closeRegContainer 0.5s ease 1 forwards";
				}
				if(c == 3){
					games.style.animation = "closeRegContainer 0.5s ease 1 forwards";
				}
				setTimeout(function(){
				rules.style.display = "none";
				contacts.style.display = "none";
				games.style.display = "none";
				}, 400);
				setTimeout(function(){
				about.style.display = "block";
				about.style.animation = "openRegContainer 0.5s ease 1 forwards";
				}, 500);
				c = 0;
				break;
			}
			case 1:
			{
				probcheck = 0;
				if(c == 0){
					about.style.animation = "closeRegContainer 0.5s ease 1 forwards";
				}
				if(c == 2){
					contacts.style.animation = "closeRegContainer 0.5s ease 1 forwards";
				}
				if(c == 3){
					games.style.animation = "closeRegContainer 0.5s ease 1 forwards";
				}
				setTimeout(function(){
				contacts.style.display = "none";
				about.style.display = "none";
				games.style.display = "none";
				}, 400);
				setTimeout(function(){
				rules.style.display = "block";
				rules.style.animation = "openRegContainer 0.5s ease 1 forwards";
				}, 500);
				c = 1;
				break;
			}
			case 2:
			{
				probcheck = 0;
				if(c == 0){
					about.style.animation = "closeRegContainer 0.5s ease 1 forwards";
				}
				if(c == 1){
					rules.style.animation = "closeRegContainer 0.5s ease 1 forwards";
				}
				if(c == 3){
					games.style.animation = "closeRegContainer 0.5s ease 1 forwards";
				}
				setTimeout(function(){
				rules.style.display = "none";
				about.style.display = "none";
				games.style.display = "none";
				}, 400);
				setTimeout(function(){
				contacts.style.display = "block";
				contacts.style.animation = "openRegContainer 0.5s ease 1 forwards";
				}, 500);
				c = 2;
				break;
			}
			case 3:
			{
				probcheck = 0;
				if(c == 0){
					about.style.animation = "closeRegContainer 0.5s ease 1 forwards";
				}
				if(c == 1){
					rules.style.animation = "closeRegContainer 0.5s ease 1 forwards";
				}
				if(c == 2){
					contacts.style.animation = "closeRegContainer 0.5s ease 1 forwards";
				}
				setTimeout(function(){
				rules.style.display = "none";
				about.style.display = "none";
				contacts.style.display = "none";
				games.style.display = "none";
				}, 400);
				setTimeout(function(){
				games.style.display = "block";
				games.style.animation = "openRegContainer 0.5s ease 1 forwards";
				}, 500);
				c = 3;
				break;
			}
			default:
		}
	}
}

function openReg(){
	window.open("https://docs.google.com/forms/d/e/1FAIpQLSeLyR0qzQt_MIIzw4v0o-_MFu6Tirx8tOC7QlUTWpX4HsI6aw/viewform?usp=sf_link");
}
var hamCheck = 1;
function openMenu(){
	var menu = document.getElementsByClassName("links")[0];
	menu.style.display = "flex";
	setTimeout(function(){
		menu.style.transform = "translateX(0)";
	},10);
	document.getElementsByClassName("hamburger")[0].style.display = "none";
	hamCheck = 0;
}
function closeMenu(){
	  var menu = document.getElementsByClassName("links")[0];
	  menu.style.transition = "0.5s cubic-beizer(.6,.15,.89,.53)";
	menu.style.transform = "translateX(-100vw)";
	setTimeout(function(){
		document.getElementsByClassName("hamburger")[0].style.display = "block";
	}, 150);
}
