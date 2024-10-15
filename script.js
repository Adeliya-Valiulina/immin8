window.addEventListener("DOMContentLoaded", () => {
  const ticker1 = document.querySelectorAll(".ticker-1");
  const ticker2 = document.querySelectorAll(".ticker-2");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Прокладываем какую-то длину, например 10 пикселей на каждые 100 пикселей прокрутки:
    const distance = scrollY * 0.6; // Измените множитель, чтобы отрегулировать скорость

    ticker1.forEach((ticker) => {
      ticker.style.transform = `translateX(-${distance}px)`; // Перемещаем влево
    });

    ticker2.forEach((ticker) => {
      ticker.style.transform = `translateX(${distance}px)`; // Перемещаем вправо
    });
  });

  window.addEventListener("scroll", trackscroll); //после каждого скролла запускаем функцию "trackscroll"

  function trackscroll() {
    //переменной header присваиваем элемент с id "header"
    const karaoke = document.querySelector(".slider-karaoke");

    function posFixed() {
      karaoke.classList.add("fixed");
    }

    function posRelative() {
      karaoke.classList.remove("fixed");
    }

    if (window.scrollY > 900) {
      posFixed();
    }

    if (window.scrollY < 900) {
      posRelative();
    }
  }

  const spans = document.querySelectorAll(".reveal-type span");
  const sliders = document.querySelectorAll(".block"); // Получаем все блоки с классом .slider
  const startBlock = 1; // Индекс второго блока
  const sliderStick = document.querySelector(".slider-stick");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Получаем высоту и позицию стартового блока (второго блока)
    const startBlockHeight = sliders[startBlock].offsetHeight;
    const startBlockTop = sliders[startBlock].offsetTop;

    // Проверяем, находится ли прокрутка в пределах второго блока
    if (
      scrollY >= startBlockTop &&
      scrollY < startBlockTop + startBlockHeight
    ) {
      // Вычисляем прогресс в пределах второго блока
      const t = (scrollY - startBlockTop) / startBlockHeight;

      // Ограничиваем t от 0 до 1
      const adjustedT = Math.min(Math.max(t, 0), 1);

      // Обновляем стили спанов
      spans.forEach((span) => {
        span.style.backgroundPosition = `${-adjustedT * 100}% 0`;
      });

      // Обновляем высоту slider-stick
      sliderStick.style.height = `${adjustedT * 128}px`; // Измените 100 на желаемую высоту слайдера
    } else if (scrollY >= startBlockTop + startBlockHeight) {
      // Убедимся, что при прокрутке за пределы блока, фон устанавливается на 100%
      spans.forEach((span) => {
        span.style.backgroundPosition = `-100% 0`;
      });

      // Высота slider-stick устанавливается на максимальную высоту
      sliderStick.style.height = `128px`; // Измените 100 на желаемую максимальную высоту
    } else {
      // Если прокрутка выше второго блока, устанавливаем высоту slider-stick в 0
      sliderStick.style.height = "10";
    }
  });

  // const lenis = new Lenis();

  // function raf(time) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }

  // requestAnimationFrame(raf);

  // const block4 = document.querySelector(".services-wrapper");

  // let isScrolling = false; // Переменная для отслеживания состояния прокрутки
  // let targetScrollLeft = block4.scrollLeft; // Целевая позиция прокрутки

  // // Функция для отключения и включения Lenis
  // const toggleLenis = (enable) => {
  //   if (enable) {
  //     console.log("Включаем Lenis");
  //     lenis.start(); // Включаем Lenis
  //     block4.classList.remove("lenis-stopped"); // Удаляем класс lenis-stopped
  //   } else {
  //     console.log("Отключаем Lenis");
  //     lenis.stop(); // Отключаем Lenis
  //     block4.classList.add("lenis-stopped"); // Добавляем класс lenis-stopped, если нужно
  //   }
  // };

  // // Обработчик события wheel для горизонтальной прокрутки
  // block4.addEventListener("wheel", (event) => {
  //   event.preventDefault(); // Предотвращаем стандартное поведение прокрутки

  //   // Увеличиваем целевую позицию прокрутки на основании колесика мыши
  //   targetScrollLeft += event.deltaY;

  //   // Отключаем Lenis при горизонтальной прокрутке
  //   const midPoint = block4.scrollWidth / 2;
  //   if (block4.scrollLeft < midPoint) {
  //     toggleLenis(false); // Отключаем Lenis
  //   }

  //   // Если уже идет прокрутка, не начинаем новую
  //   if (!isScrolling) {
  //     smoothScroll();
  //   }
  // });

  // // Функция для плавной прокрутки
  // const smoothScroll = () => {
  //   isScrolling = true; // Устанавливаем флаг прокрутки
  //   block4.scrollLeft += (targetScrollLeft - block4.scrollLeft) / 10; // Плавная прокрутка

  //   // Проверяем, достигнута ли целевая позиция
  //   if (Math.abs(block4.scrollLeft - targetScrollLeft) > 1) {
  //     requestAnimationFrame(smoothScroll); // Продолжаем плавную прокрутку
  //   } else {
  //     block4.scrollLeft = targetScrollLeft; // В последний раз устанавливаем целевое значение
  //     isScrolling = false; // Сбрасываем флаг прокрутки

  //     // Проверяем, достигли ли конца контента
  //     const maxScrollLeft = block4.scrollWidth - block4.clientWidth;
  //     if (block4.scrollLeft >= maxScrollLeft) {
  //       toggleLenis(true); // Включаем Lenis, если достигнут конец
  //     } else {
  //       toggleLenis(true); // Включаем Lenis после завершения горизонтальной прокрутки
  //     }
  //   }
  // };

  // // Обработчик события scroll (дополнительно для включения Lenis)
  // block4.addEventListener("scroll", () => {
  //   if (!isScrolling) {
  //     const midPoint = block4.scrollWidth / 2;
  //     // Проверяем, достигли ли середины блока
  //     if (block4.scrollLeft < midPoint) {
  //       toggleLenis(true); // Включаем Lenis, если горизонтальная прокрутка завершена
  //     }
  //   }
  // });
  const tabPrice = document.querySelectorAll(".footer-tab__itemprice");
  function activeTab() {
    tabPrice.forEach((item) => item.classList.remove("active-tab"));
    this.classList.add("active-tab");
  }
  tabPrice.forEach((item) => item.addEventListener("click", activeTab));

  const tabInterested = document.querySelectorAll(".footer-tab__item");

  tabInterested.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (!tab.classList.contains("active-interested")) {
        tab.classList.add("active-interested");
      } else {
        tab.classList.remove("active-interested");
      }
    });
  });

  const textArea = document.querySelector("textarea");
  textArea.style.height = textArea.setAttribute;
  "style", "height: " + textArea.scrollHeight + "px";
  textArea.classList.add("auto");
  textArea.addEventListener("input", (e) => {
    textArea.style.height = "auto";
    textArea.style.height = textArea.scrollHeight + "px";
  });

  const linkServices = document.querySelectorAll(".services-block");
  linkServices.forEach((i) => {
    i.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
});
window.addEventListener("scroll", () => {
  const blockThird = document.getElementById("block3");
  const blockThirdBottom = blockThird.getBoundingClientRect().bottom; // Получаем нижнюю границу третьего блока
  const windowHeightBlock = window.innerHeight; // Получаем высоту окна с точки зрения видимости
  const karaoke = document.querySelector(".slider-karaoke");

  // Проверяем достигли ли мы конца третьего блока
  if (blockThirdBottom <= windowHeightBlock) {
    changePositionBlock();
  } else {
    karaoke.classList.remove("relativ");
    karaoke.classList.add("fixed");
  }
  function changePositionBlock() {
    karaoke.classList.add("relativ");
  }
});
// Fourth block
