    function getFormvalue(event) {
      event.preventDefault(); // prevent page reload

      // Get values
      let fname = document.querySelector('input[name="fname"]').value.trim();
      let lname = document.querySelector('input[name="lname"]').value.trim();

      // Handle empty fields
      if (fname === "" || lname === "") {
        alert("Please enter both First Name and Last Name");
        return;
      }

      // Display full name
      alert(fname + " " + lname);
    }