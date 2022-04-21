import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from '@mui/material';

const Airline = () => {

    let website = sessionStorage.getItem("website")
    website = `https://${website}`

    
    
  return (
    <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 1000 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                    <TableCell>Airline</TableCell>
                    <TableCell>Country</TableCell>
                    <TableCell>Website</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
                 <TableRow>
                     <TableCell>{sessionStorage.getItem("name")}</TableCell>
                     <TableCell>{sessionStorage.getItem("country")}</TableCell>
                     <TableCell><Link href={website} underline="none">Website</Link></TableCell>
                 </TableRow>
        </TableBody>
        </Table>
    </TableContainer>
  )
}

export default Airline
