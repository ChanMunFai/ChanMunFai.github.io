const skills = [
  {
    title: 'ST310 Machine Learning',
    competency: 90,
    category: ['Bachelors'],
  },
  {
    title: 'ST308 Bayesian Inference',
    competency: 79,
    category: ['Bachelors'],
  },
  {
    title: 'MA231 Operations Research',
    competency: 93,
    category: ['Bachelors'],
  },
  {
    title: 'EC331 Quantitative Thesis',
    competency: 76,
    category: ['Bachelors'],
  },
  {
    title: 'EC333 Problems of Applied Econometrics',
    competency: 66,
    category: ['Bachelors'],
  },
  {
    title: 'EC221 Principles of Econometrics',
    competency: 80,
    category: ['Bachelors'],
  },
  {
    title: 'EC201 Microeconomics',
    competency: 76,
    category: ['Bachelors'],
  },
  {
    title: 'EC210 Macroeconomics',
    competency: 77,
    category: ['Bachelors'],
  },
  {
    title: 'ST202 Probability, Distribution Theory and Inference',
    competency: 79,
    category: ['Bachelors'],
  },
  {
    title: 'MA100 Mathematical Methods',
    competency: 75,
    category: ['Bachelors'],
  },
  {
    title: 'EC102 Economics B',
    competency: 70,
    category: ['Bachelors'],
  },
  {
    title: 'ST102 Elementary Statistical Theory',
    competency: 90,
    category: ['Bachelors'],
  },
  {
    title: 'Machine Learning',
    competency: 89.23,
    category: ['Masters'],
  },
  {
    title: 'Reinforcement Learning',
    competency: 73.42,
    category: ['Masters'],
  },
  {
    title: 'Symbolic Artificial Intelligence',
    competency: 81.59,
    category: ['Masters'],
  },
  {
    title: 'Computer Vision',
    competency: 75.4,
    category: ['Masters'],
  },
  {
    title: 'Deep Learning',
    competency: 74.56,
    category: ['Masters'],
  },
  {
    title: 'Natural Language Processing',
    competency: 70,
    category: ['Masters'],
  },
  {
    title: 'Robot Learning and Control',
    competency: 67.88,
    category: ['Masters'],
  },
  {
    title: 'Software Engineering Practice and Group Project',
    competency: 76.78,
    category: ['Masters'],
  },
  {
    title: 'Ethics, Privacy, AI in Society',
    competency: 81.81,
    category: ['Masters'],
  },
  {
    title: 'Python Programming',
    competency: 80.25,
    category: ['Masters'],
  },
  {
    title: 'Masters Dissertation',
    competency: 76.0,
    category: ['Masters'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#F88379',
  '#bf40bf',
  '#30D5C8',
  '#64cb7b',
  '#37b1f5',
  '#3896e2',
  '#515dd4',
  '#c3423f',
  '#d75858',
  '#e47272',
  '#40494e',
  '#6968b3',
  '#cc7b94',
  '#747fff',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
