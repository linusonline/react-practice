import React, { Component, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Paper, Typography } from '@material-ui/core';

export default function InteractionSender(props) {
   return (
      <div className="InteractionSender">
         <Paper>
            <Typography variant="h5">
               Send a {props.interactionClass} Interaction
            </Typography>
            <Button variant="contained" color="primary">
               Send
            </Button>
         </Paper>
      </div>
   );
}
