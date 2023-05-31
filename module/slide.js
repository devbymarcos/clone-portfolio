import { Splide } from "@splidejs/splide";

export default function slidejs() {
  document.addEventListener("DOMContentLoaded", function () {
    new Splide(".splide", {
      perPage: 2,
      arrows: false,
      gap: "1rem",
      padding: "1rem",
      breakpoints: {
        640: {
          perPage: 1,
        },
      },
    }).mount();
  });
}
