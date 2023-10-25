let customerContainer = document.querySelector('.container')

function customerDirectoryCard(customer) {
    let customerCard = document.createElement('div');
    let customerPicture = document.createElement('img');
    customerPicture.src = `${customer.picture.large}`;
    let customerName = document.createElement('h2');
    customerName.innerText = `${customer.name.first} ${customer.name.last}`;
    let customerEmail = document.createElement('a');
    customerEmail.href = "mailto";
    customerEmail.innerHTML = `${customer.email}`;
    let customerStreet= document.createElement('h3');
    customerStreet.innerText = `${customer.location.street.number} ${customer.location.street.name}`;
    let customerCity = document.createElement('h4');
    customerCity.innerText = `${customer.location.city}, ${customer.location.state} ${customer.location.postcode}`;
    let customerDob = document.createElement('h5');
    customerDob.innerText = `DOB: ${customer.dob.date}`;
    customerRegistered = document.createElement('date');
    customerRegistered.innerText = `Customer since: ${customer.registered.date}`;
    customerCard.appendChild(customerPicture);
    customerCard.appendChild(customerName);
    customerCard.appendChild(customerEmail);
    customerCard.appendChild(customerStreet);
    customerCard.appendChild(customerCity);
    customerCard.appendChild(customerDob);
    customerCard.appendChild(customerRegistered);
    customerContainer.appendChild(customerCard)
}
let database = customers.map((customer) => customerDirectoryCard(customer))