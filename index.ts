console.log("Hello world - Approaching Bun");

const data = {
  "name": "peter",
  "surname": "smith"
}


const server = Bun.serve({
    fetch(req) {
      const url = new URL(req.url);
      if (url.pathname === "/") return new Response("Home page!");
      if (url.pathname === "/blog") return new Response("blog!");
      if (url.pathname === "/form") return new Response(Bun.file("index.html"),{
        headers: {
          "Content-Type": "text/html",
        },
      });
      if (url.pathname === "/json") return Response.json(data);

      return new Response("Page not found - 404!");
    },
  });
  

  console.log(`Listening on http://localhost:${server.port} ...`);
  console.log(`Listening on http://localhost:${server.port}/blog ...`);
  console.log(`Listening on http://localhost:${server.port}/form ...`);
  console.log(`Listening on http://localhost:${server.port}/json ...`);
  