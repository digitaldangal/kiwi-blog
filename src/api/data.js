import uuidv4 from 'uuid/v4'

const ADJUST_VALUE = 102400

const rand = () => {
  return Math.floor(Math.random() * ADJUST_VALUE)
}

const data = [
  {
    key: uuidv4(),
    title: 'Thinking in Java',
    tags: ['java', 'programming'],
    author: 'kenny',
    date: Date.now(),
    content: 'This is content about Thinking in Java',
    rate: {
      num: 0,
      sum: 0,
      isRating: false
    },
    traffic: rand()
  },
  {
    key: uuidv4(),
    title: 'How to learn Redux',
    tags: ['js', 'frontend', 'mvc'],
    author: 'kyle',
    date: Date.now(),
    content: 'This is content about redux',
    rate: {
      num: 1,
      sum: 4.5,
      isRating: false
    },
    traffic: rand()
  },
  {
    key: uuidv4(),
    title: 'Machine learning',
    tags: [],
    author: 'stan',
    date: Date.now(),
    content: 'This is content about Machine learning',
    rate: {
      num: 2,
      sum: 9,
      isRating: false
    },
    traffic: rand()
  },
  {
    key: uuidv4(),
    title: 'Java Concurrent In Practice',
    tags: ['concurrency', 'java'],
    author: 'butter',
    date: Date.now(),
    content: 'This is content about Java Cucurrent In Practice',
    rate: {
      num: 5,
      sum: 21,
      isRating: false
    },
    traffic: rand()
  }
]

export const articles = {
  isfetching: false,
  data,
  sortedBy: 'date'
}

const visit = [
  { name: '10-01', uv: 1000, pv: 2400 },
  { name: '10-02', uv: 3090, pv: 4567 },
  { name: '10-03', uv: 2807, pv: 1398 },
  { name: '10-04', uv: 2040, pv: 9800 },
  { name: '10-05', uv: 5787, pv: 8430 },
  { name: '10-06', uv: 1893, pv: 4800 },
  { name: '10-07', uv: 8529, pv: 7863 },
  { name: '10-08', uv: 7382, pv: 5120 },
  { name: '10-09', uv: 3229, pv: 6753 },
  { name: '10-10', uv: 1873, pv: 3927 },
  
]

const usage = [
  { name: '00:00', cpu: 12, memory: 83 },
  { name: '01:00', cpu: 23, memory: 45 },
  { name: '02:00', cpu: 30, memory: 67 },
  { name: '03:00', cpu: 28, memory: 18 },
  { name: '04:00', cpu: 20, memory: 98 },
  { name: '05:00', cpu: 27, memory: 22 },
  { name: '06:00', cpu: 18, memory: 48 },
  { name: '07:00', cpu: 89, memory: 48 },
  { name: '08:00', cpu: 87, memory: 32 },
  { name: '09:00', cpu: 27, memory: 66 },
  { name: '10:00', cpu: 21, memory: 29 },
  { name: '11:00', cpu: 45, memory: 39 },
  { name: '12:00', cpu: 39, memory: 87 },
  { name: '13:00', cpu: 87, memory: 60 },
  { name: '14:00', cpu: 89, memory: 51 },
  { name: '15:00', cpu: 98, memory: 73 },
  { name: '16:00', cpu: 100, memory: 19 },
  { name: '17:00', cpu: 87, memory: 7 },
  { name: '18:00', cpu: 63, memory: 38 },
  { name: '19:00', cpu: 21, memory: 18 },
  { name: '20:00', cpu: 12, memory: 20 },
  { name: '21:00', cpu: 33, memory: 29 },
  { name: '22:00', cpu: 29, memory: 53 },
  { name: '23:00', cpu: 10, memory: 66 }
]

export const dashboard = {
  visit,
  usage,
  visitors: rand()
}