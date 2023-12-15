document.addEventListener("DOMContentLoaded", function () {
  let locationsSelect = document.getElementById("locationSelect");
  let labelLocations = document.querySelector('label[for="locationSelect"');

  locationsSelect.addEventListener("change", function () {
    let selectedValue = locationsSelect.value;

    if (selectedValue) {
      labelLocations.innerHTML = selectedValue;
    } else {
      labelLocations.innerHTML = "Bali, Indonesia";
    }
  });
});
