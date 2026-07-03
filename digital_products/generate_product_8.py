import os
from document_builder_1800IQ import DocumentBuilder

def generate_brand_workbook():
    builder = DocumentBuilder(
        title="The 10-F Billion-Dollar Dynasty Brand Portfolio",
        output_dir="08_Student_Athlete_Personal_Brand_Workbook",
        filename_base="Personal_Brand_Workbook_Elite"
    )
    
    builder.add_title_page()
    builder.add_disclaimer_and_intro()
    
    sections = [
        {
            "title": "Faith & Foundation: The Architecture of an Empire",
            "desc": "In 2026, you are not merely building a personal brand; you are architecting a billion-dollar dynasty. Uncompromising belief (Faith) and a bedrock legal and structural base (Foundation) are non-negotiable. This means establishing 100-year family trusts, global holding companies, and positioning yourself to negotiate directly with sovereign wealth funds.",
            "prompts": [
                "What core convictions (Faith) will serve as the unshakeable constitution for your 100-year family trust?",
                "How is your current corporate structure (Foundation) optimized to transition from generating athletic income to acquiring major assets, such as sports franchises?"
            ]
        },
        {
            "title": "Family & Friendship: Your Global Board of Directors",
            "desc": "Billion-dollar athletes do not have entourages; they have C-suites. The trust inherent in Family and Friendship must be elevated into a high-functioning Board of Directors. The people in your inner circle must be equipped to oversee private equity investments, philanthropic mega-funds, and global enterprise operations.",
            "prompts": [
                "Which members of your Family and Friends possess the acumen to govern your holding company, and what education or resources do they need to operate at a billionaire level?",
                "How do you establish boundaries that protect your personal relationships (Friendship) while enforcing ruthless operational excellence across your business empire?"
            ]
        },
        {
            "title": "Finances & Future: From Endorsement to Enterprise Ownership",
            "desc": "Millionaires sign endorsement deals; billionaires acquire the companies. To secure your Finances and command the Future, you must transition from renting your influence to demanding majority equity, engineering IPOs for your personal brands, and buying the leagues and teams you play in.",
            "prompts": [
                "Identify an industry you currently endorse. How can you leverage your cultural capital to acquire a controlling stake (Finances) in a competitor within that space?",
                "What is the 50-year vision for your Future, and what institutional acquisitions must you make today to ensure your IP transcends your playing career entirely?"
            ]
        },
        {
            "title": "Fitness & Fortitude: The Sovereign Biological Asset",
            "desc": "Your body is the initial engine of your empire. Elite physical longevity (Fitness) and supreme mental resilience (Fortitude) are required to navigate not just the field, but global geopolitical market shifts and multi-billion-dollar mergers. You must protect your biological asset as ruthlessly as your financial ones.",
            "prompts": [
                "How are you leveraging cutting-edge science and proprietary medical teams to extend your physical peak (Fitness) and protect your core enterprise asset?",
                "When a high-stakes acquisition or PR crisis threatens your global equity, how do you maintain the psychological dominance (Fortitude) to outmaneuver institutional adversaries?"
            ]
        },
        {
            "title": "Forgiveness & Fun: Cultural Dominance and Legacy",
            "desc": "The sovereign mindset requires Forgiveness—releasing past betrayals and missteps to clear the psychological slate for ruthless, unemotional execution. Simultaneously, you must ensure that joy (Fun) remains intact. Billionaires don't just participate in culture; they dictate it by owning the media networks, entertainment studios, and platforms that shape it.",
            "prompts": [
                "What past grievances or limiting beliefs (Forgiveness) must you completely discard to operate with the absolute clarity required of a billionaire CEO?",
                "How will you construct your media empire so that your authentic joy and creativity (Fun) dictate global trends rather than reacting to them?"
            ]
        }
    ]
    
    builder.add_fact_box("Athletes who transcended the million-dollar mindset to apply the 10-F framework at a billionaire frequency successfully transitioned from talent to ownership, culminating in the acquisition of major sports franchises and multi-billion-dollar IPOs.")

    for section in sections:
        builder.add_heading(section["title"], level=2)
        builder.add_paragraph(section["desc"])
        for prompt in section["prompts"]:
            builder.add_paragraph(prompt, bold=True)
            builder.add_worksheet_space(2)
        builder.add_page_break()
        
    builder.add_outro()
    builder.save()

if __name__ == "__main__":
    generate_brand_workbook()
