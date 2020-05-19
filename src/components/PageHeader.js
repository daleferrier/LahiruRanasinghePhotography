import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    fontSize: "40px",
    fontFamily: 'Amiri',
    borderBottom: "1px solid",
    borderTop: "1px solid",
    borderImageSource:
      'linear-gradient(to right, orange , rgb(243, 243, 243))',
    borderImageSlice: 1,
    textAlign: 'center',
    marginTop: '30px',
    marginBottom: '20px'
  },
});

export default function PageHeader(props){
    const classes = useStyles()

    return(
        <div className={classes.root}>
            {props.header}
        </div>
    )
}