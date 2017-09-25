import uuidv4 from 'uuid/v4'

const ADJUST_VALUE = 102400

function rand() {
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

const articles = {
  isfetching: false,
  data,
  sortedBy: 'date'
}

export default articles