import React from 'react';

const ImperialGroup = () => {
  return (
    <div>
      <h4>Publication</h4>
      <p>Anton, J.; Castelli, L.; <strong>Chan, M.F</strong>.; Outters, M.; Tang, W.H.; Cheung, V.; Shukla, P.; Walambe, R.; Kotecha, K. How Well Do Self-Supervised Models Transfer to Medical Imaging? J. Imaging 2022, 8, 320. https://doi.org/10.3390/jimaging8120320</p>
      <h4>Links</h4>
      <ul> 
        <li><a href="https://www.mdpi.com/2313-433X/8/12/320">Paper</a> </li>
        <li><a href="https://github.com/jonahanton/SSL_medicalimaging">Repo</a> </li>
      </ul>
      <div> 
        <h2>Summary</h2>
        <ul>
          <li> Published paper in MDPI Journal of Imaging as part of Masters group project</li>
          <li> Won best poster award (500 pounds) out of 40 PHD teams in Imperial College London research showcase</li>
        </ul>
      </div>
      <div>
        <h2>Abstract</h2>
        <p>
        Self-supervised learning approaches have seen success transferring 
        between similar medical imaging datasets, however there has been no 
        large scale attempt to compare the transferability of self-supervised 
        models against each other on medical images. In this study, we compare
         the generalisability of seven self-supervised models, two of which were 
         trained in-domain, against supervised baselines across eight different 
         medical datasets. We find that ImageNet pretrained self-supervised models 
         are more generalisable than their supervised counterparts, scoring up to 
         10% better on medical classification tasks. The two in-domain pretrained 
         models outperformed other models by over 20% on in-domain tasks, however 
         they suffered significant loss of accuracy on all other tasks. Our 
         investigation of the feature representations suggests that this trend 
         may be due to the models learning to focus too heavily on specific areas.
        </p>
      </div>
      <div>
        <h2>Please explain to me what all of this means!</h2>
        <p>
          Most advances in Machine Learning has been in the field of supervised 
          learning, where data points come with their corresponding labels which the 
          model can use to evaluate its own performance. E.g. a chest X-ray dataset
          will contain not only images, but labels indicating the types of diseases depicted.
        </p>
        <p>
          However, the cost of annotating labels is expensive, especially in certain
          niche contexts like medical imaging. On the other hand, there is an abundance
          of unlabelled data which we should leverage on. One such solution is self-supervised
          learning (SSL). Typically, this involves 2 stages. 
        </p>
        <ol>
          <li>
            <strong>Pretraining: </strong> 
            &nbsp; Here, the model can only access unlabelled data. It learns structural patterns
            within the dataset. 
            <ul>
              <li>
                E.g. one popular SSL technique is to give a model an image and an augmented
                version of the first original image. It is also fed other images, with the goal of 
                learning that the original and augmented image are the same, and different from the
                other images. 
              </li>  
            </ul> 
          </li>
          <li>
            <strong>Finetuning: </strong> 
            &nbsp; The model is then finetuned on the specific domain we are interested in (and
            that does not have to be in exactly the same domain as the pretraining phase). If this is
            a supervised learning problem, our finetuning stage needs to be supervised as well. 
          </li>
        </ol>
        <p>
          In practice, it is too expensive (as it takes weeks) to pretrain 
          one own SSL model from scratch. Very often, one finds a readily available
          pretrained model and then finetunes it on his/her own purposes, even when 
          the pretraining and finetuning domain may not be exactly the same.
          In light of this, this paper investigates how well pretrained SSL methods can 
          be used in medical imaging. 
        </p>
      </div>
    </div>
  );
};

export default ImperialGroup;