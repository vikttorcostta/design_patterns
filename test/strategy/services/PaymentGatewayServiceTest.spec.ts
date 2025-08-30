import { PaymentGatewayService } from "../../../src/strategy/services/PaymentGateway.service";
import { MercadoPago } from "../../../src/strategy/services/payment_gateways/MercadoPago";
import { Asaas } from "../../../src/strategy/services/payment_gateways/Asaas";
import { Stripe } from "../../../src/strategy/services/payment_gateways/Stripe";

let apiKey: any;
let environment: any
let timeout: any

describe('casos de testes de PaymentGatewayService', () => {

    // variaveis de configuração
    const apiKey = 'api_key';
    const environment = 'sandbox';
    const timeout = 500;

    // instanciação das strategy
    const mercadoPago = new MercadoPago(apiKey, environment, timeout);
    const stripe = new Stripe(apiKey, environment, timeout);
    const asaas = new Asaas(apiKey, environment, timeout);

    beforeEach(() => {
        mercadoPago;
        stripe;
        asaas;
    })

    test('configura o gateway de pagamento mercado pago', () => {
        const mercadoPago = new MercadoPago(apiKey, environment, timeout);
        expect(mercadoPago).toBeTruthy()
    });

    test('configura o gateway de pagamento asaas', () => {
        const asaas = new Asaas(apiKey, environment, timeout);
        expect(asaas).toBeTruthy();
    });

    test('configura o gateway de pagamento stripe', () => {
        const stripe = new Stripe(apiKey, environment, timeout);
        expect(stripe).toBeTruthy();
    });

    test('faz um pagamento com sucesso -  mercado pago', () => {
        const strategyMercadoPago = new PaymentGatewayService(mercadoPago);
        expect(strategyMercadoPago.pay(500, 'BRL')).toBeTruthy();
    })

    test('faz um pagamento falhar - mercado pago', () => {
        const strategyStripe = new PaymentGatewayService(stripe);
        expect(strategyStripe.pay(1, 'BRL')).toBeFalsy();
    })

    test('espera uma exceção ao receber valores vazios', () => {
        const strategy_asaas = new PaymentGatewayService(asaas);

        expect(() => strategy_asaas.pay(null, 'BRL')).toThrow('Valor e moeda são obrigatórios');
        expect(() => strategy_asaas.pay(100, null)).toThrow('Valor e moeda são obrigatórios');
        expect(() => strategy_asaas.pay(0, 'BRL')).toThrow('Valor e moeda são obrigatórios');
        expect(() => strategy_asaas.pay(100, '')).toThrow('Valor e moeda são obrigatórios');
        expect(() => strategy_asaas.pay(undefined, 'BRL')).toThrow();
    })

});
