export const experience = [
  { company:'GE HealthCare', role:'Engineering / Manufacturing Engineering', period:'Current', summary:'Work across manufacturing engineering, supplier transitions, verification & validation, and productivity for medical imaging products.', bullets:[
    'Led verification and validation activities for mobile radiography and mammography systems.',
    'Supported supplier transition and localization programs for critical mechanical components.',
    'Worked with suppliers through prototype assembly, documentation, V&V, and risk-retirement testing.',
    'Designed a fixture-based approach that allowed a critical tool to ship without an assembly step, with field engineering completing the assembly during commissioning to protect customer timelines.'
  ]},
  { company:'Lam Research', role:'Manufacturing Engineer', period:'Previous', summary:'Manufacturing productivity, automation, fixtures, testing, simulation and cross-functional engineering for semiconductor equipment.', bullets:[
    'Reduced wet-deposition tool cycle time by 5% using Value Stream Mapping and ZBRA matrix analysis.',
    'Developed IMU sensor-based fixtures to achieve sub-micron tolerances, saving more than $1M annually and reducing cycle time by 90%.',
    'Built Python-based hardware validation systems that reduced test cycles by 50% and supported SEMI S2/S8 compliance.',
    'Used DELMIA simulation to model assembly workflows and reduce trial-and-error time by 30%.',
    'Served as Scrum Master for manufacturing team projects.'
  ]},
  { company:'Early-stage engineering startup', role:'Product / Electronics Engineering', period:'Technical sabbatical / break', summary:'Hands-on product engineering spanning electronics, PCB design, firmware and early-stage product development.', bullets:[
    'Led engineering work across electronics, PCB design, firmware development and product engineering.'
  ]}
];

export const projects = [
  { title:'Automated hardware validation', tag:'Automation · Python · Test', problem:'Hardware validation was consuming significant engineering time through repetitive manual testing.', action:'Developed a Python-based testing system to automate hardware validation workflows.', result:'Cut test cycles by 50% while supporting SEMI S2/S8 compliance.' },
  { title:'Sub-micron manufacturing fixture', tag:'Manufacturing · Sensors · Fixtures', problem:'A manufacturing process required tighter assembly control and a major reduction in cycle time.', action:'Developed an IMU sensor-based fixture approach for sub-micron tolerance control.', result:'Reduced cycle time by 90% and generated more than $1M in annual savings.' },
  { title:'Assembly workflow simulation', tag:'Simulation · DELMIA · Manufacturing', problem:'Assembly planning relied on physical trial and error.', action:'Simulated assembly workflows before execution to expose process issues earlier.', result:'Reduced trial-and-error time by 30%.' },
  { title:'Critical supplier transition', tag:'Medical devices · Supplier · V&V', problem:'A manufacturing shortage threatened customer timelines for critical mobile X-ray components.', action:'Worked with the supplier through prototype assembly, documentation, V&V and risk retirement, while designing a fixture strategy to defer an assembly operation to field commissioning.', result:'Enabled the tool to ship without the unavailable assembly step and protected the customer timeline.' },
  { title:'Test Procedure Instruction automation', tag:'AI / LLM · Documentation', problem:'Creating Test Procedure Instructions was repetitive and documentation-heavy.', action:'Built a computer-vision / LLM-based hackathon solution to automate TPI documentation.', result:'Finalist project with an estimated $120k/year saving opportunity.' }
];

export const skills = {
  'Manufacturing & Productivity':['Value Stream Mapping','Manufacturing process improvement','Supplier transition','Localization','Fixture development','Cycle-time reduction','Cost reduction','Risk retirement'],
  'Automation & Programming':['Python','Hardware test automation','AI / LLM applications','Computer vision','Firmware development'],
  'Engineering & Simulation':['Mechanical engineering','CAD','Assembly process engineering','DELMIA simulation','IMU-based sensing'],
  'Verification & Quality':['Verification & Validation','Hardware validation','SEMI S2/S8','Medical-device V&V','Engineering documentation'],
  'Product & Cross-functional':['Product engineering','Supplier engineering','Prototype builds','Cross-functional technical problem solving','Scrum / project coordination'],
  'Electronics & Embedded':['PCB design','Electronics','Firmware','Hardware debugging']
};
