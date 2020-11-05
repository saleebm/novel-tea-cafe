import React from 'react'
import { graphql } from 'gatsby'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { SEO } from '@Components/elements/SEO/seo'
import { Specials } from '@Components/views/Specials/specials'

interface WeeklyEventsPage {
  data: GatsbyTypes.weeklyEventsQuery
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
  const {
    allSanityWeeklyEvents,
    sanitySiteSettings,
  }: GatsbyTypes.weeklyEventsQuery = data
  return (
    <>
      <SEO
        title={'Specials'}
        description={
          'Come for our daily happy hour and stay for the daily events, different everyday of the week.'
        }
      />
      <Container maxWidth={'lg'} className={classes.pageContainer}>
        <Specials
          allSanityWeeklyEvents={allSanityWeeklyEvents}
          sanitySiteSettings={sanitySiteSettings}
        />
      </Container>
    </>
  )
}

export const query = graphql`
  query weeklyEvents {
    sanitySiteSettings {
      happyHour {
        ...TAGLINE
      }
    }
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
