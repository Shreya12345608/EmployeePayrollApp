//UC9-validate name
// textContent property sets or returns the text content of the specified node, and all its descendants.
const text = document.querySelector('#name');

const textError = document.querySelector('.text-error');
//this will throw an event showing that name is incorrect or nothing

text.addEventListener('input', function () 
{
    //regex for Name
    let nameRegex = RegExp('^[A-Z]{1}[A-Za-z]{2,}$');
    if (nameRegex.test(text.value)) 
    {
        textError.textContent = "";
    }
    else 
    {
        textError.textContent = "Name is incorrect";
    }
});