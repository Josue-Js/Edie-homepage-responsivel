import styled from 'styled-components';



export const Container = styled.div`
    width: 100%;
`;
export const Content = styled.div`

    max-width: 1300px;
    padding: 0 12px;
    margin: 0 auto;


    @media (min-width: 768px) {
        padding: 0 50px;
    }

`;
export const Title = styled.div`
    width: 90%;
    margin: 3rem auto 1rem;

    p {
        color: var(--color-blue);
        font-size: 1rem;
    }

    h1 {
        font-size: 1.5rem;
        color: var(--color-text);
    }

    @media (min-width: 768px) {
        width: 70%;
        margin: 6rem auto 2.8rem ; 

        h1 {
            font-size: 2.5rem; 
        }
    }
`;
export const Image = styled.img`
    width: 100%;
    min-height: 145px;
    max-height: 354px;
    border-radius: 12px;
`;
export const Contact = styled.div`
    width: 90%;
    margin: 1.57rem auto 7.285rem;

    h1 {
        font-size: 1.6rem;
        color: var(--color-text);
    }

    p {
        max-width: 366px;
        font-size: 1rem;
        font-weight: 400;
        color: var(--color-grey-1);
        margin: 2.3571rem 0 2.2rem;
    }

    span {
        font-size: 0.9rem;
        color: var(--color-grey-2);
    }

    div {
        width: min(100%, 350px);
        display: flex;
        align-items: center;
        padding: 4px;
        border-radius: 12px;
        background: var(--color-grey-4);
        justify-content: space-between;
        margin-top: 6px;

        input {
            flex: 1;
            color: var(--color-grey-3);
            background: transparent;
            border: none;
            outline: none;
            padding: 2px 4px;
        }

        button {
            
            border-radius: 12px;
            padding: 8px 10px;
            color: var(--color-white);
            border: none;
            outline: none;
            background: var(--color-blue);
        }
    }

    @media (min-width: 768px) {
        width: 70%;
        margin: 2.9rem auto 13.3rem;

        h1 {
            font-size: 2.7rem;
        }
     
    }
`;
export const Services = styled.div`
    width: 90%;
    margin: 0 auto;

    h1 {
        width: 100%;
        font-size: 1.71rem;
        color: var(--color-text);
        margin-bottom: 3.5rem;
    }

    @media (min-width: 768px) {
        
        h1 {
            font-size: 2.4rem;
        }
    }
`;
export const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    

    div:nth-child(2) > span {background: var(--color-green);}
    div:nth-child(3) > span {background: var(--color-red);}

    .card {
        width: min(100%, 341px);    
        padding: 3.5rem 2.2rem 3rem;
        border-radius: 24px;
        cursor: pointer;
        transition: background 300ms ease-in-out;

        span {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 67px;
            height: 67px;
            background: var(--color-blue);
            border-radius: 12px;
        }

        h2 {
            font-size: 24px;
            color: var(--color-text);
            margin: 35px 0 24px;
        }

        p {
            font-size: 1rem;
            color: var(--color-grey-1);
            font-weight: 400;
        }

        button {
            outline: none;
            border: none;
            padding: 8px 10px;
            border-radius: 12px;
            color: var(--color-grey-2);
            background: var(--color-button-disabled);
            margin-top: 30px;
            cursor: pointer;
            transition: background 400ms ease;
        }


        &:hover {
            box-shadow: 0px 10px 30px rgba(10, 10, 10, 0.1);
            
            button {
                color: var(--color-white);
                background: var(--color-blue);
            }

        }
    }


    @media (min-width: 620px) {
        .card { width: calc(100% / 2); }
    }

    @media (min-width: 1080px) {
        .card { width: calc(100% / 3);}
    }
   
`;
export const ShowCase = styled.div`
    width: 90%;
    margin: 7.35rem auto 7.14rem;

    h1 {
        font-size: 1.71rem;
        margin-bottom: 3.4rem;
    }
    .cards {
    
        div {
            display: flex;
            flex-direction: column;
            margin-bottom: 2rem;

            img {
                border-radius: 24px;
                width: 100%;
                cursor: pointer;
            }

            span {
                font-size: 1rem;
                color: var(--color-grey-2);
                font-weight: 300;
                margin: 5px 0 8px;
            }

            p {
                color: var(--color-text);
                font-size: 1.2rem;
            }
        }
    }

    .see-more {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        span {
            font-size: 1.2rem;
            margin-right: 10px;
            color: var(--color-blue);
            cursor: pointer;
        }
    }

    @media (min-width: 600px) {
        
        h1 {
            margin-bottom: 0;
        }
        .cards {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            gap: 0 16px;
        }
        .cards > div {

        }
        .cards div:nth-child(1),
        .cards div:nth-child(3) { margin-top: 7.5rem;}

        .see-more {
            justify-content: flex-end;
            
        }

    }
    @media (min-width: 768px) {

        h1 {
            font-size: 2.4rem;
        }
    }
`;
export const Team = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;


    .text {
        max-width: 320px;

        h2 {
        font-size: 1.2rem;
        color: var(--color-red);
        }

        h1 {
            font-size: 2.3rem;
            color: var(--color-text);
            margin: 8px 0 15px;
        }

        p {
            font-weight: 400;
            max-width: 280px;
            font-size: 1.1rem;
            color: var(--color-grey-1);
            margin-bottom: 36px;
        }
    }

    .person {
        max-width: 635px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: auto;
        grid-gap: 15px;
        grid-template-areas: '.  p1'
                             'p3 p1'
                             'p3 p2'
                             '.  p2';
        div > img {
            width: 100%;
            height: 100%;
            border-radius: 24px;
        }

        div:first-child{
            grid-area: p1;
            padding-right: 15px;
        }
        div:nth-child(2){ grid-area: p2; }
        div:last-child{ grid-area: p3;}
    }


    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .text {
            min-width: 320px; 
        }

    }

`;
export const About = styled.div`
    width: 90%;
    margin: 7.14rem auto;

    > p {
        max-width: 937px;
        font-size: 1.714rem;
        margin-bottom: 27px;
    }

    > div {
        display: flex;

        img {
            width: 87px;
            height: 87px;
            border-radius: 12px;
        }

        div {
            margin-left: 30px;

            span { font-size: 1.714rem;}

            p {
                margin-top: 12px;
                font-size: 1.2rem;
                color: var(--color-grey-2);
            }
        }
    }


    @media (min-width: 768px) {
        p {
            margin-bottom: 42px;
            font-size: 2.4rem; 
        }
    }

`;

