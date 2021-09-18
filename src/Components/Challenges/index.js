import React from "react";
import {
    ChallengesContainer,
    ChallengesTodos,
    ChallengesHeading,
    ChallengesTitle,
    ChallengesCard,
    ChallengesImg,
    ChallengesButton,
} from "./ChallengesElements";

const Challenges = ({ heading, data }) => {
    return (
        <ChallengesContainer>
            <ChallengesHeading>{heading}</ChallengesHeading>
            <ChallengesTodos>
                {data.map((challenges, index) => {
                    return (
                        <ChallengesCard key={index}>
                            <ChallengesImg
                                src={challenges.img}
                                alt={challenges.alt}
                            />
                            <ChallengesTitle>{challenges.name}</ChallengesTitle>
                            <ChallengesButton>
                                {challenges.button}
                            </ChallengesButton>
                        </ChallengesCard>
                    );
                })}
            </ChallengesTodos>
        </ChallengesContainer>
    );
};

export default Challenges;
