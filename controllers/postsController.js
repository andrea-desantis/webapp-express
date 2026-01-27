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

    const movieQuery = "SELECT * FROM `movies` WHERE `id` = ?";
    const reviewsQuery = "SELECT * FROM `reviews` WHERE `movie_id` = ?";

    connection.query(movieQuery, [id], (err, movieResult) => {
        if (err) return next(err);

        if (movieResult.length === 0) {
            return res.status(404).json({ message: "Not Found" });
        }

        const movie = movieResult[0];

        connection.query(reviewsQuery, [id], (err, reviewsResult) => {
            if (err) return next(err);

            movie.reviews = reviewsResult;
            res.json(movie);
        });
    });
}

const controller = {
    index,
    show,
}
export default controller