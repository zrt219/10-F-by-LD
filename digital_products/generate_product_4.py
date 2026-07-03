import os
from document_builder_1800IQ import DocumentBuilder

def generate_mental_wellness():
    builder = DocumentBuilder(
        title="Billion-Dollar Dynasty: Mental Wellness & Burnout Reset",
        output_dir="04_Athlete_Mental_Wellness_Reset_Workbook",
        filename_base="Mental_Wellness_Reset_Workbook_Elite"
    )
    
    builder.add_title_page()
    builder.add_disclaimer_and_intro()
    
    builder.add_heading("The Clinical Reality of Billion-Dollar Pressure", level=2)
    builder.add_paragraph("You are no longer just an athlete; you are a multinational enterprise. You are operating in an environment where acquiring sports franchises, establishing 100-year family trusts, and negotiating with sovereign wealth funds are the baseline. The human brain was not designed to process the gravity of multi-generational wealth and global scrutiny simultaneously. Burnout at this echelon doesn't just cost millions—it destabilizes empires.")
    
    builder.add_paragraph("True apex mental wellness isn't about mere survival or coping mechanisms—it’s about commanding the 10-F Framework: Faith, Family, Finances, Future, Focus, Fundamentals, Fitness, Fortitude, Friends, and Fun. When you transition from a million-dollar elite mindset to billion-dollar ownership, every 'F' scales exponentially in both impact and risk.")

    builder.add_fact_box("Sports psychiatry and wealth psychology data from 2026 shows that founders and athletes who operate at the billion-dollar tier and schedule proactive 'dark days' (zero media, zero deal-flow) to reconnect with their Faith, Family, and Friends reduce cortisol levels by 40%. This fortifies their Fortitude to execute IPOs for personal brands without collapsing under the weight of market expectations.")
    
    builder.add_heading("The 10-F Dynasty Burnout Audit", level=2)
    builder.add_paragraph("Check the symptoms you are currently experiencing across your foundational empire:", bold=True)
    
    symptoms = [
        "Fun & Focus: Apathy toward closing monumental deals (feeling relief instead of joy) and an inability to concentrate on the Fundamentals of your core business.",
        "Faith & Fortitude: Feeling a loss of spiritual grounding and the unshakeable mental toughness required to negotiate with global institutions and sovereign wealth funds.",
        "Family & Friends: Resentment toward your inner circle, doubting trust, or isolating yourself from the people who will run your 100-year family trust.",
        "Fitness: Physical exhaustion that private bio-hacking and sleep cannot fix, masking the sheer weight of dynasty-level stress as normal fatigue.",
        "Finances & Future: Crippling anxiety that one market shift or PR crisis will jeopardize your personal brand's IPO and multi-generational legacy."
    ]
    for s in symptoms:
        builder.add_paragraph(f"[  ] {s}")
        
    builder.add_page_break()
    builder.add_heading("The 10-F Dynasty Reset Protocol", level=2)
    builder.add_paragraph("Billion-dollar recovery requires absolute, ruthless discipline. You must protect your mental capital with the same Fortitude you use to protect your corporate equity. Your Future dynasty depends entirely on your current state of mind.")
    
    builder.add_paragraph("Which trusted Friend or Family member (perhaps your Chief of Staff) can you delegate your entire global communications to for the next 48 hours to restore your Focus?", bold=True)
    builder.add_worksheet_space(2)
    
    builder.add_paragraph("What is one activity completely disconnected from wealth generation that brings you pure Fun and reconnects you with your Faith or the core values of your 100-year trust?", bold=True)
    builder.add_worksheet_space(2)

    builder.add_outro()
    builder.save()

if __name__ == "__main__":
    generate_mental_wellness()
