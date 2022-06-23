// Tangkap elemen dulu bos.. heee he
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');

// masukkan event, cegah reload
form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

// tangkap elemen value dari input
function checkInputs() {
	// trim untuk menghilangkan whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
	const passwordValue = password.value.trim();
	
  // logic nyah
  // bila value inputan kosong, maka..
	if(usernameValue === '') {
    // maka tampilkan tulisan
		setErrorFor(username, 'Username cannot be blank');
	} else {
    // kalo tidak jalankan fungsi ini..
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

  if(phoneValue === '') {
		setErrorFor(phone, 'Phone cannot be blank');
	} else {
		setSuccessFor(phone);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
}

// fungsi ketika error
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

// fungsi ketika sukses
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

// untuk format email. copas dari codepen.io
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// itu aja bosque.. -@tawakalmit