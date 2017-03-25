/**
 * Created by Kevin on 24/03/2017.
 */

const {Poney, Spidey, Deadpool, Random} = require('./declare.js');

var deadpool = new Deadpool(true, 90);
var spidey = new Spidey(false);
var herd = new Array(p0 = new Poney(0, 'Thorin', false, 85, false),
                     p1 = new Poney(1, 'Balin', false, 35, false),
                     p2 = new Poney(2, 'Dwalin', true, 0, false),
                     p3 = new Poney(3, 'Oin', false, 0, false),
                     p4 = new Poney(4, 'Gloin', false, 95, false));
                     //p5 = new Poney(5, 'Fili', false, 10, false),
                     //p6 = new Poney(6, 'Kili', false, 55, false),
                     //p7 = new Poney(7, 'Dori', true, 50, false),
                     //p8 = new Poney(8, 'Nori', true, 95, false),
                     //p9 = new Poney(9, 'Ori', false, 20, false),
                     //p10 = new Poney(10, 'Bifur', false, 60, false),
                     //p11 = new Poney(11, 'Bofur', false, 85, false),
                     //p12 = new Poney(12, 'Bombur', true, 0, false));

setInterval(function(){
    for (i = 0; i <= 4; i++)
    {
        if(herd[i].stamina >= 100)
        {
            herd[i].unicornisation();
        }
        if(herd[i].unicorned == true)
        {
            if(deadpool.regeneration == true)
            {
                deadpool.recovering(herd[i]);
            }
        }
        herd[i].eatingGrass();
    }
    deadpool.hurted();
    }, 2000);

setInterval(function(){
    var id = Random();

    console.log('My unicorn sense is tingling for ', herd[id].name);
    spidey.unicornRiding(herd[id]);
    if(herd[id].unicorned == true)
    {
        herd[id].reponeysotron();
    }
    herd[id].stamina = 0;
}, 4000);