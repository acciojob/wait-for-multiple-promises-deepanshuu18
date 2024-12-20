//your JS code here. If required.
// Function to generate a random time between 1 and 3 seconds
function getRandomTime() {
  return Math.floor(Math.random() * 3) + 1; // Random between 1 and 3
}

// Function to simulate a promise that resolves after a random time
function createPromise() {
  const timeToResolve = getRandomTime();
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(timeToResolve); // Resolves with the time it took
    }, timeToResolve * 1000); // Convert seconds to milliseconds
  });
}

// Create 3 promises
const promise1 = createPromise();
const promise2 = createPromise();
const promise3 = createPromise();

// Start a timer to track the total time to resolve all promises
const startTime = Date.now();

// Use Promise.all to wait for all promises to resolve
Promise.all([promise1, promise2, promise3]).then(results => {
  // Calculate the total time to resolve all promises
  const totalTime = (Date.now() - startTime) / 1000; // Convert milliseconds to seconds

  // Remove the "Loading..." row
  document.getElementById("loadingRow").remove();

  // Get the table and add new rows with results
  const table = document.getElementById("resultTable");

  // Add new rows for each promise's result
  results.forEach((result, index) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = `Promise ${index + 1}`;
    cell2.textContent = `${result}`;
  });

  // Add a row for the total time
  const totalRow = table.insertRow();
  const cell1 = totalRow.insertCell(0);
  const cell2 = totalRow.insertCell(1);
  cell1.textContent = "Total";
  cell2.textContent = totalTime.toFixed(3); // Format to 3 decimal places
});
