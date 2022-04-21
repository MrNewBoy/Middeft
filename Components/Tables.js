import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect,useState } from 'react';
import axios from "axios"
import { Button } from '@mui/material';
import {useNavigate} from "react-router-dom"
import { Divider } from '@mui/material';


const Tables = () => {
    const [pageNo,setPageNo] = useState(0)
    const [data,setData] = useState(null)
    const navigate = useNavigate()

    useEffect(()=>{
      // console.log("2")
        fetchData(pageNo)   
    },[pageNo])
    
    const fetchData = async(pageNo) => {
      try
      {
        const data = await axios.get(`https://api.instantwebtools.net/v1/passenger?page=${pageNo}&size=20`)
        const dataList = data.data.data
        // console.log(data.data.data)
        setData(dataList)
      }catch(err)
      {
        console.log(err)
      }
      
    }

    const clickhandler = (e,item) =>
    {
      console.log(item.airline[0].country)
      console.log(item.airline[0].name)
      console.log(item.airline[0].website)
      const item_id = item._id
      const item_airline_country = item.airline[0].country
      const item_airline_name = item.airline[0].name
      const item_airline_website = item.airline[0].website

      sessionStorage.setItem("_id",item_id)
      sessionStorage.setItem("country",item_airline_country)
      sessionStorage.setItem("name",item_airline_name)
      sessionStorage.setItem("website",item_airline_website)
      navigate("/Airline")
    }
  return (
    <>
    <div className='page-top'><Button onClick={()=>{setPageNo((prev)=>{return prev>=1?prev-1:0})}}>Previous</Button>{pageNo}<Button onClick={()=>{setPageNo((prev)=>prev+1)}}>Next</Button></div>
    <Divider />
     <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 1000 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User name</TableCell>
            <TableCell >Total number of trips</TableCell>
            <TableCell ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data===null ? null : 
          data.map((item,index)=>{return (
                      <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.trips}</TableCell>
                        <TableCell><Button onClick={(e)=>clickhandler(e,item)}>Check Airline</Button></TableCell>
                        </TableRow>
                        )
                        }
                  )
            }
        </TableBody>
        </Table>
        </TableContainer>

    </>
    
  )
}

export default Tables