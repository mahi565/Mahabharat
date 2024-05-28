document.getElementById('dateForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const dateInput = new Date(document.getElementById('date').value);
    const year = dateInput.getFullYear();
    const margashirshaStart = new Date(year, 10, 23); // November 23
    const margashirshaEnd = new Date(year, 11, 22);   // December 22

    let resultText;
    if (dateInput >= margashirshaStart && dateInput <= margashirshaEnd) {
        resultText = "The date falls within the Margashirsha month.";
    } else {
        resultText = "The date does not fall within the Margashirsha month.";
    }

    // Redirect to result page with the result as a query parameter
    window.location.href = `result.html?result=${encodeURIComponent(resultText)}`;
});
