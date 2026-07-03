import os
from document_builder_1800IQ import DocumentBuilder

def generate_reflections():
    builder = DocumentBuilder(
        title="Elite Motivational Reflections",
        output_dir="02_Finish_Strong_Motivational_Reflections",
        filename_base="Motivational_Reflections_for_Athletes"
    )
    
    builder.add_title_page()
    builder.add_disclaimer_and_intro()
    
    reflections = [
        {
            "title": "The Anchor of Faith",
            "text": "When the stadium lights go out, what grounds your empire? Elite performance can elevate your ego, but an unwavering Faith anchors your dynasty. True power comes from believing in a purpose greater than your own statistics, net worth, or global fame. It is the conviction that you are building something that outlasts you.",
            "action": "Spend 20 minutes in absolute silence today. Reconnect with your core spiritual values and write down the higher purpose driving your global enterprise."
        },
        {
            "title": "The 100-Year Trust (Family)",
            "text": "Your billions can buy global access, but they can't buy unconditional loyalty. Family is the true legacy—the foundation of a 100-year dynasty. Protect them from the chaos of your brand by establishing generational trusts and governance, but never isolate yourself from their grounding truth.",
            "action": "Review or draft the core values for your family office or trust. Call a family member who has supported your journey from day one and discuss legacy, not just immediate wealth."
        },
        {
            "title": "Sovereign Wealth & Ownership (Finances)",
            "text": "A massive contract makes you rich; disciplined ownership makes you wealthy; acquiring assets like sports franchises and forging sovereign partnerships makes you a billionaire. True financial freedom is silent, strategic, and focused on institutional-grade impact, not momentary flash.",
            "action": "Audit your last 30 days of capital deployment. Identify one passive investment that feeds your ego and redirect that capital into acquiring a controlling stake in an appreciating asset."
        },
        {
            "title": "The Dynasty Game (Future)",
            "text": "A championship ring is a finite goal. Legacy is an infinite game. The greatest athletes transition their competitive obsession from beating opponents to solving global problems, IPOing their personal brands, and building lasting enterprises. Your playing career is just the seed capital for your Future.",
            "action": "Write down a 100-year goal. What do you want your foundation, venture firm, or holding company to achieve centuries after your jersey is retired?"
        },
        {
            "title": "Institutional Focus",
            "text": "Attention is the currency of the elite. When sovereign wealth funds and global conglomerates want a piece of your time, saying 'yes' to good opportunities means saying 'no' to monumental ones. Weaponize your Focus by aggressively filtering out distractions that do not serve your highest institutional goals.",
            "action": "Identify three commitments on your schedule that drain your energy or don't align with a billion-dollar vision. Delegate them to your executive team or ruthlessly eliminate them."
        },
        {
            "title": "The Architecture of Mastery (Fundamentals)",
            "text": "Amateurs practice until they get it right; billionaires build systems that can't get it wrong. Elite status is maintained through a relentless, obsessive mastery of the Fundamentals. When global markets or high-stakes negotiations pressure you, you default to the architecture of your preparation.",
            "action": "Select one basic, fundamental system in your sports performance or global business. Dedicate an extra 30 minutes today to refining it with the intensity of a founder fighting for their first term sheet."
        },
        {
            "title": "The Billion-Dollar Asset (Fitness)",
            "text": "Your body is the origin of a multi-billion-dollar holding company. Treat it with the exactitude of a Fortune 100 CEO. Optimal Fitness isn't just about training hard—it's about cutting-edge longevity protocols, elite recovery, and protecting your most irreplaceable physical asset at all costs.",
            "action": "Upgrade one aspect of your longevity protocol today. Whether it's investing in advanced biometric tracking, hiring a dedicated biohacker, or optimizing your cellular health strategy, make it institutional-grade."
        },
        {
            "title": "Ironclad Resilience (Fortitude)",
            "text": "Adversity is the ultimate filter. While average athletes crumble under global media scrutiny or market crashes, the elite leverage these trials to build unbreakable Fortitude. Your mental resilience is the invisible armor that protects your brand, your board, and your long-term empire.",
            "action": "Reflect on your biggest high-stakes failure. Write down three specific ways that setback forged a strategic advantage you rely on today to lead your global enterprise. Own the narrative."
        },
        {
            "title": "The Board of Directors (Friends)",
            "text": "When your signature moves markets, everyone will tell you what you want to hear. The most dangerous environment for an emerging billionaire is an echo chamber. Curate Friends who act as a personal Board of Directors—those with the courage and standing to tell you the brutal truth.",
            "action": "Reach out to a trusted peer or mentor who has nothing to gain financially from your empire. Ask for a 15-minute brutally honest audit of your inner circle and executive habits."
        },
        {
            "title": "Unstructured Brilliance (Fun)",
            "text": "The pressure to perform, scale, and maintain global status can turn your passion into a prison. Elite longevity requires preserving the pure, unadulterated Fun that sparked your empire. Play with the resources of a billionaire, but the joyful curiosity of a kid.",
            "action": "Schedule a completely unstructured, purely enjoyable activity this week that has zero connection to your portfolio, earnings, or public image. Just play."
        },
        {
            "title": "The Conviction to Build (Faith)",
            "text": "Vision is the ability to see what others cannot. It takes Faith to invest hundreds of millions into a transformative vision before it yields returns. The billionaire elite operate on conviction, trusting their internal compass over external critics and market skeptics.",
            "action": "Identify one bold acquisition or venture you have been hesitating to make out of fear of public failure. Take the first concrete step toward executing it today."
        },
        {
            "title": "Generational Governance (Fortitude)",
            "text": "The pressure on an elite athlete isn't just to succeed, but to carry the weight of a 100-year Family trust. It requires immense Fortitude to set institutional boundaries and say 'no' to loved ones when it protects the long-term integrity of your dynasty.",
            "action": "Review the financial or emotional requests you've received from your network recently. Enforce your governance structures to have a respectful but firm conversation establishing clear boundaries."
        },
        {
            "title": "Monopolistic Capital (Finances)",
            "text": "Diversification is for preserving wealth, but Focus is for building an empire. Many athletes lose millions by investing in too many unrelated ventures. Channel your capital and attention into a few high-conviction areas—like sports ownership or disruptive tech—where you have a monopolistic advantage.",
            "action": "Review your current investment portfolio. Identify the venture demanding the most executive energy with the least strategic return, and begin the process of divesting."
        },
        {
            "title": "The Architecture of Longevity (Fitness)",
            "text": "Sustained elite performance is a symphony of Fitness and Fundamentals. You cannot execute complex global strategies if your physical foundation is compromised. Respecting the daily grind of bodily maintenance and longevity science is the ultimate competitive advantage.",
            "action": "Audit your daily executive or athletic routine. Remove one element that is merely superstitious and replace it with a scientifically backed fundamental practice for long-term optimization."
        }
    ]

    builder.add_fact_box("Studies show that athletes who intentionally balance the '10-F' framework—Faith, Family, Finances, Future, Focus, Fundamentals, Fitness, Fortitude, Friends, and Fun—are 80% less likely to experience burnout and 10x more likely to successfully transition from millionaire athletes to billionaire owners within a decade of retirement.")

    for i in range(1, 15):
        template = reflections[(i - 1) % len(reflections)]
        builder.add_heading(f"Day {i}: {template['title']}", level=2)
        builder.add_paragraph(template['text'])
        builder.add_paragraph("Action Step:", bold=True)
        builder.add_paragraph(template['action'], italic=True)
        builder.add_worksheet_space(3)
        builder.add_page_break()

    builder.add_outro()
    builder.save()

if __name__ == "__main__":
    generate_reflections()
