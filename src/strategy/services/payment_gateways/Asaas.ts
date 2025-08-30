import type { InterfacePaymentGateway } from "../PaymentGateway.interface";

export class Assas implements InterfacePaymentGateway {

    apiKey: string;
    environment: string;
    timeout?: number;

    constructor(apiKey: string, environment: string, timeout?: number){
        this.apiKey = apiKey;
        this.environment = environment;
        this.timeout = timeout ?? 500;
    }

    createPayment(amount: number, currency: string): void {
        console.log(`ASAAS: Criando pagamento: ${amount}, ${currency} - ${this.apiKey}`);
    }

    refundPayment(paymentId: number, amount?: number): void {
        console.log(`ASAAS: Estorno do pagamento: ${paymentId} - ${amount}`);
    }

    cancelPayment(paymentId: number): void {
        console.log(`ASAAS: Cancelando um pagamento ${paymentId}`);
    }

    getPaymentStatus(paymentId: number): void {
        console.log(`ASSAS: Obtendo um status de pagamento: ${paymentId}`);
    }

}