# Variational Recurrent Neural Network

> Paper: A Recurrent Latent Variable Model for Sequential Data 
>
> Authors: Junyoung Chung, Kyle Kastner, Laurent Dinh, Kratarth Goel, Aaron Courville, Yoshua Bengio 

Prerequisites 

• Working understanding of RNNs and its variants (GRUs, LSTMs)

• Good understanding of VAEs

### tldr
Variational Recurrent Neural Networks (VRNN) combine both Variational Autoencoders (VAE) and Recurrent Neural Networks (RNN). They make use of the recurrent nature of RNNs to model for temporal dependencies between latent variables and make sure of VAEs to inject stochasticity into the latent variables.  VRNN methods outperform RNN methods in modelling for highly structured (high signal to noise ratio) and highly variable data.

### Motivation
A common approach is to use RNNs to model latent variables - this is also known as the state transition. Due to the recurrent nature, $h_{t}$ is a function of $h_{t-1}$, and this function is **deterministic**, as parameterised by the learnable parameters in an RNN. We then use a **stochastic** output probability/emission probability, where $x_t$ is a function of $h_{t-1}$. We can use a Gaussian distribution or Gaussian mixture model to inject this stochasticity. 

``Relate to literature on state space models, Kalman filters, HMM.

However, the authors argued that only having a stochastic emission probability is inadequate for representing highly variable and highly structured (high signal to noise ratio). `Check if following argument makes sense. `Since the only source of data variability comes from $x_t$, a good model must be able to map small variations in $x_t$ to large variations in the hidden states ht, such that this variability will in turn be reflected in $x_{t+1}$. In other words, we need to sufficiently encode variability in $x_t$. However, limiting the capacity of the network to prevent overfitting will prevent us from effectively doing so.

`How exactly can we understand stochasticity in the real world?`
1. Stochasticity due to unknown/unobserved latent variables 
	- E.g. when we drop an object to the ground, how it drops depends on the unknown weight of this object 

2. Video prediction has multiple modes inherently. 
	- When we have access to the first few context frames, the range of possibilities on what will happen in the next frames is large. 

`Are both understandings of stochasticity correct?`

### Variational Autoencoders(VAEs) 
To overcome these limitations, the authors turn to VAEs. First, let us examine standard (non-sequential VAEs. In VAEs, the latent variables z are stochastic. The joint distribution $p(x,z) = p(x \mid z)p(z)$ where the generative model $p(x \mid z)$ is deterministic but highly nonlinear (e.g. a neural network). 

Rather, the stochasticity comes from the random latent variables z, where the prior $p(z)$ is commonly a simple Gaussian. Since the problem of maximising the joint probability is intractable as we need to marginalise over all values of z, we maximise the ELBO instead. This requires us to compute the approximate posterior/inference model $q(z \mid x)$ which is stochastic. Specifically, we often use a conditional Gaussian whose mean and variance are non linear mappings of x. 

To compare this against the standard RNN, instead of using a stochastic output probability, we have a deterministic one instead (generative model $p(x \mid z)$). Rather, we inject stochasticity into the latent variables where they were previously deterministic. 

### VRNNs
To model for temporal dependencies in sequential data, we use an RNN for every time step.

##### (a) Prior
In the generative model, we are interested in the prior of z at every time step. It is no longer a standard Gaussian, but a Gaussian whose parameters are functions of $h_{t-1}$. In other words, latent variables are conditional on past sequences which is encoded in the hidden state $h_{t-1}$.

$z_t \sim N(\mu_{t}, \text{diag}(\sigma^2_{t}))$ 
where 
$[\mu_t, \sigma_t^{2}] = \phi_{\tau}^{\text{prior}} (h_{t-1})$

We will see later that this defines the probability $p(z_t \mid x_{<t}, z_{<t})$ because $h_{t-1}$ is conditioned on $z_{<t}$. 

This relationship can be clearly seen in Figure 1 below. 

![[Screenshot 2022-04-11 at 8.33.03 AM.png]]

##### (b) Generative model
Consequently, the generative model $x_t \mid z_t$ will not only be conditional on $x_t$, but also on $h_{t-1}$. 

$x_t \mid z_t \sim N(\mu_{x,t}, \text{diag}(\sigma^2_{x,t}))$ 
where 
$[\mu_{x,t}, \sigma_{x,t}^{2}] = \phi_{\tau}^{\text{decoder}} (\phi_{\tau}^{z}(z_t), h_{t-1})$

N.B. that $\phi_{\tau}^{z}$ and $\phi_{\tau}^{x}$ (seen below) are feature extractors to extract features from $z_t$ and $x_t$ respectively. These are found to be crucial and will also be used in the recurrence equation. 

Again, we will see later that this defines the probability $p(x_t \mid x_{<t}, z_{<t})$ because $h_{t-1}$ is also conditioned on $x_{<t}$. 

##### (c) Recurrence
We use an RNN approach for recurrence. This is classic and straightforward. At every time step, the inputs are some information on xt, some information on $z_{t}$, and the hidden state from the previous time step $h_{t-1}$. The output is $h_{t}$.  I use the phrase "some information" because we are running $z_t$ and $x_t$ through their respective feature extractors. 

$h_t = f_\theta(\phi_{\tau}^{z}(z) ,\phi_{\tau}^{x}(x), h_{t-1})$

where $f$ is the standard deterministic transition function we have in RNNs. 

##### (d) Inference 

This is very similar to what we hav seen before - the approximate posterior is not only a function of $x_t$ but also of $h_{t-1}$ (and therefore $z_{<t}, x_{<t}$).

$z_t \mid x_t \sim N(\mu_{z, t}, \sigma_{z, t}^2)$ 
where $[\mu_{z,t}, \sigma_{z,t}^{2}] = \phi_{\tau}^{\text{encoder}} (\phi_{\tau}^{x}(x_t), h_{t-1})$




 
