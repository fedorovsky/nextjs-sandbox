| Type               | File / Folder          | Appears in URL | Example URL       | Purpose                 |
|--------------------|------------------------|----------------|-------------------|-------------------------|
| Page route         | `page.tsx`             | ✅             | `/routing`        | Render HTML page        |
| Layout route       | `layout.tsx`           | ❌             | —                 | Shared layout wrapper   |
| Template route     | `template.tsx`         | ❌             | —                 | Non-cached layout       |
| Loading route      | `loading.tsx`          | ❌             | —                 | Loading UI              |
| Error route        | `error.tsx`            | ❌             | —                 | Error boundary          |
| Not-found route    | `not-found.tsx`        | ❌             | —                 | 404 page                |
| Static segment     | `static/`              | ✅             | `/routing/static` | Fixed path              |
| Dynamic segment    | `[slug]/`              | ✅             | `/routing/hello`  | Single dynamic segment  |
| Catch-all route    | `[...slug]/`           | ✅             | `/routing/a/b/c`  | Multiple segments       |
| Optional catch-all | `[[...slug]]/`         | ✅             | `/routing`        | Zero or more segments   |
| Route group        | `(group)/`             | ❌             | —                 | Structure only          |
| Parallel route     | `@slot/`               | ❌             | —                 | Parallel UI segments    |
| Intercepting route | `(.)`, `(..)`, `(...)` | ⚠️             | depends           | Navigation interception |
| Route handler      | `route.ts`             | ✅             | `/api/posts`      | API endpoint            |
| Middleware         | `middleware.ts`        | ⚠️             | global            | Pre-request logic       |

[routes-and-layouts](https://github.com/Hendrixer/next.js-fundamentals/blob/main/lessons/04-routes-and-layouts.md)

## Page route (`page.tsx`)
A regular page.
Renders HTML and creates a URL based on folder structure.

---

## Layout route (`layout.tsx`)
A shared wrapper for pages.
Used for common UI like header or footer.
Does not appear in the URL.

---

## Template route (`template.tsx`)
Similar to layout, but re-created on every navigation.
Used when layout caching is not allowed.

---

## Loading route (`loading.tsx`)
UI shown while a route is loading.
Used with streaming and Suspense.

---

## Error route (`error.tsx`)
Error boundary for a route segment.
Catches runtime errors and shows fallback UI.

---

## Not-found route (`not-found.tsx`)
404 page.
Rendered when `notFound()` is called or route is missing.

---

## Static segment (`static/`)
Fixed URL segment.
Always has higher priority than dynamic routes.

---

## Dynamic segment (`[slug]/`)
Dynamic URL segment.
Matches exactly one segment.

---

## Catch-all route (`[...slug]/`)
Matches one or more URL segments.
Useful for deeply nested routes.

---

## Optional catch-all (`[[...slug]]/`)
Matches zero or more URL segments.
Useful for index pages with nested paths.

---

## Route group (`(group)/`)
Groups files for project structure.
Does not affect the URL.

---

## Parallel route (`@slot/`)
Parallel UI segments.
Allows rendering multiple routes at the same time.

---

## Intercepting route (`(.)`, `(..)`, `(...)`)
Intercepts navigation.
Commonly used for modal routes.

---

## Route handler (`route.ts`)
Backend API endpoint.
Handles HTTP requests (GET, POST, etc.).
Does not render UI.

---

## Middleware (`middleware.ts`)
Runs before the route handler or page.
Used for authentication, redirects, and rewrites.
