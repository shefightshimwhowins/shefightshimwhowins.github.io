var mercyOptions = [
	'He can barely focus so she drags him to his corner and leaves him to relax.',
	'His feet are flailing badly. She takes pity on him and lifts him onto her shoulders and dumps him at his corner.',
	'He\'s struggling to stand up. She pushes him over with her little finger and leaves him to recover for a little while.'
];

var theirOptions = {
	'him': {
		'admire her figure': {
			times: 0,
			chance: 30,
			condition: 1,
			stamina: 3,
			morale: 5,
			future: -30,
			text: [
				'He\'s deeply struck by the beauty of her figure and just stands there to appreciate the incredible femininity of her, from the slenderness of her wrists, arms and neck to her bewildering hourglass figure of her legs going out to her hips before tapering wildly into her waist before being greatly punctuated by the most amazing pair of boobs he has ever seen.',
				'She is a profound overstatement on the idea of what a woman should look like. Her waist has an air of fragility which greatly contrasts with her dazzling hips. Her breasts are absolutely show-stopping.'
			]
		},
		'stare at tits': {
			times: 0,
			chance: 20,
			condition: 0,
			stamina: 4,
			morale: 5,
			future: -20,
			text: [
				'He wonders in the slow rise and fall of her amazing boobs as she breathes before him.',
				'It takes much of his concentration to not simply stare at her tits all the time. So now he finds himself doing so and the world seems to stop as he basks in their magnificence.'
			]
		},
		'admire her face': {
			times: 0,
			chance: 30,
			condition: 0,
			stamina: 3,
			morale: 5,
			future: -30,
			text: [
				'He stares at her face which is almost scarily beautiful, and finds that looking at it almost feels like gazing into the sun.'
			]
		},
		'gentleman': {
			times: 0,
			chance: 250,
			condition: 0,
			stamina: 0,
			morale: 0,
			future: -250,
			text: [
				'"I don\'t want to fight you", he says, "because I don\'t want to end up hurting you." She pauses for a moment..."Listen, buddy", she says, "I can look after myself, and I can more than look after you as you\'re about to find out." He furrows his brows. "Well", he says, "don\'t say I didn\'t warn you."',
				'"I\'m sorry my dear", he says, "but you do realise I am boxing heavyweight champion of the world. I am sure you are a very good for a woman of your size but I don\'t think I can fight you." She grins. "There are two things you need me to tell you", she says, "First, you don\'t have a choice. Second, this is not going to be a fight in any conventional sense of the word."'
			]
		},
		'cocky guy': {
			times: 0,
			chance: 150,
			condition: 0,
			stamina: 0,
			morale: -2,
			future: -150,
			text: [
				'"You\'re just a little girl", he says, "I\'ve beaten men several times your size." She laughs. "They\'re just men though", she says, "and you\'re just an ugly and untalented man that I\'m going to cause a great deal of pain and humiliation."'
			]
		},
		'square up': {
			times: 0,
			chance: 150,
			condition: -5,
			stamina: -25,
			morale: -10,
			future: -150,
			text: [
				'He squares up to her and looms over her svelte frame. His face points directly down as hers up. He holds a most arrogant of expression while his body is profoundly more commanding in every physical dimension. She stares up with indifference and raises her eyebrows. "I think it\'s about time I teach you some manners", she says, and pushes forward with her fist into his stomach. Immediately for him, the panic sets in and he feels like he can\'t breathe. She puts her palm on his face and pushes him to the ground. He sheepishly rises looking worriedly at her.'
			]
		},
		'hook connect': {
			times: 0,
			chance: 20,
			condition: -3,
			stamina: -5,
			morale: -3,
			future: -1,
			text: [
				'He powers a hook onto the side of her head and momentarily feels success until his hand connects. It stops dead and his wrist doubles back onto itself. She laughs at his misfortune.',
				'He hooks her on the nose but it merely glances and causes nothing of any damage, except to his wrist joint and knuckles.'
			]
		},
		'hook dodged': {
			times: 0,
			chance: 30,
			condition: 0,
			stamina: -3,
			morale: -3,
			future: -3,
			text: [
				'He powers a hook towards her flank but is dumbfounded as she steps back and watches his hand sail into thin air.',
				'He launches a hook at her head but she\'s much too fast for him.'
			]
		},
		'head jab connect': {
			times: 0,
			chance: 10,
			condition: -1,
			stamina: -5,
			morale: -2,
			future: -1,
			text: [
				'He tries a jab to her face. She only reacts to smirk at him.',
				'He glides forward with a jab onto her cheek. He looks for the damage to her face but there is only a smile.'
			]
		},
		'body jab dodged': {
			times: 0,
			chance: 30,
			condition: 0,
			stamina: -2,
			morale: -2,
			future: -7,
			text: [
				'He tries the most simple of jabs into her stomach. She waits until his fist is nearly touching her before dodging aside. He can\'t quite fathom how she moves so fast.'
			]
		},
		'stomach jab': {
			times: 0,
			chance: 120,
			condition: -2,
			stamina: -2,
			morale: -2,
			future: -60,
			text: [
				'He lightly punches at her stomach. Her abs initially yield but his hand stops dead. He hears her chuckle as he\'s surprised by how much his hand hurts.'
			]
		},
		'chin uppercut connect': {
			times: 0,
			chance: 5,
			condition: -7,
			stamina: -5,
			morale: -5,
			future: 0,
			text: [
				'He winds up a huge uppercut and powers it up onto her chin. The pain in his hand feels like it might be on a fire. She stands there unmoved and unfazed.'
			]
		},
		'rest on ropes': {
			times: 0,
			chance: 0,
			condition: 5,
			stamina: 10,
			morale: -2,
			future: -7,
			text: [
				'He leans against the ropes and looks across at her. She looks fresher than when they started, and considerably smugger.'
			]
		},
		'run away': {
			times: 0,
			chance: 3,
			condition: 0,
			stamina: -20,
			morale: -10,
			future: 0,
			text: [
				'He runs away from her around the ring. She slowly follows him with great confidence.'
			]
		},
		'grab wrists': {
			times: 0,
			chance: 4,
			condition: 0,
			stamina: -20,
			morale: -10,
			future: 0,
			text: [
				'He grabs her wrists and pushes down with all his great strength. Sadly for him he can\'t budge her arms an inch. She casually pushes him to the floor.'
			]
		},
		'run up punch face': {
			times: 0,
			chance: 4,
			condition: -15,
			stamina: -10,
			morale: -10,
			future: -3,
			text: [
				'He takes a run up at her and wildly swings for her face. The punch connects but only makes her smile widely, and makes his hand hurt.'
			]
		},
		'run up tackle': {
			times: 0,
			chance: 3,
			condition: -15,
			stamina: -15,
			morale: -10,
			future: -3,
			text: [
				'He wanders to the opposite side of the ring to plot what to do next and looks back over to her. She crosses her feet and places her hands on her hips. It looks like his best chance to take her down so he sets off at a sprint. As her reaches her he lowers his shoulder and powers his whole body weight into her abs. The impact is sudden and severe as his body contorts to the shape of hers like the crumple zone of a car to a tree. He lies on the floor in agony at her feet. She grabs him by the throat to help him up.'
			]
		},
		'strangle': {
			times: 0,
			chance: 2,
			condition: -3,
			stamina: -10,
			morale: -10,
			future: -1,
			text: [
				'He grabs her by her slender throat with both of his bear-like hands. He squeezes with all his might but she just stands there, staring deep into his eyes. She grabs his wrists and as she squeezes he feels a profound pain and involuntarily releases his grasp. She throws his arms by his side and shakes her head.'
			]
		},
		'try to retire': {
			times: 0,
			chance: 0,
			condition: 0,
			stamina: -10,
			morale: -100,
			future: 0,
			text: [
				'He signals to get the referees attention, who approaches him. "I want to forefeit", he says. She appears before them and stands there smirking. "Get the fuck out of here", she says. The fighter feels relief until he realises she\'s pointing at the referee, who duly follows her wish. "That was a very cowardly thing to try", she says, "and I really don\'t like cowards."'
			]
		},
		'kick her': {
			times: 0,
			chance: 1,
			condition: -2,
			stamina: -4,
			morale: -7,
			future: 0,
			text: [
				'He kicks forward into her stomach but only succeeds in kicking himself onto the floor.'
			]
		}
	},
	her: {
		'kiss': {
			times: 0,
			chance: 5,
			condition: 500,
			stamina: 500,
			morale: 500,
			future: -5,
			text: [
				'She darts forward. He keeps his arms up in defence for all of a split-second until she parts them with a terrifying ease. She stands up on tip toes and presses close into him, her femininity enveloped in his huge masculine frame. They lock eye contact and she is devouring him with her gaze. She tenderly kisses him as he wraps his arms around her and a little while later he feels a new man.'
			]
		},
		'squares up': {
			times: 0,
			chance: 30,
			condition: 0,
			stamina: 2,
			morale: -2,
			future: -30,
			text: [
				'She stands before him and glares up into his eyes with extreme confidence. He towers over her in height and in stature, but is put on edge by her show of arrogance and struggles for concentration as her boobs press up against him.'
			]
		},
		'jab face': {
			times: 0,
			chance: 20,
			condition: -20,
			stamina: -15,
			morale: -10,
			future: 0,
			text: [
				'She casually jabs his face and the power of her punch takes him by surprise, and he stumbles backwards onto the ropes.'
			]
		},
		'bitch slap face': {
			times: 0,
			chance: 10,
			condition: -20,
			stamina: -5,
			morale: -10,
			future: 0,
			text: [
				'With great speed, she bitch slaps him to the deck. He gingerly returns to his feet after a few seconds with his feet and eyes heading in different directions.'
			]
		}, 
		'flick stomach': {
			times: 0,
			chance: 3,
			condition: -5,
			stamina: -45,
			morale: -30,
			future: 0,
			text: [
				'Her hand races towards his stomach at harrowing speed but stops just before it. He flinches and looks down just in time to see her flick him. He\'s well and truly winded, and doubles over feeling like he might die. He feels her hand brushing his hair like he\'s her pet.'
			]
		}, 
		'gloat': {
			times: 0,
			chance: 2,
			condition: 0,
			stamina: 2,
			morale: -10,
			future: 1,
			text: [
				'"I can\'t believe you\'ve boxed before," she says, "and I\'m amazed that you thought you could beat me."'
			]
		}, 
		'waist lift': {
			times: 0,
			chance: 3,
			condition: -20,
			stamina: -10,
			morale: -20,
			future: -1,
			text: [
				'She grabs the waistband of his shorts with one of her seemingly delicate hands. They make eye contact as she powerfully pulls him towards her. "Going up", she says and lifts him high above her head. He kicks out wildly and she drops him back-first onto the mat.'
			]
		}, 
		'throw him': {
			times: 0,
			chance: 5,
			condition: -30,
			stamina: -10,
			morale: -20,
			future: -2,
			text: [
				'She grabs him under the shoulders and hurls him to the other side of the ring. The power of her arms has an inevitablity about them that feels completely unflinching. He\'s stunned by how far she has thrown him when he gets up.'
			]
		}, 
		'pin him': {
			times: 0,
			chance: 4,
			condition: -10,
			stamina: -40,
			morale: -20,
			future: -3,
			text: [
				'She slowly and nonchalantly pushes him to the floor with one hand. He makes to get up but before he knows it she is sat on his stomach with her legs straddling him. He tries to push her back but it feels like he may as well be pushing a wall. He feels her hands take each of his and push his arms back. She smiles widely as he struggles with all his will while she slowly powers his arms back. He would usually enjoy in the fantastic view of her looming over him, but there\'s something about this situation which has him trying to keep his pride. Eventually she gets off him and he sheepishly gets up.'
			]
		}, 
		'neck grab': {
			times: 0,
			chance: 4,
			condition: -10,
			stamina: -25,
			morale: -15,
			future: -2,
			text: [
				'She grabs him by the neck and squeezes until his legs give way and she lets him fall to his knees. He stares back at her from her feet upwards and is all but overwhelmed by her intoxicating hourglass figure and the profound confidence of her gaze. He knows at this moment he is in desperate trouble and as he claws at her slender wrist he can see no way out. He is hers and they both know it. He feels his vision closing in but just before falling unconscious she releases him and steps back.'
			]
		},
		'headlock': {
			times: 0,
			chance: 4,
			condition: -10,
			stamina: -40,
			morale: -15,
			future: -2,
			text: [
				'He bobs his head around in the hope it will keep him safe, but with one stray movement to the side he finds her arm around his head, and before he knows it she has him bent over double in a headlock. He claws at her slender arm with his hands but she may as well be set in stone. "Does this feel emasculating?", she asks. Before he can answer she has cast him away on the floor and walks away with her back to him.'
			]
		},
		'arm flex hold': {
			times: 0,
			chance: 3,
			condition: -10,
			stamina: -20,
			morale: -20,
			future: -3,
			text: [
				'He sees her start towards him and he tries to react but before he knows it she has pulled his head down to between her forearm and bicep. She starts flexing her arm and he feels the weight of the world bearing down into his neck from her modest and toned arm. "If you can stay conscious", she says, "for ten seconds, then I will let you free." He gazes wide eyed as he feels the strength drifting from his body and the pain becoming insurmountable. He blinks and he hears her giggle playfully. He falls limp on her arm and she sighs in excitement before loosening her grip. "I\'m used to guys not lasting very long with me", she says, "but three seconds? Wow!" He awakes lying on his back with her petite frame towering over him.'
			]
		},
		'boob play': {
			times: 0,
			chance: 10,
			condition: 20,
			stamina: 10,
			morale: 50,
			future: -5,
			text: [
				'She notices him staring at her tits so she presses them together between her arms. He can barely believe how fantastic they look.'
			]
		},
		'fast shadow boxing': {
			times: 0,
			chance: 20,
			condition: 0,
			stamina: 0,
			morale: -20,
			future: -20,
			text: [
				'She stands just a little away from him and starts to shadow box. He stares at her body which is both a thing of magnificent beauty but also seemingly all at one in her physical endeavours. He can\'t help noticing she seems to be speeding up. Her hands reach the point of almost being a blur as her footwork and body in general gracefully and seamlessly switch between different techniques. Just the sound of her blows striking the air at such pace leave him deeply worried.'
			]
		},
		'boob press face': {
			times: 0,
			chance: 5,
			condition: 40,
			stamina: -5,
			morale: 500,
			future: -5,
			text: [
				'He stares at her boobs and it certainly doesn\'t escape her attention. She tip toes up to him and slowly brushes her hands against his chest. His heartrate increases as one of her arms slides to the back of his neck. She pulls him towards her face first and like a spaceship approaching two planets his destination is set. He wonders whether to resist but it\'s pretty clear he can\'t. She buries his head in her enormous boobs and he sighs in pure joy. By the time she releases him, he\'s all but forgotten about where he is and what\'s going on.'
			]
		},
		'bear hug': {
			times: 0,
			chance: 8,
			condition: -20,
			stamina: -40,
			morale: 5,
			future: -4,
			text: [
				'She lurches forward and grabs him around the stomach with both arms. She pins him against her and lifts him off the ground. The air leaves his lungs as she gradually tightens her grasp. He struggles but feels conflicted with how there\'s something undeniably sexy about her squeezing the life out of him. He pushes her shoulders to try to break free but catches her biting her lip in enjoyment.'
			]
		},
		'top off': {
			times: 0,
			chance: 8,
			condition: 2,
			stamina: 3,
			morale: 1000,
			future: -8,
			text: [
				'He watches her wander to a corner of the ring with her back to him. She pauses and takes up the bottom of her top in her hands, and in one fluid motion tears her top off. She turns to face him and his mouth very nearly drops to the floor.'
			]
		},
		'shorts off': {
			times: 0,
			chance: 5,
			condition: 0,
			stamina: 2,
			morale: 1000,
			future: -5,
			text: [
				'She grabs his hands and slips them under her waistband. He stares into the small gap at the top of her thighs. "Take them off!", she says. He needs no second invitation and promptly pulls down on her shorts as if his life depends on it. But something is wrong. They feel set in place. "What the fuck dude?", she says. She grabs his wrists and casually throws his arms away. "Guess I\'ll have to do it myself", she says, and places her thumbs under her shorts at the hips and peels her shorts off. They fall to the floor and he devours the view.'
			]
		},
		'flex arm': {
			times: 0,
			chance: 20,
			condition: 0,
			stamina: 2,
			morale: -20,
			future: -20,
			text: [
				'She holds up her arm before him ready to flex. "Feel this", she says. He tentatively reaches for her bicep and squeezes down. It feels tender as his hand nearly encircles it. He notices the tone of her arm gradually harden as she flexes. At the peak of her flex her arm feels completely free of any place it can yield, and despite the slender size and shape he is quite intimidated.'
			]
		}
	}
};

var theirStatus = {
	'him': {
		condition: 100,
		stamina: 100,
		morale: 100
	},
	'her': {
		condition: 10,
		stamina: 25,
		morale: 50
	}
}	

var conditionMultipliers = {
	'him': 0.5,
	'her': 0.1
}
