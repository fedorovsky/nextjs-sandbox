## Local production check

```bash
npm run build
npm run start
```

- runs Next.js in **production mode**
- matches real production behavior
- required to test ISR, caching, and rendering
- **no hot reload** (rebuild required after changes)

## Docker

### 1. Build the Docker Image

```bash
docker build \
  --build-arg COMMIT_SHA=$(git rev-parse --short=8 HEAD) \
  -t image-nextjs-sandbox .
```

- `-t image-nextjs-sandbox` — sets the image name
- `.` — points to the current directory containing the `Dockerfile`

### 2. Run the Container

```bash
docker run --rm -d -p 3000:3000 --name container-nextjs-sandbox image-nextjs-sandbox
```

- `--rm` — automatically remove the container when it stops
- `-d` — run in detached mode
- `-p 3000:3000` — map container port to host port
- `--name container-nextjs-sandbox` — container name
- `image-nextjs-sandbox` — image name

### 3. Check the Application

Open in your browser:

```
http://localhost:3000
```

### 4. Stop the Container

```bash
docker stop next-container
```

### 5. Remove the Container

```bash
docker rm next-container
```


## Linaria + Next.js 16 Setup

### 1️⃣ Dependencies

```bash
npm i @linaria/core @linaria/react
npm i -D @wyw-in-js/webpack-loader @wyw-in-js/babel-preset
```

---

### 2️⃣ Webpack loader (next.config.ts)

```ts
webpack(config, { dev }) {
  config.module.rules.push({
    test: /\.(ts|tsx|js|jsx)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: '@wyw-in-js/webpack-loader',
        options: {
          sourceMap: dev,
          displayName: dev,
          babelOptions: {
            presets: ['@wyw-in-js/babel-preset']
          }
        }
      }
    ]
  })

  return config
}
```

---

### 3️⃣ Babel preset (.babelrc)

```json
{
  "presets": [
    "next/babel",
    "@wyw-in-js/babel-preset"
  ]
}
```

---

## 🎯 Result

* CSS is extracted at build time
* Zero runtime
* Works with Next.js 16
* Compatible with App Router

