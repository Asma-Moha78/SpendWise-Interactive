SpendWise – Interactive Budgeting Application
Project Overview

SpendWise is a personal budgeting application developed using HTML, CSS, and JavaScript. It helps users manage their finances by setting a budget, recording expenses, tracking spending, and viewing their remaining balance.

The application provides an interactive dashboard that updates automatically whenever users add or delete expenses.

Features
Set and update a monthly budget.
Record expenses with descriptions and categories.
View total budget, total expenses, and remaining balance.
Receive alerts when spending approaches or exceeds the budget.
Delete individual expenses.
Clear all recorded expenses.
Validate expense inputs.
Save budget and expense records using browser localStorage.
Responsive design for mobile devices and desktop computers.
Technologies Used
HTML5: Provides the structure of the application.
CSS3: Handles styling and responsive layouts.
JavaScript: Implements application functionality and interactivity.
DOM Manipulation: Updates webpage content dynamically.
Browser localStorage: Stores budget and expense information.
Git and GitHub: Version control and project hosting.
Netlify: Website deployment and hosting.
GitHub Repository Information

Project Name: SpendWise

Repository: https://github.com/YOUR-USERNAME/SpendWise

Live Netlify Website: https://my-spendwise-tracker.netlify.app/

Website URL: To be added after successful Netlify deployment.

How Conditionals Are Used

Conditional statements (if, else if, and else) are used to make decisions based on the user's spending.

For example, the application checks whether total expenses exceed the budget. If expenses exceed the budget, an overspending warning is displayed. If spending reaches 80% of the budget, a warning informs the user that they are approaching their spending limit.

Conditionals are also used to validate user input and prevent empty descriptions or invalid amounts from being added.

How Arrays Are Used

An array named expenses stores multiple expense records. Each expense is represented by an object containing an ID, description, category, and amount.

The push() method adds new expense records to the array. The findIndex() method locates an expense, while splice() removes an expense from the array.

Using an array makes it easier to manage multiple transactions.

How Loops Are Used

Loops process the expense records stored in the array.

A for loop calculates the total amount spent by adding the amounts of all recorded expenses. Another loop displays expense records on the dashboard.

Loops allow the application to process multiple expense records automatically.

How the DOM Is Updated

The Document Object Model (DOM) allows JavaScript to update the webpage dynamically.

The application uses methods and properties such as:

document.getElementById()
document.querySelector()
textContent
document.createElement()
appendChild()
replaceChildren()

Whenever an expense is added or deleted, the dashboard recalculates totals and updates the remaining balance and budget status without requiring a page reload.

How User Interactions Are Handled Through Events

Event listeners allow users to interact with the application.

The addEventListener() method responds to:

Expense form submission.
Budget form submission.
Delete button clicks.
Clear All button clicks.

The preventDefault() method prevents form submissions from reloading the webpage, allowing JavaScript to process information and update the dashboard dynamically.

Deployment Process Summary

SpendWise is deployed using GitHub and Netlify.

The deployment process involves:

Organizing the project files.
Uploading the project to a public GitHub repository.
Connecting the GitHub repository to Netlify.
Configuring the deployment settings.
Publishing the website using Netlify.
Customizing the Netlify website name.
Testing the live application.
Updating the project and pushing changes to GitHub.
Verifying that Netlify automatically deploys the latest changes.
Challenges Encountered and Solutions
Validating User Input

Invalid or empty expense amounts can cause incorrect calculations. Conditional statements and HTML form validation help ensure that descriptions are provided and amounts are greater than zero.

Keeping Dashboard Totals Accurate

Adding or deleting expenses changes total spending. The application recalculates totals whenever the expense data changes.

Updating Dynamically Created Elements

Delete buttons are created dynamically alongside expense records. Event delegation allows the expense list to handle clicks on these buttons.

Preserving Data After Refreshing

JavaScript variables normally reset when a webpage reloads. Browser localStorage is used to save and restore expense records and the budget.

Deployment Challenges

Deployment may involve configuring the correct publishing directory, ensuring that the homepage is correctly named, and checking that all CSS, JavaScript, and image files load correctly.

Lessons Learned

Through this project, I learned:

How to build an interactive budgeting application using JavaScript.
How to use arrays, loops, and conditional statements.
How to manipulate the DOM and handle user events.
How to store application data using localStorage.
How to create and manage GitHub repositories.
How to deploy a website using Netlify.
How continuous deployment works.
How to test and troubleshoot a live website.
How to Run the Project Locally
Clone or download the project repository.
Open the project folder.
Open index.html in a modern web browser.
Enter a monthly budget.
Add expenses and observe how the dashboard updates.
Test the delete and clear functionality.

No additional libraries or installation steps are required.

Conclusion

SpendWise demonstrates how JavaScript can make a webpage interactive by combining conditional statements, arrays, loops, DOM manipulation, and event listeners.

The application helps users record expenses, monitor their spending, and receive feedback about their budget status.

The project is being published using GitHub and Netlify to make it accessible online.
