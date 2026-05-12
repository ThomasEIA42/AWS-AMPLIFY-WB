# 🚀 AmplifyApp — Frontend React

Landing page moderna lista para desplegarse en **AWS Amplify**.

## Estructura del proyecto

```
amplify-app/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   └── index.js
├── amplify.yml        ← Configuración de build para Amplify
├── package.json
└── .gitignore
```

---

## 🖥️ Desarrollo local

```bash
npm install
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## ☁️ Despliegue en AWS Amplify

### Opción 1 — Consola de AWS (recomendado)

1. Sube este proyecto a **GitHub / GitLab / Bitbucket**.
2. Ve a [console.aws.amazon.com/amplify](https://console.aws.amazon.com/amplify/).
3. Haz clic en **"Crear app"** → **"Hospedar aplicación web"**.
4. Conecta tu repositorio y selecciona la rama `main`.
5. Amplify detectará automáticamente el `amplify.yml` y configurará el build.
6. Haz clic en **"Guardar y desplegar"**.

> ✅ ¡Listo! Cada `git push` a `main` generará un deploy automático.

### Opción 2 — Amplify CLI

```bash
npm install -g @aws-amplify/cli
amplify configure
amplify init
amplify add hosting
amplify publish
```

---

## 📦 Build de producción

```bash
npm run build
```

Genera la carpeta `/build` lista para servir en cualquier CDN o S3.

---

## 🔧 Variables de entorno

Crea un archivo `.env` en la raíz para variables locales:

```env
REACT_APP_API_URL=https://tu-api.execute-api.us-east-1.amazonaws.com
REACT_APP_REGION=us-east-1
```

En Amplify Console: **App settings → Environment variables**.

---

## 📄 Licencia

MIT
