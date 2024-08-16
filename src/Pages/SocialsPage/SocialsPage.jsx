import React from "react";
import "./SocialsPage.css";

import PageWrapper from "../../Components/Display/PageWrapper/PageWrapper";
import Section from "../../Components/Display/Section/Section";
import SocialContainer from "../../Components/Interaction/SocialContainer/SocialContainer";

function SocialsPage() {
  return (
    <div className="socials-page">
      <PageWrapper>
        <Section label="Professional Networking" topOfPage>
          <div className="socials">
            <SocialContainer
              src="/images/handshake-icon.png"
              alt="HandShake Icon"
              siteName="HandShake"
              siteURL="https://shawnee.joinhandshake.com/profiles/44352489"
            />
            <SocialContainer
              src="/images/linkedin-icon.png"
              alt="LinkedIn Icon"
              siteName="LinkedIn"
              siteURL="https://www.linkedin.com/in/parker-lauders/"
            />
          </div>
        </Section>
        <Section label="Coding Plateforms" bottomBorder>
          <div className="socials">
            <SocialContainer
              src="/images/github-icon.png"
              alt="GitHub Icon"
              siteName="GitHub"
              siteURL="https://www.github.com/LaudersP"
            />
            <SocialContainer
              src="/images/hackerrank-icon.png"
              alt="HackerRank Icon"
              siteName="HackerRank"
              siteURL="https://www.hackerrank.com/profile/parkerwlauders"
            />
            <SocialContainer
              src="/images/leetcode-icon.png"
              alt="LeetCode Icon"
              siteName="LeetCode"
              siteURL="https://leetcode.com/u/ParkerLauders/"
            />
          </div>
        </Section>
      </PageWrapper>
    </div>
  );
}

export default SocialsPage;
