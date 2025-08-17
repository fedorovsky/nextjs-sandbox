# Running Next.js 15.4.6 in Docker (Production)

## 1. Build the Docker Image

```bash
docker build \
  --build-arg COMMIT_SHA=$(git rev-parse --short=8 HEAD) \
  -t image-nextjs-sandbox .
```

* `-t image-nextjs-sandbox` — sets the image name
* `.` — points to the current directory containing the `Dockerfile`

## 2. Run the Container

```bash
docker run --rm -d -p 3000:3000 --name container-nextjs-sandbox image-nextjs-sandbox
```

* `--rm` — automatically remove the container when it stops
* `-d` — run in detached mode
* `-p 3000:3000` — map container port to host port
* `--name container-nextjs-sandbox` — container name
* `image-nextjs-sandbox` — image name

## 3. Check the Application

Open in your browser:

```
http://localhost:3000
```

## 4. Stop the Container

```bash
docker stop next-container
```

## 5. Remove the Container

```bash
docker rm next-container
```
