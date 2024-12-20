container = document.getElementById("container");
input = document.getElementById("input");
add = document.getElementById("add");

task = document.createElement("div");
task.className = "task";
task.innerHTML = `
    <span class="task-name"></span>
    <button class="task-done">Done</button>
    <button class="task-postpone">Postpone</button>
`;

tasks = [];

function loadTasks() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            tasks = xhttp.responseText.split("\n");
        }
    };
    xhttp.open("GET", "tasks", true);
    xhttp.send();
}

add.onclick = function() {
    console.log(tasks);
}
