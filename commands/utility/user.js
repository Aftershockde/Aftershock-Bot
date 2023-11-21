const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("user")
        .setDescription("Provides information about the user."),
    async execute(interaction) {

        const exampleEmbed = {
            color: 0xffffff,
            title: "User Informations:",
            thumbnail: {
                url: interaction.user.avatarURL()
            },
            fields: [
                {
                    name: "Username:",
                    value: interaction.user.username
                },
                {
                    name: "User-ID",
                    value: interaction.user.id
                },
                {
                    name: "Joined at:",
                    value: interaction.member.joinedAt
                }
            ]
        };

        await interaction.reply({ embeds: [exampleEmbed] });
    }
};
