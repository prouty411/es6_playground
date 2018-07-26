// import elementToBody from './add_to_dom';
// import $ from 'jquery';
import {Person,SuperPerson} from './person';
const bob = new Person('cartman');
console.log(bob.speak('my name is cartman'));
const kermit = new SuperPerson('kermit' , 'instant baked potatoes');
kermit.speak('Hello , I am kermit the frog');
kermit.saySuperpower();


// elementToBody('h1','this stuff is insane!!');
// elementToBody('p','here is some other stuff ,battle of mount fuji!!');
// $('body').append('<h1> i came from jquery sucka </h1>');


