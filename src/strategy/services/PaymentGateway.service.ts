import type { InterfacePaymentGateway } from './PaymentGateway.interface';

export class PaymentGatewayService {

    /**
     * @param paymentGateway 
     */
    constructor(private paymentGateway: InterfacePaymentGateway) {
        this.paymentGateway = paymentGateway;
    }

    /**
     * Criação de pagamentos
     * @param number amount 
     * @param string currency 
     */
    pay(amount: number, currency: string) {
        if (!amount || !currency) {
            throw new Error('Valor e moeda são obrigatórios')
        }
        return this.paymentGateway.createPayment(amount, currency);
    }

    /**
     * Estorno de pagamentos
     * @param number id 
     * @param number amount 
     */
    refund(id: number, amount?: number) {
        this.paymentGateway.refundPayment(id, amount);
    }

    /**
     * Candelar pagamentos
     * @param number id
     */
    cancel(id: number) {
        this.paymentGateway.cancelPayment(id);
    }

    /**
     * Status de pagamentos
     * @param number id 
     */
    status(id: number) {
        this.paymentGateway.getPaymentStatus(id);
    }

}