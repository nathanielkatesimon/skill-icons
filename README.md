<p align="center"><img align="center" width="280" src="./.github/text-logo.svg#gh-dark-mode-only"/></p>
<p align="center"><img align="center" width="280" src="./.github/text-logo-light.svg#gh-light-mode-only"/></p>
<h3 align="center">Showcase your skills on your GitHub or resumé with ease!</h3>
<hr>

# Docs

- [Docs](#docs)
- [Example](#example)
- [Specifying Icons](#specifying-icons)
- [Themed Icons](#themed-icons)
- [Icons Per Line](#icons-per-line)
- [Get Icons Names](#get-icons-names)
- [Centering Icons](#centering-icons)

# Example

<p align="center"><img align="center" src="./.github/example-dark.png#gh-dark-mode-only"/></p>
<p align="center"><img align="center" src="./.github/example-light.png#gh-light-mode-only"/></p>

# Specifying Icons

Copy and paste the code block below into your readme to add the skills icon element!

Change the `?i=js,html,css,wasm` to a list of your skills separated by ","s! You can find a full list of icons [here](#icons-list).

```md
![My Skills](https://go-skill-icons.vercel.app/api/icons?i=js,html,css,wasm)
```

![My Skills](https://go-skill-icons.vercel.app/api/icons?i=js,html,css,wasm)

# Themed Icons

Some icons have a dark and light themed background. You can specify which theme you want as a url parameter.

This is optional. The default theme is dark.

Change the `&theme=light` to either `dark` or `light`. The theme is the background color, so light theme has a white icon background, and dark has a black-ish.

**Light Theme Example:**

```md
![My Skills](https://go-skill-icons.vercel.app/api/icons?i=java,kotlin,nodejs,figma&theme=light)
```

![My Skills](https://go-skill-icons.vercel.app/api/icons?i=java,kotlin,nodejs,figma&theme=light)

# Icons Per Line

You can specify how many icons you would like per line! It's an optional argument, and the default is 15.

Change the `&perline=3` to any number between 1 and 50.

```md
![My Skills](https://go-skill-icons.vercel.app/api/icons?i=aws,gcp,azure,react,vue,flutter&perline=3)
```

![My Skills](https://go-skill-icons.vercel.app/api/icons?i=aws,gcp,azure,react,vue,flutter&perline=3)

# Get Icons Names

You can get the possiblity to add the name of the icons you put to help others that doesnt know what they are by using `&titles`.

The value of `titles` is a boolean, so it should be `true` or `false`, default is `false`

```md
![My Skills](https://go-skill-icons.vercel.app/api/icons?i=rust,surrealdb,actix,yew&titles=true)
```

![My Skills](https://go-skill-icons.vercel.app/api/icons?i=rust,surrealdb,actix,yew&titles=true)

# Centering Icons

Want to center the icons in your readme? The SVGs are automatically resized, so you can do it the same way you'd normally center an image.

```html
<p align="center">
  <a href="https://go-skill-icons.vercel.app/">
    <img
      src="https://go-skill-icons.vercel.app/api/icons?i=git,kubernetes,docker,c,vim"
    />
  </a>
</p>
```

<p align="center">
  <a href="https://go-skill-icons.vercel.app/">
    <img src="https://go-skill-icons.vercel.app/api/icons?i=git,kubernetes,docker,c,vim" />
  </a>
</p>

