import styled from 'styled-components'
import ChampionList from '../components/ChampionList'
import FilterBar from '../components/FilterBar/FilterBar'
import filterByDifficulty from '../utils/filterByDifficulty'

const Home = ({
  championArray,
  handleSearch,
  search,
  selected,
  setSelected,
  setSearch,
  tag,
  setTag,
  difficulty,
  setDifficulty,
  setCurrentChampion,
}) => {
  let filteredInput
  let selectedChampion
  // filters the drop down in the search bar
  search
    ? (filteredInput = championArray.filter((value) =>
        value.name.toLowerCase().includes(search)
      ))
    : (filteredInput = championArray)
  // this will filter the list of champions whether a champ was selected in the search bar or a tag was selected
  if (selected) {
    selectedChampion = championArray.filter((value) => value.name === selected)
  } else if (tag !== 'All') {
    selectedChampion = championArray.filter((value) => value.tags.includes(tag))
  } else {
    selectedChampion = championArray
  }
  // function that filters by difficulty
  selectedChampion = filterByDifficulty(selectedChampion, difficulty)

  return (
    <Wrapper>
      <FilterBar
        search={search}
        championArray={filteredInput}
        handleSearch={handleSearch}
        setSelected={setSelected}
        setSearch={setSearch}
        setTag={setTag}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />
      <ChampionList
        championArray={selectedChampion}
        setCurrentChampion={setCurrentChampion}
      />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
`

export default Home
