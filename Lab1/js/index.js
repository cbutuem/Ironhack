// Iteration 1: Names and Input
//
const hacker1 = "Edlemon";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Madagascar";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if(hacker1.length != hacker2.length)
{
if (hacker1.length > hacker2.length)
{
console.log (`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else
{
console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
}

if (hacker1.length == hacker2.length)
{
console.log (`Wow, you both have equally long names, ${hacker1.length} characters!.`);
}

// Iteration 3: Loops
// Nome UPPER 1 
  function nameupper(hacker1){
let nameup = "";

for (let i = 0; i < hacker1.length; i++)
{
  nameup += hacker1[i].toUpperCase();
  nameup += " ";
}
  console.log(nameup);
}
nameupper(hacker1);

// Name BACK 2
function nameback(hacker2){
let nameup = "";

for (let i = hacker1.length; i >= 0 ; i--)
{
  nameup += hacker2[i];
}
  console.log(nameup);
}
nameback(hacker2);

// lexicographic order 3
if (hacker1 > hacker2)
{
  console.log ("The driver's name goes first.");
}
else if (hacker2 > hacker1)
{
  console.log ("Yo, the navigator goes first definitely.");
}
if (hacker1 == hacker2)
{
  console.log ("What?! You both have the same name?");
}

// BONUS 1 
const loren = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const alpha = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let i = 0;
let words = 0;
while (i < loren.length)
  {
    if (alpha.indexOf(loren[i]) < 0)
    {
      if (alpha.indexOf(loren[i + 1]) < 0)
      {
        i++;
      }
      words++;
    }
    i++;
  }
console.log(words - 1 );