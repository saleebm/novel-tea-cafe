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
import AudiotrackIcon from '@material-ui/icons/Audiotrack'
import clsx from 'clsx'
import {
  AnimatedInPlainViewParent,
  AnimatedInView,
  AnimatedInViewChildDiv,
  AnimatedIOView,
} from '@Components/elements/InView/in-view'
import {
  DayFragment,
  Maybe,
  TaglineFragment,
} from '@Graphql/gatsby-graphql'
import { useDarkMode } from '@Utils/hooks/use-dark-mode'

export interface Specials {
  sanitySiteSettings?: Maybe<{
    happyHour?: Maybe<Array<Maybe<TaglineFragment>>>
  }>
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
  pageTitle: {
    width: '100%',
    margin: `${theme.spacing(1)}px auto`,
    textAlign: 'left',
    paddingLeft: '3vw',
    fontSize: '4.2rem',
    wordWrap: 'normal',
    overflowWrap: 'normal',
    whiteSpace: 'pre-wrap',
    wordBreak: 'keep-all',
    hyphens: 'auto',
  },
  weeklyTitleWrap: {
    width: '100%',
    margin: `${theme.spacing(1)}px auto`,
    fontSize: '3.2rem',
    textAlign: 'center',
  },
  daysContainer: {
    width: '100%',
  },
  fullWidthBlock: {
    width: '100%',
    display: 'block',
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
        'borderImageSource': `linear-gradient(-60deg, #a0a0a0, #4e5969, #d19e04, #a166ab, #5073b8, #1098ad, #07b39b, #dba100)`,
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
    borderImageSlice: '33 12',
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
    fontSize: '4.2rem',
    wordWrap: 'normal',
    overflowWrap: 'normal',
    whiteSpace: 'pre-wrap',
    wordBreak: 'keep-all',
    hyphens: 'auto',
  },
  figureWrap: {
    margin: 0,
    padding: 0,
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
    bottom: theme.spacing(10),
    right: theme.spacing(1),
  },
  speedDialIcon: {
    height: '50px',
    width: '50px',
    overflow: 'hidden',
  },
  toolTip: {
    fontSize: '1.42rem',
    backgroundColor: theme.palette.primary[theme.palette.type],
    color: theme.palette.primary.contrastText,
  },
  happyHourDeetWrap: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  happyHour: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    display: 'inline-flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  happyHourText: {
    maxWidth: '18ch',
    wordWrap: 'normal',
    overflowWrap: 'normal',
    whiteSpace: 'pre-wrap',
    wordBreak: 'keep-all',
    hyphens: 'auto',
    fontSize: '2.7rem',
    lineHeight: 1.6,
    fontVariationSettings: '"WGHT" 200, "SALT" 1, "CONT" 0',
    color: theme.palette.text.primary,
  },
  happyHourGridWrap: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  happyHourGridItem: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  happyHourIcon: {
    marginRight: theme.spacing(1.5),
  },
}))

export function Specials({
  allSanityWeeklyEvents,
  sanitySiteSettings,
}: Specials) {
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
        <AnimatedInPlainViewParent className={classes.fullWidthBlock}>
          <AnimatedInViewChildDiv>
            <Typography
              color={'textSecondary'}
              className={classes.pageTitle}
              variant={'h1'}
            >
              Specials
            </Typography>
          </AnimatedInViewChildDiv>
        </AnimatedInPlainViewParent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <AnimatedInPlainViewParent>
              <AnimatedInViewChildDiv
                className={classes.fullWidthBlock}
              >
                <Typography
                  className={classes.weeklyTitleWrap}
                  variant={'h2'}
                  color={'textPrimary'}
                >
                  Happy Hour
                </Typography>
              </AnimatedInViewChildDiv>
              <AnimatedInViewChildDiv>
                <Paper
                  variant={'elevation'}
                  component={'article'}
                  elevation={3}
                  className={classes.dayPaper}
                >
                  <Grid
                    container
                    spacing={1}
                    className={clsx(
                      classes.paperContent,
                      classes.happyHourGridWrap,
                    )}
                    alignItems={'center'}
                    justify={'center'}
                  >
                    <Grid
                      className={classes.happyHourGridItem}
                      item
                      xs={12}
                    >
                      <AnimatedInViewChildDiv
                        className={classes.happyHourDeetWrap}
                      >
                        {sanitySiteSettings?.happyHour &&
                          Array.isArray(
                            sanitySiteSettings.happyHour,
                          ) &&
                          sanitySiteSettings.happyHour.map(
                            (tags, _index) =>
                              tags &&
                              Array.isArray(tags.children) &&
                              tags.children.map((child, index) => (
                                <div
                                  key={`${index}`}
                                  className={classes.happyHour}
                                >
                                  <AudiotrackIcon
                                    fontSize={'large'}
                                    className={classes.happyHourIcon}
                                    color={
                                      index % 2 === 0
                                        ? 'secondary'
                                        : 'primary'
                                    }
                                  />
                                  <Typography
                                    variant={'subtitle2'}
                                    component={'p'}
                                    gutterBottom
                                  >
                                    <span
                                      className={
                                        classes.happyHourText
                                      }
                                    >
                                      {child?.text}
                                    </span>
                                  </Typography>
                                </div>
                              )),
                          )}
                      </AnimatedInViewChildDiv>
                    </Grid>
                  </Grid>
                </Paper>
              </AnimatedInViewChildDiv>
            </AnimatedInPlainViewParent>
          </Grid>
          <Grid item xs={12}>
            <AnimatedInPlainViewParent>
              <Grid
                spacing={3}
                container
                className={classes.daysContainer}
              >
                <Grid item xs={12}>
                  <AnimatedInViewChildDiv
                    className={classes.fullWidthBlock}
                  >
                    <Typography
                      className={classes.weeklyTitleWrap}
                      variant={'h2'}
                      color={'textPrimary'}
                    >
                      Weekly Events
                    </Typography>
                  </AnimatedInViewChildDiv>
                </Grid>
                {days.weeklyEventData.map(
                  (day: DayFragment & { dayName: string }) => (
                    <Grid
                      id={day.dayName}
                      className={classes.dayWrap}
                      item
                      key={day.dayName}
                      xs={12}
                    >
                      <AnimatedInViewChildDiv
                        className={classes.dayAnimationContainer}
                      >
                        <Paper
                          variant={'elevation'}
                          component={'article'}
                          elevation={3}
                          className={classes.dayPaper}
                        >
                          <AnimatedInView
                            className={classes.paperContent}
                          >
                            <AnimatedIOView disableScale>
                              <Typography
                                className={classes.taglineText}
                                variant={'h2'}
                                color={'textSecondary'}
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
                              <Grid item xs={12} md={6} lg={3}>
                                {day.illustration?.image?.asset
                                  ?.fluid && (
                                  <AnimatedIOView
                                    disableScale
                                    className={classes.imgContainer}
                                  >
                                    <GatsbyImage
                                      imgStyle={{
                                        objectFit:
                                          'contain !important',
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
                                className={
                                  classes.taglineFigureCaption
                                }
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
                                          component={'p'}
                                          key={`${index}`}
                                          gutterBottom
                                        >
                                          {child?.text}
                                        </Typography>
                                      )),
                                  )}
                                  {day.details && (
                                    <Typography
                                      variant={'h4'}
                                      component={'p'}
                                      gutterBottom
                                    >
                                      {day.details}
                                    </Typography>
                                  )}
                                </AnimatedIOView>
                              </Grid>
                            </Grid>
                          </AnimatedInView>
                        </Paper>
                      </AnimatedInViewChildDiv>
                    </Grid>
                  ),
                )}
              </Grid>
            </AnimatedInPlainViewParent>
          </Grid>
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
              tooltipOpen
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
    [open, classes, days, isDarkMode, sanitySiteSettings?.happyHour],
  )
}
