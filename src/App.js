import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Toys from './components/pages/Toys';
import './css/App.css';
import { ContextFilters } from './components/ContextFilters'
import Tree from './components/pages/Tree';
import Home from './components/pages/Home';

function App() {
  const [filters, setFilters] = useState({ shape: [], color: [], size: [], favorite: [] })
  const [selected, setSelected] = useState(0)
  const [valueCount, setValueCount] = useState([1, 12])
  const [valueYear, setValueYear] = useState([1940, 2020])
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
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
  function handleSearchInput(e) {
    setSearchQuery(e.target.value)
  }

  return (
    <Router >
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
            selectedSort,
            handleSearchInput,
            searchQuery
          }}>
            <Header/>
            <Routes>
              <Route path="*" element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/toys" element={<Toys/>}/>
              <Route path="/tree" element={<Tree/>}/>
            </Routes>
            <Footer/>
        </ContextFilters.Provider>
      </div>
    </Router>
  );
}
export default App;
