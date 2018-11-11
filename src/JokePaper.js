import React from 'react';
import Button from '@material-ui/core/Button';
import { Paper, Typography } from '@material-ui/core';
import { useRestEntityManually } from './pitch-rest-common';

export default function JokePaper(props) {
   const [joke, update] = useRestEntityManually(
      props.url + '/dev/random_joke',
      { setup: "Loading...", punchline: "" },
      (reason) => {return {setup: reason, punchline: ""}},
   );

   return (
      <div className="JokePaper">
         <Paper>
            <Typography variant="h5">
               {joke.setup}
            </Typography>
            <Typography>
               {joke.punchline}
            </Typography>
            <Button variant="contained" color="primary" onClick={update}>
               New
            </Button>
         </Paper>
      </div>
   );
}
