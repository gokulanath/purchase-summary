export const getItemDetails = () => new Promise(resolve => {
  setTimeout(() => {
    resolve({
      "pricingDetails": {
        "subtotal": 104.96,
        "savings": 3.85,
        "tax": 8.92,
        "total": 108.03,
        "zip": 85050
      },
      "itemDetails": {
        "itemName": "Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair red",
        "quantity": "1",
        "discountCode": "DISCOUNT"
      }
    });
  }, 3000)
})