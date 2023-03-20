// TODO Add a couple lines about each project
const data = [
  {
    id: '1',
    title: 'Hierarchical Kalman Variational AutoEncoder for Video Prediction',
    subtitle: 'Masters Dissertation',
    image: '/images/projects/autonomous_vehicle.jpg',
    date: '2022-09-01',
    content: 
      'Developed efficient method for video prediction for Masters Dissertation. Combined Variational AutoEncoders with Kalman Filters.',
  },
  {
    id: '2',
    title: 'How Well Do Self-Supervised Models Transfer to Medical Imaging?',
    subtitle: 'Masters Group Project', 
    image: '/images/projects/chest-xray.jpg',
    date: '2022-05-01',
    content: 'Published paper as part of Masters group project. Investigated the performance of pretrained SSL models in medical imaging.',
  },
  {
    id: '3',
    title: 'Causal ML to infer heterogeneity in experiments',
    subtitle: 'Undergraduate Dissertation', 
    image: '/images/projects/village_sch.jpg',
    date: '2022-05-01',
    content: 'Best Undergraduate Dissertation. Employed causal ML to identify new heterogeneous effects for experiments previously analysed by OLS.',
  },
  {
    id: '4', 
    title: 'R package to compare between synthetic datasets',
    subtitle: '', 
    image: 'images/projects/synthetic_data.jpg',
    date: '2021-05-01',
    content:
      'Contributions as part of Singapore Department of Statistics internship: First open-source package to systematically evaluate synthetic data based on differential privacy and accuracy of data.',
    link: 'https://github.com/ChanMunFai/cmf', 
  },

  {
    id: '5', 
    title: 'Tabular Reinforcement Learning from Scratch',
    subtitle: '', 
    image: '/images/projects/rl1.png',
    date: '2021-10-01',
    content:
      'Implement and train RL algorithms (e.g. value iteration, dynamic programming, Monte Carlo & SARSA) from scratch.',
    link: 'https://colab.research.google.com/drive/1s2aqxK7aQAswtgkie_cWhED7Ll7JweXu?usp=sharing#scrollTo=bKEz3d9NUbdO',
  },
  {
    id: '6', 
    title: 'Deep Reinforcement Learning from Scratch',
    subtitle: '', 
    image: '/images/projects/cartpole.png',
    date: '2021-11-29',
    content:
      'Implement and train deep RL (DQN,DDQN) from scratch, including features like replay buffer, target network, and frame-skipping.',
    link: 'https://colab.research.google.com/drive/18_EQ0J3JYlnDhDT6ULHg8wu43jMLLjBs?usp=sharing',
  },
  {
    id: '7', 
    title: 'AI agent for Battleship',
    subtitle: '', 
    image: '/images/projects/battleship.jpg',
    date: '2021-11-01',
    content:
      'Wrote Battleship in Python. Programmed player to always win based on probabilities.',
    link: null, 
  },
  {
    id: '8', 
    title: 'AI agent for Connect 4',
    subtitle: '', 
    image: '/images/projects/connect4.png',
    date: '2021-11-01',
    content:
      'Wrote Connect 4 in Python, and implemented alpha-beta pruning to search for optimal solution.',
    link: null, 
  },
];

export default data;
