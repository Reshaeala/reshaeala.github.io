//console.log($);

// const images = ('<img>')


$('form').on('submit', (event) => {

  event.preventDefault();
  //hiding image and ablities so they don't repeat
  $('.pokieImage').hide();
  $('.pokieAbilities').hide();

  //user input
  const userInput = $('input[type = "text"]').val().toLowerCase();

  //where my information is coming from
  $.ajax({
    url:  `https://pokeapi.co/api/v2/pokemon/${userInput}`
  }).then(

    (data) => {
      //remove pokeball image
      $('.pokeBall').remove()
      console.log(data);

      //getting name of pokemon
      $('.pokieName').html(data.name).addClass('pokieName');

      //  console.log(data.sprites.front_default);

      //pokemon picture
      let $pokieImage = $(`<img src= ${data.sprites.front_default}>`).addClass('pokieImage');

      $('.pokemon').prepend($pokieImage)

      //loops through the pokemon abilities
      for (let i = 0; i < data.abilities.length; i++) {

          //console.log(data.abilities);
          let $pokieAbilities =$('<p>').text(data.abilities[i].ability.name).addClass('pokieAbilities');

          //  console.log($pokieAbilities);

          $('.ability').append($pokieAbilities)

      }

      //  console.log(data.types[0].type.name);
      for (let i = 0; i < data.types.length; i++) {
        //console.log(data.types[i].type.name);

        //pokemon types
        let $pokieTypes =$('<p>').text(data.types[i].type.name).addClass('pokieTypes');
        $('.type').append($pokieTypes);

        if ((data.types[i].type.name) === 'electric') {
          const electricType = $('<p>').text(`Being an Electric-type Pokémon fan means you're a bit of a live wire! You've got a spark for life and have a wave of energy flowing between you and everyone you meet. You exude a special kind of power and attract attention no matter where you are or what you're doing. You're large and in charge, and you love it.`);
          $('.type').append(electricType);

        } if((data.types[i].type.name) === 'normal'){
          const normalType = $('<p>').text(`Normal-type Pokémon-lovers are well-rounded with lots of friends from all walks of life. You probably have many interests and know how to keep your school, family and social life in a good balance. You're easy to like and reliable, and people feel they can turn to you when they're in need of a helping hand.`
        )}
        // }if((data.types[i].type.name) === 'normal'){
        //    const normalType = $('<p>').text(``)
        //  }if((data.types[i].type.name) === 'normal'){
        //     const normalType = $('<p>').text(``)
        //   }if((data.types[i].type.name) === 'normal'){
        //      const normalType = $('<p>').text(``)
        //    }if((data.types[i].type.name) === 'normal'){
        //       const normalType = $('<p>').text(``)
        //     }
      }

      (error)=>{
        console.log('bad request');
      }

    })
  })
