export class RaceTrack {

    constructor(parentEl){
        this.parentEl = parentEl;
        this.dogs = [];

        let buttonEl = document.createElement('button');
        buttonEl.innerText = "Bang!";
        buttonEl.addEventListener('click', () => this.StartRace());

        this.parentEl.appendChild(buttonEl);
       
    }

    StartRace(){

        this.dogs.forEach(dog => {
            let random = Math.random() * 2 + 10;
            let a = Math.random();
            let b = Math.random();
            let c = Math.random();
            let d = Math.random();
            dog.style = `animation: run ${random}s cubic-bezier(${a},${b},${c},${d})`;

            dog.addEventListener('animationend', (dog) => {
                console.log('finished');
            });
        });

    }

    addDog(dog){
        let raceTrackTrack = document.createElement('div');
        let raceTrackTrackTrack = document.createElement('div'); //Die gaat echt bewegen trucje voor CSS
        raceTrackTrackTrack.classList.add('dog-runner');
        let image = document.createElement('img');
        image.src = dog.image;
        image.setAttribute('draggable', true);
        raceTrackTrackTrack.appendChild(image);
        this.dogs.push(raceTrackTrackTrack);
        raceTrackTrack.appendChild(raceTrackTrackTrack)
        this.parentEl.appendChild(raceTrackTrack);
    }
}