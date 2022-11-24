let userInput = parseInt(prompt("Enter number of terms: "))

let n1 = 0, n2 = 1, sum;

while(userInput > 0)
{
  sum = n1 + n2;
  document.write(n1," ")
  n1 = n2;
  n2 = sum;
  userInput--;
}
