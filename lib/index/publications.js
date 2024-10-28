const publications = [
  /*
  {
    title: "",
    underReview: false,
    href:"",
    journal: "",
    refId:"",
    coPublisherAndUniversity: "",
  },
  */
  {
    title:
      ' Analysis of Energy Harvesting for Self-powered Iot Edge Node Devices Applied in a Biogas Generation Context',
    underReview: false,
    href: 'https://doi.org/10.1007/978-981-97-5810-4_14',
    journal:
      ' In: Choudrie, J., Tuba, E., Perumal, T., Joshi, A. (eds) ICT for Intelligent Systems. ICTIS 2024. Smart Innovation, Systems and Technologies, vol 404. Springer, Singapore.',
    coPublisherAndUniversity:
      ' With Mukasine A, Sibomana L, Nkurikiyeyezu K, Hitimana E.',
  },
  {
    title:
      ' Maximizing Biogas Yield Using an Optimized Stacking Ensemble Machine Learning Approach',
    underReview: false,
    href: ' https://doi.org/10.3390/en17020364',
    journal: ' Energies 2024',
    coPublisherAndUniversity:
      ' With Mukasine A, Sibomana L, Nkurikiyeyezu K, Hitimana E.',
  },
  {
    title:
      ' Leveraging Machine Learning and Raspberry Pi for Enhanced Wildlife Remote Monitoring and Localization.',
    underReview: false,
    href: ' https://doi.org/10.1007/978-3-031-53549-9_39',
    journal:
      ' In: Silhavy, R., Silhavy, P. (eds) Software Engineering Methods in Systems and Network Systems. CoMeSySo 2023. Lecture Notes in Networks and Systems, vol 909. Springer, Cham.',
    coPublisherAndUniversity:
      ' With Manzi, F., Tuyishime, E., Hitayezu, A., Muhawenayo, G., Nsengiyumva, P.',
  },
  {
    title:
      ' Correlation Analysis Model of Environment Parameters Using IoT Framework in a Biogas Energy Generation Context',
    underReview: false,
    href: 'https://www.mdpi.com/1999-5903/15/8/265',
    journal: 'Future Internet 2023',
    coPublisherAndUniversity:
      'With Angelique Mukasine, Louis Sibomana, Kizito Nkurikiyeyezu, Eric Hitimana',
  },
  {
    title:
      ' Enhancing Road Safety with Cloud-Integrated IoT Road Signal Detection System ',
    underReview: false,
    href: ' https://ieeexplore.ieee.org/document/10387913',
    journal:
      'International Symposium on Embedded Multicore/Many-core Systems-on-Chip (MCSoC), Singapore, 2023, pp. 117-122, doi: 10.1109/MCSoC60832.2023.00025',
    coPublisherAndUniversity:
      'With A. Hitayezu, R. M. Umutoni, E. Tuyishime, C. Kabiri',
  },
  {
    title: ' Performance Analysis of Vehicle to Infrastructure Network ',
    underReview: false,
    href: 'https://ieeexplore.ieee.org/document/10365288',
    journal:
      '2023 6th International Conference on Advanced Communication Technologies and Networking (CommNet), Rabat, Morocco, 2023, pp. 1-6, doi: 10.1109/CommNet60167.2023.10365288',
    coPublisherAndUniversity:
      'With O. N. Mbanzabugabo, C. Kabiri, K. Jayavel and L. Sibomana',
  },
  {
    title:
      ' An advanced diagnostic ColoRectalCADx utilises CNN and unsupervised visual explanations to discover malignancies ',
    underReview: false,
    href: 'https://doi.org/10.1007/s00521-023-08859-5',
    journal: 'Neural Computing and Applications, 20631–20662 (2023)',
    coPublisherAndUniversity:
      'With Akella S. Narasimha Raju, Thulasi Rajalakshmi',
  },
  {
    title:
      ' Regional feature learning using attribute structural analysis in bipartite attention framework for vehicle re-identification ',
    underReview: false,
    href: 'https://ijece.iaescore.com/index.php/IJECE/article/view/30559',
    journal:
      'International Journal of Electrical and Computer Engineering (IJECE) 2023 p-ISSN 2088-8708, e-ISSN 2722-2578',
    coPublisherAndUniversity: 'With Cynthia Sherin',
  },
  {
    title:
      'Histopathology exploratory evidence of discrepancy detection of carcinoma in the colorectal region using integrated CNN-GradCAM',
    underReview: false,
    href: 'https://doi.org/10.1063/5.0161070',
    journal: 'AIP Conference Proceedings (2023)',
    coPublisherAndUniversity:
      'With Akella S. Narasimha Raju, Thulasi Rajalakshmi',
  },
  {
    title:
      ' Containerized Architecture Performance Analysis For IoT Framework based On Enhanced Fire Prevention Case Study: Rwanda, 2022',
    underReview: false,
    href: 'https://www.mdpi.com/1424-8220/22/17/6462',
    journal: 'MDPI Sensors',
    coPublisherAndUniversity:
      'With Eric HITIMANA, Gaurav Bajpai, Richard Musabe, Louis Sibomana',
  },
  {
    title:
      ' Implementation of Blockchain in Automotive Industry to Secure Connected Vehicle Data: Study and Analysis',
    underReview: false,
    href: 'https://doi.org/10.1007/978-981-99-6690-5_33',
    journal:
      'In: Malhotra, R., Sumalatha, L., Yassin, S.M.W., Patgiri, R., Muppalaneni, (eds) High Performance Computing, Smart Devices and Networks. CHSN 2022. Lecture Notes in Electrical Engineering, vol 1087. Springer, Singapore ',
    coPublisherAndUniversity: 'With Viswanadham, Y.V.R.S',
  },
  {
    title:
      'Adaptive staff scheduling at Outpatient Department of Ntaja Health Center in Malawi - A queuing theory application, 2022',
    underReview: false,
    href: 'https://doi.org/10.4081/jphr.2021.2347',
    journal: 'J Public Health Res',
    coPublisherAndUniversity: 'With Mtonga K, Gatera A, Nyirenda M, Kumaran S',
  },
  {
    title:
      'Intelligent recognition of colorectal cancer combining application of computer-assisted diagnosis with deep learning approaches, 2022',
    underReview: false,
    href: 'https://doi.org/10.11591/ijece.v12i1.pp738-747',
    journal: 'International Journal of Electrical and Computer Engineering',
    coPublisherAndUniversity: 'With Narasimha Raju A.S and Rajalakshmi T',
  },
  {
    title:
      'Distributed Streaming Big Data Analytics for Internet of Things (IoT), 2022',
    underReview: false,
    journal:
      'Research Anthology on Big Data Analytics, Architectures, and Applications',
    coPublisherAndUniversity: 'With Sornalakshmi K',
  },
  {
    title: 'Operational Technology Driven Smart Navigator',
    underReview: false,
    href: 'https://doi.org/10.1109/ICCCI54379.2022.9740952',
    journal:
      'International Conference on Computer Communication and Informatics, ICCCI',
    coPublisherAndUniversity: 'With Gorav R, Murali A, Karthik S, Mtonga K',
  },
  {
    title:
      'Missing Data Estimation and Imputation Algorithm for Wireless Sensor Network Applications, 2022',
    underReview: false,
    href: 'https://doi.org/10.1109/ICCCI54379.2022.9740892',
    journal:
      'International Conference on Computer Communication and Informatics (ICCCI)',
    coPublisherAndUniversity: 'With L. N. B. Srinivas',
  },
  {
    title:
      'Hydropower Energy Generation Prediction Model: A Machine Learning Approch, 2022',
    underReview: false,
    href: 'https://doi.org/10.1109/ICCCI54379.2022.9740915',
    journal:
      'International Conference on Computer Communication and Informatics (ICCCI)',
    coPublisherAndUniversity: 'With S. A. Prakash, D. Shah and K. Mtonga',
  },
  {
    title:
      'Building a Recommendation System for Career Advice for Students from Professionals, 2022',
    underReview: false,
    href: 'https://ieeexplore.ieee.org/document/9740837',
    journal:
      'International Conference on Computer Communication and Informatics (ICCCI)',
    coPublisherAndUniversity: 'With I. Dutta, A. Shah, M. M. Safa',
  },
  {
    title: 'A Review on Real-Time Sign Language Recognition, 2022',
    underReview: false,
    href: 'https://ieeexplore.ieee.org/document/9740868',
    journal:
      'International Conference on Computer Communication and Informatics (ICCCI)',
    coPublisherAndUniversity: 'With D. Sau, S. Dhol, M. K ',
  },
  {
    title:
      'An IoT-Enabled Healthcare System: Auto-predictive Colorectal Cancer with Colonoscopy Images Combined with the Convolutional Neural Network, 2022',
    underReview: false,
    href: 'https://doi.org/10.1007/978-981-16-9885-9_24',
    journal:
      'Satyanarayana, C., Samanta, D., Gao, XZ., Kapoor, R.K. (eds) High Performance Computing and Networking.',
    coPublisherAndUniversity: 'With Raju A.S.N., Rajalakshmi T',
  },
  {
    title:
      ' AI-Driven Prediction and Data Analytics for Neurological Disorders—A Case Study of Multiple Sclerosis.',
    underReview: false,
    href: ' https://doi.org/10.1007/978-981-99-0047-3_38',
    journal:
      'In: Singh, P., Singh, D., Tiwari, V., Misra, S. (eds) Machine Learning and Computational Intelligence Techniques for Data Engineering. MISP 2022. Lecture Notes in Electrical Engineering, vol 998. Springer, Singapore.',
    coPublisherAndUniversity: 'With Vergis, N., Shrivastava, S., Srinivas, L.',
  },

  {
    title:
      'Blockchain Implementation in IoT Privacy and Cyber Security Feasibility Study and Analysis, 2022',
    underReview: false,
    href: 'https://doi.org/10.1007/978-981-16-9885-9_22',
    journal:
      'Satyanarayana, C., Samanta, D., Gao, XZ., Kapoor, R.K. (eds) High Performance Computing and Networking.',
    coPublisherAndUniversity: 'With Viswanadham, Y.V.R.S',
  },
  {
    title:
      'Automotive RADAR Human Classification Algorithm Through Simulation Analysis: Basics and Practical Challenges, 2022',
    underReview: false,
    href: 'https://doi.org/10.1007/978-981-16-9885-9_47',
    journal:
      'Satyanarayana, C., Samanta, D., Gao, XZ., Kapoor, R.K. (eds) High Performance Computing and Networking.',
    coPublisherAndUniversity: 'With James, A.J',
  },
  {
    title:
      'Smart Bracelet: With Handshake Recognition For Information Exchange (2021)',
    underReview: false,
    journal:
      'International Conference Engineering Technologies and Computer Science (EnT), 2021',
    href: 'https://doi.org/10.1109/EnT52731.2021.00031',
    coPublisherAndUniversity: 'With O. Oyinlola, University of Rwanda',
  },
  {
    title:
      'Speed Management Strategy: Designing an IoT-Based Electric Vehicle Speed Control Monitoring System (2021)',
    underReview: false,
    href: 'https://doi.org/10.3390/s21196670',
    journal: 'Sensors',
    coPublisherAndUniversity: 'With Antoine Gatera, University of Rwanda',
  },
  {
    title:
      'Implementation of IoT Framework with Data Analysis Using Deep Learning Methods for Occupancy Prediction in a Building (2021)',
    underReview: false,
    // href: "https://doi.org/10.3390/fi130300",
    journal: 'Future Internet',
    coPublisherAndUniversity: 'With Eric Hitimana, University of Rwanda',
  },
  {
    title:
      'Towards a Framework for Context - Aware Intelligent Transportation System: Case of Kigali (2021)',
    underReview: false,
    journal: '6th Edition ICT4SD International ICT Summit & Awards, Goa, India',
    coPublisherAndUniversity: 'With Antoine Gatera, University of Rwanda',
  },
  {
    title: 'IoT Application for Spruce Fire Detection in Rwanda (2021)',
    underReview: false,
    journal: '6th Edition ICT4SD International ICT Summit & Awards, Goa, India',
    coPublisherAndUniversity: 'With Eric HITIMANA, University of Rwanda',
  },
  {
    title:
      'A Decision - making Module for Fertilization and Irrigation Control System in Rice Farming Using Markov Chain Process and SARSA Algorithms (2021)',
    underReview: false,
    href: 'https://doi.org/10.18178/wcse.2021.06.052',
    journal:
      '11th International Workshop on Computer Science and Engineering (WCSE 2021)',
    refId: '',
    coPublisherAndUniversity:
      'With Peace Bamurigire, *Anthony Vodacek, Said Rutabayiro Ngoga, University of Rwanda, *Rochester Institute of Technology, Rochester, NY, USA',
  },
  {
    title:
      'Technology for improved operating room scheduling - a case of Kilimanjaro Christian Medical Center of Tanzania (2021)',
    underReview: false,
    journal:
      'International Journal of Computer Aided Engineering and Technology',
    refId: '10.1504/IJCAET.2022.10042013',
    coPublisherAndUniversity: 'With Mtonga, Kambombo, University of Rwanda',
  },
  {
    title:
      'Intelligent recognition of colorectal cancer combining application of computer - assisted diagnosis with deep learning approaches (2022)',
    underReview: false,
    href: 'http://doi.org/10.11591/ijece.v12i1.pp%25p',
    journal:
      'International Journal of Electrical and Computer Engineering (IJECE)',
    coPublisherAndUniversity: 'With Akella S. Narasimha Raju, SRMIST',
  },
  {
    title:
      'A fully integrated violence detection system using CNN and LSTM (2021)',
    underReview: false,
    href: 'http://doi.org/10.11591/ijece.v11i4.pp3374-3380',
    journal: 'International Journal of Electrical and Computer Engineering',
    coPublisherAndUniversity: 'With Sarthak Sharma, SRMIST',
  },
  {
    title: 'RescueAlert - an accident detection and rescue mechanism (2021)',
    underReview: false,
    href: 'http://doi.org/10.11591/ijece.v11i4.pp3356-3364',
    journal: 'International Journal of Electrical and Computer Engineering',
    coPublisherAndUniversity: 'With Utkarsh Singh, SRMIST',
  },
  {
    title:
      'Modelling Classroom Space Allocation at University of Rwanda - A Linear Programming Approach (2021)',
    underReview: false,
    href: 'https://digitalcommons.pvamu.edu/aam/vol16/iss1/40',
    journal:
      'Applications and Applied Mathematics: An International Journal (AAM)',
    coPublisherAndUniversity: 'With Mtonga, Kambombo, University of Rwanda',
  },
  {
    title:
      'Technology for improved operating room scheduling - A case of Kilimanjaro Christian Medical Center (2021).',
    underReview: true,
    journal: 'Int. Journal of Comp. Aided Eng. & Tech',
    coPublisherAndUniversity: 'With Mtonga K, University of Rwanda',
  },
  {
    title:
      'An Integrated Patient Triage and Capacity Recommender System for Robust Outpatient Department Service Delivery (2021).',
    underReview: true,
    journal: 'Journal of Technology and Health Care',
    coPublisherAndUniversity: 'With Mtonga K, University of Rwanda',
  },
  {
    title:
      'A Data-Driven Predictive Machine Learning Model for Efficiently Storing Temperature-Sensitive Medical Products, Such as Vaccines: Case Study: Pharmacies in Rwanda (2021).',

    journal: 'Journal for Healthcare Engineering',
    coPublisherAndUniversity: 'With Joseph Habiyaremye, University of Rwanda',
  },

  {
    title:
      'Virtual Aided Teacher-Learner Relationship- A Text Analytical Approach for Improved Behavior Analysis (2020).',

    journal: 'Sixth International Conference on e-Learning (econf)',
    coPublisherAndUniversity: 'With Mtonga K, University of Rwanda',
  },
  {
    title:
      'Long-term Groundwater Level Prediction Model Based on Hybrid KNN-RF (2020).',

    journal: 'Hydrology',
    coPublisherAndUniversity: 'With Omar H. Kombo, University of Rwanda',
  },
  {
    title:
      'GPRS Sensor node Battery life span prediction basing on received signal quality: Experimental study (2020).',

    journal: 'Information',
    coPublisherAndUniversity: 'With Joseph Habiyaremye, University of Rwanda',
  },
  {
    title:
      'Design and implementation of IoT Testbed with improved reliability using conditional probability techniques (2020).',

    journal: 'International Conference on I-SMAC, 2020',
    coPublisherAndUniversity:
      'With Kanagaraj Venusamy, AL Musanna College of Technology Muladdha, Sultanate of Oman',
  },
  {
    title:
      'Cloud Intelligent based Reference model for Voice-Interactive Application Suites (2020).',

    href: 'https://ieeexplore.ieee.org/document/9182951',
    journal:
      '2nd International Conference on Inventive Research in Computing Applications.',
    coPublisherAndUniversity: 'With Warren, SRMIST',
  },
  {
    title:
      'Data Collection and Deep Learning for Traffic and Road Infrastructure Management (2020).',

    href: 'https://link.springer.com/chapter/10.1007/978-981-15-5329-5_38',
    journal:
      'Artificial Intelligence Techniques for Advanced Computing Applications, Lecture Notes in Networks and Systems',
    coPublisherAndUniversity: 'With Surya Rajendran, SRMIST',
  },
  {
    title:
      'Machine Learning-Based Patient Load Prediction and IoT Integrated Intelligent Patient Transfer Systems (2019).',

    journal: 'Journal of Future Internet',
    refId: 'Volume 11, pp 236, 2019, doi:10.3390/fi11110236',
    coPublisherAndUniversity: 'With Mtonga K, University of Rwanda',
  },
  {
    title:
      'A Distance Integrated Triage System for Crowded Health Centers (2019).',

    journal:
      'International Conference Europe Middle East & North Africa Information Systems\nTechnologies to Support Learning (EMENA-ISTL 2019).\n Innovation in Information Systems and Technologies to Support Learning Research.',
    refId: 'Springer Book series, pp 302-311, 2019',
    coPublisherAndUniversity: 'With Mtonga K, University of Rwanda',
  },
  {
    title:
      'Handbook of Research on Big Data Storage and Visualization Techniques (2018).',

    journal: 'Book Chapter, IGI Global',
    refId: '10.4018/978-1-5225-3142-5',
    coPublisherAndUniversity: 'With Sorna Lakshmi, SRMIST',
  },
  {
    title:
      'Implementation of IoT development framework as utility through API (2018).',

    journal: 'International Journal of Pure and Applied Mathematics',
    coPublisherAndUniversity: 'With Dr. V. Nagarajan, SRMIST',
  },
  {
    title:
      'IOT based visualization of weightage based static task scheduling algorithm in datacenter (2018).',

    journal: 'International Journal of Engineering and Technology',
    coPublisherAndUniversity: 'With Preethi, SRMIST',
  },
  {
    title:
      'Efficient and Smart Energy Consumption System Using IOT and Analytics (2018).',

    journal: 'Journal of Advanced Research in Dynamic Control Systems',
    coPublisherAndUniversity: 'With Mayank Gupta, SRMIST',
  },
  {
    title:
      'Open IoT testbed utility cum development framework with virtualized services managed through software defined control plane - Performance enhanced in terms of time and resource utilization (2017).',

    journal: 'International Journal of Pure and Applied Mathematics',
    coPublisherAndUniversity: 'With Dr. V. Nagarajan, SRMIST',
  },
  {
    title:
      'An analysis of IOT test beds with application in the field of medicine and health care (2017).',

    journal: 'Research Journal of Pharmacy and Technology',
    coPublisherAndUniversity: 'With Dr. V. Nagarajan, SRMIST',
  },
  {
    title:
      'Gas Leakage Detection and Smart Alerting and prediction using IoT (2017).',

    journal: 'IEEE Digital Explore',
    coPublisherAndUniversity: 'With Asmitha Varma, Manu Jain, SRMIST',
  },
  {
    title: 'Fruit Ripeness Testing System (2017).',

    journal: 'International Journal of Pure and Applied Mathematics',
    refId: '117(16)',
    coPublisherAndUniversity: 'With Arjun Ramesan, SRMIST',
  },
  {
    title:
      'Survey of Migration, Integration and Interconnection Techniques of Data Centric Networks to Internet- Towards Internet of Things (IoT) (2016).',

    journal: 'Indian Journal of Science and Technology',
    refId: '10.17485/ijst/2016/v9i8/87924',
    coPublisherAndUniversity: 'With Dr. V. Nagarajan, SRMIST',
  },
  {
    title:
      'An Automatic Fan Speed Controller Leveraging Internet of Things (2015).',

    journal:
      'International Journal of Research in Engineering &Advanced Technology',
    coPublisherAndUniversity: 'With Gokul Ashok, SRMIST',
  },
  {
    title: 'NFC Enabled Smartphone Application for Mundane Activities (2015).',

    journal:
      'International Journal of Emerging Trends in Science and Technology',
    refId: 'Volume 2, Issue 2',
    coPublisherAndUniversity: 'With Pavithra',
  },
  {
    title:
      'Energy Efficient Smart Phone Application for Navigation cum 360 Destination Reach using PNT user Equipment Modernization Architecture (2015).',

    journal:
      'International Journal of Linguistics and Computational Applications',
    refId: '[ISSN 2394-6385] Volume 2, Issue 1',
    coPublisherAndUniversity: 'With Anand, SRMIST',
  },
  {
    title: 'RSSI Based Power Optimization (2013).',

    journal: 'Wireless Sensor Networks, IJARCSSE',
    coPublisherAndUniversity: 'With Leburu Uday Kumar Reddy, SRMIST',
  },
  {
    title:
      'By Using The Novel Decision-Tree Based On Hierarchical Distributed Data Will Classified In WSN (2013).',

    journal: 'IJAEM',
    coPublisherAndUniversity: 'With Dadi Narendra, SRMIST',
  },
  {
    title:
      'A perspective of Cognitive Radio in Wireless Sensor Network - A Survey (2013).',

    journal: 'IJARCSSE',
    coPublisherAndUniversity: 'With Abhiraami, SRMIST',
  },
  {
    title:
      'An Enhanced Architecture for an Infrastructure based Middle-ware using Adaptive Network Coding and Global Data Formatting to Achieve Efficient IoTs (2013).',

    journal: 'International Journal of Computer Applications',
    coPublisherAndUniversity:
      'With Dr. V.Nagarajan, Sheikh Jaaved Hassan, SRMIST',
  },
  {
    title:
      'Survey on Architecture and Protocols for Energy Management System, OASIS Energy Interoperation (2011).',

    journal: 'International conference on communication Systems',
    refId: 'Zigbee SEP 2.0, IEC61968, IEEE1888',
    coPublisherAndUniversity:
      'Deepak, Mohit Garg, Yumi Hirano, Toshiya Okabae (NEC, Japan)',
  },
];

export default publications;
