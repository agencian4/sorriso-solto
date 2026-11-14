# Sorriso Souto — site institucional

Site de página única da Sorriso Souto (Odontologia Especializada, Rio Doce, Olinda/PE).
Projeto N4 Web Studio · Direção A "O Arco".

## Estrutura

```
index.html            Home (hero, tratamentos, dentistas, como funciona, Instagram, FAQ, agendamento)
privacidade.html      Política de privacidade (LGPD)
404.html              Página de erro
robots.txt / sitemap.xml
assets/css/style.css  Estilos (tokens no :root)
assets/js/main.js     Menu mobile, formulário → WhatsApp, eventos GA4
assets/img/           Imagens
```

HTML, CSS e JavaScript puros. Não há build, dependências nem banco de dados.

## Publicar na Vercel

1. Suba este repositório no GitHub.
2. Na Vercel: **Add New → Project → Import** o repositório.
3. Framework Preset: **Other**. Build Command: vazio. Output Directory: `./`.
4. Deploy. Depois, em **Settings → Domains**, aponte o domínio da clínica.

Para testar no computador: `npx serve .` (ou abra o `index.html` no navegador).

## Antes de publicar em produção

- [ ] Trocar `https://www.sorrisosouto.com.br/` pelo domínio real em `index.html` (canonical, Open Graph, JSON-LD), `robots.txt` e `sitemap.xml`.
- [ ] Substituir as imagens capturadas do Instagram pelos arquivos originais da clínica, em alta resolução.
- [ ] Trocar a foto da recepção por uma sem decoração de Natal.
- [ ] Incluir os retratos das duas dentistas (seção "Quem cuida").
- [ ] Aplicar o logo em vetor (hoje o logo é recriado em texto).
- [ ] Confirmar os horários, o número de inscrição da clínica no CRO-PE e a formação das dentistas.
- [ ] Confirmar com a clínica que a autorização dos pacientes cobre o uso das fotos no site.
- [ ] Adicionar o GA4: colar o snippet do `gtag.js` no `<head>`. Os eventos `whatsapp_click`, `ligar_click` e `agendamento_form` já disparam.
- [ ] Revisar o texto da política de privacidade com a clínica.

## Próximas etapas

- Feed automático do Instagram (API oficial da Meta ou Behold) no lugar da grade estática.
- Páginas por tratamento (ortodontia, prótese, estética, clínica geral).
- Fontes servidas localmente, para melhorar o carregamento.
