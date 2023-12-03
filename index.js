function candyCalc() {
	const candy = parseInt(document.querySelector(".candy-calc__candy-num").value);
	const children = parseInt(document.querySelector(".candy-calc__children-num").value);

	const calcCandiesPerChild = (children, candy) => Math.floor(candy / children);
	const calcCandiesTotal = (children, candy) => Math.floor(candy / children) * children;
	const calcCandiesRemaining = (children, candy) => candy - Math.floor(candy / children) * children;

	const candiesPerChildResult = calcCandiesPerChild(children, candy);
	const candiesTotalResult = calcCandiesTotal(children, candy);
	const candiesRemainingResult = calcCandiesRemaining(children, candy);

	document.querySelector(".candy-calc__num.candiesPerChild").textContent = candiesPerChildResult + (candiesPerChildResult === 1 ? " candy" : " candies");
	document.querySelector(".candy-calc__num.candiesTotal").textContent = candiesTotalResult + (candiesTotalResult === 1 ? " candy" : " candies");
	document.querySelector(".candy-calc__num.candiesRemaining").textContent = candiesRemainingResult + (candiesRemainingResult === 1 ? " candy" : " candies");
}

const btn = document.querySelector(".candy-calc__button");

btn.addEventListener("click", candyCalc);
