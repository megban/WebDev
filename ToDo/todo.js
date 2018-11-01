var userTask = prompt("What would you like to do?");
var arr = ["Hello", "World"];
while(userTask != "quit")
{
  if(userTask == "add")
  {
    addTodo();
  }
  else if (userTask == "list") {
    listTodo();
  }
  else if(userTask == "delete")
  {
    deleteTodo();
  }
  userTask = prompt("What would you like to do?");
}

function addTodo()
{
  var item = prompt("What do you want to add?");
  arr.push(item);
}

function listTodo()
{
  arr.forEach(function(el, i, arr)
  {
    console.log("["+i+"]: " +  el);
  })
}

function deleteTodo()
{
  var i = prompt("What do you want to delete?");
  arr.splice(i, 1);
}
