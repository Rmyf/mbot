var five = require("johnny-five");

function right() {
    var max_speed_l = 140;
    var max_speed_r = 150;
    var l_motor = r_motor = null;
    var stdin = process.stdin;
    stdin.setRawMode(true);
    var board = new five.Board({
        port: "/dev/ttyUSB0"
    });

    board.on("ready", function (err) {
        if (err) {
            console.log(err);
            return;
        }
        l_motor = new five.Motor({
            pins: {
                pwm: 6,
                dir: 7
            }
        });
        r_motor = new five.Motor({
            pins: {
                pwm: 5,
                dir: 4
            }
        });
        console.info("right");
        r_motor.reverse(max_speed_r);
        l_motor.reverse(max_speed_l);
        setTimeout(function () {
            l_motor.stop();
            r_motor.stop();
        }, 250);
    });
}
right();