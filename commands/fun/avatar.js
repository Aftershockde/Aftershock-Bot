const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("avatar")
        .setDescription("Shows a Avatar")
        .addUserOption((option) =>
            option.setName("target").setDescription("Avatar User")
        ),
    async execute(interaction) {
        const target = interaction.options.getUser("target");
        const avatar = interaction.user.avatarURL();

        if (target == null) {
            await interaction.reply(avatar);
        } else {
            await interaction.reply(target.avatarURL());
        }
    }
};
