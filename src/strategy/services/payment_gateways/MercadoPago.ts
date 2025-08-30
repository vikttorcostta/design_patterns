import type { InterfacePaymentGateway } from "../PaymentGateway.interface";

export class MercadoPago implements InterfacePaymentGateway {

    apiKey: string;
    environment: string;
    timeout?: number;

    constructor(apiKey: string, environment: string, timeout?: number){
        this.apiKey = apiKey;
        this.environment = environment;
        this.timeout = timeout ?? 500;
    }

    createPayment(amount: number, currency: string): void {
        console.log(`MERCADO PAGO: Criando um pagamento: ${amount}, ${currency} - ${this.apiKey}`);
    }

    refundPayment(paymentId: number, amount?: number): void {
        console.log(`MERCADO PAGO: Estrono de um pagamento: ${paymentId} - ${amount}`);
    }

    cancelPayment(paymentId: number): void {
        console.log(`MERCADO PAGO: Cancelando um pagamento: ${paymentId}`);
    }

    getPaymentStatus(paymentId: number): void {
        console.log(`MERCADO PAGO: Obtendo um status de um pagamento: ${paymentId}}`);
    }
}