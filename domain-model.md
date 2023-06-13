## Supermarket Shopper

User Story 1
As a supermarket shopper,
So that I can pay for items at checkout items,
I'd like to be able to know the total cost of items in my basket.

| Nouns | Verbs
---|---
shopper | pay
checkout |
items |
cost |
basket |

| Methods | Inputs | Scenario | Outputs | Data
|---|---|---|---|---
|checkout(basket)|basket[]|if items in basket|true|items{name(@string), price(@number), quantity(@number)}
|checkout(basket)|basket[]|if items in basket|false|
|basket|basket[items{}]|if items added to basket|true|items{name(@string), price(@number), quantity(@number)}
|basket|basket[items{}]|if items added to basket|false|

User Story 2
As an organised individual,
So that I can evaluate my shopping habits,
I'd like to see a receipt that includes line items (quantity, name, cost) and the total cost.

| Nouns | Verbs
---|---
user | see
items |
total |

| Methods | Inputs | Scenario | Outputs | Data
|---|---|---|---|---
|