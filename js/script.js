document.addEventListener('click', documentClick)
function documentClick(e) {
	const targetItem = e.target
	console.log('targetItem')
	if (targetItem.closest('.icon-menu')) {
		document.documentElement.classList.toggle('menu-open')
	}
}

// Animation elements
const animItems = document.querySelectorAll('._anim-items')
if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll)
	function animOnScroll(params) {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index]
			const animItemHeight = animItem.offsetHeight
			const animItemOffset = offset(animItem).top
			const animStart = 4

			let animItemPoint = window.innerHeight - animItemHeight / animStart

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart
			}

			if (
				scrollY > animItemOffset - animItemPoint &&
				scrollY < animItemOffset + animItemHeight
			) {
				animItem.classList.add('_active')
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active')
				}
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect()
		;(scrollLeft = window.scrollX || document.documentElement.scrollLeft),
			(scrollTop = window.scrollY || document.documentElement.scrollTop)

		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll()
	}, 300)
}

// Navigation by ID - anchors
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
	anchor.addEventListener('click', function (event) {
		event.preventDefault() // відмінили стандарте повеение кнопки, зараз вона не працює
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	})
}
