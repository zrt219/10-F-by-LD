import os
import stripe
from dotenv import load_dotenv

load_dotenv()
stripe.api_key = os.getenv("STRIPE_SECRET_KEY")

try:
    links = stripe.PaymentLink.list(limit=100)
    for link in links.data:
        # Get the line items to find the price and product
        line_items = stripe.PaymentLink.list_line_items(link.id)
        if line_items.data:
            price = line_items.data[0].price
            product_id = price.product
            product = stripe.Product.retrieve(product_id)
            print(f"Product: {product.name} | Link: {link.url} | Price: {price.unit_amount/100}")
except Exception as e:
    print(f"Error: {e}")
