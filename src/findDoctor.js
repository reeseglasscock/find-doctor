export class FindDoctor {
  getDoctor(response) {
    let body = JSON.parse(response);
    let doctorsArray = [];
    console.log(body.data)
    // body.data.forEach(function (drink) {
    //   let foundDrink = new Drink(drink.strDrink, drink.strDrinkThumb, drink.idDrink);
    //   drinks.push(foundDrink);
    // });
  }
}