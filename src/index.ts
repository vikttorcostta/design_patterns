import { PaymentGatewayFactory } from './factoryMethod/PaymentFactory';
import { Asaas } from './strategy/services/payment_gateways/Asaas';
import { MercadoPago } from './strategy/services/payment_gateways/MercadoPago';
import { Stripe } from './strategy/services/payment_gateways/Stripe';
import { PaymentGatewayService } from './strategy/services/PaymentGateway.service';

// configurações do gateway de pagamento
const apiKey = 'minha_chave_secreta';
const environment = 'sandbox';
const timeout = 500;

/**
 * ===================================================
 *                 STRATEGY PATTERN
 * ===================================================
 */

// mercado pago
const mercado_pago = new MercadoPago(apiKey, environment, timeout)
const strategy_mercado_pago = new PaymentGatewayService(mercado_pago);
strategy_mercado_pago.pay(5520, 'BRL');
strategy_mercado_pago.refund(1, 5520)
strategy_mercado_pago.cancel(1);
strategy_mercado_pago.status(1);

// asaas
const asaas = new Asaas(apiKey, environment, timeout);
const strategy_asaas = new PaymentGatewayService(asaas);
strategy_asaas.pay(8000, 'BRL');
strategy_asaas.refund(2, 8000);
strategy_asaas.cancel(2);
strategy_asaas.status(2)

// stripe
const stripe = new Stripe(apiKey, environment, timeout);
const strategy_stripe = new PaymentGatewayService(stripe);
strategy_stripe.pay(5000, 'BRL');
strategy_stripe.refund(3, 5000);
strategy_stripe.cancel(3);
strategy_stripe.status(3)

/**
 * ===================================================
 *     FACTORY METHOD PATTERN / STRATEGY PATTERN
 * ===================================================
 */

// mercado pago
const factory_method_mercado_pago = new PaymentGatewayFactory()
.setGateway('mercado_pago', apiKey, environment, timeout);

// asaas
const factory_method_asaas = new PaymentGatewayFactory()
.setGateway('asaas', apiKey, environment,timeout);

// stripe
const factory_method_stripe = new PaymentGatewayFactory()
.setGateway('stripe', apiKey, environment, timeout);


