#include <stdio.h>
/*const : antecede al tipo de dato que queremos crear y hace constante y no se podra modificar
el valor de la variable y en dado caso que se modifique el valor de la variable el compilador
mandara un error */

int main(){
    const int centinela = -1;
    int nota;

    printf("introdusca primer nota : ");
    scanf("%d",&nota);
    while(nota != centinela){
        printf("introdusca la siguiente nota : ");
        scanf("%d",&nota);
            break;
    }
    return 0;
}
