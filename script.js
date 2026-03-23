 function getFormvalue(event) {
      event.preventDefault(); // prevent page reload

      const fname = document.getElementsByName("fname")[0].value.trim();
      const lname = document.getElementsByName("lname")[0].value.trim();

      const fullName = fname + " " + lname;

      alert(fullName);