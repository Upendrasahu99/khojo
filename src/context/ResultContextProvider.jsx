import {createContext, useContext, useState} from 'react'

const ResultContext = createContext()




const ResultContextProvider = ({children}) => {
  const [result, setResult] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchItem, setSearchItem] = useState('')

  const getResults = async (type) => {
    setIsLoading(true)
    const url = `https://google-search72.p.rapidapi.com/${type}?q=cricket&lr=en-US&num=10`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'b744819d85msh6083d3ac44bebd3p13e895jsnc899dd51e57c',
        'x-rapidapi-host': 'google-search72.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }

    setResult(result)
    setIsLoading(false)
  }
  return (
    <ResultContext.Provider value={{
      getResults, result, searchItem, setSearchItem, isLoading
    }}>
      {children}
    </ResultContext.Provider>
  )
}

const useResultContext = () => useContext(ResultContext)
export { ResultContextProvider as default, useResultContext}