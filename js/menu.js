const menu = [
    {
        "id": "SpicyChickenWings",
        "dishName": "Spicy Chicken Wings",
        "description": "Celery, Blue cheese dressing",
        "isVegetarian": false,
        "cost": 14.95,
        "image": "starter1.jpg",
        "category": "starters"
    },
    {
        "id": "FamilyWingBox",
        "dishName": "Family Wing Box",
        "description": "Celery, Blue cheese dressing",
        "isVegetarian": false,
        "cost": 29.95,
        "image": "starter2.jpg",
        "category": "starters"
    },
    {
        "id": "SeasonalVeg",
        "dishName": "Seasonal Veg",
        "description": "Apples, Beetroot, Brussels Sprouts, Carrots, Celeriac",
        "isVegetarian": true,
        "cost": 4.95,
        "image": "starter3.jpg",
        "category": "starters"
    },
    {
        "id": "MushroomRisotto",
        "dishName": "Mushroom Risotto",
        "description": "Paris brown mushroom, rocket & parmesan",
        "isVegetarian": false,
        "cost": 12.95,
        "image": "main1.jpg",
        "category": "main"
    },
    {
        "id": "ElephantHouseCaesarSalad",
        "dishName": "Elephant House Caesar Salad",
        "description": "Cos, Bacon, Croutons & Anchovies served with Caesar Dressing",
        "isVegetarian": false,
        "cost": 13.55,
        "image": "main2.jpg",
        "category": "main"
    },
    {
        "id": "VegOutonCiabatta",
        "dishName": "Veg Out on Ciabatta",
        "description": "with grilled zucchini, mushroom, red pepper, olive tapenade & halloumi cheese. served with corn chips and salsa",
        "isVegetarian": true,
        "cost": 10.95,
        "image": "main3.jpg",
        "category": "main"
    },
    {
        "id": "HotFudgeSundae",
        "dishName": "Hot Fudge Sundae",
        "description": "Vanilla Ice-cream, Fudge Sauce, Toasted hazelnuts",
        "isVegetarian": false,
        "cost": 7.95,
        "image": "dessert1.jpg",
        "category": "dessert"
    },
    {
        "id": "GardenoftheGods",
        "dishName": "Garden of the Gods",
        "description": "Vanilla Ice-cream, Raspberries, Mango & Passion fruit sauce",
        "isVegetarian": false,
        "cost": 7.85,
        "image": "dessert2.jpg",
        "category": "dessert"
    },
    {
        "id": "ChocolateDelice",
        "dishName": "Chocolate Delice",
        "description": "Chocolate Delice, Caramel Sauce & Bourbon Vanilla Ice Cream with a Raspberry Confetti.",
        "isVegetarian": false,
        "cost": 9.95,
        "image": "dessert3.jpg",
        "category": "dessert"
    },
    {
        "id": "CanCoke",
        "dishName": "Can Coke",
        "description": "350ml",
        "isVegetarian": false,
        "cost": 2.00,
        "image": "drink1.jpg",
        "category": "drinks"
    },
    {
        "id": "InTunePomegranateGingerCBD",
        "dishName": "In Tune - Pomegranate & Ginger CBD",
        "description": "250ml Can",
        "isVegetarian": false,
        "cost": 4.50,
        "image": "drink2.jpg",
        "category": "drinks"
    },
    {
        "id": "LaCosteLeBlanc",
        "dishName": "La Coste Le Blanc",
        "description": "Chardonnay & Viognier",
        "isVegetarian": false,
        "cost": 32.00,
        "image": "drink3.jpg",
        "category": "drinks"
    }
];

function renderItem(item) {
    return `
        <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="images/${item.image}" class="menu-image" alt="${item.dishName}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="food-title"><strong>${item.dishName}</strong>
                                    ${item.isVegetarian ? '<img src="images/vegetarian.png" class="veg-image">' : ''}</p>
                                </div>
                            </div>
                            <p class="card-text">${item.description}</p>
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <p class="menu-price"><strong>€${item.cost}</strong></p>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="input-group">
                                        <button class="btn btn-outline-secondary" type="button" onclick="minus(${JSON.stringify(item).split('"').join("&quot;")})">-</button>
                                        <input type="text" class="form-control" id="${item.id}" value="0">
                                        <button class="btn btn-outline-secondary" type="button" onclick="more(${JSON.stringify(item).split('"').join("&quot;")})">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderMenu() {
    let startersList = '';
    let mainList = '';
    let dessertList = '';
    let drinksList = '';

    menu.map(item => {
        switch (item.category) {
            case 'starters':
                startersList += renderItem(item);
                break;

            case 'main':
                mainList += renderItem(item);
                break;

            case 'dessert':
                dessertList += renderItem(item);
                break;

            case 'drinks':
                drinksList += renderItem(item);
                break;

            default:
                break;
        }
    });

    document.getElementById('starters').innerHTML = startersList;
    document.getElementById('main').innerHTML = mainList;
    document.getElementById('dessert').innerHTML = dessertList;
    document.getElementById('drinks').innerHTML = drinksList;
};

function more(item) {
    const currentValue = parseFloat($(`#${item.id}`).val());
    $(`#${item.id}`).val(currentValue+1);
}

function minus(item) {
    const currentValue = parseFloat($(`#${item.id}`).val());
    if (!!currentValue) $(`#${item.id}`).val(currentValue-1);
}

function checkout() {
    let checkoutItems = '';
    let total = 0;
    let totalStarters = 0;
    let totalMain = 0;
    let totalDessert = 0;
    let totalDrinks = 0;
    let totalVegetarian = 0;
    let totalNonVegetarian = 0;

    for(let item of menu) {
        const qty = parseFloat($(`#${item.id}`).val());

        if (!!qty) {
            const itemTotal = item.cost*qty;
            checkoutItems += `<tr>
                <th scope="row">${item.dishName}</th>
                <td>${qty}</td>
                <td>€ ${item.cost}</td>
                <td>€ ${itemTotal.toFixed(2)}</td>
            </tr>`;
            total += itemTotal;

            switch (item.category) {
                case 'starters':
                    totalStarters += itemTotal;
                    break;
                case 'main':
                    totalMain += itemTotal;
                    break;
                case 'dessert':
                    totalDessert += itemTotal;
                    break;
                case 'drinks':
                    totalDrinks += itemTotal;
                    break;
            }

            if (item.isVegetarian) {
                totalVegetarian += itemTotal;
            } else {
                totalNonVegetarian += itemTotal;
            }
        }
    }

    let checkoutTotals = `<tr>
                            <th scope="row">Starters</th>
                            <td>€ ${totalStarters.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Main</th>
                            <td>€ ${totalMain.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Dessert</th>
                            <td>€ ${totalDessert.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Drinks</th>
                            <td>€ ${totalDrinks.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Vegetarian</th>
                            <td>€ ${totalVegetarian.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Non Vegetarian</th>
                            <td>€ ${totalNonVegetarian.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <th scope="row">TOTAL</th>
                            <td>€ ${total.toFixed(2)}</td>
                        </tr>`;

    document.getElementById('checkout-items').innerHTML = checkoutItems;
    document.getElementById('checkout-totals').innerHTML = checkoutTotals;
}