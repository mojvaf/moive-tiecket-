const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;

// update total and count
function updateSelectedCount() {
  const selectedSSeats = document.querySelectorAll(".row .seat.selected");

  const seatedIndex = [...selectedSSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem("selectedSSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}
// Movie select event
movieSelect.addEventListener("change", e => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

//Movie sele
container.addEventListener("click", e => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});
