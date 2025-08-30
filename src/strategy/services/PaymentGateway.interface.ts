export interface InterfacePaymentGateway {

    apiKey: string,
    environment: string,
    timeout?: number

    createPayment(amount: number, currency: string): void;
    refundPayment(paymentId: number, amount?: number): void;
    cancelPayment(paymentId: number): void;
    getPaymentStatus(paymentId: number): void;

}