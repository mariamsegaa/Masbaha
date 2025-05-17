let counts = {
  "اللهم أدخلهم الجنة": 0,
  "اللهم آنس وحشتهم": 0,
  "اللهم أنر قبرهم": 0,
  "اللهم ارض عنهم وتقبلهم من الصالحين": 0,
  "اللهم اغفر لهم وارحمهم": 0,
  "اللهم عافهم واعف عنهم": 0,
  "اللهم أكرم نزلهم ووسع مدخلهم": 0,
  "اللهم اغسلهم بالماء والثلج والبرد": 0,
  "اللهم نقهم من الذنوب والخطايا كما ينقى الثوب الأبيض من الدنس": 0,
  "اللهم أبدلهم دارًا خيرًا من دارهم وأهلاً خيرًا من أهلهم": 0,
  "اللهم اجعل قبرهم روضة من رياض الجنة ولا تجعله حفرة من حفر النار": 0,
  "اللهم إنهم في ذمتك وحبل جوارك فقهم فتنه القبر وعذاب النار": 0,
  "اللهم أنعم عليهم بعيشة راضية في جناتك جنات النعيم": 0
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

    
