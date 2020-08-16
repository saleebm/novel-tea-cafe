import React from 'react'
import { graphql } from 'gatsby'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { SEO } from '@Components/elements/SEO/seo'
import { WeeklyEventsQuery } from '@Graphql/gatsby-graphql'
import { Specials } from '@Components/views/Specials/specials'

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
      <SEO
        title={'Specials'}
        description={
          'Come for our daily happy hour and stay for the daily events, different everyday of the week.'
        }
      />
      <Container maxWidth={'xl'} className={classes.pageContainer}>
        <Specials
          allSanityWeeklyEvents={data.allSanityWeeklyEvents}
          sanitySiteSettings={data.sanitySiteSettings}
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
