var Player = function(name, leadership, reflex, skill, intel, conc, rage, fan)
{
    this.name = name;
    this.leadership = leadership;
    this.reflex = reflex;
    this.skill = skill;
    this.intel = intel;
    this.conc = conc;
    this.rage = rage;
    this.fan = fan;
}

Player.prototype.train = function(skillname, point)
{
    if (this[skillname] + point > 100)
	this[skillname] = 100;
    else
	this[skillname] += point;
}

var dendi = new Player("Dendi", 50, 80, 80, 90, 80, 80, 150000);
dendi.train(leadership, 10);
