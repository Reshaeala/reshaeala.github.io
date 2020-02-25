//console.log($);

// const images = ('<img>')


$('form').on('submit', (event) => {

      event.preventDefault();

      const userInput = $('input[type = "text"]').val().toLowerCase();

      $.ajax({
          url:  `https://pokeapi.co/api/v2/pokemon/${userInput}`
          }).then(
            (data) => {
               console.log(data);
                $('.pokieName').html(data.name);

                let $pokieImage = $('<img>').addClass('pokieImage');
                 $pokieImage.append(data.sprites.front_default)
                $('.pokemon').append($pokieImage)
             //console.log(data[0].);

               //console.log(data.abilities[0].ability.name);
                 //  $('.pokieName').html(pokieAbilities)

              //console.log(data[0].);
                //console.log(data.abilities[0].ability.name);

                for (let i = 0; i < data.abilities.length; i++) {
                    //console.log(data.abilities);
                      let $pokieAbilities =$('<p>').text(data.abilities[i].ability.name);

                    //  console.log($pokieAbilities);

                   $('.ability').append($pokieAbilities)

                }
              },

          (error)=>{
            console.log('bad request');
            }
          );
             $
  })
