
/* ==========================================
   1. SCHOOL INFORMATION VARIABLES
========================================== */

const schoolName =
    "FRANCISCO G. NEPOMUCENO MEMORIAL HIGH SCHOOL";

const schoolAddress =
    "Capas, Tarlac, Philippines";

const contactNumber =
    "Please contact the school administration";

const schoolType =
    "Public Senior High School";


/* ==========================================
   2. JAVASCRIPT DATA TYPES
========================================== */

// STRING
let schoolLevel = "Senior High School";

// NUMBER
let totalStudents = 1000;
let schoolCapacity = 1200;

// BOOLEAN
let enrollmentOpen = true;

// ARRAY
const schoolPrograms = [
    "Senior High School Program",
    "Special Needs Education (SNED) Program",
    "Career Immersion Program",
    "Content-Based Integration (CBI)",
    "Academic Development Program",
    "Leadership Training Program",
    "Clubs and Organizations"
];

// SCHOOL ACTIVITIES ARRAY
const schoolActivities = [
    "Recognition Day",
    "Intramurals",
    "Buwan ng Wika Celebration",
    "Cultural Dance and Theater Performances",
    "Science and Technology Exhibits",
    "Academic Competitions",
    "Leadership Training",
    "Community Outreach Programs",
    "Career Outfit Showcase",
    "CookFest Event"
];


/* ==========================================
   3. SCHOOL INFORMATION FUNCTION
========================================== */

function displaySchoolInfo() {

    document.getElementById("schoolName").textContent =
        schoolName;

    document.getElementById("schoolAddress").textContent =
        schoolAddress;

    document.getElementById("schoolContact").textContent =
        contactNumber;

    document.getElementById("schoolType").textContent =
        schoolType;

    document.getElementById("studentCount").textContent =
        totalStudents.toLocaleString();

    document.getElementById("programCount").textContent =
        schoolPrograms.length;

    document.getElementById("activityCount").textContent =
        schoolActivities.length;
}


/* ==========================================
   4. OPERATORS
   ARITHMETIC AND COMPARISON OPERATORS
========================================== */

function calculateCapacity() {

    // ARITHMETIC OPERATOR: SUBTRACTION
    let availableSlots = schoolCapacity - totalStudents;

    // ARITHMETIC OPERATOR: DIVISION AND MULTIPLICATION
    let percentage =
        (totalStudents / schoolCapacity) * 100;

    // COMPARISON OPERATOR
    let isFull = totalStudents >= schoolCapacity;

    document.getElementById("capacityInfo").innerHTML =
        "Total Capacity: " + schoolCapacity.toLocaleString() +
        "<br>Currently Enrolled: " + totalStudents.toLocaleString() +
        "<br>Available Slots: " + availableSlots.toLocaleString();

    document.getElementById("capacityPercentage").textContent =
        percentage.toFixed(1) + "%";

    document.getElementById("progressFill").style.width =
        Math.min(percentage, 100) + "%";

    if (isFull) {

        document.getElementById("progressFill").style.background =
            "#e74c3c";

    }
}


/* ==========================================
   5. CONDITIONAL STATEMENTS
   IF, ELSE IF, ELSE
========================================== */

function checkEnrollment() {

    const status = document.getElementById("enrollmentStatus");

    // LOGICAL AND COMPARISON OPERATORS
    if (enrollmentOpen === true &&
        totalStudents < schoolCapacity) {

        status.textContent =
            "✓ Enrollment is currently OPEN!";

        status.style.color = "#087b47";

    }

    else if (enrollmentOpen === true &&
             totalStudents >= schoolCapacity) {

        status.textContent =
            "⚠ Enrollment is open, but school capacity is full.";

        status.style.color = "#d97706";

    }

    else {

        status.textContent =
            "✕ Enrollment is currently CLOSED.";

        status.style.color = "#dc2626";

    }
}


/* ==========================================
   STUDENT ELIGIBILITY CHECKER
========================================== */

function checkEligibility() {

    let age = Number(
        document.getElementById("studentAge").value
    );

    let grade = document.getElementById("gradeLevel").value;

    let result =
        document.getElementById("eligibilityResult");

    // VALIDATE INPUT
    if (!Number.isInteger(age) || age < 1 || age > 100 ||
        grade === "") {

        result.textContent =
            "Please enter a valid age and select a grade level.";

        result.style.color = "#dc2626";

    }

    // CHECK STUDENT ELIGIBILITY
    else if (age >= 15 &&
             (grade === "11" || grade === "12")) {

        result.textContent =
            "✓ You meet the basic age and grade-level requirements for this eligibility check!";

        result.style.color = "#087b47";

    }

    else {

        result.textContent =
            "You do not meet the basic requirements for this eligibility check. Please contact the school for guidance.";

        result.style.color = "#dc2626";

    }

}


/* ==========================================
   6. SWITCH STATEMENT
   SCHOOL ANNOUNCEMENTS
========================================== */

function showAnnouncement(type) {

    let title = "";
    let message = "";

    switch (type) {

        case "enrollment":

            title = "🎓 Enrollment Announcement";

            message =
                "Students and parents are encouraged to contact the school administration for the latest enrollment schedules, requirements, and procedures.";

            break;


        case "activities":

            title = "🎭 School Activities Announcement";

            message =
                "Students are encouraged to participate in school activities, competitions, cultural presentations, and extracurricular programs.";

            break;


        case "events":

            title = "📅 School Events Announcement";

            message =
                "Stay updated with upcoming school celebrations, academic competitions, special events, and other important school activities.";

            break;


        default:

            title = "School Announcement";

            message =
                "No announcement is currently available.";

    }

    document.getElementById("announcementTitle").textContent =
        title;

    document.getElementById("announcementResult").textContent =
        message;

}


/* ==========================================
   7. LOOPING STRUCTURES
   FOR LOOP - SCHOOL PROGRAMS
========================================== */

function displayPrograms() {

    let output = "";

    // FOR LOOP
    for (let i = 0; i < schoolPrograms.length; i++) {

        output +=
            "<li>🎓 " + schoolPrograms[i] + "</li>";

    }

    document.getElementById("programList").innerHTML =
        output;

}


/* ==========================================
   WHILE LOOP - SCHOOL ACTIVITIES
========================================== */

function displayActivities() {

    let output = "";

    let i = 0;

    // WHILE LOOP
    while (i < schoolActivities.length) {

        output +=
            "<li>⭐ " + schoolActivities[i] + "</li>";

        i++;

    }

    // CREATE AN ACTIVITY LIST ON THE WEBPAGE
    const activitySection =
        document.getElementById("activities");

    const activitySummary =
        document.createElement("div");

    activitySummary.className = "activity-summary";

    activitySummary.innerHTML =
        "<h3>Our Featured School Activities</h3>" +
        "<ul>" + output + "</ul>";

    activitySection.appendChild(activitySummary);

}


/* ==========================================
   DO-WHILE LOOP - WELCOME MESSAGE
========================================== */

function displayWelcomeMessage() {

    let count = 0;

    let message = "";

    // DO-WHILE LOOP
    do {

        message =
            "Welcome to " + schoolName +
            "! Thank you for visiting our webpage.";

        count++;

    } while (count < 1);

    console.log(message);

}


/* ==========================================
   8. CURRENT YEAR
========================================== */

function displayCurrentYear() {

    let currentYear = new Date().getFullYear();

    document.getElementById("currentYear").textContent =
        currentYear;

}


/* ==========================================
   9. INITIALIZE ALL FUNCTIONS
========================================== */

function initializeWebsite() {

    displaySchoolInfo();

    calculateCapacity();

    checkEnrollment();

    displayPrograms();

    displayActivities();

    displayWelcomeMessage();

    displayCurrentYear();

}

// CALL THE MAIN FUNCTION
initializeWebsite();
