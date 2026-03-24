    function getFormvalue(event) {
    event.preventDefault(); // prevent page reload

    const fname = document.querySelector('input[name="fname"]').value.trim();
    const lname = document.querySelector('input[name="lname"]').value.trim();

    const fullName = fname + " " + lname;

    alert(fullName);
}