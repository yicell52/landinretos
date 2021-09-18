import styled from "styled-components";

export const ChallengesContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 1rem calc((100vw - 1300px) / 2);
    background: #fff;
    color: #000;
`;

export const ChallengesTodos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`;

export const ChallengesCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;
`;

export const ChallengesImg = styled.img`
    height: 300px;
    min-width: 260px;
    max-width: 100%;
    box-shadow: 8px 8px #fecbf8;
`;

export const ChallengesHeading = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
`;

export const ChallengesTitle = styled.h2`
    font-weight: 400;
    font-size: 1rem;
`;

export const ChallengesButton = styled.button`
    font-size: 1rem;
    padding: 0rem 1rem;
    border: none;
    background: #ec00ff;
    color: #fff;
    transition: 0.2 ease-out;
    border-radius: 5px;
    height: 98px;

    &:hover {
        background: #e3b7ea;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
        url: "";
    }
`;
