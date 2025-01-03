document.getElementById("sortButton").addEventListener("click", () => {
    const leaderboardBody = document.getElementById("leaderboardBody");
    if (!leaderboardBody) {
        console.error("Leaderboard body not found!");
        return;
    }

    // Get all rows as an array
    const rows = Array.from(leaderboardBody.querySelectorAll("tr"));

    // Check if rows exist
    if (rows.length === 0) {
        console.warn("No rows to sort in the leaderboard.");
        return;
    }

    // Sort rows based on the score in the third column (index 2)
    rows.sort((a, b) => {
        const scoreA = parseInt(a.cells[2]?.textContent || 0, 10); // Fallback to 0 if invalid
        const scoreB = parseInt(b.cells[2]?.textContent || 0, 10); // Fallback to 0 if invalid
        return scoreB - scoreA; // Descending order
    });

    // Clear and re-append rows in sorted order
    leaderboardBody.innerHTML = ""; // Clear existing rows
    rows.forEach(row => leaderboardBody.appendChild(row)); // Append sorted rows
});
