import styled from 'styled-components'
import Hero from '../components/Champion/hero/Hero'
import Skins from '../components/Champion/Skins/Skins'

const Champion = ({ championData }) => {
  return (
    <Wrapper>
      {championData ? <Hero championData={championData} /> : 'no champion Data'}
      {championData ? (
        <Skins
          championSkins={championData.skins}
          championId={championData.id}
        />
      ) : (
        'no champion Data'
      )}
    </Wrapper>
  )
}

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  position: relative;
`

export default Champion
