import { MercadoPago } from '../strategy/services/payment_gateways/MercadoPago';
import { Stripe } from '../strategy/services/payment_gateways/Stripe';
import { Assas } from '../strategy/services/payment_gateways/Asaas';

export class PaymentGatewayFactory {

    setGateway(gatewayName: string, apiKey: string, environment: string, timeout?: number) {
        switch (gatewayName) {
            case "mercado_pago":
                return new MercadoPago(apiKey, environment, timeout);
            case "stripe":
                return new Stripe(apiKey, environment, timeout);
            case "asaas":
                return new Assas(apiKey, environment, timeout);
            default:
                return console.log("Informe um gateway de pagamento válido");
        }
    }
}