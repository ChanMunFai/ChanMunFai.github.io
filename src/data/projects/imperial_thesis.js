import React from 'react';

const ImperialThesis = () => {
  return (
    <div>
      <h4>Links</h4>
      <ul> 
        <li><a href="http://google.com">Paper</a> </li>
        <li><a href="https://github.com/ChanMunFai/Dissertation">Repo</a> </li>
      </ul>
      <div> 
        <h2>Summary</h2>
        <ul>
          <li> Attained Distinction of 76% for Masters Dissertation</li>
          <li> 
            Combined Deep Learning (Variational Auto-Encoders) with classical linear dynamical models (Kalman Filters), 
            allowing for more efficient model with improved performance and ability to separate dynamics from appearance 
            and disentangle different dimensions of dynamics 
            <ul> 
              <li>e.g. for a bouncing ball, model is able to process the ball's appearance and its movement separately.
                For its movement, model is able to separate its horizontal and vertical movement.
              </li>
              <li> 
                enables better generalisability and interpretability 
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <h2>Abstract</h2>
        <p>
          Long-term video prediction remains a highly challenging problem. 
          The high dimensionality of pixels often warrants for highly complex 
          models that are difficult and expensive to train. I build upon the 
          work of the Kalman Variatonal Autoencoder (KVAE), a highly efficient 
          model that combines variational autoencoders (VAEs) with the Linear 
          Gaussian State Space Model. In doing so, it is able to effectively 
          disentangle an object’s representation from its dynamics. In this 
          paper, I reformulate the Evidence Lower Bound of the KVAE to develop
          a hierarchy of latent variables for the KVAE. The hierarchical KVAE 
          can outperform the KVAE on certain datasets and decompose latent 
          dynamics according to its levels, enabling greater interpretability.
        </p>
      </div>
      <div>
        <h2>Please explain to me what all of this means!</h2>
        <p>
          My project deals with video prediction, which is the problem of 
          predicting the next few frames of a video given the first few frames.
          You can imagine this to be useful for autonomous driving and robotics that
          are controlled by AI. However, models in this field tend to be highly
          complex (with the consequence being that they are too large to run on computers and 
          expensive to train).
        </p>
        <p>
          I attempt to circumvent this problem by predicting a lower-dimensional variable 
          instead of pure pixels in a video frame, which makes this problem significantly simpler. 
          The difficulty then lies in finding this 'lower-dimensional variable', which should contain
          sufficient information so that prediction is still accurate, whilst not containing too much 
          information such that we require complex solutions again. 
          One such method is the Kalman Variational AutoEncoder(KVAE) model. 
          Without diving into technicalities, this model processes
          an object's appearance and movement separately. Hence, if the object
          looks largely the same throughout the video, being able to predict its
          movement is sufficient in predicting how it appears in future frames.
        </p>
        <p>
          I further improve this method by incorporating hierarchies in my model. 
          Intuitively, this allows us to then process movements operating at different speeds
          more efficiently because we can program these hierachies to operate at various
          time scales. 
          In terms of the process, this project required advanced mathematics and statistics, 
          as I spent most of my time with a pen and paper deriving the mathematical foundations
          behind my newly developed model. Please feel free to read my paper if you are interested
          in that! After implementing it on paper, the next challenge will be to program it in an efficient
          manner in Pytorch and be able to test and perform hyperparameter tuning.
        </p>
      </div>
    </div>
  );
};

export default ImperialThesis;