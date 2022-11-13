const skills = [
  {
    title: 'ST310 Machine Learning',
    competency: 90,
    category: ['Statistics', 'Data Science'],
  },
  {
    title: 'ST308 Bayesian Inference',
    competency: 79,
    category: ['Statistics'],
  },
  {
    title: 'MA231 Operations Research',
    competency: 93,
    category: ['Mathematics'],
  },
  {
    title: 'EC331 Quantitative Thesis',
    competency: 76,
    category: ['Data Science', 'Economics', 'Econometrics'],
  },
  {
    title: 'EC333 Problems of Applied Econometrics',
    competency: 66,
    category: ['Economics', 'Econometrics'],
  },
  {
    title: 'EC221 Principles of Econometrics',
    competency: 80,
    category: ['Economics', 'Econometrics'],
  },
  {
    title: 'EC201 Microeconomics',
    competency: 76,
    category: ['Economics'],
  },
  {
    title: 'EC210 Macroeconomics',
    competency: 77,
    category: ['Economics'],
  },
  {
    title: 'ST202 Probability, Distribution Theory and Inference',
    competency: 79,
    category: ['Statistics'],
  },
  {
    title: 'MA100 Mathematical Methods',
    competency: 75,
    category: ['Mathematics'],
  },
  {
    title: 'EC102 Economics B',
    competency: 70,
    category: ['Economics'],
  },
  {
    title: 'ST102 Elementary Statistical Theory',
    competency: 90,
    category: ['Statistics'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
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
