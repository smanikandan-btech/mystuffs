import { Billing } from './billing.js';

const customerDetails = [
    {
        "type": 'Residential Customer',
        "amount": 60
    },
    {
        "type": 'NRI Customers',
        "amount": 23
    }
];
var objBilling = new Billing(customerDetails); 