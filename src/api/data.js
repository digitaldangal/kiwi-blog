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
    content: 'This is content about Thinking in Java',
    rate: 4,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'How to learn Redux',
    tags: ['js', 'frontend', 'mvc'],
    author: 'kyle',
    content: 'This is content about redux',
    rate: 3.5,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'Machine learning',
    tags: [],
    author: 'stan',
    content: 'This is content about Machine learning',
    rate: 5,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'Java Concurrent In Practice',
    tags: ['concurrency', 'java'],
    author: 'butter',
    content: 'This is content about Java Cucurrent In Practice',
    rate: 5,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'Algorithms',
    tags: ['algorithms'],
    author: 'carman',
    content: 'This is content about Algorithms',
    rate: 4.5,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'Thinking in Java',
    tags: ['java', 'programming'],
    author: 'P.C priciple',
    content: 'This is content about Thinking in Java',
    rate: 4,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'How to learn Redux',
    tags: ['js', 'frontend', 'mvc'],
    author: 'mike',
    content: 'This is content about redux',
    rate: 3.5,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'Machine learning',
    tags: [],
    author: 'jessica',
    content: 'This is content about Machine learning',
    rate: 5,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'Java Concurrent In Practice',
    tags: ['concurrency', 'java'],
    author: 'james',
    content: 'This is content about Java Cucurrent In Practice',
    rate: 5,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'Algorithms',
    tags: ['algorithms'],
    author: 'antony',
    content: 'This is content about Algorithms',
    rate: 4.5,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'Thinking in Java',
    tags: ['java', 'programming'],
    author: 'paul',
    content: 'This is content about Thinking in Java',
    rate: 4,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'How to learn Redux',
    tags: ['js', 'frontend', 'mvc'],
    author: 'tony',
    content: 'This is content about redux',
    rate: 3.5,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'Machine learning',
    tags: [],
    author: 'trey',
    content: 'This is content about Machine learning',
    rate: 5,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'Java Concurrent In Practice',
    tags: ['concurrency', 'java'],
    author: 'jeff dean',
    content: 'This is content about Java Cucurrent In Practice',
    rate: 5,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'Algorithms',
    tags: ['algorithms'],
    author: 'kenny',
    content: 'This is content about Algorithms',
    rate: 4.5,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'Thinking in Java',
    tags: ['java', 'programming'],
    author: 'kenny',
    content: 'This is content about Thinking in Java',
    rate: 4,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'How to learn Redux',
    tags: ['js', 'frontend', 'mvc'],
    author: 'kenny',
    content: 'This is content about redux',
    rate: 3.5,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'Machine learning',
    tags: [],
    author: 'kenny',
    content: 'This is content about Machine learning',
    rate: 5,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'Java Concurrent In Practice',
    tags: ['concurrency', 'java'],
    author: 'kenny',
    content: 'This is content about Java Cucurrent In Practice',
    rate: 5,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'Algorithms',
    tags: ['algorithms'],
    author: 'kenny',
    content: 'This is content about Algorithms',
    rate: 4.5,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'Thinking in Java',
    tags: ['java', 'programming'],
    author: 'kenny',
    content: 'This is content about Thinking in Java',
    rate: 4,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'How to learn Redux',
    tags: ['js', 'frontend', 'mvc'],
    author: 'kenny',
    content: 'This is content about redux',
    rate: 3.5,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'Machine learning',
    tags: [],
    author: 'kenny',
    content: 'This is content about Machine learning',
    rate: 5,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'Java Concurrent In Practice',
    tags: ['concurrency', 'java'],
    author: 'kenny',
    content: 'This is content about Java Cucurrent In Practice',
    rate: 5,
    traffic: rand()
  },
  {
    id: uuidv4(),
    title: 'Algorithms',
    tags: ['algorithms'],
    author: 'kenny',
    content: 'This is content about Algorithms',
    rate: 4.5,
    traffic: rand()
  },
]

  export default data