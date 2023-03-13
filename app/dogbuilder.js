export class DogBuilder
{
    parentEl;

    constructor(parentEl, callback){
        this.parentEl = parentEl;
        this.stepcounter = 0;
        this.callback = callback;

        this.steps = [
            {
                stepName: "Stap 1",
                fields:[
                    {
                        name: 'dogName',
                        type: 'text',
                        label: 'Dog Name',
                        required: true
                    },
                    {
                        name: 'dogType',
                        type: 'select',
                        label: 'Dog Type',
                    }
                ]
            }, 
            {
                stepName: "Stap 2",
                fields:[
                    {
                        name: 'dogAge',
                        type: 'number',
                        label: 'Dog Age',
                        required: true
                    },
                    {
                        name: 'dogSize',
                        type: 'number',
                        label: 'Dog Size',
                        required: true
                    }
                ]
            }
        ];

        //Fix de step index
        this.drawStep(this.stepcounter);
    }

    drawStep(stepNr){

        this.parentEl.innerHTML = '';

        let step = this.steps[stepNr];
        let formEl = document.createElement('form');

        
        //maak titel
        let stepNameEl = document.createElement('h2');
        stepNameEl.innerText = step.stepName;
        formEl.appendChild(stepNameEl);

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
        formEl.appendChild(stepBulletsEl);
        
        //maak de input fields aan
        //Welke properties zijn input fields?
        step.fields.forEach(field => {
            let labelEl = document.createElement('label');
            labelEl.innerText = field.label;

            let inputEl = document.createElement('input');
            inputEl.setAttribute('type', field.type);
            inputEl.setAttribute('name', field.name);
            inputEl.setAttribute('required', field.required);
            formEl.appendChild(labelEl);
            formEl.appendChild(inputEl);

        });


        let isLastStep = stepNr >= this.steps.length - 1;

        let buttonEl    = document.createElement('button');
        buttonEl.innerText = isLastStep ? 'Finish' : 'Next';
        buttonEl.type = 'submit';//belangrijk
        formEl.appendChild(buttonEl);

        formEl.addEventListener('submit', (e) => {
            e.preventDefault();
            this.nextStep(e.target);
        });

        this.parentEl.appendChild(formEl);

    }
    nextStep(form){
        //roep hier stap 2 aan
        let formdata = new FormData(form);
        const data = Object.fromEntries(formdata.entries());
        this.dogdata = {...this.dogdata, ...data};

        this.stepcounter++;

        if(this.stepcounter >= this.steps.length){
            //laatste stop
            this.callback(this.dogdata); //eeeuhhh
            this.stepcounter = 0;
            this.drawStep(this.stepcounter);
        } else {
            this.drawStep(this.stepcounter);
        }
        //last step?
    };
}