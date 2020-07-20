import currency from 'currency.js';

export const parsePrice = (price) => `$${currency(price)}`;
