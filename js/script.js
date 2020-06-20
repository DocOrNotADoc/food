window.addEventListener('DOMContentLoaded', () => {

    // tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            // item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        // tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


    // timer
    const deadLine = '2020-07-15';

    function getTimeRemaning(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()),
        // Второй date.parse можно убрать, но оставим элементы идентичными для наглядности.
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            // округдение до ближайшего целого
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock (selector, endTime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();                  // чтобы не ждать секунду до запуска корректной работы таймера. Инициализация.

        function  updateClock() {
            const t = getTimeRemaning(endTime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.timer', deadLine);


    // modal
    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');
    
    function openModal() {
        modal.classList.toggle('show');
        document.body.style.overflow = 'hidden';      // чтобы не скроллилась страница и модалка при открытой модалке 
        clearInterval(modalTimerId);
    }

    function closeModal() {
        modal.classList.toggle('show');
        document.body.style.overflow = '';            // восстанавливаем скролл
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    modalCloseBtn.addEventListener('click', closeModal);

                
    modal.addEventListener('click', (e) => {         //делаем закрытие модалки по клину на полях
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {    //закрытие модалки на Esc
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal(); 
        }
    });                                              // найти коды клавиш - event.code в гугле

    const modalTimerId = setTimeout(openModal, 7000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll); 
        }
    }

    window.addEventListener('scroll', showModalByScroll);

});