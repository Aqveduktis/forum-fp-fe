import styled from 'styled-components'
//#1F2933;
export const Box = styled.div`
background-color: #1F2933;
width: 95vw;
margin: 0 auto;

@media (min-width: 1200px) {
  width: 1080px;
}
`

export const Page = styled.section`
padding: 1.0em;

`

export const Wrapper = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
`


export const Card = styled.article`
  background-color: #486581;
  color: white;
  max-width: 300px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
export const Banner = styled.div`
width: 95%;
margin: 0 auto;
display:flex;
flex-wrap: nowrap; 
justify-content: space-between;
align-items: center; 
@media (max-width: 576px) {
  flex-wrap: wrap;
}
`

export const LinkNav = styled.nav`
margin: 10px 0;

.active {
  color: #bc7a94;
  border-color: #bc7a94;
}
`

