import type { InterfacePaymentGateway } from "../PaymentGateway.interface";

export class Stripe implements InterfacePaymentGateway {
    
    apiKey: string;
    environment: string;
    timeout?: number;

    constructor(apiKey: string, environment: string, timeout?: number){
        this.apiKey = apiKey;
        this.environment = environment;
        this.timeout = timeout ?? 500;
    }

    createPayment(amount: number, currency: string) {
        console.log(`STRIPE: Criando pagamento: ${amount}, ${currency} - ${this.apiKey}`);
    }

    refundPayment(paymentId: number, amount?: number) {
        console.log(`STRIPE: Estorno de um pagamento: ${paymentId}, quantia: ${amount}`);
    }

    cancelPayment(paymentId: number): void {
        console.log(`STRIPE: Cancelando um pagamento: ${paymentId}`)
    }

    getPaymentStatus(paymentId: number): void {
        console.log(`STRIPE: Obtendo status de um pagamento: ${paymentId}`)
    }

}

