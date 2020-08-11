'use strict'

function Location(minPeople, maxPeople, avgCookie, cookieTotal) {
    this.minPeople = minPeople;
    this.maxPeople = maxPeople;
    this.avgCookie = avgCookie;
    this.cookieTotoal = cookieTotal;
}

Location.prototype.render = function(elementId, totalElementId) {
    var clock = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    for (var i = 0; i < clock.length; i++) {
        var Customers = Math.random() * (this.maxPeople - this.minPeople + 1) + this.minPeople;
        var cookiesBaked = Customers * this.avgCookie;
        cookiesBaked = Math.ceil(cookiesBaked);
        this.cookieTotal = this.cookieTotal + cookiesBaked;
        var parent = document.getElementById(elementId);
        var listItem = document.createElement('li');
        listItem.textContent = `${clock[i]} make ${cookiesBaked} cookies`;
        parent.appendChild(listItem);
    }
    document.getElementById(totalElementId).innerHTML = `Bake ${this.cookieTotal} cookies in total for the whole day.`;
}


var seattle = new Location(23, 65, 6.3, 0);
seattle.render('seattle', 'se');

var tokyo = new Location(3, 24, 1.2, 0);
tokyo.render('tokyo', )

var dubai = new Location(11, 38, 3.7, 0);
dubai.render('dubai', )

var paris = new Location( 20, 38, 2.3, 0);
paris.render('paris', )

var lima = new Location(2, 16, 4.6, 0);
lima.render('lima', )
