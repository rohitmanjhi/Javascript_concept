/*var name=prompt("Enter Your Name:")
var actor=prompt("Enter Your Favourite Actor:")
var lucky=prompt("Enter Your Lucky Number:")
var dish=prompt("Enter Your Favourite Dish:")
var nameConition=false
 var actorCondition=false
 var luckyConition=false
var dishConition=false
if(name[0]=="d")
{
   nameConition=true
}
if(actor[actor.length-1]=="r"){
   actorCondition=true  }
if(lucky==7){
  luckyConition=true }
if(dish.length>=6){
   dishConition=true
  }
   alert("Hello:"+name+"\nThanks For Your Information")

    if(nameConition && actorCondition && luckyConition && dishConition){
       console.log("Hello Secret Agent our next operation is:")
        console.log("We have to kill atleast 10 sleeping students in the class room b'z these are burdent to country")
}
*/
function capital(name){
      return name[0].toUpperCase()+name.slice(1)}
console.log(capital('rohit'))
