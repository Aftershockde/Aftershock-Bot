const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("kick")
        .setDescription("Select a member and kick them.")
        .addUserOption((option) =>
            option
                .setName("target")
                .setDescription("The member to ban")
                .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
        .setDMPermission(false),
    async execute(interaction) {
        const target = interaction.options.getUser("target");

        await interaction.reply(
            `**${target.username}** has been kicked by **${interaction.user.username}**`
        );
        await interaction.guild.members.kick(target);
    }
};
