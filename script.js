"use strict";

// Store multiple expense records in an array.
let expenses = [];
let budget = 5000;

// Restore saved data when available.
try {
  const savedExpenses = localStorage.getItem("spendwise-expenses");
  const savedBudget = localStorage.getItem("spendwise-budget");

  if (savedExpenses !== null) {
    const parsedExpenses = JSON.parse(savedExpenses);

    if (Array.isArray(parsedExpenses)) {
      expenses = parsedExpenses.filter((expense) =>
        expense &&
        Number.isFinite(expense.id) &&
        typeof expense.description === "string" &&
        typeof expense.category === "string" &&
        Number.isFinite(expense.amount) &&
        expense.amount > 0
      );
    }
  }

  if (
    savedBudget !== null &&
    Number.isFinite(Number(savedBudget)) &&
    Number(savedBudget) > 0
  ) {
    budget = Number(savedBudget);
  }
} catch (error) {
  // Continue with default values if saved data is invalid.
  expenses = [];
  budget = 5000;
}

// Select HTML elements using the DOM.
const budgetForm = document.getElementById("budget-form");
const budgetInput = document.getElementById("budget");
const expenseForm = document.getElementById("expense-form");
const descriptionInput = document.getElementById("description");
const categoryInput = document.getElementById("category");
const amountInput = document.getElementById("amount");
const expenseList = document.getElementById("expense-list");
const formMessage = document.getElementById("form-message");
const clearButton = document.getElementById("clear-expenses");

// Display today's date.
document.getElementById("today").textContent =
  new Date().toLocaleDateString("en-KE", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });

// Format money as Kenyan shillings.
function formatMoney(amount) {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES"
  }).format(amount);
}

// Save the array and budget in the browser.
function saveData() {
  try {
    localStorage.setItem("spendwise-expenses", JSON.stringify(expenses));
    localStorage.setItem("spendwise-budget", String(budget));
  } catch (error) {
    showMessage(
      "Your changes work for this session, but could not be saved.",
      "error"
    );
  }
}

// Calculate the total expenses using a loop.
function calculateTotal() {
  let total = 0;

  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
  }

  return total;
}

// Display feedback messages on the page.
function showMessage(message, type) {
  formMessage.textContent = message;
  formMessage.className = "form-message " + type;
}

// Update the dashboard and expense list.
function updateDashboard() {
  const total = calculateTotal();
  const remaining = budget - total;

  // Update summary cards in the DOM.
  document.getElementById("total-budget").textContent =
    formatMoney(budget);

  document.getElementById("total-expenses").textContent =
    formatMoney(total);

  document.getElementById("remaining").textContent =
    formatMoney(remaining);

  document.getElementById("expense-count").textContent =
    expenses.length + (expenses.length === 1 ? " record" : " records");

  // Use conditionals to determine budget status.
  const statusPanel = document.querySelector(".status-panel");
  const statusIcon = document.getElementById("status-icon");
  const statusTitle = document.getElementById("status-title");
  const statusMessage = document.getElementById("status-message");

  statusPanel.classList.remove("warning", "danger");

  if (total > budget) {
    statusPanel.classList.add("danger");
    statusIcon.textContent = "!";
    statusTitle.textContent = "Budget exceeded!";
    statusMessage.textContent =
      "You have overspent by " + formatMoney(total - budget) +
      ". Review your expenses to get back on track.";
  } else if (total >= budget * 0.8) {
    statusPanel.classList.add("warning");
    statusIcon.textContent = "!";
    statusTitle.textContent = "Approaching your budget limit";
    statusMessage.textContent =
      "You have used " + Math.round((total / budget) * 100) +
      "% of your budget. " + formatMoney(remaining) +
      " remaining.";
  } else if (total > 0) {
    statusIcon.textContent = "✓";
    statusTitle.textContent = "You're on track!";
    statusMessage.textContent =
      "You have used " + Math.round((total / budget) * 100) +
      "% of your budget. " + formatMoney(remaining) +
      " remaining.";
  } else {
    statusIcon.textContent = "✓";
    statusTitle.textContent = "Your budget is ready";
    statusMessage.textContent =
      "Add an expense to start tracking your spending.";
  }

  // Clear the old list before displaying updated records.
  expenseList.replaceChildren();

  // Handle an empty array.
  if (expenses.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "empty-state";
    emptyMessage.textContent =
      "No expenses yet. Add your first expense!";
    expenseList.appendChild(emptyMessage);
    return;
  }

  // Loop through the array to display every expense.
  for (let i = expenses.length - 1; i >= 0; i--) {
    const expense = expenses[i];

    const item = document.createElement("article");
    item.className = "expense-item";

    const details = document.createElement("div");
    details.className = "expense-details";

    const name = document.createElement("strong");
    name.textContent = expense.description;

    const category = document.createElement("span");
    category.textContent = expense.category;

    const actions = document.createElement("div");
    actions.className = "expense-actions";

    const amount = document.createElement("span");
    amount.className = "expense-amount";
    amount.textContent = formatMoney(expense.amount);

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label",
      "Delete " + expense.description);
    deleteButton.dataset.id = String(expense.id);

    details.append(name, category);
    actions.append(amount, deleteButton);
    item.append(details, actions);
    expenseList.appendChild(item);
  }
}

// Handle the expense form submission.
expenseForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const description = descriptionInput.value.trim();
  const category = categoryInput.value;
  const amount = Number(amountInput.value);

  // Validate user input with conditional statements.
  if (description === "") {
    showMessage("Please enter an expense description.", "error");
    return;
  }

  if (!Number.isFinite(amount) || amount <= 0) {
    showMessage("Enter an amount greater than zero.", "error");
    return;
  }

  // Add a new record to the array.
  expenses.push({
    id: Date.now(),
    description: description,
    category: category,
    amount: Math.round(amount * 100) / 100
  });

  saveData();
  updateDashboard();

  expenseForm.reset();
  descriptionInput.focus();

  showMessage("Expense added successfully!", "success");
});

// Handle budget updates.
budgetForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const newBudget = Number(budgetInput.value);

  if (!Number.isFinite(newBudget) || newBudget <= 0) {
    alert("Please enter a budget greater than zero.");
    return;
  }

  budget = Math.round(newBudget * 100) / 100;
  saveData();
  updateDashboard();
});

// Handle clicks on dynamically created Delete buttons.
expenseList.addEventListener("click", function (event) {
  const button = event.target.closest(".delete-button");

  if (!button || !expenseList.contains(button)) {
    return;
  }

  const id = Number(button.dataset.id);

  // Find the matching record and remove it from the array.
  const index = expenses.findIndex((expense) => expense.id === id);

  if (index !== -1) {
    expenses.splice(index, 1);
    saveData();
    updateDashboard();
    showMessage("Expense deleted successfully.", "success");
  }
});

// Handle clearing all expense records.
clearButton.addEventListener("click", function () {
  if (expenses.length === 0) {
    showMessage("There are no expenses to clear.", "error");
    return;
  }

  const confirmed = window.confirm(
    "Are you sure you want to delete all expenses?"
  );

  if (confirmed) {
    expenses = [];
    saveData();
    updateDashboard();
    showMessage("All expenses have been cleared.", "success");
  }
});

// Load the initial dashboard.
budgetInput.value = String(budget);
updateDashboard();