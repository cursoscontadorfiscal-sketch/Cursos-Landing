# Cache y Revalidación de Prismic

## Configuración Actual

- **Cache de página (ISR):** 2 horas (`export const revalidate = 7200` en page.tsx)
- **Cache de fetch Prismic:** 2 horas (configurado en prismicio.ts)

## Resultado con 1000 visitas/semana

| Métrica | Sin cache | Con cache 2h + ISR |
|---------|-----------|-------------------|
| Llamadas Prismic | 1000 | ~84 |
| Ejecuciones Vercel | 1000 | ~84 |
| Costo | Alto | Mínimo |

---

## Webhook para Revalidación Instantánea (Opcional)

Si publicas contenido en Prismic y no quieres esperar 2 horas para verlo:

### 1. Crear API Route

```ts
// src/app/api/revalidate/route.ts
import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  try {
    revalidateTag('prismic');
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (error) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
```

### 2. Agregar Variable de Entorno

En Vercel → Settings → Environment Variables:

```
REVALIDATE_SECRET=tu_secret_seguro_aqui
```

### 3. Configurar Webhook en Prismic

1. Ir a Prismic → Settings → Webhooks
2. Crear nuevo webhook:
   - **Name:** Revalidate Vercel Cache
   - **URL:** `https://tu-dominio.vercel.app/api/revalidate?secret=tu_secret_seguro_aqui`
   - **Triggers:** Seleccionar "A document is published"

### 4. Probar

```bash
curl -X POST "https://tu-dominio.vercel.app/api/revalidate?secret=tu_secret_seguro_aqui"
```

Respuesta esperada:
```json
{"revalidated": true, "now": 1234567890}
```

---

## Notas

- Sin el webhook, el contenido se actualiza automáticamente cada 2 horas
- El webhook es solo para actualizaciones inmediatas cuando publicas en Prismic
- El secret protege el endpoint de llamadas no autorizadas
