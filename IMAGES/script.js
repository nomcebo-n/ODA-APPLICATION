function filterCourses() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let courses = document.querySelectorAll("#courseList .card");
  courses.forEach(course => {
    if (course.textContent.toLowerCase().includes(input)) {
      course.style.display = "block";
    } else {
      course.style.display = "none";
    }
  });
}

function checkQuiz() {
  let score = 0;
  if (document.querySelector('input[name="q1"]:checked')?.value === "A") score++;
  if (document.querySelector('input[name="q2"]:checked')?.value === "B") score++;
  document.getElementById("quizResult").textContent = "You scored " + score + "/2";
}
