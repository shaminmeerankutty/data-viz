import React, {useState, useEffect} from "react"
import axios from "axios"
import { data_endpoint } from "./api"
import Datepicker from "./datepicker"
import Chart from "./chart"
import Table from "./table"

function App() {
  const [data, setData] = useState({records: [], error: false})

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      const response = await axios(data_endpoint)
      setData({records: response.data, error: true})
    } catch(e) {
      setData({records: [], error: true})
    }
  }

  return (
    <div className="App">
      <Datepicker 
        onDateSelected={(dates)=>{console.log(dates)}}
      />
      <Chart data={data.records}></Chart>
      <Table data={data.records}></Table>
    </div>
  )
}

export default App
