import os
import stripe
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

stripe.api_key = os.getenv("STRIPE_SECRET_KEY")

if not stripe.api_key or stripe.api_key == "your_stripe_secret_key_here":
    print("ERROR: STRIPE_SECRET_KEY is missing or invalid in your .env file.")
    print("Please copy .env.template to .env and insert your real Stripe Secret Key.")
    exit(1)

default_price = os.getenv("DEFAULT_PRICE_USD", "97")
# Clean up any currency symbols or whitespace
default_price = default_price.replace("$", "").strip()
try:
    price_cents = int(float(default_price) * 100)
except ValueError:
    price_cents = 9700

# The Billion-Dollar 10-F Product Library
products = [
    {"name": "01 Finish Strong Athlete Devotional (Billion-Dollar Edition)", "desc": "Faith & Focus: Devotional guide for navigating extreme wealth and isolation."},
    {"name": "02 Finish Strong Motivational Reflections", "desc": "Fortitude & Future: High-level reflections on building a multi-generational legacy."},
    {"name": "03 Speak Life: Athlete Affirmations", "desc": "Fun & Friends: Neuro-linguistic programming to command flow states."},
    {"name": "04 Athlete Mental Wellness Reset", "desc": "Family & Fundamentals: Clinical burnout recovery protocols for global icons."},
    {"name": "05 Because You Matter Gratitude Journal", "desc": "Faith & Focus: Grounding techniques to survive the hyper-reality of fame."},
    {"name": "06 Responsible AI Prompt Guide", "desc": "Future & Finances: Securing biometric IP and synthetic media licensing."},
    {"name": "07 Life After Sport Career Readiness", "desc": "Finances & Friends: Translating locker room leadership to corporate Board of Directors."},
    {"name": "08 Personal Brand Workbook", "desc": "Fortitude & Focus: Sovereign wealth negotiations and geopolitical crisis management."},
    {"name": "09 NIL and Digital Reputation Decision Guide", "desc": "Finances & Future: Launching IPOs and acquiring sports franchises."},
    {"name": "10 30-Day Finish Strong Action Planner", "desc": "Fundamentals & Fitness: The 10-F operating system for daily elite execution."}
]

print(f"Creating products on Stripe at ${float(price_cents)/100:.2f} each...")

for p in products:
    try:
        # Create the Product
        stripe_product = stripe.Product.create(
            name=p["name"],
            description=p["desc"]
        )
        
        # Create the Price
        stripe_price = stripe.Price.create(
            product=stripe_product.id,
            unit_amount=price_cents,
            currency="usd",
        )
        
        # Create a Payment Link
        payment_link = stripe.PaymentLink.create(
            line_items=[{"price": stripe_price.id, "quantity": 1}]
        )
        
        print(f"\n[SUCCESS] Created: {p['name']}")
        print(f"   Payment Link: {payment_link.url}")
        
    except Exception as e:
        print(f"\n[FAILED] Failed to create {p['name']}: {str(e)}")

print("\nAll done! You can embed these payment links on lornettedaye.com.")
