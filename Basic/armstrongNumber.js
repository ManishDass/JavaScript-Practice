let n = parseInt(prompt("Enter number of terms: "));
let inputLength = String(n).length;
let sum = 0, rem=0;
let temp = n;

for (let i = 0; i < inputLength;i++)
{
  rem = n%10;
  sum += rem ** inputLength;
  n = Math.floor(n / 10);
}

if(temp == sum)
{
  document.write("The number is armstrong")
}
else
{
  document.write("The number is not armstrong")
}


