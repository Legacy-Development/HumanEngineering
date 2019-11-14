#include <stdio.h>
/*imprime las temperaturas de Celcius a Fahrentheit*/
int main(){
    printf("Celsius Fahrentheit\n");

    float celsius, fahr;
    int lower, upper, step;

    lower = 0;
    upper = 300;
    step = 20;

    celsius = lower;
    while(celsius = upper){
        fahr = (fahr-32.0) * (5.0/9.0);
        printf("%3.0f \t %6.1f \n",celsius, fahr);
        celsius = celsius + step;
    }
}
