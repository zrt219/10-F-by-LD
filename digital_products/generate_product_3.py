import os
from document_builder_1800IQ import DocumentBuilder

def generate_affirmations():
    builder = DocumentBuilder(
        title="Billion-Dollar Mindset Affirmations",
        output_dir="03_Speak_Life_Athlete_Affirmations",
        filename_base="Athlete_Affirmations_and_Declarations"
    )
    
    builder.add_title_page()
    builder.add_disclaimer_and_intro()
    
    builder.add_heading("Reprogramming the Apex Executive Brain", level=2)
    builder.add_paragraph("Generational wealth and global influence are dictated by the subconscious mind. When you are negotiating with sovereign wealth funds, scaling an IPO for your personal brand, and structuring 100-year family trusts, you must control your internal narrative. These are not just positive thoughts; these are the boardroom directives to your nervous system, architected for a Billion-Dollar Dynasty and strategically engineered around the 10-F Framework.")
    
    builder.add_fact_box("Billionaire founders, global states-people, and apex athletes utilize neuro-linguistic programming (NLP) and cognitive reframing to control their physiological responses. They can command flow states in boardrooms and drown out global media noise just by reciting specific tactical affirmations.")

    builder.add_heading("The 10-F Billion-Dollar Declarations", level=2)

    affirmations = [
        ("Faith", "I am guided by a definitive, global purpose. My faith is the unshakeable cornerstone of my billion-dollar dynasty, anchoring my spirit as I navigate unprecedented global influence."),
        ("Family", "My family is a sovereign institution. I am structuring a 100-year family trust, fiercely protecting our lineage, and instilling the principles of generational wealth and enduring power."),
        ("Finances", "I am a capital allocator at the highest level. I negotiate with sovereign wealth funds, execute institutional buyouts, and leverage equity to command a multi-billion-dollar enterprise."),
        ("Future", "My athletic prime is merely the seed capital for my empire. I am actively laying the groundwork to IPO my personal brand, acquire sports franchises, and architect legacy institutions that will define the next century."),
        ("Focus", "I command laser-sharp, institutional focus. The noise of public opinion cannot penetrate my boardroom; I systematically eliminate trivialities from my apex-performance ecosystem."),
        ("Fundamentals", "Dynasties are built on the ruthless mastery of basics. I execute the foundational principles of leverage, risk management, and human capital while others chase fleeting relevance."),
        ("Fitness", "My body is a billion-dollar holding company. I invest aggressively in hyper-advanced longevity protocols, elite bio-optimization, and world-class recovery to command the global stage."),
        ("Fortitude", "I am unfazed by astronomical stakes. I possess the sovereign resilience and unyielding mental fortitude required to execute flawlessly during billion-dollar acquisitions and historic triumphs."),
        ("Friends", "My inner circle is an elite syndicate of titans. I surround myself exclusively with billionaires, visionary operators, and apex performers who elevate my standard of world-class execution."),
        ("Fun", "I celebrate the profound joy of supreme mastery. I intentionally create space to experience the fruits of my empire, knowing that a true dynasty requires deliberate, luxurious, and revitalizing recovery.")
    ]

    for f_word, affirmation in affirmations:
        builder.add_heading(f_word, level=3)
        builder.add_paragraph(f"> \"{affirmation}\"", italic=True)
        builder.add_paragraph("")
        
    builder.add_page_break()
    builder.add_outro()
    builder.save()

if __name__ == "__main__":
    generate_affirmations()
