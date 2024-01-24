import styled, { css } from 'styled-components'
// eslint-disable-next-line react/prop-types, no-unused-vars
export const Container = styled.section`
    position: absolute;
    backdrop-filter: blur(3px);
    width: 100%;
    height: 90%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(30,178,166);
    background: linear-gradient(142deg, rgba(30,178,166,1) 0%, rgba(19,71,116,0.8141631652661064) 87%);

    opacity:${({ $isVisible }) => $isVisible ? 1 : 0};
    pointer-events: none;
    transform: translateY(50px);

    > svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        transform: rotate(45deg);
        transition: .7s;
        color: #fff;
    }

    nav{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
        transform: scale(0.7);
        transition: .7s;
        > div{
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        > a {
            color: #fff;
            text-decoration: none;
            > svg {
                margin-right: 5px;
            }
        }
    }
    .programas{
      >ul{
        width: 200px;
        position: absolute;
        top: 100px;
        list-style: none;
        text-align: start;
        >li{
          background: var(--main-color);
          cursor: pointer;
          >div{
            >a{
              display: block;
              height: 100%;
              width: 100%;
              text-decoration: none;
              color: var(--color-letter-secondary);
              padding: 16px;
            }
          }
        }
      }
    }
    .pesquisa{
      >ul{
        width: 200px;
        position: absolute;
        top: 150px;
        list-style: none;
        text-align: start;
        >li{
          background: var(--main-color);
          cursor: pointer;
          >div{
            >a{
              display: block;
              height: 100%;
              width: 100%;
              text-decoration: none;
              color: var(--color-letter-secondary);
              padding: 16px;
            }
          }
        }
      }
    }

    ${({ $isVisible }) => $isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);

    > svg {
      transform: rotate(0deg);
    }

    nav {
      transform: scale(1);
    }
  `}
`;