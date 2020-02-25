//console.log($);

// const images = ('<img>')

$(() => {


const $openWho = $('.who');
const $closeWho = $('.close');
const $modal = $('.pokemon');

const openModal = () => {
  $modal.css('display', 'block');
}

const closeWho = () => {
  $modal.css('display', 'none');
}

$openWho.on('click', openModal);
console.log($openWho);
//$closeWho.on('click', $closeWho);
})


$('form').on('submit', (event) => {

  event.preventDefault();
  //hiding image and ablities so they don't repeat
  $('.pokieImage').hide();
  $('.pokieAbilities').hide();
  $('.pokieTypes').hide();
  $('.yourType').hide();



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
          const electricType = $('<p>').text(`Being an Electric-type Pokémon fan means you're a bit of a live wire! You've got a spark for life and have a wave of energy flowing between you and everyone you meet. You exude a special kind of power and attract attention no matter where you are or what you're doing. You're large and in charge, and you love it.`).addClass('yourType');

          $('.type').append(electricType);

        } if((data.types[i].type.name) === 'normal'){
          const normalType = $('<p>').text(`Normal-type Pokémon-lovers are well-rounded with lots of friends from all walks of life. You probably have many interests and know how to keep your school, family and social life in a good balance. You're easy to like and reliable, and people feel they can turn to you when they're in need of a helping hand.`).addClass('yourType');

          $('.type').append(normalType);

        }if((data.types[i].type.name) === 'fighting'){
          const fightingType = $('<p>').text(`If you're a Fighting-type Pokémon fan, you lead an active lifestyle and love to work out to work off steam. When faced with a problem, you tackle it head-on and don't let it stick around too long so it doesn't bog you down. We're not saying you look for fights, but when you do get into an argument, you almost always win.`).addClass('yourType');

          $('.type').append(fightingType);

        }if((data.types[i].type.name) === 'flying'){
          const flyingType = $('<p>').text(`If you're a Flying-type Pokémon collector, you love open spaces, fresh air and the freedom that comes with exploring the great outdoors. You're wise beyond your years, always evaluating a situation from new perspectives, and seeking new opportunities. After all, you're no good at staying caged up inside for too long.`).addClass('yourType');

          $('.type').append(flyingType);

        }if((data.types[i].type.name) === 'poison'){
          const posionType = $('<p>').text(`Fans of Poison-type Pokémon know how to handle any situation and can shape even the worst circumstances into their favor. You don't solve problems with brute force—instead, you always seek creative solutions to whatever task is at hand. You know that sometimes chipping away at an issue over a period of time is better than trying to get rid of all of it at once.`).addClass('yourType');

          $('.type').append(posionType);

        }if((data.types[i].type.name) === 'ground'){
          const groudType = $('<p>').text(`If you're obsessed with Ground-type Pokémon, you're down to earth and totally grounded. You're one with the earth around you, and when you're feeling down, going on a hike or exploring an unusual new place can make you feel like a whole new person. You like working with others to really get a movement going.`).addClass('yourType');

          $('.type').append(groundType);

        }if((data.types[i].type.name) === 'rock'){
          const rockType = $('<p>').text(`Loving Rock-type Pokémon means you're a steady and reliable friend, but also one who's super stubborn and rarely changes your mind about something once it's been set. You're the backbone of your friend group and things just wouldn't be the same without your sturdy foundation.`).addClass('yourType');

          $('.type').append(rockType);

        }if((data.types[i].type.name) === 'bug'){
          const bugType = $('<p>').text(`If you can't get enough of Bug-type Pokémon, you're probably a social butterfly. You've probably gone through a transformation or two in your life already, and you should know that if things ever get tough for you, things will change yet again and it will definitely get better. You are very detail-oriented and sweat the small stuff, in a good way. No little issue goes unfixed when you're around.`).addClass('yourType');

          $('.type').append(bugType);

        }if((data.types[i].type.name) === 'ghost'){
          const ghostType = $('<p>').text(`Ghost-type Pokémon fanatics are mysterious and hard to know, but deeply loyal to the people who make the effort to befriend them. You're very empathetic and can always relate to others' problems. Nothing fazes you and you can survive the scariest of horror movies with ease. You're also an inventive thinker, addressing problems with solutions that no one else would ever consider.`).addClass('yourType');

          $('.type').append(ghostType);

        }if((data.types[i].type.name) === 'steel'){
          const steelType = $('<p>').text(`If you're a lover of Steel-type Pokémon, you're a hardy and resourceful person who loves to innovate. You're a practical thinker who likes to make sure that the people around you get the job done and do it right. This might lead people to see you as inflexible, but at the end of the day you can sleep easy knowing that you took pride in the project.`).addClass('yourType');

          $('.type').append(steelType);

        }if((data.types[i].type.name) === 'fire'){
          const fireType = $('<p>').text(`Love Fire-type Pokémon? You've probably got a lively, outgoing personality and a burning enthusiasm for the things you love most. Your passion comes in spurts, when one moment you'll be keen on a project and the next you'll be totally over it. You know that the tiniest spark of interest has the potential to create big things. Your actions aren't always going to be predictable, but that's what makes you who you are.`).addClass('yourType');

          $('.type').append(fireType);

        }if((data.types[i].type.name) === 'water'){
          const waterType = $('<p>').text(`If you're a lover of all Water-type Pokémon, you always go with the flow. Depending on your mood, you might be soft and gentle or fierce and mighty. Your emotions are powerful and govern the way you live your life. When you put your mind to something, you know precisely how to channel all of your efforts and resources to make it happen.`).addClass('yourType');

          $('.type').append(waterType);

        }if((data.types[i].type.name) === 'grass'){
          const grassType = $('<p>').text(`If you're a Grass-type Pokémon fan, you're a nature-lover who's one with the great outdoors. No matter how many different things are going on around you, you always love the chance to play a small part in everything. When things aren't going your way, a walk through greenery is the perfect thing to help you feel refreshed and new every time.`).addClass('yourType');

          $('.type').append(grassType);

        }if((data.types[i].type.name) === 'psychic'){
          const psychicType = $('<p>').text(`If you can't get enough of Psychic-type Pokémon, you're completely in tune with yourself. You've got a bit of a sixth sense, always able to anticipate the results that will stem from your actions, as well as the actions of those around you. You also love fortune telling, palm reading and anything mystical.`).addClass('yourType');

          $('.type').append(psychicType);

        }if((data.types[i].type.name) === 'ice'){
          const iceType = $('<p>').text(`Fans of Ice-type Pokémon have a ton on their minds, which can sometimes make them seem cold or distant. You don't always let people in, but that's only because you're lost in thought. You can sometimes come off as quite serious, despite your inner warm-hearted and playful nature. There's definitely more to you than there appears at first glance!`).addClass('yourType');

          $('.type').append(iceType);

        }if((data.types[i].type.name) === 'dragon'){
          const dragonType = $('<p>').text(`Dragon-type Pokémon devotees have big personalities and love to be the center of attention. You love to steal the show wherever you go, and don't mind taking the spotlight away from others. You like to make bold statements and important decisions that instigate big changes. You're not one to let other people take credit for your work or walk into a party unnoticed.`).addClass('yourType');

          $('.type').append(dragonType);

        }if((data.types[i].type.name) === 'dark'){
          const darkType = $('<p>').text(`If you're obsessed with Dark-type Pokémon, chances are that you're totally misunderstood. You're kind and friendly but also very ambitious, which can make you seem pushy, as well as hyper-focused, which can make it appear that you're no fun. Neither of those things is true, but you might have to work to get people to see your true colors.`).addClass('yourType');

          $('.type').append(darkType);

        }if((data.types[i].type.name) === 'fairy'){
          const fairyType = $('<p>').text(`If you're a fan of all Fairy-type Pokémon, you're cute, elegant and have way more to you than people might think at first glance. You put a lot of care into your appearance, which might make others think you have a shallow personality, but you're actually compassionate, intuitive and even a little big magical.`).addClass('yourType');

          $('.type').append(fairyType);
        }

      }

      (error)=>{
        console.log('bad request');
      }

    })
  })
