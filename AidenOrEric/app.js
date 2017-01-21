alert("Are you Aiden or Eric?");

var answerPrompt = prompt("Type '1' for: Aiden, Type '2' for Eric, Type 3 for 'pizza'");

if(answerPrompt==="1"){
  alert("Hi Aiden!");
  alert("Do you like pizza?");
  alert("I like pizza.");
  alert("yummmmmmmmmmm, pizza.");
}
else if(answerPrompt==="2"){
  alert("Hi Eric!");
  alert("I heard that you wanted to eat pizza!");
  alert("That is good news because I like pizza!");
  alert("yummmmmmmmmmm, pizza.");
}
else if(answerPrompt==="3"){
  alert("You are so smart!");
  alert("Pizza is the best.");
  confirm("You win!");
}
else{
  confirm("I didn't quite understand you...");
  alert("Try Again Later");
  alert("Reload the page");
}
