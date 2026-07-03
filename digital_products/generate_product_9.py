import os
from document_builder_1800IQ import DocumentBuilder

def generate_nil_guide():
    builder = DocumentBuilder(
        title="Billion-Dollar Dynasty: The Sovereign & Digital Reputation Matrix",
        output_dir="09_NIL_and_Digital_Reputation_Decision_Guide",
        filename_base="NIL_Digital_Reputation_Decision_Guide"
    )
    
    builder.add_title_page()
    builder.add_disclaimer_and_intro()
    
    builder.add_heading("Evaluating a Billion-Dollar Dynasty through the 10-F Lens", level=2)
    builder.add_paragraph("Top-tier athletes do not just sign contracts; they architect sovereign empires. A billion-dollar dynasty transcends standard endorsement deals. It encompasses acquiring sports franchises, establishing 100-year family trusts, preparing for an IPO of your personal brand, and negotiating directly with sovereign wealth funds. Before finalizing any global partnership, you must analyze the deal from a position of ultimate leverage and ensure it fortifies your 10-F framework. A true apex athlete uses these ten pillars to protect their sovereign legacy and global digital reputation.")
    
    builder.add_heading("The 10-F Matrix for Sovereign Partnerships & Acquisitions", level=3)
    builder.add_paragraph("Evaluate every legacy-defining opportunity against your core foundations:", bold=True)
    
    builder.add_paragraph("• Faith: Does this sovereign fund or global institution align with your unshakable core beliefs and moral compass?")
    builder.add_paragraph("• Family: Will this structure effectively fund a 100-year family trust and secure an impregnable dynasty for your descendants?")
    builder.add_paragraph("• Finances: Are you moving past fractional equity into majority control, franchise acquisitions, and structuring for a personal brand IPO?")
    builder.add_paragraph("• Future: Does this global partnership serve the 50-year vision of your sovereign enterprise and multi-generational goals?")
    builder.add_paragraph("• Focus: Will the board seats and executive duties distract from your immediate apex athletic objectives, or seamlessly integrate?")
    builder.add_paragraph("• Fundamentals: Do the fundamental economics of this sovereign-level acquisition respect the foundational principles of your enterprise?")
    builder.add_paragraph("• Fitness: Does this global venture mandate longevity, forcing you to maintain elite physical health and cognitive dominance?")
    builder.add_paragraph("• Fortitude: Is your enterprise insulated with ironclad legal structures that protect your wealth and reputation against geopolitical adversity?")
    builder.add_paragraph("• Friends: Does this venture elevate your inner circle into a board of directors capable of governing a billion-dollar entity?")
    builder.add_paragraph("• Fun: Ultimately, does executing at this stratospheric level of global ownership bring profound joy and vitality to your legacy?")
    
    builder.add_table(
        ["The Million-Dollar Elite Model", "The Billion-Dollar Dynasty Model"],
        [
            ["Base fee + fractional equity in a startup.", "Majority ownership, LBOs, and Sovereign Wealth co-investments."],
            ["Time-bound, restricted likeness usage.", "Full trademark capitalization leading to a personal brand IPO."],
            ["Co-developing a signature product line.", "Acquiring the manufacturing and distribution infrastructure."],
            ["Multi-year endorsement guarantees.", "100-year irrevocable family trusts and legacy endowments."]
        ]
    )
    
    builder.add_fact_box("In 2026, a select group of apex athletes bypassed traditional agencies entirely, utilizing the 10-F framework to negotiate direct joint ventures with sovereign wealth funds and launch personal holding companies capable of acquiring major sports franchises.")
    
    builder.add_heading("The Sovereign Enterprise Decision Matrix Worksheet", level=2)
    questions = [
        "How does this acquisition or IPO strategy cement my Finances and Future into a 100-year dynasty while honoring my Faith and Family?",
        "What are the geopolitical and structural risks (Fortitude), and how is my board of directors (Friends) equipped to maintain Focus?",
        "If this sovereign partnership faces global scrutiny, how will my overarching digital reputation, Fitness brand, and Fundamentals remain impregnable?"
    ]
    for q in questions:
        builder.add_paragraph(q, bold=True)
        builder.add_worksheet_space(2)
        
    builder.add_outro()
    builder.save()

if __name__ == "__main__":
    generate_nil_guide()
