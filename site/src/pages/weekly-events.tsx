import React from 'react'
import { graphql } from 'gatsby'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { SEO } from '@Components/elements/SEO/seo'
import { WeeklyEventsQuery } from '@Graphql/gatsby-graphql'
import { WeeklyEvents } from '@Components/views/WeeklyEvents/weekly-events'

interface WeeklyEventsPage {
  data: WeeklyEventsQuery
}

const useStyles = makeStyles({
  pageContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

function WeeklyEventsPage({ data }: WeeklyEventsPage) {
  const classes = useStyles()
  return (
    <>
      <SEO title={'Weekly Events'} />
      <Container maxWidth={'xl'} className={classes.pageContainer}>
        <WeeklyEvents
          allSanityWeeklyEvents={data.allSanityWeeklyEvents}
        />
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
