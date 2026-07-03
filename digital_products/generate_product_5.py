import os
from document_builder_1800IQ import DocumentBuilder

def generate_gratitude_journal():
    builder = DocumentBuilder(
        title="Billion-Dollar Dynasty Gratitude Journal",
        output_dir="05_Because_You_Matter_Gratitude_Journal",
        filename_base="Because_You_Matter_Gratitude_Journal_Elite"
    )
    
    builder.add_title_page()
    builder.add_disclaimer_and_intro()
    
    builder.add_heading("Grounding a Billion-Dollar Dynasty", level=2)
    builder.add_paragraph("When you are operating at the level of sovereign wealth funds, acquiring sports franchises, and establishing 100-year family trusts, your reality becomes entirely distorted. At this pinnacle, gratitude is not just a nice thought; it is a neurological necessity and strategic imperative to anchor you to reality and prevent arrogance from eroding your dynasty. This journal leverages the 10-F framework (Faith, Family, Finances, Future, Focus, Fundamentals, Fitness, Fortitude, Friends, Fun) to ensure holistic, multi-generational grounding.")
    
    builder.add_fact_box("Neuroscience studies on apex performers and global leaders show that structured daily gratitude decreases the amygdala's fear response, allowing you to execute world-shifting deals in high-pressure situations. By grounding yourself across all 10 Fs, you armor your mind against the unprecedented pressures of a billion-dollar empire and hyper-public lifestyle.")

    framework = [
        ("Faith", "What core belief, spiritual foundation, or ultimate purpose keeps your ego in check when sovereign wealth funds and global institutions cater to you?"),
        ("Family", "Who in your family (blood or chosen) recently told you a hard truth, protecting you from a toxic, dynasty-threatening decision?"),
        ("Finances", "As you structure IPOs, family offices, and franchise acquisitions, what is one specific foundational financial privilege you must protect and never take for granted?"),
        ("Future", "What 100-year legacy are you building right now that will far outlast your personal brand and current multi-billion dollar contracts?"),
        ("Focus", "What relentless distraction did you successfully eliminate today to protect your elite mindset, your institutional partners, and your global brand?"),
        ("Fundamentals", "What basic, unglamorous habit of your craft are you most grateful for mastering, knowing it laid the absolute foundation for your billion-dollar empire?"),
        ("Fitness", "Your body and mind are the engine of a global enterprise. What specific aspect of your physical health, longevity, and recovery are you deeply honoring today?"),
        ("Fortitude", "When did mental toughness save you from a catastrophic institutional failure or PR crisis, and how does that resilience fuel your gratitude now?"),
        ("Friends", "Name one person in your inner circle who demands nothing from your wealth, ignores your global status, but demands everything from your character."),
        ("Fun", "Outside of the immense pressure of global performance, institutional negotiations, and brand management, what pure, simple joy kept you grounded today?")
    ]

    for day in range(1, 15):
        if day <= 10:
            f_topic, f_question = framework[day - 1]
            builder.add_heading(f"Day {day}: Anchoring Reality - {f_topic}", level=2)
            builder.add_paragraph(f_question, bold=True)
            builder.add_worksheet_space(2)
            builder.add_paragraph(f"How does maintaining gratitude in your {f_topic} protect your broader billion-dollar empire?", bold=True)
            builder.add_worksheet_space(2)
        else:
            builder.add_heading(f"Day {day}: Anchoring Reality - 10-F Synergy", level=2)
            builder.add_paragraph("Looking across Faith, Family, Finances, Future, Focus, Fundamentals, Fitness, Fortitude, Friends, and Fun—which 'F' requires your deepest gratitude today, and why?", bold=True)
            builder.add_worksheet_space(2)
            builder.add_paragraph("What is one privilege your current billion-dollar athletic and business status provides that you must never take for granted?", bold=True)
            builder.add_worksheet_space(2)
        
        builder.add_page_break()

    builder.add_outro()
    builder.save()

if __name__ == "__main__":
    generate_gratitude_journal()
