import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { RicardianContract } from '@eoscostarica/eoscr-components'

import Footer from 'components/Footer'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    overflow: 'hidden',
    padding: theme.spacing(2, 1, 0, 1),
    '& h3': {
      fontSize: '30px !important',
      fontWeight: 'normal'
    },
    '& img': {
      width: '24px !important',
      marginBottom: '18px'
    },
    '& h4': {
      fontSize: '30px !important',
      marginBottom: '10px',
      fontWeight: '600'
    },
    '& a': {
      lineBreak: 'anywhere'
    },
    [theme.breakpoints.up('sm')]: {
      '& h3': {
        fontSize: '50px !important',
        fontWeight: 'normal'
      },
      '& img': {
        width: '24px !important',
        marginBottom: '18px'
      },

      '& h4': {
        fontSize: '30px !important',
        marginBottom: '10px',
        fontWeight: 'normal'
      }
    }
  },
  selectorTab: {
    backgroundColor: '#272863'
  },
  overrideLinearColor: {
    backgroundColor: '#27286380'
  },
  overrideFrontLinearColor: {
    backgroundColor: '#272863'
  },
  boxContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
}))

const TermsOfUse = () => {
  const classes = useStyles()
  const [tab, setTab] = useState(0)

  return (
    <Box className={classes.boxContent}>
      <Box>
        <Tabs
          value={tab}
          onChange={(event, newValue) => setTab(newValue)}
          classes={{ indicator: classes.selectorTab }}
        >
          <Tab label="evolutiondex" />
          <Tab label="wevotethefee" />
        </Tabs>
        {tab === 0 && (
          <Box className={classes.wrapper}>
            <RicardianContract
              contractName="evolutiondex"
              httpEndpoint="https://jungle.eosio.cr"
              LinearProgressOverrideClasses={{
                barColorPrimary: classes.overrideFrontLinearColor,
                colorPrimary: classes.overrideLinearColor
              }}
              LinearProgressColor="primary"
            />
          </Box>
        )}
        {tab === 1 && (
          <Box className={classes.wrapper}>
            <RicardianContract
              contractName="wevotethefee"
              httpEndpoint="https://jungle.eosio.cr"
              LinearProgressOverrideClasses={{
                barColorPrimary: classes.overrideFrontLinearColor,
                colorPrimary: classes.overrideLinearColor
              }}
              LinearProgressColor="primary"
            />
          </Box>
        )}
      </Box>
      <Footer />
    </Box>
  )
}

export default TermsOfUse
