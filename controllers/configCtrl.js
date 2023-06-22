exports.initializeAPI = (req, res, next) => {
    res.status(200).json({ message: "API initilized." });
};

exports.getImgBBAPIKey = (req, res, next) => {
    res.status(200).json(process.env.IMGBB_API_KEY);
};

exports.getDemoUserId = (req, res, next) => {
    res.status(200).json(process.env.DEMO_USER_ID);
};
