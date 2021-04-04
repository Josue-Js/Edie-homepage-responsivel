import styled from 'styled-components';



export const Container = styled.nav`
    display: flex;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    padding: 13px 10px;

    @media (min-width: 768px) {
        padding: 13px 50px;
    } 
`;
export const Logo = styled.h1`
    font-size: 1.7142rem;
    font-family: 'Heebo';
    font-weight: 800;
    color: var(--color-text);

    @media (min-width: 768px) {
        font-size: 2.1rem;
    }
`;
export const Nav = styled.div`

    ul {
        display: flex;

        li {
            padding: 0 10px;

            a {
                font-size: 1.3rem;
                color: var(--color-text);
                font-weight: 500;
            }
        }
        
    }


    @media (min-width: 1024px) {
       
        ul > li > a {
            font-size: 1.5rem;
       }

       ul li {
           padding: 15px;
       }
    }
`;