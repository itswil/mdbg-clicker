const waitForElement = (selector, callback) => {
	const observer = new MutationObserver((_mutations, observer) => {
		const element = document.querySelector(selector);
		if (element) {
			observer.disconnect();
			callback(element);
		}
	});

	observer.observe(document.body, {
		childList: true,
		subtree: true,
	});
};

const firstResultHanzi = document.querySelector(".wordresults .row a");

if (firstResultHanzi) {
	firstResultHanzi.click();
}

waitForElement(".charresults", (actions) => {
	const showStrokeOrderButtons = document.querySelectorAll(
		".charresults a[title='Show stroke order']",
	);

	for (const button of showStrokeOrderButtons) {
		button.click();
	}
});
