function validateForm() {
    let x = document.forms["formKu"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }