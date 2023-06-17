const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Nom d'utilisateur requis."],
            unique: true,
        },
        email: {
            type: String,
            required: [true, "Adresse e-mail requise."],
        },
        password: { type: String, required: true },
        firstName: { type: String },
        lastName: { type: String },
        favoriteGenres: { type: Array },
        moviesToSee: { type: Array },
        moviesSeen: { type: Array },
        favorites: { type: Array },
        avatarUrl: { type: String },
        language: { type: String, default: "fr" },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);
