import React from 'react'
import { graphql } from 'gatsby'
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { SEO } from '@Components/elements/SEO/seo'
import { WeeklyEventsQuery } from '@Graphql/gatsby-graphql'
import { WeeklyEvents } from '@Components/views/WeeklyEvents/weekly-events'

interface WeeklyEventsPage {
  data: WeeklyEventsQuery
}

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '7vw',
  },
  subTitle: {
    width: '100%',
    fontSize: '5vw',
    zIndex: 1,
    whiteSpace: 'pre-wrap',
  },
  tagLine: {
    fontSize: '3vw',
    lineHeight: 2,
    textAlign: 'right',
  },
  pageContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstSection: {
    maxWidth: theme.breakpoints.width('lg'),
    height: '100%',
  },
  image: {
    objectFit: 'contain',
  },
  weeklyEventsSection: {
    width: '100%',
  },
}))

function WeeklyEventsPage({ data }: WeeklyEventsPage) {
  const classes = useStyles()
  return (
    <>
      <SEO title={'Weekly Events'} />
      <Container
        maxWidth={false}
        disableGutters
        className={classes.pageContainer}
      >
        <Grid container>
          <Grid className={classes.weeklyEventsSection} item xs={12}>
            <WeeklyEvents
              allSanityWeeklyEvents={data.allSanityWeeklyEvents}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export const query = graphql`
  query weeklyEvents {
    allSanityWeeklyEvents {
      edges {
        node {
          monday {
            ...DAY
          }
          tuesday {
            ...DAY
          }
          wednesday {
            ...DAY
          }
          thursday {
            ...DAY
          }
          friday {
            ...DAY
          }
          saturday {
            ...DAY
          }
          sunday {
            ...DAY
          }
        }
      }
    }
  }
`

export default WeeklyEventsPage
