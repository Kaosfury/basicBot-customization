(function () {

	//Define our function responsible for extending the bot.
	function extend() {
		//If the bot hasn't been loaded properly, try again in 1 second(s).
		if (!window.bot) {
			return setTimeout(extend, 1 * 1000);
		}

		//Precaution to make sure it is assigned properly.
		var bot = window.bot;

		//Load custom settings set below
		bot.retrieveSettings();

		/*
		Extend the bot here, either by calling another function or here directly.
		Model code for a bot command:
	
		bot.commands.commandCommand = {
		command: 'cmd',
		rank: 'user/bouncer/mod/manager',
		type: 'startsWith/exact',
		functionality: function(chat, cmd){
		if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
		if( !bot.commands.executable(this.rank, chat) ) return void (0);
		else{
		//Commands functionality goes here.
		}
		}
		}
		*/

		//bot.commands.baconCommand = {
		//	command: 'bacon', //The command to be called. With the standard command literal this would be: !bacon
		//	rank: 'user', //Minimum user permission to use the command
		//	type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
		//	functionality: function (chat, cmd) {
		//		if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
		//		if (!bot.commands.executable(this.rank, chat)) return void (0);
		//		else {
		//			API.sendChat("/me Bacon!!!");
		//		}
		//	}
		//};
		
		bot.commands.eightBallCommand = {
			command: '8ball', //The command to be called. With the standard command literal this would be: !8ball
			rank: 'user', //Minimum user permission to use the command
			type: 'startsWith',
			functionality: function (chat, cmd) {
				if (!bot.commands.executable(this.rank, chat)) return void (0);
				else {
					var messages = new Array();
					messages[0] = "No.";
					messages[1] = "Not today.";
					messages[2] = "It is decidedly so.";
					messages[3] = "Without a doubt.";
					messages[4] = "Yes definitely.";
					messages[5] = "You may rely on it.";
					messages[6] = "As I see it yes.";
					messages[7] = "Most likely.";
					messages[8] = "Outlook good.";
					messages[10] = "Signs point to yes.";
					messages[11] = "Reply hazy try again.";
					messages[12] = "Ask again later.";
					messages[13] = "Better not tell you now.";
					messages[14] = "Cannot predict now.";
					messages[15] = "Concentrate and ask again.";
					messages[16] = "Don't count on it.";
					messages[17] = "My reply is no.";
					messages[18] = "My sources say no.";
					messages[19] = "Outlook not so good.";
					messages[20] = "Very doubtful.";
					var randomnumber = Math.floor(Math.random() * 21);
					API.sendChat(messages[randomnumber]);
				}
			}
		};
		

		//Load the chat package again to account for any changes
		bot.loadChat();

	}

	//Change the bots default settings and make sure they are loaded on launch

	localStorage.setItem("basicBotsettings", JSON.stringify({
		botName: "kaosIsGoingCrazyBot",
		language: "english",
		chatLink: "https://rawgit.com/kaosfury/basicBot-customization/master/en.json",
		// chatLink: "https://rawgit.com/Yemasthui/basicBot/master/lang/en.json",
		maximumAfk: 120,
		afkRemoval: true,
		maximumDc: 60,
		bouncerPlus: true,
		lockdownEnabled: false,
		lockGuard: false,
		maximumLocktime: 10,
		cycleGuard: true,
		maximumCycletime: 10,
		timeGuard: true,
		maximumSongLength: 10,
		autodisable: true,
		commandCooldown: 30,
		usercommandsEnabled: true,
		lockskipPosition: 1,
		lockskipReasons: [
			["op", "This song is on the OP list. "],
			["history", "This song is in the history. "],
			["sound", "The song you played had bad sound quality or no sound. "],
			["nsfw", "The song you contained was NSFW (image or sound). "],
			["na", "The song you played was not available for some users. "]
		],
		afkpositionCheck: 15,
		afkRankCheck: "ambassador",
		motdEnabled: true,
		motdInterval: 25,
		motd: "Never eat broccoli with a stranger.",
		filterChat: true,
		etaRestriction: false,
		welcome: true,
		opLink: null,
		rulesLink: "http://karlbrowning0.wix.com/theoffice",
		themeLink: null,
		fbLink: "https://www.facebook.com/groups/541526712644855/",
		youtubeLink: null,
		website: "http://karlbrowning0.wix.com/theoffice",
		intervalMessages: [],
		messageInterval: 5,
		songstats: true,
		commandLiteral: "!",
		blacklists: {
			NSFW: "https://rawgit.com/kaosfury/basicBot-customization/master/blacklists/NSFWlist.json",
			OP: "https://rawgit.com/kaosfury/basicBot-customization/master/blacklists/OPlist.json"
		}
	}));

	//Start the bot and extend it when it has loaded.

	$.getScript('https://rawgit.com/Yemasthui/basicBot/master/basicBot.js', extend);

}).call(this);
