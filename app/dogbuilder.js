export class DogBuilder
{
    parentEl;

    constructor(parentEl){
        this.parentEl = parentEl;

        this.steps = [
            {
                stepName: "Stap 1",
                fields:[
                    {
                        name: 'dogName',
                        type: 'text',
                        label: 'Dog Name',
                    },
                    {
                        name: 'dogType',
                        type: 'select',
                        label: 'Dog Type',
                    }
                ]
            }, 
            {},
            {}
        ];

        //Fix de step index
        this.drawStep(0);
    }

    drawStep(stepNr){

        let step = this.steps[stepNr];
        let stepEl = document.createElement('form');

        
        //maak titel
        let stepNameEl = document.createElement('h2');
        stepNameEl.innerText = step.stepName;
        stepEl.appendChild(stepNameEl);

        //maak de kleine bolletjes
        let stepBulletsEl = document.createElement('div');
        stepBulletsEl.classList.add('step-bullets');	
        let nrOfBullets = this.steps.length;
        for(let i = 0; i < nrOfBullets; i++){
            let bulletEl = document.createElement('div');
            bulletEl.classList.add('bullet');
            if(i <= stepNr){
                bulletEl.classList.add('active');
            }
            stepBulletsEl.appendChild(bulletEl);
        }
        stepEl.appendChild(stepBulletsEl);
        
        //maak de input fields aan
        //Welke properties zijn input fields?
        step.fields.forEach(field => {
            let labelEl = document.createElement('label');
            labelEl.innerText = field.label;

            let inputEl = document.createElement('input');
            inputEl.setAttribute('type', field.type);
            inputEl.setAttribute('name', field.name);
            stepEl.appendChild(labelEl);
            stepEl.appendChild(inputEl);

        });

        let buttonEl    = document.createElement('button');
        buttonEl.innerText = 'Next';
        buttonEl.type = 'submit';//belangrijk
        stepEl.appendChild(buttonEl);

        stepEl.addEventListener('submit', (e) => {
            e.preventDefault();
            this.nextStep(e.target);
        });

        this.parentEl.appendChild(stepEl);

    }

    nextStep(form){
        //roep hier stap 2 aan
        let formdata = new FormData(form);
        const data = Object.fromEntries(formdata.entries());
        console.log(data);
    };
}