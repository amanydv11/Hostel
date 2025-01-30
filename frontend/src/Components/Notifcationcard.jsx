import React from 'react'
import {enqueueSnackbar, SnackbarProvider} from 'notistack'
const Notifcationcard = () => {
  return (
    <div>
      <SnackbarProvider/>
      <button onClick={()=>enqueueSnackbar('that was easy')} >Show snackbar</button>
    </div>
  )
}

export default Notifcationcard
