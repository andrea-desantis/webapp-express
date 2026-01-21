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




const controller = {
    index,
} 
export default controller