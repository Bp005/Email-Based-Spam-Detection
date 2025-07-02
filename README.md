This is made in requirement for my minor project .
TABLE OF CONTENTS

Acknowledgment i
List Of Figures iii
Abbreviations iv
1 Introduction 1
1.1 Background . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1
1.2 Problem Statement . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
1.3 Objectives . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
1.4 Applications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
1.5 Features . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
1.6 System Requirements : . . . . . . . . . . . . . . . . . . . . . . . . . . 3
1.7 Feasibility Study . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
1.7.1 Economic Feasibility . . . . . . . . . . . . . . . . . . . . . . . 4
1.7.2 Technical Feasibility . . . . . . . . . . . . . . . . . . . . . . . 4
1.7.3 Operational Feasibility . . . . . . . . . . . . . . . . . . . . . . 4
1.7.4 Schedule Feasibility . . . . . . . . . . . . . . . . . . . . . . . 4
2 Literature Review 6
2.1 Related Research . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
2.2 Proposed System . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
2.2.1 Block Diagram of the Proposed System . . . . . . . . . . . . . 7
3 Methodology 8
3.1 Working Mechanism . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
3.1.1 Data Pre-Processing . . . . . . . . . . . . . . . . . . . . . . . 9
3.1.2 Segementation . . . . . . . . . . . . . . . . . . . . . . . . . . 9
3.1.3 Features Extraction . . . . . . . . . . . . . . . . . . . . . . . . 11
3.1.4 Training of VTON Diffusion Model . . . . . . . . . . . . . . . 12
3.2 Software Development Model . . . . . . . . . . . . . . . . . . . . . . 14
REFERENCES 14

ii

LIST OF FIGURES

1.1 Gantt Chart . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5
2.1 Block Diagram of the Proposed System . . . . . . . . . . . . . . . . . 7
3.1 Block Diagram of the Working Mechanism . . . . . . . . . . . . . . . 8
3.2 Incremental Model . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14

iii

ABBREVIATIONS

BSD Berkeley Software Distribution
CEW Closed Eye Wild
CNN Convolutional Neural Network
EAR Eye Aspect Ratio
FOM Frequency of Mouth
HMM Hidden Markov Model
MAR Mouth Aspect Ratio
OpenCV Open-Source Computer Vision
PCA Principal Component Analysis
PERCLOS Percentage of Eye Closure Over Time
ReLU Rectified Linear Unit
SGD Stochastic Gradient Descent
SVM Support Vector Machine
YawDD Yawning Detection Dataset
ZJU Zhejiang University

iv

CHAPTER 1
INTRODUCTION

1.1 Background

Learning the English language as well as facing exams are substantial topics due to the

essentiality and the demand. In such a situation, IELTS exams have high demand cur-
rently as a result of the benefits it provides. The IELTS, is a worldwide state- sanctioned

English language capability for non-native English language speakers. It is altogether
overseen by the British Council, IELTS Australia and Cambridge Assessment English,
and was established in 1989. IELTS has the importance for migration as well as it is a
qualification for university entrance abroad as the institutions need to be certain that the
candidates can cope up with the academic studies using the language skills of English
Language. As well as the demand and the benefits it provides, achieving the relevant
band scores is an overwhelming task for exam candidates. Fulfilling the requir- ements
and achieving the specific skills need considerable practice and guidance[1]. IELTS
preparation has become one of the most trusted forms of English-language assessment
and is accepted by over 8,000 universities, employers and immigration organizations
worldwide. IELTS testing methods focus on the candidate’s practical ability to use
English in real-life situations[2].

The IELTS exam, a critical test of English language proficiency for non-native speakers

required for university admissions, work visas, and immigration processes in English-
speaking countries. The webpage typically starts with an overview of the exam, ex-
plaining its structure, which includes Listening, Reading, Writing, and Speaking sec-
tions.Despite the fact that numerous guides available for the examination, smart and

handy system is not available so far to assist candidates personally to manage the crisis
situations according to their ability levels and guide them to improve their band score.

1

1.2 Problem Statement

The International English Language Testing System (IELTS) exam is a crucial prereq-
uisite for postsecondary education, employment, and immigration in English -speaking

nations, and it presents considerable obstacles to many non-native English speakers.
Their academic and professional goals may be harmed by their inability to obtain the
required band scores due to a lack of easily accessible, thorough, and well -organized
study materials.

The fact that current resources are frequently dispersed, of varying quality, or exces-
sively costly makes it challenging for test-takers to get trustworthy advice. In order

to overcome their unique shortcomings in the Speaking, Reading, Writing, and Listen-
ing portions, users also require interactive and individualized help. We must develop

an IELTS prepa- ration website that provides a consolidated, excellent, and reasonably
priced service in order to address these issues. Comprehensive study materials, practice

exams, skill- building activities, tactical guidance, interactive features, and extra sup-
port services ought to be available on this page. Test-takers can improve their English

language skills, get ready for the IELTS exam, and accomplish their goals by using
these tools.

1.3 Objectives

The primary objective of the IELTS preparation webpage is to provide a comprehensive,
accessible, and affordable online platform that supports non-native English speakers in
effectively preparing for the IELTS exam.The specific objective are:

• To provide high-quality practice tests, sample questions, and detailed study guides
for each section of the IELTS exam.

• To deliver targeted exercises, tips, and strategies to improve listening comprehen-
sion, reading efficiently, writing proficiency, and speaking fluency.

• To Equip users with effective time management techniques, problem-solving strate-
gies, and methods to handle challenging questions.

2

1.4 Applications and Scope

The IELTS preparation webpage is a multifaceted platform designed to support non-
native English speakers as they prepare for the IELTS exam, catering to a diverse range

of users including students, professionals, immigrants, and language institutes. By of-
fering comprehensive study materials such as practice tests, sample questions, and de-
tailed study guides for each exam section, the webpage aims to equip users with the

necessary skills and knowledge required to succeed. Interactive learning tools such as

online courses, webinars, and community forums provide opportunities for collabora-
tive learning and engagement, while personalized support services including tutoring,

feedback, and custom study plans cater to individual learning needs and timelines. Ad-
ditionally, the webpage guides users through the test registration process and provides

motivational content such as success stories and user reviews, fostering a supportive
and encouraging environment. With its wide scope and diverse range of features, the
IELTS preparation webpage serves as an indispensable resource for anyone striving to
achieve their desired IELTS band scores and pursue their academic, professional, and
immigration aspirations.

1.5 Features

• Virtual Trial: The platform creates immersive experience for users, allowing them
to virtually try on a wide range of clothing styles from the comfort of their own
homes.
• High-Quality Garment Rendering:This system uses a combination of high-level
semantics and low-level features to preserve intricate details of garments such as
patterns, textures, shapes, and colors.
• Advanced Generative Models:The method enhances traditional diffusion models
by integrating attention mechanisms and advanced encoding techniques to better
preserve garment identity and generate more realistic images.

3

Software Requirements Hardware Requirements
Programming Language: Python,Javascipt Camera: ≥ 2 MP
Libraries: OpenCV, Pandas RAM: ≥ 8 GB
Frameworks: Tensorflow ,React CPU: i7 ≥ 10th Generation (recommended)

1.6 System Requirements :

1.7 Feasibility Study

Before moving forward to implementation of project, we must conduct a feasibility
analysis to determine the project’s potential performance. This is a crucial step that
guides decision making throughout the project lifecycle.

1.7.1 Economic Feasibility

The economic feasibility of our system can be attributed to the development of numer-
ous tools, libraries and frameworks. As all the necessary software for construction of

our project is freely accessible online, the project is highly cost effective. All this project
demands is time and effort with no significant expenses.From an economic viewpoint
the project seems to be attainable with the costs being notably low.

1.7.2 Technical Feasibility

Technical Feasibillity The required software components for the project are readily
available from numerous online sources. Through comprehensive online resources and
educational materials, the necessary knowledge and skills can be acquired to undertake
the project successfully. All essential libraries and datasets crucial for the development
of such a system are accessible online without incurring any licensing expenses. Thus,
from a technical perspective, the project is feasible given the availability of required
information and resources.

4

1.7.3 Operational Feasibility

Operational Feasibility Our project will let people try on clothes virtually before they
buy them online. It is suitable for those who shop online but miss being able to try
things on. This project a fun and easy way to see how clothes look on them before
buying. So, operationally, our project is feasible because it meets the needs of a lot of
online shoppers.

1.7.4 Schedule Feasibility

The project workload is divided among the team members. The project scheduling is
done according to Incremental model where different tasks will be assigned to team
members. So our project fulfills the scheduling requirements :

Figure 1.1: Gantt Chart

5

CHAPTER 2
LITERATURE REVIEW

2.1 Related Research

The paper ”Virtual Try-On Methods: A Comprehensive Research and Analysis” by
Haoxuan Sun explores the development trends and advanced algorithms in virtual try-on
technology, focusing on both 3D and 2D approaches. The 3D methods involve detailed

human body reconstruction and garment modeling, though they face challenges in accu-
racy, computational demand, and real-time performance. The 2D methods, more prac-
tical for assessing garment fit, have evolved from the VITON framework to advanced

models like CP-VTON, C-VTON, GP-VTON,etc. These models address issues such as

garment-body alignment and realistic rendering, employing techniques like deep learn-
ing, GANs, and diffusion models performs well to improve results.[1]

The ”TryOnDiffusion” framework, presented by Luyang Zhu at CVPR 2023, introduces
a novel approach to virtual apparel try-on systems by integrating garment warping and

blending in a single network pass using a Parallel-UNet architecture and a cascaded dif-
fusion model. This method overcomes limitations of previous techniques by employ-
ing implicit garment warping via cross-attention, enabling effective handling of diverse

poses and occlusions while preserving garment details. Evaluated on a dataset of 4

million image pairs, TryOnDiffusion demonstrated superior performance in maintain-
ing garment fidelity and handling complex body shapes, achieving high-quality results

at 1024 × 1024 resolution. It significantly outperformed existing methods, with a user
study indicating a 92.72% preference for its results over state-of-the-art alternatives. As
diffusion models have shown great success,Those methods still suffer from preserving
meticulous details of garments, dampening their applications to real-world scenarios.[2]

In this paper, they present IDM–VTON, a novel design of diffusion models for au-
thentic virtual try-on, particularly in the wild scenario. They incorporate two separate

modules to encode the garment image, i.e., visual encoder and parallel UNet, which

effectively encode high-level semantics and low-level features to the base UNet, re-
6

spectively. In order to improve the virtual try-on on real world scenario, They propose
to customize their model by fine-tuning the decoder layers of UNet given a pair of
garment-person images.They also leverage detailed natural language descriptions for

garments, which help generating authentic virtual try-on images. Extensive experi-
ments on various datasets show the superiority of their method over prior works in both

preserving details of garment, and generating high fidelity images. In particular, they

demonstrate the potential method in virtual try-on in the wild.Similar to other inpaint-
ing works, IDM–VTON struggles to preserve human attributes on masked regions such

as tattoos or skin moles.[3]

2.2 Proposed System

Our proposed system generate an image that visualizes a person wearing a garment. The
input images are a person and a garment. The output image is the person wearing the
garment. The dataset used for training the IDM-VTON Model is VITON-HD which
is freely available and pre-processed. IDM-VTON composed of three components(
TryonNet, IP-Adapter, GarmentNet ) to extract the relevant features of garments and
try on it.

2.2.1 Block Diagram of the Proposed System

Figure 2.1: Block Diagram of the Proposed System

7

CHAPTER 3
METHODOLOGY

Figure 3.1: Block Diagram of the Working Mechanism

The methodology diagram is shown above Figure 3.1 which consists of several stages

such as pre-processing( Resizing, Normalization),Segmentation ( Person Image Seg-
mentation, Garment Image Segmentation,Person Pose Segmnetation ), Feature Extrac-
tion and generation of Image wearing the garment cloth using the IDM-VITON.The

8

input images are a person and a garment.The output image is the person wearing the
garment.

3.1 Working Mechanism

3.1.1 Data Pre-Processing

To prepare the input images for the model, a series of preprocessing steps are performed
to ensure that the data is clean and structured appropriately. Initially, two images are
required: one of the target person and one of the garment.The noised image os the
person is concatenated with the agnostic RGB image and Denspose.

For the person image, we create a clothing-agnostic RGB image, which removes the
original clothing but retains the identity of the person. This step ensures the network
can accurately blend the new garment onto the target person.

Additionally, We provide a detailed caption to the garment (eg.[V] “short sleeve round
neck t-shirts”).Then it is used for input prompt of GarmentNet (e.g. “A photo of [V]”)

and TryonNet (e.g. “Model is wearing [V]”). This comprehensive preprocessing en-
sures that the model receives well-prepared inputs, facilitating the generation of high-
quality, photorealistic virtual try-on results.

3.1.2 Segementation

Segmentation is a crucial step in the IDM-VTON ( Improving Diffusion Models for Vir-
tual Try-On Network ) process, aimed at accurately partitioning images into meaningful

regions to facilitate the virtual try-on experience. IDM-VTON relies on three types of

segmentation: person segmentation and garment segmentation and Person Pose Seg-
mentation( DensePose ). Each type serves a specific purpose in ensuring that the virtual

try-on system can seamlessly integrate garments onto the user’s image, leading to real-
istic and high-quality results.

9

3.1.2.1 Person Segmentation

Person Segmentation involves segmenting the person image into different parts such as
the head,arms, and legs. This helps the model understand the structure and different

regions of the human body, which is crucial for accurately overlaying the clothing. Hu-
man parsing typically generates a segmentation map that delineates these regions. Deep

learning models such as Mask R-CNN are typically employed for person segmentation.

These models are trained on a comprehensive dataset of labeled images, where the per-
son and the background are distinctly annotated.

3.1.2.2 Garment Segmentation

Garment segmentation is focused on isolating the garment from its background, ensur-
ing that all intricate details are preserved. The trained model is then applied to segment

the garment in the input images. The model creates a mask that captures the precise
shape and details of the garment. Using the generated mask, the garment is extracted

from its background. This step ensures that all intricate parts of the garment are pre-
served, allowing for accurate representation when the garment is overlaid onto the per-
son’s image.

3.1.2.3 Pose Estimation with DensePose

DensePose, developed by Facebook AI Research (FAIR), represents a significant ad-
vancement in pose estimation technology by offering detailed, dense mapping of hu-
man body parts in 3D from RGB images. Unlike traditional methods that focus on key

points, DensePose provides precise coordinates for each pixel, enabling applications
such as virtual try-on systems and human-computer interaction to simulate realistic
garment fittings and body interactions. This is achieved through convolutional neural
networks (CNNs) trained on extensive datasets, which predict dense correspondences
between the 2D image and a 3D body model, ensuring accurate placement of clothing
items and realistic rendering of body contours and postures.

10

In practical terms, DensePose enhances user experiences by allowing virtual try-on
systems like IDM-VITON to create detailed 3D body models from single 2D images.
By understanding body shape, posture, and surface details, DensePose enables realistic
clothing simulations that account for variations in poses, body shapes, and occlusions.
This capability ensures that the virtual try-on experience is not only visually appealing
but also accurately reflects how clothing drapes and fits on different body types and
poses. Thus, DensePose serves as a crucial technology in applications where precise
body mapping and realistic garment visualization are essential.

segmentation is a foundational step in IDM-VTON, enabling the system to produce

high-quality, realistic virtual try-on results. By precisely isolating the person and gar-
ment regions, the IDM-VTON system can accurately align and integrate virtual gar-
ments onto the user’s image, enhancing the overall user experience and satisfaction.

3.1.3 Features Extraction

Feature extraction involves identifying important image features and saving them for
further processing.Let us denote xp be the image of a person, and xg be the image of
a garment. Our primary goal is to generate an image xtr that visualizes a person from

xp wearing a garment in image xg.it is important to extract relevant information of gar-
ment, and add conditional control to the diffusion model. To this end, our model is

composed of three components; the base UNet (TryonNet) that processes the masked
person image with its pose information, the image prompt adapter (IP-Adapter) that
extracts the high-level semantics of the garment, and the garment UNet feature encoder
(GarmentNet) that extracts the low-level features of the garment. The features from
GarmentNet are fused within self-attention layer of TryonNet, and then it is processed

with the features of IP-Adapter through cross-attention layer. Cross-Attention Mecha-
nisms Extract features from both the person and garment images.Cross-attention layers

facilitate the interaction between these features, allowing the network to learn the nec-
essary transformations to fit the garment onto the person.

11

3.1.4 Training of VTON Diffusion Model

To Train the IDM-VITON, The dataset is divided into two sets: the training data and
the testing data.The dataset contains 11,647 person-garment image pairs at 1024 × 768
resolution. The dataset is already preprocessed and segmented respective to the person
and garment.

3.1.4.1 Image Prompt Adapter (IP-Adapter)

The Image Prompt Adapter ( IP-Adapter ) augments the Text-to-Image (T2I) diffusion
model by leveraging features from an image encoder, such as CLIP, to enhance the
quality of generated images based on textual descriptions. IP-Adapter introduces a
cross-attention mechanism that integrates information from both text embeddings and
image embeddings. Specifically, it computes query matrices (Q) from the intermediate
representation of UNet, and key (Kc) and value (Vc) matrices from the text embeddings.
The cross-attention mechanism is defined as:

Attention(Q, Kc, Vc) = softmax(QKT
c
) · Vc,

where softmax computes weights based on the similarity between Q and Kc, and these
weights are used to combine the corresponding values Vc.

To incorporate image information, IP-Adapter computes key (Ki) and value (Vi) matri-
ces from the image embeddings derived from CLIP. It then extends the cross-attention

mechanism to integrate these image embeddings:
Attention(Q, Kc, Vc) = softmax(QKT
c
) · Vc + Attention(Q, Ki
, Vi).

This modification allows the T2I model to selectively attend to different parts of the
textual description and image features, improving the coherence and relevance of the
generated images. During training, IP-Adapter freezes the original UNet and fine-tunes
only the linear projection layers of the image embeddings’ key and value matrices,
as well as the projection layer mapping the CLIP image embeddings. This approach

12

preserves the UNet’s feature extraction capabilities while optimizing the integration of
cross-modal information, resulting in more accurate and contextually relevant image
generation.IP-Adapter conditions the high-level semantics of garment images using a
CLIP image encoder and textual prompts.

3.1.4.2 TryonNet

TryonNet is the core component responsible for virtual try-on. It incorporates a base
UNet model with a latent diffusion model and SDXL for inpainting.

• Base UNet with Latent Diffusion Model:
– Input Components:
1. Latent of Person Image E(px)
2. Resized Mask m
3. Latent of Masked-out Person Image E(xm)
4. Latent of Densepose E(xpose)
– Concatenate and align these components within the channel axis.
– Expand UNet’s convolutional layer to 13 channels initialized with zero weights.
• Stable Diffusion XL (SDXL):
– Used for inpainting.
– A variant of the diffusion model specialized in inpainting tasks.

3.1.4.3 GarmentNet

GarmentNet is an enhancement to the IP-Adapter that focuses on preserving fine-grained
details of garments, especially those with complex patterns or graphics. GarmentNet
enhances the IP-Adapter by employing specialized techniques such as an additional
garment UNet encoder, self-attention mechanisms, and leveraging pretrained models
for generating detailed garment images, ensuring that intricate patterns and graphics
are faithfully preserved and represented.

13

3.2 Software Development Model

Incremental model will be used to develop this project since it provides a working
prototype at an early stage of development. This approach allows early feedback and

necessary adjustments can be made to the project’s requirements and scope. Each itera-
tion refines the system incrementally until the final version is ready. This methodology

is preferred for its flexibility and its ability to incorporate changes based on continuous
feedback.

Figure 3.2: Incremental Model

14

REFERENCES

[1] H. Sun, “Virtual try-on methods: A comprehensive research and analysis,” pp. 339–
346, 2023. [Online]. Available: https://doi.org/10.2991/978-94-6463-300-9 35
[2] L. Zhu, D. Yang, T. Zhu, F. Reda, W. Chan, C. Saharia, M. Norouzi, and
I. Kemelmacher-Shlizerman, “Tryondiffusion: A tale of two unets,” 2023.
[3] Y. Choi, S. Kwak, K. Lee, H. Choi, and J. Shin, “Improving diffusion models for
virtual try-on,” 2024.
