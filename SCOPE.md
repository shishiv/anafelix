# SCOPE.md - Projeto ANAFELIX

## Propósito Identificado ✅

**Landing page para Ana Felix, Terapeuta Holística especializada em:**
- Desprogramação Neurobiológica
- Limpeza Energética
- Radiestesia/Radiônica
- Reiki
- Harmonização de Chakras

**Tagline:** "Esvaziar para preencher" - Liberte-se das crenças que bloqueiam sua vida.

---

## Status do Projeto

**Fase:** Estrutura pronta, funcional, aguardando personalização final.

### ✅ Completo
- Layout completo de landing page
- Seções: Header, Hero, AboutUs, Benefícios, ComoFunciona, Depoimentos, Serviços, CTA, Footer
- Design system (cores ana-primary/#8B7355, tipografia Cormorant/Montserrat)
- Animações (Framer Motion + CSS)
- Componentes UI (shadcn/ui completo)
- Deploy configurado (Vercel)

### ⚠️ Pendente
- [ ] Substituir WhatsApp placeholder `5500000000000` pelo número real
- [ ] Adicionar fotos reais de Ana Felix
- [ ] Revisar/atualizar depoimentos (verificar se são reais)
- [ ] Configurar Analytics (GA4 ou similar)
- [ ] Adicionar favicon/logo real

---

## Entidades Principais

| Entidade | Descrição |
|----------|-----------|
| **Serviços** | Desprogramação (R$497/15d), Limpeza Energética (R$197), Reiki Gratuito (sex 20h) |
| **Benefícios** | Eliminação de bloqueios, proteção energética, reprogramação mental |
| **Social Proof** | 500+ vidas transformadas, 1200+ sessões, 10 anos experiência, 98% satisfação |
| **Técnicas** | Radiestesia, Radiônica, Reiki, Harmonização de Chakras |

---

## Stack Técnica

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS 3.4 + tw-animate-css
- **Componentes:** shadcn/ui (Radix primitives)
- **Animações:** Framer Motion
- **Deploy:** Vercel
- **Forms:** react-hook-form + zod (preparado mas não usado)

---

## Arquivos-Chave

```
src/
├── App.tsx              # Composição das seções
├── sections/
│   ├── Hero.tsx         # Hero com CTA principal
│   ├── Servicos.tsx     # Cards de serviços com preços
│   ├── Beneficios.tsx   # Lista de benefícios
│   ├── ComoFunciona.tsx # Processo explicado
│   ├── Depoimentos.tsx  # Social proof
│   ├── CTA.tsx          # Call to action final
│   ├── Header.tsx       # Navegação
│   └── Footer.tsx       # Links e contato
└── components/ui/
    └── about-us-section.tsx  # Sobre Ana + serviços grid
```

---

## Próximos Passos Recomendados

### Prioridade Alta
1. **WhatsApp:** Substituir `5500000000000` pelo número real (em Hero.tsx, Servicos.tsx, CTA.tsx, Footer.tsx)
2. **Fotos:** Adicionar foto de Ana Felix na seção About e/ou Hero
3. **Favicon:** Substituir emoji 🕉 por logo real

### Prioridade Média
4. **SEO:** Adicionar Open Graph tags para compartilhamento social
5. **Analytics:** Integrar Google Analytics ou Plausible
6. **Performance:** Lazy loading nas seções abaixo do fold

### Prioridade Baixa
7. **Blog:** Considerar seção de artigos para SEO orgânico
8. **Agendamento:** Integrar Calendly ou sistema de agendamento
9. **Email:** Formulário de newsletter opcional

---

## Notas Técnicas

- Projeto usa classe customizada `ana-*` para cores da marca
- Fontes: Cormorant Garamond (títulos) + Montserrat (corpo)
- Paleta: marrons terrosos (#8B7355, #D4C4B0, #F5F1ED) evocando energia e natureza
- Animações suaves com intersection observer para reveal on scroll
