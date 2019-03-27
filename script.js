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
		"no_of_participants":"2",
		"description": ""
	}
]};
var regist = {};
var order = [];
var team_name, game_id, game_name;
function gameinfo(){
	team_name = document.getElementsByClassName('value')[0].value;
	game_name = document.getElementsByClassName('value')[1].value; 
	if ( team_name.trim().length != 0 && game_name != "Select"){
		console.log("Accept");
		console.log(team_name.trim().length);
		console.log(game_name);
		games = games.games;
		var thanks = document.getElementsByClassName('thanks')[0];
		var message = document.getElementById('message');
		thanks.style.animation = "closeRegContainer 0.5s ease 1 forwards";
		setTimeout(() => {
			
		}, 400);
		var gameinfo = document.getElementsByClassName('gameinfo')[0];
		var members = document.getElementsByClassName('members')[0];
		gameinfo.style.animation = "closeRegContainer 0.5s ease 1 forwards";
		document.getElementById('submits').style.animation = "closeRegContainer 0.5s ease 1 forwards";
		var info = new XMLHttpRequest();
		info.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
			 games = JSON.parse(this.responseText);
			 message.innerHTML = '';
			 games = games.games;
			 console.log(games);
			}
		  };
		info.open("GET", "https://bits-apogee.org/2019/arma/get_games", false);
		info.setRequestHeader('Content-Type','application/json');
		info.send();
		console.log(game_name);
		games.forEach(element => {
			console.log(element.name);
			if(game_name == element.name){
				game_id = element.id;
				games = element;
				console.log(games);
				// break;
				console.log(games);
			}
		});
		regist["team_name"] = team_name;
		regist["game_id"] = game_id;
		console.log(regist);
		setTimeout(() => {
			gameinfo.style.display = "none";
			thanks.style.display = 'none';
			message.innerHTML = '';
			document.getElementById('submits').style.display = "none";
		}, 400);
		setTimeout(() => {
			members.style.display = "block";
			var max = document.getElementById('max');
			// max.innerHTML += "5 )"
			max.innerHTML = "Members ( Required " +games.no_of_participants+ " )";
			members.style.animation = "openRegContainer 0.5s ease 1 forwards";
		}, 500);
	}
	else{
		var thanks = document.getElementsByClassName('thanks')[0];
		var message = document.getElementById('message');
		thanks.style.display = 'flex';
		message.innerHTML = 'Please fill all the fields';
		thanks.style.animation = "openRegContainer 0.5s ease 1 forwards";
	}
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
			var div = document.createElement('div');
			div.classList.add('name');
			var div2 = document.createElement('label');
			div2.innerHTML += "&emsp;";
			div2.innerHTML += " Email";
			// div2.innerHTML += "&emsp;";
			var txtBox = document.createElement("input");
			// txtBox.blur();
			txtBox.classList.add('emails');
			// txtBox.required = true;
			txtBox.setAttribute("type", "email");
			div.appendChild(div2);
			div.appendChild(txtBox);
			child.appendChild(div);
			var div = document.createElement('div');
			div.classList.add('name');
			var div2 = document.createElement('label');
			div2.innerHTML += "&emsp;";
			div2.innerHTML += " Phone No";
			// div2.innerHTML += "&emsp;";
			var txtBox = document.createElement("input");
			// txtBox.blur();
			txtBox.classList.add('contact');
			// txtBox.required = true;
			txtBox.setAttribute("type", "number");
			div.appendChild(div2);
			div.appendChild(txtBox);
			child.appendChild(div);
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
			// child.classList.add('field');
			// child.classList.add('name');
			child.innerHTML += "<h2>- Member "+x+"</h2>";
			// child.appendChild(document.createElement("br"));
			var div = document.createElement('div');
			div.classList.add('name');
			var div2 = document.createElement('label');
			div2.innerHTML += "&emsp;";
			div2.innerHTML += " Name";
			// div2.innerHTML += "&emsp;";
			var txtBox = document.createElement("input");
			// txtBox.blur();
			txtBox.classList.add('non_names');
			// txtBox.required = true;
			txtBox.setAttribute("type", "text");
			div.appendChild(div2);
			div.appendChild(txtBox);
			child.appendChild(div);
			var div = document.createElement('div');
			div.classList.add('name');
			var div2 = document.createElement('label');
			div2.innerHTML += "&emsp;";
			div2.innerHTML += " Email";
			// div2.innerHTML += "&emsp;";
			var txtBox = document.createElement("input");
			// txtBox.blur();
			txtBox.classList.add('nb_emails');
			// txtBox.required = true;
			txtBox.setAttribute("type", "email");
			div.appendChild(div2);
			div.appendChild(txtBox);
			child.appendChild(div);
			var div = document.createElement('div');
			div.classList.add('name');
			var div2 = document.createElement('label');
			div2.innerHTML += "&emsp;";
			div2.innerHTML += " Gender";
			// div2.innerHTML += "&emsp;";
			var select = document.createElement("select");
			select.classList.add('nb_gender');
			// select.required = true;
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
			div.appendChild(div2);
			div.appendChild(select);
			child.appendChild(div);
			var div = document.createElement('div');
			div.classList.add('name');
			var div2 = document.createElement('label');
			div2.innerHTML += "&emsp;";
			div2.innerHTML += " Year of Study";
			// div2.innerHTML += "&emsp;";
			var select = document.createElement("select");
			select.classList.add('nb_yos');
			// select.required = true;
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
			div.appendChild(div2);
			div.appendChild(select);
			child.appendChild(div);
			var div = document.createElement('div');
			div.classList.add('name');
			var div2 = document.createElement('label');
			div2.innerHTML += "&emsp;";
			div2.innerHTML += " Phone No";
			// div2.innerHTML += "&emsp;";
			var txtBox = document.createElement("input");
			// txtBox.blur();
			txtBox.classList.add('non_contact');
			// txtBox.required = true;
			txtBox.setAttribute("type", "number");
			div.appendChild(div2);
			div.appendChild(txtBox);
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
var submit = document.getElementsByClassName('submit')[0];
submit.addEventListener('click', gameinfo);
function register(){
	if(x == games.no_of_participants)
	{
		var check = 1;
		var members = document.getElementsByClassName('members')[0];
		var thanks = document.getElementsByClassName('thanks')[0];
		var bitsian = document.getElementsByClassName('bitsians');
		var phone = document.getElementsByClassName('contact');
		var emails = document.getElementsByClassName('emails');
		var non_conatact = document.getElementsByClassName('non_contact');
		var non_bitsian_names = document.getElementsByClassName('non_names');
		var non_bitsian_emails = document.getElementsByClassName('nb_emails');
		var non_bitsian_gender = document.getElementsByClassName('nb_gender');
		var non_bitsian_yos = document.getElementsByClassName('nb_yos');
			regist['team_members_bitsians'] = [];
			// var bitsian_member = [];
			for(let i = 0; i < emails.length; i++){
			if(emails[i].value.trim().length == 0 || phone[i].value.trim().length == 0)
			{
				check = 0;
			}
			var bitsian_member = {};
			console.log(emails.length);
			bitsian_member['email_id'] = emails[i].value;
			bitsian_member['phone'] = phone[i].value;
			console.log(bitsian_member);
			regist['team_members_bitsians'].push(bitsian_member);
			console.log(regist);

		}
		// regist['team_members_bitsians'] = bitsian_member;
		console.log(non_bitsian_names.length);
		regist['team_members_non_bitsians'] = [];
		for(let j = 0; j < non_bitsian_names.length; j++)
		{
			console.log(j);
			var non_bitsian_member = {};	
			if( non_bitsian_names[j].value.trim().length == 0 || non_bitsian_emails[j].value.trim().length == 0 || non_bitsian_gender[j].value == 'Select' || non_bitsian_yos[j].value == 'Select' || non_conatact[j].value.trim().length == 0){
				check = 0;
			}
			non_bitsian_member['name'] = non_bitsian_names[j].value;
			non_bitsian_member['email_id'] = non_bitsian_emails[j].value;
			non_bitsian_member['gender'] = non_bitsian_gender[j].value;
			non_bitsian_member['year_of_study'] = non_bitsian_yos[j].value;
			non_bitsian_member['phone'] = non_conatact[j].value;
			console.log(bitsian_member);
			regist['team_members_non_bitsians'].push(non_bitsian_member);
		}
		if(check)
		{

			console.log(regist);
			var register = new XMLHttpRequest();
			register.onreadystatechange =function(){
				if(register.status != 200){
					var message = JSON.parse(register.responseText)
					console.log(message.message);
					document.getElementById('message').innerHTML = message.message;
					setTimeout(() => {
						var thanks = document.getElementsByClassName('thanks')[0];
						thanks.style.display = "flex";
						thanks.style.animation = "openRegContainer 0.5s ease 1 forwards";
					}, 500);
				}
				else if (register.status == 200){
					var thanks = document.getElementsByClassName('thanks')[0];
					var message = document.getElementById('message');
					thanks.style.display = "flex";
					message.innerHTML = 'Thank you for registering !!';
					members.style.animation = "closeRegContainer 0.5s ease 1 forwards";
					thanks.style.animation = "openRegContainer 0.5s ease 1 forwards";
					setTimeout(() => {
						members.style.display = "none";
					}, 400);
				}
			}
			register.open('POST', "https://bits-apogee.org/2019/arma/register_team", true);
			register.setRequestHeader('Content-Type','application/json');
			register.send(JSON.stringify(regist));
		}
		else{
			var thanks = document.getElementsByClassName('thanks')[0];
			var message = document.getElementById('message');
			message.innerHTML = 'Please fill all the fields';
			thanks.style.display = "flex";
			thanks.style.animation = "openRegContainer 0.5s ease 1 forwards";
		}
	}
	else{
		var thanks = document.getElementsByClassName('thanks')[0];
		var message = document.getElementById('message');
		message.innerHTML = 'Less number of team members';
		thanks.style.display = "flex";
		thanks.style.animation = "openRegContainer 0.5s ease 1 forwards";
	}
}