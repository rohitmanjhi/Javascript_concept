var movies=[{name:'Bahubali',isWatched:'true',isHit:'true'},
            {name:'sanju',isWatched:'false',isHit:'true'},
          {name:'spyder',isWatched:'true',isHit:'false'}
        ]
        movies.forEach(function(movie){
          var result=''
          if(movie.isWatched=='true'){
            result = result+'I watched';
          }
          else{
            result = result+ 'I have not Watched';
          }
            result = result + movie.name;
            if(movie.isHit=='true'){
              result = result + 'and movie is Hit!!!'
            }
            else{
              result = result +' and movie is Floop!!!'
            }
          })
            console.log(result);
