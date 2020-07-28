import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import {Desktop} from '../../functions/helperFunctions'
import {Mobile} from '../../functions/helperFunctions'


const useStyles = makeStyles({
    mobile:{
        height: '15vw'
    },
    desktop:{
        height: '14.5vw'
        // height: '13vw'
    }
})

export default function Spacer(){
    const classes = useStyles()
    return (
      <div>
        <Mobile>
          <div className={classes.mobile}></div>
        </Mobile>
        <Desktop>
          <div className={classes.desktop}></div>
        </Desktop>
      </div>
    );
}