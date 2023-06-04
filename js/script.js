(() => {

	hamburgerMenu();
	fixMenu();

	function fixMenu() {

		window.onscroll = () => {

			if (pageYOffset > 0) {

				header.classList.add('fix');
				if (window.innerWidth < 1300) {
					main.style.marginTop = ((header.offsetHeight / 10) + 1) + 'rem';
				} else {
					main.style.marginTop = ((header.offsetHeight / 10) + 3) + 'rem';
				}

			} else {

				header.classList.remove('fix');
				if (window.innerWidth < 1300) {
					main.style.marginTop = '1rem';
				} else {
					main.style.marginTop = '3rem';
				}
			}
		}
	}

	function hamburgerMenu() {

		document.addEventListener('click', (event) => {

			var e = event.target;
			var targetElem = event.target.getAttribute('href');
			var links = document.querySelectorAll('.header__nav-item');

			while (!e.classList.contains('hamb')) {
				if (e.tagName == 'BODY') { e = null; break }
				e = e.parentNode;
			}

			if (e) {

				nav.classList.toggle('active')
				for (let link of links) link.classList.toggle('submenu-open');
				e = null;
			}

			else if (event.target.classList.contains('scroll')) {

				event.preventDefault();

				if (targetElem.length != 0) {
					$('html, body').animate({ scrollTop: ($(targetElem).offset().top - $('.header').innerHeight()) }, 1000);

					if (window.innerWidth < 1200) {

						nav.classList.toggle('active');
						hamburger.classList.remove('is-active');
						for (let link of links) link.classList.remove('submenu-open')
					}
				}
			}

			else if (event.target.classList.contains('active')) {
				return;
			}

			else {

				if ($(window).width() < 1200) {

					for (let link of links) { link.style.opacity = '0px'; link.classList.remove('submenu-open') }
					nav.classList.remove('active')
					hamburger.classList.remove('is-active')
				}
			}
		})
	}
})();
(function () {
	const breakpoint = window.matchMedia('(min-width:767px)');
	let mySwiper;
	const breakpointChecker = function () {

		// if larger viewport and multi-row layout needed
		if (breakpoint.matches === true) {

			// clean up old instances and inline styles when available
			if (mySwiper !== undefined) {
				mySwiper.destroy(true, true);
				// or/and do nothing
			}
			return;
			// else if a small viewport and single column layout needed
		} else if (breakpoint.matches === false) {

			// fire small viewport version of swiper
			return enableSwiper();

		}

	};
	const enableSwiper = function () {
		mySwiper = new Swiper('.advantages__block', {
			direction: 'horizontal',
			loop: false,
			slideToClickedSlide: true,
			pagination: {
				el: ".advantages__pagination",
			},
			slidesPerView: 'auto',
			spaceBetween: 20

		});
	}
	breakpoint.addListener(breakpointChecker);


	breakpointChecker();
}
	());

$(function () {
	initProgram();
	initPopupForm()
	function initProgram() {

		/* логика по клику на Нарпавление обучения */
		let allSubs = document.querySelectorAll('.program__tab');
		for (let currentSubGroup of allSubs) {
			currentSubGroup.addEventListener('click', function () {
				let fatherSub = document.querySelector('.program__tabs');
				for (let i = 0; i < fatherSub.children.length; i++) {
					let curentChild = fatherSub.children[i]
					if (curentChild.classList.contains('active')) {
						curentChild.classList.remove('program__tab-active')
					}
				}

				if (this.classList.contains('active')) {
					this.classList.add('program__tab-active')
				}


				let currentSubLink = this.getAttribute('data-identification');
				// console.log(currentSubLink)

				/* проверяю значения атрибута -> если совпадает -> показываю */
				let progItemAll = document.querySelectorAll('.program__item');
				if (currentSubLink == 'all') {
					for (let progItemCurrent of progItemAll) {
						let progItemCurrentValue = progItemCurrent.getAttribute('data-target');
						progItemCurrent.classList.remove('active');
						progItemCurrent.classList.add('active');

					}
					
				} else {

					for (let progItemCurrent of progItemAll) {
						let progItemCurrentValue = progItemCurrent.getAttribute('data-target')
						progItemCurrent.classList.remove('active')
						if (progItemCurrentValue == currentSubLink) {
							progItemCurrent.classList.add('active')
						}
					}
					
				}
			})
		}

		const breakpoint = window.matchMedia('(min-width:1300px)');
		let mySwiper;
		const breakpointChecker = function () {
			let allSubs = document.querySelectorAll('.program__tab');
			for (let currentSubGroup of allSubs) {
				currentSubGroup.addEventListener('click', function () {
					return enableSwiper();
				})}
			// if larger viewport and multi-row layout needed
			if (breakpoint.matches === true) {

				// clean up old instances and inline styles when available
				if (mySwiper !== undefined) {
					mySwiper.destroy(true, true);
					// or/and do nothing
					return enableSwiper();
				}
				return enableSwiper();
				// else if a small viewport and single column layout needed
			} else if (breakpoint.matches === false) {

				// fire small viewport version of swiper
				return enableSwiper();
				
			}

		};
		var enableSwiper = function () {
			mySwiper = new Swiper('.program__slider', {
				direction: 'horizontal',
				loop: false,
				slidesPerView: 1,
				slideToClickedSlide: false,
				pagination: {
					el: ".program__pagination",
				},



				breakpoints: {
					// when window width is >= 320px
					320: {
						slidesPerView: 'auto',
						spaceBetween: 20
					},
					1300: {
						pagination: false,
						slidesPerView: 'auto',
						spaceBetween: 20,
						centeredSlides: false,
						allowTouchMove: true,
						navigation: {
							nextEl: '.program__next',
							prevEl: '.program__prev',
						}
					}
				}
			});
		}
		breakpoint.addListener(breakpointChecker);


		breakpointChecker();
	}
	function initPopupForm() {
		$(document).on('click', '[data-fancybox][data-form]', function () {
			var
				$button = $(this),
				$card = $(this).closest('.program__item'),
				href = $button.attr('href'),
				$popup = $(href),
				form = $button.attr('data-form'),
				title = $('[data-title]', $card).text(),
				format = $('[data-format]', $card).text()
				;

			$('[name="form"]', $popup).val(form);
			$('[name="lidforma"]', $popup).val(title + '(' + format + ')');

		});
	}
});

$(function () {




	const breakpoint = window.matchMedia('(min-width:1300px)');
	let mySwiper;
	const breakpointChecker = function () {

		// if larger viewport and multi-row layout needed
		if (breakpoint.matches === true) {

			// clean up old instances and inline styles when available
			if (mySwiper !== undefined) {
				mySwiper.destroy(true, true);
				// or/and do nothing
				return enableSwiper();
			}
			return enableSwiper();
			// else if a small viewport and single column layout needed
		} else if (breakpoint.matches === false) {

			// fire small viewport version of swiper
			return enableSwiper();

		}

	};
	const enableSwiper = function () {
		mySwiper = new Swiper('.teachers__block', {
			direction: 'horizontal',
			loop: false,
			slidesPerView: 1,
			allowTouchMove: false,
			navigation: {
				nextEl: '.teachers__next',
				prevEl: '.teachers__prev',
			},

			breakpoints: {
				// when window width is >= 320px
				320: {
					slidesPerView: 'auto',
					spaceBetween: 20
				},
				767: {

					pagination: false,
					slidesPerView: 2,
					spaceBetween: 20,
					centeredSlides: false,
					navigation: {
						nextEl: '.teachers__next',
						prevEl: '.teachers__prev',
					}
				},
				1300: {
					slideToClickedSlide: true,
					allowTouchMove: true,
					pagination: false,
					slidesPerView: 3,
					spaceBetween: 20,
					centeredSlides: false,
					navigation: {
						nextEl: '.teachers__next',
						prevEl: '.teachers__prev',
					}
				}
			}
		});
	}
	breakpoint.addListener(breakpointChecker);


	breakpointChecker();
	// for adaptive
	var activeSlides;
	var minValueSlide;
	var k;
	function variChange(winWidth) {
		if (winWidth > 1300) {
			activeSlides = 1;
			minValueSlide = 1;
			k = 2;
			$('.ns-active').html(minValueSlide);
		}
		if (winWidth <= 1300 && winWidth > 768) {
			activeSlides = 1;
			minValueSlide = 1;
			k = 1;
			$('.ns-active').html(minValueSlide);
		}
		if (winWidth <= 768 && winWidth > 0) {
			activeSlides = 1;
			minValueSlide = 1;
			k = 0;
			$('.ns-active').html(minValueSlide);
		}
	}
	variChange($(window).width()); // $(window).width() - ширина экрана
	$(window).resize(function () {
		variChange($(window).width());
	});

	// Pagination for serviceSlider
	var allSlides = $('.teachers__item').length - k;
	$('.ns-total').html(' /' + allSlides);
	$('.teachers__next').click(function () {
		if (activeSlides == allSlides) {
			activeSlides = allSlides;
		} else {
			activeSlides += minValueSlide;
			$('.ns-active').html(activeSlides);
		}
	});
	$('.teachers__prev').click(function () {
		if (activeSlides == minValueSlide) {
			activeSlides = minValueSlide;
		} else {
			activeSlides -= minValueSlide;
			$('.ns-active').html(activeSlides);
		}
	});


});

(function () {
	const breakpoint = window.matchMedia('(min-width:767px)');
	let mySwiper;
	const breakpointChecker = function () {

		// if larger viewport and multi-row layout needed
		if (breakpoint.matches === true) {

			// clean up old instances and inline styles when available
			if (mySwiper !== undefined) {
				mySwiper.destroy(true, true);
				// or/and do nothing
			}
			return;
			// else if a small viewport and single column layout needed
		} else if (breakpoint.matches === false) {

			// fire small viewport version of swiper
			return enableSwiper();

		}

	};
	const enableSwiper = function () {
		mySwiper = new Swiper('.documentation__block', {
			direction: 'horizontal',
			loop: false,
			slideToClickedSlide: true,
			slidesPerView: 'auto',
			spaceBetween: 16

		});
	}
	breakpoint.addListener(breakpointChecker);


	breakpointChecker();
}
	());
(function () {
	const breakpoint = window.matchMedia('(min-width:1300px)');
	let mySwiper;
	const breakpointChecker = function () {

		// if larger viewport and multi-row layout needed
		if (breakpoint.matches === true) {

			// clean up old instances and inline styles when available
			if (mySwiper !== undefined) {
				mySwiper.destroy(true, true);
				// or/and do nothing
			}
			return;
			// else if a small viewport and single column layout needed
		} else if (breakpoint.matches === false) {

			// fire small viewport version of swiper
			return enableSwiper();

		}

	};
	const enableSwiper = function () {
		mySwiper = new Swiper('.career__block', {
			direction: 'horizontal',
			loop: false,
			slideToClickedSlide: true,
			pagination: {
				el: ".career__pagination",
			},
			slidesPerView: 'auto',
			spaceBetween: 16

		});
	}
	breakpoint.addListener(breakpointChecker);


	breakpointChecker();
}
	());

$(function () {

	let
	// lazyArr = [].slice.call(document.querySelectorAll('.lazy')),
	// lazyArr = [].slice.call(querySelectorAllLive(document, '.lazy')),
	active = false,
	threshold = 200
	;

	const lazyLoad = function(e) {
		if (active === false) {
			active = true;
			let lazyArr = [].slice.call(document.querySelectorAll('.lazy'));

			setTimeout(function() {
				lazyArr.forEach(function(lazyObj) {
					if ((lazyObj.getBoundingClientRect().top <= window.innerHeight + threshold && lazyObj.getBoundingClientRect().bottom >= -threshold) && getComputedStyle(lazyObj).display !== 'none') {

						if ( lazyObj.dataset.src ) {
							let
							img = new Image(),
							src = lazyObj.dataset.src
							;
							img.src = src;
							img.onload = function() {
								if (!! lazyObj.parent) {
									lazyObj.parent.replaceChild(img, lazyObj);
								} else {
									lazyObj.src = src;
								}
							}
							lazyObj.removeAttribute('data-src');
						}

						if ( lazyObj.dataset.srcset ) {
							lazyObj.srcset = lazyObj.dataset.srcset;
							lazyObj.removeAttribute('data-srcset');
						}

						lazyObj.classList.remove('lazy');
						lazyObj.classList.add('lazy-loaded');

						lazyArr = lazyArr.filter(function(obj) {
							return obj !== lazyObj;
						});

						if (lazyArr.length === 0) {
							document.removeEventListener('scroll', lazyLoad);
							window.removeEventListener('resize', lazyLoad);
							window.removeEventListener('orientationchange', lazyLoad);
						}
					}
				});

				active = false;
			}, 1);
		}
	};

	function querySelectorAllLive(element, selector) {
		var result = Array.prototype.slice.call(element.querySelectorAll(selector));

		var observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				[].forEach.call(mutation.addedNodes, function(node) {
					if (node.nodeType === Node.ELEMENT_NODE && node.matches(selector)) {
						result.push(node);
					}
				});
			});
		});

		observer.observe(element, { childList: true, subtree: true });

		return result;
	}

	lazyLoad();

	document.addEventListener('scroll', lazyLoad);
	window.addEventListener('resize', lazyLoad);
	window.addEventListener('orientationchange', lazyLoad);

});

$(function () {
    /* Inits */
    //initlazy();


    // Smooth scroll (filter link)
    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();

        const blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $('html, body').animate({
            scrollTop: blockOffset - 150
        }, 1000)


        $('.header__nav').removeClass('nav-active')
        $('.header__logo').removeClass('hide-logo')
        $('.burger').removeClass('burger-active')

    })


    // Логика табов часто задаваемых вопросов

    $('.accordion-questions__tab').click(function () {
        let $tabs = $('.accordion-questions__tab'),
            $contents = $('.accordion-questions__content'),
            $tab = $(this),
            id = $tab.attr('data-tab'),
            $content = $('.accordion-questions__content[data-tab="' + id + '"]');

        $tabs.not($tab).removeClass('accordion-questions__tab_active');
        $tab.toggleClass('accordion-questions__tab_active');

        $contents.not($content).removeClass('accordion-questions__content_active');
        $content.toggleClass('accordion-questions__content_active');
    });

});



