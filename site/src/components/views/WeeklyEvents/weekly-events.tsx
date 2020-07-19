import React, { useMemo } from 'react'
import { Container, Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GatsbyImage, { FixedObject, FluidObject } from 'gatsby-image'
import {
  AnimatedInView,
  AnimatedIOView,
} from '@Components/elements/InView/in-view'
import { DayFragment, Maybe } from '@Graphql/gatsby-graphql'
import { useDarkMode } from '@Utils/hooks/use-dark-mode'

export interface WeeklyEvents {
  allSanityWeeklyEvents: {
    edges: Array<{
      node: {
        monday?: Maybe<DayFragment>
        tuesday?: Maybe<DayFragment>
        wednesday?: Maybe<DayFragment>
        thursday?: Maybe<DayFragment>
        friday?: Maybe<DayFragment>
        saturday?: Maybe<DayFragment>
        sunday?: Maybe<DayFragment>
      }
    }>
  }
}

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(1),
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weeklyTitleWrap: {
    width: '100%',
    margin: `${theme.spacing(1)}px auto`,
    fontSize: '7vw',
    paddingLeft: '3vw',
  },
  daysContainer: {
    width: '100%',
  },
  dayWrap: {
    'position': 'relative',
    'transformOrigin': 'center',
    'width': '100%',
    '&:nth-child(2n)': {
      // the daypaper
      '& article': {
        'alignSelf': 'flex-end',
        'borderBottomRightRadius': '7px',
        'borderTopRightRadius': '7px',
        'borderTopLeftRadius': '0 !important',
        'borderBottomLeftRadius': '0 !important',
        'transform': 'skew(-12deg) !important',
        '& > div': {
          transform: 'skew(12deg) !important',
        },
      },
    },
  },
  dayAnimationContainer: {
    display: 'flex',
    flexFlow: 'column',
    width: '100%',
  },
  dayPaper: {
    maxWidth: '1280px',
    width: '100%',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    border: '10px solid',
    borderImageSource: `linear-gradient(60deg, #a0a0a0, #4e5969, #d19e04, #a166ab, #5073b8, #1098ad, #07b39b, #dba100)`,
    borderImageSlice: '42 69',
    borderImageRepeat: 'round',
    transform: 'skew(12deg)',
    borderTopLeftRadius: '7px',
    borderBottomLeftRadius: '7px',
  },
  paperContent: {
    transform: 'skew(-12deg)',
  },
  taglineText: {
    textAlign: 'center',
  },
  figureWrap: {
    margin: 0,
    padding: '0 50px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    display: 'block',
    width: '100%',
    maxHeight: '500px',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      'textAlign': 'center',
      '& picture': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      '& img': {
        width: '100% !important',
        height: '100% !important',
        padding: '0 15px',
        margin: '0 auto !important',
      },
    },
  },
  taglineFigureCaption: {
    height: '100%',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    wordWrap: 'normal',
    overflowWrap: 'break-word',
    whiteSpace: 'pre-wrap',
    hyphens: 'auto',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
}))

export function WeeklyEvents({
  allSanityWeeklyEvents,
}: WeeklyEvents) {
  const {
    themeMode: { isDarkMode },
  } = useDarkMode()
  const classes = useStyles()
  const week =
    (Array.isArray(allSanityWeeklyEvents.edges) &&
      allSanityWeeklyEvents.edges[0].node) ??
    null

  const days = useMemo(() => {
    const cherryPie = []
    if (typeof week === 'object') {
      for (const day in week) {
        if (
          day in week &&
          week.hasOwnProperty(day) &&
          (week as { [key: string]: any })[day]
        ) {
          cherryPie.push({
            ...(week as { [key: string]: any })[day],
            dayName: day,
          })
        }
      }
    }
    return cherryPie
  }, [week])

  return (
    <Container
      className={classes.container}
      component={'section'}
      maxWidth={false}
    >
      <Typography className={classes.weeklyTitleWrap} variant={'h1'}>
        Weekly Events
      </Typography>
      <Grid spacing={7} container className={classes.daysContainer}>
        {days.map((day: DayFragment & { dayName: string }) => (
          <Grid
            className={classes.dayWrap}
            item
            key={day.dayName}
            xs={12}
          >
            <div
              className={classes.dayAnimationContainer}
              key={day.dayName}
            >
              <Paper
                variant={'elevation'}
                component={'article'}
                elevation={8}
                className={classes.dayPaper}
              >
                <AnimatedInView className={classes.paperContent}>
                  <AnimatedIOView
                    className={classes.taglineText}
                    delayOrder={1}
                  >
                    <Typography variant={'h2'}>
                      {day.heading}
                    </Typography>
                  </AnimatedIOView>
                  <Grid
                    container
                    component={'figure'}
                    className={classes.figureWrap}
                    spacing={0}
                  >
                    <Grid item xs={12} md={6}>
                      {day.illustration?.image?.asset?.fluid && (
                        <AnimatedIOView
                          delayOrder={2}
                          disableScale
                          className={classes.imgContainer}
                        >
                          <GatsbyImage
                            imgStyle={{
                              objectFit: 'contain !important',
                              height: '500px',
                              maxHeight: '500px',
                              width: 'auto',
                              filter: `contrast(1.2) sepia(1) invert(${
                                isDarkMode ? 1 : 0
                              }) brightness(${
                                isDarkMode ? 0.9 : 1.1
                              })`,
                            }}
                            fluid={
                              day.illustration.image.asset
                                .fluid as FluidObject
                            }
                          />
                        </AnimatedIOView>
                      )}
                    </Grid>
                    <Grid
                      className={classes.taglineFigureCaption}
                      item
                      xs={12}
                      md={6}
                      component={'figcaption'}
                    >
                      <AnimatedIOView disableScale delayOrder={3}>
                        {day.tagline?.map(
                          (tags, index) =>
                            tags &&
                            Array.isArray(tags.children) &&
                            tags.children.map((child) => (
                              <Typography
                                variant={'h3'}
                                key={`${index}`}
                              >
                                {child?.text}
                              </Typography>
                            )),
                        )}
                      </AnimatedIOView>
                    </Grid>
                  </Grid>
                </AnimatedInView>
              </Paper>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
