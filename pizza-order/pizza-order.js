const form = document.querySelector('#personal-details');

const orderType = document.querySelector('#order-pizza');
const orderNumber = document.querySelector('#order-number');
const orderSize = document.querySelector('#order-size');
const orderRequirements = document.querySelector('#order-requirements');

function onFormSubmit(event) {
  event.preventDefault();
	const data = new FormData(event.target);

  const type = data.get('pizza');
  const number = data.get('number');
  const size = data.get('size');
  const requirements = data.get('requirements');

  orderType.innerHTML = type;
  orderNumber.innerHTML = number;
  orderSize.innerHTML = size;
  orderRequirements.innerHTML = requirements;
}

form.addEventListener("submit", onFormSubmit);
