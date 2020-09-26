const field = document.getElementById('field')
let fieldval
const btn = document.getElementById('btn')
let result = document.getElementById('result')
const regExp = /[!@#$&*%]/g

function validator() {
	fieldval = document.getElementById('field').value

	result.innerText = fieldval

	if(fieldval.length > 3 && !fieldval.match(regExp)){
		result.style.color = 'green'
	}
	else{
		result.style.color = 'red'
	}

	document.getElementById('field').value = ''
}

btn.addEventListener('click', function(e) {
	validator()
});

field.addEventListener('keydown', function(e) {
	if(e.keyCode == 13){
		validator()
	}
	else {

	}
});