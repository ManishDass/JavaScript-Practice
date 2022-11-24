let userInput = prompt("Enter any word: ")
let counter = userInput.length, temp

for(let i=0;i<userInput.length/2;i++)
{
  temp = userInput[i]
  userInput[i] = userInput[counter]
  userInput[counter] = temp
  counter--
}

for (let i = 0; i < userInput.length; i++) 
{
  document.write(userInput[i])
}
