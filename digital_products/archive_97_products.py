import os
import stripe
from dotenv import load_dotenv

load_dotenv()
stripe.api_key = os.getenv("STRIPE_SECRET_KEY")

print("Scanning for products to archive...")
try:
    products = stripe.Product.list(limit=100)
    for prod in products.auto_paging_iter():
        # Get prices for this product
        prices = stripe.Price.list(product=prod.id)
        for price in prices.auto_paging_iter():
            if price.unit_amount == 9700:
                print(f"Archiving product '{prod.name}' with price $97.00 (ID: {prod.id})...")
                stripe.Product.modify(prod.id, active=False)
                break
    print("Cleanup complete!")
except Exception as e:
    print(f"Error during cleanup: {e}")
