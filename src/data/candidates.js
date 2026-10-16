// ============================================================
//  EQUIPO DE CONCEJALES · Edita aquí nombres, fotos y datos
//  Cada binomio = un Principal + un Suplente.
//  `photo: null` => se muestra el placeholder "Agregar fotografía".
//  `formation` / `experience: null` => se muestra "Agregar ...".
//  Las fotos de los principales provienen del documento (en el orden en que aparecen).
//  Las fotos de suplentes NO se incluyeron en el documento.
// ============================================================

export const councilGroups = [
  {
    id: 'urbanos',
    label: 'Concejales urbanos',
    kind: 'Urbano',
    icon: 'Building2',
    color: 'var(--orange)',
    members: [
      {
        id: 'u1',
        principal: {
          name: 'Ing. Carmen Amelia Padilla Delgado',
          short: 'Carmen Padilla',
          title: 'Ing.',
          photo: 'images/concejales/carmen-padilla.webp',
          formation: null,
          experience: null,
        },
        substitute: {
          name: 'Sr. Tomas Daquilema Laso',
          short: 'Tomas Daquilema',
          title: 'Sr.',
          photo: null,
          formation: null,
          experience: null,
        },
      },
      {
        id: 'u2',
        principal: {
          name: 'Sr. José Gregorio Guaman Ayol',
          short: 'José Guaman',
          title: 'Sr.',
          photo: 'images/concejales/jose-guaman.webp',
          formation: null,
          experience: null,
        },
        substitute: {
          name: 'Ing. Norma Gladys Curillo Farez',
          short: 'Norma Curillo',
          title: 'Ing.',
          photo: null,
          formation: null,
          experience: null,
        },
      },
      {
        id: 'u3',
        principal: {
          name: 'Ing. Curi Sisa Apugllon Zuña',
          short: 'Curi Sisa Apugllon',
          title: 'Ing.',
          photo: 'images/concejales/curi-sisa-apugllon.webp',
          formation: null,
          experience: null,
        },
        substitute: {
          name: 'Ing. Daniel Patricio Yutibug Apugllon',
          short: 'Daniel Yutibug',
          title: 'Ing.',
          photo: null,
          formation: null,
          experience: null,
        },
      },
    ],
  },
  {
    id: 'rurales',
    label: 'Concejales rurales',
    kind: 'Rural',
    icon: 'Sprout',
    color: 'var(--green)',
    members: [
      {
        id: 'r1',
        principal: {
          name: 'Ing. Rosa Rurora Tene Taday',
          short: 'Rosa Tene',
          title: 'Ing.',
          photo: 'images/concejales/rosa-tene.webp',
          formation: null,
          experience: null,
        },
        substitute: {
          name: 'Patricio Cislema Rivera',
          short: 'Patricio Cislema',
          title: null,
          photo: null,
          formation: null,
          experience: null,
        },
      },
      {
        id: 'r2',
        principal: {
          name: 'Sr. Julian Roldan Tixi',
          short: 'Julian Roldan',
          title: 'Sr.',
          photo: 'images/concejales/julian-roldan.webp',
          formation: null,
          experience: null,
        },
        substitute: {
          name: 'Sta. Vilma Selena Urquiza Naula',
          short: 'Vilma Urquiza',
          title: 'Sta.',
          photo: null,
          formation: null,
          experience: null,
        },
      },
    ],
  },
];
