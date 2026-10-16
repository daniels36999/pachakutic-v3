// ============================================================
//  DATOS DEL CANDIDATO  ·  Edita aquí nombres, fotos, enlaces
//  Fuente: documento "BIBLIOGRAFIAS DIPTICO". No se inventan datos:
//  todo lo que falta es `null` y la página muestra un aviso "Agregar ...".
// ============================================================

export const PLACEHOLDER_PHOTO = 'images/placeholder/foto-pendiente.svg';

export const navItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'perfil', label: 'Perfil' },
  { id: 'trayectoria', label: 'Trayectoria' },
  { id: 'propuestas', label: 'Propuestas' },
  { id: 'equipo', label: 'Equipo' },
  { id: 'contacto', label: 'Contacto' },
];

// Qué sección del documento pertenece a qué ítem del menú (para resaltar el menú activo).
export const sectionToNav = {
  inicio: 'inicio',
  perfil: 'perfil',
  formacion: 'perfil',
  trayectoria: 'trayectoria',
  experiencia: 'trayectoria',
  propuestas: 'propuestas',
  roadmap: 'propuestas',
  areas: 'propuestas',
  equipo: 'equipo',
  contacto: 'contacto',
};

export const candidate = {
  shortName: 'Ing. Juan Altamirano',
  fullName: 'Juan Patricio Altamirano Marcatoma',
  role: 'Candidato a la Alcaldía',
  territory: 'Cantón Guamote',
  province: 'Chimborazo, Ecuador',
  origin: 'Comunidad Tipin Tablas Pamba',
  party: 'Pachakutik',
  listNumber: '18',
  slogan: 'Vota todo 18',
  // Foto real tomada del documento. Para cambiarla: reemplaza el archivo o cambia esta ruta.
  photo: 'images/candidato/alcalde.webp',
  photoAlt: 'Fotografía del Ing. Juan Altamirano, candidato a la Alcaldía de Guamote',
  intro:
    'Joven indígena profesional e Ingeniero Civil, nacido en Tipin Tablas Pamba. Experiencia en obra pública, riego y gestión de proyectos para el cantón.',

  // Resumen visual (sección Perfil)
  chain: [
    { icon: 'User', label: 'Nombre', value: 'Juan Patricio Altamirano Marcatoma' },
    { icon: 'Landmark', label: 'Cargo', value: 'Candidato a la Alcaldía del cantón Guamote' },
    { icon: 'GraduationCap', label: 'Formación', value: 'Ingeniero Civil · Universidad Nacional de Chimborazo · 2016' },
    { icon: 'Briefcase', label: 'Experiencia', value: 'Obra pública, riego y gestión de proyectos' },
    { icon: 'MapPin', label: 'Territorio', value: 'Tipin Tablas Pamba, cantón Guamote, Chimborazo' },
  ],

  // Frase del documento sobre su trayectoria, convertida en etiquetas
  strengths: {
    experience: ['Obra pública', 'Vialidad', 'Fiscalización', 'Administración de proyectos'],
    skills: ['Planificación', 'Gestión de infraestructura', 'Administración pública'],
  },

  // Texto extenso (se muestra solo en el modal "Ver perfil")
  bio: [
    'Mi nombre es Juan Patricio Altamirano Marcatoma, nací en la comunidad Tipin Tablas Pamba del cantón Guamote, provincia de Chimborazo. Soy un joven indígena profesional.',
    'Inicié mi formación académica en la escuela Luis Alberto Castillo de la misma comunidad; posteriormente cursé mis estudios secundarios en la Unidad Educativa Velasco Ibarra y mis estudios superiores en la Universidad Nacional de Chimborazo, donde obtuve mi título de Ingeniero Civil en el año 2016.',
  ],

  education: [
    {
      id: 'ed1',
      icon: 'School',
      step: 'Formación inicial',
      title: 'Escuela Luis Alberto Castillo',
      detail: 'Inicio de su formación académica en su comunidad, Tipin Tablas Pamba.',
    },
    {
      id: 'ed2',
      icon: 'School',
      step: 'Estudios secundarios',
      title: 'Unidad Educativa Velasco Ibarra',
      detail: 'Cursó sus estudios secundarios.',
    },
    {
      id: 'ed3',
      icon: 'GraduationCap',
      step: 'Estudios superiores · 2016',
      title: 'Universidad Nacional de Chimborazo',
      detail: 'Título de Ingeniero Civil, obtenido en el año 2016.',
      highlight: true,
    },
  ],

  // Experiencia profesional (textos del documento, con ortografía corregida)
  experience: [
    {
      id: 'ex1',
      icon: 'Hammer',
      period: '2016–2017',
      title: 'Emprendimiento en acabados de construcción',
      org: 'Riobamba',
      description: 'Inició su emprendimiento con servicio de acabados para la construcción en la ciudad de Riobamba.',
    },
    {
      id: 'ex2',
      icon: 'Ruler',
      period: '2018–2019',
      title: 'Topógrafo',
      org: 'GAD Municipal de Guamote',
      description: 'Realizó levantamiento de información y fiscalización de obra civil.',
    },
    {
      id: 'ex3',
      icon: 'Droplets',
      period: '2020–2023',
      title: 'Técnico responsable de Guamote y Colta',
      org: 'GADPCH',
      description:
        'Técnico responsable de los cantones de Guamote y Colta en la elaboración de proyectos de tecnificación y optimización del uso del agua en los sistemas de riego.',
    },
    {
      id: 'ex4',
      icon: 'Briefcase',
      period: '2023–2024',
      title: 'Director General de Riego',
      org: 'GAD Provincial de Chimborazo',
      description: 'Responsable de 1.200 sistemas de riego en los 10 cantones de la provincia de Chimborazo.',
    },
    {
      id: 'ex5',
      icon: 'HandHelping',
      period: '2025–2026',
      title: 'Técnico de asesoramiento',
      org: 'Comunidades del cantón Guamote',
      description: 'Apoyó con la elaboración de proyectos de riego en diferentes comunidades del cantón Guamote.',
    },
  ],

  // Cifras: SOLO las que aparecen en el documento
  indicators: [
    { value: 8, label: 'Programas en el plan de trabajo' },
    { value: 1200, label: 'Sistemas de riego a su cargo' },
    { value: 10, label: 'Cantones de Chimborazo' },
    { value: 5, label: 'Concejales principales' },
  ],

  // Contacto: SOLO datos reales. `null` = se muestra "Agregar ...".
  contact: {
    location: 'Cantón Guamote, provincia de Chimborazo, Ecuador',
    phone: null, // ej. '+593 9X XXX XXXX'
    email: null, // ej. 'contacto@dominio.ec'
    website: null, // ej. 'https://...'
    socials: [
      { label: 'Facebook', url: null },
      { label: 'Instagram', url: null },
      { label: 'TikTok', url: null },
    ],
  },

  legal: {
    // Agregar el responsable de la propaganda/publicidad si la normativa electoral lo exige.
    responsible: null,
  },
};
