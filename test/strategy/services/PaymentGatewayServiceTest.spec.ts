import { PaymentGatewayService } from "../../../src/strategy/services/PaymentGateway.service";
import { MercadoPago } from "../../../src/strategy/services/payment_gateways/MercadoPago";
import { Assas } from "../../../src/strategy/services/payment_gateways/Asaas";
import { Stripe } from "../../../src/strategy/services/payment_gateways/Stripe";

let apiKey: any;
let environment: any
let timeout: any

beforeEach(() => {
    apiKey = 'api_key'
    environment ='sandbox';
    timeout = 500;
})

test('configura o gateway de pagamento mercado pago', () => {
    const mercadoPago = new MercadoPago(apiKey, environment, timeout);
    expect(mercadoPago).toBeTruthy()
});

test('configura o gateway de pagamento asaas', () => {
    const asaas = new Assas(apiKey, environment, timeout);
    expect(asaas).toBeTruthy();
});

test('configura o gateway de pagamento stripe', () => {
    const stripe = new Stripe(apiKey, environment, timeout);
    expect(stripe).toBeTruthy();
});