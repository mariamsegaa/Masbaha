let counts = {
  "سبحان الله": 0,
  "الحمد لله": 0,
  "الله أكبر": 0,
  "لا إله إلا الله": 0
};

const countDisplay = document.getElementById("count");
const tasbeehBtn = document.getElementById("tasbeehBtn");
const resetBtn = document.getElementById("resetBtn");
const zikrSelect = document.getElementById("zikrSelect");

let currentZikr = zikrSelect.value;

window.addEventListener("DOMContentLoaded", () => {
  countDisplay.textContent = counts[currentZikr];
});

zikrSelect.addEventListener("change", () => {
  currentZikr = zikrSelect.value;
  countDisplay.textContent = counts[currentZikr];
});

tasbeehBtn.addEventListener("click", () => {
  if (counts[currentZikr] < 10) {
    counts[currentZikr]++;
    countDisplay.textContent = counts[currentZikr];
  }
});

resetBtn.addEventListener("click", () => {
  counts[currentZikr] = 0;
  countDisplay.textContent = counts[currentZikr];
});
