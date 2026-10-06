# Auditoria UX/UI — outubro de 2026

Revisão completa da apresentação executiva de Diego Moraes para a LG Lugar de Gente: arquitetura de informação, conteúdo, imagens, responsividade e acessibilidade. Cada achado lista a correção feita nesta branch.

## 1. Diagnóstico

### Arquitetura e redundância

| Achado | Gravidade | Evidência |
|---|---|---|
| Nove seções para uma única mensagem; página mobile com 18.842 px de altura | Alta | Hero → Visão → Resultados → Trajetória → Cases → Método → Aderência → Por que LG → Contato |
| Os mesmos 4 números repetidos em 4 lugares | Alta | R$ 10 mi, 55%, 50 mil e 50% no Hero, em Resultados, na Trajetória e nos Cases |
| "Aderência executiva" e "Por que LG" eram a mesma seção escrita duas vezes | Alta | Os mesmos 4 eixos (jornada/operating model, HR Tech, dados, IA), lado a lado |
| "Resultados" duplicava os cases | Média | Cada métrica tinha contexto, papel e resultado, igual ao case correspondente |
| Case 05 (Toronto) copiava a Trajetória | Média | Entregas idênticas, palavra por palavra, às do capítulo 2020–2025 |
| Rodapé repetia os contatos do bloco logo acima | Baixa | WhatsApp, e-mail, LinkedIn e localização em sequência, duas vezes |
| A mesma ação com rótulos diferentes | Baixa | "Ver perfil completo", "Ver currículo executivo" e "Perfil" abriam o mesmo drawer |
| Faixa "PESSOAS · PROCESSOS · DADOS · TECNOLOGIA" repetia o título do hero | Baixa | Logo acima do H1 com as mesmas palavras |

### Dados inconsistentes

- Admissão digital: o Case 01 dizia **60%** e o resto do site e o currículo diziam **55%** (22 → 10 dias). Padronizado em 55%.
- Experiência: o cartão da foto dizia **15+ anos** e o resto do site **18 anos**. Padronizado em 18.

### Imagens

| Achado | Evidência |
|---|---|
| 6 arquivos eram cópias byte a byte de outros | `cases/case-01` = `banco-safra`, `case-02` = `trajetoria-brasil`, `case-03` = `metodo-colaboracao`, `case-04` = `resultados-decisao`, `case-05` = `trajetoria-canada`, `case-06` = `trajetoria-digital` (mesmo MD5) |
| A mesma foto aparecia em seções diferentes | Banco Safra, Toronto e a mesa de prototipação aparecem na Trajetória e de novo nos Cases |
| Quatro fotos de banco de imagem com a mesma cena | `visao-operacao` e `aderencia-executiva` mostram equipe de costas diante de parede de post-its; `metodo-colaboracao` e `porque-lg-contexto` mostram equipe debruçada sobre mesa |
| Foto genérica que pode ser confundida com o candidato | `resultados-decisao` mostra um homem de terno, de barba e cabelo escuro, analisando gráficos, numa página que é sobre Diego |
| A briefing original pedia cases sem imagens | `docs/validation.md`: "Nenhuma imagem nos cases" |
| Foto do hero com 2,3 MB | `hero-photo2.png`, maior arquivo da página |

### Mobile

| Achado | Gravidade |
|---|---|
| **Resultados** e **Trajetória**: tocar num card trocava o painel de detalhe abaixo de todos os cards, fora da tela. O usuário não via nenhum retorno | Alta |
| No painel de Resultados, a foto vertical (4:5) ficava entre os cards e o texto, empurrando o detalhe ainda mais para baixo | Alta |
| Método e Cases usavam dois drawers diferentes (um sem trava de foco), com visuais distintos | Média |
| Foto do hero com 520 px de altura no mobile, depois de 4 cards de prova empilhados | Média |
| Splash de ~2,7 s em toda visita, inclusive ao recarregar a página | Média |
| Texto amarelo `#FFC20E` sobre branco (contraste ~1,6:1) em períodos e rótulos | Média |
| Rótulo "E-MAIL" vinho `#8A1538` sobre azul-marinho, praticamente invisível | Baixa |

## 2. O que foi feito

### Nova arquitetura (9 → 5 seções de conteúdo)

1. **Hero**: título, um parágrafo mais curto, faixa compacta com 4 números (2×2 no mobile) e 2 CTAs ("Ver cases e resultados" e "Ver currículo").
2. **Trajetória**: 5 capítulos, cada um com uma foto própria e sem repetições.
3. **Cases e resultados**: absorve a antiga seção Resultados. Cada card mostra o número primeiro; o detalhe abre em drawer ou modal. São 5 cases (o de Toronto saiu porque duplicava a Trajetória), mais um card que leva ao currículo completo.
4. **Como eu trabalho**: absorve a antiga seção Visão (título e princípio "High Tech / High Touch") e mantém o método de 5 passos.
5. **Por que a LG**: funde Aderência e Por que LG em 4 eixos, cada um com "O que a categoria pede" e "O que eu trago".
6. **Contato** e um rodapé enxuto, sem a lista de contatos repetida.

Navegação: Trajetória · Cases · Como trabalho · Por que LG · Contato. Todo acesso ao currículo usa o rótulo "Ver currículo" ("CV" em telas abaixo de 400 px).

### Padrão mobile único: drawer inferior (`BottomSheet.tsx`)

Trajetória, Cases e Método usam o mesmo componente:

- abre por cima do conteúdo, a partir da base da tela (zona do polegar, padrão iOS/Android), e ocupa até 92% da altura;
- tem cabeçalho fixo com contexto (período, case ou passo) e botão Fechar;
- fecha arrastando a alça para baixo, tocando no fundo, com Escape ou com o botão;
- prende o foco, trava o scroll da página e devolve o foco ao card tocado;
- no Método, os botões Anterior/Próximo percorrem os 5 passos sem fechar o drawer;
- nos Cases em desktop, o mesmo componente vira modal centralizado.

No desktop, Trajetória e Método mantêm lista e detalhe lado a lado, porque ali o detalhe fica visível junto da escolha.

### Imagens

- Removidas 12 imagens: as 6 duplicadas em `images/cases/` e 6 fotos de banco de imagem (`visao-operacao`, `aderencia-executiva`, `porque-lg-contexto`, `resultados-decisao`, `metodo-colaboracao`, `trajetoria-brasil`).
- Mantidas 5 imagens, uma por capítulo da Trajetória: as 3 fotos reais dos bancos, Toronto e a mesa de prototipação.
- Foto do hero convertida para WebP: de 2,3 MB para 110 kB. O PNG original continua no repositório.

### Outros ajustes

- A splash aparece uma vez por sessão (`sessionStorage`, com fallback seguro).
- Cabeçalho de seção compartilhado (`SectionHeader.tsx`); antes, o mesmo markup estava copiado em 7 arquivos.
- Amarelo da marca trocado por `#B45309` quando usado como texto sobre fundo claro.
- `color-scheme: light` e fundo claro no `body`: o site não tem tema escuro, e o overscroll mostrava fundo preto.
- CSS morto das seções removidas eliminado.

## 3. Validação

- `npm run lint` e `npm run build` aprovados.
- Larguras 320, 375, 768, 1.024 e 1.440 px sem rolagem horizontal. As 5 âncoras da navegação existem.
- Altura da página no mobile (390 px): de 18.842 px para cerca de 9.300 px.
- Drawers (Chromium, 390 × 844): abertura, foco inicial no Fechar, Escape, devolução do foco, liberação do scroll, fechamento por arraste e Anterior/Próximo no Método.
- Modal de case no desktop, em 1.440 px.
- Splash não reaparece ao recarregar na mesma sessão.
- Nenhum erro de JavaScript no console.

## 4. Pendências para o Diego decidir

- **`banco-real.jpg`**: a foto tem uma miniatura sobreposta no canto e marca d'água no rodapé. Vale substituir por uma fotografia limpa da fachada.
- **Foto de Toronto e mesa de prototipação**: são ilustrações geradas. Uma foto real (evento, workshop, ambiente de trabalho no Canadá) daria mais credibilidade.
- **Splash**: mesmo uma vez por sessão, ela atrasa o primeiro contato de quem abre o link. Se o objetivo for impressionar na primeira visita, pode ficar; se o foco for leitura rápida por recrutadores, pode sair.
- **Direção do drawer**: usei abertura de baixo para cima, padrão nativo de iPhone e Android e mais fácil de alcançar com o polegar. Se a preferência for de cima para baixo, basta inverter a direção em `BottomSheet.tsx`.
