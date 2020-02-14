class Baraja {
    constructor() {
        this.palo = [new Palo('trébol', 'negro', '♣'), new Palo('corazón', 'negro', '♠'), new Palo('corazón', 'rojo', '♥'), new Palo('diamante', 'rojo', '♦')];
        this.texto = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        this.mazo = [];
    }
    crear = () => {
        this.palo.forEach(function(p) {
            this.texto.forEach(function(r) {
                if (r === 'A') {
                    this.mazo.push(new Carta(p, r, [1, 11]));
                } else if (r === 'J' || r === 'Q' || r === 'K') {
                    this.mazo.push(new Carta(p, r, [10]));
                } else {
                    let numero = parseInt(r);
                    this.mazo.push(new Carta(p, r, [numero]));
                }
            },this);
        },this);
    }
}