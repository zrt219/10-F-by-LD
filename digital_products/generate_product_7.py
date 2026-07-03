import os
from document_builder_1800IQ import DocumentBuilder

def generate_career_readiness():
    builder = DocumentBuilder(
        title="Life After Sport Career Readiness Workbook",
        output_dir="07_Life_After_Sport_Career_Readiness",
        filename_base="Life_After_Sport_Career_Readiness_Workbook_Elite"
    )
    
    builder.add_title_page()
    builder.add_disclaimer_and_intro()
    
    # Section 1
    builder.add_heading("Beyond the Uniform: The 10-F Dynasty Audit", level=2)
    builder.add_paragraph("As an elite athlete, your identity has been defined by your performance on the field. But when the stadium lights turn off, you aren't just transitioning into a career—you are stepping into the arena of Billion-Dollar Ownership. To successfully build a 100-year legacy, you must anchor your empire in the 10-F framework: Faith, Family, Finances, Future, Focus, Fundamentals, Fitness, Fortitude, Friends, and Fun. These pillars ensure that your transition from player to owner, acquiring sports franchises, and establishing family trusts is unshakable.")
    builder.add_fact_box("A 2025 study of ultra-high-net-worth athletes found that those who successfully transitioned into billionaire status anchored their empires in core pillars like Faith, Family, and Future, utilizing 100-year family trusts and sovereign wealth partnerships.")
    builder.add_paragraph("Thinking about your Future and Faith, what global infrastructure or ownership legacy are you passionate about building that will impact the next 100 years?", bold=True)
    builder.add_worksheet_space(2)
    builder.add_paragraph("If you could not play your sport tomorrow, what are the core Fundamentals of your character that will convince sovereign wealth funds and institutional investors to back your vision?", bold=True)
    builder.add_worksheet_space(2)
    builder.add_page_break()

    # Section 2
    builder.add_heading("Translating Elite Skills: The Billion-Dollar 10-F Matrix", level=2)
    builder.add_paragraph("Billion-dollar syndicates and sovereign wealth funds don't just want you as a brand ambassador; they want you as a General Partner. You possess extreme Fortitude, laser Focus, and an elite grasp of Fundamentals that are essential for orchestrating IPOs and acquiring sports franchises. You must translate these 10-F traits into the language of global dynasty building.")
    
    builder.add_table(
        ["Athletic Experience (10-F Pillar)", "Dynasty Translation (Boardroom Ready)"],
        [
            ["Managing an 8-figure NIL/Contract portfolio (Finances & Future)", "Establishing 100-year family trusts, structuring private equity buyouts, and executing personal brand IPOs."],
            ["Dealing with intense global media scrutiny (Focus & Fortitude)", "Elite crisis management, international geopolitical PR strategy, and maintaining Focus during hostile takeovers."],
            ["Locker Room Leader / Franchise Face (Friends & Family)", "Orchestrating sovereign wealth fund negotiations, assembling billionaire syndicates, and fostering a Family-like corporate empire."],
            ["Executing complex championship game plans (Fundamentals)", "Strategic mergers & acquisitions (M&A), rapid market dominance processing, and mastery of institutional investment Fundamentals."],
            ["Recovering from career-threatening injury (Fitness & Fortitude)", "Demonstrated extreme Fortitude in corporate turnarounds, restructuring distressed assets, and maintaining elite operational Fitness."]
        ]
    )
    
    builder.add_paragraph("Map Your Own Skills to the Billion-Dollar 10-F Framework:", bold=True)
    builder.add_table(
        ["Your Specific Athletic Experience (Identify the F's)", "Dynasty Translation"],
        [
            ["", ""],
            ["", ""],
            ["", ""]
        ]
    )
    builder.add_page_break()

    # Section 3
    builder.add_heading("The Billion-Dollar Syndicate Blueprint", level=2)
    builder.add_paragraph("Your portfolio should not read like a standard executive resume. It should read like the prospectus of a global holding company, venture capital general partner, or sports franchise owner whose empire is built on impenetrable Finances and an infinite vision for the Future.")
    
    builder.add_fact_box("According to top wealth advisors, athletes who transition into billionaire status succeed because they position themselves as institutional titans. They bring Focus, Fortitude, and a deep understanding of Fundamentals to mega-cap M&A and global asset allocation.")

    builder.add_heading("EXAMPLE PROSPECTUS: Marcus Johnson Holdings LLC", level=3)
    builder.add_paragraph("Location: Dubai / Miami / London | Syndicate: MJ Global Fund")
    builder.add_paragraph("EXECUTIVE SUMMARY", bold=True)
    builder.add_paragraph("Elite professional athlete turned institutional investor with a proven track record of structuring multi-generational wealth vehicles (Finances). Transitioning 10+ years of high-stakes execution (Fortitude), global syndicate leadership (Friends/Family), and international media relations into the acquisition of major sports franchises and launching a personal brand IPO (Future & Fitness).")
    
    builder.add_paragraph("OWNERSHIP & ASSET EXPERIENCE", bold=True)
    builder.add_paragraph("Chairman & General Partner, Marcus Johnson Holdings (2020 - Present)")
    builder.add_paragraph("• Negotiated and secured over $500M in institutional capital for sports-tech acquisitions, ensuring 100-year generational wealth (Finances & Future).")
    builder.add_paragraph("• Established a global philanthropic endowment, deploying $50M annually for international youth development based on core Faith and Family values.")
    builder.add_paragraph("• Acted as primary negotiator with sovereign wealth funds, maintaining supreme Focus during complex cross-border M&A.")
    
    builder.add_paragraph("Franchise Cornerstone, Global League (2018 - Present)")
    builder.add_paragraph("• Executed global expansion initiatives under extreme pressure, relying on elite business Fundamentals.")
    builder.add_paragraph("• Mentored and integrated diverse, multi-national talent pools into a unified culture, becoming a trusted Friend and syndicate leader.")
    builder.add_paragraph("• Maintained peak physical and mental Fitness, recovering from market and physical setbacks through unmatched Fortitude.")
    
    builder.add_paragraph("Draft Your Syndicate Executive Summary (Incorporate your strongest F's):", bold=True)
    builder.add_worksheet_space(3)
    builder.add_page_break()

    # Section 4
    builder.add_heading("Networking with the 0.001%: Building Your Billionaire 'Friends'", level=2)
    builder.add_paragraph("When reaching out to heads of state, sovereign wealth managers, or mega-cap private equity titans, you must provide asymmetric value. Networking at the billion-dollar tier is about finding true Friends and co-investors who align with your Faith, Family dynasty principles, and 100-year vision for the Future. And amidst the high-stakes deals, always maintain the perspective to have Fun.")
    builder.add_paragraph("10-F Aligned Sovereign Wealth Outreach Script:", bold=True)
    builder.add_paragraph("> 'Hi [Name], I've closely followed your fund's recent $2B infrastructure deployment. As I transition my family office into acquiring a majority stake in a European sports franchise, I admire how your team maintains Focus and structural Fundamentals in cross-border deals. I would value a brief conversation next week to exchange perspectives on structuring 100-year trusts and how you balance global operations with Family legacy. Let me know if you have a window to connect.'", italic=True)
    
    builder.add_outro()
    builder.save()

if __name__ == "__main__":
    generate_career_readiness()
