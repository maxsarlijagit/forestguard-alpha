# 🚀 ForestGuard Alpha — Deploy en 2 minutos

## Opción 1: GitHub + Vercel (RECOMENDADO - más fácil)

### Paso 1: Crear repo en GitHub
1. Ve a [github.com/new](https://github.com/new)
2. Nombre: `forestguard-alpha`
3. Private o Public (como prefieras)
4. Click "Create repository"

### Paso 2: Push tu código
```bash
cd forestguard-alpha
git remote add origin https://github.com/TU_USERNAME/forestguard-alpha.git
git branch -M main
git push -u origin main
```

### Paso 3: Conectar a Vercel (1 click)
1. Ve a [vercel.com](https://vercel.com)
2. Click "New Project"
3. Click "Import from Git" → GitHub
4. Autoriza Vercel con GitHub
5. Busca y selecciona `forestguard-alpha`
6. **Vercel auto-detecta Next.js**
7. Click "Deploy"
8. **¡Listo!** URL: `https://forestguard-alpha.vercel.app`

**Tiempo total: 2 minutos**

---

## Opción 2: CLI con Token (alternativa)

### Paso 1: Obtener token de Vercel
1. Ve a [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Click "Create Token"
3. Copiar token

### Paso 2: Deploy con script
```bash
cd forestguard-alpha
export VERCEL_TOKEN=tu_token_aqui
bash deploy-vercel.sh
```

**Tiempo total: 1 minuto**

---

## Lo que verás después del deploy:

```
✅ Deployment complete!

Your app is live at:
  https://forestguard-alpha.vercel.app

📊 Dashboard:
  https://forestguard-alpha.vercel.app?tab=dashboard

🏠 Landing:
  https://forestguard-alpha.vercel.app?tab=landing
```

---

## URLs después del deploy:

| Página | URL |
|--------|-----|
| **Landing Page** | `https://forestguard-alpha.vercel.app` |
| **Dashboard** | Click tab "Dashboard" arriba |
| **Both** | Misma URL, switcheá con los tabs |

---

## ¿Qué Incluye?

✅ Landing completa (hero, productos, market, timeline, financials, team, CTA)  
✅ Dashboard interactivo (6 zonas, mapa de sensores, alerts)  
✅ Navegación con tabs (Landing ↔ Dashboard)  
✅ Dark theme luxury (aesthetic ForestGuard)  
✅ Responsive (mobile/tablet/desktop)  
✅ SSL automático, CDN global, backups automáticos  

---

## Soporte Post-Deploy

- **Ver logs**: Dashboard de Vercel → proyecto → "Deployments"
- **Custom domain**: Vercel → Settings → Domains → agregar tu dominio
- **Environment variables**: Vercel → Settings → Environment Variables (si necesitás después)
- **Analytics**: Vercel Dashboard → "Analytics" (traffic, performance, etc.)

---

## Próximos Pasos Opcionales

1. **Agregar tu dominio**: Vercel → Settings → Add Domain
   - Ejemplo: `forestguard.io` → pointing to Vercel
   
2. **Conectar email para CTA**: Agregar endpoint a contacto (Formspree, SendGrid, etc.)
   
3. **Analytics**: Vercel incluye analytics gratis
   - Ve a Vercel Dashboard → Analytics

4. **Actualizar contenido**: Editá los archivos HTML en `public/` o componentes React en `app/` y hace push a GitHub → Vercel redeploya automáticamente

---

## 🔑 Puntos Clave

- **Vercel redeploya automáticamente** cuando hacés push a main
- **SSL/HTTPS gratis** (automático)
- **CDN global** (super rápido desde cualquier país)
- **Uptime 99.9%** garantizado
- **Sin costo** (plan Hobby de Vercel es gratis para proyectos personales)

---

## ¿Problemas?

1. Si GitHub auth falla: Desconecta Vercel en [github.com/settings/applications](https://github.com/settings/applications) y reintentá
2. Si el build falla: Vercel mostrará los logs → puedes debuggear desde ahí
3. Si la URL es diferente: Vercel puede haber elegido otro nombre — checkea el dashboard

---

## ✨ Ya está!

Una vez deployado, podés:
- Compartir la URL con inversores
- Mostrar en pitch meetings
- Actualizar contenido desde GitHub
- Ver analytics en tiempo real

**¡Éxito! 🚀**
