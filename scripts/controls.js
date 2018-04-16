CONTROLS = {
    adCampaign: {
        disabled: false,
        click: function() {
            if (!CONTROLS.adCampaign.disabled) {
                if (!GAME.call_campaign()) disable('adCampaign');
            }
         }
    },
    announceDelay: {
        disabled: false,
        click: function() { 
            if (!CONTROLS.announceDelay.disabled) {
                GAME.call_delay();
            }
        }
    },
    oxygen: {
        disabled: false,
        click: function() { 
            if (!CONTROLS.oxygen.disabled) {
                GAME.call_oxygen();
            }
        }
    },
    water: {
        disabled: false,
        click: function() {
            if (!CONTROLS.water.disabled) {
                GAME.call_water();
            }
         }
    },
    food: {
        disabled: false,
        click: function() {
            if (!CONTROLS.food.disabled) {
                GAME.call_food();
            }
         }
    },
    fuel: {
        disabled: false,
        click: function() { 
            if (!CONTROLS.fuel.disabled) {
                GAME.call_fuel();
            }
        }
    },
    acclimatization: {
        disabled: false,
        click: function() { 
            if (!CONTROLS.acclimatization.disabled) {
                GAME.call_acclimatization();
            }
        }
    },
    conditioning: {
        disabled: false,
        click: function() { 
            if (!CONTROLS.conditioning.disabled) {
                GAME.call_conditioning();
            }
        }
    },
    education: {
        disabled: false,
        click: function() { 
            if (!CONTROLS.education.disabled) {
                GAME.call_education();
            }
        }
    }
}

CONTROLS.adCampaign.controller = pubFolder.add(CONTROLS.adCampaign, 'click').name('ad campaign');
CONTROLS.announceDelay.controller = pubFolder.add(CONTROLS.announceDelay, 'click').name('delay (30 days)');

CONTROLS.oxygen.controller = resFolder.add(CONTROLS.oxygen, 'click').name('oxygen');
CONTROLS.food.controller = resFolder.add(CONTROLS.food, 'click').name('food');
CONTROLS.water.controller = resFolder.add(CONTROLS.water, 'click').name('water');
CONTROLS.fuel.controller = resFolder.add(CONTROLS.fuel, 'click').name('fuel');

CONTROLS.acclimatization.controller = trainFolder.add(CONTROLS.acclimatization, 'click').name('acclimatization');
CONTROLS.conditioning.controller = trainFolder.add(CONTROLS.conditioning, 'click').name('conditioning');
CONTROLS.education.controller = trainFolder.add(CONTROLS.education, 'click').name('education');

pubFolder.open();
resFolder.open();
trainFolder.open();

function disable(name) {
    var control = CONTROLS[name];
    if (!control.disabled) {
        control.disabled = true;
        control.controller.domElement.parentNode.parentNode.classList.add('disabled');
    }
}

function enable(name) {
    console.log(name);
    var control = CONTROLS[name];
    if (control.disabled) {
        control.disabled = false;
        control.controller.domElement.parentNode.parentNode.classList.remove('disabled');
    }
}

function isDisabled(name) {
    return CONTROLS[name].disabled;
}

canvas.addEventListener('click',function(event) {
    if (GAME_STATE == GS_GAME) {
        var x = Math.floor(event.offsetX / 600 * 800), y = Math.floor(event.offsetY / 450 * 600);
        if (!(x < 670 || x > 780 || y < 540 || y > 580)) {
            GAME.call();
        }
    }else if (GAME_STATE == GS_BACK) {
        GAME_STATE = GS_DIR;
    } else if (GAME_STATE == GS_DIR) {
        GAME_STATE = GS_START;
    }else if (GAME_STATE == GS_START) {
        GAME_STATE = GS_GAME;
    }else if (GAME_STATE == GS_ALT) {
        disable('adCampaign');
        disable('announceDelay');
        disable('oxygen');
        disable('food');
        disable('water');
        disable('fuel');
        disable('acclimatization');
        disable('conditioning');
        disable('education');
        GAME = new Game(true);
        GAME_STATE = GS_GAME;
    }
});


disable('adCampaign');
disable('announceDelay');
disable('oxygen');
disable('food');
disable('water');
disable('fuel');
disable('acclimatization');
disable('conditioning');
disable('education');