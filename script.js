const advice = {
  crop: {
    title: "Crop planning checklist",
    items: [
      "Check the local season and climate.",
      "Consider soil type and water availability.",
      "Ask local agricultural services about suitable varieties."
    ]
  },
  water: {
    title: "Irrigation checklist",
    items: [
      "Check soil moisture before watering.",
      "Inspect pipes and channels for leaks.",
      "Adjust irrigation to crop stage, soil, and weather."
    ]
  },
  fertilizer: {
    title: "Fertilizer-use checklist",
    items: [
      "Use soil-test results when available.",
      "Follow recommended doses for your crop and region.",
      "Store fertilizer safely and away from water sources."
    ]
  },
  health: {
    title: "Crop health checklist",
    items: [
      "Inspect leaves and stems regularly for unusual changes.",
      "Take clear notes or photos of symptoms for an expert.",
      "Ask a qualified local expert before applying treatment."
    ]
  }
};

document.getElementById("showAdvice").addEventListener("click", () => {
  const selected = document.getElementById("topicSelect").value;
  const result = advice[selected];
  document.getElementById("adviceTitle").textContent = result.title;
  const list = document.getElementById("adviceList");
  list.replaceChildren();
  result.items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
});

document.getElementById("menuButton").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});
