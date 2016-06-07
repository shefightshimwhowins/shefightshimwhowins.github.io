$(document).ready(function() {
	var shuffleArray = function(array) {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	}

	mercyOptions = shuffleArray(mercyOptions);
	var shuffleOptions = function(index, value) {
		if(value.text.length > 1) {
			shuffleArray(value.text);
		}
	}
	$.each(theirOptions['him'], shuffleOptions);
	$.each(theirOptions['her'], shuffleOptions);

	var timeBetweenGoes = 5000;
	var intervalSet = false;
	var interval;
	var chanceOfHerGoing = 0.01;
	var round = 1;
	var seconds = 180;
	var nextRound = false;
	var lastChoice = false;

	var nextGo = function() {
		if(seconds == 0 && !nextRound) {
			endOfRound();
		} else if(nextRound) {
			whatHappened('He rests in his corner and looks on as she poses towards the crowd.');
			round++
			jQuery('#round').text('Round ' + round + ' of 12');
			jQuery('#time').text('3:00 left');
			seconds = 180;
			nextRound = false;

			var improvedCondition = (1 + Math.random() * 0.2) * theirStatus['him'].condition;
			theirStatus['him'].condition = improvedCondition > 100 ? 100 : parseInt(improvedCondition);

			var improvedStamina = (1 + Math.random() * 0.5) * theirStatus['him'].stamina;
			theirStatus['him'].stamina = improvedStamina > 100 ? 100 : parseInt(improvedStamina + 30);

			var improvedMorale = (1 + Math.random() * 0.1) * theirStatus['him'].morale;
			theirStatus['him'].morale = improvedMorale > 100 ? 100 : parseInt(improvedMorale);

			updateStatusDisplay();

			conditionMultipliers['her'] += 0.1;
		} else if((30 - round * 2) > theirStatus['him'].condition) {
			if(round < 12) {
				showMercy();
			} else {
				knockHimOut();
			}
		} else {
			if(chanceOfHerGoing > Math.random()) {
				sheGoes();
			} else {
				heGoes();
			}
			moreTimeElapsed();
		}
	}

	var knockHimOut = function() {
		var conditionChange = 0 - theirStatus['him'].condition;
		var staminaChange = 0 - theirStatus['him'].stamina;
		var moraleChange = 0 - theirStatus['him'].morale;
		theirStatus['him'].condition = theirStatus['him'].stamina = theirStatus['him'].morale = 0;
		updateStatusDisplay();
		whatHappened('"I\'m bored with you", she says. He gulps and tries to amble backwards but he knows what is coming. "Get the fuck out of my ring", she says. She powers a punch onto his face with such force to propel him several yards out and away. He lies there in intense pain but can faintly hear her laughing. "Pathetic", she says to herself, and places her hands on her hips.<div class="changes"><span class="negative">Condition: ' + conditionChange + '</span><span class="negative">Stamina: ' + staminaChange + '</span><span class="negative">Morale: ' + moraleChange + '</span></div>');
		autoPlay(false);
		$('#controls .btn').prop('disabled', true);
		moreTimeElapsed();
	}

	var updateStatusDisplay = function() {
		updateStatusText('him', theirStatus['him'].condition, theirStatus['him'].stamina, theirStatus['him'].morale);
		updateAttributeBackground('him', 'condition', theirStatus['him'].condition);
		updateAttributeBackground('him', 'stamina', theirStatus['him'].stamina);
		updateAttributeBackground('him', 'morale', theirStatus['him'].morale);
	}

	var moreTimeElapsed = function() {
		var secondsElapsed = 8 + Math.random() * 12;
		seconds -= parseInt(secondsElapsed);
		if(seconds < 0) seconds = 0;
		var minutes = Math.floor(seconds / 60);
		var secondsWithoutMinutes = seconds % 60;
		var extraZero;
		if(secondsWithoutMinutes < 10) extraZero = '0';
		else extraZero = '';
		$('#time').text(minutes + ':' + extraZero + seconds % 60 + ' left');
	}

	var endOfRound = function() {		
		var endOfRoundMessage = 'End of round ' + round + '. ';

		if(theirStatus['him'].condition < 20) endOfRoundMessage += 'He\'s happy to still be alive.';
		else if(theirStatus['him'].morale < 10) endOfRoundMessage += 'She mightn\'t have destroyed him pysically - yet - but mentally he is done.';
		else if(theirStatus['him'].stamina < 20) endOfRoundMessage += 'He\'s nearly exhausted. She looks right as rain.';
		else if(theirStatus['him'].condition < 40) endOfRoundMessage += 'He\'s just about hanging in there. She looks as if she\'s done nothing.';
		else if(theirStatus['him'].stamina < 40) endOfRoundMessage += 'He\'s finding it extremely tiring. She\'s not, at all.';
		else if(theirStatus['him'].morale < 50) endOfRoundMessage += 'She\'s humiliating him.';
		else endOfRoundMessage += 'She\'s proving a much more formidable opponent than expected.'

		whatHappened(endOfRoundMessage);
		nextRound = true;
	}

	var heGoes = function() {
		chanceOfHerGoing *= 1.1;
		chooseOption('him');
	}

	var sheGoes = function() {
		chanceOfHerGoing /= 1.09;
		chooseOption('her');
	}

	var showMercy = function() {
		var conditionImproved = parseInt(1 + Math.random() * 15);
		var staminaImproved = parseInt(1 + Math.random() * 10);

		theirStatus['him'].condition += conditionImproved;	
		theirStatus['him'].stamina += staminaImproved;
		updateStatusText('him', theirStatus['him'].condition, theirStatus['him'].stamina, theirStatus['him'].morale);
		updateAttributeBackground('him', 'condition', theirStatus['him'].condition);
		updateAttributeBackground('him', 'stamina', theirStatus['him'].stamina);
		updateAttributeBackground('him', 'morale', theirStatus['him'].morale);

		var chance = Math.floor(Math.random() * mercyOptions.length);
		whatHappened(mercyOptions[chance] + '<div class="changes"><span class="positive">Condition: ' + conditionImproved + '</span><span class="positive">Stamina: ' + staminaImproved + '</span></div>');

		seconds = 0;
		$('#time').text('0:00 left');
	}

	var chooseOption = function(player) {
		var totalChances = getTotalChances(player);
		var optionValue = Math.random() * totalChances;
		chosenOption = getOptionInfo(player, optionValue);
		theirOptions[player][chosenOption].times++;
		theirOptions[player][chosenOption].chance += theirOptions[player][chosenOption].future;

		theirOptions['him']['gentleman'].chance = 0;
		theirOptions['him']['cocky guy'].chance = 0;
		theirOptions['him']['square up'].chance = 0;

		var conditionFormulas = {
			'him': (theirOptions[player][chosenOption].condition / 2 + theirOptions[player][chosenOption].condition * Math.random() / 2) * conditionMultipliers[player],
			'her': Math.abs(theirOptions[player][chosenOption].condition)
		}
		var conditions = {
			'him': updateAttributeValue('him', 'condition', conditionFormulas['him']),
			'her': updateAttributeValue('her', 'condition', conditionFormulas['her'])
		}

		var staminaFormulas = {
			'him': theirOptions[player][chosenOption].stamina * Math.random(),
			get 'her' () {
				return 3 + Math.abs(this['him'] * Math.random())
			}
		}
		var staminas = {
			'him': updateAttributeValue('him', 'stamina', staminaFormulas['him']),
			'her': updateAttributeValue('her', 'stamina', staminaFormulas['her'])
		}

		var moraleFormulas = {
			'him': theirOptions[player][chosenOption].morale * Math.random() - 1,
			get 'her' () {
				return Math.abs(this['him'] * Math.random())
			}
		}
		var morales = {
			'him': updateAttributeValue('him', 'morale', moraleFormulas['him']),
			'her': updateAttributeValue('her', 'morale', moraleFormulas['her'])
		}

		updateStatusText('him', conditions['him'].value, staminas['him'].value, morales['him'].value);
		updateStatusText('her', conditions['her'].value, staminas['her'].value, morales['her'].value);

		var conditionChangeClass = "hidden", staminaChangeClass = "hidden", moraleChangeClass = "hidden";
		if(conditions['him'].change > 0) {
			conditionChangeClass = "positive";
		} else if(conditions['him'].change < 0) {
			conditionChangeClass = "negative";
		}
		if(staminas['him'].change > 0) {
			staminaChangeClass = "positive";
		} else if(staminas['him'].change < 0) {
			staminaChangeClass = "negative";
		}
		if(morales['him'].change > 0) {
			moraleChangeClass = "positive";
		} else if(morales['him'].change < 0) {
			moraleChangeClass = "negative";
		}

		var actionArray = theirOptions[player][chosenOption].text;
		var action = actionArray[0];
		if(actionArray.length > 1) {
			theirOptions[player][chosenOption].text.push(theirOptions[player][chosenOption].text.shift());
		}
		var happenedText = action + '<div class="changes"><span class="' + conditionChangeClass + '">C:' + conditions['him'].change + '</span><span class="' + staminaChangeClass + '">S:' + staminas['him'].change + '</span><span class="' + moraleChangeClass + '">M:' + morales['him'].change + '</span></div>';
		whatHappened(happenedText);

		if(player == 'him') {
			conditionMultipliers['him'] *= 1.01;
			conditionMultipliers['her'] *= 1.01;
		}

		ga('send', 'event', player, chosenOption);
	};

	var updateAttributeValue = function(player, attribute, formulaResult) {
		console.log(player, attribute, formulaResult);
		var previousAttributeValue = theirStatus[player][attribute];
		if(player == 'her') {
			if(previousAttributeValue < 100) {
				if(formulaResult > 0 && attribute == 'condition' || attribute == 'morale') {
					if(previousAttributeValue < 50) {
						formulaResult = 70 + formulaResult + Math.random() * 40;
					} else {
						formulaResult = 20 + formulaResult;
					}
				}
			} else if(previousAttributeValue > 140) {
				formulaResult = Math.sqrt(formulaResult);
			} else {
				formulaResult *= 3;
			}
		}
		var attributeValue = theirStatus[player][attribute] + parseInt(formulaResult.toFixed(0));
		if(attributeValue < 0) attributeValue = 0;
		if(attributeValue > 100 && player == 'him') attributeValue = 100;
		attributeValueChange = attributeValue - previousAttributeValue;
		updateAttributeBackground(player, attribute, attributeValue);
		return {
			value: attributeValue,
			change: attributeValueChange
		};
	}

	var getAttributeTextDescription = function(value) {
		var description;

		if(value > 240) {
			description = 'god like';
		} else if(value > 220) {
			description = 'superhuman';
		} else if(value > 200) {
			description = 'terrifying';
		} else if(value > 180) {
			description = 'scary';
		} else if(value > 160) {
			description = 'bewildering';
		} else if(value > 140) {
			description = 'ridiculous';
		} else if(value > 120) {
			description = 'incredible';
		} else if(value > 100) {
			description = 'amazing';
		} else if(value > 80) {
			description = 'excellent';
		} else if(value > 60) {
			description = 'good';
		} else if(value > 40) {
			description = 'okay';
		} else if(value > 20) {
			description = 'not great';
		} else {
			description = 'bad';
		}
		return ' - ' + description;
	}

	var updateStatusText = function(player, condition, stamina, morale) {
		var conditionText, staminaText, moraleText;

		theirStatus[player].condition = condition;
		if(condition >= 240) conditionText = '???';
		else conditionText = condition + '%';
		$('#' + player + ' .condition .description').html(getAttributeTextDescription(condition));
		$('#' + player + ' .condition .value').html(conditionText);

		theirStatus[player].stamina = stamina;
		if(stamina >= 240) staminaText = '???';
		else staminaText = stamina + '%';
		$('#' + player + ' .stamina .description').html(getAttributeTextDescription(stamina));
		$('#' + player + ' .stamina .value').html(staminaText);

		theirStatus[player].morale = morale;
		if(morale >= 240) moraleText = '???';
		else moraleText = morale + '%';
		$('#' + player + ' .morale .description').html(getAttributeTextDescription(morale));
		$('#' + player + ' .morale .value').html(moraleText);
	}

	var updateAttributeBackground = function(player, attribute, value) {
		var attributeClass;

		if(value > 240) {
			attributeClass = 'godlike';
		} else if(value > 220) {
			attributeClass = 'superhuman';
		} else if(value > 200) {
			attributeClass = 'terrifying';
		} else if(value > 180) {
			attributeClass = 'scary';
		} else if(value > 160) {
			attributeClass = 'bewildering';
		} else if(value > 140) {
			attributeClass = 'ridiculous';
		} else if(value > 120) {
			attributeClass = 'incredible';
		} else if(value > 100) {
			attributeClass = 'amazing';
		} else if(value > 80) {
			attributeClass = 'excellent';
		} else if(value > 60) {
			attributeClass = 'good';
		} else if(value > 40) {
			attributeClass = 'ok';
		} else if(value > 20) {
			attributeClass = 'not-great';
		} else {
			attributeClass = 'bad';
		}
		$('#' + player + ' .' + attribute + ' div').removeClass().addClass(attributeClass);
	}

	var getTotalChances = function(player) {
		var totalChances = 0;
		$.each(theirOptions[player], function(index, value) {
			totalChances += this.chance;
		});
		return totalChances;
	}

	var getOptionInfo = function(player, optionValue) {
		var findOption = 0;
		var option;
		$.each(theirOptions[player], function(index, value) {
			findOption += this.chance;
			if(optionValue < findOption) {
				option = index;
				return false;
			}
		});
		return option;
	}

	var whatHappened = function(happening, condition, stamina, morale) {
		$('#happenings').prepend('<div class="happening">' + happening + '</div>');
	}

	var autoPlay = function(auto) {
		if(typeof(auto) === 'undefined') auto = true;
		if(auto) {
			if(!intervalSet) {
				interval = setInterval(nextGo, timeBetweenGoes);
				intervalSet = true;				
				$('#playPause').text('Pause').addClass('btn-danger').removeClass('btn-success');
				$('#faster').prop('disabled', false);
				$('#slower').prop('disabled', false);
				$('#next').prop('disabled', true);
			}
		} else {
			if(intervalSet) {
				clearInterval(interval);
				intervalSet = false;
				$('#playPause').text('Play').removeClass('btn-danger').addClass('btn-success');
				$('#faster').prop('disabled', true);
				$('#slower').prop('disabled', true);
				$('#next').prop('disabled', false);
			}
		}
	}

	var timeBetweenGoesChanged = function() {
		autoPlay(false);
		autoPlay();
	}

	$('#playPause').on('click', function() {
		if(!intervalSet) {
			nextGo();
			autoPlay();
		} else {
			autoPlay(false);
		}
	});
	$('#faster').on('click', function() {
		nextGo();
		if(timeBetweenGoes > 1000) {
			timeBetweenGoes -= 1000;
			timeBetweenGoesChanged();
		}
	});
	$('#slower').on('click', function() {
		timeBetweenGoes += 1000;
		timeBetweenGoesChanged();
	});
	$('#next').on('click', nextGo);
});