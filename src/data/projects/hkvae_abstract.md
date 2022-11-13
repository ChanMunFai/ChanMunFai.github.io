 <ul>
    <li>Developed novel and efficient algorithm for video prediction.</li>
</ul>

#### Abstract

> Long-term video prediction remains a highly challenging problem. The high dimensionality of pixels often warrants for highly complex models that are difficult and expensive to train. I build upon the work of the Kalman Variatonal Autoencoder [1] (KVAE), a highly efficient model that combines variational autoencoders (VAEs) with the Linear Gaussian State Space Model. In doing so, it is able to effectively disentangle an object’s representation from its dynamics. In this paper, I reformulate the Evidence Lower Bound of the KVAE to develop a hierarchy of latent variables for the KVAE. The hierarchical KVAE can outperform the KVAE on certain datasets and decompose latent dynamics according to its levels, enabling greater interpretability.