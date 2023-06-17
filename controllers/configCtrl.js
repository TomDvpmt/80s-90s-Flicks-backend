exports.getImgBBAPIKey = (req, res, next) => {
    res.status(200).json(process.env.IMGBB_API_KEY);
};
