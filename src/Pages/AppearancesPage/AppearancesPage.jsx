import React from "react";

import PageWrapper from "../../Components/Display/PageWrapper/PageWrapper";
import Section from "../../Components/Display/Section/Section";
import ArticleSummary from "../../Components/Display/ArticleShowcase/ArticleShowcase";

function AppearancesPage() {
  return (
    <div className="socials-page">
      <PageWrapper>
        <Section label="Athletic Articles" bottomBorder topOfPage>
          <ArticleSummary
            src="/article-thumbnails/lauders-bowl.png"
            articleTitle="Lauders bowls his way to success at Shawnee State University"
            articleURL="https://shawneestatechronicle.com/5930/uncategorized/lauders-bowls-his-way-to-success-at-shawnee-state-university/"
            articleAuthor="Spencer Toy"
            articleSite="Shawnee State Chronicle"
          >
            Parker Lauders’ journey at Shawnee State University is defined by
            his passion for bowling and his dedication to both sport and
            academics. From a pivotal high school tournament to a recent
            fourth-place finish in Lafayette, Parker’s college experience has
            been shaped by his commitment to improvement and teamwork. Balancing
            his studies in computer engineering with the demands of competitive
            bowling, Parker exemplifies how following your passion can lead to
            personal growth and unforgettable college memories.
          </ArticleSummary>
          <ArticleSummary
            src="/article-thumbnails/strike-up.png"
            articleTitle="Strike up the excitement: SSU bowlers compete in Wright State tournament"
            articleURL="https://shawneestatechronicle.com/5964/uncategorized/strike-up-the-excitement-ssu-bowlers-compete-in-wright-state-tournament/"
            articleAuthor="Spencer Toy"
            articleSite="Shawnee State Chronicle"
          >
            As Parker Lauders prepared for the Wright State Raider Classic, he
            and his Shawnee State University teammates focused on honing their
            skills and building team camaraderie. With goals set on a top-five
            team finish and personal achievements, Parker emphasized the
            importance of confidence, mental toughness, and practice on
            challenging oil patterns. Beyond competition, the tournament
            represents the culmination of their hard work, teamwork, and passion
            for bowling, with plans to unwind and celebrate their efforts
            afterward.
          </ArticleSummary>
          <ArticleSummary
            src="/article-thumbnails/ssu-rise-to-fourth.png"
            articleTitle="SSU men's bowling rises to fourth, advances to semifinals of Raider Classic"
            articleURL="https://www.ssubears.com/sports/mbowl/2023-24/releases/20231112v30u0a"
            articleAuthor="Kevin Colley"
            articleSite="SSU Bears"
          >
            What a difference a year makes for Shawnee State's men's bowling
            team. After finishing 25th in the Raider Classic last year, the team
            surged to a fourth-place finish in 2023, knocking down 8,270 pins
            and securing a spot in the semifinals. Leading the charge, Parker
            Lauders posted the team's best individual finish, placing 21st
            overall with an impressive 204.4 average across five games. The
            team's consistent performance, including standout Baker games,
            propelled them past tough competition, showcasing their growth and
            determination. This achievement marks a significant milestone in
            their journey, reflecting hard work and team synergy.
          </ArticleSummary>
        </Section>
      </PageWrapper>
    </div>
  );
}

export default AppearancesPage;
