document.querySelector('#Check').addEventListener('click', Check)

function Check() {

  const Day = document.querySelector('#Day').value

  //Conditionals go here

  if (Day === "Monday" || Day === "Wednesday" || Day === "monday" || Day === "wednesday") {
  document.getElementById("Visualizer").innerHTML = "Work work work work work!";
} else if (Day === "Tuesday" || Day === "Thursday" || Day === "tuesday" || Day === "thursday") {
  document.getElementById("Visualizer").innerHTML = "Carry the Boats and Logs!";
} else if (Day === "Friday" || Day === "friday") {
  document.getElementById("Visualizer").innerHTML = "Fade into the Night...";
} else if (Day === "Saturday" || Day === "saturday") {
  document.getElementById("Visualizer").innerHTML = "Start typin'...";
} else if (Day === "Sunday" || Day === "sunday") {
  document.getElementById("Visualizer").innerHTML = "Finish typin'...";
} else {
  document.getElementById("Visualizer").innerHTML = "Check yo self before you wreck yo self";
}

}
