
document.addEventListener('click', documentClick);

function documentClick(e) {
	const targetItem = e.target;
	console.log('targetItem');
	if (targetItem.closest('.icon-menu')) {
		document.documentElement.classList.toggle('menu-open');
	}
}