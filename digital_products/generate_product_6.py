import os
from document_builder_1800IQ import DocumentBuilder

def generate_ai_guide():
    builder = DocumentBuilder(
        title="Responsible AI & Brand Protection Guide",
        output_dir="06_Responsible_AI_Prompt_Guide",
        filename_base="Responsible_AI_Prompt_Guide"
    )
    
    builder.add_title_page()
    builder.add_disclaimer_and_intro()
    
    # Section 1: AI Basics and The 10-F Framework
    builder.add_heading("AI in 2026: The 10-F Billion-Dollar Dynasty Landscape", level=2)
    builder.add_paragraph("As a billion-dollar entity, your brand, body, and legacy are apex-level institutional assets. AI is no longer a novelty—it is your chief of staff, your sovereign wealth negotiator, and your analytical edge. We integrate AI through the 10-F Framework (Faith, Family, Finances, Future, Focus, Fundamentals, Fitness, Fortitude, Friends, Fun), ensuring every aspect of your life is optimized, protected, and elevated to dynasty status.")
    
    builder.add_fact_box("In 2026, dynasty-tier athletes leveraging advanced AI for sports franchise acquisitions, 100-year trust structuring, and global brand defense saw a massive increase in off-field ROI. Protecting your digital IP and optimizing your 10-F framework is now as critical as physical health.")

    builder.add_page_break()

    # Section 2: 10-F AI Prompts for the 1800IQ Elite
    builder.add_heading("The 10-F Dynasty Master Prompts", level=2)
    
    prompts = {
        "Faith (Spiritual & Purpose)": [
            "Act as a global philanthropic architect. I have $50,000,000 to endow for faith-based community initiatives. Help me design a 100-year charitable trust structure that aligns with my core values, ensures generational impact, and integrates with global NGOs without risking PR backlash."
        ],
        "Family (Generational Wealth & Security)": [
            "Explain sovereign-level Family Office structures and 100-year Dynasty Trust formations. Outline a framework for transferring multi-generational wealth, acquiring sports franchises for the family portfolio, and protecting apex assets from predatory litigation and international tax liabilities."
        ],
        "Finances (Contracts & Equity)": [
            "I am reviewing a term sheet for a joint venture with a sovereign wealth fund to acquire a major sports franchise. Act as a top-tier M&A advisor and identify the 5 most dangerous 'trap clauses' related to liquidity, voting rights, and perpetual licensing of my personal IP."
        ],
        "Future (Legacy & Post-Career)": [
            "I am launching an IPO for my personal brand holding company. Generate a 3-year strategic roadmap to transition from an athlete to a majority owner and institutional investor, including sovereign-level networking strategies and media positioning for the global financial markets."
        ],
        "Focus (Mental Conditioning)": [
            "Act as a high-stakes corporate psychologist and mental conditioning coach. Create a personalized, 7-day cognitive protocol to block out global media noise and geopolitical volatility during a multi-billion dollar acquisition, utilizing stoic philosophy and advanced neurological techniques."
        ],
        "Fundamentals (Skill & Analytics)": [
            "Analyze the following enterprise-level biometric and geospatial data detailing my athletic and executive performance over the last year. Identify systemic inefficiencies and model mechanical breakdown patterns to optimize both my physical output and my corporate decision-making stamina."
        ],
        "Fitness (Biometrics & Recovery)": [
            "Act as a world-class longevity and performance physiologist. Based on my latest genomic sequencing, blood panel, and continuous recovery metrics, design an aggressive 48-hour neuro-somatic regeneration protocol leveraging hyperbaric technology and custom biochemical nutrition."
        ],
        "Fortitude (Crisis Management & Resilience)": [
            "Act as an apex-tier global PR crisis manager. A highly sophisticated deepfake video misrepresenting me is circulating on global financial networks. Draft a multi-layered, aggressive response strategy, including international legal cease-and-desist frameworks, intelligence agency coordination, and sovereign-level public statements."
        ],
        "Friends (Network & Vetting)": [
            "I am establishing an elite inner-circle advisory board. Generate a rigorous vetting process and professional framework to transition lifelong personal relationships into highly governed, strictly professional, performance-based board positions with zero tolerance for liability."
        ],
        "Fun (Exclusive Experiences)": [
            "Act as an ultra-luxury concierge. Curate a 10-day, off-the-grid diplomatic-level recovery and recreation itinerary in a remote, sovereign territory, ensuring absolute privacy, private aviation logistics, elite security detail, and world-class culinary staffing."
        ]
    }

    for category, prompt_list in prompts.items():
        builder.add_heading(f"Prompts for {category}", level=2)
        for p in prompt_list:
            builder.add_paragraph(f"> \"{p}\"", italic=True)
        builder.add_paragraph("")
    
    builder.add_page_break()
    builder.add_outro()
    builder.save()

if __name__ == "__main__":
    generate_ai_guide()
