class Counter {
    constructor(name, moneyChange, days, valueChange,special) {
        this.name = name;
        this.moneyChange = moneyChange;
        this.maxDays = days;
        this.counter = days;
        this.value = 0;
        this.valueChange = valueChange;
        this.called = false;
        this.special = special || false;
    }

    day(currMoney) {
        this.counter += 1;
        const newMoney = currMoney + this.moneyChange;
        const name = this.name;
        if (this.counter >= this.maxDays && newMoney > 0) {
            if (!this.special && this.value < 100) enable(name);
            if (this.called) {
                this.counter = 0;
                if (this.value < 100) {
                    this.value += this.valueChange;
                }else{
                    if(!this.special) disable(name);
                }
                this.called = false;
                return newMoney;
            }
        }else{
            if (!this.special) disable(name);
        }
        this.called = false;
        return currMoney;
    }

    call() {
        if (this.name != 'income') console.log(this.name + ": " + this.value);
        this.called = true;
    }
}


class Game {
    constructor(robotMode) {
        this.robotMode = robotMode;
        this.money = 0;
        this.days = 0;
        this.daysMission = genRandom(330,351);
        this.daysApoc = this.daysMission + genRandom(15,85);
        this.delays = 3;
        this.called = false;

        if (!this.robotMode) {
            this.counters = [
                new Counter('income', 10000, 30, 10,true),
                new Counter('oxygen', genRandom(70, 81) * -30, 30, 10), //300
                new Counter('food', genRandom(70, 81) * -12, 12, 5), //120
                new Counter('water', genRandom(70, 81) * -8, 8, 4),
                new Counter('fuel', genRandom(70, 81) * -60, 60, 20),
                new Counter('acclimatization', genRandom(70, 81) * -16, 16, 5),
                new Counter('conditioning', genRandom(70, 81) * -10, 10, 4),
                new Counter('education', genRandom(70, 81) * -8, 8, 4)
            ];
        }else{
            this.counters = [
                new Counter('income', 10000, 30, 10, true),
                new Counter('fuel', genRandom(70, 81) * -60, 60, 25),
                new Counter('education', genRandom(70, 81) * -8, 8, 4)
            ];
        }

        for (let i = 0; i < this.counters.length; i++) {
            const counter = this.counters[i];
            this['call_' + counter.name] = function() {
                counter.call();
            };
        }

        this.campaigns = new CampaignManager();
    }

    day() {
        if ((this.daysApoc - this.days > 0 && this.daysMission - this.days > 0 && !this.called)) {
                this.call_income();
                for (let i = 0; i < this.counters.length; i++) {
                    this.money = this.counters[i].day(this.money);
                }
                this.money = this.campaigns.day(this.money);
                if (this.days == 30) {
                     enable('announceDelay');
                }else if (this.delays == 0) {
                    disable('announceDelay');
                }
                if (this.days > 30) {
                    if (this.delayCalled && this.delays > 0) {
                        this.daysMission += 30;
                        this.delays -= 1;
                        if (this.days < 30) disable('announceDelay');
                    }
                    this.delayCalled = false;
                }
                this.days += 1;
        }else{
            this.end();
        }
        this.called = false;
    }

    end() {
        //take the current state of the game and decide whether the user won
        let victory = true;
        const counters = this.counters;
        for (let i = 1; i < counters.length; i++) {
            const counter = counters[i];
            const diff = (100 - counter.value) / 2;
            if (genRandom(1,101) <= diff) {
                victory = false;
                break;
            }
        }
        if (victory) {
            VIDEOS.play('success');
            GAME_STATE = GS_END_SUCCESS;
        } else {
            VIDEOS.play('boom');
            GAME_STATE = GS_END_FAIL;
        }
        //display the option to rerun the demo without humans
    }

    call_campaign() {
      this.campaigns.called = true;
    }

    call_delay() {
        this.delayCalled = true;
    }

    call() {
        this.called = true;
    }
}

class CampaignManager {
    constructor() {
        this.campaigns = [];
        this.called = false;
    }

    day(currMoney) {
        const campaigns = this.campaigns;
        let newMoney = currMoney;
        for (let i = campaigns.length - 1; i >= 0; i--) {
            const campaign = campaigns[i];
            if (campaign.days > 0) {
                campaign.day();
                newMoney += 350 - Math.abs(2 - i) * 35;
            }else {
                campaigns.splice(i);
            }
        }
        if (this.called && newMoney - 5000 > 0 && this.campaigns.length < 5) {
            this.campaigns.push({
                days: genRandom(15, 23),
                day: function () {
                    this.days -= 1;
                }
            });
            newMoney = newMoney - 5000;
        }
        if (newMoney >= 5000 && this.campaigns.length < 5) {
            enable('adCampaign');
        } else {
            disable('adCampaign');
        }
        this.called = false;
        return newMoney;
    }

}

GS_INTRO_OP = 0; //Intro > Overpopulation
GS_INTRO_CF = 1; //Intro > Coastal Flooding
GS_BACK = 7;
GS_DIR = 8;
GS_START = 2; //Backstory and directions
GS_GAME = 3; //Game
GS_END_SUCCESS = 4; //End > Success
GS_END_FAIL = 5; //End > Success
GS_ALT = 6;

GAME_STATE = GS_INTRO_OP;

GAME = new Game(false);
