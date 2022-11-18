const classes = [
  {
    title: 'ST310 Machine Learning',
    competency: 90,
    category: ['Statistics', 'Data Science'],
    school: 'Undergraduate',
  },
  {
    title: 'ST308 Bayesian Inference',
    competency: 79,
    category: ['Statistics'],
    school: 'Undergraduate',
  },
  {
    title: 'MA231 Operations Research',
    competency: 93,
    category: ['Mathematics'],
    school: 'Undergraduate',
  },
  {
    title: 'EC331 Quantitative Thesis',
    competency: 76,
    category: ['Data Science', 'Economics', 'Econometrics'],
    school: 'Undergraduate',
  },
  {
    title: 'EC333 Problems of Applied Econometrics',
    competency: 66,
    category: ['Economics', 'Econometrics'],
    school: 'Undergraduate',
  },
  {
    title: 'EC221 Principles of Econometrics',
    competency: 80,
    category: ['Economics', 'Econometrics'],
    school: 'Undergraduate',
  },
  {
    title: 'EC201 Microeconomics',
    competency: 76,
    category: ['Economics'],
    school: 'Undergraduate',
  },
  {
    title: 'EC210 Macroeconomics',
    competency: 77,
    category: ['Economics'],
    school: 'Undergraduate',
  },
  {
    title: 'ST202 Probability, Distribution Theory and Inference',
    competency: 79,
    category: ['Statistics'],
    school: 'Undergraduate',
  },
  {
    title: 'MA100 Mathematical Methods',
    competency: 75,
    category: ['Mathematics'],
    school: 'Undergraduate',
  },
  {
    title: 'EC102 Economics B',
    competency: 70,
    category: ['Economics'],
    school: 'Undergraduate',
  },
  {
    title: 'ST102 Elementary Statistical Theory',
    competency: 90,
    category: ['Statistics'],
    school: 'Undergraduate',
  },
].map((class) => ({ ...class, school: class.school.sort(), category: class.category.sort() }));

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
  ...new Set(classes.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

// Do not need colour mapping for school - Review! 
const schools = [
  ...new Set(classes.reduce((acc, { school }) => acc.concat(school), [])),
]
  .sort()
  ;

export { categories, schools, classes};
