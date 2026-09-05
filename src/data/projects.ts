import type { Project } from '../types'

// Edit this file to update project details, links, and screenshots.
// Any field marked with [ADD ...] is a placeholder — replace it with
// real information once it is available.
export const projects: Project[] = [
  {
    id: 'atm-bank-management',
    title: 'ATM and Bank Management System',
    technologies: ['Python', 'HTML', 'CSS', 'JavaScript'],
    description:
      'A system that provides essential ATM and banking operations through a usable interface.',
    details: [
      'Built with Python on the back end and HTML, CSS, and JavaScript on the front end.',
      'Focused on core ATM and banking operations through a straightforward, usable interface.',
    ],
    repoUrl: undefined, // [ADD REPOSITORY LINK]
    demoUrl: undefined, // [ADD LIVE DEMO LINK]
    hasPlaceholders: true,
  },
  {
    id: 'car-dealership-database',
    title: 'Car Dealership Database Management System',
    technologies: ['MySQL'],
    description:
      'A relational database that organizes dealership operations such as vehicle tracking, sales, customer records, services, suppliers, payments, and test drives.',
    details: [
      'Manages customers, employees, vehicles, payments, services and maintenance, dealership locations, suppliers, and test drives.',
      'Designed using Entity Relationship Diagrams with primary and foreign keys.',
      'Applies entity specialization and one-to-one, one-to-many, and many-to-many relationships.',
      'Includes a weak Test Drive entity as part of a structured relational database design.',
    ],
    repoUrl: undefined, // [ADD REPOSITORY LINK]
    demoUrl: undefined,
    hasPlaceholders: true,
  },
  {
    id: 'students-subjects-submission',
    title: 'Students and Subjects Submission System',
    technologies: ['Java'],
    description:
      'A Java application for managing students, subjects, and academic submissions.',
    details: [
      '[ADD MORE DETAILED PROJECT DESCRIPTION]',
    ],
    repoUrl: undefined, // [ADD REPOSITORY LINK]
    demoUrl: undefined,
    hasPlaceholders: true,
  },
  {
    id: 'realtime-voice-frequency',
    title: 'Real-Time Voice Detector and Frequency Processing',
    technologies: ['Python', 'NumPy', 'FFT', 'DSP', 'Data Visualization'],
    description:
      'A real-time digital signal-processing application that analyzes microphone input in the frequency domain.',
    details: [
      'Captures microphone input at a 44.1 kHz sampling rate and processes audio in blocks.',
      'Uses a Hanning window to reduce spectral leakage before analysis.',
      'Applies the real FFT to convert audio from the time domain to the frequency domain.',
      'Uses spectral smoothing to detect the dominant frequency.',
      'Displays live time-domain and frequency-domain plots in a graphical interface.',
    ],
    repoUrl: undefined, // [ADD REPOSITORY LINK]
    demoUrl: undefined,
    hasPlaceholders: true,
  },
  {
    id: 'ai-fire-detection',
    title: 'AI Fire-Detection Model',
    technologies: ['Python'],
    description: 'An AI-based fire-detection project developed with Python.',
    details: [
      'Dataset: [ADD DATASET DETAILS]',
      'Model architecture: [ADD MODEL ARCHITECTURE]',
      'Accuracy / results: [ADD ACCURACY OR EVALUATION RESULTS]',
      'Libraries used: [ADD LIBRARIES]',
      'Deployment method: [ADD DEPLOYMENT METHOD]',
    ],
    repoUrl: undefined, // [ADD REPOSITORY LINK]
    demoUrl: undefined,
    hasPlaceholders: true,
  },
]
