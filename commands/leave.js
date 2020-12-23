module.exports = {
  name: "leave",
  description: "stop the bot and leave the channel",
  async execute(message, args) {
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel)
      return message.channel.send("You need to be in a channel!");

    await voiceChannel.leave();
    await message.channel.send(':monkey: Leaving channel :monkey:')
  },
};
