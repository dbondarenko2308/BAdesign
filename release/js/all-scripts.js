$(document).ready(function () {
$(document).ready(function() {
	const $cityContainer = $('.header-top__city')
	const $cityDropdown = $('.header-top__city--dropdown')

	$cityContainer.on('click', '.header-top__city--head', function(e) {
		e.stopPropagation()
		const isActive = $cityDropdown.hasClass('active')

		$(
			'.header-top__catalog--top, .header-top__catalog--dropdown, .header-top__city--dropdown'
		).removeClass('active')
		$('body').removeClass('hidden')

		if (!isActive) {
			$cityDropdown.addClass('active')
			$('body').addClass('hidden')
		}
	})

	// hover на весь контейнер, чтобы не терять фокус при перемещении в дропдаун
	$cityContainer.hover(
		function() {
			if (window.innerWidth > 991) {
				$(
					'.header-top__catalog--top, .header-top__catalog--dropdown, .header-top__city--dropdown'
				).removeClass('active')
				$cityDropdown.addClass('active')
				$('body').addClass('hidden')
			}
		},
		function() {
			if (window.innerWidth > 991) {
				$cityDropdown.removeClass('active')
				$('body').removeClass('hidden')
			}
		}
	)

	$('.header-top__city--dropdown span').on('click', function() {
		var text = $(this).text()
		var parent = $(this).closest('.header-top__city')
		var textHead = parent.find('.header-top__city--head span')
		textHead.text(text)
		$('body').removeClass('hidden')
		$('.header-top__city--dropdown').removeClass('active')
	})

	$('.header-top__catalog--top').on('click', function(e) {
		e.stopPropagation()
		const $dropdown = $(this).next()
		const isActive = $dropdown.hasClass('active')

		$('.header-top__city--dropdown').removeClass('active')

		$('.header-top__catalog--top').removeClass('active')
		$('.header-top__catalog--dropdown').removeClass('active')
		if (!isActive) {
			$(this).addClass('active')
			$dropdown.addClass('active')
			$('body').addClass('hidden')
		} else {
			$('body').removeClass('hidden')
		}
	})

	$(document).on('click', function(e) {
		const target = $(e.target)

		if (
			!target.closest('.header-top__city').length &&
			!target.closest('.header-top__catalog').length
		) {
			$('.header-top__city--dropdown').removeClass('active')
			$('.header-top__catalog--dropdown').removeClass('active')
			$('.header-top__catalog--top').removeClass('active')
			$('body').removeClass('hidden')
		}
	})

	$('.header__burger').on('click', function() {
		$('.header-top').addClass('active')
	})

	$('.header-top__close').on('click', function() {
		$('.header-top').removeClass('active')
	})

	const collectionS = new Swiper('.main-col__container', {
		slidesPerView: 1,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		navigation: {
			nextEl: '.main-col__next',
			prevEl: '.main-col__prev'
		}
	})

	var init8 = false
	var swiper8
	function swiperHow() {
		if (window.innerWidth < 992) {
			if (!init8) {
				init8 = true
				swiper8 = new Swiper('.main-adva__container', {
					slidesPerView: 'auto',
					spaceBetween: 5,
					loop: false,
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					}
				})
			}
		} else if (init8) {
			swiper8.destroy()
			init8 = false
		}
	}

	swiperHow()
	window.addEventListener('resize', swiperHow)

	const swipers = []
	let currentIndex = 0

	swipers[0] = new Swiper($('[data-swiper-item]').eq(0)[0], {
		slidesPerView: 'auto',
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		spaceBetween: 5,
		navigation: {
			nextEl: '.main-id__next',
			prevEl: '.main-id__prev'
		},

		breakpoints: {
			991: {
				slidesPerView: 2
			}
		}
	})

	$('[data-id-item]').eq(0).addClass('active')
	$('[data-swiper-item]').eq(0).addClass('active')

	$('[data-id-item]').on('click', function() {
		const index = $(this).index()

		if (currentIndex === index) return false

		if (swipers[currentIndex]) {
			swipers[currentIndex].destroy(true, true)
			swipers[currentIndex] = null
		}

		$(this).addClass('active').siblings().removeClass('active')
		$('[data-swiper-item]').removeClass('active').eq(index).addClass('active')

		swipers[index] = new Swiper($('[data-swiper-item]').eq(index)[0], {
			slidesPerView: 'auto',
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			spaceBetween: 5,
			navigation: {
				nextEl: '.main-id__next',
				prevEl: '.main-id__prev'
			},

			breakpoints: {
				991: {
					slidesPerView: 2
				}
			}
		})

		currentIndex = index

		return false
	})

	$('[data-proz-item]').on('click', function() {
		if (!$(this).hasClass('active')) {
			var index = $(this).index()
			$(this).addClass('active').siblings().removeClass('active')
			$('[data-proz]').removeClass('active').eq(index).addClass('active')
		}
		return false
	})

	$('.main-faq__head').on('click', function() {
		let $this = $(this)
		let isActive = $this.hasClass('active')

		$('.main-faq__head').removeClass('active')
		$('.main-faq__body').removeClass('active')

		if (!isActive) {
			$this.addClass('active')
			$this.next('.main-faq__body').addClass('active')
		}
	})

	const reviewsMain = new Swiper('.main-rev__container', {
		slidesPerView: 'auto',
		spaceBetween: 5,

		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		navigation: {
			nextEl: '.main-rev__next',
			prevEl: '.main-rev__prev'
		},
		breakpoints: {
			991: {
				slidesPerView: 4
			}
		}
	})

	$('.mask').each(function() {
		IMask(this, {
			mask: '+7 (000) 000-00-00'
		})
	})

	const $button = $('.down-up')
	const bottomOffset = 20

	$button.on('click', function() {
		$('html, body').animate({ scrollTop: 0 }, 600)
	})

	$(window).on('scroll resize', function() {
		const scrollTop = $(window).scrollTop()
		const windowHeight = $(window).height()
		const windowWidth = $(window).width()
		let footerTop

		if (windowWidth < 991) {
			footerTop = $('footer').offset().top - 210
		} else {
			footerTop = $('footer').offset().top - 220
		}

		const stopPoint = footerTop - windowHeight + bottomOffset + 300

		if (scrollTop > 200) {
			$button.addClass('show')
		} else {
			$button.removeClass('show')
		}

		if (scrollTop > stopPoint) {
			$button.addClass('active').css({
				top: footerTop + 190 + 'px',
				bottom: 'auto'
			})
		} else {
			$button.removeClass('active').css({
				top: 'auto',
				bottom: '55px'
			})
		}
	})

	$(function() {
		$('.main-brand__play').each(function() {
			const $btn = $(this)
			const $video = $btn.next('video')

			if ($video.length === 0) return

			const video = $video.get(0)

			function updateButtonVisibility(show) {
				if (show) {
					$btn.addClass('active')
				} else {
					$btn.removeClass('active')
				}
			}

			updateButtonVisibility(true)

			$btn.on('click', function() {
				if (video.paused) {
					$('video').each(function() {
						if (!this.paused) {
							this.pause()
							const $otherBtn = $(this).prev('.main-brand__play')
							$otherBtn
								.removeClass('playing')
								.find('img')
								.attr('src', 'images/play-vid.svg')
								.show()
							$(this).removeClass('playing')
						}
					})

					video.muted = false
					video.play()
					$btn
						.addClass('playing')
						.find('img')
						.attr('src', 'images/stop-vid.svg')
					$video.addClass('playing')
					updateButtonVisibility(false)
				} else {
					video.pause()
					$btn
						.removeClass('playing')
						.find('img')
						.attr('src', 'images/play-vid.svg')
					$video.removeClass('playing')
					updateButtonVisibility(true)
				}
			})

			$btn.on('mouseenter', function() {
				if ($btn.hasClass('playing')) {
					updateButtonVisibility(true) 
				}
			})

		
			$btn.on('mouseleave', function() {
				if ($btn.hasClass('playing')) {
					updateButtonVisibility(false) 
				}
			})

			// Видео закончилось
			$video.on('ended', function() {
				$btn
					.removeClass('playing')
					.find('img')
					.attr('src', 'images/play-vid.svg')
				$video.removeClass('playing')
				updateButtonVisibility(true) // показать кнопку
			})
		})
	})

	$.fancybox.defaults.touch = false
	$.fancybox.defaults.closeExisting = true

	// const serf = new Swiper('.sertif__container', {
	// 	slidesPerView: 1,
	// 	pagination: {
	// 		el: '.swiper-pagination',
	// 		clickable: true
	// 	},

	// 	breakpoints: {
	// 		768: {
	// 			slidesPerView: 2
	// 		}
	// 	}
	// })

	// let $carousel = $('.carousel')

	// $carousel.slick({
	// 	slidesToShow: 7,
	// 	slidesToScroll: 1,
	// 	autoplay: true,
	// 	autoplaySpeed: 0,
	// 	speed: 3000,
	// 	cssEase: 'linear',
	// 	infinite: true,
	// 	arrows: false,
	// 	centerMode: false,
	// 	variableWidth: true
	// })

	// let $carouselnew = $('.carousel-rtl')

	// $carouselnew.slick({
	// 	slidesToShow: 7,
	// 	slidesToScroll: 1,
	// 	autoplay: true,
	// 	autoplaySpeed: 0,
	// 	speed: 3000,
	// 	cssEase: 'linear',
	// 	infinite: true,
	// 	arrows: false,
	// 	centerMode: false,
	// 	variableWidth: true,
	// 	rtl: true
	// })

	// $('.mask').each(function() {
	// 	IMask(this, {
	// 		mask: '+{7} (000) 000-00-00'
	// 	})
	// })

	// var amountScrolled = 200
	// var amountScrolledNav = 25

	// $(window).scroll(function() {
	// 	if ($(window).scrollTop() > amountScrolled) {
	// 		$('.down-up').addClass('show')
	// 	} else {
	// 		$('.down-up').removeClass('show')
	// 	}
	// })

	// $('.down-up').click(function() {
	// 	$('html, body').animate(
	// 		{
	// 			scrollTop: 0
	// 		},
	// 		800
	// 	)
	// 	return false
	// })

	// const abouts = new Swiper('.about-clients__container', {
	// 	slidesPerView: 1,
	// 	spaceBetween: 30,

	// 	pagination: {
	// 		el: '.swiper-pagination',
	// 		clickable: true
	// 	},
	// 	navigation: {
	// 		nextEl: '.about-clients__next',
	// 		prevEl: '.about-clients__prev'
	// 	},

	// 	breakpoints: {
	// 		768: {
	// 			slidesPerView: 3
	// 		},

	// 		1250: {
	// 			slidesPerView: 4
	// 		}
	// 	}
	// })

	// $('.faq-vacancy__head').on('click', function() {
	// 	let $this = $(this).parent()
	// 	let isActive = $this.hasClass('active')

	// 	$('.faq-vacancy__item').removeClass('active')

	// 	if (!isActive) {
	// 		$this.addClass('active')
	// 	}
	// })

	// $('.catalog-product__head').on('click', function() {
	// 	$(this).toggleClass('active')
	// 	$(this).next().toggleClass('active')
	// })

	// $('.contacts__item--head').on('click', function() {
	// 	$(this).toggleClass('active')
	// 	$(this).next().toggleClass('active')
	// })

	// $('.shem__top--item').on('click', function() {
	// 	$('.shem__top--item').removeClass('active')
	// 	$(this).toggleClass('active')
	// })
})

//------------------- map contants -----------------------------

callMap('map', 16);
});