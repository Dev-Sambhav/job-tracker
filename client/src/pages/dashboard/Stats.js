import { useEffect } from "react";
import { ChartsContainer, StatsContainer } from "../../components"
import { useAppContext } from "../../context/appContext"

const Stats = () => {
  const {showStats, monthlyApplications} = useAppContext();
  useEffect(()=>{
    showStats();
    // eslint-disable-next-line
  },[])
  return (
    <>
      <StatsContainer/>
      {monthlyApplications.length > 0 && <ChartsContainer/>}
    </>
  )
}
export default Stats