// TODO Add a couple lines about each project
const data = [
  {
    title: 'Aquarium Animal Detector',
    link: 'https://colab.research.google.com/drive/1esYKGWtXIYv30ckQFtmFCsUrbUgG3BXf?usp=sharing',
    subtitle: 'A convolutional neural network to classify images in  Aquarium',
    image: '/images/projects/sea-aquarium.jpg',
    date: '2020-06-01',
    desc:
      'Trained a convolutional neural network (ResNet-34) to classify animals in SEA. '
      + 'Attained SOTA level of accuracy(93%) using techniques like image augmentation and cyclic learning rates.',
  },

  {
    title: 'Harambee Youth Unemployment Project',
    link: 'https://github.com/MUNFAI15/Harambe_Project',
    subtitle: 'Predicting for youth unemployment',
    image: '/images/projects/harambee.png',
    date: '2019-07-01',
    desc:
      'Predict for youths most at risk of unemployment in South Africa. '
      + 'Presented results to unemployment accelerator who take our recommendations to allocate resources.'
      + 'Performed data cleaning + exploratory data analysis + prediction. Used models like Naiive Bayes, kNN clustering, XGBoost.',
  },
];

export default data;
