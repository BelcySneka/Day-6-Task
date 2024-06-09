//a.class movie 

class Movie{
  constructor(title, studio, rating = "PG")
  {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
  }
}
const movie1 = new Movie("Vishwaroopam", "Raaj Kamal Productions", "PG13");
const movie2 = new Movie("Dev", "Price Productions " );


console.log(movie1.title);
console.log(movie1.studio);
console.log(movie1.rating);

console.log(movie2.rating);
console.log(movie1.studio);
console.log(movie1.rating);

//b. circle class
class Circle{
  constructor(radius, color){
      this.radius = radius;
      this.color = color;
  }
  get radiusCircle(){
      return this.radius;
  }
  set radiusCircle(radius){
          this.radius = radius;
  }
  get colorCircle(){
      return this.color;
  }
  set colorCircle(color){
      this.color = color;
  }
  get toString(){
      return `"Circle[radius=${this.radius},colors=${this.color}]"`
  }
  get areaCircle(){
      return Math.PI * this.radius * this.radius;
  }
  get circumferenceCircle(){
      return 2 * Math.PI * this.radius;
  }
}
var obj1 = new Circle(1.0,"red");

console.log(obj1.radiusCircle);
obj1.radiusCircle = 2.2
console.log(obj1.radiusCircle);

console.log(obj1.colorCircle);
obj1.colorCircle = "blue";
console.log(obj1.colorCircle);

console.log(obj1.toString);

console.log(obj1.areaCircle);

console.log(obj1.circumferenceCircle);



//c.Write a “person” class to hold all the details.


class Person{
  constructor(firstname,lastname,Dob,location)
  {
      this.firstname = firstname;
      this.lastname = lastname;
      this.Dob = Dob;
      this.location = location;
  }
}
const person1 = new Person("Mani", "Rajkumar", "30.09.2002" , "Chennai");
const person2 = new Person("Manju", "Iyappan", "4.05.2003" , "Mumbai");
const person3 = new Person("Kavya", "Raj", "07.09.2005" , "Chennai");
const person4 = new Person("Nisha", "Kalam", "01.11.2003" , "Thanjavur");
const person5 = new Person("Pavithra", "Mariyapan", "8.07-2007" , "Thanjavur")


;

console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.Dob);
console.log(person1.location);

console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.Dob);
console.log(person2.location);

console.log(person3.firstname);
console.log(person3.lastname);
console.log(person3.Dob);
console.log(person3.location);

console.log(person4.firstname);
console.log(person4.lastname);
console.log(person4.Dob);
console.log(person4.location);

console.log(person5.firstname);
console.log(person5.lastname);
console.log(person5.Dob);
console.log(person5.location);


console.log(`All the Person Names are "person1" : ${person1.firstname}
"person2":${person2.firstname}
"person3":${person3.firstname}
"person4":${person4.firstname}
"person5":${person5.firstname}`)


//d.write a class to calculate the Uber price

class UberPriceCalculator {
  constructor() {
    this.baseFare = 80;
    this.costPerKilometer = 30;
    this.costPerMinute = 3.5;
    this.bookingFee = 50;
  }

  calculatePrice(distanceInKilometers, timeInMinutes) {
    // Calculate the fare based on distance and time
    var distanceCost = this.costPerKilometer * distanceInKilometers;
    var timeCost = this.costPerMinute * timeInMinutes;

    // Total Price Calculation
    var totalPrice = this.baseFare + distanceCost + timeCost + this.bookingFee;

    return totalPrice;
  }
}

// Example:
var calculator = new UberPriceCalculator();
var distanceInKilometers = 8.0; // Distance in kilometers
var timeInMinutes = 20; // Time in minutes

var estimatedPriceINR = calculator.calculatePrice(distanceInKilometers, timeInMinutes);
console.log(`Estimated Uber price in INR: ₹${estimatedPriceINR}`);
