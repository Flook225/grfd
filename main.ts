#define RED 2
#define YELLOW 3
#define GREEN 4

void setup() {
    pinMode(RED, OUTPUT);
    pinMode(YELLOW, OUTPUT);
    pinMode(GREEN, OUTPUT);
}

void loop() {
    digitalWrite(GREEN, HIGH);
    delay(10000); // 10 วินาที
    digitalWrite(GREEN, LOW);
    digitalWrite(YELLOW, HIGH);
    delay(2000); // 2 วินาที
    digitalWrite(YELLOW, LOW);
    digitalWrite(RED, HIGH);
    delay(12000); // 12 วินาที
    digitalWrite(RED, LOW);
}basic.forever(function () {
	
})
