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

	var init9 = false
	var swiper9
	function swiperProduct() {
		if (window.innerWidth < 992) {
			if (!init9) {
				init9 = true
				swiper9 = new Swiper('.product-info__container', {
					slidesPerView: 1,
					spaceBetween: 5,
					loop: false,
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					}
				})
			}
		} else if (init9) {
			swiper9.destroy()
			init9 = false
		}
	}

	swiperProduct()
	window.addEventListener('resize', swiperProduct)

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

			$video.on('ended', function() {
				$btn
					.removeClass('playing')
					.find('img')
					.attr('src', 'images/play-vid.svg')
				$video.removeClass('playing')
				updateButtonVisibility(true)
			})
		})
	})

	$.fancybox.defaults.touch = false
	$.fancybox.defaults.closeExisting = true

	if ($('.filter__price--slider').length) {
		$('.filter__price--slider').each(function() {
			let $range = $(this)
			let parent = $(this).parent()
			let $inputFrom = parent.find('.filter__price--low')
			let $inputTo = parent.find('.filter__price--high')
			let instance
			let min = $inputFrom.data('min')
			let max = $inputTo.data('max')
			let from = $range.data('from')
			let to = $range.data('to')

			$range.ionRangeSlider({
				skin: 'round',
				type: 'double',
				onStart: updateInputs,
				onChange: updateInputs,
				onFinish: updateInputsWT
			})

			instance = $range.data('ionRangeSlider')

			function updateInputs(data) {
				from = data.from
				to = data.to

				if (data.from === data.min || data.from === '') {
					$inputFrom.prop('value', '')
					$inputFrom.prop('placeholder', data.min)
				} else {
					$inputFrom.prop('value', from)
					$inputFrom.prop('placeholder', '')
				}

				if (data.to === data.max || data.to === '') {
					$inputTo.prop('value', '')
					$inputTo.prop('placeholder', data.max)
				} else {
					$inputTo.prop('value', to)
					$inputTo.prop('placeholder', '')
				}
			}

			function updateInputsWT(data) {
				from = data.from
				to = data.to

				if (data.from === data.min || data.from === '') {
					$inputFrom.prop('value', '')
					$inputFrom.prop('placeholder', data.min)
				} else {
					$inputFrom.prop('value', from)
					$inputFrom.prop('placeholder', '')
				}

				if (data.to === data.max || data.to === '') {
					$inputTo.prop('value', '')
					$inputTo.prop('placeholder', data.max)
				} else {
					$inputTo.prop('value', to)
					$inputTo.prop('placeholder', '')
				}

				$inputFrom.trigger('keyup')
				$inputTo.trigger('keyup')
			}

			$inputFrom.on('change', function() {
				var val = $(this).prop('value')
				if (val < min) {
					val = min
				} else if (val > to) {
					val = to
				}

				instance.update({
					from: val
				})
				$(this).prop('value', val)
			})

			$inputTo.on('change', function() {
				var val = $(this).prop('value')
				if (val < from) {
					val = from
				} else if (val > max) {
					val = max
				}
				instance.update({
					to: val
				})

				$(this).prop('value', val)
			})
		})
	}

	$('.filter__top').on('click', function() {
		$(this).toggleClass('active')
		$(this).next().toggleClass('active')
	})

	$('[data-price]').on('click', function() {
		var parent = $(this).closest('.prod-catalog__inner')
		var item = parent.find('[data-price-item]')
		var itemTop = item.find('.filter__top')
		var itemBody = item.find('.filter__body')
		item.addClass('active')

		if (item.hasClass('active')) {
			itemTop.addClass('active')
			itemBody.addClass('active')
		} else {
			itemTop.removeClass('active')
			itemBody.removeClass('active')
		}

		$('.filter').addClass('active')
		$('.filter-over').addClass('active')
	})

	$('[data-color]').on('click', function() {
		var parent = $(this).closest('.prod-catalog__inner')
		var item = parent.find('[data-color-item]')
		var itemTop = item.find('.filter__top')
		var itemBody = item.find('.filter__body')
		item.addClass('active')

		if (item.hasClass('active')) {
			itemTop.addClass('active')
			itemBody.addClass('active')
		} else {
			itemTop.removeClass('active')
			itemBody.removeClass('active')
		}

		$('.filter').addClass('active')
		$('.filter-over').addClass('active')
	})

	$('body').on('click', '.prod-catalog__filter', function() {
		$('.filter').addClass('active')
		$('.filter-over').addClass('active')
	})

	$('.filter-over').on('click', function() {
		$('[data-price-item]').removeClass('active')
		$('[data-color-item]').removeClass('active')
		$('.filter__body').removeClass('active')
		$('.filter__top').removeClass('active')
		$(this).removeClass('active')
		$('.filter').removeClass('active')
	})

	$('.filter__head--close').on('click', function() {
		$('.filter').removeClass('active')
		$('[data-price-item]').removeClass('active')
		$('[data-color-item]').removeClass('active')
		$('.filter__body').removeClass('active')
		$('.filter__top').removeClass('active')
		$('.filter-over').removeClass('active')
	})

	$('.prod-catalog__list--head').on('click', function() {
		$(this).next().toggleClass('active')
	})

	$('.prod-catalog__list--dropdown span').on('click', function() {
		var text = $(this).text()
		var parent = $(this).closest('.prod-catalog__list')
		var choose = parent.find('.prod-catalog__list--head span')
		choose.text(text)
		$('.prod-catalog__list--dropdown').removeClass('active')
		$('.prod-catalog__list--head').removeClass('active')
	})

	$('.prod-cards__like').on('click', function() {
		$(this).toggleClass('active')
		return false
	})

	var sliderThumbnail2 = new Swiper('.product__container-2', {
		slidesPerView: 6,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		spaceBetween: 5
	})

	var slider2 = new Swiper('.product__top-2', {
		thumbs: {
			swiper: sliderThumbnail2
		},

		pagination: {
			clickable: true,
			el: '.swiper-pagination'
		},

		navigation: {
			prevEl: '.swiper-button__prev',
			nextEl: '.swiper-button__next'
		}
	})

	var sliderThumbnail = new Swiper('.product__container', {
		slidesPerView: 6,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		spaceBetween: 5
	})

	var slider = new Swiper('.product__top', {
		thumbs: {
			swiper: sliderThumbnail
		},

		pagination: {
			clickable: true,
			el: '.swiper-pagination'
		},

		navigation: {
			prevEl: '.swiper-button__prev',
			nextEl: '.swiper-button__next'
		}
	})

	$('.product__gabar--list li').on('click', function() {
		$('.product__gabar--list li').removeClass('active')
		$(this).addClass('active')
	})

	$('.product__meh--list li').on('click', function() {
		$('.product__meh--list li').removeClass('active')
		$(this).addClass('active')
	})

	$('.product__like').on('click', function() {
		$(this).toggleClass('active')
		return false
	})

	$('.product-rec__container').each(function(index) {
		const $container = $(this)
		const $parent = $container.closest('.product-rec')
		const prodctRec = new Swiper($container[0], {
			slidesPerView: 1,
			spaceBetween: 20,
			pagination: {
				clickable: true,
				el: '.swiper-pagination'
			},

			navigation: {
				nextEl: $parent.find('.swiper-btn-next')[0],
				prevEl: $parent.find('.swiper-btn-prev')[0]
			},
			breakpoints: {
				991: {
					slidesPerView: 2
				}
			}
		})
	})

	function openPopup(selector) {
		$('.popup').removeClass('active')
		$(selector).addClass('active')
		$('body').addClass('hidden-popup')
	}

	function closePopup(selector) {
		$(selector).removeClass('active')
		if ($('.popup.active').length === 0) {
			$('body').removeClass('hidden-popup')
		}
	}

	$('[data-otbivka]').on('click', function(e) {
		e.stopPropagation()
		openPopup('[data-popup-obiv]')
	})

	$('[data-otbivka-close]').on('click', function(e) {
		e.stopPropagation()
		closePopup('[data-popup-obiv]')
	})

	$('[data-basket]').on('click', function(e) {
		e.stopPropagation()
		openPopup('[data-popup-basket]')
	})

	$('[data-basket-close]').on('click', function(e) {
		e.stopPropagation()
		closePopup('[data-popup-basket]')
	})

	$('[data-opora]').on('click', function(e) {
		e.stopPropagation()
		openPopup('[data-popup-opor]')
	})

	$('[data-opor-close]').on('click', function(e) {
		e.stopPropagation()
		closePopup('[data-popup-opor]')
	})

	$('[data-zamsh-item]').on('click', function(e) {
		e.stopPropagation()
		closePopup('[data-popup-obiv]')
		openPopup('.popup-rec')
	})

	$('.popup-rec .popup__back').on('click', function(e) {
		e.stopPropagation()
		closePopup('.popup-rec')
		openPopup('[data-popup-obiv]')
	})

	$('.popup-rec .popup__close').on('click', function(e) {
		e.stopPropagation()
		closePopup('.popup-rec')
	})

	$('[data-com-item]').on('click', function(e) {
		e.stopPropagation()
		openPopup('.popup-complect')
	})

	$('.popup-complect .popup__close').on('click', function(e) {
		e.stopPropagation()
		closePopup('.popup-complect')
	})

	$('[data-card-open]').on('click', function(e) {
		e.stopPropagation()
		closePopup('.popup-complect')
		openPopup('.popup-cards')
	})

	$('.popup-cards .popup__back').on('click', function(e) {
		e.stopPropagation()
		closePopup('.popup-cards')
		openPopup('.popup-complect')
	})

	$('.popup-cards .popup__close').on('click', function(e) {
		e.stopPropagation()
		closePopup('.popup-cards')
	})

	$('.basket-popup, .popup').on('click', function(e) {
		e.stopPropagation()
	})

	$('[data-raz]').on('click', function(e) {
		e.stopPropagation()
		openPopup('.popup-raz')
	})

	$('[data-raz-close]').on('click', function(e) {
		e.stopPropagation()
		closePopup('.popup-raz')
	})

	$(document).on('click', function() {
		$('.popup').removeClass('active')
		$('body').removeClass('hidden-popup')
	})

	const $input = $('.basket-popup__counter input')
	const $minus = $('.basket-popup__counter--minus')
	const $plus = $('.basket-popup__counter--plus')

	$minus.on('click', function() {
		let $currentInput = $(this).siblings('input')
		let value = parseInt($currentInput.val(), 10)
		if (value > 1) {
			$currentInput.val(value - 1)
		}
	})

	$plus.on('click', function() {
		let $currentInput = $(this).siblings('input')
		let value = parseInt($currentInput.val(), 10)
		$currentInput.val(value + 1)
	})

	$('.basket-popup__counter input').on('input blur', function() {
		let value = parseInt($(this).val(), 10)
		if (isNaN(value) || value < 1) {
			$(this).val(1)
		}
	})



	$('.radio').change(function() {
		const check = $(this).prop('checked')
		const parent = $(this).closest('.radio-parent')

		if (check) {
			$('.radio-parent').removeClass('checked')
			$(parent).addClass('checked')
		}
	})


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
