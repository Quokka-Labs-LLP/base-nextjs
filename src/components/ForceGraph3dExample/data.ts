const name = [
  'freeCodeCamp',
  'Vue',
  'React',
  'Tensorflow',
  'Bootstrap',
  'Awesome',
  'You-Dont-Know-JS',
  'oh-my-zsh',
  'Flutter',
  'd3',
  'React Native',
  'Electron',
  'Create React App',
  'Axios',
  'JavaScript Algorithms',
  'Node.js',
  'Kubernetes',
  'Animate',
  'Deno',
  'Tensorflow Models',
  'Font-Awesome',
  'Angular',
  'Puppeteer',
  'TypeScript',
  'Three.js',
  'Ant Design',
  'Laravel',
  'Angular.js',
  'Material UI',
  'Java Design Patterns',
  'Webpack',
  'Redux',
  'jQuery',
  'Reveal.js',
  'Apple Swift',
  'Atom',
  'Flask',
  'Next.js',
  'Django',
  'Socket.io',
]

export default function genRandomTree(N = 30, reverse = false): any {
  return {
    // eslint-disable-next-line
    // @ts-ignore
    nodes: [...Array(N).keys()].map((i, idx) => ({
      id: i,
      name: name[idx],
      color: Math.floor(Math.random() * 16777215).toString(16),
    })),
    // eslint-disable-next-line
    // @ts-ignore
    links: [...Array(N).keys()]
      .filter(id => id)
      .map(id => ({
        [reverse ? 'target' : 'source']: id,
        [reverse ? 'source' : 'target']: Math.round(Math.random() * (id - 1)),
      })),
  }
}
