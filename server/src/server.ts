import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express(); // creating express application
app.use(express.json()); // express must undedstand json
app.use(cors());
app.use(routes);
app.listen(3333); // listening to http requests on port 3333 (access via localhost:3333)

/*
    Some notes

    - Request body contains data to create or update an entry;
    - Route Params identifies which resource we want to update or delete. Access via route (app.pute("/users:id")) e.g.
    - Query Params: we can use with pagination, filters, sorting
*/
