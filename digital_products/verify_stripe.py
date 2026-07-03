import os
import stripe
from dotenv import load_dotenv

load_dotenv()
stripe.api_key = os.getenv("STRIPE_SECRET_KEY")

links = [
    "14AcN53ZYcjM9eV3TY1VK0d",
    "6oUaEXfIGbfIfDj9ei1VK0e",
    "fZueVd8ge83w3UBfCG1VK0f",
    "9B628rgMKgA22Qx8ae1VK0g",
    "9B614n3ZYabEezf4Y21VK0h",
    "4gMbJ1gMK97Abn33TY1VK0i",
    "00w5kD9kibfI0Ipaim1VK0j",
    "dRm8wPcwudnQ3UBbmq1VK0k",
    "00wfZheECcjMfDj1LQ1VK0l",
    "cNicN5aom0B49eVeyC1VK0m"
]

print("Checking Payment Link Prices:")
all_links = stripe.PaymentLink.list(limit=50)
for pl in all_links.auto_paging_iter():
    for l in links:
        if l in pl.url:
            # Get line items
            items = stripe.PaymentLink.list_line_items(pl.id, limit=1)
            # In Stripe SDK, items.data[0].price might be a string ID or a Price object
            price_obj = items.data[0].price
            if isinstance(price_obj, str):
                price = stripe.Price.retrieve(price_obj)
            else:
                price = price_obj
            
            product_id = price.product
            if isinstance(product_id, str):
                product = stripe.Product.retrieve(product_id)
            else:
                product = product_id
                
            print(f"URL: {pl.url} -> Product: {product.name} -> Price: ${price.unit_amount/100:.2f} {price.currency.upper()}")
