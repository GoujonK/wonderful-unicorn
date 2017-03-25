/**
 * Created by Kevin on 24/03/2017.
 */

console.log('Welcome to this wonderful and very useful simulation');

class Deadpool{
    constructor(regeneration, stamina){
        this.regeneration = regeneration;
        this.stamina = stamina;
    }

    recovering(poney){
        if(poney.unicorned == true){
            this.stamina = 100;
            console.log('IMPORTANT NOTIFICATION DEADPOOL REFUEL. Poor poney ! Deadpool sucked the power of', poney.name, ' and has now 100 stamina');
            poney.reponeysotron();
        }
    }

    hurted(){
        this.stamina = this.stamina - 5;
        console.log('Deadpool did it. Again. He lost 5 points of stamina. He is now at ', this.stamina);
    }

    unicornTransformation(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5)
                {
                    resolve();
                }
                else
                {
                    reject();
                }
            }, 3000);
        });
    }
}

class Spidey {
    constructor(unicornAbusing) {
        this.unicornAbusing = unicornAbusing;
    }

    unicornRiding(poney) {
        poney.spidermanRider();
    }
}

class Poney {
    constructor(id, name, unicorned, stamina, abused) {
        this.unicorned = unicorned;
        this.stamina = stamina;
        this.abused = abused;
        this.id = id;
        this.name = name;
        this.deadpool = new Deadpool(false,10);
        console.log(this.name, ' as spawn. Is it a unicorn yet? ', this.unicorned, ' but his stamina is at ', this.stamina);
    }

    unicornisation(){
        this.deadpool.unicornTransformation()
            .then(() => {
                this.unicorned = true;
                console.log('IMPORTANT NOTIFICATION UNICORNISATION ', this.name, 'has achieved his purpose on Earth: He is a majestic Unicorn now !');
        })
            //.catch(() => {})
    }

    reponeysotron(){
        this.unicorned = false;
        this.stamina = 0;
        console.log(this.name, ' turned back to his original form: A simple poney.');
    }

    spidermanRider(){
        if (this.unicorned = true)
        {
            this.abused = true;
            this.stamina = 0;
            console.log('IMPORTANT NOTIFICATION SPIDERMAN ', this.name, ' is under attack. God damn you Spiderman, J. Jonah Jameson tried to warn us !');
            this.reponeysotron();
        }
    }

    eatingGrass(){
        this.stamina = this.stamina + 5;
        console.log(this.name, ' is eating some grass to regain his stamina. Stamina: ', this.stamina);
    }

}

function Random()
    {
        var id = Math.floor((Math.random() * 5));
        return id;
    }


module.exports ={Deadpool, Spidey, Poney, Random};