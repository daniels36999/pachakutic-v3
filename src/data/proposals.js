// ============================================================
//  PLAN DE TRABAJO · Edita aquí propuestas, objetivos e iconos
//  `icon` debe ser un nombre registrado en src/components/Icon.jsx
//  `group` enlaza con `groups` (diagrama de áreas). Cada grupo usa
//  un color de identidad distinto.
// ============================================================

export const planMeta = {
  title: 'Plan de Trabajo',
  note: 'Propuestas establecidas de acuerdo con las competencias del GAD Municipal, conforme al artículo 55 del COOTAD.',
};

export const groups = [
  { id: 'servicios', title: 'Servicios básicos', icon: 'Droplets', color: 'var(--red)' },
  { id: 'territorio', title: 'Territorio', icon: 'Map', color: 'var(--orange)' },
  { id: 'desarrollo', title: 'Desarrollo', icon: 'TrendingUp', color: 'var(--green)' },
  { id: 'ambiente', title: 'Ambiente y riesgos', icon: 'Leaf', color: 'var(--blue)' },
  { id: 'gobernanza', title: 'Gobernanza', icon: 'Landmark', color: 'var(--ice)' },
];

export const proposals = [
  {
    id: 'P1',
    title: 'Agua Potable y Saneamiento',
    short: 'Agua y saneamiento',
    icon: 'Droplets',
    group: 'servicios',
    objective: 'Ampliar y mejorar la cobertura de agua segura y saneamiento en el cantón',
    actions: ['Construcción y ampliación de sistemas de agua entubada/potable en comunidades rurales priorizadas'],
  },
  {
    id: 'P2',
    title: 'Vialidad Cantonal (Urbana y Rural)',
    short: 'Vialidad',
    icon: 'Route',
    group: 'territorio',
    objective: 'Mejorar la conectividad vial del cantón para la producción y la movilidad de la población.',
    actions: ['Estudio y priorización de la red vial rural, principal y secundaria'],
  },
  {
    id: 'P3',
    title: 'Ordenamiento Territorial y Catastro',
    short: 'Territorio y catastro',
    icon: 'Map',
    group: 'territorio',
    objective: 'Actualización participativa del PDyOT cantonal.',
    actions: ['Actualización del catastro urbano y rural (avalúos y catastros)'],
  },
  {
    id: 'P4',
    title: 'Desarrollo Económico Local',
    short: 'Economía local',
    icon: 'TrendingUp',
    group: 'desarrollo',
    objective: 'Dinamizar la economía cantonal mediante comercio, agroindustria y turismo.',
    actions: ['Impulsar una marca local y generar valor agregado a los productos del cantón.'],
  },
  {
    id: 'P5',
    title: 'Gestión Ambiental y Residuos Sólidos',
    short: 'Ambiente y residuos',
    icon: 'Leaf',
    group: 'ambiente',
    objective:
      'Proteger el ambiente y mejorar la gestión adecuada de residuos sólidos del cantón, promoviendo prácticas sostenibles.',
    actions: [
      'Gestionar la dotación de vehículos recolectores para la recolección de residuos sólidos en las parroquias de Cebadas y Palmira.',
    ],
  },
  {
    id: 'P6',
    title: 'Gestión de Riesgos',
    short: 'Gestión de riesgos',
    icon: 'ShieldAlert',
    group: 'ambiente',
    objective: 'Reducir la vulnerabilidad del cantón ante amenazas naturales.',
    actions: [
      'Fortalecimiento del sistema de alerta temprana y del cuerpo de bomberos.',
      'Capacitación comunitaria en gestión de riesgos.',
    ],
  },
  {
    id: 'P7',
    title: 'Gobernanza Digital y Gobierno Abierto',
    short: 'Gobierno digital',
    icon: 'Monitor',
    group: 'gobernanza',
    objective:
      'Modernizar la gestión municipal y cerrar la brecha digital del cantón mediante tecnologías de la información y la comunicación.',
    actions: ['Implementación de un portal web municipal con trámites y turnos en línea.'],
  },
  {
    id: 'P8',
    title: 'Participación Ciudadana e Interculturalidad',
    short: 'Participación',
    icon: 'Users',
    group: 'gobernanza',
    // El documento no separa objetivo y acciones en este programa: se muestran tal cual.
    objective: 'Asambleas cantonales y presupuesto participativo anual.',
    actions: ['Fortalecimiento de organizaciones comunitarias, indígenas y de mujeres.'],
  },
];

// ------------------------------------------------------------
//  Plan de trabajo del equipo de concejales (artículo 58 del COOTAD)
//  El documento lo presenta tras las listas de concejales urbanos y rurales,
//  sin indicar a cuál corresponde; sus temas son del ámbito urbano.
// ------------------------------------------------------------
export const councilPlanMeta = {
  title: 'Plan de trabajo de concejales',
  note: 'Propuestas establecidas de acuerdo con las competencias del GAD Municipal, conforme al artículo 58 del COOTAD.',
};

export const councilPlan = [
  {
    id: 'C1',
    title: 'Normativa de Uso y Ocupación del Suelo Urbano',
    icon: 'Scale',
    objective: 'Ordenar el crecimiento de la ciudad mediante normativa clara y aplicable.',
    actions: [
      'Diagnóstico técnico del crecimiento urbano actual y de las construcciones sin normativa.',
      'Elaboración/actualización de la ordenanza de uso y ocupación del suelo urbano.',
    ],
  },
  {
    id: 'C2',
    title: 'Fiscalización de Obra Pública Urbana y otros',
    icon: 'ClipboardCheck',
    actions: [
      'Seguimiento trimestral a cronogramas y presupuestos de obras urbanas.',
      'Visitas de verificación técnica a obras en ejecución.',
      'Informes públicos de fiscalización presentados ante el Concejo y la ciudadanía.',
    ],
  },
  {
    id: 'C3',
    title: 'Modernización y Ordenamiento de Mercado y Feria',
    icon: 'Store',
    actions: [
      'Propuesta de reordenamiento físico del mercado municipal y de los puestos de la feria.',
      'Ordenanza de uso de espacios de comercio y control del tránsito en días de feria.',
      'Gestión de mejoras en servicios básicos del mercado (agua, energía, baterías sanitarias, seguridad).',
    ],
  },
  {
    id: 'C4',
    title: 'Gestión Integral de Residuos Sólidos Urbanos',
    icon: 'Recycle',
    actions: [
      'Ordenanzas de Gestión Integral de Residuos Sólidos Urbanos.',
      'Fiscalizar y dar seguimiento al cumplimiento de las rutas y frecuencias de recolección de residuos, especialmente en las parroquias rurales y comunidades.',
      'Promover programas permanentes de separación en origen, reciclaje y educación ambiental.',
      'Promover el aprovechamiento y valorización de los residuos.',
    ],
  },
  {
    id: 'C5',
    title: 'Movilidad y Espacio Público',
    icon: 'Footprints',
    actions: [
      'Propuesta de ordenanza de tránsito, circulación y estacionamiento en la cabecera cantonal, incluido el régimen especial de feria.',
      'Gestión de mejoramiento de parques, aceras y espacios recreativos y deportivos.',
      'Señalización vial urbana (horizontal y vertical).',
    ],
  },
  {
    id: 'C6',
    title: 'Seguridad Ciudadana en el Centro Urbano',
    icon: 'ShieldCheck',
    actions: [
      'Mesas de coordinación periódica con la Policía Nacional y comerciantes organizados.',
      'Gestión de mejoras en iluminación y cámaras de seguridad en puntos críticos del centro urbano.',
      'Campañas de prevención dirigidas a comerciantes y visitantes en días de feria.',
    ],
  },
  {
    id: 'C7',
    title: 'Promoción Cultural y Patrimonial',
    icon: 'TrainFront',
    actions: [
      'Apoyo normativo y logístico a fiestas tradicionales (Semana Santa, cantonización) y a la feria como patrimonio vivo.',
      'Gestión conjunta con el GAD municipal para la promoción del patrimonio ferroviario Riobamba–Alausí.',
    ],
  },
];
