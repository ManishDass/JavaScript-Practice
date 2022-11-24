function validate()
{
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("msg");

  let flag = false;

  if(email.includes('@'))
  {
    if (email.includes('.'))
    {
    flag = true;
    }
  }

  if(flag)
  {
    msg.innerText = "Form Submitted Successfully.";
    msg.style.color = "green";
  }
  else
  {
    msg.style.color = "red";
    msg.innerText = "Email must include '@' and '.'";
  }
  
}

