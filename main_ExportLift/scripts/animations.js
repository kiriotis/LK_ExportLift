document.addEventListener("DOMContentLoaded", function () {
  const element = document.querySelector(".About");

  // Функция для обновления стилей на основе процентов видимости
  function updateAnimation(entry) {
    const ratio = entry.intersectionRatio;
    element.style.opacity = ratio;
    element.style.transform = `translateY(${0 - 0 * ratio}px)`;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateAnimation(entry);
        }
      });
    },
    {
      threshold: Array.from({ length: 101 }, (v, k) => k / 100), // пороги от 0 до 1 с шагом 0.01
    }
  );

  observer.observe(element);
});

document.addEventListener("DOMContentLoaded", function () {
  const element = document.querySelectorAll(".card");
  element.forEach((element) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1, // порог видимости элемента (от 0 до 1)
      }
    );

    observer.observe(element);
  });
});
