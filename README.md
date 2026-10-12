SpendWise – Interactive Budgeting Application
Project Overview

SpendWise is a personal budgeting application built using HTML, CSS, and JavaScript. It helps users manage their finances by setting a budget, recording expenses, tracking spending, and viewing their remaining balance.

The application provides an interactive dashboard that updates automatically whenever users add or delete expenses.

Improvements Made This Week

The following improvements were made to SpendWise:

Added an interactive form for recording expenses.
Added expense categories such as Food, Transport, Shopping, Bills, and Education.
Created dashboard cards displaying the total budget, total expenses, and remaining balance.
Added automatic budget alerts when spending approaches or exceeds the budget.
Implemented functionality to delete individual expenses and clear all expenses.
Added input validation to prevent invalid expense amounts.
Made the dashboard responsive for mobile devices and desktop computers.
Used browser localStorage to save expense records and budget information between page refreshes.
How Conditionals Are Used

Conditional statements (if, else if, and else) are used to make decisions based on the user's spending.

For example, the application checks whether total expenses exceed the budget. If expenses exceed the budget, an overspending warning is displayed. If spending reaches 80% of the budget, a warning informs the user that they are approaching their spending limit.

Conditionals are also used to validate user input and prevent empty descriptions or invalid amounts from being added.

How Arrays Are Used

An array named expenses stores multiple expense records. Each expense is represented by an object containing an ID, description, category, and amount.

The push() method adds new expense records to the array. The findIndex() method locates an expense, while splice() removes an expense from the array.

Using an array makes it easier to manage multiple transactions without creating separate variables for each expense.

How Loops Are Used

Loops process the expense records stored in the array.

A for loop calculates the total amount spent by adding the amounts of all recorded expenses. Another loop displays the expense records on the dashboard.

Loops make the application more efficient because the same instructions can process multiple expense records automatically.

How the DOM Is Updated

The Document Object Model (DOM) allows JavaScript to update the webpage dynamically.

The application uses methods and properties such as:

document.getElementById() to select HTML elements by their IDs.
document.querySelector() to select elements using CSS selectors.
textContent to update the text displayed on the dashboard.
document.createElement() to create new expense elements.
appendChild() to add expense elements to the webpage.
replaceChildren() to refresh the displayed expense list.

Whenever an expense is added or deleted, the dashboard recalculates the totals and updates the remaining balance and budget status without requiring a page reload.

How User Interactions Are Handled Through Events

Event listeners allow users to interact with the application.

The addEventListener() method is used to respond to the following actions:

Expense form submission: Validates user input and adds a new expense.
Budget form submission: Updates the monthly budget.
Delete button clicks: Removes a selected expense.
Clear All button clicks: Requests confirmation before deleting all expense records.

The preventDefault() method prevents form submissions from reloading the webpage, allowing JavaScript to process the information and update the dashboard dynamically.

Challenges Encountered and Solutions

Some common challenges when developing an interactive budgeting application include:

1. Validating user input

Invalid or empty expense amounts can cause incorrect calculations. Conditional statements and HTML form validation are used to ensure that descriptions are provided and amounts are greater than zero.

2. Keeping the dashboard totals accurate

Adding or deleting expenses changes the total spending. The application recalculates totals from the expenses array whenever the data changes.

3. Updating dynamically created elements

Delete buttons are created dynamically alongside expense records. Event delegation allows the expense list to handle clicks on these buttons, including buttons added after the page loads.

4. Preserving data after refreshing the page

Normally, JavaScript variables reset when a webpage reloads. Browser localStorage is used to save and restore expense records and the budget.

Update this section to reflect the specific challenges you encountered and the solutions you implemented while working on the project.

Technologies Used
HTML5 – webpage structure and forms.
CSS3 – styling and responsive layouts.
JavaScript – application logic and interactivity.
DOM Manipulation – dynamic webpage updates.
Browser localStorage – saving budget and expense data.
Git and GitHub – version control and project hosting.
How to Run the Project
Clone or download the project repository.
Open the project folder.
Open index.html in a modern web browser.
Enter a monthly budget.
Add expenses and observe how the dashboard updates.
Test the delete and clear functionality.

No additional libraries or installation steps are required.

Conclusion

SpendWise demonstrates how JavaScript can make a webpage interactive by combining conditional statements, arrays, loops, DOM manipulation, and event listeners.

The application enables users to record expenses, monitor their spending, and receive feedback about their budget status.

