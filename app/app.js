//Enige plek waar code staat buiten een klasse!
import {DogBuilder} from './dogbuilder.js';
import { RaceTrack } from './racetrack.js';


let dogBuilderEl = document.getElementById('dogbuilder');
let dogbuilder = new DogBuilder(dogBuilderEl, OnDogBuild);


let raceTrackEl = document.getElementById('racetrack');
let racetrack = new RaceTrack(raceTrackEl);

OnDogBuild({
    dogName: 'Fido',
})

OnDogBuild({
    dogName: 'Fido',
})

OnDogBuild({
    dogName: 'Fido',
})

async function OnDogBuild(dog){
    let response = await fetch('https://dog.ceo/api/breeds/image/random')
    let data = await response.json();
    let image = data.message;
    dog.image = image;
    racetrack.addDog(dog);
}
