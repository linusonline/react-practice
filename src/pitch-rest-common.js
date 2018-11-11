import { useEffect, useState } from 'react';

export function useRestEntityManually(url, defaultValue, errorValue) {
   const [value, setValue] = useState(defaultValue);
   const [updateNr, setUpdateNr] = useState(1);

   useEffect(() => {
      fetch(url).then((response) => {
         response.json()
         .then((jsonObj) => {
            setValue(jsonObj);
         })
         .catch((reason) => {
            setValue(errorValue(reason))
         });
      })
   }, [updateNr]);
   return [value, () => { setUpdateNr(updateNr + 1) }];
};
