import styled from 'styled-components'
import ChampionInfo from '../components/Champion/ChampionInfo/ChampionInfo'
import Hero from '../components/Champion/hero/Hero'
const Champion = ({ championData }) => {
  let backgroundImg
  if (championData) {
    backgroundImg = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championData.id}_0.jpg`
  }

  return (
    <Wrapper url={backgroundImg}>
      {championData ? <Hero championData={championData} /> : 'no champion Data'}
      {/* {championData ? (
        <ChampionInfo championData={championData} />
      ) : (
        'no champion Info'
      )} */}
    </Wrapper>
  )
}

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  overflow-y: scroll;
`

export default Champion
