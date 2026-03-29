const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
const itemsLeft = document.getElementById("itemsLeft");
const clearBtn = document.getElementById("clearCompleted");

let filter = "all";

// ➤ Add task
function addTask(text) {
  const li = document.createElement("li");

  li.innerHTML = `
    <span class="task-text">${text}</span>
    <button class="delete-btn">X</button>
  `;

  list.appendChild(li);
  updateStats();
}

// ➤ Update stats
function updateStats() {
  const tasks = list.querySelectorAll("li");
  const remaining = [...tasks].filter(t => !t.classList.contains("completed")).length;
  itemsLeft.textContent = `${remaining} items left`;
}

// ➤ Apply filter
function applyFilter() {
  const tasks = list.querySelectorAll("li");

  tasks.forEach(task => {
    const isCompleted = task.classList.contains("completed");

    if (filter === "all") task.style.display = "flex";
    if (filter === "active") task.style.display = isCompleted ? "none" : "flex";
    if (filter === "completed") task.style.display = isCompleted ? "flex" : "none";
  });
}

// ➤ Add via Enter
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const text = input.value.trim();
    if (!text) return;

    addTask(text);
    input.value = "";
  }
});

// ➤ Delegation (toggle + delete + edit)
list.addEventListener("click", (e) => {

  // Delete
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
    updateStats();
    return;
  }

  // Toggle complete
  if (e.target.classList.contains("task-text")) {
    e.target.parentElement.classList.toggle("completed");
    updateStats();
    applyFilter();
  }
});

// ➤ Double-click to edit
list.addEventListener("dblclick", (e) => {
  if (!e.target.classList.contains("task-text")) return;

  const span = e.target;
  const oldText = span.textContent;

  const inputEdit = document.createElement("input");
  inputEdit.value = oldText;

  span.replaceWith(inputEdit);
  inputEdit.focus();

  // Save (Enter)
  inputEdit.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const newSpan = document.createElement("span");
      newSpan.className = "task-text";
      newSpan.textContent = inputEdit.value;

      inputEdit.replaceWith(newSpan);
    }

    // Cancel (Escape)
    if (e.key === "Escape") {
      const newSpan = document.createElement("span");
      newSpan.className = "task-text";
      newSpan.textContent = oldText;

      inputEdit.replaceWith(newSpan);
    }
  });
});

// ➤ Filter buttons
document.querySelectorAll("[data-filter]").forEach(btn => {
  btn.addEventListener("click", () => {
    filter = btn.dataset.filter;
    applyFilter();
  });
});

// ➤ Clear completed
clearBtn.addEventListener("click", () => {
  const tasks = list.querySelectorAll(".completed");
  tasks.forEach(task => task.remove());
  updateStats();
});