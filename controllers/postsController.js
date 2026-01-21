import connection from "../data/db.js";


// INDEX
function index(req, res, next) {
    const query = "SELECT * FROM `movies`";

    connection.query(query, (err, result) => {
        if (err) return next(err);
        res.json({
            results: result
        });
    });
}

// SHOW
function show(req, res, next) {
    const id = parseInt(req.params.id);

    const query = "SELECT * FROM `movies` WHERE `movies`.`id` = ?;"

    connection.query(query, [id], (err, result) => {
        if(err) return next(err);
        if (result.length === 0){
            res.status(404);
            res.json({
                message: "Not Found"
            });
        } else {
            const movie = result[0];
            res.json(movie);
        }
    });
}

const controller = {
    index,
    show,
} 
export default controller