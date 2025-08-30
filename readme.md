# Estudo de Design Patterns com TypeScript e testes unitários com Jest

Este projeto tem como objetivo estudar e por em prática o desenvolimento e a aplicação dos Design Patterns

## Estrutura do Projeto

```
src/
├── factoryMethod/
│   └── PaymentFactory.ts    # Fábrica para criar instâncias de gateways
├── strategy/
│   ├── services/
│   │   └── payment_gateways/
│   │       ├── Asaas.ts              # Implementação do gateway Asaas
│   │       ├── MercadoPago.ts        # Implementação do gateway Mercado Pago
│   │       ├── Stripe.ts             # Implementação do gateway Stripe
│   │       ├── PaymentGateway.interface.ts  # Interface comum
│   │       ├── PaymentGateway.service.ts    # Serviço principal
│   └── index.ts
test/
├── strategy/
│   └── PaymentGatewayServiceTest.spec.ts  # Testes automatizados
```

## Scripts Disponíveis

- `npm test` - Executa os testes unitários
- `npm test --watch` - Executa os testes em modo observação (watch)
- `npm test --coverage` - Gera relatório de cobertura de testes
