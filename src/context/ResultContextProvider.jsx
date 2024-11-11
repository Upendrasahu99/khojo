import {createContext, useContext, useEffect, useState} from 'react'

const ResultContext = createContext()




const ResultContextProvider = ({children}) => {
  const [result, setResult] = useState([])
    
  const [isLoading, setIsLoading] = useState(false)
  const [searchItem, setSearchItem] = useState('google')

  //?q=cricket
  const getResults = async (query) => {
    setIsLoading(true)
    const url = `https://google-web-search1.p.rapidapi.com/?query=${query}&limit=20&related_keywords=true`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'b744819d85msh6083d3ac44bebd3p13e895jsnc899dd51e57c',
        'x-rapidapi-host': 'google-web-search1.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      // console.log(data);
      await setResult(data.results)
      // console.log(result)
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false)
  }



  return (
    <ResultContext.Provider value={{
      getResults, result, setResult,  searchItem, setSearchItem, isLoading
    }}>
      {children}
    </ResultContext.Provider>
  )
}

const useResultContext = () => useContext(ResultContext)
export { ResultContextProvider as default, useResultContext}