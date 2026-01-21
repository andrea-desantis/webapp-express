import connection from "../data/db";


// INDEX
function index(req, res, next) {
    const query = "SELECT * FROM `movies`";

    connection.query(query, (err, result) => {
        if (err) next(err);
        res.json({
            results: result
        });
    });
}