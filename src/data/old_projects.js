// TODO Add a couple lines about each project
const data = [
  {
    title: 'PUBG Finish Placement Prediction',
    link: 'https://github.com/ChanMunFai/PUBG-Finish-Placement-Prediction',
    subtitle: 'PUBG Prediction',
    image: '/images/projects/pubg.jpg',
    date: '2020-07-01',
    desc:
      'Predict a player finishing placement in the mobile game PUBG. '
      + 'Performed removal of outliers (e.g. hackers) using EDA, feature engineering, plotting of feature importance plots, removal of redundant plots, and partial dependence plots. '
      + 'Hyperparameter tuning on random forests to attain a high 92.5 R^2 on validation set.',
  },

  {
    title: 'Aquarium Animal Detector',
    link: 'https://colab.research.google.com/drive/1esYKGWtXIYv30ckQFtmFCsUrbUgG3BXf?usp=sharing',
    subtitle: 'A convolutional neural network to classify images in  Aquarium',
    image: '/images/projects/sea_aquarium2.jpg',
    date: '2020-06-01',
    desc:
      'Trained a convolutional neural network (ResNet-34) to classify animals in SEA. '
      + 'Attained SOTA level of accuracy(93%) using techniques like image augmentation and cyclic learning rates.',
  },

  {
    title: '10 mins guide to Neural Style Transfer',
    link: 'https://colab.research.google.com/drive/1ppPvlilaEFMLErMayLqHjXALP4CTAoEp?usp=sharing#scrollTo=tH6F8VUn8iho',
    subtitle: 'Neural Style Transfer',
    image: 'https://github.com/csaybar/DLcoursera/blob/master/Convolutional%20Neural%20Networks/week04/Neural%20Style%20Transfer/images/louvre_generated.png?raw=1',
    date: '2019-09-01',
    desc:
      'Created a 10 mins beginner guide to neural style transfer based on DL assignment by Andrew Ng.'
      + 'Goal is to allow hands-on exploration with DL for complete beginners (with 0 programming expeerience) to demonstrate power of DL and to encourage further learning into the field.',
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
