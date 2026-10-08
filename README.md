# SpendWise - Interactive Financial Dashboard Shell

SpendWise is a personal finance dashboard designed to help users track monthly spending across core categories, evaluate budget consumption, and monitor remaining balances.

---

## What SpendWise Does

SpendWise provides an interactive, responsive layout for visual expense management. In this version, JavaScript powers background calculation logic by collecting budget inputs from the user, processing totals across key spending categories, calculating remaining account balances, and logging a detailed financial summary to the browser console.

---

## JavaScript Concepts Implemented

The application integrates foundational JavaScript principles:

1. **DOM Scripting Setup**: Properly linked `script.js` executed asynchronously with `defer` to ensure non-blocking layout rendering.
2. **Variables & Data Types**: Declaration of primitive values (`String`, `Number`) using block-scoped `const` and `let` keywords.
3. **Data Type Conversion**: Conversion of string inputs from prompt boxes into numerical floats using `parseFloat()`.
4. **User Input Collection**: Browser prompt dialogs for user input capture.
5. **Mathematical Operations**: Arithmetic operators (`+`, `-`, `/`, `*`) used for financial aggregation and ratio calculations.
6. **Reusable Functions**: Pure utility functions with parameter handling and return statements.
7. **Control Flow**: Conditional logic (`if...else if...else`) evaluating budget status (safe, maxed out, or overspent).
8. **Formatted Console Output**: Multi-line template literals (``` `` ```) and `console.log()` / `console.warn()` statements.

---

## How Variables Are Used

Variables hold state throughout the application execution lifecycle:

* **User Information**: `userName` stores the user's name as a string.
* **Budget Limits**: `monthlyBudget` stores the main budget cap as a number.
* **Category Expenses**: Variables such as `foodExpense`, `transportExpense`, `housingExpense`, `entertainmentExpense`, and `utilitiesExpense` store numerical values entered by the user.
* **Computed Totals**: `totalExpenses`, `remainingBalance`, and `percentageSpent` store output metrics calculated by functions.

---

## How User Input Is Collected

User inputs are gathered dynamically upon page load using JavaScript's native `prompt()` dialogs:

1. The user inputs their target monthly income/budget.
2. Prompts collect numerical spending values across 5 spending categories.
3. Input strings are parsed using `parseFloat()` to convert text strings into numbers. If a prompt is canceled or left blank, a fallback operator (`|| 0`) prevents `NaN` calculation errors.

---

## How Calculations Are Performed

Calculations are computed using JavaScript arithmetic operations:

* **Total Expenses**: Sums all category expenses:
  $$\text{Total Expenses} = \text{Food} + \text{Transport} + \text{Housing} + \text{Entertainment} + \text{Utilities}$$
* **Remaining Balance**: Subtracts total expenses from the user's monthly budget:
  $$\text{Remaining Balance} = \text{Monthly Budget} - \text{Total Expenses}$$
* **Budget Percentage**: Determines percentage of total budget consumed:
  $$\text{Percentage Spent} = \left(\frac{\text{Total Expenses}}{\text{Monthly Budget}}\right) \times 100$$

---

## How Functions Help Organize the Code

Functions isolate distinct responsibilities, keeping the code modular, readable, and maintainable:

* `calculateTotalExpenses()`: Pure function that handles adding spending categories together.
* `calculateRemainingBalance()`: Focuses exclusively on budget subtraction math.
* `calculatePercentageSpent()`: Contains validation logic to prevent division by zero errors when determining percentage usage.
* `displayConsoleResults()`: Handles console string formatting, template literal rendering, and conditional warning alerts.
* `runSpendWiseTracker()`: Acts as the main controller function coordinating input prompts, function invocation, and output logging.