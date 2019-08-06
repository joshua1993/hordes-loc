import { rndArray } from 'core/math/rnd.js'

// Words for the random party link generator
// the format is "adjective + noun + of + goal"
const adjectives = ['epic', 'rare', 'common', 'trashy', 'magical', 'thunderous', 'insane', 'rusty', 'smelly',
  'hilarious', 'sad', 'burning', 'rotten', 'smelly', 'frozen', 'fresh', 'fast', 'slow', 'mean', 'smart', 'cold',
  'broken', 'refurbished', 'repaired', 'spooky', 'shiny', 'glowing', 'dead', 'furious', 'glorious', 'impish',
  'orcish', 'golden', 'forsaken', 'ghoulish', 'terrifying', 'radiant', 'dwarfish', 'moisturising', 'fiery',
  'sparkling', 'delicious', 'delirious', 'daydreaming', 'dreaming', 'thieving', 'generous', 'royal', 'appetizing',
  'wet', 'valiant', 'orange', 'spurting', 'deep', 'lucid', 'putrid', 'pulpous', 'legendary', 'vegan', 'vegetarian',
  'ignorant', 'divine', 'eccentric', 'gloomy', 'funny', 'safe', 'insured', 'cultist', 'washed', 'mighty', 'depressed',
  'wild', 'hallowed', 'heavy', 'ghostly', 'sly', 'sneaky', 'flooded', 'waterlogged', 'stretchy', 'dodgy', 'slippery',
  'electrical', 'mature', 'immature', 'old', 'new', 'young', 'ancient', 'elderly', 'pythonic', 'poetic', 'oily', 'ageing',
  'growing', 'vile', 'disgusting', 'lovely', 'swampy', 'holy', 'radioactive', 'evolved', 'speedy', 'shimmering', 'drifting',
  'mini', 'bleeding', 'poisoned', 'rough', 'crude', 'moisturized', 'bright', 'pleasing', 'hypocritical', 'pleasing',
  'demented', 'possessed', 'diabolical', 'teleporting', 'tasty', 'doomed', 'scary', 'ghastly', 'tailored', 'needy',
  'oblivious', 'imperial', 'lethal', 'marshy', 'noble', 'nostalgic', 'radical', 'quiet', 'mutated', 'realistic',
  'augmeneted', 'embarrassing', 'humiliating', 'dubious', 'cruel', 'cunning', 'glamorous', 'accidental', 'intricate',
  'jolly', 'stereotypical', 'crazy', 'devious', 'religious', 'disordered', 'drunk', 'elusive', 'elite', 'elven', 'erratic',
  'hated', 'hybrid', 'immortal', 'lucrative', 'ragged', 'illegal', 'sceptical', 'intellegent', 'accurate', 'charismatic',
  'agile', 'strong', 'stealthy', 'deadly', 'experienced', 'abnormal', 'abominable', 'flying', 'brave', 'seasoned', 'sturdy',
  'corrupted', 'tarnished', 'paranormal', 'decaying', 'soothing', 'smiling', 'dying', 'butchering', 'smoking', 'grand',
  'neon', 'spritual', 'godly', 'truthful', 'untruthful', 'forgiving', 'pixelated', 'sinful', 'advanced', 'ivory',
  'polished', 'round', 'tangled', 'hexed', 'charming', 'gilled', 'hairy', 'berserk', 'failing', 'disgraceful', 'ultimate',
  'virtual', 'cold', 'white', 'resurrected', 'peaceful', 'disguised', 'demonic', 'devoted', 'confidential', 'competitive',
  'charred', 'fortunate', 'overpowered', 'murderous', 'dwarven', 'precise', 'victorious', 'violent', 'bloody', 'freezing',
  'bland', 'inky', 'mischievous', 'fishy', 'disintegrating', 'snarling', 'grunting', 'dehydrated', 'famished', 'timid',
  'lone', 'invisible', 'infected', 'venemous', 'mental', 'detremental', 'disfunctional', 'stinging', 'slicing', 'piercing',
  'piercing', 'poking', 'glancing', 'lazy', 'hot', 'warm', 'melting', 'abusive', 'acrobatic', 'accursed', 'bewitched',
  'obedient', 'offensive', 'pale', 'rasping', 'singing', 'whispering', 'revolting', 'rickety', 'ripe', 'rigid', 'romantic',
  'rooting', 'seething', 'sickly', 'serpentine', 'senseless', 'shabby', 'shaggy', 'shambolic', 'shillyshallying', 'slim',
  'sleek', 'skulking', 'smacking', 'spellbound', 'explosive', 'fantastic', 'ferocious', 'gaudy', 'glazed', 'hazardous',
  'idiotic', 'lame', 'ingeneous', 'puking', 'loud', 'evil', 'sweaty', 'faithful', 'unfaithful', 'traditional', 'modern',
  'vampiric', 'silk', 'verocious', 'vigorous', 'yelping', 'huffy', 'humorous', 'medieval', 'mesmeric', 'hypnotic',
  'metallic', 'secretive', 'homicidal', 'honorary', 'lusty', 'luckless', 'praying', 'remunerative', 'frosted', 'blissful',
  'carnivorous', 'chaotic', 'hollow', 'backstabbing', 'naive', 'narky', 'screeching', 'aquatic', 'swift', 'misfit', 'oozing',
  'ratty', 'lithe', 'maleable', 'stingy', 'tipsy', 'zany', 'disused', 'disturbing', 'cosmic', 'drifted', 'catastrophic',
  'priceless', 'plagiarizing', 'loathing', 'lugubrious', 'satanic', 'hallucinogenic', 'uneducated', 'tribal', 'vulgar',
  'thieving', 'farcical', 'falsifying', 'azure', 'albino', 'alien', 'agitating', 'galant', 'glossy', 'globular', 'searing',
  'flaming', 'frosty', 'herculean', 'irksome', 'vulnerable', 'meritiorious', 'optimistic', 'pessemistic', 'possessive',
  'slapdash', 'slav', 'terrifying', 'tender', 'raw', 'weedy', 'ironic', 'fake', 'lavish', 'abandoned', 'emetic', 'mocking',
  'surreal', 'arctic', 'poignant', 'stalking', 'empowering', 'coldforged', 'tattered', 'predestined', 'enigmatic', 'wrathful',
  'hyperdimensional', 'corrosive', 'bootleg', 'concilatory', 'benificial', 'atrocious', 'laughable', 'luscious', 'faceted',
  'mercurial', 'mellifluous', 'pernicious', 'phenomenal', 'soulful', 'soulless', 'deathless', 'damaged', 'imperishable',
  'relentless', 'callous', 'remorseless', 'shrinking', 'expanding', 'scruffy', 'suptuous', 'gorgeous', 'opulent', 'flourishing',
  'exaggerated', 'evasive', 'shifty', 'appealing', 'cheap', 'expensive', 'benevolent', 'liberal', 'virtuous', 'frustrating',
  'ruling', 'controlling', 'supreme', 'inferior', 'superior', 'flammable', 'practical', 'frenzied', 'bloodhungry', 'starving',
  'malnourished', 'frightening', 'alarming', 'startling', 'horrifying', 'menacing', 'scary', 'dazzling', 'glaring', 'flagrant',
  'luxurious', 'diamond', 'splendid', 'plush', 'magnificent', 'ragged', 'tatty', 'rundown', 'weedy', 'jagged', 'serrated',
  'rupturing', 'tearing', 'bursting', 'breaching', 'seperating', 'severing', 'sinister', 'dusty', 'wartorn', 'utopian',
  'striking', 'loathing', 'officious', 'gilded', 'unbelievable', 'solemn', 'effective', 'eliminating', 'furry', 'fuzzy',
  'fluffy', 'fizzy', 'glinting', 'glistening', 'glittery', 'gloating', 'joyless', 'depressing', 'powerful', 'incurable',
  'indecipherable', 'indecorous', 'inappropiate', 'melodic', 'stlited', 'artificial', 'dangerous', 'awkward', 'awful',
  'marauding', 'spectacular', 'beatific', 'beautiful', 'gullible', 'highbrow', 'lowbrow', 'hibernating', 'sleeping', 'hideous',
  'humble', 'humid', 'itchy', 'jerky', 'jesting', 'jejune', 'jeeming', 'kidnapping', 'abducting', 'motionless', 'motley',
  'grim', 'poised', 'rudimentary', 'emerald', 'eminent', 'famous', 'innocuous', 'engraved', 'engrossing', 'engulfing',
  'aquatic', 'hardcore', 'haughty', 'scornful', 'ingenius', 'parasitic', 'paroxysmal', 'parrying', 'problematic', 'sane',
  'swearing', 'swingeing', 'swinging', 'tangible', 'tawdry', 'thievish', 'prosaic', 'placid', 'oracular', 'omniscient', 'oniony',
  'natty', 'nepharious', 'turgid', 'denatured', 'natural', 'bad', 'good', 'devilish', 'poisonous', 'quirky', 'regal',
  'remarkable', 'scaly', 'icy', 'snowy', 'spherical', 'massive', 'red', 'blue', 'cyan', 'mystical', 'stinking', 'puzzling',
  'small', 'tiny', 'large', 'big', 'dark', 'woody', 'peaceful', 'mad', 'mature', 'sympathetic', 'rigid', 'kind', 'intrepid',
  'huge', 'noisy', 'think']

const nouns = ['sword', 'axe', 'potion', 'hammer', 'mace', 'coin', 'bag', 'archer', 'warrior', 'mage', 'unicorn',
  'deer', 'dog', 'cat', 'staff', 'bear', 'banana', 'apple', 'boots', 'armor', 'helmet', 'tower', 'forge', 'castle',
  'town', 'smith', 'craftsman', 'bow', 'wolf', 'pear', 'orge', 'goblin', 'orc', 'skeleton', 'spider', 'boar', 'bone',
  'raid', 'group', 'bikergirl', 'cacadoo', 'owl', 'sparrow', 'crocodile', 'god', 'ant', 'lion', 'treasure', 'gem',
  'glasses', 'crown', 'swamp', 'forest', 'breakfast', 'meal', 'shaman', 'winter', 'summer', 'spring', 'gold', 'legacy',
  'shadow', 'ghoul', 'pirate', 'slime', 'ogre', 'dwarf', 'cream', 'abyss', 'bowmaster', 'swordsmaster', 'thief',
  'ink', 'elf', 'rock', 'water', 'juice', 'ocean', 'skull', 'organ', 'ocarina', 'legend', 'tree', 'seagull', 'albatross',
  'squid', 'platypus', 'shield', 'plan', 'band', 'cult', 'universe', 'fist', 'elbow', 'knee', 'chest', 'rib', 'pelvis',
  'femur', 'country', 'wasteland', 'behemoth', 'lich', 'gavel', 'basher', 'club', 'morningstar', 'heart', 'diamond',
  'pearl', 'ruby', 'python', 'topaz', 'aluminium', 'silver', 'nugget', 'obsidian', 'ghost', 'flood', 'peat', 'bog',
  'furnace', 'gauntlet', 'greave', 'bracer', 'slingshot', 'sun', 'star', 'shard', 'pen', 'coal', 'charcoal', 'flame',
  'snake', 'code', 'party', 'literature', 'seed', 'fortress', 'lair', 'river', 'sea', 'adventure', 'campfire',
  'voyage', 'odyssey', 'creed', 'hole', 'hangnail', 'lawn', 'fork', 'sunflower', 'blight', 'book', 'script', 'scroll',
  'future', 'wardrobe', 'throne', 'hypocrite', 'mockingbird', 'bowman', 'raider', 'scout', 'officer', 'lieutenant', 'general',
  'ninja', 'assassin', 'coffee', 'demon', 'angel', 'tooth', 'song', 'storm', 'warbow', 'caricature', 'race', 'pumpkin',
  'skirmish', 'mutant', 'abomination', 'ache', 'blossom', 'journal', 'performer', 'stereotype', 'ale', 'beer', 'hurricane',
  'scales', 'earthquake', 'chainmail', 'machine', 'servant', 'loot', 'sabre', 'scythe', 'squire', 'journeyman', 'dragon',
  'missionary', 'prophet', 'offspring', 'newt', 'salamander', 'oak', 'pine', 'sapling', 'flint', 'ransom', 'hostage', 'bandit',
  'outlaw', 'relic', 'flesh', 'food', 'tavern', 'blacksmith', 'armourer', 'tools', 'leather', 'feather', 'spear', 'fletcher',
  'stonemason', 'cottage', 'crossbow', 'slum', 'vine', 'hawk', 'falcon', 'glaive', 'tribe', 'monastery', 'prince', 'king',
  'queen', 'soldier', 'thread', 'crown', 'nightmare', 'gravestone', 'graveyard', 'follower', 'lightning', 'bolt', 'ring',
  'cobweb', 'centurion', 'arachnid', 'gryffin', 'sphynx', 'pharoah', 'mummy', 'trident', 'trap', 'werewolf', 'rogue', 'knight',
  'mule', 'horse', 'mare', 'guardian', 'golem', 'dimension', 'autumn', 'dove', 'fortune', 'paradise', 'disciple', 'monk',
  'goose', 'devil', 'beast', 'rat', 'zombie', 'raven', 'ethereal', 'bones', 'dice', 'watchman', 'cannon', 'chain', 'cupbearer',
  'guardsman', 'tailor', 'chasm', 'hive', 'gnome', 'dungeon', 'lizard', 'sage', 'priest', 'sorcerer', 'necromancer', 'charmer',
  'warlock', 'witch', 'rod', 'trapdoor', 'scribe', 'dragonfire', 'wanderer', 'traveller', 'needle', 'mask', 'helm', 'key',
  'jail', 'prison', 'inmate', 'criminal', 'trolloc', 'paw', 'steel', 'iron', 'blade', 'shade', 'shelter', 'fool', 'horn', 'bivouac',
  'outsider', 'quisling', 'wind', 'rider', 'sickle', 'sergeant', 'corporal', 'major', 'serpent', 'shackles', 'whip', 'shipwreck',
  'sledgehammer', 'eyeball', 'idiot', 'mammoth', 'worm', 'vampire', 'inferno', 'hobgoblin', 'hound', 'megalith', 'lozenge',
  'poison', 'beggar', 'battle', 'battlefield', 'kaiser', 'kamikaze', 'naiad', 'narcotic', 'scorpion', 'argosy', 'opal',
  'pendant', 'militia', 'minotaur', 'tower', 'paradox', 'renegade', 'pawn', 'drift', 'heretic', 'proxy', 'batallion',
  'flank', 'nitwit', 'scholar', 'writer', 'planner', 'stragetist', 'paraphernalia', 'usurper', 'madman', 'madwoman',
  'trinket', 'vulture', 'watchdog', 'robber', 'stealer', 'patriarch', 'genius', 'gale', 'heiress', 'princess', 'parchment',
  'portcullis', 'stronghold', 'fort', 'bailey', 'tepee', 'tsar', 'limousin', 'mermaid', 'siren', 'nymph', 'heir', 'eon',
  'era', 'century', 'century', 'millenium', 'decade', 'gallows', 'gamble', 'maestro', 'joker', 'fairy', 'noose', 'tomohawk',
  'ore', 'halcyon', 'orb', 'snowball', 'sphere', 'cyclopes', 'duke', 'baron', 'dynamo', 'contraband', 'souvenir', 'atrocity',
  'assault', 'lash', 'phenomena', 'disease', 'epidemic', 'egg', 'guild', 'clan', 'ruler', 'boss', 'idol', 'frontier', 'beverage',
  'pillage', 'plunder', 'invasion', 'conquest', 'incursion', 'tomb', 'vault', 'crypt', 'mausoleum', 'sarcophagus', 'catacomb',
  'sepulchre', 'turmoil', 'myrmidon', 'navy', 'scapegoat', 'deserter', 'archer', 'charmer', 'yawl', 'lingo', 'eclipse', 'comet',
  'asteroid', 'planet', 'galley', 'galaxy', 'megalomaniac', 'melee', 'maraud', 'marauder', 'spike', 'cavalry', 'pike', 'misanthopist',
  'boa', 'battleship', 'battlement', 'axe', 'stave', 'hieroglyph', 'jackpot', 'jester', 'motherland', 'father', 'mother', 'treaty',
  'oath', 'gang', 'empress', 'peasant', 'elixir', 'haar', 'backpack', 'merchant', 'conjurer', 'pariah', 'pickpocket', 'phalanx',
  'oracle', 'onion', 'utopia', 'monarchy']

const goals = ['slaying', 'wisdom', 'destruction', 'death', 'healing', 'luck', 'misfortune', 'rage', 'joy',
  'leveling', 'vengance', 'resurrection', 'mastery', 'loss', 'flames', 'fire', 'frost', 'glory', 'war', 'sprinting',
  'doom', 'love', 'archery', 'hunting', 'peace', 'failure', 'success', 'victory', 'denial', 'agility', 'despair',
  'woodworking', 'cooking', 'herbalism', 'leatherworking', 'skincare', 'treasures', 'fury', 'trading', 'nailcare', 'moisturisation',
  'aggression', 'lust', 'swordsmanship', 'dreams', 'daydreams', 'thievery', 'generosity', 'radiance', 'royalty', 'valor',
  'refreshment', 'revenge', 'vengeance', 'veganism', 'knowledge', 'ignorance', 'divinity', 'evolution', 'vegeterianism',
  'depression', 'insurance', 'protection', 'shielding', 'power', 'might', 'magic', 'wilderness', 'literacy', 'poetry', 'artwork',
  'jealousy', 'fame', 'wealth', 'loneliness', 'youth', 'elderness', 'dread', 'disgust', 'advice', 'speed', 'unbreaking', 'glamour',
  'radiation', 'hypocrisy', 'teleportation', 'tailoring', 'fighting', 'marriage', 'nobility', 'nostalgia', 'performance',
  'raiding', 'mutation', 'reality', 'fantasies', 'embarrassment', 'humiliation', 'cruelty', 'guidance', 'brilliance', 'hatred',
  'innocence', 'accuracy', 'perception', 'endurance', 'charisma', 'strength', 'intelligence', 'dexterity', 'experience',
  'flight', 'bravery', 'corruption', 'greed', 'temptation', 'sin', 'forgiveness', 'gratitude', 'alchemy', 'hope', 'foretelling',
  'paralysis', 'lore', 'narcissism', 'crime', 'slavery', 'freedom', 'rebellion', 'precision', 'victory', 'mischief', 'scepticism',
  'sharpness', 'travelling', 'smelting', 'forgery', 'cowardice', 'forging', 'acumen', 'acme', 'cursing', 'bivouacking', 'revolt',
  'romance', 'stunning', 'sanity', 'insanity', 'ingenuity', 'regurgitation', 'evilness', 'wickedness', 'servitude', 'shooting',
  'spiritualism', 'hysteria', 'foolishness', 'idiocy', 'vanity', 'vertigo', 'vivacity', 'holiness', 'humour', 'hypnotism',
  'secrets', 'renovation', 'bliss', 'falseness', 'isolation', 'apoplexy', 'omens', 'tipsiness', 'blasphemy', 'heresy', 'prowess',
  'proficiency', 'plagiarism', 'hallucinations', 'pyromania', 'theft', 'falconry', 'intuition', 'strategy', 'planning', 'alacrity',
  'heroism', 'vulnerability', 'binding', 'vanishing', 'optimism', 'unarming', 'scrutiny', 'solitude', 'empowerment', 'wrath',
  'convalescence', 'justice', 'benediction', 'aspiration', 'perpicacity', 'perturbation', 'melody', 'undying', 'fury', 'rampage',
  'frenzy', 'remorse', 'sorrow', 'guilt', 'honesty', 'union', 'fulfilment', 'exaggeration', 'appeal', 'retaliation', 'mourning',
  'leading', 'ruling', 'command', 'integrity', 'humility', 'honour', 'virtue', 'completeness', 'unity', 'focus', 'training',
  'knowledge', 'restoration', 'refurbishment', 'disclosure', 'energy', 'violation', 'stringency', 'loath', 'fuss', 'megalomania',
  'danger', 'gallivanting', 'hibernation', 'horror', 'terror', 'eminence', 'shame', 'scorn', 'ingenuinity', 'paroxysm', 'satiety',
  'placidity', 'phantasmagoria', 'euphoria', 'bad']

export const generate = ()=>{
  // generates a random party invite link name
  return `${cap(rndArray(adjectives))}${cap(rndArray(nouns))}Of${cap(rndArray(goals))}`
}

const cap = s => s.charAt(0).toUpperCase() + s.slice(1)
