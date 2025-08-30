import type { InterfacePaymentGateway } from './PaymentGateway.interface';

export class PaymentGatewayService {

    constructor(private paymentGateway: InterfacePaymentGateway) {
        this.paymentGateway = paymentGateway;
    }

    pay(amount: number, currency: string) {
        this.paymentGateway.createPayment(amount, currency);
    }

    refund(id: number, amount?: number) {
        this.paymentGateway.refundPayment(id, amount);
    }

    cancel(id: number) {
        this.paymentGateway.cancelPayment(id);
    }

    status(id: number) {
        this.paymentGateway.getPaymentStatus(id);
    }

}