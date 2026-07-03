import os
from document_builder_1800IQ import DocumentBuilder

def generate_devotional():
    builder = DocumentBuilder(
        title="Elite Athlete Devotional",
        output_dir="01_Finish_Strong_Athlete_Devotional",
        filename_base="Finish_Strong_Athlete_Devotional"
    )
    
    builder.add_title_page()
    builder.add_disclaimer_and_intro()
    
    themes = [
        {
            "title": "Faith: The Isolation of Empire",
            "scripture": "Mark 1:35 - 'Very early in the morning, while it was still dark, Jesus got up, left the house and went off to a solitary place, where he prayed.'",
            "reading": "Being the cornerstone of a billion-dollar dynasty means you are often isolated at the summit. The noise of sovereign wealth funds, boardrooms, and global expectations can drown out your inner voice. In these moments of intense isolation, remember that solitary places are where your Faith is forged and true clarity to lead a 100-year legacy is found.",
            "lesson": "Isolation is not a punishment; it is a prerequisite for sovereign leadership. Anchor your identity in Faith, not in market valuations.",
            "question": "When the boardrooms go quiet and your phone is off, what is the foundation of your confidence?",
            "prayer": "Lord, give me peace in the quiet moments. Protect my mind from the noise of empire and keep my Faith unbreakable."
        },
        {
            "title": "Family: The 100-Year Trust",
            "scripture": "Proverbs 13:20 - 'Walk with the wise and become wise, for a companion of fools suffers harm.'",
            "reading": "When you build an empire, managing family dynamics transforms from giving allowances to structuring a 100-year family trust. You have to be willing to have hard conversations with relatives who may not understand the pressures of sustaining a multi-generational legacy. True Family protects the dynasty's peace; they don't exploit the family office.",
            "lesson": "You are the patriarch/matriarch of a dynasty. A leader does not distribute wealth out of guilt. Establish governance to protect your Family's future.",
            "question": "Are the structures you are building for your family protecting their character or enabling entitlement?",
            "prayer": "Lord, grant me the wisdom to govern my Family with vision, and the grace to love them while preparing them for generational responsibility."
        },
        {
            "title": "Finances: The Ownership Imperative",
            "scripture": "Proverbs 21:20 - 'The wise store up choice food and olive oil, but fools gulp theirs down.'",
            "reading": "A massive contract signing feels like arriving, but it's only seed capital. True wealth isn't what you spend; it's what you acquire. Acquiring sports franchises, structuring IPOs for your personal brand, and securing equity outlast any playing career. Your Finances must be managed with the relentless execution of a sovereign entity.",
            "lesson": "Flexing for the timeline is for millionaires. Acquiring assets and equity is for billionaires. Respect your capital.",
            "question": "What is one financial decision you need to shift from consumer spending to legacy acquisition?",
            "prayer": "God, give me the discipline to steward my Finances into lasting ownership and the humility to execute a billion-dollar vision."
        },
        {
            "title": "Future: The Infinite Game",
            "scripture": "Proverbs 24:27 - 'Put your outdoor work in order and get your fields ready; after that, build your house.'",
            "reading": "Your athletic window is small, but your empire is eternal. The athletes who thrive in their Future are the ones who build holding companies, venture funds, and philanthropic foundations while they are still playing. Your brand and board seats must be cultivated now so that when the cheering stops, your real work of global impact begins.",
            "lesson": "Don't let your sport be the ceiling of your influence. Build your Future empire before you need it.",
            "question": "If you were forced to retire tomorrow, is your business infrastructure ready to sustain your impact for the next 50 years?",
            "prayer": "Lord, help me to build a foundation for my Future that transcends my physical abilities and impacts generations."
        },
        {
            "title": "Focus: Signal vs. Global Noise",
            "scripture": "Proverbs 4:23 - 'Above all else, guard your heart, for everything you do flows from it.'",
            "reading": "In 2026, dynasty builders face algorithmic and macroeconomic pressure. A single market shift or toxic virality can threaten the empire. You cannot control the algorithms or global markets, but you can control your strategic vision. Focus is your ultimate competitive advantage in the boardroom and on the field. Guard your mental bandwidth fiercely.",
            "lesson": "Your self-worth and strategy cannot be dictated by quarterly earnings or trending hashtags. Reclaim your Focus.",
            "question": "What boundaries do you need to set with your advisors and devices to protect your strategic Focus?",
            "prayer": "God, help me to anchor my identity in truth, not in the fluctuating opinions of the internet or markets. Give me unbreakable Focus."
        },
        {
            "title": "Fundamentals: Mastering the Enterprise",
            "scripture": "Zechariah 4:10 - 'Do not despise these small beginnings, for the Lord rejoices to see the work begin...'",
            "reading": "Highlights go viral, but dynasties are built on Fundamentals. When you reach the billionaire tier, the temptation is to abandon the basics for the spectacular acquisition. But the greatest moguls obsess over the small, unglamorous details. Cap tables, term sheets, legal frameworks, and recovery protocols—these Fundamentals are the invisible architecture of your empire.",
            "lesson": "Boredom with the basics is the enemy of empire. Commit to the Fundamentals when the media isn't watching.",
            "question": "What fundamental business or physical skill have you neglected because you felt you were 'past' it?",
            "prayer": "Lord, keep me humble enough to execute the Fundamentals of my craft and business. Give me the discipline to master the unseen details."
        },
        {
            "title": "Fitness: The Sovereign Asset",
            "scripture": "1 Corinthians 6:19 - 'Do you not know that your bodies are temples of the Holy Spirit, who is in you...'",
            "reading": "Your body and mind are sovereign assets that power a billion-dollar enterprise. Fitness goes beyond lifting weights; it is about absolute holistic optimization. Advanced longevity protocols, sleep architecture, and executive mental health are non-negotiable. Treat your physical and mental Fitness with the reverence of someone whose energy moves markets.",
            "lesson": "You cannot lead an empire with a depleted vessel. True Fitness is a relentless commitment to optimizing your temple.",
            "question": "What area of your physical or executive Fitness requires an immediate billion-dollar upgrade?",
            "prayer": "God, thank you for the physical gifts You have given me. Help me to honor You by treating my body as the engine of my calling."
        },
        {
            "title": "Fortitude: The Weight of the Crown",
            "scripture": "James 1:2-4 - 'Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds...'",
            "reading": "The higher the stakes, the heavier the crown. After the adrenaline of a massive IPO or championship, the brain struggles to recalibrate. The weight of employing hundreds and managing global stakes can feel crushing. Fortitude is the mental toughness to weather economic and emotional storms, endure the crashes, and find stability in sovereign leadership.",
            "lesson": "The high of achievement is temporary. Fortitude is finding strength to bear the weight of a dynasty in the silence.",
            "question": "How do you respond when the deals are closed, the adrenaline fades, and the reality of leadership sets in?",
            "prayer": "Lord, build Fortitude within me. Teach me how to bear the weight of my empire with grace and find joy without the rush."
        },
        {
            "title": "Friends: Board of Directors vs. Entourage",
            "scripture": "Proverbs 18:24 - 'One who has unreliable friends soon comes to ruin, but there is a friend who sticks closer than a brother.'",
            "reading": "At the billionaire pinnacle, your circle expands with institutions and individuals who want equity, not intimacy. The difference between a true Friend and an opportunist is that a Friend will challenge your blind spots, while an opportunist enables them. Protect your inner circle. Keep those who hold you accountable to your 100-year vision.",
            "lesson": "Surround yourself with a personal Board of Directors, not a payroll entourage. True loyalty cannot be bought.",
            "question": "Who in your life has the courage to tell you 'no' when a billion dollars is on the line?",
            "prayer": "God, grant me the discernment to distinguish between those who want a piece of my empire and true Friends who protect my soul."
        },
        {
            "title": "Fun: The Joy of the Infinite Game",
            "scripture": "Ecclesiastes 8:15 - 'So I commend the enjoyment of life, because there is nothing better for a person under the sun than to eat and drink and be glad.'",
            "reading": "When sovereign wealth funds, massive acquisitions, and generational legacy are on the line, life can easily become a high-stakes, soulless business. The pressure can crush the very reason you started. To sustain a 50-year reign, you must deliberately manufacture Fun. Never lose the inner child who just loved to build and compete.",
            "lesson": "Don't let the weight of the empire steal the joy of the game. If you're not having Fun, you're playing the wrong game.",
            "question": "When was the last time you engaged in your craft or business purely for the Fun of it, without thinking about the ROI?",
            "prayer": "Lord, remind me of why I started. Restore the Fun and pure joy of the journey in my heart today."
        }
    ]

    builder.add_fact_box("The 10-F Framework (Faith, Family, Finances, Future, Focus, Fundamentals, Fitness, Fortitude, Friends, Fun) is utilized by billionaire-tier athletes and owners in 2026 to govern 100-year family trusts, sports franchise acquisitions, and generational empires.")

    for i in range(1, 31):
        template = themes[(i - 1) % len(themes)]
        builder.add_heading(f"Day {i}: {template['title']}", level=2)
        builder.add_paragraph(f"Scripture: {template['scripture']}", bold=True)
        builder.add_paragraph(template['reading'])
        builder.add_paragraph(f"Athlete Life Lesson: {template['lesson']}", italic=True)
        builder.add_paragraph(f"Reflection Question: {template['question']}", bold=True)
        builder.add_worksheet_space(3)
        builder.add_paragraph(f"Prayer: {template['prayer']}", italic=True)
        builder.add_page_break()

    builder.add_outro()
    builder.save()

if __name__ == "__main__":
    generate_devotional()
