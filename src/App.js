import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import './css/App.css';
import { ContextFilters } from './components/ContextFilters'

function App() {
  const [filters, setFilters] = useState({ shape: [], color: [], size: [], favorite: [] })
  const [selected, setSelected] = useState(0)
  const [valueCount, setValueCount] = useState([1, 12])
  const [valueYear, setValueYear] = useState([1940, 2020])
  const [selectedSort, setSelectedSort] = useState('')
  const shapeFromFilters = (filters) => {
    setFilters(filters)
  }
  const choiceFromButton = (value, form) => {
    const newArr = { ...filters };
    if (!filters[form].includes(value)) {
      newArr[form].push(value)
    } else {
      if (filters[form].includes(value)) {
        const index = newArr[form].indexOf(value);
        if (index !== -1) {
          newArr[form].splice(index, 1);
        }
      }
    }
    shapeFromFilters(newArr)
  }
  function selectedCards() {
    const selected = document.querySelectorAll('.active');
    setSelected(selected.length);
  }
  const handleChangeCount = (event, newValue) => {
    setValueCount(newValue);
  }
  function handleChangeYear(event, newValue) {
    setValueYear(newValue);
  }
  function sortbySelect(selectedSort) {
    setSelectedSort(selectedSort)
  }
  return (
    <div className="App">
      <ContextFilters.Provider
        value={{
          ...filters,
          choiceFromButton,
          selectedCards,
          selected,
          handleChangeCount,
          valueCount,
          handleChangeYear,
          valueYear,
          sortbySelect,
          selectedSort
        }}>
        <Header />
        <Main />
        <Footer />
      </ContextFilters.Provider>
    </div>
  );
}
export default App;
