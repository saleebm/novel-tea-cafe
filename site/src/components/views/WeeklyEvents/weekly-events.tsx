import React, { useMemo } from 'react'
import GatsbyImage, { FluidObject } from 'gatsby-image'
import {
  Backdrop,
  Container,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TodayIcon from '@material-ui/icons/Today'
import ViewDayIcon from '@material-ui/icons/ViewDay'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
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
    fontSize: '7vmax',
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
        'transform': 'skew(-9deg) !important',
        '& > div': {
          transform: 'skew(9deg) !important',
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
    transform: 'skew(9deg)',
    borderTopLeftRadius: '7px',
    borderBottomLeftRadius: '7px',
  },
  paperContent: {
    transform: 'skew(-9deg)',
  },
  taglineText: {
    textAlign: 'center',
    fontSize: '2.5vmax',
    wordWrap: 'normal',
    overflowWrap: 'normal',
    whiteSpace: 'pre-wrap',
    wordBreak: 'keep-all',
    hyphens: 'auto',
  },
  figureWrap: {
    margin: 0,
    padding: '0 30px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    display: 'block',
    width: '100%',
    maxHeight: '300px',
    margin: '0 auto',
    overflow: 'hidden',
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
  speedDial: {
    position: 'fixed',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
  },
  speedDialIcon: {
    height: '50px',
    width: '50px',
    overflow: 'hidden',
  },
  toolTip: {
    fontSize: '2rem',
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
    const weeklyEventData = []
    const weeklyEventSmallImgs = []
    if (typeof week === 'object') {
      for (const day in week) {
        if (
          day in week &&
          week.hasOwnProperty(day) &&
          (week as { [key: string]: any })[day]
        ) {
          weeklyEventSmallImgs.push({
            img: (week as any)[day].illustration.image.asset.fixed,
            dayName: day,
          })
          weeklyEventData.push({
            ...(week as { [key: string]: any })[day],
            dayName: day,
          })
        }
      }
    }
    return { weeklyEventData, weeklyEventSmallImgs }
  }, [week])

  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDayClick = (dayName: string) => {
    const day = document.getElementById(dayName)
    if (day)
      day.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return useMemo(
    () => (
      <Container
        className={classes.container}
        component={'section'}
        maxWidth={false}
      >
        <Typography
          className={classes.weeklyTitleWrap}
          variant={'h1'}
        >
          Weekly Events
        </Typography>
        <Grid spacing={3} container className={classes.daysContainer}>
          {days.weeklyEventData.map(
            (day: DayFragment & { dayName: string }) => (
              <Grid
                id={day.dayName}
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
                    elevation={3}
                    className={classes.dayPaper}
                  >
                    <AnimatedInView className={classes.paperContent}>
                      <AnimatedIOView disableScale>
                        <Typography
                          className={classes.taglineText}
                          variant={'h2'}
                        >
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
                              disableScale
                              className={classes.imgContainer}
                            >
                              <GatsbyImage
                                imgStyle={{
                                  objectFit: 'contain !important',
                                  height: '300px',
                                  maxHeight: '300px',
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
                          <AnimatedIOView disableScale>
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
            ),
          )}
        </Grid>
        <SpeedDial
          ariaLabel={'SpeedDial openIcon'}
          className={classes.speedDial}
          icon={
            <SpeedDialIcon
              icon={<ViewDayIcon />}
              openIcon={<TodayIcon />}
            />
          }
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          FabProps={{
            size: 'large',
          }}
        >
          {days.weeklyEventSmallImgs.map((action) => (
            <SpeedDialAction
              key={action.dayName}
              icon={
                <GatsbyImage
                  loading={'eager'}
                  fadeIn={false}
                  fixed={action.img}
                  imgStyle={{
                    objectFit: 'contain !important',
                    filter: `contrast(1.2) sepia(1) invert(${
                      isDarkMode ? 1 : 0
                    }) brightness(${isDarkMode ? 0.9 : 1.1})`,
                  }}
                />
              }
              tooltipTitle={action.dayName}
              onClick={() => handleDayClick(action.dayName)}
              title={action.dayName}
              className={classes.speedDialIcon}
              TooltipClasses={{
                tooltip: classes.toolTip,
              }}
              interactive
            />
          ))}
        </SpeedDial>
        <Backdrop open={open} />
      </Container>
    ),
    [open, classes, days, isDarkMode],
  )
}
