

// function runs when the Submit button is clicked
function checkGrade() {

    //  Select the input elements and read their values
    // getElementById finds the element with that id in our HTML
    let nameInput = document.getElementById("studentName");
    let markInput = document.getElementById("studentMark");

    // .value reads what the user typed inside the input
    let name = nameInput.value;

    // parseInt converts the text value into a whole number
    // e.g "75" becomes 75
    let mark = parseInt(markInput.value);

    //  Select the result area and student list
    let resultDiv = document.getElementById("result");
    let studentList = document.getElementById("studentList");

    //  Validate the input before doing anything
    // Check if name is empty
    if (name === "") {
        // Update the result div to show error message
        resultDiv.textContent = "Please enter a student name.";
        // Add error class for red/orange styling
        resultDiv.className = "error";
        // Stop the function here - don't go any further
        return;
    }

    // Check if mark is not a number or out of range
    if (isNaN(mark) || mark < 0 || mark > 100) {
        resultDiv.textContent = "Please enter a valid mark between 0 and 100.";
        resultDiv.className = "error";
        return;
    }

    // Determine grade using if/else if/else
    // This matches the grading scale from the task requirements
    let grade;
    let status;

    if (mark >= 80 && mark <= 100) {
        grade = "Distinction";
        status = "PASS";
    } else if (mark >= 65 && mark <= 79) {
        grade = "Merit";
        status = "PASS";
    } else if (mark >= 50 && mark <= 64) {
        grade = "Pass";
        status = "PASS";
    } else {
        grade = "Fail";
        status = "FAIL";
    }

    //  Update the result area on the page
    // textContent sets the text inside the result div
    resultDiv.textContent = name + " — " + status + " (" + grade + ") with a mark of " + mark + "%";

    // Add pass or fail class for green/red styling
    if (status === "PASS") {
        resultDiv.className = "pass";
    } else {
        resultDiv.className = "fail";
    }

    //  Add student to the running list
    // createElement creates a new <li> element
    let listItem = document.createElement("li");

    // Create the badge span element
    let badge = document.createElement("span");

    // Set badge text and class based on pass or fail
    if (status === "PASS") {
        badge.textContent = status + " — " + grade;
        badge.className = "badge-pass";
    } else {
        badge.textContent = status;
        badge.className = "badge-fail";
    }

    // Set the name and mark text in the list item
    listItem.textContent = name + " — " + mark + "%  ";

    // appendChild adds the badge inside the list item
    listItem.appendChild(badge);

    // appendChild adds the list item to the student list
    studentList.appendChild(listItem);

    // STEP 7: Clear the inputs after submission
    nameInput.value = "";
    markInput.value = "";
}