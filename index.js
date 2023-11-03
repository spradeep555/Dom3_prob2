// fill in javascript code here
document.addEventListener("DOMContentLoaded", function () {
    const doctorForm = document.getElementById("doctorForm");
    const doctorTable = document.getElementById("doctorTable");
  
    doctorForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const docID = document.getElementById("docID").value;
      const dept = document.getElementById("dept").value;
      const exp = parseInt(document.getElementById("exp").value);
      const email = document.getElementById("email").value;
      const mbl = document.getElementById("mbl").value;
  
      let role;
      if (exp > 5) {
        role = "Senior";
      } else if (exp >= 2 && exp <= 5) {
        role = "Junior";
      } else {
        role = "Trainee";
      }
  
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${name}</td>
        <td>${docID}</td>
        <td>${dept}</td>
        <td>${exp}</td>
        <td>${email}</td>
        <td>${mbl}</td>
        <td>${role}</td>
        <td><button class="delete">Delete</button></td>
      `;
  
      doctorTable.appendChild(newRow);
  
      doctorForm.reset();
    });
  
    doctorTable.addEventListener("click", function (event) {
      if (event.target.classList.contains("delete")) {
        const row = event.target.closest("tr");
        row.remove();
      }
    });
  });
  

