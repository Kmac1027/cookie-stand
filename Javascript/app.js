'use strict'

var seattle = {
  minPeople: 23,
  maxPeople: 65,
  avgCookie: 6.3,
  render: function(){
    var seattleCustomers = math.random(this.minPeople, this.maxPeople)
    var cookiesBaked = seattleCustomers * this.avgCookie
    var parent = document.getElementById('seattle');
    var listItem = document.createElement('li');
    listItem.textContent = cookiesBaked ;
    parent.appendChild(listItem);
  }
}
seattle.render();

var tokyo = {
  minPeople: 3,
  maxPeople: 24,
  avgCookie: 1.2
}

var dubai = {
  minPeople: 11,
  maxPeople: 38,
  avgCookie: 3.7
}

var paris = {
  minPeople: 20,
  maxPeople: 38,
  avgCookie: 2.3
}

var lima = {
  minPeople: 2,
  maxPeople: 16,
  avgCookie: 4.6
}