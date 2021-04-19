function clear(event) {
  event.querySelector("#La").innerHTML = "";
  event.querySelector("#Lo").innerHTML = " ";
}

function validate(event) {
  clear(event);
  var check = true;
  var latitudes = event.querySelector("#lt").value;
  var longitudes = event.querySelector("#long").value;

  if (latitudes < -90 || latitudes > 90) {
    check = false;
    event.querySelector("#La").innerHTML =
      "must be a valid Latitude (-90 to 90)";
  }
  if (longitudes < -180 || longitudes > 180) {
    check = false;
    event.querySelector("#Lo").innerHTML =
      "must be a valid Longitude (-180 to 180)";
  }
  return check;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = function () {
    return validate(form);
  };
};
