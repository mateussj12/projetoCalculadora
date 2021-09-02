/**
 * Classe responsável por realizar as regras de negócio
 */
class CalController {
    
    constructor() {

        this._displayCalc = "0"
        this._dataAtual
    }

    get displayCalc() {
        return this._displayCalc
    }

    set displayCalc(valorDisplayCalc) {
        this._displayCalc = valorDisplayCalc
    }

    get dataAtual() {
        return this._dataAtual
    }

    set dataAtual(valorDataAtual) {
        this._dataAtual = valorDataAtual
    }
}