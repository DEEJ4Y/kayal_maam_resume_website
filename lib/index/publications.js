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
      "Technology for improved operating room scheduling - A case of Kilimanjaro Christian Medical Center (2021).",
    underReview: true,
    journal: "Int. Journal of Comp. Aided Eng. & Tech",
    coPublisherAndUniversity: "With Mtonga K, University of Rwanda",
  },
  {
    title:
      "An Integrated Patient Triage and Capacity Recommender System for Robust Outpatient Department Service Delivery (2021).",
    underReview: true,
    journal: "Journal of Technology and Health Care",
    coPublisherAndUniversity: "With Mtonga K, University of Rwanda",
  },
  {
    title:
      "A Data-Driven Predictive Machine Learning Model for Efficiently Storing Temperature-Sensitive Medical Products, Such as Vaccines: Case Study: Pharmacies in Rwanda (2021).",

    journal: "Journal for Healthcare Engineering",
    coPublisherAndUniversity: "With Joseph Habiyaremye, University of Rwanda",
  },

  {
    title:
      "Virtual Aided Teacher-Learner Relationship- A Text Analytical Approach for Improved Behavior Analysis (2020).",

    journal: "Sixth International Conference on e-Learning (econf)",
    coPublisherAndUniversity: "With Mtonga K, University of Rwanda",
  },
  {
    title:
      "Long-term Groundwater Level Prediction Model Based on Hybrid KNN-RF (2020).",

    journal: "Hydrology",
    coPublisherAndUniversity: "With Omar H. Kombo, University of Rwanda",
  },
  {
    title:
      "GPRS Sensor node Battery life span prediction basing on received signal quality: Experimental study (2020).",

    journal: "Information",
    coPublisherAndUniversity: "With Joseph Habiyaremye, University of Rwanda",
  },
  {
    title:
      "Design and implementation of IoT Testbed with improved reliability using conditional probability techniques (2020).",

    journal: "International Conference on I-SMAC, 2020",
    coPublisherAndUniversity:
      "With Kanagaraj Venusamy, AL Musanna College of Technology Muladdha, Sultanate of Oman",
  },
  {
    title:
      "Cloud Intelligent based Reference model for Voice-Interactive Application Suites (2020).",

    href: "https://ieeexplore.ieee.org/document/9182951",
    journal:
      "2nd International Conference on Inventive Research in Computing Applications.",
    coPublisherAndUniversity: "With Warren, SRMIST",
  },
  {
    title:
      "Data Collection and Deep Learning for Traffic and Road Infrastructure Management (2020).",

    href: "https://link.springer.com/chapter/10.1007/978-981-15-5329-5_38",
    journal:
      "Artificial Intelligence Techniques for Advanced Computing Applications, Lecture Notes in Networks and Systems",
    coPublisherAndUniversity: "With Surya Rajendran, SRMIST",
  },
  {
    title:
      "Machine Learning-Based Patient Load Prediction and IoT Integrated Intelligent Patient Transfer Systems (2019).",

    journal: "Journal of Future Internet",
    refId: "Volume 11, pp 236, 2019, doi:10.3390/fi11110236",
    coPublisherAndUniversity: "With Mtonga K, University of Rwanda",
  },
  {
    title:
      "A Distance Integrated Triage System for Crowded Health Centers (2019).",

    journal:
      "International Conference Europe Middle East & North Africa Information Systems\nTechnologies to Support Learning (EMENA-ISTL 2019).\n Innovation in Information Systems and Technologies to Support Learning Research.",
    refId: "Springer Book series, pp 302-311, 2019",
    coPublisherAndUniversity: "With Mtonga K, University of Rwanda",
  },
  {
    title:
      "Handbook of Research on Big Data Storage and Visualization Techniques (2018).",

    journal: "Book Chapter, IGI Global",
    refId: "10.4018/978-1-5225-3142-5",
    coPublisherAndUniversity: "With Sorna Lakshmi, SRMIST",
  },
  {
    title:
      "Implementation of IoT development framework as utility through API (2018).",

    journal: "International Journal of Pure and Applied Mathematics",
    coPublisherAndUniversity: "With Dr. V. Nagarajan, SRMIST",
  },
  {
    title:
      "IOT based visualization of weightage based static task scheduling algorithm in datacenter (2018).",

    journal: "International Journal of Engineering and Technology",
    coPublisherAndUniversity: "With Preethi, SRMIST",
  },
  {
    title:
      "Efficient and Smart Energy Consumption System Using IOT and Analytics (2018).",

    journal: "Journal of Advanced Research in Dynamic Control Systems",
    coPublisherAndUniversity: "With Mayank Gupta, SRMIST",
  },
  {
    title:
      "Open IoT testbed utility cum development framework with virtualized services managed through software defined control plane - Performance enhanced in terms of time and resource utilization (2017).",

    journal: "International Journal of Pure and Applied Mathematics",
    coPublisherAndUniversity: "With Dr. V. Nagarajan, SRMIST",
  },
  {
    title:
      "An analysis of IOT test beds with application in the field of medicine and health care (2017).",

    journal: "Research Journal of Pharmacy and Technology",
    coPublisherAndUniversity: "With Dr. V. Nagarajan, SRMIST",
  },
  {
    title:
      "Gas Leakage Detection and Smart Alerting and prediction using IoT (2017).",

    journal: "IEEE Digital Explore",
    coPublisherAndUniversity: "With Asmitha Varma, Manu Jain, SRMIST",
  },
  {
    title: "Fruit Ripeness Testing System (2017).",

    journal: "International Journal of Pure and Applied Mathematics",
    refId: "117(16)",
    coPublisherAndUniversity: "With Arjun Ramesan, SRMIST",
  },
  {
    title:
      "Survey of Migration, Integration and Interconnection Techniques of Data Centric Networks to Internet- Towards Internet of Things (IoT) (2016).",

    journal: "Indian Journal of Science and Technology",
    refId: "10.17485/ijst/2016/v9i8/87924",
    coPublisherAndUniversity: "With Dr. V. Nagarajan, SRMIST",
  },
  {
    title:
      "An Automatic Fan Speed Controller Leveraging Internet of Things (2015).",

    journal:
      "International Journal of Research in Engineering &Advanced Technology",
    coPublisherAndUniversity: "With Gokul Ashok, SRMIST",
  },
  {
    title: "NFC Enabled Smartphone Application for Mundane Activities (2015).",

    journal:
      "International Journal of Emerging Trends in Science and Technology",
    refId: "Volume 2, Issue 2",
    coPublisherAndUniversity: "With Pavithra",
  },
  {
    title:
      "Energy Efficient Smart Phone Application for Navigation cum 360 Destination Reach using PNT user Equipment Modernization Architecture (2015).",

    journal:
      "International Journal of Linguistics and Computational Applications",
    refId: "[ISSN 2394-6385] Volume 2, Issue 1",
    coPublisherAndUniversity: "With Anand, SRMIST",
  },
  {
    title: "RSSI Based Power Optimization (2013).",

    journal: "Wireless Sensor Networks, IJARCSSE",
    coPublisherAndUniversity: "With Leburu Uday Kumar Reddy, SRMIST",
  },
  {
    title:
      "By Using The Novel Decision-Tree Based On Hierarchical Distributed Data Will Classified In WSN (2013).",

    journal: "IJAEM",
    coPublisherAndUniversity: "With Dadi Narendra, SRMIST",
  },
  {
    title:
      "A perspective of Cognitive Radio in Wireless Sensor Network – A Survey (2013).",

    journal: "IJARCSSE",
    coPublisherAndUniversity: "With Abhiraami, SRMIST",
  },
  {
    title:
      "An Enhanced Architecture for an Infrastructure based Middle-ware using Adaptive Network Coding and Global Data Formatting to Achieve Efficient IoTs (2013).",

    journal: "International Journal of Computer Applications",
    coPublisherAndUniversity:
      "With Dr. V.Nagarajan, Sheikh Jaaved Hassan, SRMIST",
  },
  {
    title:
      "Survey on Architecture and Protocols for Energy Management System, OASIS Energy Interoperation (2011).",

    journal: "International conference on communication Systems",
    refId: "Zigbee SEP 2.0, IEC61968, IEEE1888",
    coPublisherAndUniversity:
      "Deepak, Mohit Garg, Yumi Hirano, Toshiya Okabae (NEC, Japan)",
  },
];

export default publications;
