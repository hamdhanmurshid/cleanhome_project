
        const titles = [
            "10x Facebook Growth",
            "Double Likes Fast",
            "10x Content Ideas",
            "Increase Reach 200%"
        ];
        let i = 0;
        const typewriterEl = document.getElementById("typewriter-title");

        function typeWriter(text, idx, callback) {
            if (idx < text.length) {
                typewriterEl.innerHTML = `<span>${text.substring(0, idx + 1)}</span>`;
                setTimeout(() => typeWriter(text, idx + 1, callback), 80);
            } else {
                setTimeout(callback, 1500);
            }
        }

        function startTyping() {
            typeWriter(titles[i], 0, () => {
                i = (i + 1) % titles.length;
                startTyping();
            });
        }

        startTyping();

        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        // Universal smooth scroll for all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                const scrollableContainer = document.querySelector('.scrollable-content');
                if (target && scrollableContainer) {
                    const targetPosition = target.offsetTop;
                    scrollableContainer.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
        // Get the elements just once
        const scrollBar = document.getElementById('scroll-bar');
        const header = document.querySelector('header');
        const scrollableContent = document.querySelector('.scrollable-content');
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');

        let lastScrollTop = 0;

        // Add a single event listener to the scrollable content
        scrollableContent.addEventListener('scroll', () => {
            const scrollTop = scrollableContent.scrollTop;

            // Code for the scroll-progress bar
            const scrollHeight = scrollableContent.scrollHeight - scrollableContent.clientHeight;
            const scrollPercent = (scrollTop / scrollHeight) * 100;
            scrollBar.style.width = scrollPercent + '%';

            // Code for hiding/showing the header
            if (scrollTop > lastScrollTop && scrollTop > 50) {
                header.style.top = '-100px';
            } else {
                header.style.top = '0';
            }

            // Code for showing/hiding the scroll-to-top button smoothly
            if (scrollTop > 100) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }

            lastScrollTop = scrollTop;
        });

        // Click event for the scroll-to-top button
        scrollToTopBtn.addEventListener('click', () => {
            scrollableContent.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        // FAQ Accordion functionality
        document.querySelectorAll('.faq-item').forEach(item => {
            item.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all other open items
                document.querySelectorAll('.faq-item.active').forEach(openItem => {
                    if (openItem !== item) {
                        openItem.classList.remove('active');
                    }
                });

                // Toggle the current item
                item.classList.toggle('active');
            });
        });
        // Get the button and popup elements
        const subscribeBtn = document.querySelector('.subscribe-btn');
        const popup = document.getElementById('subscribe-popup');

        // Add a click event listener to the subscribe button
        subscribeBtn.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default form behavior

            // Display the pop-up
            popup.style.display = 'flex';

            // Set a timer to close the pop-up and refresh the page after 2 seconds
            setTimeout(function () {
                popup.style.display = 'none'; // Hide the pop-up
                location.reload(); // Refresh the page
            }, 2000); // 2 seconds
        });

        // Close the pop-up if the user clicks anywhere outside of the modal content
        window.addEventListener('click', function (event) {
            if (event.target == popup) {
                popup.style.display = 'none';
                location.reload(); // Refresh the page
            }
        });
         // Wait 2 seconds, then hide loader and show main content
    window.addEventListener("load", function() {
        setTimeout(() => {
            document.getElementById("loader").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("loader").style.display = "none";
                document.getElementById("main-content").classList.remove("hidden");
            }, 500); // fade-out duration
        }, 2000); // 2 seconds
    });