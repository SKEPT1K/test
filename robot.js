const input = [1, 2, 4, 1, 5];
var position = [0, 0];
var visited = [];
var actions = ["up", "right", "down", "left"];

robotWalk(input, position, visited);

function robotWalk(input, position, visited) {
  input.forEach(function(value, index) {
    if(index > actions.length - 1){
      index = index - actions.length;
    }
    move(value, position, visited, actions[index]);
  });
  console.log("Done moving! " + position);
  return position
}

function move(value, position, visited, action) {
  for (var i = 1; i <= value; i++) {
    console.log(action)
    switch (action) {
      case "up":
        position[1] += 1;
        break;
      case "right":
        position[0] += 1;
        break;
      case "down":
        position[1] -= 1;
        break;
      case "left":
        position[0] -= 1;
        break;
    }
    if(visited.indexOf(String(position[0]) + String(position[1])) >= 0) {
      console.log("I've already been here! " + position);
      return position
    } else {
      visited.push(String(position[0]) + String(position[1]));
    }
  }
}
