# Sitio informativo · Ing. Juan Altamirano (Guamote)

SPA estática hecha con **React + Vite**, CSS puro, SVG e iconos Lucide. Sin backend, sin base de datos, sin Tailwind ni Bootstrap.

## 1. Instalar
```bash
npm install
```
## 2. Ejecutar en local
```bash
npm run dev
```
## 3. Compilar
```bash
npm run build      # genera /dist
npm run preview    # prueba el build
```

## 4. Subir a GitHub
```bash
git init
git add .
git commit -m "Sitio informativo"
git branch -M main
git remote add origin https://github.com/USUARIO/REPOSITORIO.git
git push -u origin main
```

## 5. Activar GitHub Pages
1. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Cada `push` a `main` ejecuta `.github/workflows/deploy.yml` y publica el sitio.
3. `vite.config.js` usa `base: './'`, por lo que funciona en `usuario.github.io/repositorio/` sin más cambios. La navegación usa anclas (`#inicio`, `#perfil`, `#trayectoria`, `#propuestas`, `#equipo`, `#contacto`).

## 6. Fotografías
Están en `public/images/`:
- `candidato/alcalde.webp` · foto del candidato
- `concejales/*.webp` · fotos de los concejales principales
- `propuestas/` · para imágenes de propuestas (vacía)
- `placeholder/foto-pendiente.svg` · se muestra cuando una foto es `null`

Para cambiar una foto: reemplaza el archivo o cambia su ruta (`photo: '...'`) en `src/data/`. Para los **suplentes** (sin foto), agrega la imagen en `public/images/concejales/` y pon la ruta en `photo`.

## 7. Nombres y datos personales
- Candidato (nombre, cargo, formación, experiencia, cifras): `src/data/candidate.js`
- Concejales (nombres, fotos, formación, experiencia): `src/data/candidates.js`

Todo dato faltante es `null` y la página muestra un aviso naranja "Agregar …".

## 8. Propuestas
`src/data/proposals.js`: programas del alcalde (`proposals`), áreas del diagrama (`groups`) y plan de concejales (`councilPlan`). Los iconos son nombres registrados en `src/components/Icon.jsx`.

## 9. Redes sociales y contacto
`src/data/candidate.js` → `contact` (teléfono, correo, sitio, redes) y `legal.responsible`. Mientras sean `null` se ven como "Agregar enlace oficial".

## Open Graph
En `index.html` cambia `og:image` por la URL absoluta de la foto una vez publicado, y agrega `og:url`.

## Estructura
```
src/components   Header, Hero, Profile, Education, Timeline, Experience, Proposals, Roadmap,
                 WorkDiagram, Candidates, CandidateModal, Contact, Footer
src/data         candidate.js · proposals.js · candidates.js
src/styles       variables.css · global.css · components.css · responsive.css
```
