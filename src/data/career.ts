export const experience = [
  { company:'GE HealthCare', role:'VCP Design Engineer - Mechanical', period:'Apr 2025 - Present', location:'Bengaluru, Karnataka', summary:'Variable-cost productivity and mechanical engineering for medical imaging, spanning supplier programs, V&V, manufacturing readiness and customer-critical hardware problem solving.', bullets:[
    'Lead verification and validation activities for mobile radiography and mammography systems.',
    'Support supplier transition, localization and productivity programs for critical mechanical components.',
    'Work through prototype assembly, supplier documentation, V&V and risk-retirement testing.',
    'Designed a fixture-based strategy for a critical mobile X-ray tool that allowed shipment without a constrained assembly step, with field engineering completing the deferred assembly during commissioning to protect the customer timeline.'
  ]},
  { company:'Early-stage Engineering Startup', role:'Head of Engineering', period:'Oct 2024 - Mar 2025', location:'Mysuru, Karnataka', summary:'Led hands-on early-stage product engineering across electronics, PCB design, firmware and hardware/product development.', bullets:[
    'Led engineering work spanning electronics, PCB design, firmware development and early-stage product engineering.',
    'Worked across the mechanical-electrical-software boundary to move product concepts toward practical implementation.'
  ]},
  { company:'Lam Research', role:'Manufacturing Engineer 2 (Senior Manufacturing Engineer)', period:'Mar 2024 - Oct 2024', location:'Bengaluru, Karnataka', summary:'Manufacturing productivity, automation, fixture development, testing, simulation and cross-functional engineering for semiconductor equipment.', bullets:[
    'Worked across manufacturing productivity, automation, fixtures, hardware testing and simulation for semiconductor equipment.',
    'Built on prior manufacturing engineering work to drive precision-process and automation improvements.'
  ]},
  { company:'Lam Research', role:'Manufacturing Engineer 1 (Manufacturing Engineer)', period:'Aug 2021 - Feb 2024', location:'Bengaluru, Karnataka', summary:'Manufacturing productivity, precision fixtures, hardware validation automation and assembly simulation for semiconductor equipment.', bullets:[
    'Reduced wet-deposition tool cycle time by 5% using Value Stream Mapping (VSM) and ZBRA matrix analysis.',
    'Developed an IMU sensor-based fixture for sub-micron tolerance control, reducing cycle time by 90% and generating more than $1M in annual savings.',
    'Developed Python-based hardware validation systems that reduced test cycles by 50% and supported SEMI S2/S8 compliance-oriented testing.',
    'Used DELMIA simulation to model assembly workflows and reduce trial-and-error time by 30%.',
    'Served as Scrum Master for manufacturing team projects and coordinated technical work across functions.'
  ]},
  { company:'Lam Research', role:'Manufacturing Engineering Intern', period:'Mar 2021 - Aug 2021', location:'Bengaluru, Karnataka', summary:'Supported manufacturing engineering activities and gained hands-on exposure to semiconductor equipment manufacturing processes and engineering workflows.', bullets:[
    'Supported manufacturing engineering activities and developed hands-on understanding of semiconductor equipment manufacturing processes.'
  ]}
];

export const projects = [
  { title:'IMU-Based Manufacturing Fixture', tag:'Manufacturing · Sensors · Precision Fixture', problem:'Repeated rework occurred because the top-plate shaft could jam in the chamber hole, creating assembly delays and line-down risk.', action:'Ideated, designed and developed an IMU-based fixture that measured the absolute position of the top plate and chamber to quantify planar misalignment. Validated the concept through repeated builds with actual assembly technicians and measured time and labour-hour reduction.', result:'90% cycle-time reduction, more than $1M annual savings, and elimination of line-down events caused by the jam condition.', category:'manufacturing', href:'/projects/#imu-fixture' },
  { title:'Automated Hardware Validation', tag:'Automation · Python · Test', problem:'Repetitive manual hardware validation consumed engineering time and limited throughput.', action:'Developed a Python-based testing system to automate hardware validation workflows and reduce repetitive engineering effort.', result:'50% reduction in test cycles with support for SEMI S2/S8 compliance-oriented testing.', category:'automation', href:'/projects/#hardware-validation' },
  { title:'Assembly Workflow Simulation', tag:'Simulation · DELMIA · Manufacturing', problem:'Assembly planning relied heavily on physical trial and error.', action:'Simulated assembly workflows before execution to identify process issues earlier and improve the planned sequence.', result:'30% reduction in trial-and-error time.', category:'manufacturing', href:'/projects/#assembly-simulation' },
  { title:'Critical Mobile X-Ray Supplier Transition', tag:'Medical Devices · Supplier · V&V', problem:'A manufacturing shortage threatened the customer commissioning timeline for critical mobile X-ray components.', action:'Worked through supplier prototypes, assembly guidance, documentation, V&V and risk retirement, and designed a fixture-based strategy to defer a constrained assembly operation to field commissioning.', result:'Enabled shipment while protecting the customer commissioning timeline and preserving a controlled engineering/validation path.', category:'medical', href:'/projects/#mobile-xray-transition' },
  { title:'Test Procedure Instruction Automation', tag:'AI / LLM · Computer Vision · Documentation', problem:'Creating Test Procedure Instructions was repetitive and documentation-heavy.', action:'Built a computer-vision/LLM-based hackathon solution to automate TPI documentation generation.', result:'Hackathon finalist project with an estimated $120k/year saving opportunity.', category:'automation', href:'/projects/#tpi-automation' }
];

export const skills = {
  'Manufacturing & Productivity':['Value Stream Mapping','Manufacturing process improvement','Supplier transition','Localization','Fixture development','Cycle-time reduction','Cost reduction','Risk retirement'],
  'Automation & Programming':['Python','Hardware test automation','Engineering workflow automation','AI / LLM applications','Computer vision','Firmware development'],
  'Engineering & Simulation':['Mechanical engineering','CAD','Assembly process engineering','DELMIA simulation','IMU-based sensing','Precision tolerance control'],
  'Verification, Quality & Regulatory':['Verification & Validation','Hardware validation','Risk-retirement testing','SEMI S2/S8','FDA 21 CFR Part 820 environment','ISO 13485 environment','IEC 60601 environment'],
  'Electronics & Embedded':['PCB design','Electronics','Firmware','Sensor integration','Hardware debugging','Mechanical-electrical system integration'],
  'Product & Cross-functional':['Product engineering','Supplier engineering','Prototype builds','Cross-functional technical problem solving','Scrum / project coordination']
};

export const education = {
  degree:'B.E. (Bachelor of Engineering)',
  specialization:'Mechanical Engineering',
  institution:'The National Institute of Engineering',
  location:'Mysuru, Karnataka',
  year:'2021'
};

export const contact = {
  location:'Bengaluru, Karnataka',
  email:'teja@gowlla.in',
  linkedin:'https://www.linkedin.com/in/tejakg/',
  github:'https://github.com/tejakg',
  website:'https://teja.gowlla.in/'
};
