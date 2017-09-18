import uuidv4 from 'uuid/v4'

const ADJUST_VALUE = 102400

function rand() {
  return Math.floor(Math.random() * ADJUST_VALUE)
}
const data = [
  {
    id: uuidv4(),
    title: 'Thinking in Java',
    tags: ['java', 'programming'],
    author: 'kenny',
    date: Date.now(),
    content: 'This is content about Thinking in Java',
    rate: 4,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'How to learn Redux',
    tags: ['js', 'frontend', 'mvc'],
    author: 'kyle',
    date: Date.now(),
    content: 'This is content about redux',
    rate: 3.5,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'Machine learning',
    tags: [],
    author: 'stan',
    date: Date.now(),
    content: 'This is content about Machine learning',
    rate: 5,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'Java Concurrent In Practice',
    tags: ['concurrency', 'java'],
    author: 'butter',
    date: Date.now(),
    content: 'This is content about Java Cucurrent In Practice',
    rate: 5,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'Algorithms',
    tags: ['algorithms'],
    author: 'carman',
    date: Date.now(),
    content: 'This is content about Algorithms',
    rate: 4.5,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'Thinking in Java',
    tags: ['java', 'programming'],
    author: 'P.C priciple',
    date: Date.now(),
    content: 'This is content about Thinking in Java',
    rate: 4,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'How to learn Redux',
    tags: ['js', 'frontend', 'mvc'],
    author: 'mike',
    date: Date.now(),
    content: 'This is content about redux',
    rate: 3.5,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'Machine learning',
    tags: [],
    author: 'jessica',
    date: Date.now(),
    content: 'This is content about Machine learning',
    rate: 5,
    traffic: rand()
  }
]

const articles = {
  isfetching: false,
  data,
  sortedBy: 'date'
}

export default articles