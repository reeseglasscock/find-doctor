export class FindDoctor {
  getDoctor(response) {
    let body = JSON.parse(response);
    let doctors = [];
    console.log(body)
    // body.drinks.forEach(function (drink) {
    //   let foundDrink = new Drink(drink.strDrink, drink.strDrinkThumb, drink.idDrink);
    //   drinks.push(foundDrink);
    // });
  }
}