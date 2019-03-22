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
	}
	if(n!=c)
	{
		var games = document.getElementsByClassName("games")[0];
		var rules = document.getElementsByClassName("rules")[0];
		var contacts = document.getElementsByClassName("contacts")[0];
		var about = document.getElementsByClassName("about")[0];
		var register = document.getElementsByClassName("register")[0];
		var problem = document.getElementsByClassName('problem')[0];
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
				if(c == 4){
					register.style.animation = "closeRegContainer 0.5s ease 1 forwards";
				}
				setTimeout(function(){
				rules.style.display = "none";
				contacts.style.display = "none";
				games.style.display = "none";
				register.style.display = "none";
				}, 400);
				setTimeout(function(){
				about.style.display = "block";
				problem.style.animation = "openRegContainer 0.5s ease 1 forwards";
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
				if(c == 4){
					register.style.animation = "closeRegContainer 0.5s ease 1 forwards";
				}
				setTimeout(function(){
				contacts.style.display = "none";
				about.style.display = "none";
				games.style.display = "none";
				register.style.display = "none";
				}, 400);
				setTimeout(function(){
				rules.style.display = "block";
				problem.style.animation = "openRegContainer 0.5s ease 1 forwards";
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
				if(c == 4){
					register.style.animation = "closeRegContainer 0.5s ease 1 forwards";
				}
				setTimeout(function(){
				rules.style.display = "none";
				about.style.display = "none";
				games.style.display = "none";
				register.style.display = "none";
				}, 400);
				setTimeout(function(){
				contacts.style.display = "block";
				problem.style.animation = "openRegContainer 0.5s ease 1 forwards";
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
				if(c == 4){
					register.style.animation = "closeRegContainer 0.5s ease 1 forwards";
				}
				setTimeout(function(){
				rules.style.display = "none";
				about.style.display = "none";
				contacts.style.display = "none";
				games.style.display = "none";
				register.style.display = "none";
				}, 400);
				setTimeout(function(){
				games.style.display = "block";
				problem.style.animation = "openRegContainer 0.5s ease 1 forwards";
				games.style.animation = "openRegContainer 0.5s ease 1 forwards";
				}, 500);
				c = 3;
				break;
			}
			case 4:
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
				if(c == 3){
					games.style.animation = "closeRegContainer 0.5s ease 1 forwards";
				}
				problem.style.animation = "closeRegContainer 0.5s ease 1 forwards";
				setTimeout(function(){
				rules.style.display = "none";
				about.style.display = "none";
				contacts.style.display = "none";
				games.style.display = "none";
				register.style.display = "none";
				}, 400);
				setTimeout(function(){
				register.style.display = "block";
				register.style.animation = "openRegContainer 0.5s ease 1 forwards";
				}, 500);
				c = 4;
				break;
			}
			default:
		}
	}
}

// function openReg(){
// 	var elem1 = document.getElementsByClassName("regContainer")[0];
// 	var elem2 = document.getElementsByClassName("register")[0];
// 	elem1.style.display = "block";
// 	elem2.style.animation = "openReg 0.5s ease 1 forwards";
// 	elem1.style.animation = "openRegContainer 0.5s ease 1 forwards";
// }
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

window.onload = function(){
	document.getElementsByClassName('gradient')[0].style.display = "none";
}
function closeReg(){
	var elem1 = document.getElementsByClassName("regContainer")[0];
	var elem2 = document.getElementsByClassName("register")[0];
	elem2.style.animation = "closeReg 0.5s ease 1 forwards";
	elem1.style.animation = "closeRegContainer 0.5s ease 1 forwards";
	setTimeout(function(){
		elem1.style.display = "none";
	}, 1000);
}
var games = {"games" : [
	{
		"id": "1",
		"name": "CS GO",
		"no_of_participants":"4",
		"description": ""
	}
]};
var regist = {};
var order = [];
var team_name, game_id, game_name;
function gameinfo(){
	var gameinfo = document.getElementsByClassName('gameinfo')[0];
	var members = document.getElementsByClassName('members')[0];
	gameinfo.style.animation = "closeRegContainer 0.5s ease 1 forwards";
	// var info = new XMLHttpRequest();
	// info.setRequestHeader('Content-Type: application/json');
	// info.onreadystatechange = function() {
	// 	if (this.readyState == 4 && this.status == 200) {
	// 	 games = JSON.parse(this.responseText);
	// 	}
	//   };
	// info.open("GET", "/get_games", true);
	// info.send();
	games = games.games;
	team_name = document.getElementsByClassName('value')[0].value;
	game_name = document.getElementsByClassName('value')[1].value; 
	console.log(game_name);
	games.forEach(element => {
		if(game_name == element.name){
			game_id = element.id;
			games = element;
			// break;
			console.log(games);
		}
	});
	regist["team_name"] = team_name;
	regist["game_id"] = game_id;
	console.log(regist);
	setTimeout(() => {
		gameinfo.style.display = "none";
	}, 400);
	setTimeout(() => {
		members.style.display = "block";
		var max = document.getElementById('max');
		max.innerHTML += "5 )"
		// max.innerHTML += games.no_of_participants+ " )";
		members.style.animation = "openRegContainer 0.5s ease 1 forwards";
	}, 500);
}

var x=0;
function addMember(){
	if(x < games.no_of_participants)
	{
		x++;
		bitsian++;
		order.push('B');
		if(bitsian == 1)
		{
			var parent = document.getElementsByClassName("bitsian")[0];
			parent.innerHTML += "<h2>BITSIAN</h2>";
			// document.getElementsByClassName("register")[0].style.opacity = 1;
			// document.getElementsByClassName("register")[0].disabled = false;
			document.getElementById('remove').style.opacity = "1";
			document.getElementById('remove').disabled = false;
			regist['team_members_bitsians']=[];
		}
		console.log(x);
		console.log(games.no_of_participants);
		if(x <= games.no_of_participants) 	//if(x <= 5)
		{
			console.log(x);
			var parent = document.getElementsByClassName("bitsian")[0];
			var child = document.createElement('div');
			// child.classList.add('name');
			child.innerHTML += "<h2>- Member "+x+"</h2>";
			child.innerHTML += "&emsp;";
			// child.appendChild(document.createElement("br"));
			child.appendChild(document.createTextNode("Email "));
			child.innerHTML += "&emsp;";
			var txtBox = document.createElement("input");
			txtBox.blur();
			txtBox.classList.add('bitsians');
			txtBox.setAttribute("type", "text");
			txtBox.required = true;
			child.appendChild(txtBox);
			parent.appendChild(child)
			parent.appendChild(document.createElement("br"));
		}
	}
}
var bitsian = 0, non_bitsian = 0;
function addNonBitsianMember(){
	if(x < games.no_of_participants)
	{
		x++;
		non_bitsian++;
		order.push('N')
		if(non_bitsian == 1)
		{
			var parent = document.getElementsByClassName("non_bitsian")[0];
			parent.innerHTML += "<h2>NON-BITSIAN</h2>";
			document.getElementsByClassName("register")[0].style.opacity = 1;
			document.getElementsByClassName("register")[0].disabled = false;
			regist['team_members_non_bitsians']=[];
		}
		if(x <= games.no_of_participants) // if(x <= 5)
		{
			var parent = document.getElementsByClassName("non_bitsian")[0];
			var child = document.createElement('div');
			child.classList.add('field');
			// child.classList.add('name');
			child.innerHTML += "<h2>- Member "+x+"</h2>";
			// child.appendChild(document.createElement("br"));
			var div  = document.createElement('div');
			div.innerHTML += "&emsp;";
			div.appendChild(document.createTextNode("Name "));
			div.innerHTML += "&emsp;";
			var txtBox = document.createElement("input");
			txtBox.blur();
			txtBox.classList.add('non_names');
			txtBox.required = true;
			txtBox.setAttribute("type", "text");
			div.appendChild(txtBox);
			div.appendChild(document.createElement("br"));
			child.appendChild(div);
			var div  = document.createElement('div');
			div.innerHTML += "&emsp;";
			div.appendChild(document.createTextNode("Email "));
			div.innerHTML += "&emsp;";
			var txtBox = document.createElement("input");
			txtBox.blur();
			txtBox.classList.add('nb_emails');
			txtBox.setAttribute("type", "text");
			txtBox.required = true;
			div.appendChild(txtBox);
			div.appendChild(document.createElement("br"));
			child.appendChild(div);
			var div  = document.createElement('div');
			div.innerHTML += "&emsp;";
			div.appendChild(document.createTextNode("Gender "));
			div.innerHTML += "&emsp;";
			var select = document.createElement("select");
			select.classList.add('nb_gender');
			select.required = true;
			var option6 = document.createElement('option');
			option6.value = 'Select';
			option6.innerHTML = 'Select';
			var option1 = document.createElement('option');
			option1.value = 'M';
			option1.innerHTML = 'M';
			var option2 = document.createElement('option');
			option2.value = 'F';
			option2.innerHTML = 'F';
			select.appendChild(option6);
			select.appendChild(option1);
			select.appendChild(option2);
			div.appendChild(select);
			div.appendChild(document.createElement("br"));
			child.appendChild(div);
			var div  = document.createElement('div');
			div.innerHTML += "&emsp;";
			div.appendChild(document.createTextNode("Year Of Study "));
			div.innerHTML += "&emsp;";
			var select = document.createElement("select");
			select.classList.add('nb_yos');
			select.required = true;
			var option6 = document.createElement('option');
			option6.value = 'Select';
			option6.innerHTML = 'Select';
			var option1 = document.createElement('option');
			option1.value = '1';
			option1.innerHTML = '1';
			var option2 = document.createElement('option');
			option2.value = '2';
			option2.innerHTML = '2';
			var option3 = document.createElement('option');
			option3.value = '3';
			option3.innerHTML = '3';
			var option4 = document.createElement('option');
			option4.value = '4';
			option4.innerHTML = '4';
			var option5 = document.createElement('option');
			option5.value = '5';
			option5.innerHTML = '5';
			select.appendChild(option6);
			select.appendChild(option1);
			select.appendChild(option2);
			select.appendChild(option3);
			select.appendChild(option4);
			select.appendChild(option5);
			div.appendChild(select);
			child.appendChild(div);
			parent.appendChild(child);
			parent.appendChild(document.createElement("br"));
		}
	}
}

function removeMember(){
	if(x > 0)
	{
		console.log(order);
		console.log(x);
		if(order[x-1] == 'B')
		{
			if(bitsian == 1){
				var parent = document.getElementsByClassName("bitsian")[0];
				parent.removeChild(parent.lastChild);
				parent.removeChild(parent.lastChild);
				parent.removeChild(parent.lastChild);
			}
			if(bitsian > 1)
			{
				var parent = document.getElementsByClassName("bitsian")[0];
				parent.removeChild(parent.lastChild);
				parent.removeChild(parent.lastChild);
				// parent.removeChild(parent.lastChild);
				// parent.removeChild(parent.lastChild);
				// parent.removeChild(parent.lastChild);
				// parent.removeChild(parent.lastChild);
			}
			bitsian--;
			x--;
		}
		else if(order[x-1] == 'N'){
			if(non_bitsian == 1){
				var parent = document.getElementsByClassName("non_bitsian")[0];
				parent.removeChild(parent.lastChild);
				parent.removeChild(parent.lastChild);
				parent.removeChild(parent.lastChild);
				// parent.removeChild(parent.lastChild);
				// parent.removeChild(parent.lastChild);
				// parent.removeChild(parent.lastChild);
			}
			if(non_bitsian > 1)
			{
				var parent = document.getElementsByClassName("non_bitsian")[0];
				parent.removeChild(parent.lastChild);
				parent.removeChild(parent.lastChild);
				// parent.removeChild(parent.lastChild);
				// parent.removeChild(parent.lastChild);
				// parent.removeChild(parent.lastChild);
				// parent.removeChild(parent.lastChild);
			}
			non_bitsian--;
			x--;
		}
		order.splice(x,1);
		console.log(order);
		console.log(x);
	}
}

function register(){
	if(x == games.no_of_participants)
	{
		var members = document.getElementsByClassName('members')[0];
		var thanks = document.getElementsByClassName('thanks')[0];
		members.style.animation = "closeRegContainer 0.5s ease 1 forwards";
		var bitsian = document.getElementsByClassName('bitsians');
		var non_bitsian_names = document.getElementsByClassName('non_names');
		var non_bitsian_emails = document.getElementsByClassName('nb_emails');
		var non_bitsian_gender = document.getElementsByClassName('nb_gender');
		var non_bitsian_yos = document.getElementsByClassName('nb_yos');
		for(let i = 0; i < bitsian.length; i++){
			var bitsian_member = {};
			bitsian_member['email_id'] = bitsian[i].value;
			regist['team_members_bitsians'].push(bitsian_member);
		}
		console.log(non_bitsian_names.length);
		for(let j = 0; j < non_bitsian_names.length; j++)
		{
			console.log(j);
			var non_bitsian_member = {};	
			non_bitsian_member['name'] = non_bitsian_names[j].value;
			non_bitsian_member['email_id'] = non_bitsian_emails[j].value;
			non_bitsian_member['gender'] = non_bitsian_gender[j].value;
			non_bitsian_member['year_of_study'] = non_bitsian_yos[j].value;
			regist['team_members_non_bitsians'].push(non_bitsian_member);
		}
		console.log(regist);
		// var register = new XMLHttpRequest();
		// register.setRequestHeader('Content-Type: application/json');
		// register.open("POST", "/arma/register_team", true);
		// register.send(team);
		setTimeout(() => {
			members.style.display = "none";
		}, 400);
		setTimeout(() => {
			thanks.style.display = "block";
			thanks.style.animation = "openRegContainer 0.5s ease 1 forwards";
		}, 500);
	}
}