module.exports = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((error) => {
        console.log({ error: error.message });
        res.status(500).json({
            header: {
                responseCode: 500,
                responseMessage: "Internal Server Error",
                customerMessage: "Request failed, please try again later",
                timestamp: new Date().toISOString(),
            },
            body: {
                error: error.message
            },
        });
    });
};
