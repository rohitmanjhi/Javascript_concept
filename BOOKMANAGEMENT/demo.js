var book=[]
var input=prompt("which operation you want to perform [add|delete|list|exit] ")
while(input !='exit'){

  if(input=='add'){
      addBook();
    }
  else if(input=='list'){
    listBook();
  }
  else if(input=='delete'){
    deleteBook();
  }
  else{
    console.log('Please choose valid option');
  }
  var input=prompt("which operation you want to perform [add|delete|list|exit] ")

}
console.log("Thanks for using our application");

function addBook(){
  var newBook=prompt("Enter book name to add");
  book.push(newBook)
}

function listBook()
{
   console.log("List of available books");
   for(x of book){
    console.log(x);
}}

function deleteBook(){
   var name=prompt("enter the book to delete")
   var index=book.indexOf(name)
   if(index==-1){
     console.log("specified book not available");
   }
   else{
     book.splice(index,1)
     console.log("Book is deleted");
   }
}
1)/*var num={fno:100,sno:200,tno:300}

console.log(key+':'+num.[key])
//VM341:1 Uncaught SyntaxError: Unexpected token [
for(key in num)
    console.log(num+':'+num[key])

undefined
for(key in num)
    console.log(key+':'+num[key])*/

2)/*var movies=[{name:'Bahubali',year:2016,hero:'Prabhas'},  {name:'Sanju',year:2018,hero:'Ranveer'}, {name:'Spider',year:2017,hero:'Mahesh'}  ]
undefined
movies[0]['name']
"Bahubali"*/
