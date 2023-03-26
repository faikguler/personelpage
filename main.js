
const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  console.log(`Name Surname: ${name} E-Mail: ${email} Message: ${message}`);
  document.getElementById("messagebox").innerHTML = `Your message has been sent. <br>Name Surname: ${name} -  E-Mail: ${email} <br> Message: ${message}`;
  document.getElementById("messagebox").style.backgroundColor="#66FF00";

  form.reset();
  alert('Your message has been sent. Thanks!');
});
