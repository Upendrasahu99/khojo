import { useLocation } from "react-router-dom"
import { useResultContext } from "../context/ResultContextProvider"
import Loading from "./Loading"
import { useEffect } from "react"


const Result = () => {
  const {getResults, result, setResult, searchItem, setSearchItem, isLoading} = useResultContext()
  const location = useLocation();

  
  useEffect(() => {
    // getResults(searchItem)
  }, [searchItem]) 

  if(isLoading) return <Loading/>

  return(
    <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
    
      {result?.map(({url, title}, index) =>
        (<div key={index} className="md:w-2/5 w-full">
          <a href={url} target="_blank" rel="noreferrer">
            <p className="text-sm">
              {url.length > 30 ? url.substring(0, 30) : url}
            </p>
            <p className="text-lg hover:underline dark:texxt-blue-300 text-blue-700">
              {title}
            </p>
          </a>
        </div>)
      )}
    </div>
  )
}

export default Result