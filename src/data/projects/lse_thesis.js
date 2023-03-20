import React from 'react';

const LseThesis = () => {
  return (
    <div>
      <h4>Links</h4>
      <ul> 
        <li><a href="https://drive.google.com/drive/folders/17xfvU9fRo_eDXHVSFtE_s6bcrXoKf2Iw">Paper</a> </li>
      </ul>
      <div> 
        <h2>Summary</h2>
        <ul>
          <li>Best dissertation in cohort</li>
          <li>Selected to present at LSE Interdisciplinary Conference</li>
          <li>
            Employed novel causal ML technique <strong> (Generic ML) </strong>to estimate hetergeneous treatment effects in Randomised Controlled Trials(RCTs). 
            This enabled me to identify flaws in past RCTs analysed using traditional linear regressions. 
          </li>
          <li>
            Wrote code for algorithm from scratch in Python. Over 1000% speed boost as compared to original R code.
            Faster code enabled for Monte Carlo simulations performed on High Performance Computing cluster.
          </li>
        </ul>
      </div>
      <div>
        <h2>Abstract</h2>
        <p>
        I build on the work of Generic Machine Learning Inference, a Machine
        Learning(ML) approach to estimate heterogeneous treatment effects in RCTs. Through
        Monte Carlo simulation, I investigate the performance of the estimator under different
        data generating processes (DGPs) and demonstrate its ability to make valid inference
        under different settings. Specifically, I show that Generic ML - which requires no
        parametric assumption - is significantly more powerful than classic heterogeneity tests
        under functional form mis-specification, a plausible situation given that researchers do
        not generally have access to the true DGP. I also improve its implementation by re-
        proposing performance metrics that identify the best ML method. Applying Generic
        ML to an RCT of village-based schools in Afghanistan, I derive new insights and thus
        demonstrate the usefulness of this approach. Specifically, I find that treatment effects
        on school enrollment and test scores increase with age and distance to non village-
        based schools for girls. This proved particularly insightful as distance was raised as
        a potential explanation for heterogeneity but not formally analysed by the original
        researchers.
        </p>
      </div>
      <div>
        <h2>Please explain to me what all of this means!</h2>
        <p>
          Econometrics (analysis of data in economics) and Machine Learning (ML)
          tend to have slightly different goals; the former tends to be more concerned
          with causality whilst the latter is concerned with correlation. Additionally, 
          traditional econometrics often use more restrictive and less powerful models - e.g. 
          linear regression or also known as Ordinary Least Squares(OLS) - to better aid 
          interpretability.
        </p>
        <p>
          An example of a model that intersects between econometrics and ML is that of 
          Generic ML. For our purposes, we can just think of it as a fancy algorithm that uses ML
          but can still infer causality. Specifically, it is used to infer heterogeneous treatment 
          effects in RCTs (experiments), i.e. it can estimate how different subgroups are affected 
          differently by the same treatment. Generally, this is something that OLS struggles with, 
          because it tends to lose power (in a non-technical sense, the model is unable to identify
          differences in treatment effects when there are indeed such differences).
        </p>
        <p>
          When I was doing my dissertation, the field and this particular technique was very nascent, 
          with no other papers based on this technique. Hence, I had to first evaluate if this technique 
          is even suitable, and the conditions under which it will work well. I also had to rewrite the code
          in Python which is much faster than R. I generated fake data
          with pre-specified treatment effects and tested if the technique can identify these effects.
          Repeating this thousands of times is also known as Monte Carlo simulation. 
        </p>
        <p>
          The primary goal of this paper is to identify if our new technique (Generic ML) can do better
          than traditional OLS. I re-analysed an RCT study that investigated the effects of building a school 
          on school children in rural Afghanistan. The original authors found that older girls benefitted more
          from such a program. Their hypothesis is that as girls grow older, they will require a chaperone to accompany 
          them to school. Hence, in the absence of this program, older girls simply do not go to school. 
        </p>
        <p>
          Intuitively, for this hypothesis to work, we also expect  
          <em> older girls who live further away from the nearest 
            pre-teatment school to benefit disproportionately </em>
          as well since it is even harder for them to make the journey to school. 
          Puzzlingly, the researchers did not test if distance created 
          differing treatment effects. I extended their OLS study and found no significant results,
          which may imply a lack of power associated with OLS. Replicatiing the entire study
          using Generic ML then found evidence that older girls who live further away
          benefit more, thus lending greater support to the hypothesis that the 
          researchers initially laid out. 
        </p>
      </div>
    </div>
  );
};

export default LseThesis;