export type MaturityStage =
  | 'Prototype direction'
  | 'Product development'
  | 'Research phase'
  | 'Concept exploration'

export type RoadmapSection = {
  completed: string[]
  inProgress: string[]
  planned: string[]
}

export type Project = {
  slug: string
  name: string
  role: string
  domain: string
  stage: MaturityStage
  summary: string
  description: string
  problemStatement: string
  hypothesis: string
  systemArchitecture: string
  milestones: RoadmapSection
  limitations: string[]
  dependencies: string[]
  cta: string
  accent: string
  auraColor: string
  auraToken: string
  inquiryCategory: 'Engineer' | 'Researcher' | 'Industrial Partner' | 'Institution' | 'Early Customer'
}

export const projects: Project[] = [
  {
    slug: 'sense',
    name: 'Project SENSE',
    role: 'Wearable product project',
    domain: 'Wearable interface',
    stage: 'Prototype direction',
    summary: 'Wearable spatial awareness and assistive technology.',
    description:
      'A waist-worn tactile interface exploring how vibration patterns can communicate directional or contextual information. Potential applications include industrial workflow guidance, navigation assistance, and assistive technology.',
    problemStatement:
      'Spatial orientation and environmental cues in high-noise or visually saturated environments create severe cognitive overload when channeled through screens or headphones.',
    hypothesis:
      'High-frequency haptic pulses mapped along an axial waist-worn array can communicate heading, proximity, and contextual alerts subconsciously, with lower cognitive latency than audio or visual alerts.',
    systemArchitecture:
      'Belt-mounted IMU (Inertial Measurement Unit) + ultra-low-latency spatial haptic drivers (ERM/LRA array) + Bluetooth LE telemetry bridge connected to environmental sensors.',
    milestones: {
      completed: [
        'Rev. 01 & 02 tactile belt form factor prototyping',
        '8-channel directional haptic motor array firmware',
        'Basic spatial orientation compass algorithm',
      ],
      inProgress: [
        'Rev. 03 flexible PCB enclosure with haptic damping',
        'Sub-15ms latency closed-loop responsiveness benchmarks',
        'Individual tactile sensitivity calibration workflow',
      ],
      planned: [
        'Industrial warehouse route-guidance field trials',
        'Assistive navigation protocol with accessibility researchers',
        'Miniaturized battery integration targeting 12h runtime',
      ],
    },
    limitations: [
      'Tactile adaptation over extended continuous wear periods requires pulsed modulation.',
      'Battery energy budget constraints under high-frequency continuous vibration bursts.',
      'Perceptual variance across different clothing layers and individual waist ergonomics.',
    ],
    dependencies: [
      'Low-power BLE 5.3 microcontroller modules',
      'Miniature linear resonant actuators with fast rise times (<10ms)',
      'Collaboration with mobility specialists and industrial test sites',
    ],
    cta: 'Follow the build',
    accent: '#668CFF',
    auraColor: '#00F0FF',
    auraToken: 'var(--aura-sense)',
    inquiryCategory: 'Industrial Partner',
  },
  {
    slug: 'bio-bus',
    name: 'Bio-Bus',
    role: 'Research initiative',
    domain: 'Biological computing',
    stage: 'Research phase',
    summary: 'Interfaces between computing systems and organoid intelligence research.',
    description:
      'Investigate how conventional computing systems could interface with experiments involving organoid intelligence. Early work focuses on signal representation, data acquisition, reproducibility, and analysis.',
    problemStatement:
      'Bridging wetware (living neural organoid cultures) and conventional silicon systems is plagued by low signal-to-noise ratios, electrical drift, non-standardized acquisition pipelines, and biological non-determinism.',
    hypothesis:
      'A standardized, low-noise digital acquisition bus (Bio-Bus) paired with high-density multielectrode arrays (MEAs) can create reproducible spatiotemporal spike-train representations for hybrid silicon-biological computing.',
    systemArchitecture:
      'In-vitro 3D neural organoid tissue -> Microelectrode Array (MEA bidirectional micro-stimulation and extracellular recording) -> Bio-Bus low-noise analog front-end -> FPGA spike sorter -> Standardized digital data stream.',
    milestones: {
      completed: [
        'Comprehensive literature synthesis on organoid electrophysiology and MEA interfaces',
        'Formal mathematical framework for spatiotemporal spike-train framing',
        'Conceptual Bio-Bus signal protocol architecture specification',
      ],
      inProgress: [
        'Simulation pipeline for synthetic MEA extracellular voltage traces',
        'Adaptive drift-compensation algorithms for recording electrodes',
        'Low-noise analog front-end hardware design review',
      ],
      planned: [
        'Wet-lab academic research partnership for physical biological MEA recording',
        'Reproducible benchmark dataset release for biocomputing researchers',
        'Closed-loop stimulation-response latency characterization study',
      ],
    },
    limitations: [
      'Wetware viability windows in vitro are finite and require strict environmental controls.',
      'Signal-to-noise ratio drift across microelectrodes due to cell settlement and protein adhesion.',
      'Absence of universally standardized biological benchmark datasets for computational verification.',
    ],
    dependencies: [
      'Access to accredited biological wet-lab facilities for organoid culture growth',
      'High-density CMOS microelectrode arrays (HD-MEAs)',
      'Sub-microvolt precision instrumentation amplifiers',
    ],
    cta: 'Explore the research',
    accent: '#9BB1FF',
    auraColor: '#10F5A0',
    auraToken: 'var(--aura-biobus)',
    inquiryCategory: 'Researcher',
  },
  {
    slug: 'uploaded-intelligence',
    name: 'Uploaded Intelligence',
    role: 'Long-term research concept',
    domain: 'Cognitive technology',
    stage: 'Concept exploration',
    summary: 'Memory representation, cognition, and potential cognitive preservation.',
    description:
      'Explore the scientific and technical boundaries of memory representation, cognition, and potential cognitive preservation. Current work distinguishes digital memory tools and modelling from speculative whole-brain emulation or mind uploading.',
    problemStatement:
      'The field of cognitive preservation suffers from a false conflation between speculative whole-brain emulation and mathematically verifiable, structured representations of human memory and cognition.',
    hypothesis:
      'Episodic memory structures, associative knowledge graphs, and subjective reasoning traces can be formalized into multi-modal semantic lattices that preserve personal cognitive context without claiming biological neural replication.',
    systemArchitecture:
      'Multi-source contextual data ingest -> Temporal episodic memory graph -> Associative semantic index -> Contextual query & associative reasoning retrieval interface.',
    milestones: {
      completed: [
        'Taxonomy of digital memory representation vs speculative biological emulation',
        'Formal episodic memory graph schema definition (Nodes: Event, Emotion, Entity, Temporal Anchor)',
        'Survey of associative retrieval architectures for personal knowledge models',
      ],
      inProgress: [
        'Prototype associative memory indexing tool for unstructured personal archives',
        'Evaluation of temporal context drift in long-term autobiographical representations',
        'Ethical boundary documentation on identity preservation and cognitive privacy',
      ],
      planned: [
        'Peer roundtable with cognitive scientists and neuroethicists',
        'Open-source reference implementation of episodic memory schemas',
        'Technical whitepaper on boundary conditions of cognitive preservation',
      ],
    },
    limitations: [
      'Natural language models and knowledge graphs inherently lose subconscious, non-verbal somatic memory.',
      'Graph density scaling challenges when maintaining decades of interconnected personal context.',
      'No physical neural emulation is attempted; strictly limited to cognitive representation models.',
    ],
    dependencies: [
      'High-capacity vector & graph hybrid storage systems',
      'Privacy-preserving local-first zero-knowledge cryptographic storage architectures',
      'Interdisciplinary guidance from cognitive neuroscientists and philosophers of mind',
    ],
    cta: 'Explore the questions',
    accent: '#C0D0FF',
    auraColor: '#B87BFF',
    auraToken: 'var(--aura-uploaded)',
    inquiryCategory: 'Researcher',
  },
  {
    slug: 'skillsynth',
    name: 'SkillSynth',
    role: 'AI employability platform',
    domain: 'Employability AI',
    stage: 'Product development',
    summary: 'AI-powered soft-skills development and employability intelligence.',
    description:
      'An AI-powered soft-skills and employability platform intended to help learners understand communication strengths, identify development opportunities, and build confidence for the world of work.',
    problemStatement:
      'Traditional interview coaching and soft-skills training rely on subjective, expensive human feedback that is inconsistent, non-scalable, and rarely backed by objective conversational metrics.',
    hypothesis:
      'Multi-modal conversational AI can analyze verbal cadence, vocabulary structure, structural clarity, and response coherence in real-time, delivering targeted, objective developmental feedback without algorithmic bias.',
    systemArchitecture:
      'Browser WebRTC audio/video stream ingest -> Real-time speech transcription & acoustic feature extraction -> Multi-rubric evaluative LLM agent -> Interactive learner feedback dashboard & institutional analytics.',
    milestones: {
      completed: [
        'Speech analysis core module for cadence, pacing, and filler word detection',
        'Foundational conversational rubric for behavioral interview preparation',
        'Learner dashboard MVP with individualized progress metrics',
      ],
      inProgress: [
        'Real-time feedback latency reduction (targeting <800ms response evaluation)',
        'Automated post-session diagnostic reports with targeted practice drills',
        'Algorithmic bias audit across diverse dialects and speech patterns',
      ],
      planned: [
        'Institutional pilot deployments with university career centers and training academies',
        'Longitudinal study measuring candidate interview confidence and placement outcomes',
        'Enterprise partner module for industry-specific hiring benchmark alignment',
      ],
    },
    limitations: [
      'Requires low-latency, quiet audio environments for high-fidelity acoustic nuance detection.',
      'AI-based evaluation must complement, rather than completely replace, experienced human mentorship.',
      'Regional accent variations require continuous acoustic model fine-tuning to prevent scoring skew.',
    ],
    dependencies: [
      'High-accuracy low-latency speech-to-text models',
      'Partnerships with educational institutions and career coaching bodies',
      'Compliance with educational privacy frameworks (FERPA / GDPR)',
    ],
    cta: 'Discuss an institutional pilot',
    accent: '#668CFF',
    auraColor: '#2554FF',
    auraToken: 'var(--aura-skills)',
    inquiryCategory: 'Institution',
  },
]
