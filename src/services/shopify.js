import Client from 'shopify-buy'

export const shopify = Client.buildClient({
  domain: 'salabtun.myshopify.com',
  storefrontAccessToken: 'a76a1f97ed4de028a2c270e68ab806fc',
})