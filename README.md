# O que é preciso fazer
R: Completar com o que for necessário:

## Project component:
- projectTitle: `Título`
- description: `Descrição da descrição`
- tags: `Tags referentes às tecnologias usadas no projeto`
- mostRecent: `Só coloca isso no projeto mais recente, para ter uma aparência diferente`
- image: `link para a imagem`

```jsx
<Project image="linkDaImagem" projectTitle="Título" description="Descrição da descrição" tags={["tag1", "tag2"]} mostRecent />
```

coloca quantos vc quiser dentro do arquivo `src/components/Projects.tsx`


### Temas
Eu so deixei 3 temas: Light, Cupcake e Dracula(padrão), se quiser mais, tem esses: 

```js
themes=["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]
```

é so colocar a array com os temas que voce quiser dentro da array do header, `themes`
