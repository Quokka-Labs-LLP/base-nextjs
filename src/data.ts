import {
  generateBulletData,
  generateChordData,
  generateCountriesData,
  generateDayCounts,
  generateDrinkStats,
  generateLibTree,
  generateNetworkData,
  generateProgrammingLanguageStats,
  generateSwarmPlotData,
  generateWinesTastes,
  generateXYSeries,
} from '@nivo/generators'
import { BarDatum } from '@nivo/bar'
import { NetworkSvgProps } from '@nivo/network'
import random from './utils/random'

const width = 580,
  height = 400

const keys = ['hot dogs', 'burgers', 'sandwich', 'kebab', 'fries', 'donut']
export const BarCommonProps = {
  width,
  height,
  margin: { top: 60, right: 110, bottom: 60, left: 80 },
  data: generateCountriesData(keys, { size: 7 }) as BarDatum[],
  indexBy: 'country',
  keys,
  padding: 0.2,
  labelTextColor: 'inherit:darker(1.4)',
  labelSkipWidth: 16,
  labelSkipHeight: 16,
}

export const BulletCommonProps = {
  width,
  height,
  margin: { top: 10, right: 30, bottom: 50, left: 110 },
  titleOffsetX: -80,
  data: [
    generateBulletData('volume', 200, { measureCount: 2 }),
    generateBulletData('cost', 10000, { markerCount: 2 }),
    generateBulletData('revenue', 2, { float: true }),
  ],
  spacing: 80,
  animate: false,
}

interface Datum {
  x: number
  y: number
  extra: number
}

// eslint-disable-next-line
export const generateBumpData = () => {
  const years = [2000, 2001, 2002, 2003, 2004, 2005]
  const ranks = [
    [1, 2, 4, 3, 5, 6, 7],
    [2, 6, 3, 5, 4, 7, 1],
    [3, 4, 7, 6, 5, 1, 2],
    [4, 2, 3, 1, 7, 6, 5],
    [2, 1, 3, 5, 4, 6, 7],
    [3, 2, 1, 7, 6, 5, 4],
  ]

  const series = ranks[0].map(rank => {
    return {
      id: `Serie ${rank}`,
      data: [] as Datum[],
    }
  })

  years.forEach((year: number, i: number) => {
    ranks[i].forEach((rank: number, i: number) => {
      series[i].data.push({
        x: year,
        y: rank,
        extra: Math.random(),
      })
    })
  })

  return series
}

export const BumpCommonProps = {
  width,
  height,
  margin: { top: 40, right: 100, bottom: 40, left: 100 },
  data: generateBumpData(),
}

const from = new Date(2019, 0, 1)
const to = new Date(2019, 11, 31)
const data = generateDayCounts(from, to)

export const CalendarCommonProps = {
  width,
  height,
  margin: {
    top: 50,
    right: 10,
    bottom: 10,
    left: 50,
  },
  from: from.toISOString(),
  to: to.toISOString(),
  data,
}

const generateData = (size: number) => {
  const { matrix, keys } = generateChordData({ size })

  return { data: matrix, keys }
}

export const ChordCommonProps = {
  width,
  height,
  margin: { top: 60, right: 80, bottom: 60, left: 80 },
  ...generateData(7),
  xPadding: 0.2,
}

export const CirclePackingCommonProps = {
  width,
  height,
  // eslint-disable-next-line
  data: generateLibTree() as any,
  padding: 2,
  id: 'name',
  value: 'loc',
  labelsSkipRadius: 16,
}

export const FunnelCommonProps = {
  data: [
    {
      id: 'step_sent',
      value: 85523,
      label: 'Sent',
    },
    {
      id: 'step_viewed',
      value: 74844,
      label: 'Viewed',
    },
    {
      id: 'step_clicked',
      value: 62617,
      label: 'Clicked',
    },
    {
      id: 'step_add_to_card',
      value: 50425,
      label: 'Add To Card',
    },
    {
      id: 'step_purchased',
      value: 31139,
      label: 'Purchased',
    },
  ],
  margin: { top: 20, right: 20, bottom: 20, left: 20 },
  borderWidth: 20,
  motionConfig: 'wobbly',
}

export const HeatMapCommonProps = {
  width,
  height,
  margin: { top: 60, right: 80, bottom: 60, left: 80 },
  data: generateXYSeries({
    serieIds: ['Japan', 'France', 'US', 'Germany', 'Norway', 'Iceland', 'UK', 'Vietnam'],
    x: {
      values: ['Train', 'Subway', 'Bus', 'Car', 'Boat', 'Moto', 'Moped', 'Bicycle', 'Others'],
    },
    y: {
      length: NaN,
      min: -100_000,
      max: 100_000,
      round: true,
    },
  }),
}

const networkData = generateNetworkData()
type Node = typeof networkData['nodes'][number]
type Link = typeof networkData['links'][number]
export const NetworkCommonProperties: NetworkSvgProps<Node, Link> = {
  data: networkData,
  width,
  height,
  // eslint-disable-next-line
  nodeColor: (node: any) => node.color,
  repulsivity: 10,
  iterations: 60,
  // eslint-disable-next-line
  linkDistance: (link: any) => link.distance * 1.3,
}

export const TimeRangeCommonData = [
  {
    value: 198,
    day: '2018-06-12',
  },
  {
    value: 268,
    day: '2018-04-16',
  },
  {
    value: 159,
    day: '2018-07-16',
  },
  {
    value: 373,
    day: '2018-05-29',
  },
  {
    value: 207,
    day: '2018-06-05',
  },
  {
    value: 116,
    day: '2018-04-18',
  },
  {
    value: 223,
    day: '2018-05-11',
  },
  {
    value: 169,
    day: '2018-07-11',
  },
  {
    value: 178,
    day: '2018-06-26',
  },
  {
    value: 80,
    day: '2018-06-02',
  },
  {
    value: 53,
    day: '2018-07-04',
  },
  {
    value: 23,
    day: '2018-04-23',
  },
  {
    value: 14,
    day: '2018-05-16',
  },
  {
    value: 342,
    day: '2018-07-15',
  },
  {
    value: 253,
    day: '2018-05-07',
  },
  {
    value: 31,
    day: '2018-07-06',
  },
  {
    value: 20,
    day: '2018-07-18',
  },
  {
    value: 379,
    day: '2018-07-12',
  },
  {
    value: 13,
    day: '2018-06-25',
  },
  {
    value: 374,
    day: '2018-07-23',
  },
  {
    value: 250,
    day: '2018-05-02',
  },
  {
    value: 314,
    day: '2018-06-19',
  },
  {
    value: 85,
    day: '2018-05-23',
  },
  {
    value: 39,
    day: '2018-05-05',
  },
  {
    value: 241,
    day: '2018-05-15',
  },
  {
    value: 202,
    day: '2018-05-22',
  },
  {
    value: 158,
    day: '2018-06-24',
  },
  {
    value: 230,
    day: '2018-07-30',
  },
  {
    value: 397,
    day: '2018-07-31',
  },
  {
    value: 181,
    day: '2018-04-04',
  },
  {
    value: 232,
    day: '2018-06-27',
  },
  {
    value: 112,
    day: '2018-07-02',
  },
  {
    value: 235,
    day: '2018-04-10',
  },
  {
    value: 290,
    day: '2018-05-04',
  },
  {
    value: 106,
    day: '2018-05-30',
  },
  {
    value: 337,
    day: '2018-08-01',
  },
  {
    value: 272,
    day: '2018-08-05',
  },
  {
    value: 339,
    day: '2018-04-17',
  },
  {
    value: 305,
    day: '2018-05-21',
  },
  {
    value: 341,
    day: '2018-06-21',
  },
  {
    value: 145,
    day: '2018-06-13',
  },
  {
    value: 46,
    day: '2018-05-20',
  },
  {
    value: 79,
    day: '2018-06-23',
  },
  {
    value: 51,
    day: '2018-08-07',
  },
  {
    value: 181,
    day: '2018-08-06',
  },
  {
    value: 31,
    day: '2018-06-08',
  },
  {
    value: 359,
    day: '2018-07-09',
  },
  {
    value: 241,
    day: '2018-04-07',
  },
  {
    value: 189,
    day: '2018-07-20',
  },
  {
    value: 300,
    day: '2018-04-26',
  },
]

export const LineCommonProps = {
  width: width - 80,
  height,
  margin: { top: 20, right: 20, bottom: 60, left: 40 },
  data: generateDrinkStats(18),
  animate: true,
  enableSlices: 'x',
}

export const PieCommonProps = {
  width,
  height,
  margin: { top: 80, right: 120, bottom: 80, left: 120 },
  data: generateProgrammingLanguageStats(true, 9).map(({ label, ...d }) => ({
    id: label,
    ...d,
  })),
  animate: true,
  activeOuterRadiusOffset: 8,
}

export const SwarmPlotCommonProps = {
  width: width - 100,
  height,
  margin: {
    top: 40,
    right: 40,
    bottom: 40,
    left: 40,
  },
  groupBy: 'group',
  id: 'id',
  value: 'price',
  valueScale: {
    type: 'linear' as const,
    min: 0,
    max: 500,
  },
  size: 10,
  ...generateSwarmPlotData(['group A', 'group B', 'group C'], { min: 40, max: 60 }),
}

// eslint-disable-next-line
// @ts-ignore
export const TreemapCommonProps = {
  width: width - 80,
  height,
  // eslint-disable-next-line
  data: generateLibTree() as any,
  identity: 'name',
  value: 'loc',
  valueFormat: '.02s',
  labelSkipSize: 16,
}

export const RadarCommonProps = {
  ...generateWinesTastes(),
  width: width - 80,
  height,
  indexBy: 'taste',
  valueFormat: '>-.2f',
  margin: { top: 70, right: 80, bottom: 40, left: 80 },
  borderColor: { from: 'color' },
  gridLabelOffset: 36,
  dotSize: 10,
  dotColor: { theme: 'background' },
  dotBorderWidth: 2,
  colors: { scheme: 'nivo' },
  blendMode: 'multiply',
  motionConfig: 'wobbly',
  legends: [
    {
      anchor: 'top-left',
      direction: 'column',
      translateX: -50,
      translateY: -40,
      itemWidth: 80,
      itemHeight: 20,
      itemTextColor: '#999',
      symbolSize: 12,
      symbolShape: 'circle',
      effects: [
        {
          on: 'hover',
          style: {
            itemTextColor: '#000',
          },
        },
      ],
    },
  ],
}

export const ScatterPlotCommonProps = {
  data: [
    {
      id: 'group A',
      data: Array(10)
        .fill(0)
        .map(() => ({ x: random(1, 100), y: random(1, 100) })),
    },
    {
      id: 'group B',
      data: Array(10)
        .fill(0)
        .map(() => ({ x: random(1, 100), y: random(1, 100) })),
    },
    {
      id: 'group C',
      data: Array(10)
        .fill(0)
        .map(() => ({ x: random(1, 100), y: random(1, 100) })),
    },
    {
      id: 'group D',
      data: Array(10)
        .fill(0)
        .map(() => ({ x: random(1, 100), y: random(1, 100) })),
    },
    {
      id: 'group E',
      data: Array(10)
        .fill(0)
        .map(() => ({ x: random(1, 100), y: random(1, 100) })),
    },
  ],
  margin: { top: 60, right: 140, bottom: 70, left: 90 },
  xScale: { type: 'linear', min: 0, max: 'auto' },
  xFormat: '>-.2f',
  yScale: { type: 'linear', min: 0, max: 'auto' },
  yFormat: '>-.2f',
  blendMode: 'multiply',
  axisTop: null,
  axisRight: null,
  axisBottom: {
    orient: 'bottom',
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'weight',
    legendPosition: 'middle',
    legendOffset: 46,
  },
  axisLeft: {
    orient: 'left',
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'size',
    legendPosition: 'middle',
    legendOffset: -60,
  },
  legends: [
    {
      anchor: 'bottom-right',
      direction: 'column',
      justify: false,
      translateX: 130,
      translateY: 0,
      itemWidth: 100,
      itemHeight: 12,
      itemsSpacing: 5,
      itemDirection: 'left-to-right',
      symbolSize: 12,
      symbolShape: 'circle',
      effects: [
        {
          on: 'hover',
          style: {
            itemOpacity: 1,
          },
        },
      ],
    },
  ],
}
