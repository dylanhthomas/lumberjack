import PropTypes from 'prop-types'
import React from 'react'

import { ResponsiveBar } from '@nivo/bar'

import { Box } from '../pattern-library'

const colors = {
  critical: '#C1554A',
  serious: '#35495e',
  moderate: '#347474',
  minor: '#577B94',
}

const barColors = {
  criticalColor: colors.critical,
  seriousColor: colors.serious,
  moderateColor: colors.moderate,
  minorColor: colors.minor,
}

type PropsT = {
  data: any
}

const Chart = ({data}: PropsT) => {

  const dataWithColorValues = data.map(entry => {
    return { ...entry, ...barColors }
  })

  return (
    <Box height='600px'>
      <ResponsiveBar
        data={dataWithColorValues}
        keys={Object.keys(colors)}
        indexBy='date'
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={[colors.critical, colors.serious, colors.moderate, colors.minor]}
        borderColor='#FFF'
        borderWidth={1}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'number of violations',
          legendPosition: 'middle',
          legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={'#FFF'}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </Box>
  )
}

export default Chart
