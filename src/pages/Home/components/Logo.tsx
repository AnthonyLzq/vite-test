import { FC } from 'react'
import { Grid, Hidden, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/system'

import acecomLogo from '../../../static/acecomLogo.svg'

const useStyles = makeStyles((theme: Theme) => ({
  acecomLogo: {
    width: '100%',
    maxHeight: '100%'
    // [theme.breakpoints.down('sm')]: {
    //   width: '40%'
    // },
    // [theme.breakpoints.down('xs')]: {
    //   width: '70%'
    // }
  },
  fontWrapper: {
    textAlign: 'center',
    marginTop: '20px'
  },
  titleMobile: {
    color: '#FFF',
    fontFamily: 'Nunito, sans-serif',
    fontWeight: '700',
    fontSize: '12vw'
    // [theme.breakpoints.down('xs')]: {
    //   fontSize: '15vw'
    // }
  },
  subtitleMobile: {
    color: '#FFF',
    fontFamily: 'Nunito, sans-serif',
    fontWeight: '300',
    fontSize: '3vw'
    // [theme.breakpoints.down('xs')]: {
    //   fontSize: '3.5vw'
    // }
  }
}))

type LogoProps = {
  isMobile?: boolean
}

const Logo: FC<LogoProps> = ({ isMobile = false }) => {
  const classes = useStyles()

  return (
    <>
      <Grid
        item
        lg={4}
        md={5}
        sm={12}
        container
        // justify={isMobile ? 'center' : 'flex-start'}
        direction={isMobile ? 'column' : 'row'}
        alignItems='center'
        style={{ width: '100%', height: '100%' }}
      >
        <img alt='acecomLogo' src={acecomLogo} className={classes.acecomLogo} />
        <Hidden mdUp>
          <div className={classes.fontWrapper}>
            <Typography variant='h1' className={classes.titleMobile}>
              ACECOM
            </Typography>
            <Typography variant='h2' className={classes.subtitleMobile}>
              Asociación Científica Especializada en Computación
            </Typography>
          </div>
        </Hidden>
      </Grid>
    </>
  )
}

export { Logo }
