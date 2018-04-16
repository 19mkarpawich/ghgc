
VIDEOS.add('overpop', overpopVideo, function() {
    VIDEOS.play('coast');
    GAME_STATE = GS_INTRO_CF;
});

VIDEOS.add('coast', coastVideo, function() {
    GAME_STATE = GS_BACK;
});

VIDEOS.add('boom', boomVideo, function() {
    GAME_STATE = GS_ALT;
});

VIDEOS.add('success', succVideo, function() {
    GAME_STATE = GS_ALT;
});

VIDEOS.play('overpop');

var millis = 0;

function update() {
    if (GAME_STATE == GS_GAME) {
        var time = new Date().getTime();
        if (time - millis >= 600) {
            GAME.day();
            console.log(GAME);
            millis = time;
        }
    }
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    switch (GAME_STATE) {
        case GS_INTRO_OP:
            VIDEOS.draw('overpop',0,0,1200,958,0,0,800,600);
            context.font = '100px Roboto';
            context.fillStyle = 'white';
            context.strokeStyle = 'black';
            context.fillText('9.6 billion',190,200);
            context.strokeText('9.6 billion', 190, 200);
            context.font = '50px Roboto';
            context.fillText('world pop. 2050', 230, 290);
            context.strokeText('world pop. 2050', 230, 290);
            break;
        case GS_INTRO_CF:
            VIDEOS.draw('coast', 0, 0, 1024, 684, 0,0, 800, 600);
            context.font = '150px Roboto';
            context.fillStyle = 'white';
            context.strokeStyle = 'black';
            context.fillText('490', 270, 180);
            context.strokeText('490', 270, 180);
            context.font = '50px Roboto';
            context.fillText('coastal communities', 170, 320);
            context.strokeText('coastal communities', 170, 320);
            context.fillText('experiencing chronic flooding', 65, 365);
            context.strokeText('experiencing chronic flooding', 65, 365);
            context.font = '75px Roboto';
            context.fillText('in 2100', 270, 420);
            context.strokeText('in 2100', 270, 420);
            break;
        case GS_BACK:
            context.drawImage(backImage,0,0,800,600,0,0,800,600);
            break;
        case GS_DIR:
            context.drawImage(dirImage, 0, 0, 800, 600, 0, 0, 800, 600);
            break;
        case GS_START:
            context.drawImage(startImage, 0, 0, 800, 600, 0, 0, 800, 600);
            break;
        case GS_GAME:
            var counters = GAME.counters;

            context.drawImage(idleImage,0,0,1920,1080,-100,0,800,600);
            context.font = '22px Roboto';
            context.lineWidth = 3;

            if (!GAME.robotMode) {
                for (var i = 1; i < counters.length; i++) {
                    var counter = counters[i];
                    var value = Math.floor(counter.value / 100 * ((i > 4) ? 315 : 150));
                    var curr = counter.counter;
                    var cooldown = Math.floor(((curr > counter.maxDays) ? counter.maxDays : curr) / counter.maxDays * ((i > 4) ? 315 : 150));
                    var x = ((i > 4 || i % 2 != 0) ? 425 : 590);
                    var y = ((i > 4) ? 270 + (i - 5) * 90 : (i > 2) ? 160 : 70);
                    context.fillStyle = 'white';
                    context.fillText(counter.name, x, y);
                    context.fillStyle = 'rgb(0,100,0)';
                    context.fillRect(x, y + 30, (i > 4) ? 315 : 150, 15);
                    context.fillStyle = 'rgb(0,175,0)';
                    context.fillRect(x, y + 30, value, 15);
                    context.strokeRect(x, y + 30, (i > 4) ? 315 : 150, 15);
                    context.fillStyle = 'rgb(0,110,255)';
                    context.fillRect(x, y + 50, cooldown, 15);
                    context.strokeRect(x, y + 50, (i > 4) ? 315 : 150, 15);
                }
            }else{
                var fuelCounter = counters[1];
                var fuelValue = Math.floor(fuelCounter.value / 100 * 315);
                var fuelCurr = fuelCounter.counter;
                var fuelCooldown = Math.floor(((fuelCurr > fuelCounter.maxDays) ? fuelCounter.maxDays : fuelCurr) / fuelCounter.maxDays * 315);
                context.fillStyle = 'white';
                context.fillText(fuelCounter.name, 425, 70);
                context.fillStyle = 'rgb(0,100,0)';
                context.fillRect(425, 100, 315, 15);
                context.fillStyle = 'rgb(0,175,0)';
                context.fillRect(425, 100, fuelValue, 15);
                context.strokeRect(425, 100, 315, 15);
                context.fillStyle = 'rgb(0,110,255)';
                context.fillRect(425, 120, fuelCooldown, 15);
                context.strokeRect(425, 120, 315, 15);

                var eduCounter = counters[2];
                var eduValue = Math.floor(eduCounter.value / 100 * 315);
                var eduCurr = eduCounter.counter;
                var eduCooldown = Math.floor(((eduCurr > eduCounter.maxDays) ? eduCounter.maxDays : eduCurr) / eduCounter.maxDays * 315);
                context.fillStyle = 'white';
                context.fillText(eduCounter.name, 425, 160);
                context.fillStyle = 'rgb(0,100,0)';
                context.fillRect(425, 190, 315, 15);
                context.fillStyle = 'rgb(0,175,0)';
                context.fillRect(425, 190, eduValue, 15);
                context.strokeRect(425, 190, 315, 15);
                context.fillStyle = 'rgb(0,110,255)';
                context.fillRect(425, 210, eduCooldown, 15);
                context.strokeRect(425, 210, 315, 15);
            }

            var daysLeft = Math.floor(GAME.days / GAME.daysMission * 590);
            context.fillStyle = 'rgb(100,0,0)';
            context.fillRect(58,550,590,25);
            context.fillStyle = 'rgb(255,0,0)';
            context.fillRect(58, 550, daysLeft, 25);
            context.strokeRect(58, 550, 590, 25);

            context.fillStyle = 'rgb(150,0,0)';
            context.fillRect(670, 540, 110, 40);
            context.fillStyle = 'white';
            context.font = '23px Roboto';
            context.fillText('LAUNCH',678,549);

            context.font = '40px Roboto';
            context.fillText('$' + GAME.money,20,20);

            context.font = '20px Roboto';
            context.fillText('DELAYS LEFT: ' + GAME.delays + '/' + 3, 20, 60);
            context.fillText('AD CAMPAIGNS: ' + GAME.campaigns.campaigns.length + '/' + 5, 20, 85);
            context.fillStyle = 'red';
            context.fillText('LAUNCH: ' + (GAME.daysMission - GAME.days) + " days", 20, 110);
            break;
        case GS_END_SUCCESS:
            VIDEOS.draw('success', 0, 0, 1920, 1080, 0, 0, 800, 600);
            context.fillStyle = 'red';
            context.font = '150px Roboto';
            context.fillText('SUCCESS', 75, 250);
            break;
        case GS_END_FAIL:
            VIDEOS.draw('boom',0,0,800,450,0,0,800,600);
            context.fillStyle = 'red';
            context.font = '150px Roboto';
            context.fillText('FAILED',180,250);
            break;
        case GS_ALT:
            context.drawImage(altImage, 0, 0, 800, 600, 0, 0, 800, 600);
            break;
    }
}

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);