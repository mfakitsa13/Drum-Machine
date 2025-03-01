document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");

    function playSound(audioId, description) {
      const audio = document.getElementById(audioId);
      audio.currentTime = 0;
      audio.play();
      display.innerText = description;
    }

    // Event listener for drum pad clicks
    document.querySelectorAll(".drum-pad").forEach(pad => {
      pad.addEventListener("click", () => {
        const audio = pad.querySelector("audio"); // Access the child audio element
        const description = pad.getAttribute("data-description"); // Get the unique description
        audio.currentTime = 0;
        audio.play();
        display.innerText = description; // Update the display with the description
      });
    });

    // Event listener for keyboard presses
    document.addEventListener("keydown", (event) => {
      const key = event.key.toUpperCase();
      const audioElement = document.getElementById(key);

      if (audioElement) {
        const pad = audioElement.parentElement; // Get the .drum-pad element
        const description = pad.getAttribute("data-description"); // Get the unique description
        audioElement.currentTime = 0;
        audioElement.play();
        display.innerText = description; // Update display with the description
      }
    });
  });
