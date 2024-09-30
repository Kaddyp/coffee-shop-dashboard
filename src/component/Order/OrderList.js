import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const OrderList = (props) => {
    const { order} = props;
    
    return (
    <Paper elevation={5} className='root text-center py-3 my-3'>
      <Grid container direction="row" alignItems="center">
        <Grid size={2} >
            {order.status === 'Done' && <Button variant="contained" color="success">{order.status}</Button>}
            {order.status === 'Processing' && <Button variant="contained" color="secondary">{order.status}</Button>}
            {order.status === 'Delivery' && <Button variant="contained" color="warning">{order.status}</Button>}
        </Grid>
        <Grid size={2}>
          <Typography variant="h6">{order.time}</Typography>
        </Grid>
        <Grid size={3}>
          <LocationOnIcon />
          <Typography>{order.place}</Typography>
        </Grid>
        <Grid size={3}>
          <div className={'orderContainer'}>
            {order.order.map((o, id) => (
              <Typography key={id}>{o}</Typography>
            ))}
          </div>
        </Grid>
        <Grid size={2}>
          <Typography variant="h4">{order.sum}</Typography>
        </Grid>
      </Grid>
    </Paper>
    )
}

export default OrderList

