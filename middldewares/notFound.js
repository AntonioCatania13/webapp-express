function notFound(req, res) {
    res.status(404).json({
        error:'endpoint non trovato'
    });
};

export default notFound;