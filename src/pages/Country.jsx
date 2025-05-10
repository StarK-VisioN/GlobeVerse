import { useEffect, useState, useTransition } from 'react'
import { getCountryData } from '../api/postApi';
import { Loader } from '../components/UI/Loader';
import { CountryCard } from '../components/AppLayout/CountryCard';
import SearchFilter from '../components/UI/SearchFilter';

function Country() {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    })
  }, []);

  if(isPending) return <Loader />

  // console.log(search, filter);


  const searchCountry = (country) => {
    if(search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());    
    }
      return country;
  };

  const filterRegion = (country) => {
    if (filter === "all" || !filter) return country;
    return country.region === filter;
  };

  // here is the main logic
  const filterContries = countries.filter((country) => searchCountry(country) && filterRegion(country));


  return (
    <section className='country-section'>

      {/* Search */}
      <SearchFilter 
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries} 
        setCountries={setCountries}
      />



      <ul className="grid grid-four-cols">
        {filterContries.map((currentCountry, index) => {
          return <CountryCard country={currentCountry} key={index} />;
        })}
      </ul>
    </section>
  )
}

export default Country