/*Ejercicio 1 - “Cuenta bancaria”
1. Definir un nuevo objeto cuenta que contenga las siguientes propiedades:
a. Número de cuenta
b. Saldo
c. Titular
2. Crear un método llamado deposito que tenga como parámetros de entrada la
cantidad de dinero. Al hacer un depósito la cantidad de dinero se debería sumar al
saldo existente. El método deberá también imprimir por pantalla el tipo de
transacción realizada y el nuevo saldo.
3. Crear un nuevo método llamado extraccion, al igual que el método depósito deberá
constar de un parámetro numérico que será la cantidad de dinero que queremos
extraer, dicha cantidad se restará al saldo existente. En caso de que el monto de
extracción sea mayor al saldo disponible, deberá imprimir por pantalla el mensaje
“Fondos Insuficientes”, caso contrario deberá imprimir el tipo de transacción
realizada y el nuevo saldo.
4. Crear una función constructora a partir de nuestro objeto cuenta.
5. Instanciar los objetos con diferentes valores iniciales y probar los métodos.*/





let cuenta = {
    numeroCuenta : 1234,
    saldo : 0,
    titular : "Juana",
    deposito : function(cantidadDinero){
        this.saldo = this.saldo + cantidadDinero
        console.log('Deposito realizado con exito, su saldo actual es de: '+ this.saldo);
    },
    extraccion: function (cantidadDinero) {
        if ( cantidadDinero > this.saldo) {
            console.log('Fondos insuficientes');
        }else{
            this.saldo = this.saldo - cantidadDinero;
            console.log('Extraccion realizada con exito, su saldo actual es '+ this.saldo);
    
        }
    }
 }


cuenta.deposito(10000);
cuenta.deposito(5000);

function Cuenta(numeroDeCuenta, saldo, titular) {
    this.numeroDeCuenta = numeroDeCuenta;
    this.saldo = saldo;
    this.titular = titular;
    this.deposito = function(cantidadDinero){
        this.saldo = this.saldo + cantidadDinero
        console.log('Deposito realizado con exito, su saldo actual es de: '+ this.saldo);
    },
    this.extraccion = function (cantidadDinero) {
        if ( cantidadDinero > this.saldo) {
            console.log('Fondos insuficientes');
        }else{
            this.saldo = this.saldo - cantidadDinero;
            console.log('Extraccion realizada con exito, su saldo actual es '+ this.saldo);
    
}