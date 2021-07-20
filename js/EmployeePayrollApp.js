// UC9:-Set Event Listener on salary Range to display appropriate value
//querySelector() method returns the first element that matches a specified CSS selector(s) in the document.
//making range button synchronised with values of user
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
//in range button the output shown should always be equal to value the user is updating
output.textContent = salary.value;
salary.addEventListener('input', function () 
{
    output.textContent = salary.value;
});