import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background: var(--color-dark-blue);

    > div {
        max-width: 1300px;
        padding: 2.5rem 2.9rem;
        margin: 0 auto;

        > div {
            display: flex;
            flex-direction: column;
        }
    }

    p {
        width: 100%;
        margin-top: 11rem;
        color: var(--color-grey-4);
        text-align: center; 
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;

        span {
            font-weight: 700;
            text-decoration: underline;
        }
    }

    @media (min-width: 768px) {

        > div > div {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
        }

        
    }
`;

export const Menu = styled.ul`
    li { 
        padding: 0 5px;

        a {
            font-size: 1.25rem;
            color: var(--color-white);
            font-weight: 400;
        }
    }
`;

export const Redes = styled.div`
    margin: 4.5rem 0;

    h1 {
        font-size: 2.5rem;
        color: var(--color-white);
        font-family: 'Heebo', sans-serif;
    }

    > div {
        a {
            margin-right: 5px; 
        }
    }

    @media (min-width: 768px) {
        margin: 0 0;
    }
`;

export const Email = styled.div`
    
    span {
        font-size: 0.8rem;
        color: var(--color-grey-2);
    }

    div {
        display: flex;
        max-width: 350px;
        background: var(--color-grey-4);
        padding: 4px;
        border-radius: 12px;

        input {
            flex: 1;
            color: var(--color-grey-3);
            background: transparent;
            outline: none;
            border: none;
        }

        button {
            padding: 9px;
            font-size: 1rem;
            border-radius: 12px;
            border: none;
            outline: none;
            color: var(--color-white);
            background: var(--color-blue);

        }
    }

`;