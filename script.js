// ==========================================================================
// SpendWise - Core JavaScript Application Logic
// ==========================================================================

// --- 1. REUSABLE CALCULATION FUNCTIONS ---

/**
 * Sums individual category expenses to return total monthly expenditure.
 * @param {number} food 
 * @param {number} transport 
 * @param {number} housing 
 * @param {number} entertainment 
 * @param {number} utilities 
 * @returns {number} Total expenses sum
 */
function calculateTotalExpenses(food, transport, housing, entertainment, utilities) {
    return food + transport + housing + entertainment + utilities;
}

/**
 * Calculates remaining monthly balance.
 * @param {number} totalBudget 
 * @param {number} totalExpenses 
 * @returns {number} Remaining balance
 */
function calculateRemainingBalance(totalBudget, totalExpenses) {
    return totalBudget - totalExpenses;
}

/**
 * Calculates percentage of budget consumed.
 * @param {number} totalExpenses 
 * @param {number} totalBudget 
 * @returns {number} Percentage (0 - 100)
 */
function calculatePercentageSpent(totalExpenses, totalBudget) {
    if (totalBudget <= 0) return 0;
    return (totalExpenses / totalBudget) * 100;
}

/**
 * Formats and outputs budget calculations to the browser console.
 */
function displayConsoleResults(userName, monthlyBudget, totalExpenses, remainingBalance, percentageSpent) {
    console.log("==================================================");
    console.log(`  SPENDWISE FINANCIAL SUMMARY: ${userName.toUpperCase()}`);
    console.log("==================================================");
    console.log(`Total Monthly Budget: $${monthlyBudget.toFixed(2)}`);
    console.log(`Total Expenses:       $${totalExpenses.toFixed(2)}`);
    console.log(`Remaining Balance:    $${remainingBalance.toFixed(2)}`);
    console.log(`Budget Usage:         ${percentageSpent.toFixed(1)}%`);
    console.log("--------------------------------------------------");

    if (remainingBalance < 0) {
        console.warn("⚠️ WARNING: You have overspent your monthly budget!");
    } else if (remainingBalance === 0) {
        console.log("ℹ️ NOTICE: You have spent exactly 100% of your allocated budget.");
    } else {
        console.log("✅ GREAT JOB: You are currently within your monthly budget.");
    }
    console.log("==================================================");
}

// --- 2. APPLICATION CONTROLLER & INPUT COLLECTION ---

function runSpendWiseTracker() {
    console.log("Initializing SpendWise Interactive Prompt...");

    // Collect user name and total budget
    const userNameInput = prompt("Welcome to SpendWise! Enter your name:", "Musin Ismail");
    const userName = userNameInput ? userNameInput.trim() : "User";

    const budgetPrompt = prompt(`Hello ${userName}, enter your total monthly budget ($):`, "3500");
    const monthlyBudget = parseFloat(budgetPrompt) || 0;

    // Collect individual expense values
    const foodExpense = parseFloat(prompt("Enter expense amount for Food & Dining ($):", "470")) || 0;
    const transportExpense = parseFloat(prompt("Enter expense amount for Transportation ($):", "180")) || 0;
    const housingExpense = parseFloat(prompt("Enter expense amount for Housing & Rent ($):", "1200")) || 0;
    const entertainmentExpense = parseFloat(prompt("Enter expense amount for Entertainment ($):", "184")) || 0;
    const utilitiesExpense = parseFloat(prompt("Enter expense amount for Utilities ($):", "166")) || 0;

    // Perform calculations using functions
    const totalExpenses = calculateTotalExpenses(
        foodExpense,
        transportExpense,
        housingExpense,
        entertainmentExpense,
        utilitiesExpense
    );
    const remainingBalance = calculateRemainingBalance(monthlyBudget, totalExpenses);
    const percentageSpent = calculatePercentageSpent(totalExpenses, monthlyBudget);

    // Display formatted results in browser console
    displayConsoleResults(userName, monthlyBudget, totalExpenses, remainingBalance, percentageSpent);
}

// Automatically trigger script execution when the webpage loads
window.addEventListener("DOMContentLoaded", () => {
    console.log("SpendWise script linked successfully.");
    // Small delay ensures DOM renders prior to modal prompts
    setTimeout(runSpendWiseTracker, 400);
});