function randomUsers() {

    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => {

            let list = data.results;
            let items = '';
            
            list.forEach(function (lists) {
                items += `
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${lists.picture.large}" alt="${lists.name.first} ${lists.name.last}">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <p class="card-title"><strong>Name:</strong> ${lists.name.first} ${lists.name.last} </p>
                                    <p class="card-text"><strong>Phone Number:</strong> ${lists.cell}</p>
                                    <p class="card-text"><strong>Email:</strong> ${lists.email}</p>
                                    <p class="card-text"><strong>Address:</strong> ${lists.location.city}, ${lists.location.country}</p>
                                    <p class="card-text"><strong>Post Code:</strong> ${lists.location.postcode}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> `;
            });

            document.getElementById('usersList').innerHTML = items;

        });
};

window.onload = randomUsers;