import os
from document_builder_1800IQ import DocumentBuilder

def generate_planner():
    builder = DocumentBuilder(
        title="30-Day Dynasty Execution & 10-F Action Planner",
        output_dir="10_30_Day_Finish_Strong_Action_Planner",
        filename_base="30_Day_Finish_Strong_Action_Planner"
    )
    
    builder.add_title_page()
    builder.add_disclaimer_and_intro()
    
    builder.add_heading("The Architecture of Greatness: The 10-F Matrix", level=2)
    builder.add_paragraph("You do not rise to the level of your goals; you fall to the level of your systems. In the realm of billion-dollar ownership, your dynasty relies on a 360-degree command of the 10-F framework: Faith, Family, Finances, Future, Focus, Fundamentals, Fitness, Fortitude, Friends, and Fun. This 30-day planner isn't merely for tracking workouts—it is an operating system designed for negotiating with sovereign wealth funds, acquiring sports franchises, establishing 100-year family trusts, and orchestrating IPOs for your personal brand. You are no longer just an athlete; you are an institution.")
    
    builder.add_fact_box("Dynasty builders and global power brokers share one defining behavioral trait: systemic execution across multiple life pillars. When you are managing generational wealth, dedicating 90 minutes to uninterrupted, deep strategic work—whether scaling Finances, fortifying Family trusts, or mastering Fundamentals—yields an exponential increase in compounded ROI. Fractional attention costs you equity; absolute focus secures your legacy.")

    for day in range(1, 31):
        builder.add_heading(f"Day {day} Dynasty Execution Matrix", level=2)
        
        builder.add_paragraph("Audit your 24-hour cycle. Select three pillars from the 10-F Framework (Faith, Family, Finances, Future, Focus, Fundamentals, Fitness, Fortitude, Friends, Fun) to allocate your capital, influence, and focus today.", italic=True)
        
        builder.add_table(
            ["10-F Pillar Focus", "Dynasty Objective / Strategic Action"],
            [
                ["[Enter Pillar 1, e.g., Finances - 100-Year Trust]", ""],
                ["[Enter Pillar 2, e.g., Future - Franchise Acquisition]", ""],
                ["[Enter Pillar 3, e.g., Fortitude - Sovereign Wealth Prep]", ""]
            ]
        )
        
        builder.add_paragraph("Highest Leverage Move (The One Play to Compound Your Legacy Today):", bold=True)
        builder.add_worksheet_space(1)
        
        builder.add_paragraph("Potential Dilution / Threat (What threatens your Equity, Focus, or Fortitude?):", bold=True)
        builder.add_worksheet_space(1)
        
        builder.add_page_break()

    builder.add_outro()
    builder.save()

if __name__ == "__main__":
    generate_planner()
