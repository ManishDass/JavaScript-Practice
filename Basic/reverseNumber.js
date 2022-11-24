let num = parseInt(prompt("Enter a number: "))
let res = 0, rem = 0

while(num>0)
{
  rem = num % 10
  res = res * 10 + rem
  num = Math.floor(num / 10)
}

document.write(res)