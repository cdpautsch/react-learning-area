const wordBank = [
    {
        word: 'ABBESS',
        definition: 'a female superior or governess of a nunnery'
    },
    { word: 'ABBEY', definition: 'a monastery or society of people' },
    {
        word: 'ABBOT',
        definition: 'the superior or head of an abbey or monastery'
    },
    { word: 'ABDOMEN', definition: 'the belly/stomach' },
    { word: 'ABEYANCE', definition: 'temporary inactivity' },
    {
        word: 'ABOMINATION',
        definition: 'anything greatly disliked or abhorred'
    },
    { word: 'ABSCISSION', definition: 'the act of cutting off' },
    { word: 'ABSENCE', definition: 'a state of being absent' },
    {
        word: 'ABSTINENCE',
        definition: 'voluntary forbearance esp. from indulgence of an appetite'
    },
    { word: 'ABYSS', definition: 'an immeasurably deep gulf or great space' },
    {
        word: 'ACCLIVITY',
        definition: 'a slope or inclination of the earth, as the side of a hill'
    },
    {
        word: 'ACCOMPANIMENT',
        definition: 'that which gives support or adds to the background'
    },
    { word: 'ACCOMPLICE', definition: 'partner in activity, usually crime' },
    { word: 'ACCOUTERMENTS', definition: 'dress, trappings, equipment' },
    { word: 'ACCRETION', definition: 'growth by slow buildup' },
    {
        word: 'ACCULTURATION',
        definition: 'adopting cultural elements of another culture'
    },
    {
        word: 'ACCUSATION',
        definition: 'the act of with a crime or with a lighter offense'
    },
    { word: 'ACETATE', definition: 'any salt or ester of acetic acid' },
    {
        word: 'ACKNOWLEDGMENT',
        definition: 'the act of acknowledging, admission'
    },
    {
        word: 'ACME',
        definition: 'the top or highest point, pinnacle, culmination'
    },
    { word: 'ACREAGE', definition: 'size, as measured in acres' },
    {
        word: 'ACRIMONY',
        definition: 'bitterness or sharpness of manner, speech, temper'
    },
    { word: 'ACROPHOBIA', definition: 'fear of heights' },
    { word: 'ACTUALITY', definition: 'the state of existing, existence' },
    { word: 'ACTUARY', definition: 'registrar, clerk' },
    {
        word: 'ACUITY',
        definition: 'sharpness or acuteness, as of a needle, wit, etc'
    },
    {
        word: 'ACUMEN',
        definition:
            'quickness of perception or discernment, penetration of mind'
    },
    {
        word: 'ADAGE',
        definition: 'an old saying, which has obtained credit by long use'
    },
    { word: 'ADDENDUM', definition: 'an addition or change' },
    {
        word: 'ADHESION',
        definition: 'the ability of a substance to stick to an unlike substance'
    },
    {
        word: 'ADIEU',
        definition: 'a farewell, a goodbye, especially a fond farewell'
    },
    {
        word: 'ADJUNCT',
        definition: 'attached to another in a dependent or subordinate position'
    },
    { word: 'ADJURATION', definition: 'a grave warning' },
    {
        word: 'ADMINISTRATOR',
        definition: 'one who administers affairs, one who directs or manages'
    },
    { word: 'ADMITTANCE', definition: 'the act of admitting' },
    { word: 'ADO', definition: 'to do, in doing, as, there is nothing ado' },
    { word: 'ADORATION', definition: 'an act of religious worship' },
    { word: 'ADULATION', definition: 'flattery, fulsome praise' },
    { word: 'ADVENT', definition: 'coming, arrival' },
    { word: 'ADVERSARY', definition: 'an enemy' },
    { word: 'ADVERSITY', definition: 'hardship (usually uncountable)' },
    { word: 'ADVOCACY', definition: 'active support' },
    {
        word: 'AEGIS',
        definition: 'the shield or breastplate of zeus or athena, protection'
    },
    {
        word: 'AERONAUT',
        definition: 'one who glides through the air in an airship or balloon'
    },
    {
        word: 'AEROSTAT',
        definition: 'an aircraft that derives its lift from buoyancy'
    },
    {
        word: 'AESTHETE',
        definition: 'a person who has refined sensitivity towards art or nature'
    },
    {
        word: 'AFFILIATION',
        definition: 'the relationship resulting from association'
    },
    {
        word: 'AFFINITY',
        definition:
            'a natural liking for or attraction to a person, thing, idea'
    },
    {
        word: 'AFFIRMATION',
        definition: 'a declaration that something is true, an oath'
    },
    { word: 'AFICIONADO', definition: 'a fan or devotee' },
    {
        word: 'AFRIKAANS',
        definition:
            'an official language of south africa, developed out of dutch'
    },
    {
        word: 'AGRICULTURE',
        definition: 'the art or science of cultivating the ground'
    },
    {
        word: 'AIDE-DE-CAMP',
        definition: 'a military officer who assists a higher ranking officer'
    },
    { word: 'AILMENT', definition: 'a disease, sickness' },
    { word: 'ALABASTER', definition: 'a finely granular variety of gypsum' },
    { word: 'ALACRITY', definition: 'cheerful readiness' },
    {
        word: 'ALCHEMY',
        definition: 'the search for a universal panacea (became chemistry)'
    },
    {
        word: 'ALCOHOLISM',
        definition: 'a chronic disorder characterized by dependence on alcohol'
    },
    {
        word: 'ALCOVE',
        definition: 'a small recessed area set off from a larger room'
    },
    { word: 'ALDER', definition: 'belonging to the birch tree family' },
    {
        word: 'ALDERMAN',
        definition: 'a member of several municipal legislative bodies'
    },
    {
        word: 'ALIAS',
        definition: "a false name used to conceal one's identity"
    },
    { word: 'ALIBI', definition: 'an excuse, especially to avoid blame' },
    {
        word: 'ALIEN',
        definition: 'a person who has been estranged or excluded'
    },
    { word: 'ALIMENT', definition: 'that which nourishes, food' },
    {
        word: 'ALIMONY',
        definition: 'a court-enforced allowance made to a former spouse'
    },
    { word: 'ALKALI', definition: 'one of a class of caustic bases' },
    { word: 'ALLEGIANCE', definition: 'loyalty to a person, group, or cause' },
    { word: 'ALLEGORY', definition: 'a symbolic narrative' },
    {
        word: 'ALLIANCE',
        definition: 'the state of being allied, the act of allying or uniting'
    },
    {
        word: 'ALLUSION',
        definition: 'an indirect reference, a hint, a reference to something'
    },
    { word: 'ALLUVION', definition: 'overflow, flood' },
    {
        word: 'ALMANAC',
        definition:
            'a book or table listing nautical, astronomical, etc. Events'
    },
    {
        word: 'ALTAR',
        definition:
            'a table or similar flat-topped structure for religious rites'
    },
    { word: 'ALTERATION', definition: 'the act of making different' },
    {
        word: 'ALTITUDE',
        definition: 'the height measured from sea level up to any given point'
    },
    {
        word: 'ALTO',
        definition: 'a musical section higher than tenor and lower than soprano'
    },
    {
        word: 'ALTRUISM',
        definition: 'regard for others, both natural and moral, kindness'
    },
    { word: 'AMALGAM', definition: 'a combination of different things' },
    { word: 'AMBIANCE', definition: 'mood, quality, atmosphere' },
    { word: 'AMBLE', definition: 'slow walk, stroll' },
    {
        word: 'AMBULANCE',
        definition: 'emergency vehicle that transports sick or injured people'
    },
    { word: 'AMENITY', definition: 'pleasantness' },
    {
        word: 'AMERICANISM',
        definition: 'a trait particuliar to the us or its citizens'
    },
    {
        word: 'AMITY',
        definition: 'the cooperative and supportive relationship between people'
    },
    { word: 'AMOUR', definition: 'a love affair' },
    { word: 'AMPERE', definition: 'the base si unit of electrical current' },
    { word: 'AMPERSAND', definition: "the symbol '&'" },
    {
        word: 'AMPHITHEATER',
        definition: 'a semi-circular acoustic backdrop for an outdoor venue'
    },
    {
        word: 'AMPLITUDE',
        definition: "the measure of something's size, largeness, magnitude"
    },
    { word: 'AMUSEMENT', definition: 'entertainment' },
    {
        word: 'ANACHRONISM',
        definition: 'a chronological mistake, the erroneous dating of an event'
    },
    {
        word: 'ANAGRAM',
        definition: 'a word/phrase formed from another rearranging its letters'
    },
    {
        word: 'ANALOGY',
        definition: 'similarity between like features of two things'
    },
    { word: 'ANALYST', definition: 'someone who analyzes' },
    {
        word: 'ANARCHY',
        definition: 'a state of society without government or law'
    },
    { word: 'ANATHEMA', definition: 'a person or thing detested or loathed' },
    {
        word: 'ANATOMY',
        definition:
            'the art of studying the different parts of an organized body'
    },
    {
        word: 'ANCESTRY',
        definition: 'condition as to ancestors, ancestral lineage'
    },
    {
        word: 'ANECDOTE',
        definition: 'a short account of a history, usually amusing'
    },
    {
        word: 'ANEMIA',
        definition: 'a medical condition of too little hemoglobin'
    },
    { word: 'ANEMOMETER', definition: 'a device to measure wind speed' },
    {
        word: 'ANESTHESIA',
        definition: 'a method of preventing sensation, used to eliminate pain'
    },
    { word: 'ANGLOPHOBIA', definition: 'fear or dislike of england' },
    { word: 'ANIMADVERSION', definition: 'a criticism, a critical remark' },
    {
        word: 'ANIMALCULE',
        definition: 'an older term for a microscopic animal or protozoan'
    },
    { word: 'ANIMOSITY', definition: 'strong hostility' },
    {
        word: 'ANIMUS',
        definition:
            "the basic impulses and instincts which govern one's actions"
    },
    { word: 'ANNAL', definition: 'occurring once a year' },
    {
        word: 'ANNUITY',
        definition: 'a specified income payable at stated intervals for period'
    },
    { word: 'ANNUNCIATION', definition: 'the act of announcing something' },
    {
        word: 'ANODE',
        definition:
            'electrode of an electrochemical cell where oxidation occurs'
    },
    {
        word: 'ANOMALY',
        definition: 'a deviation from a rule or from what is regarded as normal'
    },
    {
        word: 'ANONYMITY',
        definition: 'the quality or state of being anonymous, anonymousness'
    },
    {
        word: 'ANTAGONISM',
        definition: 'a strong natural dislike or hatred, antipathy'
    },
    {
        word: 'ANTECHAMBER',
        definition: 'a small room used as an entryway area to a larger room'
    },
    {
        word: 'ANTEROOM',
        definition: 'a waiting room, a small room before a larger one'
    },
    { word: 'ANTHOLOGY', definition: 'a book or collection of writings' },
    { word: 'ANTHRACITE', definition: 'a slow-burning coal' },
    {
        word: 'ANTHROPOLOGY',
        definition: 'the holistic scientific and social study of humanity'
    },
    {
        word: 'ANTICHRIST',
        definition: 'one who works against the teachings of christ'
    },
    {
        word: 'ANTIDEPRESSANT',
        definition:
            'a substance that is used in the treatment of mood disorders'
    },
    {
        word: 'ANTIDOTE',
        definition: 'a remedy to counteract the effects of poison'
    },
    {
        word: 'ANTIGEN',
        definition: 'a toxin that induces an immune response in the body'
    },
    {
        word: 'ANTILOGY',
        definition: 'a contradiction in related terms or ideas'
    },
    { word: 'ANTIPATHY', definition: 'a deep seated feeling of dislike' },
    {
        word: 'ANTIPHON',
        definition: 'a devotional piece of music sung responsively'
    },
    {
        word: 'ANTIPHONY',
        definition: 'alternate, responsive singing by a two part choir'
    },
    {
        word: 'ANTIPODES',
        definition: 'any two places that are on opposite sides of the earth'
    },
    {
        word: 'ANTIQUARY',
        definition: 'a person who is knowledgeable of, or who collects antiques'
    },
    {
        word: 'ANTISTROPHE',
        definition: 'the second section of an ancient Greek choral ode'
    },
    {
        word: 'ANTITHESIS',
        definition:
            'a proposition diametrically opposite of another proposition'
    },
    {
        word: 'ANTITOXIN',
        definition: 'a substance, formed in the body, that counters a toxin'
    },
    {
        word: 'ANTONYM',
        definition: 'a word which has the opposite meaning of another'
    },
    {
        word: 'APARTHEID',
        definition: 'any system that separates people according to race'
    },
    {
        word: 'APATHY',
        definition: 'complete lack of emotion or motivation about something'
    },
    { word: 'APERTURE', definition: 'an opening or gap in something' },
    { word: 'APEX', definition: 'the highest point of something' },
    { word: 'APHORISM', definition: 'a saying embodying a general truth' },
    {
        word: 'APIARY',
        definition: 'a place where bees and their hives are kept'
    },
    { word: 'APLOMB', definition: 'self-confidence, poise, composure' },
    {
        word: 'APOGEE',
        definition:
            'the point in orbit around Earth when the object is farthest'
    },
    {
        word: 'APOSTASY',
        definition: 'the renunciation of a belief or set of beliefs'
    },
    {
        word: 'APOSTATE',
        definition: 'a person who forsakes his religion, cause, party'
    },
    {
        word: 'APOSTLE',
        definition: 'a missionary, or leader of a religious mission'
    },
    {
        word: 'APOTHECARY',
        definition:
            'a person who makes and provides/sells drugs and/or medicines'
    },
    {
        word: 'APOTHEGM',
        definition: 'a short, witty, instructive saying, an aphorism or maxim'
    },
    {
        word: 'APOTHEOSIS',
        definition: 'the fact or action of becoming or making into a god'
    },
    {
        word: 'APPARITION',
        definition:
            'a supernatural appearance of a person or thing, like a ghost'
    },
    {
        word: 'APPLICATION',
        definition: 'the act of putting to a special use or purpose'
    },
    {
        word: 'APPRENTICE',
        definition: "a person who's learning a trade from a skilled employer"
    },
    { word: 'APPROBATION', definition: 'approval' },
    {
        word: 'APPURTENANCE',
        definition: 'an appendage added to something else'
    },
    {
        word: 'APTITUDE',
        definition: 'natural ability to acquire knowledge or skill'
    },
    { word: 'AQUEDUCT', definition: 'a small canal containing fluid' },
    { word: 'ARBITER', definition: 'a person empowered to make decisions' },
    {
        word: 'ARBITRATOR',
        definition: 'a person delegated the authority to settle a dispute'
    },
    {
        word: 'ARBOR',
        definition: 'a shady sitting place, usually in a park or garden'
    },
    {
        word: 'ARBORICULTURE',
        definition: 'the cultivation of trees and shrubs'
    },
    { word: 'ARCADE', definition: 'a row of arches' },
    {
        word: 'ARCHAEOLOGY',
        definition: 'the scientific study of historic or prehistoric peoples'
    },
    {
        word: 'ARCHANGEL',
        definition: 'a powerful angel that leads many other angels'
    },
    {
        word: 'ARCHBISHOP',
        definition: 'a senior bishop who is in charge of an archdiocese'
    },
    {
        word: 'ARCHDEACON',
        definition:
            '(anglican,eastern orthodox) a senior administrative official'
    },
    {
        word: 'ARCHETYPE',
        definition:
            'the original model from which all similar things are copied'
    },
    { word: 'ARCHIPELAGO', definition: 'a cluster of island' },
    {
        word: 'ARCHIVE',
        definition: 'any extensive record or collection of data'
    },
    { word: 'ARDOR', definition: 'passion' },
    {
        word: 'ARIA',
        definition:
            'a musical piece written for a solo voice with accompaniment'
    },
    { word: 'ARISTOCRAT', definition: 'one of a ruling class, a noble' },
    { word: 'ARMADA', definition: 'a fleet of warships' },
    { word: 'ARMFUL', definition: 'the amount an arm or arms can hold' },
    { word: 'ARMISTICE', definition: 'a formal agreement to end fighting' },
    { word: 'ARMORY', definition: 'a place where arms (weapons) are kept' },
    { word: 'AROMA', definition: 'smell (usually in relation to food)' },
    { word: 'ARRANGEMENT', definition: 'the act of arranging' },
    { word: 'ARREAR', definition: 'work to be done, obligation' },
    {
        word: 'ARROYO',
        definition: 'a small watercourse, usually dry except for heavy rains'
    },
    {
        word: 'ARSENAL',
        definition: 'a collection or supply of weapons or munitions'
    },
    { word: 'ARTIFACT', definition: 'an object made or shaped by humans' },
    { word: 'ARTIFICE', definition: 'a crafty but underhanded deception' },
    { word: 'ARTISAN', definition: 'a worker in a skilled trade' },
    { word: 'ASCENT', definition: 'the act of ascending a motion upwards' },
    {
        word: 'ASCETIC',
        definition: 'a person who practices severe self-discipline'
    },
    { word: 'ASPERITY', definition: 'harshness of tone or manner' },
    {
        word: 'ASPERSION',
        definition: "an attack on somebody's reputation or good name"
    },
    { word: 'ASPIRATION', definition: 'ambition, goal' },
    {
        word: 'ASSAILANT',
        definition: 'someone who attacks or assails another violently'
    },
    {
        word: 'ASSESSOR',
        definition: 'one who assesses a property for tax evaluation'
    },
    { word: 'ASSET', definition: 'something or someone of any value' },
    { word: 'ASSIGNEE', definition: 'one to whom a thing is assigned' },
    {
        word: 'ASSONANCE',
        definition: 'the repetition of similar or identical vowel sounds'
    },
    {
        word: 'ASSURANCE',
        definition: 'a declaration tending to inspire full confidence'
    },
    { word: 'ASYLUM', definition: 'a place of safety' },
    {
        word: 'ATOMIZER',
        definition: 'an instrument for reducing a liquid to spray or vapor'
    },
    { word: 'ATROCITY', definition: 'an extremely wicked or cruel act' },
    { word: 'ATTACHE', definition: 'an official associated with an embassy' },
    { word: 'ATTAINMENT', definition: 'the act of arriving at or reaching' },
    { word: 'ATTRITION', definition: 'wearing or grinding down by friction' },
    {
        word: 'AUDIT',
        definition: 'an official verification of records, especially financial'
    },
    {
        word: 'AUDITION',
        definition: "a trial to test a performer's suitability for something"
    },
    {
        word: 'AUDITOR',
        definition: 'a person appointed to examine accounting records'
    },
    {
        word: 'AUGURY',
        definition: 'a divination based on the behaviour of animals'
    },
    { word: 'AUGUSTINIAN', definition: 'pertaining to st. augustine of hippo' },
    {
        word: 'AURA',
        definition:
            'distinctive atmosphere or quality associated with something'
    },
    { word: 'AUREOLE', definition: 'any encircling ring of light, halo' },
    { word: 'AURICLE', definition: 'the outer ear or pinna' },
    {
        word: 'AURORA',
        definition:
            'an atmospheric phenomenon creating bands of light in the sky'
    },
    { word: 'AUSPICE', definition: 'patronage or protection' },
    { word: 'AUTARCHY', definition: 'a condition of absolute power' },
    {
        word: 'AUTOBIOGRAPHY',
        definition: "a self-written biography, the story of one's own life"
    },
    {
        word: 'AUTOCRACY',
        definition:
            'a form of government in which one individual holds all power'
    },
    { word: 'AUTOCRAT', definition: 'an absolute ruler with infinite power' },
    {
        word: 'AUTOMATON',
        definition: 'a robot designed to follow a sequence of instructions'
    },
    {
        word: 'AUTOPSY',
        definition: 'a post-mortem examination to discover the cause of death'
    },
    {
        word: 'AVALANCHE',
        definition: 'a large mass of snow sliding suddenly downward'
    },
    { word: 'AVARICE', definition: 'greediness over wealth, covetousness' },
    {
        word: 'AVATAR',
        definition: 'an incarnation or manifestation of a person or idea'
    },
    { word: 'AVIARY', definition: 'an enclosure for keeping birds confined' },
    { word: 'AVIDITY', definition: 'greediness, strong appetite' },
    { word: 'AVOCATION', definition: 'a calling away, a diversion' },
    { word: 'AXIOM', definition: 'a self-evident truth requiring no proof' },
    {
        word: 'AYE',
        definition: 'an affirmative vote, one who votes in the affirmative'
    },
    {
        word: 'AZAN',
        definition: '(Islam) the call to prayer proclaimed five times a day'
    },
    {
        word: 'BACTERIUM',
        definition: 'a single celled organism with no nucleus'
    },
    { word: 'BADINAGE', definition: 'playful raillery, banter' },
    {
        word: 'BAILIFF',
        definition: 'a legal officer, similar to a sheriff or deputy'
    },
    { word: 'BAIZE', definition: 'a woollen fabric resembling felt' },
    {
        word: 'BALE',
        definition: 'a large, wrapped bundle of something (ie, cotton, hay)'
    },
    {
        word: 'BALLAST',
        definition: 'any heavy material used to stabilize a ship'
    },
    {
        word: 'BALSAM',
        definition: 'a sweet-smelling oil or resin derived from various plants'
    },
    { word: 'BANE', definition: 'a cause of great distress or annoyance' },
    {
        word: 'BANTER',
        definition: 'the playful and friendly exchange of teasing remarks'
    },
    {
        word: 'BARB',
        definition:
            'a sharp projection near the end of an arrow or similar item'
    },
    {
        word: 'BARCAROLE',
        definition: 'a venetian folk song traditionally sung by gondoliers'
    },
    { word: 'BARD', definition: 'a poet, often one who plays an instrument' },
    { word: 'BARITONE', definition: 'the male voice between tenor and bass' },
    { word: 'BAROGRAPH', definition: 'a recording aneroid barometer' },
    {
        word: 'BAROMETER',
        definition: 'an instrument for measuring atmospheric pressure'
    },
    { word: 'BARRISTER', definition: 'a lawyer who pleads in court' },
    {
        word: 'BARTERER',
        definition:
            'one who trades goods for other goods without involving money'
    },
    {
        word: 'BASTION',
        definition: 'a projecting part of a rampart or other fortification'
    },
    { word: 'BATHOS', definition: 'depth, bottom' },
    { word: 'BATON', definition: 'a short stick or staff used to conduct' },
    { word: 'BATTALION', definition: 'a large body of troop ready for battle' },
    { word: 'BATTERY', definition: 'a fortified emplacement for heavy guns' },
    {
        word: 'BAUBLE',
        definition: 'a cheap showy ornament piece of jewellery, a gewgaw'
    },
    { word: 'BEATITUDE', definition: 'supreme, utmost bliss and happiness' },
    { word: 'BEAU', definition: 'a frequent or attentive male companion' },
    { word: 'BECK', definition: 'a stream or small river' },
    { word: 'BEDLAM', definition: 'a place or situation of chaotic uproar' },
    { word: 'BEHEMOTH', definition: 'a huge or monstrous creature' },
    { word: 'BELLE', definition: 'an attractive woman' },
    {
        word: 'BELLWETHER',
        definition: 'the leading sheep of a flock, usually wearing a bell'
    },
    {
        word: 'BENEDICTION',
        definition: 'the utterance or bestowing of a blessing'
    },
    { word: 'BENEFACTOR', definition: 'somebody who gives one a gift' },
    {
        word: 'BENEFICIARY',
        definition: 'one who benefits or receives an advantage'
    },
    { word: 'BENISON', definition: 'a blessing, benediction' },
    {
        word: 'BERET',
        definition:
            'a type of round, brimless cap with a soft top and a headband'
    },
    {
        word: 'BETE NOIRE',
        definition: 'something especially disliked or dreaded'
    },
    {
        word: 'BIBLIOGRAPHY',
        definition:
            'a section of a written work with citations to all references'
    },
    {
        word: 'BIBLIOMANIA',
        definition: 'the obsession of owning valuable books'
    },
    { word: 'BIBLIOPHILE', definition: 'one who loves books' },
    {
        word: 'BIER',
        definition: 'a litter to transport the corpse of a dead person'
    },
    {
        word: 'BIGAMY',
        definition: 'the state of having two spouses simultaneously'
    },
    { word: 'BIGHT', definition: 'a corner, bend, or angle' },
    {
        word: 'BIGOT',
        definition: 'a person utterly intolerant of any differing opinion'
    },
    {
        word: 'BILGE',
        definition: 'the widest circumference or belly of a cask'
    },
    {
        word: 'BIOGRAPHY',
        definition: "a written account of another person's life"
    },
    {
        word: 'BIPED',
        definition: 'an animal, or being that goes about on two feet or legs'
    },
    {
        word: 'BIRTHRIGHT',
        definition: 'something owed since birth, due to inheritance'
    },
    { word: 'BITTERNESS', definition: 'the quality of having a bitter taste' },
    { word: 'BLAZE', definition: 'a bright flame or fire' },
    { word: 'BLOCKADE', definition: 'an obstruction of passage or progress' },
    {
        word: 'BLUNDERBUSS',
        definition: 'an action regarded as lacking in subtlety'
    },
    {
        word: 'BOATSWAIN',
        definition: 'an officer on a vessel, in charge of rigging, cables, etc'
    },
    {
        word: 'BODICE',
        definition:
            "the part of a woman's dress covering between neck and waist"
    },
    { word: 'BOLE', definition: 'the trunk or stem of a tree' },
    { word: 'BOLERO', definition: 'a lively spanish dance' },
    {
        word: 'BOLL',
        definition: 'the rounded seed-bearing capsule of a cotton or flax plant'
    },
    {
        word: 'BOMBARDIER',
        definition: 'a bomber crew member who sights and releases bombs'
    },
    {
        word: 'BOMBAST',
        definition: 'high-sounding language with little meaning'
    },
    {
        word: 'BONDAGE',
        definition: 'the state of being enslaved or the practice of slavery'
    },
    { word: 'BOON', definition: 'a thing that is helpful or beneficial' },
    { word: 'BOOR', definition: 'a rude, unmannerly person' },
    { word: 'BOROUGH', definition: 'a fortified town, a town or city' },
    {
        word: 'BOTANY',
        definition: 'the scientific study of plants, a branch of biology'
    },
    { word: 'BOURGEOIS', definition: 'a member of the middle class' },
    { word: 'BOWLER', definition: 'one who engages in the sport of bowling' },
    {
        word: 'BRAE',
        definition: 'the sloping bank of a river-valley, any slope or hillside'
    },
    { word: 'BRAGGART', definition: 'someone who boasts' },
    { word: 'BRAVADO', definition: 'a swaggering show of defiance or courage' },
    { word: 'BRAWN', definition: 'strong, well-developed muscles' },
    { word: 'BRAZIER', definition: 'a barbecue' },
    {
        word: 'BREACH',
        definition: 'an act of breaking a law, agreement or code of conduct'
    },
    {
        word: 'BREADTH',
        definition: 'the extent or measure of how broad or wide something is'
    },
    { word: 'BREAKER', definition: 'something that breaks' },
    { word: 'BREECH', definition: 'the lower, rear trunk of the body' },
    { word: 'BRETHREN', definition: 'fellow members' },
    {
        word: 'BRIC-A-BRAC',
        definition: 'small ornaments, other miscellaneous items of little value'
    },
    {
        word: 'BRIDLE',
        definition:
            'part of the harness of a horse, consisting of bit and reins'
    },
    {
        word: 'BRIGADIER',
        definition: 'an army rank, an officer commanding a brigade'
    },
    { word: 'BRIGAND', definition: 'an outlaw or bandit' },
    {
        word: 'BRITANNIA',
        definition: 'the ancient Roman name for Great Britain'
    },
    {
        word: 'BRITICISM',
        definition:
            'an idiom used in britain but not in other eng-speaking areas'
    },
    { word: 'BROGAN', definition: 'a heavy working shoe, a brogue' },
    {
        word: 'BROKERAGE',
        definition: 'a company whose business is to act as a broker'
    },
    {
        word: 'BROMIDE',
        definition: 'a binary compound of bromine and some other element'
    },
    {
        word: 'BROMINE',
        definition: 'a non-metallic chemical element, one of the halogens'
    },
    {
        word: 'BRONCHITIS',
        definition: 'an inflammation of the bronchi of the lungs'
    },
    {
        word: 'BRONCHUS',
        definition:
            'the primary branches of the trachea, leading into the lungs'
    },
    {
        word: 'BROOCH',
        definition: 'women’s jewellery having a pin to be fixed to garments'
    },
    {
        word: 'BROTHERHOOD',
        definition: 'the state of being brothers or a brother'
    },
    { word: 'BROUHAHA', definition: 'a stir, a fuss or uproar' },
    {
        word: 'BRUNT',
        definition: 'the chief consequences or negative results of something'
    },
    { word: 'BUCOLIC', definition: 'a pastoral poem' },
    { word: 'BUFFET', definition: 'a blow, typically with the hand or fist' },
    {
        word: 'BULLION',
        definition: 'a bulk quantity of precious metal, usually gold or silver'
    },
    { word: 'BULLOCK', definition: 'a castrated bull' },
    { word: 'BULRUSH', definition: 'any of several wetland herbs' },
    {
        word: 'BUNGALOW',
        definition: 'a small house or cottage usually having a single story'
    },
    { word: 'BUREAU', definition: 'office' },
    {
        word: 'BUREAUCRACY',
        definition: 'structure and regulations in place to control activity'
    },
    {
        word: 'BURGESS',
        definition: 'an inhabitant of a borough with full rights, a citizen'
    },
    {
        word: 'BURGHER',
        definition: 'a citizen, especially one belonging to middle class'
    },
    {
        word: 'BURSAR',
        definition: 'the treasurer of a university, college or school'
    },
    {
        word: 'BUTTE',
        definition: 'an isolated hill with steep sides and a flat top'
    },
    {
        word: 'BYLAW',
        definition:
            "a rule governing a corporation or society's internal affairs"
    },
    {
        word: 'BYLINE',
        definition: 'a line in a newspaper naming the writer of an article'
    },
    { word: 'CABAL', definition: 'a secret political clique or faction' },
    {
        word: 'CABALISM',
        definition: 'the principles or doctrines of the cabala'
    },
    {
        word: 'CABINET',
        definition: 'a cupboard for storing or displaying articles'
    },
    { word: 'CACOPHONY', definition: 'a harsh, discordant mixture of sounds' },
    {
        word: 'CADAVER',
        definition: 'a dead body, especially of a human to be dissected'
    },
    { word: 'CADENCE', definition: 'a modulation or inflection of the voice' },
    {
        word: 'CADENZA',
        definition: 'an elaborate solo passage in a piece of music'
    },
    { word: 'CADET', definition: 'a student in training at a military school' },
    {
        word: 'CALAMITY',
        definition: 'an event causing great and often sudden damage or distress'
    },
    { word: 'CALCULUS', definition: 'a particular method of calculation' },
    { word: 'CALESCENCE', definition: 'growing warm, increasing in heat' },
    {
        word: 'CALIBRE',
        definition: 'degree of capacity or competence, ability'
    },
    {
        word: 'CALUMNY',
        definition: 'a misrepresentation intended to discredit another'
    },
    {
        word: 'CALVARY',
        definition: 'a sculpture of the crucifixion on a piece of raised ground'
    },
    {
        word: 'CALVINISM',
        definition: 'the doctrines and teachings of john calvin'
    },
    {
        word: 'CAMARADERIE',
        definition: 'mutual trust and friendship among people'
    },
    {
        word: 'CANAANITE',
        definition: 'a member of a people that inhabited ancient palestine'
    },
    {
        word: 'CANARD',
        definition:
            'a false or misleading report, especially if deliberately so'
    },
    { word: 'CANDOR', definition: 'whiteness, brilliance' },
    { word: 'CANON', definition: 'a generally accepted principle' },
    {
        word: 'CANTATA',
        definition: 'a vocal composition accompanied by instruments'
    },
    {
        word: 'CANTO',
        definition: 'one of the chief divisions of a long poem, a book'
    },
    { word: 'CANTONMENT', definition: 'temporary military living quarters' },
    {
        word: 'CAPRICE',
        definition: 'a sudden and unaccountable change of mood or behavior'
    },
    { word: 'CARCASS', definition: 'body of a dead animal' },
    {
        word: 'CARET',
        definition: 'a mark made in writing to show something is to be inserted'
    },
    { word: 'CARNAGE', definition: 'death and destruction' },
    { word: 'CARRION', definition: 'dead flesh, carcasses' },
    {
        word: 'CARTE BLANCHE',
        definition: 'complete freedom to act as one wishes or thinks best'
    },
    {
        word: 'CARTILAGE',
        definition: 'a type of dense, non-vascular connective tissue'
    },
    {
        word: 'CARTOGRAPHER',
        definition: 'the study and practice of making maps'
    },
    {
        word: 'CARTRIDGE',
        definition: 'a container holding a quantity of ink or other substance'
    },
    {
        word: 'CASTE',
        definition: 'any hereditary social class of south asian societies'
    },
    { word: 'CASUALTY', definition: 'something that happens by chance' },
    {
        word: 'CASUISTRY',
        definition: 'oversubtle reasoning in questions of morality'
    },
    {
        word: 'CAT-O-NINE-TAILS',
        definition:
            'a whip, usually having nine knotted cords, used for flogging'
    },
    { word: 'CATACLYSM', definition: 'a sudden, violent event' },
    {
        word: 'CATALYST',
        definition: 'a person or thing that precipitates an event'
    },
    {
        word: 'CATAPULT',
        definition: 'a device that launches an object some distance'
    },
    { word: 'CATARACT', definition: 'a waterspout' },
    { word: 'CATASTROPHE', definition: 'a disaster' },
    {
        word: 'CATHARSIS',
        definition: 'the process of releasing strong or repressed emotions'
    },
    {
        word: 'CATHODE',
        definition: 'the electrode by which current leaves an electrolytic cell'
    },
    {
        word: 'CATHOLICISM',
        definition: 'the faith, practice and order of the roman catholic church'
    },
    { word: 'CAVALCADE', definition: 'a company of riders' },
    { word: 'CENTILITRE', definition: 'one 100th of a liter' },
    { word: 'CENTIMETRE', definition: 'one 100th of a meter' },
    { word: 'CENTURION', definition: 'an officer of the ancient roman army' },
    {
        word: 'CEREAL',
        definition: 'any plant of the grass family with an edible grain'
    },
    { word: 'CERTITUDE', definition: 'sureness, certainty' },
    { word: 'CESSATION', definition: 'a ceasing or discontinuance of action' },
    { word: 'CESSION', definition: 'that which is ceded' },
    {
        word: 'CHANCERY',
        definition: 'the office or department of a chancellor, chancellery'
    },
    { word: 'CHAOS', definition: 'complete disorder and confusion' },
    { word: 'CHARISMA', definition: 'personal charm or magnetism' },
    {
        word: 'CHARLATAN',
        definition:
            'a person falsely claiming to have special knowledge or skill'
    },
    {
        word: 'CHASM',
        definition: 'a deep, steep-sided rift, gap or fissure, a gorge or abyss'
    },
    { word: 'CHASSIS', definition: 'frame, landing gear' },
    {
        word: 'CHASTITY',
        definition: 'the state of abstaining from sexual intercourse'
    },
    { word: 'CHATEAU', definition: 'castle' },
    {
        word: 'CHICANERY',
        definition: 'deception by use of trickery, quibbling, or subterfuge'
    },
    { word: 'CHIFFON', definition: 'a sheer silk or rayon fabric' },
    {
        word: 'CHIMERA',
        definition: 'any creature with parts from different animals'
    },
    {
        word: 'CHIVALRY',
        definition: 'knights, nobles and horsemen collectively'
    },
    { word: 'CHOLERA', definition: 'any of several acute infectious diseases' },
    {
        word: 'CHOREOGRAPHY',
        definition: 'the art of creating, and arranging dance movements'
    },
    { word: 'CHRISTENDOM', definition: 'christians, collectively' },
    {
        word: 'CHRONOLOGY',
        definition: 'the sequential order in which events occured'
    },
    {
        word: 'CHRONOMETER',
        definition: 'a device for measuring time, such as a watch or clock'
    },
    {
        word: 'CHUTZPAH',
        definition: 'nearly arrogant courage, supreme self-confidence'
    },
    {
        word: 'CIRCUMFERENCE',
        definition: 'the outer boundary of a circular area'
    },
    {
        word: 'CIRCUMLOCUTION',
        definition: 'a roundabout or indirect way of speaking'
    },
    {
        word: 'CITADEL',
        definition: 'a strong fortress that sits high above a city'
    },
    { word: 'CITIZENRY', definition: 'a whole body of citizens' },
    { word: 'CLAIMANT', definition: 'a person who makes a claim' },
    { word: 'CLAMOR', definition: 'a loud and confused noise' },
    {
        word: 'CLAN',
        definition: 'a group of people all descended from a common ancestor'
    },
    {
        word: 'CLAQUE',
        definition: 'a group of people hired to attend a performance to applaud'
    },
    {
        word: 'CLEFT',
        definition: 'a space or opening made by cleavage, a split'
    },
    { word: 'CLEMENCY', definition: 'the gentle or kind exercise of power' },
    {
        word: 'CLERGY',
        definition: 'body of persons who are ordained for religious service'
    },
    { word: 'CLICHE', definition: 'a trite, stereotyped expression' },
    {
        word: 'CLIENTELE',
        definition: 'the body or class of people who frequent an establishment'
    },
    {
        word: 'CLIQUE',
        definition: 'a small, exclusive group of individuals, cabal'
    },
    { word: 'CLOSE-HAULED', definition: 'a bringing to an end, conclusion' },
    {
        word: 'CLOTHIER',
        definition: 'a person who makes or sells cloth or clothing'
    },
    {
        word: 'COALITION',
        definition:
            'a temporary group, usually formed for a particular advantage'
    },
    { word: 'COBBLER', definition: 'a person who repairs shoes' },
    {
        word: 'CODICIL',
        definition: 'a document that amends a previously executed will'
    },
    {
        word: 'COINCIDENCE',
        definition:
            'an occurence, by chance, of more than one event at one time'
    },
    {
        word: 'COLLAGE',
        definition:
            'a work of art, made from assembling different items into one'
    },
    { word: 'COLLEAGUE', definition: 'a person with whom one works with' },
    {
        word: 'COLLECTOR',
        definition: 'a person who collects, or who manages a collection'
    },
    {
        word: 'COLLEGIAN',
        definition: 'a student (or a former student) of a college'
    },
    { word: 'COLLIER', definition: 'a ship for carrying coal' },
    {
        word: 'COLLISION',
        definition: 'an instance of violent contact between objects'
    },
    { word: 'COLLOQUY', definition: 'a conversation or dialogue' },
    {
        word: 'COLLUSION',
        definition: 'a secret agreement, especially for treacherous purposes'
    },
    {
        word: 'COLOSSUS',
        definition: 'a statue of gigantic size, wonders of the ancient world'
    },
    { word: 'COMBATANT', definition: 'an armed fighter' },
    { word: 'COMBUSTION', definition: 'the process of burning something' },
    {
        word: 'COMMENTARY',
        definition: 'a series of comments or annotations on another work'
    },
    {
        word: 'COMMISSARIAL',
        definition:
            'a shop supplying food and equipment, as for a military camp'
    },
    { word: 'COMMITMENT', definition: 'a pledge or promise' },
    { word: 'COMMODITY', definition: 'a useful or valuable thing' },
    { word: 'COMMOTION', definition: 'a state of turbulent motion' },
    { word: 'COMPARISON', definition: 'the act of comparing, to liken' },
    {
        word: 'COMPASSION',
        definition:
            'feeling the suffering of others with the wish to relieve it'
    },
    {
        word: 'COMPENDIUM',
        definition:
            'a collection of concise but detailed info about one subject'
    },
    {
        word: 'COMPETENCE',
        definition: 'the quality or state of being competent, able'
    },
    {
        word: 'COMPETITOR',
        definition: 'a person or organization against whom one is competing'
    },
    {
        word: 'COMPLIANCE',
        definition: 'the action or fact of meeting rules or standards'
    },
    { word: 'COMPLICATION', definition: 'an involved or confused state' },
    {
        word: 'COMPLICIT',
        definition: 'involved with others in an illegal activity or wrongdoing'
    },
    {
        word: 'COMPLICITY',
        definition: 'the state of being involved as a partner or accomplice'
    },
    {
        word: 'COMPLIMENT',
        definition: 'a polite expression of praise or admiration'
    },
    {
        word: 'COMPOSURE',
        definition: 'calmness of mind or matter, self-possession'
    },
    { word: 'COMPREHENSION', definition: 'thorough understanding' },
    {
        word: 'COMPULSION',
        definition: 'the action or state of being forced to do something'
    },
    {
        word: 'COMPUNCTION',
        definition: 'a pricking of conscience or a feeling of regret'
    },
    {
        word: 'COMPUTATION',
        definition:
            'the use of computers, esp. as a subject of research or study'
    },
    {
        word: 'CONCATENATION',
        definition: 'a series or order of connected things'
    },
    {
        word: 'CONCEIT',
        definition: 'overly high self-esteem, vain pride, hubris'
    },
    {
        word: 'CONCERTO',
        definition: 'a piece of music for solo instruments and orchestra'
    },
    {
        word: 'CONCESSION',
        definition: 'a thing that is granted, esp. in response to demands'
    },
    {
        word: 'CONCORD',
        definition: 'agreement or harmony between people or groups'
    },
    { word: 'CONCORDANCE', definition: 'agreement, accordance, consonance' },
    { word: 'CONCURRENCE', definition: 'agreement, concurring' },
    { word: 'CONCUSSION', definition: 'a violent collision or shock' },
    {
        word: 'CONDENSATION',
        definition: 'the result of being made compact or dense'
    },
    {
        word: 'CONDESCENSION',
        definition: 'behaviour that is patronizing or condescending'
    },
    {
        word: 'CONDOLENCE',
        definition: 'an expression of sympathy, esp. on the occasion of death'
    },
    { word: 'CONDUIT', definition: 'a tube for protecting electric wiring' },
    {
        word: 'CONFECTION',
        definition: 'a dish or delicacy made with sweet ingredients'
    },
    {
        word: 'CONFECTIONERY',
        definition: 'foodstuffs that taste very sweet, candies'
    },
    { word: 'CONFEDERACY', definition: 'an alliance' },
    {
        word: 'CONFEREE',
        definition: 'a person who participates in a conference'
    },
    { word: 'CONFESSOR', definition: 'a person who confesses' },
    {
        word: 'CONFIDANT',
        definition: "a person in whom one can confide or share one's secrets"
    },
    { word: 'CONFIDENCE', definition: 'self-assurance' },
    {
        word: 'CONFINEMENT',
        definition: 'the act of confining or the state of being confined'
    },
    {
        word: 'CONFLAGRATION',
        definition: 'a large fire extending to many objects'
    },
    { word: 'CONFLUENCE', definition: 'an act or process of merging' },
    { word: 'CONFORMANCE', definition: 'the act of conforming, conformity' },
    { word: 'CONFORMATION', definition: 'manner of formation, structure' },
    {
        word: 'CONFORMITY',
        definition: 'similarity in form or character, agreement'
    },
    {
        word: 'CONGREGATION',
        definition: 'a gathering of faithful in a place of worship'
    },
    {
        word: 'CONGRUITY',
        definition: 'the quality of agreeing, the quality of being suitable'
    },
    { word: 'CONJUGATION', definition: 'the inflection of verbs' },
    {
        word: 'CONJUNCTION',
        definition: 'the formation of a link or connection between things'
    },
    { word: 'CONNOISSEUR', definition: 'an expert judge in matters of taste' },
    { word: 'CONSCIENCE', definition: 'the moral sense of right and wrong' },
    { word: 'CONSENSUS', definition: 'general agreement, general opinion' },
    {
        word: 'CONSERVATISM',
        definition: 'a political philosophy that advocates traditional values'
    },
    {
        word: 'CONSIGNEE',
        definition: 'the person to whom a shipment is to be delivered'
    },
    { word: 'CONSIGNOR', definition: 'the person who sends the shipment' },
    {
        word: 'CONSISTENCY',
        definition: 'degree of density, viscosity, firmness, etc.'
    },
    { word: 'CONSOLATION', definition: 'the act of comforting someone' },
    {
        word: 'CONSPIRATOR',
        definition: 'a person who plans to do something unlawful or harmful'
    },
    {
        word: 'CONSTABLE',
        definition: 'a police officer ranking below sergeant (british)'
    },
    {
        word: 'CONSTELLATION',
        definition: 'an arbitrary formation of stars perceived as a figure'
    },
    { word: 'CONSTERNATION', definition: 'feelings of anxiety or dismay' },
    {
        word: 'CONSTITUENCY',
        definition: 'a district represented by one or more elected officials'
    },
    {
        word: 'CONSUL',
        definition:
            "official in a country who protects their nation's interests"
    },
    { word: 'CONSULATE', definition: 'the residency of a consul' },
    { word: 'CONSUMPTION', definition: 'the act of consuming something' },
    {
        word: 'CONTAGION',
        definition: 'a disease spread with or without contact'
    },
    {
        word: 'CONTEMPT',
        definition: 'feeling that a person or a thing is beneath consideration'
    },
    {
        word: 'CONTENDER',
        definition: 'someone who competes with one or more other people'
    },
    {
        word: 'CONTENTMENT',
        definition: 'a state of happiness and satisfaction'
    },
    {
        word: 'CONTEXT',
        definition: 'the circumstances that form the setting of an idea'
    },
    { word: 'CONTIGUITY', definition: 'contact or proximity' },
    {
        word: 'CONTINENCE',
        definition: 'the exercise of self constraint in sexual matters'
    },
    {
        word: 'CONTINGENCY',
        definition: 'dependence on chance or the fulfillment of a condition'
    },
    {
        word: 'CONTINUANCE',
        definition: 'the state of remaining in existence or operation'
    },
    { word: 'CONTINUATOR', definition: 'a person or thing that continues' },
    { word: 'CONTINUITY', definition: 'lack of interruption or disconnection' },
    {
        word: 'CONTRADICTION',
        definition:
            'a person, thing, or idea in which has inconsistent elements'
    },
    { word: 'CONTRAPOSITION', definition: 'placement opposite or against' },
    {
        word: 'CONTRETEMPS',
        definition: 'an unforeseen, inopportune, or embarrassing event, a hitch'
    },
    {
        word: 'CONTRIBUTION',
        definition: 'something given or offered that adds to a larger whole'
    },
    {
        word: 'CONTRIBUTOR',
        definition: 'a benefactor, someone who donates to charity or some cause'
    },
    {
        word: 'CONTRITION',
        definition: 'the state of feeling remorseful and penitent'
    },
    {
        word: 'CONTRIVANCE',
        definition: 'a thing that is obviously planned, forced, or artificial'
    },
    { word: 'CONTUMACY', definition: 'disobedience, resistance to authority' },
    {
        word: 'CONTUMELY',
        definition: 'insolent or insulting language or treatment'
    },
    { word: 'CONTUSION', definition: 'bruise' },
    {
        word: 'CONUNDRUM',
        definition: 'a confusing and difficult problem or question'
    },
    {
        word: 'CONVALESCENCE',
        definition: 'a gradual healing after illness or injury'
    },
    {
        word: 'CONVENIENCE',
        definition: 'the quality of being suitable, useful or convenient'
    },
    { word: 'CONVENTION', definition: 'a meeting or gathering' },
    {
        word: 'CONVERGENCE',
        definition: 'the coming together from different directions to meet'
    },
    {
        word: 'CONVERSION',
        definition: 'the act of having converted something or someone'
    },
    {
        word: 'CONVEYANCE',
        definition: 'the act or process of transporting something'
    },
    {
        word: 'CONVICTION',
        definition: 'a belief, a judgement that someone is guilty of a crime'
    },
    {
        word: 'CONVOLUTION',
        definition: 'something that is folded or rolled up'
    },
    {
        word: 'CONVULSION',
        definition: 'an intense, paroxysmal, involuntary muscular contraction'
    },
    {
        word: 'COQUETTE',
        definition: "a woman who flirts or plays with men's affections"
    },
    {
        word: 'CORNERSTONE',
        definition: 'an important quality or feature on which a thing depends'
    },
    {
        word: 'CORNICE',
        definition: 'an ornamental molding around the top of the wall of a room'
    },
    {
        word: 'CORNUCOPIA',
        definition: "a goat's horn overflowing with fruit, flowers, grain, etc."
    },
    {
        word: 'COROLLARY',
        definition: 'something given beyond what is actually due'
    },
    {
        word: 'CORONATION',
        definition:
            "the ceremony of crowning a sovereign or sovereign's consort"
    },
    { word: 'CORONET', definition: 'a circular decoration for the head' },
    {
        word: 'CORPS',
        definition: 'a battlefield formation composed of two or more divisions'
    },
    {
        word: 'CORPULENCE',
        definition: 'the state or characteristic of being large, plump'
    },
    { word: 'CORPUSCLE', definition: 'a minute particle, an atom, a molecule' },
    {
        word: 'CORRELATION',
        definition: 'a reciprocal, parallel or complementary relationship'
    },
    {
        word: 'CORROBORATION',
        definition:
            'the act of strengthening or confirming, addition of strength'
    },
    { word: 'CORROSION', definition: 'the process of eating away by degrees' },
    {
        word: 'CORRUPTION',
        definition: 'the act of corrupting or of impairing integrity'
    },
    {
        word: 'COSMOGONY',
        definition:
            'a branch of science dealing with the origin of the universe'
    },
    { word: 'COSMOGRAPHY', definition: 'the creation of maps of the universe' },
    {
        word: 'COSMOLOGY',
        definition: 'the study of the physical universe, its structure, etc.'
    },
    {
        word: 'COSMOPOLITANISM',
        definition:
            'the idea that all people belong to a single moral community'
    },
    { word: 'COSMOS', definition: 'the universe seen as a well-ordered whole' },
    {
        word: 'COTERIE',
        definition: 'a circle of people who associate with one another'
    },
    { word: 'COUNTENANCE', definition: "a person's face or facial expression" },
    {
        word: 'COUNTER-CLAIM',
        definition: 'a claim made to offset another claim'
    },
    {
        word: 'COUNTERBALANCE',
        definition: 'a weight that balances another weight'
    },
    {
        word: 'COUNTERCHARGE',
        definition: 'a charge by an accused person against their accuser'
    },
    {
        word: 'COUNTERPART',
        definition: 'either of two parts that fit together or are complements'
    },
    {
        word: 'COUNTING-HOUSE',
        definition:
            'the facility in which a business carries out its operations'
    },
    { word: 'COUP', definition: 'a highly successful, unexpected act' },
    {
        word: 'COURSER',
        definition: 'a person who hunts with dogs using sight rather than scent'
    },
    {
        word: 'COVENANT',
        definition: 'an agreement between two or more persons, like a pact'
    },
    { word: 'COVEY', definition: 'a small group of people or things' },
    {
        word: 'COXSWAIN',
        definition: "a person in charge of a ship's boat and its crew"
    },
    { word: 'CRAG', definition: 'a rocky outcrop' },
    { word: 'CRANIUM', definition: 'the skull of a vertebrate' },
    {
        word: 'CREAMERY',
        definition: 'a place where dairy products are prepared or sold'
    },
    { word: 'CREDENCE', definition: 'acceptance of something as true' },
    {
        word: 'CREDULITY',
        definition: 'willingness to believe or trust too readily'
    },
    {
        word: 'CREED',
        definition: 'any system, doctrine or formula of religious belief'
    },
    { word: 'CRESCENDO', definition: 'a gradual increase in loudness' },
    {
        word: 'CREVASSE',
        definition: 'a crack or fissure in a glacier or snow field, a chasm'
    },
    {
        word: 'CREVICE',
        definition: 'a narrow crack or fissure, in a rock or wall'
    },
    { word: 'CRITERION', definition: 'a standard of judgement or criticism' },
    {
        word: 'CROCKERY',
        definition: 'eating and serving tableware, usually made of ceramic'
    },
    {
        word: 'CRUCIBLE',
        definition: 'a cup-shaped piece of laboratory equipment'
    },
    {
        word: 'CRUSTACEAN',
        definition: 'any chiefly aquatic arthropod, such as lobster and shrimp'
    },
    {
        word: 'CRYPTOGRAM',
        definition: 'a message or writing in code or cipher'
    },
    {
        word: 'CUBICLE',
        definition: 'a small separate part or one of the compartments of a room'
    },
    {
        word: 'CUDGEL',
        definition: 'a short, thick stick used as a weapon, like a club'
    },
    { word: 'CUL-DE-SAC', definition: 'a blind alley or dead end street' },
    {
        word: 'CULMINATION',
        definition: 'the highest or climactic point of something'
    },
    {
        word: 'CULPRIT',
        definition: 'the person or thing at fault for a problem or crime'
    },
    {
        word: 'CULVERT',
        definition:
            'a channel under a road or railway for the draining of water'
    },
    { word: 'CUPIDITY', definition: 'greed for money or possessions' },
    {
        word: 'CURATOR',
        definition: 'a keeper or custodian of a museum or other collection'
    },
    {
        word: 'CURIO',
        definition: 'a strange and interesting object which invokes curiosity'
    },
    { word: 'CURMUDGEON', definition: 'a bad-tempered or surly person' },
    { word: 'CURTSY', definition: 'a respectful bow made by women and girls' },
    { word: 'CYGNET', definition: 'a young swan' },
    { word: 'CYNICISM', definition: 'a distrustful attitude' },
    { word: 'CYNOSURE', definition: 'that which serves to guide or direct' },
    { word: 'DATUM', definition: 'a single piece of information' },
    {
        word: 'DEACON',
        definition: 'a member of the clerical order below that of a priest'
    },
    {
        word: 'DEADLOCK',
        definition: 'a situation in which no progress can be made'
    },
    { word: 'DEARTH', definition: 'a scarcity or lack of something' },
    {
        word: 'DEBACLE',
        definition: 'a sudden and ignominious failure, a fiasco'
    },
    { word: 'DEBILITY', definition: 'a state of physical or mental weakness' },
    {
        word: 'DEBRIS',
        definition: 'rubble, wreckage, scattered remains of something destroyed'
    },
    {
        word: 'DECADENCE',
        definition: 'a state of moral or artistic decline or deterioration'
    },
    { word: 'DECAGON', definition: 'a polygon with ten sides and ten angles' },
    { word: 'DECAGRAM', definition: 'an si unit of mass equal to 101 grams' },
    { word: 'DECALITRE', definition: 'ten litres' },
    { word: 'DECALOGUE', definition: 'ten commandments' },
    { word: 'DECAMETER', definition: 'ten meters' },
    { word: 'DECASYLLABLE', definition: 'a verse having ten syllables' },
    {
        word: 'DECATHLON',
        definition: 'an athletic event consisting of 10 prescribed events'
    },
    {
        word: 'DECEIT',
        definition: 'an act or practice intended to deceive, a trick'
    },
    {
        word: 'DECENCY',
        definition: 'conformity to accepted standards of respectability'
    },
    {
        word: 'DECLAMATION',
        definition: 'rhetorical delivery, loud speaking in public'
    },
    {
        word: 'DECLENSION',
        definition:
            'the inflection of a part of speech, such as case and number'
    },
    { word: 'DECORUM', definition: 'appropriate social behavior, propriety' },
    {
        word: 'DECOY',
        definition: 'a person who entices or lures another person or thing'
    },
    {
        word: 'DEDICATION',
        definition: 'the quality of being committed to a task or purpose'
    },
    {
        word: 'DEFAMATION',
        definition: "act of injuring another's reputation by slander or libel"
    },
    {
        word: 'DEFENDANT',
        definition:
            'a person or group against whom a charge is brought in court'
    },
    { word: 'DEFERENCE', definition: 'humble submission and respect' },
    { word: 'DEFIANCE', definition: 'open resistance, bold disobedience' },
    { word: 'DEFICIENCY', definition: 'inadequacy or incompleteness' },
    { word: 'DEFORMITY', definition: 'a misshapen part, esp. of the body' },
    {
        word: 'DEGENERACY',
        definition: 'the state of being physically or morally deteriorated'
    },
    {
        word: 'DEGRADATION',
        definition: "a lowering from one's standing in office or society"
    },
    { word: 'DEITY', definition: 'a god or goddess, divine status' },
    {
        word: 'DEJECTION',
        definition:
            'a state of melancholy or depression, low spirits, the blues'
    },
    { word: 'DELECTATION', definition: 'great pleasure, delight' },
    { word: 'DELICACY', definition: 'the quality of being delicate' },
    { word: 'DELINEATION', definition: 'a precise description' },
    {
        word: 'DELIRIUM',
        definition: 'an acutely disturbed state of mind that occurs in fever'
    },
    {
        word: 'DELUSION',
        definition:
            'a false belief that is resistant to confrontation with fact'
    },
    {
        word: 'DEMAGOGUE',
        definition: 'a leader who espouses the cause of the common people'
    },
    {
        word: 'DEMARCATION',
        definition: 'the act of marking off a boundary or setting a limit'
    },
    { word: 'DEMEANOR', definition: "a person's conduct or behaviour" },
    {
        word: 'DEMERIT',
        definition: 'a quality of being inadequate, a fault, a disadvantage'
    },
    { word: 'DEMISE', definition: "a person's death" },
    {
        word: 'DEMONSTRATOR',
        definition:
            'a person who takes part in a public protest meeting or march'
    },
    {
        word: 'DEMURRAGE',
        definition: 'the delaying in port of a ship beyond the time allowed'
    },
    {
        word: 'DENDROLOGY',
        definition: 'the study of trees and other woody plants'
    },
    { word: 'DENOMINATION', definition: 'the act of naming or designating' },
    {
        word: 'DENOMINATOR',
        definition: 'the expression written below the line in a fraction'
    },
    {
        word: 'DENOUEMENT',
        definition: 'the final part of a play, movie, or narrative'
    },
    {
        word: 'DENTIFRICE',
        definition: 'toothpaste or any other substance for cleaning the teeth'
    },
    {
        word: 'DENUNCIATION',
        definition: 'proclamation, announcement, a publishing'
    },
    { word: 'DEPORTMENT', definition: "a person's behavior or manners" },
    { word: 'DEPOSITION', definition: 'the process of giving sworn evidence' },
    {
        word: 'DEPOSITOR',
        definition:
            'a person who makes a deposit, especially of money in a bank'
    },
    {
        word: 'DEPOSITORY',
        definition: 'a place where something is deposited for safekeeping'
    },
    { word: 'DEPRAVITY', definition: 'moral corruption' },
    { word: 'DEPRECIATION', definition: 'reduction in value over time' },
    {
        word: 'DEPREDATION',
        definition: 'the act of preying upon or plundering'
    },
    { word: 'DEPTH', definition: 'the vertical distance below a surface' },
    { word: 'DERELICTION', definition: "willful neglect of one's duty" },
    { word: 'DERISION', definition: 'mockery, taunt' },
    {
        word: 'DERIVATION',
        definition: 'the source from which something is derived, origin'
    },
    { word: 'DERMATOLOGY', definition: 'the medical study of skin' },
    {
        word: 'DERRICK',
        definition:
            'a crane with a movable pivoted arm for moving heavy objects'
    },
    { word: 'DERRING-DO', definition: 'valiant deeds in desperate times' },
    {
        word: 'DESCENT',
        definition: 'an action of moving downward, dropping, falling'
    },
    {
        word: 'DESECRATION',
        definition: 'an act of disrespect towards something considered sacred'
    },
    {
        word: 'DESISTANCE',
        definition: 'the act or state of desisting, cessation'
    },
    {
        word: 'DESPERADO',
        definition: 'a bold outlaw, especially one from the southern wild west'
    },
    {
        word: 'DESPOT',
        definition: 'a ruler with absolute power who exercise it cruelly'
    },
    { word: 'DESPOTISM', definition: 'an absolute or autocratic government' },
    {
        word: 'DESTITUTION',
        definition: 'the action of deserting or abandoning'
    },
    { word: 'DESUETUDE', definition: 'disuse, obsolescence' },
    { word: 'DETERMINATION', definition: 'firmness of purpose, resoluteness' },
    {
        word: 'DETERRENT',
        definition:
            'a thing that is intended to discourage someone from some act'
    },
    { word: 'DETRACTION', definition: 'the act of taking away' },
    { word: 'DETRIMENT', definition: 'the state if being harmed or damaged' },
    { word: 'DETRITUS', definition: 'waste or debris of any kind' },
    {
        word: 'DETUMESCENCE',
        definition: 'the process of subsiding from a state of tension'
    },
    {
        word: 'DEVIANCE',
        definition: 'the state of departing from usual or accepted standards'
    },
    { word: 'DEVILRY', definition: 'wicked activity' },
    { word: 'DEVILTRY', definition: 'extreme cruelty' },
    {
        word: 'DEXTERITY',
        definition: 'skill in performing tasks, especially with the hands'
    },
    {
        word: 'DIAGNOSIS',
        definition: 'the identification of the nature and cause of an illness'
    },
    {
        word: 'DIALECT',
        definition:
            'a socially or geographically distinct variant of a language'
    },
    {
        word: 'DIALECTICAL',
        definition:
            'the art of investigating or discussing the truth of opinions'
    },
    {
        word: 'DIALECTICIAN',
        definition: 'a person skilled in philosophical debate'
    },
    {
        word: 'DIALOGUE',
        definition: 'a conversation between two or more persons'
    },
    { word: 'DIATRIBE', definition: 'a forceful and bitter verbal attack' },
    { word: 'DICHOTOMY', definition: 'a cutting in two, a division' },
    {
        word: 'DICTION',
        definition: 'the style of enunciation in speaking or singing'
    },
    {
        word: 'DICTUM',
        definition: 'an authoritative statement, a dogmatic saying'
    },
    {
        word: 'DIFFERENCE',
        definition: 'the state or relation of being different, dissimilarity'
    },
    {
        word: 'DIFFERENTIA',
        definition: 'trait that discerns a species from another of same genus'
    },
    { word: 'DIFFIDENCE', definition: 'lack of self-confidence' },
    { word: 'DIFFUSION', definition: 'the spreading of something more widely' },
    {
        word: 'DIGNITARY',
        definition: 'an important or influential person, or one of high rank'
    },
    { word: 'DIGRAPH', definition: 'a directed graph' },
    {
        word: 'DIGRESSION',
        definition: 'a departure from the subject, course, or idea at hand'
    },
    {
        word: 'DILEMMA',
        definition: 'a situation requiring a choice between undesirable options'
    },
    {
        word: 'DILETTANTE',
        definition: 'a person with an amateur interest in the arts, a dabbler'
    },
    {
        word: 'DILIGENCE',
        definition: 'determination or perseverance when doing something'
    },
    { word: 'DIMINUTION', definition: 'a lessening, decrease or reduction' },
    { word: 'DIN', definition: 'a loud, unpleasant, and prolonged noise' },
    {
        word: 'DIORAMA',
        definition: 'a model representing a scene with 3d figures'
    },
    {
        word: 'DIPHTHONG',
        definition: 'a one-syllable sound made up of two vowels'
    },
    {
        word: 'DIPLOMACY',
        definition: 'the art and practice of conducting international relations'
    },
    {
        word: 'DIPLOMAT',
        definition: 'a person appointed to conduct international relations'
    },
    { word: 'DIPLOMATIST', definition: 'a person tactful in negotiation' },
    {
        word: 'DIRGE',
        definition: 'a funeral song or tune, expressing mourning for the dead'
    },
    {
        word: 'DISAFFECTION',
        definition:
            'a state of dissatisfaction with or alienation from something'
    },
    {
        word: 'DISAPPROBATION',
        definition: 'an act or expression of condemnation or disapproval'
    },
    {
        word: 'DISAVOWAL',
        definition:
            'a denial of relationship or responsibility towards something'
    },
    {
        word: 'DISBELIEVER',
        definition: 'one who disbelieves, one who does not believe'
    },
    {
        word: 'DISCIPLE',
        definition: 'a person who is a pupil of the doctrines of another'
    },
    {
        word: 'DISCONTINUANCE',
        definition: 'the occurrence of something being terminated, a cessation'
    },
    { word: 'DISCORD', definition: 'disagreement between people' },
    {
        word: 'DISCORDANCY',
        definition: 'the state of being at variance or in disagreement'
    },
    {
        word: 'DISCREPANCY',
        definition: 'an inconsistency between two or more facts'
    },
    {
        word: 'DISCRETION',
        definition: 'the quality of being discreet or circumspect'
    },
    {
        word: 'DISCURSIVENESS',
        definition: 'passing aimlessly from one subject to another, digressive'
    },
    {
        word: 'DISCUSSION',
        definition: 'the action or process of talking about something'
    },
    {
        word: 'DISFAVOR',
        definition: 'unfavorable regard, displeasure, disesteem, dislike'
    },
    { word: 'DISHABILLE', definition: 'extreme casual or disorderly dress' },
    {
        word: 'DISINCLINATION',
        definition: 'reluctance, unwillingness to do something'
    },
    {
        word: 'DISINFECTANT',
        definition: 'a chemical agent used to destroy harmful organisms'
    },
    {
        word: 'DISINFORMATION',
        definition: 'publicly announced false information about a country'
    },
    { word: 'DISMISSAL', definition: 'the act of sending someone away' },
    { word: 'DISOBEDIENCE', definition: 'refusal to obey' },
    { word: 'DISPARITY', definition: 'the state of being unequal, difference' },
    {
        word: 'DISPENSATION',
        definition: 'the act of dispensing or dealing out, distribution'
    },
    {
        word: 'DISPUTATION',
        definition: 'debate or argument, formal academic debate'
    },
    { word: 'DISQUIETUDE', definition: 'a state of uneasiness or anxiety' },
    { word: 'DISREPUTE', definition: 'a loss or lack of credit or repute' },
    {
        word: 'DISSECTION',
        definition: 'the act of dissecting, or something dissected'
    },
    {
        word: 'DISSENSION',
        definition: 'an act of expressing dissent, especially spoken'
    },
    {
        word: 'DISSERTATION',
        definition:
            'a written essay, or thesis, especially for a doctoral degree'
    },
    { word: 'DISSERVICE', definition: 'an ill turn or injury' },
    { word: 'DISSIDENCE', definition: 'protest against official policy' },
    { word: 'DISSIDENT', definition: 'a person who opposes official policy' },
    {
        word: 'DISSIPATION',
        definition: 'squandering of money, energy, or resources'
    },
    {
        word: 'DISSOLUTION',
        definition:
            'the termination of an organized body or legislative assembly'
    },
    {
        word: 'DISSONANCE',
        definition: 'inharmonious or harsh sound, cacophany'
    },
    {
        word: 'DISSUASION',
        definition: 'the act or an instance of persuading against'
    },
    {
        word: 'DISTENTION',
        definition: 'the state of being stretched beyond normal dimensions'
    },
    { word: 'DISTILLATE', definition: 'something formed by distilling' },
    {
        word: 'DISTILLATION',
        definition: 'the act of pouring out or falling in drops'
    },
    {
        word: 'DISTILLER',
        definition: 'a person who owns, works in or operates a distillery'
    },
    {
        word: 'DISTINCTION',
        definition: 'a difference or contrast between similar things or people'
    },
    {
        word: 'DISTRAINOR',
        definition: 'one who distrains, the party distraining goods or chattels'
    },
    { word: 'DISUNION', definition: 'separation of a union' },
    { word: 'DISYLLABLE', definition: 'a word comprising two syllables' },
    {
        word: 'DIVA',
        definition:
            'any female celebrity, usually a well known singer or actress'
    },
    { word: 'DIVAGATION', definition: 'straying off from a course or way' },
    {
        word: 'DIVERGENCE',
        definition:
            'a difference or conflict in opinions, interests, wishes, etc'
    },
    {
        word: 'DIVERSION',
        definition: 'an instance of turning something aside from its course'
    },
    { word: 'DIVERSITY', definition: 'the quality of being different' },
    {
        word: 'DIVINATION',
        definition:
            'the practice of foretelling the future by supernatural means'
    },
    {
        word: 'DIVINITY',
        definition: 'the property of being divine, of being like a god or god'
    },
    {
        word: 'DIVISOR',
        definition: 'a number or expression that another is to be divided by'
    },
    {
        word: 'DIVULGENCE',
        definition: 'the act of making known (private or sensitive information)'
    },
    { word: 'DOCKET', definition: 'a calendar or list of cases for trial' },
    {
        word: 'DOCTRINE',
        definition: 'a belief or tenet, especially about theological matters'
    },
    {
        word: 'DOE',
        definition:
            'the female of the deer, antelope, and certain other animals'
    },
    {
        word: 'DOGGEREL',
        definition: 'verse or words that are badly written or expressed'
    },
    {
        word: 'DOGMA',
        definition: 'an official system of tenets, laid down by an authority'
    },
    { word: 'DOLOR', definition: 'sorrow, grief, misery or anguish' },
    { word: 'DOLT', definition: 'a stupid person' },
    {
        word: 'DOMAIN',
        definition: 'a geographic area owned by a single person or organization'
    },
    {
        word: 'DOMESTICITY',
        definition: 'affection for the home and its material comforts'
    },
    { word: 'DOMICILE', definition: 'a home or residence' },
    { word: 'DOMINANCE', definition: 'power and influence over others' },
    {
        word: 'DOMINATION',
        definition: 'the exercise of control or influence over something'
    },
    { word: 'DONATOR', definition: 'one who donates' },
    { word: 'DONEE', definition: 'someone who receives a gift from a donor' },
    { word: 'DONOR', definition: 'one who donates, typically, money' },
    {
        word: 'DOTARD',
        definition: 'a person with impaired intellect, especially an old person'
    },
    {
        word: 'DOUBLET',
        definition: "a close-fitting jacket, men's wear in the renaissance"
    },
    {
        word: 'DOWRY',
        definition:
            'the money,or goods a wife brings to her husband at marriage'
    },
    {
        word: 'DRACHMA',
        definition: 'the currency of greece until 2001, with the symbol ?'
    },
    {
        word: 'DRAGNET',
        definition: 'a net dragged across the bottom of a body of water'
    },
    {
        word: 'DRAINAGE',
        definition:
            'a removal of surface and sub-surface water from a given area'
    },
    { word: 'DRAMATIST', definition: 'playwright' },
    { word: 'DRIVEL', definition: 'childish, silly or meaningless talk' },
    { word: 'DROSS', definition: 'something regarded as worthless, rubbish' },
    {
        word: 'DROUGHT',
        definition: 'a period of dry weather, especially injurous to crops'
    },
    { word: 'DRUDGERY', definition: 'tedious, menial and exhausting work' },
    { word: 'DUCKLING', definition: 'a young duck' },
    { word: 'DUET', definition: 'a performance by two people, esp. musicians' },
    { word: 'DUPLICITY', definition: 'deceitfulness, double dealing' },
    {
        word: 'DURANCE',
        definition: 'confinement or restraint by force, imprisonment'
    },
    {
        word: 'DURATION',
        definition: 'an amount of time or a particular time interval'
    },
    { word: 'DURESS', definition: 'coercion, compulsion by threat or force' },
    {
        word: 'DYNE',
        definition: 'a unit of force in the cgs system. symbol: dyn'
    },
    { word: 'EARTHENWARE', definition: 'pottery of baked or hardened clay' },
    { word: 'ECCENTRICITY', definition: 'oddity, peculiarity' },
    { word: 'ECHELON', definition: 'a level or rank in an organization' },
    { word: 'ECLAT', definition: 'brilliance of success or effort, splendor' },
    {
        word: 'ECLIPSE',
        definition: 'the complete or partial interception of light from a star'
    },
    { word: 'ECSTASY', definition: 'intense pleasure' },
    {
        word: 'EDICT',
        definition: 'a proclamation of law or other authoritative command'
    },
    {
        word: 'EDIFICE',
        definition: 'a building, esp. a large and imposing one'
    },
    {
        word: 'EFFEMINACY',
        definition: 'the quality of showing feminine traits (in a man)'
    },
    {
        word: 'EFFICACY',
        definition: 'the ability to produce a desired or intended result'
    },
    {
        word: 'EFFICIENCY',
        definition:
            'the extent to which time is well used for the intended task'
    },
    {
        word: 'EFFIGY',
        definition: 'a dummy or crude representation of something that is hated'
    },
    { word: 'EFFLORESCENCE', definition: 'the state or a period of flowering' },
    {
        word: 'EFFLUVIUM',
        definition: 'a gaseous or vaporous emission, especially a foul odour'
    },
    { word: 'EFFRONTERY', definition: 'insolent or impertinent behavior' },
    {
        word: 'EFFULGENCE',
        definition: 'a state of being bright and radiant, splendor, brilliance'
    },
    { word: 'EFFUSION', definition: 'an outpouring of liquid' },
    {
        word: 'EGOISM',
        definition: 'the tendency to think of self and self-interest'
    },
    { word: 'EGOIST', definition: 'a conceited and self-centered person' },
    {
        word: 'EGOTISM',
        definition: 'a tendency to talk excessively about oneself'
    },
    {
        word: 'EGOTIST',
        definition: 'a person who talks excessively about himself'
    },
    { word: 'ÉLAN', definition: 'spirit, zeal, ardor' },
    { word: 'ELASTICITY', definition: 'flexibility, resilience, adaptability' },
    {
        word: 'ELECTROLYSIS',
        definition: 'the passage of an electriccurrent through an electrolyte'
    },
    {
        word: 'ELEGY',
        definition: 'a mournful or plaintive poem, a funeral song'
    },
    { word: 'ELIXIR', definition: 'a liquid which converts lead to gold' },
    {
        word: 'ELOCUTION',
        definition: 'the skill of a clear and expressive speech'
    },
    {
        word: 'ELOQUENCE',
        definition: 'the quality of artistry and persuasiveness in language'
    },
    {
        word: 'ELUSION',
        definition: 'the act, or abstract properties, of eluding'
    },
    {
        word: 'EMBARGO',
        definition: 'any restriction placed on commerce by a government'
    },
    {
        word: 'EMBLEM',
        definition: 'a representative symbol, such as a trademark or logo'
    },
    {
        word: 'EMBODIMENT',
        definition: 'a tangible or visible form of an idea, quality, or feeling'
    },
    {
        word: 'EMBOLISM',
        definition: 'an obstruction or occlusion of an artery'
    },
    {
        word: 'EMERGENCE',
        definition: 'the act of coming forth from envelopment or concealment'
    },
    {
        word: 'EMIGRANT',
        definition: 'someone who leaves a country to settle in a new country'
    },
    {
        word: 'EMINENCE',
        definition: 'someone of high rank, reputation or social station'
    },
    { word: 'EMISSARY', definition: 'a person sent on a special mission' },
    {
        word: 'EMOLUMENT',
        definition:
            'payment for an office or employment, compensation for a job'
    },
    {
        word: 'EMPATHY',
        definition: 'the ability to understand and share the feelings of others'
    },
    {
        word: 'EMPHASIS',
        definition: 'special weight given to something considered important'
    },
    {
        word: 'EMPORIUM',
        definition:
            'a market place or trading centre, particularly in antiquity'
    },
    {
        word: 'ENCLAVE',
        definition: 'a country, or part thereof, that is surrounded by another'
    },
    {
        word: 'ENCOMIUM',
        definition:
            'a piece of writing that praises someone or something highly'
    },
    {
        word: 'ENCUMBRANCE',
        definition: 'something that encumbers, a burden that must be carried'
    },
    {
        word: 'ENCYCLOPEDIA',
        definition:
            'a book or set of books containing articles on various topics'
    },
    {
        word: 'ENDURANCE',
        definition: "the measure of a person's stamina or persistence"
    },
    {
        word: 'ENIGMA',
        definition: 'a puzzling or inexplicable occurrence or situation'
    },
    {
        word: 'ENMITY',
        definition: 'a feeling or condition of hostility, hatred, animosity'
    },
    {
        word: 'ENNUI',
        definition:
            'a listlessness or melancholia caused by boredom, depression'
    },
    {
        word: 'ENORMITY',
        definition: 'greatness of size, scope, extent, or influence, immensity'
    },
    { word: 'ENORMOUSNESS', definition: 'great size or magnitude' },
    { word: 'ENTIRETY', definition: 'wholeness, fullness, the whole' },
    {
        word: 'ENTOMOLOGY',
        definition: 'the branch of zoology dealing with insects'
    },
    {
        word: 'ENTRAIL',
        definition: 'the internal parts of the trunk of a body, the intestines'
    },
    {
        word: 'ENTREATY',
        definition: 'the act of entreating or beseeching, urgent prayer'
    },
    {
        word: 'ENTRÉE',
        definition: 'a dish served as the main course of a meal'
    },
    {
        word: 'ENUNCIATION',
        definition: 'the act of announcing, proclaiming, or making known'
    },
    { word: 'ENVOY', definition: 'a representative, a diplomatic agent' },
    {
        word: 'ENZYME',
        definition: 'a protein that catalyses a biological chemical reaction'
    },
    {
        word: 'EPICURE',
        definition: 'a person who cultivates a refined taste, connoisseur'
    },
    {
        word: 'EPICYCLE',
        definition:
            'circle whose centre is on the circumference of a larger one'
    },
    {
        word: 'EPICYCLOID',
        definition:
            'plane curve made by tracing the path of a point of a circle'
    },
    {
        word: 'EPIDERMIS',
        definition: 'the outer, protective layer of the skin of vertebrates'
    },
    {
        word: 'EPILOGUE',
        definition: 'a concluding part added to a literary work, as a novel'
    },
    {
        word: 'EPIPHANY',
        definition: 'a manifestation of a divine or superhuman being'
    },
    {
        word: 'EPISTEMOLOGY',
        definition:
            'the branch of philosophy dealing with the study of knowledge'
    },
    {
        word: 'EPISTLE',
        definition:
            'a letter, or a literary composition in the form of a letter'
    },
    {
        word: 'EPITAPH',
        definition: 'an inscription on a gravestone in memory of the deceased'
    },
    {
        word: 'EPITHET',
        definition: 'any phrase applied to a person/thing to describe a quality'
    },
    {
        word: 'EPITOME',
        definition: 'a person or thing that is typical of a whole class'
    },
    {
        word: 'EPOCH',
        definition: 'a period of history, esp. considered remarkable/noteworthy'
    },
    {
        word: 'EPODE',
        definition: 'a lyric poem in which a short verse follws a long one'
    },
    {
        word: 'EQUANIMITY',
        definition: 'mental or emotional stability or composure, calmness'
    },
    {
        word: 'EQUILIBRIUM',
        definition: 'the condition in which competing influences are balanced'
    },
    {
        word: 'EQUIPOISE',
        definition: 'an equal distribution of weight, even balance, equilibrium'
    },
    {
        word: 'EQUITY',
        definition: 'the quality of being fair or impartial, fairness'
    },
    {
        word: 'ERASURE',
        definition: 'the action of erasing, deletion, obliteration'
    },
    {
        word: 'ERUDITION',
        definition: 'knowledge acquired by study, research, etc., learning'
    },
    { word: 'ESPIONAGE', definition: 'the act or practice of spying' },
    { word: 'ESPRIT', definition: 'spirit, enthusiasm' },
    { word: 'ESSENCE', definition: 'the inherent nature of a thing or idea' },
    {
        word: 'ESTUARY',
        definition: 'coastal water body where ocean tides and river water merge'
    },
    {
        word: 'ETHOS',
        definition: 'characteristic spirit of a culture, era, or community'
    },
    { word: 'ETYMOLOGY', definition: 'the derivation of a word, word origin' },
    {
        word: 'EULOGY',
        definition:
            'an oration to honor a deceased person, usually at a funeral'
    },
    {
        word: 'EUPHEMISM',
        definition: 'an indirect expression substituted for an offensive one'
    },
    {
        word: 'EUPHONY',
        definition: 'a pleasing pronunciation of letters and syllables'
    },
    {
        word: 'EUPHORIA',
        definition: 'a feeling of happiness, confidence, or well-being'
    },
    {
        word: 'EUTHANASIA',
        definition: 'the practice of painlessly killing for humane reasons'
    },
    {
        word: 'EVANGELIST',
        definition: 'an itinerant or special preacher, especially a revivalist'
    },
    {
        word: 'EVASION',
        definition: 'the act of eluding or avoiding, particularly some pressure'
    },
    {
        word: 'EVOCATION',
        definition: 'an act or instance of evoking, a calling forth'
    },
    {
        word: 'EVOLUTION',
        definition: 'any process of formation or growth, development'
    },
    { word: 'EWE', definition: 'a female sheep, especially when fully mature' },
    { word: 'EX OFFICIO', definition: 'by right of position or office' },
    {
        word: 'EXASPERATION',
        definition: 'to irritate or provoke to a high degree, annoy extremely'
    },
    {
        word: 'EXCELLENCE',
        definition:
            'the state of possessing good qualities in an eminent degree'
    },
    {
        word: 'EXCITATION',
        definition: 'the act of exciting or putting in motion'
    },
    {
        word: 'EXCLAMATION',
        definition: 'a loud calling or crying out, indicative of emotion'
    },
    { word: 'EXCLUSION', definition: 'the act of shutting out' },
    { word: 'EXCORIATION', definition: 'the act of excoriating or flaying' },
    {
        word: 'EXCRESCENCE',
        definition: 'something, usually abnormal, growing out of something else'
    },
    {
        word: 'EXCRETION',
        definition:
            'the process of removing material that has no further utility'
    },
    {
        word: 'EXCURSION',
        definition: 'a brief recreational trip, a journey out of the usual way'
    },
    {
        word: 'EXECRATION',
        definition: 'a curse dictated by violent feelings of hatred'
    },
    {
        word: 'EXECUTOR',
        definition: 'a person who performs some duty, job, etc'
    },
    {
        word: 'EXEGESIS',
        definition: 'critical explanation or interpretation of a text'
    },
    {
        word: 'EXEMPLAR',
        definition: 'something fit to be imitated, ideal or model'
    },
    { word: 'EXIGENCY', definition: 'exigent state or character, urgency' },
    {
        word: 'EXISTENCE',
        definition: 'the state of being, existing, or occurring, beinghood'
    },
    {
        word: 'EXODUS',
        definition: 'a sudden departure of a large number of people'
    },
    {
        word: 'EXORBITANCE',
        definition: 'exceeding the bounds of custom, propriety, or reason'
    },
    {
        word: 'EXORCISM',
        definition: 'the ceremony or the formula used in exorcising'
    },
    {
        word: 'EXPANSE',
        definition: 'a wide stretch, usually of sea, sky, or land'
    },
    { word: 'EXPANSION', definition: 'the act or process of expanding' },
    {
        word: 'EXPECTANCY',
        definition: 'anticipation, the state of expecting something'
    },
    {
        word: 'EXPEDIENCY',
        definition: 'suitability for particular circumstance or situation'
    },
    {
        word: 'EXPONENT',
        definition: 'one who expounds, represents or advocates'
    },
    {
        word: 'EXPOSITION',
        definition: 'the act of expounding, setting forth, or explaining'
    },
    {
        word: 'EXPOSURE',
        definition: 'the condition of being exposed, uncovered, or unprotected'
    },
    { word: 'EXPULSION', definition: 'the act of driving out or expelling' },
    {
        word: 'EXTENSOR',
        definition: 'a muscle whose contraction extends or straightens a limb'
    },
    {
        word: 'EXTORTION',
        definition: 'obtaining something by the abuse of office or authority'
    },
    {
        word: 'EXTRADITION',
        definition:
            'surrender of an alleged fugitive by one authority to another'
    },
    {
        word: 'EXTRAVAGANCE',
        definition: 'excessive or superfluous expenditure of money'
    },
    {
        word: 'EXTREMITY',
        definition: 'the most extreme or furthest point of something'
    },
    { word: 'EXTROVERT', definition: 'an outgoing, gregarious person' },
    {
        word: 'FABRICATION',
        definition: 'the act of framing, construction, manufacture'
    },
    {
        word: 'FACADE',
        definition: 'the face of a building, especially the front'
    },
    {
        word: 'FACILITY',
        definition: 'ease in learning or in doing something, proficiency'
    },
    { word: 'FACTION', definition: 'a group or clique within a larger group' },
    {
        word: 'FACTIONALISM',
        definition: 'the splitting of a group into factions'
    },
    {
        word: 'FAD',
        definition: 'a temporary fashion, notion, manner of conduct, etc'
    },
    { word: 'FALDEROL', definition: 'nonsense or foolishness' },
    {
        word: 'FALLACY',
        definition: 'deceptive or false appearance, deceitfulness, deception'
    },
    {
        word: 'FAMINE',
        definition: 'extreme and general scarcity of food, as in a country'
    },
    {
        word: 'FANATIC',
        definition:
            'a person with an extreme enthusiasm or zeal, as in religion'
    },
    {
        word: 'FANATICISM',
        definition: 'the characteristic or practice of being a fanatic'
    },
    { word: 'FASTIDIOUSNESS', definition: 'the quality of being fastidious' },
    {
        word: 'FATALIST',
        definition:
            'one who maintains all things happen by inevitable necessity'
    },
    {
        word: 'FAUN',
        definition:
            'mythical woodland creature with pointed ears and short horns'
    },
    {
        word: 'FAUNA',
        definition: 'animals of a given region or period considered as a whole'
    },
    {
        word: 'FAUX PAS',
        definition: 'a slip or blunder in etiquette, manners, or conduct'
    },
    { word: 'FEALTY', definition: 'fidelity, faithfulness' },
    { word: 'FELICITY', definition: 'happiness, especially to a high degree' },
    { word: 'FELON', definition: 'a person convicted of a felony' },
    {
        word: 'FELONY',
        definition: 'an offense, as murder or burglary, of grave character'
    },
    {
        word: 'FERMENT',
        definition: 'living organisms (yeasts, molds) that cause fermentation'
    },
    {
        word: 'FERNERY',
        definition:
            'specialized garden for the cultivation and display of ferns'
    },
    {
        word: 'FEROCITY',
        definition: 'the condition of being ferocious, savage fierceness'
    },
    {
        word: 'FERVOR',
        definition: 'an intense, heated emotion, passion, ardor'
    },
    {
        word: 'FETISH',
        definition: 'an object seen as being the habitation of a spirit'
    },
    {
        word: 'FETUS',
        definition: 'an unborn vertebrate showing signs of the mature animal'
    },
    {
        word: 'FEUDALISM',
        definition: 'social system based on personal resources and fealty'
    },
    { word: 'FIASCO', definition: 'a complete and ignominious failure' },
    {
        word: 'FIAT',
        definition: 'an authoritative command or order, an effectual decree'
    },
    { word: 'FIDELITY', definition: "faithfulness to one's duties" },
    { word: 'FIEF', definition: 'a territory held in fee' },
    {
        word: 'FIGMENT',
        definition: 'a fabrication, fantasy, invention, something fictitious'
    },
    {
        word: 'FIGUREHEAD',
        definition:
            'person who is head of a group in title but has no authority'
    },
    {
        word: 'FINANCIER',
        definition: 'a person skilled in managing large financial operations'
    },
    { word: 'FINERY', definition: 'fine or showy dress, ornaments, etc' },
    { word: 'FISHMONGER', definition: 'a person who sells fish' },
    {
        word: 'FISSURE',
        definition: 'narrow opening produced by cleavage or separation of parts'
    },
    {
        word: 'FLAG-OFFICER',
        definition:
            'ship carrying the flag officer or commander, flying his flag'
    },
    {
        word: 'FLAIR',
        definition: 'a natural or innate talent or aptitude, a knack'
    },
    {
        word: 'FLATULENCE',
        definition: 'the state of having gas, trapped in the digestive system'
    },
    {
        word: 'FLAX',
        definition:
            'a plant of the genus linum which has a single, slender stalk'
    },
    {
        word: 'FLEXIBILITY',
        definition: 'the quality of being flexible, suppleness, pliability'
    },
    { word: 'FLEXION', definition: 'the act of bending a limb' },
    { word: 'FLOE', definition: 'a low, flat mass of floating ice' },
    {
        word: 'FLORA',
        definition: 'plants considered as a group, esp. those of one region'
    },
    { word: 'FLORIDNESS', definition: 'the quality of being florid' },
    { word: 'FLORIST', definition: 'a person who sells flowers' },
    {
        word: 'FLOTSAM',
        definition: 'debris floating in a sea, fragments from a shipwreck'
    },
    {
        word: 'FLUCTUATION',
        definition: 'a motion like that of waves, a moving back and forth'
    },
    {
        word: 'FLUE',
        definition:
            'a pipe or duct that carries gaseous combustion products away'
    },
    { word: 'FOLIAGE', definition: 'the leaves of plants' },
    { word: 'FOLIO', definition: 'a leaf of a book or manuscript' },
    {
        word: 'FOLK-LORE',
        definition: 'the traditional beliefs, legends, customs, etc'
    },
    { word: 'FOOLERY', definition: 'foolish behaviour or speech' },
    {
        word: 'FOOT-NOTE',
        definition: 'an explanatory or documenting note at the bottom of a page'
    },
    { word: 'FOPPERY', definition: 'the dress or actions of a fop' },
    { word: 'FORBEARANCE', definition: 'restraint under provocation' },
    {
        word: 'FORECASTLE',
        definition: 'a raised part of the upper deck at the front of a ship'
    },
    {
        word: 'FORECOURT',
        definition: 'courtyard before the entrance to a building'
    },
    { word: 'FOREFATHER', definition: 'ancestor' },
    {
        word: 'FOREGROUND',
        definition: 'the ground or parts situated in the front'
    },
    {
        word: 'FOREHEAD',
        definition: 'part of the face above the eyebrows and below the hairline'
    },
    { word: 'FOREIGNER', definition: 'a person from a foreign country' },
    {
        word: 'FOREKNOWLEDGE',
        definition: 'knowing beforehand, prescience, foresight, precognition'
    },
    { word: 'FOREMAN', definition: 'the leader of a work crew' },
    {
        word: 'FOREORDINATION',
        definition: 'previous ordination or appointment, predetermination'
    },
    {
        word: 'FOREPEAK',
        definition: 'the part of the hold of a ship within the angle of the bow'
    },
    {
        word: 'FORESAIL',
        definition: 'the lowest (and usually the largest) square sail'
    },
    {
        word: 'FORESHORE',
        definition: "the ground between the water's edge and cultivated land"
    },
    {
        word: 'FORESIGHT',
        definition: 'the ability to foresee or prepare wisely for the future'
    },
    {
        word: 'FORETHOUGHT',
        definition: 'thinking beforehand, planning, prior consideration'
    },
    {
        word: 'FORGERY',
        definition:
            'the production of a fake work that is claimed to be genuine'
    },
    { word: 'FORMATION', definition: 'something possessing structure or form' },
    {
        word: 'FORMULA',
        definition: 'any fixed or conventional method for doing something'
    },
    {
        word: 'FORTHRIGHT',
        definition: 'going straight to the point, frank, direct'
    },
    {
        word: 'FORTITUDE',
        definition: 'the mental strength that enables courage'
    },
    { word: 'FORUM', definition: 'a place for discussion' },
    {
        word: 'FOURSOME',
        definition:
            'a group of four, a quartet or a game played by four players'
    },
    { word: 'FRACAS', definition: 'a noisy, disorderly disturbance or fight' },
    {
        word: 'FRAILTY',
        definition: 'the condition of being frail, physically, mentally, etc'
    },
    {
        word: 'FRANKINCENSE',
        definition: 'type of incense obtained from the boswellia thurifera tree'
    },
    {
        word: 'FRAUDULENCE',
        definition: 'characterized by, involving, or proceeding from fraud'
    },
    {
        word: 'FREEMASON',
        definition:
            'a member of a guild of skilled masons during the middle ages'
    },
    {
        word: 'FREETHINKER',
        definition: 'a person who forms opinions on the basis of reason'
    },
    { word: 'FREQUENCY', definition: 'the rate of occurrence of anything' },
    { word: 'FRESHNESS', definition: 'the state or quality of being fresh' },
    {
        word: 'FRIEZE',
        definition: 'a decorative band beneath the cornice of an interior wall'
    },
    {
        word: 'FRIGIDARIUM',
        definition: 'in roman baths, a room with a bath of cold water'
    },
    {
        word: 'FRISSON',
        definition: 'a sudden surge of excitement, shudder of emotion, thrill'
    },
    {
        word: 'FRIVOLITY',
        definition: 'frivolous acts, state of being frivolous'
    },
    { word: 'FRUITION', definition: 'the fulfillment of something worked for' },
    { word: 'FULCRUM', definition: 'the support about which a lever pivots' },
    {
        word: 'FUNCTIONARY',
        definition:
            'a person employed as an official who holds limited authority'
    },
    { word: 'FUNGUS', definition: 'any member of the kingdom fungi' },
    {
        word: 'FURLONG',
        definition: 'a unit of distance, equal to 220 yards or 0.2 km'
    },
    {
        word: 'FURTHERANCE',
        definition: 'the act of furthering or helping forward'
    },
    {
        word: 'FUSTIAN',
        definition: 'a kind of coarse twilled cotton or cotton and linen stuff'
    },
    {
        word: 'GAFFE',
        definition: 'a foolish and embarrassing error, esp one made in public'
    },
    { word: 'GAIETY', definition: 'the state of being happy' },
    { word: 'GAIT', definition: 'a manner of walking, stepping, or running' },
    {
        word: 'GALLEON',
        definition: 'a large sailing vessel of the 15th to the 17th centuries'
    },
    { word: 'GALVANISM', definition: 'the chemical generation of electricity' },
    {
        word: 'GAMBIT',
        definition: 'an opening in chess, in which a minor piece is sacrificed'
    },
    { word: 'GAMESTER', definition: 'a person who plays games' },
    { word: 'GAMUT', definition: 'a (normally) complete range' },
    {
        word: 'GASTRITIS',
        definition: 'inflammation of the lining of the stomach'
    },
    { word: 'GASTRONOMY', definition: 'the art or science of good eating' },
    {
        word: 'GAUNTLET',
        definition: 'a medieval glove, as of mail or plate, worn by a knight'
    },
    {
        word: 'GENDARME',
        definition: 'a member of the gendarmerie, a policing military body'
    },
    {
        word: 'GENEALOGIST',
        definition: 'a person who studies, professes or practices genealogy'
    },
    {
        word: 'GENEALOGY',
        definition:
            'a record or account of the ancestry and descent of a person'
    },
    { word: 'GENERALITY', definition: 'the quality of being general' },
    {
        word: 'GENEROSITY',
        definition: 'the trait of being willing to donate money and/or time'
    },
    {
        word: 'GENESIS',
        definition: 'the origin or point at which something begins to exist'
    },
    {
        word: 'GENIALITY',
        definition: 'the quality of being warmly and pleasantly cheerful'
    },
    {
        word: 'GEOLOGY',
        definition:
            'science of the structure of the earth through study of rocks'
    },
    {
        word: 'GESTATION',
        definition: 'the period of time an infant develops inside the mother'
    },
    {
        word: 'GIRDER',
        definition: 'a beam of steel, wood,etc, used as a main support'
    },
    {
        word: 'GIST',
        definition: 'the most essential part, the main idea or substance'
    },
    {
        word: 'GLACIER',
        definition: 'a large body of ice which flows under its own mass'
    },
    {
        word: 'GLAZIER',
        definition: 'a person who fits windows or the like with glass'
    },
    {
        word: 'GLUTTON',
        definition: 'a person who eats and drinks excessively or voraciously'
    },
    { word: 'GLUTTONY', definition: 'the vice of eating to excess' },
    { word: 'GOSLING', definition: 'a young goose' },
    {
        word: 'GOSSAMER',
        definition: 'a fine, filmy cobweb seen on grass or floating in the air'
    },
    {
        word: 'GOUGE',
        definition: 'to scoop out or turn with or as if with a gouge'
    },
    {
        word: 'GOURD',
        definition: 'the dried shell of a hard fruit used for utensils'
    },
    { word: 'GOURMAND', definition: 'a person who is fond of good eating' },
    {
        word: 'GRADATION',
        definition: 'a sequence of gradual, successive stages'
    },
    { word: 'GRADIENT', definition: 'an inclined surface, grade, ramp' },
    {
        word: 'GRANARY',
        definition: 'a storage facility for grain or sometimes animal feed'
    },
    {
        word: 'GRANDEUR',
        definition: 'the state of being grand or splendid, magnificence'
    },
    {
        word: 'GRANDILOQUENCE',
        definition: 'lofty, pompous or bombastic speech or writing'
    },
    { word: 'GRANTEE', definition: 'the person to whom something is granted' },
    { word: 'GRANTOR', definition: 'a person who grants something' },
    { word: 'GRANULE', definition: 'a tiny grain, a small particle' },
    {
        word: 'GRATIFICATION',
        definition: 'the act of pleasing the mind, the taste, or the appetite'
    },
    {
        word: 'GRATUITY',
        definition: 'a reward, or payment provided freely, without obligation'
    },
    {
        word: 'GRENADIER',
        definition: 'a type of soldier, originally one who threw grenades'
    },
    { word: 'GRIEVANCE', definition: 'something which causes grief' },
    {
        word: 'GRINDSTONE',
        definition: 'an abrasive wheel for sharpening, polishing or grinding'
    },
    { word: 'GRISTLE', definition: 'cartilage, especially in meats' },
    { word: 'GROTTO', definition: 'a cave or cavern' },
    {
        word: 'GROUSE',
        definition: 'any gallinaceous birds of the subfamily tetraoninae'
    },
    {
        word: 'GUILE',
        definition: 'insidious cunning in attaining a goal, artful deception'
    },
    { word: 'GUINEA', definition: 'a coastal region in w africa' },
    {
        word: 'GUISE',
        definition: 'general external appearance, aspect, semblance'
    },
    {
        word: 'GULLIBILITY',
        definition:
            'the quality of believing information, truthful or otherwise'
    },
    { word: 'GUMPTION', definition: 'energy of mind and body, enthusiasm' },
    { word: 'GUSTO', definition: 'enthusiasm, enjoyment, vigor' },
    { word: 'GYNECOCRACY', definition: 'a society ruled by women' },
    {
        word: 'GYNECOLOGY',
        definition: "a medical science dealing with women's reproductive health"
    },
    {
        word: 'GYROSCOPE',
        definition: 'apparatus of a wheel which spins inside of a frame'
    },
    { word: 'HABITANT', definition: 'inhabitant, dweller' },
    {
        word: 'HABITUDE',
        definition: "the essential character of one's being or existence"
    },
    {
        word: 'HACKLES',
        definition: "the erectile hair on the back of an animal's neck"
    },
    {
        word: 'HANDWRITING',
        definition: 'writing done with a pen or pencil in the hand, script'
    },
    {
        word: 'HANGAR',
        definition: 'a large garage-like structure where aircraft are kept'
    },
    {
        word: 'HARBINGER',
        definition: 'a person who makes known the approach of another, herald'
    },
    { word: 'HARDIHOOD', definition: 'boldness and daring' },
    { word: 'HASTE', definition: 'swiftness of motion, speed' },
    {
        word: 'HAUGHTINESS',
        definition:
            'the state or property of being haughty, arrogance, snobbery'
    },
    { word: 'HAUTEUR', definition: 'haughtiness or arrogance, loftiness' },
    { word: 'HAVOC', definition: 'great destruction or devastation' },
    {
        word: 'HAWTHORN',
        definition: 'any of various small trees having small fruits and thorns'
    },
    {
        word: 'HAZARD',
        definition:
            'an unavoidable danger or risk, even though often foreseeable'
    },
    {
        word: 'HEDONISM',
        definition:
            'the doctrine that pleasure or happiness is the highest good'
    },
    {
        word: 'HEGEMONY',
        definition: 'leadership exercised by one nation over others'
    },
    {
        word: 'HEIFER',
        definition: 'a young female bovine (cow) that has not yet had a calf'
    },
    {
        word: 'HEMORRHAGE',
        definition: 'a profuse discharge of blood from a ruptured blood vessel'
    },
    {
        word: 'HEMORRHOID',
        definition: 'an abnormally enlarged vein, occurring inside the rectum'
    },
    {
        word: 'HENCHMAN',
        definition: 'a loyal and trusted follower or subordinate'
    },
    {
        word: 'HEPTAGON',
        definition: 'a polygon with seven sides and seven angles'
    },
    { word: 'HEPTARCHY', definition: 'government by seven people' },
    {
        word: 'HERBARIUM',
        definition: 'a collection of dried plants or parts of plants'
    },
    {
        word: 'HEREDITY',
        definition:
            'transmission of the qualities of parents to their offspring'
    },
    {
        word: 'HERESY',
        definition: 'opinion or doctrine at variance with the accepted doctrine'
    },
    {
        word: 'HERETIC',
        definition: 'anyone who does not conform to an established doctrine'
    },
    {
        word: 'HERITAGE',
        definition: 'an inheritance, property that may be inherited'
    },
    {
        word: 'HERNIA',
        definition: 'disorder where a part of the body protrudes through a tear'
    },
    {
        word: 'HEROINE',
        definition: 'a woman of distinguished courage or ability'
    },
    {
        word: 'HESITANCY',
        definition:
            'a pausing before beginning a task, often as a result of fear'
    },
    {
        word: 'HESITATION',
        definition: 'a delay due to uncertainty of mind or fear'
    },
    { word: 'HETERODOXY', definition: 'the quality of being heterodox' },
    {
        word: 'HETEROGENEITY',
        definition: 'the state of being composed from dissimilar parts'
    },
    { word: 'HEXAGON', definition: 'a polygon with six sides and six angles' },
    { word: 'HIATUS', definition: 'a gap in a series, making it incomplete' },
    {
        word: 'HIERARCHY',
        definition: 'any system of persons or things ranked one above another'
    },
    {
        word: 'HIEROGLYPHICS',
        definition: 'a pictographic script, e.g. that of the ancient egyptians'
    },
    { word: 'HILLOCK', definition: 'a small hill' },
    {
        word: 'HINDRANCE',
        definition: 'something that holds back something else'
    },
    {
        word: 'HINDSIGHT',
        definition:
            'recognition of the realities of a situation after it happens'
    },
    { word: 'HOC', definition: "the latin word for 'this'" },
    {
        word: 'HOLOCAUST',
        definition: 'a great or complete devastation or destruction'
    },
    {
        word: 'HOMAGE',
        definition:
            "in feudalism, the oath of a vassal to honor a lord's rights"
    },
    {
        word: 'HOMEOPATHY',
        definition: "alternative medicine doctrine of 'like cures like'"
    },
    {
        word: 'HOMILY',
        definition: 'a sermon, especially concerning a practical matter'
    },
    {
        word: 'HOMOGENEITY',
        definition: 'the state or quality of being homogeneous'
    },
    {
        word: 'HOMONYM',
        definition: 'word that sounds like another but has a different meaning'
    },
    {
        word: 'HOMOPHONE',
        definition:
            'word pronounced the same as another but differs in spelling'
    },
    {
        word: 'HONORARIUM',
        definition: 'compensation for services without a predetermined value'
    },
    { word: 'HORDE', definition: 'a wandering troop or gang' },
    { word: 'HOSIERY', definition: 'stockings or socks of any kind' },
    { word: 'HOSTILITY', definition: 'the state of being hostile' },
    {
        word: 'HUBRIS',
        definition: 'excessive pride or self-confidence, arrogance'
    },
    { word: 'HUE', definition: 'a gradation or variety of a color, tint' },
    {
        word: 'HUMMOCK',
        definition:
            'an elevated tract of land above the level of a marshy region'
    },
    { word: 'HUMUS', definition: 'the dark organic material in soils' },
    {
        word: 'HUSBANDRY',
        definition: 'the production of edible crops or of animals for food'
    },
    {
        word: 'HUSSAR',
        definition: 'one of the light cavalry of european armies'
    },
    {
        word: 'HYBRID',
        definition: 'the offspring of two animals or plants of different breeds'
    },
    {
        word: 'HYDRA',
        definition: 'a nine-headed serpent, which when cut off grow back as two'
    },
    {
        word: 'HYDRODYNAMICS',
        definition: 'the branch of fluid dynamics that deals with liquids'
    },
    {
        word: 'HYDROMETALLURGY',
        definition: 'the technique of extracting metals with liquid solvents'
    },
    {
        word: 'HYDROMETER',
        definition: 'an instrument for determining the gravity of a liquid'
    },
    {
        word: 'HYDROSTATICS',
        definition: 'the scientific study of fluids at rest'
    },
    {
        word: 'HYGIENE',
        definition: 'the science of health, its promotion and preservation'
    },
    {
        word: 'HYPERBOLE',
        definition: 'extreme exaggeration or overstatement, a rhetorical device'
    },
    {
        word: 'HYPNOSIS',
        definition: 'an artificially induced trance state resembling sleep'
    },
    {
        word: 'HYPOCRISY',
        definition:
            'pretense of having principles that one does not really have'
    },
    {
        word: 'HYPOCRITE',
        definition:
            'one whose actions are inconsistent with their claimed belief'
    },
    {
        word: 'HYPOTENUSE',
        definition: 'the side of a right triangle opposite the right angle'
    },
    {
        word: 'HYPOTHESIS',
        definition:
            'a proposition given as explanation for a group of phenomena'
    },
    {
        word: 'HYSTERIA',
        definition: 'exhibiting uncontrollable emotion, such as fear or panic'
    },
    {
        word: 'ICHTHYOLOGY',
        definition: 'the branch of zoology dealing with fishes'
    },
    {
        word: 'ICHTHYOSAUR',
        definition:
            'a fishlike marine reptile of the extinct order ichthyosauria'
    },
    {
        word: 'ICINESS',
        definition: 'the state or quality of being icy or very cold, frigidity'
    },
    {
        word: 'ICONOCLAST',
        definition: 'one who destroys religious images or icons'
    },
    {
        word: 'IDEALIST',
        definition: 'a person who cherishes or pursues noble principles, etc'
    },
    {
        word: 'IDEOLOGY',
        definition: 'doctrine, philosophy, body of beliefs or principles'
    },
    {
        word: 'IDIOM',
        definition: 'a manner of speaking, a way of expressing oneself'
    },
    {
        word: 'IDIOSYNCRASY',
        definition:
            'a characteristic, habit, mannerism peculiar to an individual'
    },
    { word: 'IDOLATRY', definition: 'the religious worship of idols' },
    { word: 'IGNOMINY', definition: 'great dishonor, shame, or humiliation' },
    { word: 'ILLUMINANT', definition: 'something that illuminates' },
    {
        word: 'ILLUSION',
        definition: 'anything that seems to be something that it is not'
    },
    { word: 'IMBROGLIO', definition: 'a misunderstanding, disagreement, etc' },
    { word: 'IMITATION', definition: 'the act of imitating' },
    { word: 'IMITATOR', definition: 'one who imitates or apes another' },
    {
        word: 'IMMUNITY',
        definition: 'the state of being insusceptible to something'
    },
    {
        word: 'IMPASSE',
        definition: 'a situation from which there is no escape, deadlock'
    },
    {
        word: 'IMPATIENCE',
        definition: 'restlessness and intolerance of delays'
    },
    {
        word: 'IMPETUOSITY',
        definition: 'the quality of making rash or arbitrary decisions'
    },
    {
        word: 'IMPETUS',
        definition: 'something that impels, a stimulating factor'
    },
    { word: 'IMPIETY', definition: 'the state of being impious' },
    { word: 'IMPORTATION', definition: 'the act or an instance of importing' },
    {
        word: 'IMPOSTURE',
        definition:
            'the action or practice of imposing fraudulently upon others'
    },
    {
        word: 'IMPRECATION',
        definition: 'the act of imprecating, or invoking evil upon someone'
    },
    { word: 'IMPUISSANCE', definition: 'lacking strength, feeble, weak' },
    {
        word: 'IMPULSION',
        definition: 'the act of impelling, driving onward, or pushing'
    },
    { word: 'IMPUNITY', definition: 'exemption from punishment' },
    { word: 'INCANDESCENCE', definition: 'intensely bright, brilliant' },
    {
        word: 'INCANTATION',
        definition: 'the uttering of words purporting to have magical power'
    },
    { word: 'INCAPACITY', definition: 'the lack of a capacity, an inability' },
    {
        word: 'INCENTIVE',
        definition: 'something that motivates, rouses, or encourages'
    },
    {
        word: 'INCEPTION',
        definition: 'the creation or beginning of something, the establishment'
    },
    {
        word: 'INCIDENCE',
        definition: 'the rate or range of occurrence of something'
    },
    {
        word: 'INCISOR',
        definition: 'one of the front teeth of mammals, between the canines'
    },
    { word: 'INCITEMENT', definition: 'a call to act, encouragement to act' },
    {
        word: 'INCLINATION',
        definition: 'a disposition or bent, especially of the mind or will'
    },
    {
        word: 'INCREDULITY',
        definition: 'unwillingness or inability to believe, doubt, disbelief'
    },
    {
        word: 'INCUBUS',
        definition: 'an evil spirit supposed to oppress people while asleep'
    },
    {
        word: 'INCURSION',
        definition: 'a hostile entrance into or invasion of a place, a raid'
    },
    {
        word: 'INDEMNITY',
        definition:
            'obligation upon an individual to incur the losses of another'
    },
    { word: 'INDICANT', definition: 'something that indicates, indicator' },
    {
        word: 'INDICATOR',
        definition: 'a person or thing that indicates something'
    },
    {
        word: 'INDICTMENT',
        definition: 'a formal accusation initiating a criminal case'
    },
    { word: 'INDIGENCE', definition: 'extreme poverty or destitution' },
    {
        word: 'INDIGESTION',
        definition: 'a common medical condition often caused by eating quickly'
    },
    { word: 'INDIGNITY', definition: "an injury to a person's dignity" },
    { word: 'INDOLENCE', definition: 'habitual laziness or sloth' },
    {
        word: 'INDUCTEE',
        definition: 'a person who is inducted into an organization'
    },
    {
        word: 'INEBRIATION',
        definition: 'the state or characteristic of drunkenness'
    },
    {
        word: 'INERTIA',
        definition:
            'the property of a body that resists any change to its motion'
    },
    { word: 'INEXPERIENCE', definition: 'a lack of experience' },
    { word: 'INFAMY', definition: 'extremely bad reputation, public reproach' },
    {
        word: 'INFERENCE',
        definition: 'the act or process of inferring by deduction or induction'
    },
    { word: 'INFIDEL', definition: 'a non-believer of a certain religion' },
    {
        word: 'INFIRMARY',
        definition: 'a place where sick or injured people are cared for'
    },
    {
        word: 'INFIRMITY',
        definition: 'feebleness, frailty or ailment, especially due to old age'
    },
    { word: 'INFLUX', definition: 'a flow inward or into something' },
    { word: 'INFRACTION', definition: 'a minor offence, petty crime' },
    {
        word: 'INFRASTRUCTURE',
        definition:
            'the basic, underlying framework of a system of organization'
    },
    { word: 'INFUSION', definition: 'that which is infused' },
    {
        word: 'INGENUE',
        definition: 'an innocent, naïve, wholesome girl or young woman'
    },
    { word: 'INGÉNUE', definition: 'alternative spelling of ingénue' },
    {
        word: 'INGRATITUDE',
        definition: 'a lack or absence of gratitude, thanklessness'
    },
    {
        word: 'INIQUITY',
        definition: 'deviation from what is right, wickedness, gross injustice'
    },
    {
        word: 'INJUNCTION',
        definition: 'the act of enjoining, the act of directing, commanding'
    },
    { word: 'INKLING', definition: 'a slight suspicion or hint' },
    {
        word: 'INLET',
        definition: 'an indentation of a shoreline, small bay or arm'
    },
    {
        word: 'INNUENDO',
        definition: 'a derogatory hint or reference to a person or thing'
    },
    {
        word: 'INQUISITION',
        definition: 'an investigation or inquiry into the truth of some matter'
    },
    {
        word: 'INROAD',
        definition: 'an advance into enemy territory, an attempted invasion'
    },
    { word: 'INSATIABLE', definition: 'a damaging or serious encroachment' },
    {
        word: 'INSIGHT',
        definition: 'a sight or view of the interior of anything, introspection'
    },
    {
        word: 'INSOLENCE',
        definition: 'arrogant conduct, insulting, bold behaviour or attitude'
    },
    {
        word: 'INSOMNIA',
        definition: 'a sleeping disorder that is known for inability to sleep'
    },
    { word: 'INSPECTOR', definition: 'a person employed to inspect something' },
    {
        word: 'INSTIGATOR',
        definition: 'a person who intentionally incites or starts something'
    },
    {
        word: 'INSURGENCE',
        definition: 'an uprising or rebellion, an insurrection'
    },
    {
        word: 'INSURRECTION',
        definition: 'an organized opposition to an authority, a rebellion'
    },
    {
        word: 'INTEGRITY',
        definition: 'adherence to moral and ethical principles'
    },
    {
        word: 'INTELLECT',
        definition: 'the faculty of thinking, judging, abstract reasoning, etc'
    },
    {
        word: 'INTEMPERANCE',
        definition: 'lack of moderation or temperance, excess'
    },
    { word: 'INTENSION', definition: 'intensification, increase in degree' },
    {
        word: 'INTENTION',
        definition: 'a course of action that a person intends to follow'
    },
    { word: 'INTERCESSION', definition: 'an act or instance of interceding' },
    { word: 'INTERCESSOR', definition: 'a person who intercedes, a mediator' },
    {
        word: 'INTERDICT',
        definition:
            'any prohibitory decree of a court or administrative officer'
    },
    {
        word: 'INTERLOCUTOR',
        definition: 'a person who takes part in dialogue or conversation'
    },
    {
        word: 'INTERLOPER',
        definition:
            'a person who interferes or meddles in the affairs of others'
    },
    {
        word: 'INTERMISSION',
        definition:
            'a break between two performances or sessions (concert, etc)'
    },
    {
        word: 'INTERPRETER',
        definition: 'one who translates the words of a speaker to the audience'
    },
    {
        word: 'INTERSTICE',
        definition: 'a small opening or space between objects'
    },
    { word: 'INTERVALE', definition: 'a lowly tract of land along a river' },
    {
        word: 'INTESTACY',
        definition: 'the state of dying without having made a valid will'
    },
    { word: 'INTESTINE', definition: 'the lower part of the alimentary canal' },
    { word: 'INTIMACY', definition: 'the state of being intimate' },
    {
        word: 'INTIMATION',
        definition: 'the act of intimating, also, the thing intimated'
    },
    {
        word: 'INTRICACY',
        definition: 'the state or quality of being intricate or entangled'
    },
    {
        word: 'INTROGRESSION',
        definition:
            'genes of one species introduced in the gene pool of another'
    },
    {
        word: 'INTROVERT',
        definition: 'one who focuses on their own mind, feelings, or affairs'
    },
    {
        word: 'INTUITION',
        definition: 'immediate cognition without the use of rational processes'
    },
    { word: 'INUNDATION', definition: 'an overflow, a flood' },
    { word: 'INVALID', definition: 'an infirm or sickly person' },
    {
        word: 'INVASION',
        definition:
            'a military action of armed forces entering another territory'
    },
    {
        word: 'INVECTIVE',
        definition: 'vehement or violent denunciation, censure, or reproach'
    },
    { word: 'INVERSION', definition: 'the action of inverting' },
    { word: 'INVESTIGATOR', definition: 'one who investigates' },
    {
        word: 'INVESTOR',
        definition: 'a person who invests money in order to make a profit'
    },
    {
        word: 'INVOCATION',
        definition: 'the act of calling for the presence of some superior being'
    },
    {
        word: 'INVOLUTION',
        definition: 'entanglement, a spiralling inwards, intricacy'
    },
    {
        word: 'IOTA',
        definition: 'the ninth, and smallest, letter of the greek alphabet'
    },
    {
        word: 'IRONY',
        definition:
            'use of words to convey meaning opposite the literal meaning'
    },
    {
        word: 'IRRADIANCE',
        definition: 'incident flux of radiant energy per unit area'
    },
    {
        word: 'IRRITANCY',
        definition: 'the quality of being irritant or irritating'
    },
    {
        word: 'IRRUPTION',
        definition: 'the action of irrupting or breaking into, a violent entry'
    },
    { word: 'ISLE', definition: 'an island' },
    { word: 'ISLET', definition: 'a small island' },
    {
        word: 'ISOBAR',
        definition: 'atoms having equal weight but different atomis numbers'
    },
    { word: 'ITINERARY', definition: 'a route or proposed route of a journey' },
    {
        word: 'JARGON',
        definition: 'a technical terminology unique to a particular subject'
    },
    { word: 'JEOPARDY', definition: 'danger of loss, harm, or failure' },
    {
        word: 'JEREMIAD',
        definition: 'a prolonged lamentation or mournful complaint'
    },
    { word: 'JINGO', definition: 'one who supports policy favouring war' },
    { word: 'JOLLITY', definition: 'the state of being jolly, cheerfulness' },
    { word: 'JUDGMENT', definition: 'the act of judging' },
    {
        word: 'JUDICATURE',
        definition: 'the administration of justice by judges and courts'
    },
    {
        word: 'JUGGERNAUT',
        definition: 'any large, overpowering, destructive force or object'
    },
    {
        word: 'JUGGLERY',
        definition: 'the art of a juggler (i e trickery or deception)'
    },
    {
        word: 'JUNCTION',
        definition: 'the act of joining, or the state of being joined'
    },
    { word: 'JUNCTURE', definition: 'a place where things join, a junction' },
    {
        word: 'JURISDICTION',
        definition: 'the power, right, or authority to interpret and apply law'
    },
    { word: 'JURISPRUDENCE', definition: 'the science or philosophy of law' },
    { word: 'JUROR', definition: 'a member of a jury' },
    {
        word: 'JUSTIFICATION',
        definition:
            'reason or excuse which gives acceptable support for behavior'
    },
    {
        word: 'KEEPSAKE',
        definition: 'something kept for sentimental or nostalgic reasons'
    },
    { word: 'KERCHIEF', definition: 'a piece of cloth used to cover the head' },
    { word: 'KERNEL', definition: 'the body of a seed inside the husk' },
    {
        word: 'KILLJOY',
        definition:
            'a person who is anti-fun, or prevents others from having fun'
    },
    {
        word: 'KILN',
        definition: 'a furnace or oven for burning, baking, or drying something'
    },
    { word: 'KINFOLK', definition: 'relatives or kindred' },
    { word: 'KINGLING', definition: 'a kinglet, a petty king or ruler' },
    { word: 'KISMET', definition: 'fate, destiny' },
    { word: 'KLEPTOMANIAC', definition: 'one who steals compulsively' },
    {
        word: 'KNAVE',
        definition: 'a tricky, deceitful fellow, a dishonest person, a rogue'
    },
    {
        word: 'KNAVERY',
        definition: 'the (mis)behaviour of a knave, boyish mischief'
    },
    {
        word: 'KNELL',
        definition: 'sound made by a bell rung slowly, especially for funerals'
    },
    {
        word: 'KNICKKNACK',
        definition: 'an ornamental trinket or gimcrack, a bit of bric-a-brac'
    },
    { word: 'KNOLL', definition: 'a small, rounded hill or eminence, hillock' },
    { word: 'KUDOS', definition: 'praise, accolades' },
    {
        word: 'LACERATION',
        definition: 'an irregular open wound caused by a blunt impact'
    },
    {
        word: 'LACTATION',
        definition: 'the secretion of milk from the mammary gland of a female'
    },
    { word: 'LADDIE', definition: 'a small boy' },
    { word: 'LAGNIAPPE', definition: 'an extra or unexpected gift or benefit' },
    { word: 'LAMENTATION', definition: 'the act of lamenting' },
    { word: 'LANDHOLDER', definition: 'a person who owns land' },
    {
        word: 'LANDLORD',
        definition:
            'person who owns and rents land such as a house or apartment'
    },
    {
        word: 'LANGUOR',
        definition:
            'a state of the body or mind caused by exhaustion or disease'
    },
    {
        word: 'LARCENY',
        definition: 'the unlawful taking of personal property, theft'
    },
    {
        word: 'LARDER',
        definition: 'a cool room in a domestic house where food is stored'
    },
    { word: 'LARGESS', definition: 'generous bestowal of gifts' },
    { word: 'LARGESSE', definition: 'alternative spelling of largess' },
    {
        word: 'LASSIE',
        definition: 'a young girl, a lass, especially one seen as a sweetheart'
    },
    {
        word: 'LASSITUDE',
        definition: 'weariness of body or mind from strain, oppressive climate'
    },
    {
        word: 'LATENCY',
        definition: 'a delay between the initiation and occurence of something'
    },
    {
        word: 'LATTICE',
        definition: 'a flat panel constructed with crossed thin strips of wood'
    },
    {
        word: 'LAUDATION',
        definition: 'the act of lauding, praise, high commendation'
    },
    {
        word: 'LAUNDRESS',
        definition: 'a woman whose work is the washing and ironing of clothes'
    },
    { word: 'LAWGIVER', definition: 'one who provides the laws to a society' },
    { word: 'LAWMAKER', definition: 'one who makes or enacts laws' },
    { word: 'LAXITY', definition: 'the state or quality of being lax' },
    { word: 'LEA', definition: 'an open field, meadow' },
    {
        word: 'LEAFLET',
        definition:
            'a small flat or folded sheet of printed paper, advertisement'
    },
    {
        word: 'LECTERN',
        definition: 'a stand with a slanted top used to support a bible'
    },
    { word: 'LEGERDEMAIN', definition: 'sleight of hand' },
    {
        word: 'LEGION',
        definition: 'a division of the roman army of 3000 to 6000 soldiers'
    },
    { word: 'LEGISLATOR', definition: 'someone who creates or enacts laws' },
    {
        word: 'LEISURE',
        definition: 'freedom provided by the cessation of activities'
    },
    {
        word: 'LETHARGY',
        definition: 'the quality or state of being drowsy and dull, listless'
    },
    { word: 'LEVEE', definition: 'an embankment to prevent inundation' },
    { word: 'LEVITY', definition: 'lightness of manner or speech, frivolity' },
    {
        word: 'LEXICOGRAPHER',
        definition: 'one who writes or compiles a dictionary'
    },
    {
        word: 'LEXICOGRAPHY',
        definition: 'the art or craft of writing and editing dictionaries'
    },
    { word: 'LEXICON', definition: 'a wordbook or dictionary' },
    {
        word: 'LIABILITY',
        definition: 'moneys owed, debts or pecuniary obligations'
    },
    {
        word: 'LIAISON',
        definition: 'communication between two parties or groups'
    },
    {
        word: 'LIBATION',
        definition: 'pouring a liquid on the ground or on a victim in sacrifice'
    },
    {
        word: 'LIBRETTO',
        definition: 'the text of a dramatic musical work, such as an opera'
    },
    { word: 'LIEU', definition: 'see in lieu or in lieu of' },
    {
        word: 'LIGAMENT',
        definition: 'band of strong tissue that holds bones in position'
    },
    { word: 'LIKELIHOOD', definition: 'the state of being likely or probable' },
    { word: 'LIMERICK', definition: 'a kind of humorous verse of five lines' },
    {
        word: 'LIMITATION',
        definition: 'the act of limiting or the state of being limited'
    },
    {
        word: 'LINCHPIN',
        definition:
            'a pin through holes at the end of an axle to secure a wheel'
    },
    {
        word: 'LINEAGE',
        definition: 'descent in a line from a common progenitor, race'
    },
    { word: 'LINER', definition: 'someone who fits a lining to something' },
    { word: 'LINGO', definition: 'language, jargon or a dialect' },
    { word: 'LINGUA', definition: 'language' },
    {
        word: 'LINIMENT',
        definition:
            'a liquid or semi liquid preparation for applying to the skin'
    },
    {
        word: 'LIQUEFACIENT',
        definition: 'something that liquefies or promotes liquefaction'
    },
    {
        word: 'LIQUEUR',
        definition: 'a flavored alcoholic beverage that is usually very sweet'
    },
    { word: 'LITANY', definition: 'a prolonged or tedious account' },
    { word: 'LITERACY', definition: 'the ability to read' },
    {
        word: 'LITERATI',
        definition:
            'persons of scholarly or literary attainments, intellectuals'
    },
    { word: 'LITERATURE', definition: 'the body of all written works' },
    {
        word: 'LITHOTYPE',
        definition: 'a printing plate used in lithotypography'
    },
    { word: 'LITIGANT', definition: 'a person engaged in a lawsuit' },
    { word: 'LITURGY', definition: 'a form of public worship, ritual' },
    {
        word: 'LIVELIHOOD',
        definition: "a person's lifetime, or their manner of living"
    },
    { word: 'LOAM', definition: 'a rich, friable soil' },
    {
        word: 'LOBBYIST',
        definition: 'a person remunerated to persuade (to lobby) politicians'
    },
    { word: 'LOCH', definition: 'a lake' },
    {
        word: 'LOCOMOTION',
        definition:
            'the ability to move or the act of moving from place to place'
    },
    { word: 'LODE', definition: 'a rich supply or source' },
    { word: 'LODGMENT', definition: 'an area used for lodging' },
    {
        word: 'LOGIC',
        definition: 'the principles governing correct or reliable inference'
    },
    { word: 'LOGICIAN', definition: 'a person who studies or teaches logic' },
    {
        word: 'LOGISTICS',
        definition: 'the planning, implementation, and coordination of details'
    },
    {
        word: 'LOITERER',
        definition: 'one who loiters, one who lingers or hangs around'
    },
    {
        word: 'LONGEVITY',
        definition: 'the quality of being long-lasting, especially of life'
    },
    { word: 'LOQUACITY', definition: 'talkativeness' },
    { word: 'LORDLING', definition: 'an unimportant or petty lord' },
    {
        word: 'LOUGH',
        definition: 'a lake or long, narrow inlet, especially in ireland'
    },
    {
        word: 'LUCUBRATION',
        definition: 'laborious work, study, thought, etc , especially at night'
    },
    {
        word: 'LUMEN',
        definition: 'the amount of light that falls on a unit area'
    },
    {
        word: 'LUMINARY',
        definition: 'one that is an inspiration to others, who has had success'
    },
    { word: 'LUMMOX', definition: 'a clumsy, stupid person' },
    { word: 'LUNACY', definition: 'the state of being mad, insanity' },
    { word: 'LUNATIC', definition: 'an insane person' },
    {
        word: 'LUNE',
        definition: 'anything shaped like a crescent or a half moon'
    },
    { word: 'LYRE', definition: 'a stringed musical instrument' },
    {
        word: 'MACHINATION',
        definition: 'a clever scheme or artful plot, usually crafted for evil'
    },
    { word: 'MACHINATIONS', definition: 'plural form of machination' },
    { word: 'MACHINERY', definition: 'the parts of a machine, collectively' },
    {
        word: 'MACHINIST',
        definition: 'one versed in the principles of machines'
    },
    {
        word: 'MACROCOSM',
        definition: 'a complex structure, considered a single entity'
    },
    {
        word: 'MADRIGAL',
        definition: 'a song for a small number of unaccompanied voices'
    },
    {
        word: 'MAGICIAN',
        definition: 'an entertainer skilled in creating illusions'
    },
    { word: 'MAGISTRACY', definition: 'the office or dignity of a magistrate' },
    {
        word: 'MAGNATE',
        definition: 'a person of great influence in a particular field'
    },
    { word: 'MAGNET', definition: 'a thing or person that attracts' },
    {
        word: 'MAGNIFICENCE',
        definition: 'grandeur, brilliance, lavishness or splendor'
    },
    { word: 'MAGNITUDE', definition: 'size, extent, dimensions' },
    {
        word: 'MAHARAJA',
        definition: 'a ruling prince in india, especially one of major states'
    },
    {
        word: 'MAIDENHOOD',
        definition: 'the time when one is a maiden or young girl'
    },
    {
        word: 'MAIZE',
        definition: 'corn, a type of grain of the species zea mays'
    },
    { word: 'MALADY', definition: 'any ailment or disease of the human body' },
    {
        word: 'MALAISE',
        definition: 'a feeling of general bodily discomfort or unpleasantness'
    },
    {
        word: 'MALAPROPISM',
        definition: 'the use of an inappropriate word in place of a similar one'
    },
    {
        word: 'MALARIA',
        definition: 'disease characterized by chills, fever, and sweating'
    },
    { word: 'MALEDICTION', definition: 'a curse, imprecation, slander' },
    { word: 'MALEFACTOR', definition: 'a criminal or felon' },
    {
        word: 'MALFEASANCE',
        definition: 'an act by a public official that is contrary to law'
    },
    { word: 'MALINGERER', definition: 'a person who malingers' },
    {
        word: 'MALLET',
        definition: 'a hammerlike tool with a head commonly of wood'
    },
    {
        word: 'MANDATE',
        definition: 'authorization to act in a particular way on a public issue'
    },
    {
        word: 'MANE',
        definition: 'the long hair growing on the neck of some animals'
    },
    {
        word: 'MANIA',
        definition: 'violent derangement of mind, madness, insanity'
    },
    {
        word: 'MANNERISM',
        definition: 'a group of habitual behaviors peculiar to an individual'
    },
    { word: 'MANOR', definition: 'a landed estate' },
    { word: 'MANTEL', definition: 'the shelf above a fireplace' },
    {
        word: 'MANUFACTURER',
        definition: 'a company that owns or runs a manufacturing plant'
    },
    {
        word: 'MANUMISSION',
        definition: 'release from slavery, freedom, the act of manumitting'
    },
    {
        word: 'MARAUDER',
        definition: 'someone who moves about looking for plunder'
    },
    {
        word: 'MARQUEE',
        definition:
            'a large tent with open sides, used for outdoor entertainment'
    },
    {
        word: 'MARSUPIAL',
        definition:
            'mammal of the order of marsupialia, i.e. kangaroos, wombats'
    },
    {
        word: 'MARTINET',
        definition: 'a strict disciplinarian, especially a military one'
    },
    {
        word: 'MARTYRDOM',
        definition: 'the suffering of death on account of adherence to a cause'
    },
    { word: 'MASOCHIST', definition: 'someone who enjoys pain' },
    {
        word: 'MASONRY',
        definition: 'the art or occupation of a mason, stonework'
    },
    {
        word: 'MASTERY',
        definition: 'the position or authority of a master, command'
    },
    {
        word: 'MATINEE',
        definition: 'the afternoon showing of a movie or theatrical performance'
    },
    {
        word: 'MATRIARCH',
        definition: 'a female leader of a family, a tribe or group'
    },
    { word: 'MATRICIDE', definition: "the killing of one's mother" },
    { word: 'MATRIMONY', definition: 'marriage or the state of being married' },
    {
        word: 'MATRIX',
        definition:
            'a thing constituting the point from which another originates'
    },
    {
        word: 'MAUL',
        definition: 'a heavy hammer, as for driving stakes or wedges'
    },
    { word: 'MAUSOLEUM', definition: 'a large stately tomb' },
    {
        word: 'MAVERICK',
        definition: 'a person of independent or unorthodox views'
    },
    {
        word: 'MAXIM',
        definition: 'an expression of a general truth or principle'
    },
    {
        word: 'MEAD',
        definition: 'an alcoholic drink fermented from honey and water'
    },
    {
        word: 'MECHANICS',
        definition: 'branch of mathematics dealing with motion and forces'
    },
    { word: 'MEDALLION', definition: 'a large medal, usually decorative' },
    {
        word: 'MEDICINE',
        definition:
            'a substance which promotes healing when consumed in some way'
    },
    {
        word: 'MEDITATION',
        definition: 'a devotional exercise of, or leading to contemplation'
    },
    {
        word: 'MEDLEY',
        definition:
            'a mixture, especially of heterogeneous elements, hodgepodge'
    },
    {
        word: 'MEGALOMANIA',
        definition:
            'a symptom of mental illness marked by delusions of greatness'
    },
    {
        word: 'MELANGE',
        definition: 'a collection containing a variety of miscellaneous things'
    },
    {
        word: 'MELEE',
        definition: 'a confused hand-to-hand fight among several people'
    },
    {
        word: 'MEMENTO',
        definition:
            'a keepsake, an object kept as a reminder of a place or event'
    },
    {
        word: 'MENACE',
        definition: 'something that threatens to cause evil or harm, a threat'
    },
    {
        word: 'MENAGERIE',
        definition: 'a collection of live wild animals on exhibition'
    },
    { word: 'MENDACITY', definition: 'untruthfulness, tendency to lie' },
    { word: 'MENTALITY', definition: 'a mindset, a way of thinking' },
    { word: 'MENTOR', definition: 'a wise and trusted counselor or teacher' },
    {
        word: 'MERITOCRACY',
        definition: 'a society where status is assigned through competition'
    },
    {
        word: 'MERRIMENT',
        definition: 'cheerful or joyful gaiety, mirth, hilarity, laughter'
    },
    { word: 'MESSIEURS', definition: 'plural form of monsieur' },
    {
        word: 'METALLURGY',
        definition: 'the science of metals, their extraction from ores, etc'
    },
    {
        word: 'METAPHOR',
        definition:
            'figure of speech: something used to represent something else'
    },
    {
        word: 'METAPHYSICS',
        definition:
            'the underlying theoretical principles of a subject or field'
    },
    {
        word: 'METEMPSYCHOSIS',
        definition: 'transmigration of the soul, especially its reincarnation'
    },
    {
        word: 'METHODOLOGY',
        definition: 'a sat of principles for regulating a given discipline'
    },
    {
        word: 'METONYMY',
        definition:
            "figure of speech: an object's name used for a related object"
    },
    {
        word: 'METRONOME',
        definition:
            'a device used to mark time with ticks at an adjustible pace'
    },
    { word: 'METROPOLIS', definition: 'a large, busy city' },
    { word: 'METTLE', definition: 'a quality of endurance and courage' },
    {
        word: 'MIASMA',
        definition: 'noxious exhalations from putrescent organic matter'
    },
    {
        word: 'MICROCOSM',
        definition: 'man considered as a miniature counterpart of the universal'
    },
    {
        word: 'MICROMETER',
        definition: 'one one-millionth of a meter symbols: µm, um, rm'
    },
    {
        word: 'MICROSCOPY',
        definition: 'the study of microscopes, their design and manufacture'
    },
    {
        word: 'MIDWIFE',
        definition: 'a person trained to assist women in childbirth'
    },
    {
        word: 'MIEN',
        definition:
            'demeanor or attitude, especially one intended by its bearer'
    },
    { word: 'MILEAGE', definition: 'the total distance, in miles, travelled' },
    { word: 'MILIEU', definition: 'a person’s social setting or environment' },
    {
        word: 'MILITARISM',
        definition:
            "ideology: military is the foundation of a society's security"
    },
    {
        word: 'MILITIA',
        definition: 'an army of trained civilians called upon in time of need'
    },
    {
        word: 'MILLENNIUM',
        definition: 'a period of time consisting of one thousand years'
    },
    {
        word: 'MILLET',
        definition: 'any of a group of various types of grass used as food'
    },
    {
        word: 'MINISTRATION',
        definition: 'the act of ministering care, aid, religious services, etc'
    },
    {
        word: 'MINISTRY',
        definition: 'the service, function, or office of a minister of state'
    },
    {
        word: 'MINORITY',
        definition: 'any subgroup that does not form a numerical majority'
    },
    {
        word: 'MINUTIA',
        definition: 'a minor detail, often of negligible importance'
    },
    {
        word: 'MIRAGE',
        definition: 'something illusory, without substance or reality'
    },
    {
        word: 'MIRTH',
        definition: 'gaiety or jollity, especially when accompanied by laughter'
    },
    { word: 'MISADVENTURE', definition: 'an accidental mishap or misfortune' },
    { word: 'MISANTHROPE', definition: 'a hater of human kind' },
    { word: 'MISCELLANY', definition: 'miscellaneous items' },
    {
        word: 'MISDEED',
        definition: 'that which was done that should not have been'
    },
    {
        word: 'MISDEMEANOR',
        definition: 'a crime punishable by a small fine or a short prison term'
    },
    {
        word: 'MISER',
        definition:
            'a person who lives in poor conditions in order to save money'
    },
    { word: 'MISHAP', definition: 'an accident, mistake, or problem' },
    { word: 'MISOGAMY', definition: 'hatred of or opposition to marriage' },
    { word: 'MISOGYNY', definition: 'hatred or contempt for women' },
    { word: 'MISSAL', definition: 'any book of prayers or devotions' },
    {
        word: 'MISSILE',
        definition: 'an object intended to be launched into the air at a target'
    },
    {
        word: 'MISSIVE',
        definition: 'a written message, a letter, note or memo'
    },
    { word: 'MITE', definition: 'a minute arachnid' },
    {
        word: 'MOAT',
        definition: 'a deep ditch, usually filled with water, around a fort'
    },
    {
        word: 'MOBOCRACY',
        definition:
            'rule or control by the mob, or by a mass of ordinary people'
    },
    {
        word: 'MOCKERY',
        definition: 'the action of mocking, ridicule, derision'
    },
    { word: 'MODERATION', definition: 'avoidance of extremes, restraint' },
    { word: 'MODERATOR', definition: 'someone who moderates' },
    { word: 'MODERNITY', definition: 'the quality of being modern' },
    { word: 'MODICUM', definition: 'a moderate or small amount' },
    {
        word: 'MODIFICATION',
        definition: 'the act or result of altering something'
    },
    {
        word: 'MOMENTUM',
        definition: '(of a body in motion) the product of its mass and velocity'
    },
    {
        word: 'MONARCH',
        definition: 'a hereditary sovereign, as a king, queen, or emperor'
    },
    {
        word: 'MONASTERY',
        definition: 'place of residence for members of a religious community'
    },
    {
        word: 'MONGREL',
        definition:
            'someone of mixed kind or uncertain origin, especially a dog'
    },
    { word: 'MONITION', definition: 'a caution or warning of imminent danger' },
    {
        word: 'MONOCRACY',
        definition: 'government by only one person, autocracy'
    },
    {
        word: 'MONOGRAM',
        definition: "a design of letters interlaced, commonly one's initials"
    },
    { word: 'MONOGRAPH', definition: 'a treatise on a particular subject' },
    {
        word: 'MONOLITH',
        definition: 'a large object formed of a single block of stone'
    },
    { word: 'MONOLOGUE', definition: 'a prolonged talk by a single speaker' },
    {
        word: 'MONOMANIA',
        definition: 'excessive interest on a singular object or subject'
    },
    {
        word: 'MONOPOLY',
        definition: 'the exclusive possession or control of something'
    },
    { word: 'MONOSYLLABLE', definition: 'a word of one syllable' },
    {
        word: 'MONOTONE',
        definition: 'a series of speech sounds in one unvaried tone'
    },
    {
        word: 'MONOTONY',
        definition: 'tedium as a result of repetition or a lack of variety'
    },
    {
        word: 'MONSTROSITY',
        definition:
            'a plant or animal showing abnormal development or deformity'
    },
    {
        word: 'MONTAGE',
        definition: 'a single composition of images from various sources'
    },
    {
        word: 'MOONBEAM',
        definition: 'a shaft of moonlight, moonlight generally'
    },
    {
        word: 'MORALE',
        definition: 'mental condition with respect to confidence, zeal, etc'
    },
    {
        word: 'MORASS',
        definition: 'a tract of soft, wet ground, a marsh, a fen'
    },
    {
        word: 'MORATORIUM',
        definition: 'an authorized period of delay or waiting, regarding debts'
    },
    {
        word: 'MORES',
        definition: 'a set of moral norms derived from accepted practices'
    },
    {
        word: 'MORPHOLOGY',
        definition:
            'the part of biology dealing with the structure of organisms'
    },
    { word: 'MORTICIAN', definition: 'an undertaker or funeral director' },
    {
        word: 'MOSAIC',
        definition: 'an image made of small, colored pieces of glass'
    },
    { word: 'MOT JUSTE', definition: 'the exact, appropriate word' },
    {
        word: 'MOTE',
        definition: 'a small particle or speck, especially of dust'
    },
    { word: 'MOTIF', definition: 'a recurring or dominant element, a theme' },
    {
        word: 'MOTTO',
        definition: 'a maxim adopted as an expression of a guiding principle'
    },
    {
        word: 'MOUNTAINEER',
        definition: 'someone who lives in a mountainous area'
    },
    {
        word: 'MOUNTEBANK',
        definition: 'a person selling quack medicines, in a public place'
    },
    {
        word: 'MULATTO',
        definition: 'a person of mixed african and caucasian descent'
    },
    { word: 'MULETEER', definition: 'a mule driver' },
    { word: 'MULTIPLICITY', definition: 'a large number or variety' },
    {
        word: 'MUNIFICENCE',
        definition: 'the quality of being munificent, generosity'
    },
    { word: 'MUTATION', definition: 'any alteration or change' },
    {
        word: 'MUTINY',
        definition: 'revolt or rebellion against constituted authority'
    },
    {
        word: 'MYOPIA',
        definition:
            'a disorder of the eyes where distant objects appear blurred'
    },
    {
        word: 'MYRIAD',
        definition: 'a very great or indefinite number of persons or things'
    },
    {
        word: 'MYSTIFICATION',
        definition: 'the act of mystifying or the condition of being mystified'
    },
    {
        word: 'MYSTIQUE',
        definition: 'an aura of heightened meaning or mystery around a thing'
    },
    {
        word: 'NADIR',
        definition: 'the lowest point, point of greatest adversity or despair'
    },
    { word: 'NAPHTHA', definition: 'naturally-occurring liquid petroleum' },
    {
        word: 'NARCISSUS',
        definition: 'a bulbous plant of the Amyrillis family'
    },
    {
        word: 'NATIONALITY',
        definition: 'membership of a particular nation or state'
    },
    {
        word: 'NAUSEA',
        definition: 'a feeling of unwellness, usually with the desire to vomit'
    },
    { word: 'NAVEL', definition: 'the belly button' },
    {
        word: 'NEBULA',
        definition: 'a cloud in outer space consisting of gas or dust'
    },
    {
        word: 'NECROLOGY',
        definition: 'a listing of people who have died during a period of time'
    },
    {
        word: 'NECROMANCY',
        definition: 'a method of divination through communication with the dead'
    },
    {
        word: 'NECROPOLIS',
        definition: 'a large cemetery, especially one of elaborate construction'
    },
    {
        word: 'NECROSIS',
        definition: 'the localized death of cells through injury or disease'
    },
    {
        word: 'NECTAR',
        definition: 'the juice of a fruit or a blend of fruit juices'
    },
    {
        word: 'NECTARINE',
        definition: 'a variety of peach having a smooth, downless skin.'
    },
    { word: 'NEGATION', definition: 'the act of negating something' },
    {
        word: 'NEGLIGEE',
        definition: "an item of women's nightwear, a lacy nightgown"
    },
    { word: 'NEMESIS', definition: 'an archenemy' },
    { word: 'NEOCRACY', definition: 'government by the new or inexperienced' },
    {
        word: 'NEOLOGISM',
        definition: 'a word or phrase which has recently been coined'
    },
    {
        word: 'NEOLOGY',
        definition: 'the study or art of neologising (creating new words)'
    },
    { word: 'NEONATE', definition: 'a newborn infant, recently born baby' },
    {
        word: 'NEOPAGANISM',
        definition:
            'a 20th-century revival of interest in the worship of nature'
    },
    { word: 'NEOPHYTE', definition: 'a beginner' },
    {
        word: 'NEPOTISM',
        definition: 'favoritism granted to relatives regardless of merit'
    },
    {
        word: 'NESTLING',
        definition: 'a young bird not yet old enough to leave the nest'
    },
    {
        word: 'NEUROLOGY',
        definition: 'the branch of medicine that deals with the nervous system'
    },
    { word: 'NEXUS', definition: 'a means of connection, tie, link' },
    {
        word: 'NIB',
        definition: 'the point of a pen, or either of its divisions'
    },
    {
        word: 'NIHILIST',
        definition: 'a person who accepts or champions nihilism'
    },
    { word: 'NIL', definition: 'nothing, zero' },
    {
        word: 'NIRVANA',
        definition: 'a blissful state attained through enlightened experience'
    },
    { word: 'NIT', definition: 'the egg of a louse' },
    { word: 'NOMAD', definition: 'any wanderer, itinerant' },
    { word: 'NOMENCLATURE', definition: 'a name' },
    {
        word: 'NOMINA',
        definition: '(in ancient rome) the second name of a citizen'
    },
    {
        word: 'NOMINEE',
        definition: 'a person named, or designated, by another, to any position'
    },
    {
        word: 'NON SEQUITUR',
        definition: 'a statement containing an illogical conclusion'
    },
    {
        word: 'NON-COMBATANT',
        definition: 'a person who is not directly involved in combat'
    },
    { word: 'NON-RESIDENT', definition: 'not resident in a particular place' },
    { word: 'NONCHALANCE', definition: 'indifference, carelessness, coolness' },
    { word: 'NONENTITY', definition: 'an unimportant or insignificant person' },
    {
        word: 'NONPAREIL',
        definition: 'a person or thing that has no equal, a paragon'
    },
    { word: 'NORM', definition: 'a standard, model, or pattern' },
    {
        word: 'NORMALCY',
        definition: 'the state of being normal, the fact of being normal'
    },
    {
        word: 'NOSTALGIA',
        definition: "a wistful desire to return to a former time in one's life"
    },
    {
        word: 'NOSTRUM',
        definition:
            'a medicine sold with false claims and no demonstrable value'
    },
    {
        word: 'NOTES',
        definition: 'a brief record of something written down for memory'
    },
    { word: 'NOVELLETTE', definition: 'a brief novel or long short story' },
    {
        word: 'NOVICE',
        definition: 'a person who is new to the circumstances, work, etc'
    },
    {
        word: 'NUANCE',
        definition: 'a subtle difference or distinction in expression'
    },
    { word: 'NUCLEUS', definition: 'the core, central part (of something)' },
    { word: 'NUISANCE', definition: 'an obnoxious or annoying thing' },
    { word: 'NULLITY', definition: 'the state of being void, or invalid' },
    {
        word: 'NUMISMATIST',
        definition: 'one who studies and/or collects coins and/or currencies'
    },
    { word: 'NUNNERY', definition: 'a place of residence for nuns' },
    { word: 'NUTRIMENT', definition: 'a source of nourishment, food' },
    { word: 'OAKUM', definition: 'a material used to caulk or pack joints' },
    { word: 'OBEISANCE', definition: 'demonstration of an obedient attitude' },
    {
        word: 'OBELISK',
        definition: 'a tapered, stone monolith topped with a pyramidal point'
    },
    {
        word: 'OBFUSCATION',
        definition: 'the act of obscuring the perception of something'
    },
    { word: 'OBITUARY', definition: 'a brief notice of a person’s death' },
    { word: 'OBJECTOR', definition: 'a person who objects to something' },
    {
        word: 'OBLIVION',
        definition: 'the state of being completely forgotten or unknown'
    },
    {
        word: 'OBLOQUY',
        definition: 'censure, blame, or abusive language aimed at something'
    },
    { word: 'OBSEQUIES', definition: 'funeral rites' },
    {
        word: 'OBSESSION',
        definition: 'a compulsive or irrational preoccupation'
    },
    {
        word: 'OBSOLESCENCE',
        definition: 'the state of being obsolete—no longer in use, disused'
    },
    {
        word: 'OBSTETRICS',
        definition: 'the care of women during and after pregnancy'
    },
    {
        word: 'OBSTINACY',
        definition: 'the state, or an act, of stubbornness or doggedness'
    },
    {
        word: 'OCCIDENT',
        definition: 'that part of the earth towards the sunset, the west'
    },
    {
        word: 'OCCULT',
        definition: 'any system claiming use or knowledge of secret forces'
    },
    {
        word: 'OCCUPANT',
        definition: 'a person who occupies a place or a position'
    },
    {
        word: 'OCCURRENCE',
        definition: 'actual instance where a situation arises'
    },
    {
        word: 'OCTAGON',
        definition: 'a polygon with eight sides and eight angles'
    },
    {
        word: 'OCTAVE',
        definition: 'an interval spanning eight degrees of the diatonic scale'
    },
    {
        word: 'OCTAVO',
        definition:
            'a book printed on sheets folded to form 8 leaves or 16 pages'
    },
    { word: 'OCULIST', definition: 'an ophthalmologist' },
    { word: 'ODDITY', definition: 'an odd or strange thing' },
    { word: 'ODE', definition: 'a short poetical composition, a lyric poem' },
    {
        word: 'ODIUM',
        definition: 'intense hatred, especially toward a contemptible person'
    },
    {
        word: 'OFFSHOOT',
        definition: 'a branch or lateral shoot from a main stem, as of a plant'
    },
    {
        word: 'OGRE',
        definition: 'a type of giant from folk tales that eats human flesh'
    },
    {
        word: 'OINTMENT',
        definition: 'a viscous preparation of oils used as a treatment'
    },
    { word: 'OLIGARCHY', definition: 'government by the few' },
    { word: 'OMISSION', definition: 'the act of omitting' },
    {
        word: 'ONOMATOPOEIA',
        definition: 'the property of a word of sounding like what it represents'
    },
    { word: 'ONRUSH', definition: 'a forceful rush or flow forward' },
    { word: 'ONSET', definition: 'the beginning or start' },
    {
        word: 'ONSLAUGHT',
        definition: 'an onset, assault, or attack, especially a vigorous one'
    },
    { word: 'ONUS', definition: 'a legal obligation' },
    {
        word: 'OPALESCENCE',
        definition: 'exhibiting a play of colors like that of the opal'
    },
    {
        word: 'OPERETTA',
        definition: 'a lighter opera with a frivolous story and spoken dialogue'
    },
    {
        word: 'OPPONENT',
        definition: 'an individual or group who is a rival of another'
    },
    {
        word: 'OPPROBRIUM',
        definition: 'the reproach incurred by conduct considered shameful'
    },
    {
        word: 'OPTICIAN',
        definition: 'a person who makes or sells lenses, spectacles etc'
    },
    { word: 'OPTIMISM', definition: 'a tendency to expect the best' },
    {
        word: 'OPTION',
        definition: 'something that may be or is chosen, choice'
    },
    {
        word: 'OPTOMETRY',
        definition: 'the art and science of vision and eye care'
    },
    { word: 'OPULENCE', definition: 'wealth' },
    { word: 'OPUS', definition: 'a musical composition' },
    {
        word: 'ORATORIO',
        definition: 'a musical composition on a religious theme'
    },
    {
        word: 'ORATORY',
        definition: 'the art of public speaking, especially in a formal manner'
    },
    { word: 'ORDEAL', definition: 'a painful or trying experience' },
    { word: 'ORDINANCE', definition: 'a local law or regulation' },
    {
        word: 'ORDINATE',
        definition:
            'the distance from the x-axis measured parallel to the y-axis'
    },
    {
        word: 'ORDNANCE',
        definition: 'military equipment, especially weapons and ammunition'
    },
    {
        word: 'ORGIES',
        definition: '(plural) wild, drunken or licentious festivity or revelry'
    },
    {
        word: 'ORIFICE',
        definition: 'a mouth or aperture, as of a tube, pipe, etc, an opening'
    },
    {
        word: 'ORIGIN',
        definition: 'something from which anything starts, the source'
    },
    {
        word: 'ORNITHOLOGY',
        definition: 'the branch of zoology that deals with birds'
    },
    { word: 'ORTHODOXY', definition: 'correctness in doctrine and belief' },
    {
        word: 'ORTHOPEDICS',
        definition: 'medical, concerned with the spine and joints'
    },
    { word: 'ORTHOPEDIST', definition: 'an orthopedic surgeon' },
    { word: 'OSCILLATION', definition: 'an act or instance of oscillating' },
    {
        word: 'OUD',
        definition: 'a musical instrument belonging to the lute family'
    },
    {
        word: 'OUTBREAK',
        definition: 'a sudden breaking out or occurrence, eruption'
    },
    {
        word: 'OUTCRY',
        definition: 'a strong and usually public expression of protest'
    },
    { word: 'OUTLAW', definition: 'a fugitive from the law, lawless person' },
    {
        word: 'OUTPOST',
        definition: 'a military post stationed at a distance from the main army'
    },
    { word: 'OUTRAGE', definition: 'any gross violation of law or decency' },
    {
        word: 'OUTRIGGER',
        definition:
            '(nautical) beams that provide support for a mast or a canoe'
    },
    {
        word: 'OUTSKIRT',
        definition: 'a more remote part of a town or city, the periphery'
    },
    { word: 'OVATION', definition: 'prolonged enthusiastic applause' },
    { word: 'OVERLORD', definition: 'a ruler of other rulers' },
    {
        word: 'OVERPASS',
        definition:
            'a road, pedestrian walkway, etc, crossing over some barrier'
    },
    {
        word: 'OVERPRODUCTION',
        definition: 'production of more of a commodity than can be used or sold'
    },
    {
        word: 'OVERSEER',
        definition: 'one who oversees or supervises, a supervisor'
    },
    {
        word: 'OVERTONE',
        definition: 'an implicit meaning, as opposed to a hidden meaning'
    },
    {
        word: 'OVERTURE',
        definition: 'an approach made to establish a relationship'
    },
    { word: 'PACIFIST', definition: 'one who support sor favours peace' },
    { word: 'PACT', definition: 'an agreement, a compact, a covenant' },
    {
        word: 'PAEAN',
        definition: 'any loud and joyous song, a song of triumph'
    },
    {
        word: 'PAGAN',
        definition: 'person or community observing a polytheistic religion'
    },
    {
        word: 'PAGEANT',
        definition: 'an elaborate public display, i.e. a parade in costume'
    },
    { word: 'PALATE', definition: 'the sense of taste' },
    {
        word: 'PALEONTOLOGY',
        definition: 'study of life in prehistoric times, represented by fossils'
    },
    {
        word: 'PALETTE',
        definition: 'a thin board on which a painter lays and mixes colours'
    },
    {
        word: 'PALINODE',
        definition:
            'poem where an author retracts something from an earlier poem'
    },
    {
        word: 'PALISADE',
        definition: 'a fence of stakes set firmly in the ground, for enclosure'
    },
    { word: 'PALL', definition: 'a cloth for spreading over a coffin' },
    { word: 'PALLOR', definition: 'unusual paleness' },
    {
        word: 'PALSY',
        definition: 'any atonal muscular condition characterised by tremors'
    },
    {
        word: 'PAMPHLET',
        definition: 'a small booklet of printed informational matter'
    },
    { word: 'PAMPHLETEER', definition: 'a writer or publisher of pamphlets' },
    {
        word: 'PANACEA',
        definition: 'a remedy for all disease or ills, a cure-all'
    },
    { word: 'PANACHE', definition: 'a grand or flamboyant manner' },
    { word: 'PANDEMONIUM', definition: 'wild uproar or unrestrained disorder' },
    {
        word: 'PANEGYRIC',
        definition: 'a lofty oration or writing in praise of a person or thing'
    },
    { word: 'PANOPLY', definition: 'a splendid display of something' },
    {
        word: 'PANORAMA',
        definition: 'an unobstructed and wide view of an extensive area'
    },
    {
        word: 'PANTHEISM',
        definition: 'doctrine that god is transcendent reality of the universe'
    },
    { word: 'PANTHEON', definition: 'a temple dedicated to all the gods' },
    {
        word: 'PANTOMIME',
        definition: 'the art of conveying actions by gestures without speech'
    },
    { word: 'PANTOSCOPE', definition: 'a very wide-angled photographic lens' },
    { word: 'PAPACY', definition: 'the office of the pope' },
    {
        word: 'PAPYRUS',
        definition: 'a tall, aquatic plant native to the nile valley'
    },
    {
        word: 'PARABLE',
        definition: 'a short allegorical story that illustrates a moral lesson'
    },
    { word: 'PARADIGM', definition: 'an example serving as a model' },
    {
        word: 'PARADOX',
        definition: 'seemingly contradictory statement that may be true'
    },
    { word: 'PARAGON', definition: 'a model or pattern of excellence' },
    { word: 'PARAMETERS', definition: 'limits or boundaries, guidelines' },
    {
        word: 'PARAMOUR',
        definition: 'an illicit lover, especially of a married person'
    },
    { word: 'PARAPHERNALIA', definition: 'miscellaneous items, stuff' },
    {
        word: 'PARASITE',
        definition:
            'organism that lives in, gets nutrients from another organism'
    },
    {
        word: 'PARENTAGE',
        definition: 'descent from ancestors, birth, origin or lineage'
    },
    { word: 'PARIAH', definition: 'an outcast' },
    {
        word: 'PARITY',
        definition: 'equality, as in amount, status or character'
    },
    {
        word: 'PARLANCE',
        definition: 'a way or manner of speaking, vernacular, idiom'
    },
    {
        word: 'PARLIAMENT',
        definition: 'assembly of the representatives of a political nation'
    },
    {
        word: 'PARLOR',
        definition: "a room for the reception of visitors to one's home"
    },
    {
        word: 'PARODY',
        definition: 'a satirical imitation of a serious piece of literature'
    },
    { word: 'PAROXYSM', definition: 'any sudden, violent outburst' },
    {
        word: 'PARRICIDE',
        definition: 'someone who kills a relative, especially a parent'
    },
    {
        word: 'PARSIMONY',
        definition: 'great reluctance to spend money unnecessarily'
    },
    { word: 'PARTITION', definition: 'a division into portions or shares' },
    {
        word: 'PASTICHE',
        definition:
            'an artistic piece consisting of motifs borrowed from sources'
    },
    {
        word: 'PATHOLOGY',
        definition: 'the study of the origin, nature and course of diseases'
    },
    {
        word: 'PATHOS',
        definition:
            'the power in forms of expression, evoking pity or compassion'
    },
    { word: 'PATRIARCH', definition: 'the male head of a family' },
    {
        word: 'PATRICIAN',
        definition: 'a person of noble or high rank, aristocrat'
    },
    {
        word: 'PATRIMONY',
        definition: "a right or estate inherited from one's father"
    },
    {
        word: 'PATRIOTISM',
        definition: "devoted love, support and defence of one's country"
    },
    {
        word: 'PATRON',
        definition: 'a customer, especially a regular one, of a business'
    },
    {
        word: 'PAUCITY',
        definition: 'smallness of quantity, scarcity, scantness'
    },
    {
        word: 'PAUPER',
        definition: 'a person who depends on aid from public welfare funds'
    },
    { word: 'PAUPERISM', definition: 'the state of being a pauper, poverty' },
    {
        word: 'PAVILION',
        definition: 'a light, usually open building used for concerts, exhibits'
    },
    { word: 'PAYEE', definition: 'one to whom money is payable' },
    { word: 'PECCADILLO', definition: 'a very minor sin or offence' },
    {
        word: 'PEDAGOGICS',
        definition: 'the science or art of teaching, pedagogy'
    },
    { word: 'PEDAGOGUE', definition: 'a teacher' },
    { word: 'PEDAGOGY', definition: 'the function or work of a teacher' },
    {
        word: 'PEDANT',
        definition: 'a person who makes an excessive display of learning'
    },
    {
        word: 'PEDANTRY',
        definition: 'the character, qualities, practices of a pedant'
    },
    {
        word: 'PEDESTAL',
        definition: 'an architectural support for a column, statue, vase'
    },
    {
        word: 'PEDIATRICS',
        definition:
            'branch of medicine that deals with the treatment of children'
    },
    { word: 'PEDIGREE', definition: 'an ancestral line' },
    { word: 'PEERAGE', definition: 'the body of peers of a country or state' },
    {
        word: 'PENALTY',
        definition: 'a punishment imposed for the violation of a law or rule'
    },
    {
        word: 'PENANCE',
        definition: 'a punishment undergone in token of penitence for sin'
    },
    { word: 'PENCHANT', definition: 'a strong inclination for something' },
    { word: 'PENDANT', definition: 'a hanging ornament in jewellery' },
    {
        word: 'PENDULUM',
        definition: 'a body suspended from a fixed support so that it swings'
    },
    {
        word: 'PENINSULA',
        definition: 'an area of land almost completely surrounded by water'
    },
    { word: 'PENITENCE', definition: "regret for one's wrongdoing or sinning" },
    { word: 'PENNANT', definition: 'any relatively long, tapering flag' },
    {
        word: 'PENSION',
        definition:
            'a fixed amount, other than wages, paid at regular intervals'
    },
    { word: 'PENTAD', definition: 'a group or series of five things' },
    {
        word: 'PENTAGON',
        definition: 'a polygon with five sides and five angles'
    },
    {
        word: 'PENTAGRAM',
        definition: 'a 5-pointed star with intersecting lines, an occult symbol'
    },
    {
        word: 'PENTAHEDRON',
        definition: 'a solid geometric figure with five faces'
    },
    {
        word: 'PENTAMETER',
        definition: 'a line in a poem having five metrical feet'
    },
    {
        word: 'PENTATHLON',
        definition: 'an athletic contest comprising 5 track and field events'
    },
    { word: 'PENURY', definition: 'extreme poverty' },
    {
        word: 'PEON',
        definition: 'a lowly person, a peasant who is obliged to do menial work'
    },
    {
        word: 'PERCH',
        definition: 'a pole or rod, serving as a roost for birds'
    },
    { word: 'PERCOLATOR', definition: 'a kind of coffeepot' },
    {
        word: 'PERCUSSION',
        definition: 'the collision of two bodies in order to produce a sound'
    },
    { word: 'PERDITION', definition: 'a state of final spiritual ruin' },
    {
        word: 'PEREGRINATION',
        definition: 'a journey, especially by foot, notably by a pilgrim'
    },
    { word: 'PERFIDY', definition: 'deliberate breach of faith or trust' },
    { word: 'PERFUMERY', definition: 'perfumes collectively' },
    {
        word: 'PERIGEE',
        definition: 'point in orbit of the moon when it is nearest to the earth'
    },
    { word: 'PERIL', definition: 'exposure to injury, loss or destruction' },
    {
        word: 'PERIODICITY',
        definition: 'the tendency to recur at regular intervals'
    },
    {
        word: 'PERIPHERY',
        definition: 'the external boundary of any surface or area'
    },
    {
        word: 'PERJURY',
        definition: 'the willful giving of false testimony under oath'
    },
    { word: 'PERMANENCE', definition: 'the state of being permanent' },
    {
        word: 'PERMUTATION',
        definition: 'a combination of items made by reordering'
    },
    {
        word: 'PERPETRATOR',
        definition: 'a person who commits an illegal or criminal act'
    },
    {
        word: 'PERPETUITY',
        definition: 'endless or indefinitely long duration or existence'
    },
    {
        word: 'PERQUISITE',
        definition: 'any monetary or other incidental benefit beyond salary'
    },
    {
        word: 'PERSECUTION',
        definition: 'to punish in a manner designed to injure or afflict'
    },
    { word: 'PERSIFLAGE', definition: 'light, bantering talk or writing' },
    {
        word: 'PERSONA',
        definition: "a person's perceived or evident personality"
    },
    { word: 'PERSONAGE', definition: 'a person of distinction or importance' },
    { word: 'PERSONNEL', definition: 'employees, office staff' },
    {
        word: 'PERSPICACITY',
        definition: 'keenness of mental perception and understanding'
    },
    { word: 'PERSPIRATION', definition: 'sweat' },
    {
        word: 'PERTINACITY',
        definition: 'the state or characteristic of being persistent'
    },
    {
        word: 'PERTURBATION',
        definition: 'agitation, the state of being perturbed'
    },
    { word: 'PERUSAL', definition: 'the act of surveying' },
    { word: 'PERVERSION', definition: 'humiliation, debasement' },
    {
        word: 'PESSIMISM',
        definition: 'a general belief that bad things will happen'
    },
    { word: 'PESTILENCE', definition: 'a deadly or virulent epidemic disease' },
    { word: 'PETULANCE', definition: 'the state or quality of being petulant' },
    {
        word: 'PHARMACOPOEIA',
        definition: 'an official book describing medicines'
    },
    {
        word: 'PHARMACY',
        definition: 'a place where prescription drugs are dispensed'
    },
    { word: 'PHILATELY', definition: 'stamp collecting' },
    { word: 'PHILHARMONIC', definition: 'a full-size symphonic orchestra' },
    {
        word: 'PHILIPPIC',
        definition: 'any speech or discourse of bitter denunciation'
    },
    { word: 'PHILISTINE', definition: 'a person lacking in cultural values' },
    {
        word: 'PHILOGYNIST',
        definition: 'someone who is fond of women as a group'
    },
    {
        word: 'PHILOLOGIST',
        definition: 'a person who studies literary texts and written records'
    },
    {
        word: 'PHILOLOGY',
        definition: 'the study of literary texts and of written records'
    },
    {
        word: 'PHILOSOPHY',
        definition: 'the rational investigation of the principles of being'
    },
    {
        word: 'PHOBIA',
        definition: 'an irrational or obsessive fear or anxiety'
    },
    {
        word: 'PHONOGRAM',
        definition:
            'a part of a writing system, standing for a sound or syllable'
    },
    {
        word: 'PHONOLOGY',
        definition: 'the study of the patterning of speech sounds in a language'
    },
    {
        word: 'PHOSPHORESCENCE',
        definition: 'the emission of light without any perceptible heat'
    },
    {
        word: 'PHOTOMETER',
        definition: 'an instrument that measures brightness'
    },
    {
        word: 'PHOTOMETRY',
        definition: 'the measurement of the intensity of light'
    },
    {
        word: 'PHYSIOCRACY',
        definition: 'belief that land is the basis of wealth and taxation'
    },
    { word: 'PHYSIOGNOMY', definition: 'the face or countenance' },
    { word: 'PHYSIOGRAPHY', definition: 'the science of physical geography' },
    {
        word: 'PHYSIOLOGY',
        definition: 'biology dealing with the functions of living organisms'
    },
    {
        word: 'PICCOLO',
        definition: 'an instrument similar to a flute, but smaller'
    },
    { word: 'PIECE DE RESISTANCE', definition: 'the principal dish of a meal' },
    {
        word: 'PIETY',
        definition: 'devout fulfillment of religious obligations'
    },
    {
        word: 'PILLORY',
        definition: 'a wooden frame with holes for securing the head and hands'
    },
    { word: 'PINCERS', definition: 'a gripping tool with blunt jaws' },
    { word: 'PINCH', definition: 'to squeeze or compress between something' },
    { word: 'PINION', definition: "a bird's wing" },
    { word: 'PINNACLE', definition: 'a high peak' },
    {
        word: 'PIONEER',
        definition: 'a person who is among those who first settle a region'
    },
    { word: 'PIQUANCY', definition: "a food's level of pungency" },
    {
        word: 'PITH',
        definition: 'the soft central cylinder of tissue in a plant stem'
    },
    {
        word: 'PITTANCE',
        definition: 'a small allowance of food and drink, a scanty meal'
    },
    {
        word: 'PLACEBO',
        definition: 'a dummy medicine containing no active ingredients'
    },
    {
        word: 'PLAGIARISM',
        definition: 'using the language and thoughts of another author'
    },
    {
        word: 'PLAINTIFF',
        definition: 'a party bringing a suit in civil law against a defendan'
    },
    {
        word: 'PLANISPHERE',
        definition:
            'a map of the celestial sphere indicating a visible location'
    },
    {
        word: 'PLASTICITY',
        definition: 'the capability of being molded to assume a desired form'
    },
    { word: 'PLATITUDE', definition: 'a flat, dull or trite remark' },
    {
        word: 'PLAUDIT',
        definition: 'a mark or expression of applause, praise bestowed'
    },
    {
        word: 'PLAYWRIGHT',
        definition: 'a writer and creator of theatrical plays'
    },
    {
        word: 'PLEA',
        definition: 'an appeal, petition, urgent prayer or entreaty'
    },
    { word: 'PLEDGEE', definition: 'someone who receives a pledge' },
    { word: 'PLEDGEOR', definition: 'a person who gives or makes a pledge' },
    { word: 'PLENITUDE', definition: 'an abundance, plenty, a full supply' },
    { word: 'PLETHORA', definition: 'overabundance, excess' },
    {
        word: 'PLUMAGE',
        definition: 'feathers, either covering a bird or used ornamentally'
    },
    { word: 'PLURALITY', definition: 'fact of being numerous' },
    {
        word: 'PLUTOCRACY',
        definition: 'the rule or power of wealth or the wealthy'
    },
    {
        word: 'PODIUM',
        definition: 'a small platform for a public speaker, a conductor, etc'
    },
    { word: 'POESY', definition: 'the class of literature comprising poems' },
    { word: 'POETASTER', definition: 'an unskilled poet' },
    { word: 'POLEMIC', definition: 'a controversial argument' },
    {
        word: 'POLLEN',
        definition: 'the fertilizing element of flowering plants'
    },
    { word: 'POLTROON', definition: 'a wretched coward, craven' },
    {
        word: 'POLYARCHY',
        definition: 'government in which power is invested in 3 or more persons'
    },
    { word: 'POLYCRACY', definition: 'government by many rulers, polyarchy' },
    {
        word: 'POLYGAMY',
        definition: 'the custom of having more than one spouse at the same time'
    },
    { word: 'POLYGON', definition: 'a figure having three or more sides' },
    {
        word: 'POLYHEDRON',
        definition: 'a solid figure with many flat faces and straight edges'
    },
    { word: 'POLYSYLLABLE', definition: 'a word with more than two syllables' },
    {
        word: 'POLYTHEISM',
        definition: 'the belief of the existence of many gods'
    },
    { word: 'POMMEL', definition: 'a knob, as on the hilt of a sword' },
    {
        word: 'POMPOSITY',
        definition: 'the quality of being pompous, self-importance'
    },
    { word: 'PONTIFF', definition: 'any high or chief priest' },
    { word: 'POPULACE', definition: 'the common people of a nation' },
    {
        word: 'PORTENT',
        definition: 'an indication or omen of something about to happen'
    },
    {
        word: 'PORTFOLIO',
        definition: 'a large flat case for carrying documents'
    },
    {
        word: 'POSEUR',
        definition:
            'a person who attempts to impress others by assuming a manner'
    },
    { word: 'POSSE', definition: 'a body or force armed with legal authority' },
    { word: 'POSSESSOR', definition: 'one who possesses' },
    {
        word: 'POSTERITY',
        definition: 'succeeding or future generations collectively'
    },
    {
        word: 'POSTSCRIPT',
        definition: 'a paragraph or phrase added to a concluded letter'
    },
    { word: 'POTENCY', definition: 'strength' },
    { word: 'POTENTATE', definition: 'a powerful leader, a monarch, a ruler' },
    {
        word: 'POTION',
        definition: 'a drink or draft, especially a magical one'
    },
    {
        word: 'POTPOURRI',
        definition: 'a mixture of dried petals of roses or other spices'
    },
    { word: 'PRAGMATIST', definition: 'practical person, realist' },
    { word: 'PREAMBLE', definition: 'an introductory statement' },
    {
        word: 'PRECAUTION',
        definition: 'a measure taken in advance to secure good results'
    },
    {
        word: 'PRECEDENT',
        definition: '(law) a legal decision serving as an authoritative rule'
    },
    {
        word: 'PRECEPT',
        definition: 'a commandment given as a rule of action or conduct'
    },
    { word: 'PRECESSION', definition: 'precedence' },
    {
        word: 'PRECINCT',
        definition: 'a district in a city marked out for government purposes'
    },
    { word: 'PRECIPICE', definition: 'a very steep cliff' },
    { word: 'PRECISION', definition: 'accuracy' },
    { word: 'PRECURSOR', definition: 'something that precedes' },
    { word: 'PREDECESSOR', definition: 'something replaced by something else' },
    {
        word: 'PREDICAMENT',
        definition: 'a difficult, perplexing or dangerous situation'
    },
    {
        word: 'PREDILECTION',
        definition: 'a tendency to think favourably of something in particular'
    },
    {
        word: 'PREDOMINANCE',
        definition: 'the condition or state of having power over others'
    },
    {
        word: 'PREEMINENCE',
        definition: 'the status of being preeminent, dominant or ascendant'
    },
    {
        word: 'PREFACE',
        definition: 'an introductory part, or preliminary statement'
    },
    {
        word: 'PREFIX',
        definition: "an affix placed before a word to modify a term's meaning"
    },
    {
        word: 'PREHENSION',
        definition: 'the act of grasping or gripping something'
    },
    {
        word: 'PREJUDICE',
        definition: 'an unfavourable opinion formed without knowledge or reason'
    },
    { word: 'PRELACY', definition: 'the office of a prelate' },
    { word: 'PRELATE', definition: 'a church dignitary' },
    {
        word: 'PRELUDE',
        definition: 'any action or event that precedes something else'
    },
    {
        word: 'PREMIER',
        definition: 'the head of the cabinet in some countries'
    },
    {
        word: 'PREMISE',
        definition:
            'a proposition supporting or helping to support a conclusion'
    },
    { word: 'PREMONITION', definition: 'a forewarning of a future event' },
    {
        word: 'PREPARATION',
        definition: 'the act of getting ready for something'
    },
    { word: 'PREPONDERANCE', definition: 'excess or superiority of influence' },
    { word: 'PRESAGE', definition: 'foreboding' },
    {
        word: 'PRESCIENCE',
        definition: 'knowledge of things before they happen'
    },
    {
        word: 'PRESCRIPT',
        definition: 'something prescribed, a rule, regulation or dictate'
    },
    {
        word: 'PRESENTIMENT',
        definition: 'a feeling that something is about to happen'
    },
    { word: 'PRESENTMENT', definition: 'a statement made on oath by a jury' },
    { word: 'PRESUMPTION', definition: 'assumption of something as true' },
    {
        word: 'PRETEXT',
        definition: 'something put forward to conceal a true purpose or object'
    },
    {
        word: 'PREVALENCE',
        definition: 'the quality or condition of being widespread'
    },
    {
        word: 'PREVENTION',
        definition: 'the act of keeping something from occurring'
    },
    { word: 'PRICKLE', definition: 'a sharp point' },
    {
        word: 'PRIG',
        definition: 'a person who is self-righteous and narrow-minded'
    },
    {
        word: 'PRIMER',
        definition: 'a book that provides an introduction to a topic'
    },
    { word: 'PRINCIPLE', definition: 'a fundamental assumption' },
    {
        word: 'PRIORY',
        definition: 'a monastery or convent governed by a prior or prioress'
    },
    {
        word: 'PRIVATEER',
        definition: 'private ship built by the government to harass enemy ships'
    },
    { word: 'PRIVATION', definition: 'lack of the usual comforts of life' },
    {
        word: 'PRIVITY',
        definition: 'a divine mystery, something known only to god'
    },
    {
        word: 'PROBATE',
        definition: 'the official proving of a will as authentic'
    },
    { word: 'PROBITY', definition: 'integrity and uprightness' },
    {
        word: 'PROCEDURE',
        definition: 'a particular method for performing a task'
    },
    { word: 'PROCLAMATION', definition: 'a public and official announcement' },
    { word: 'PROCLIVITY', definition: 'natural or habitual inclination' },
    {
        word: 'PRODIGY',
        definition: 'a young person having extraordinary talent or ability'
    },
    {
        word: 'PROFESSOR',
        definition: 'a teacher or faculty member at a college or university'
    },
    { word: 'PROFITEER', definition: 'a person who seeks exorbitant profits' },
    { word: 'PROFLIGACY', definition: 'careless wastefulness' },
    {
        word: 'PROFUSION',
        definition: 'abundance, the state of being profuse, a cornucopia'
    },
    {
        word: 'PROGENITOR',
        definition: "a forefather, any of a person's direct ancestors"
    },
    { word: 'PROGENY', definition: 'offspring or descendants' },
    {
        word: 'PROGNOSIS',
        definition: 'a forecast of the future course of a disease or disorder'
    },
    {
        word: 'PROGRESSION',
        definition: 'the act of moving from one thing to another'
    },
    {
        word: 'PROHIBITION',
        definition:
            'an act of prohibiting, forbidding, or disallowing something'
    },
    { word: 'PROJECTION', definition: 'something which sticks out' },
    { word: 'PROLETARIAT', definition: 'the working class or lower class' },
    {
        word: 'PROLOGUE',
        definition: 'an introduction, especially to a play or novel'
    },
    {
        word: 'PROMINENCE',
        definition: 'the state of being prominent: widely known or eminent'
    },
    {
        word: 'PROMONTORY',
        definition: 'a high point of land extending into a body of water'
    },
    { word: 'PROMOTER', definition: 'one who promotes' },
    {
        word: 'PROPAGANDA',
        definition: 'information or ideas spread deliberately to help or harm'
    },
    {
        word: 'PROPELLANT',
        definition: 'something that causes an object to be driven forward'
    },
    {
        word: 'PROPELLER',
        definition: 'a mechanical device with rotating blades'
    },
    { word: 'PROPENSITY', definition: 'a tendency, preference, or attraction' },
    {
        word: 'PROPHECY',
        definition: 'a prediction, especially one made by a prophet'
    },
    { word: 'PROPINQUITY', definition: 'nearness in place' },
    {
        word: 'PROPONENT',
        definition: 'one who supports something, an advocate'
    },
    {
        word: 'PROPRIETY',
        definition: 'conformity to established standards of proper behaviour'
    },
    { word: 'PROPULSION', definition: 'force causing movement' },
    {
        word: 'PROSCENIUM',
        definition: 'the stage area between the curtain and the orchestra'
    },
    {
        word: 'PROSE',
        definition: 'the ordinary form of spoken or written language'
    },
    {
        word: 'PROSELYTE',
        definition: 'a convert from one religious belief to another'
    },
    { word: 'PROSODY', definition: 'the study of speech' },
    {
        word: 'PROSPECTOR',
        definition: 'a person who searches for natural resources'
    },
    {
        word: 'PROSPECTUS',
        definition: 'a document describing the features of a proposed project'
    },
    {
        word: 'PROSPERITY',
        definition: 'a successful condition, especially in financial respects'
    },
    {
        word: 'PROSTRATION',
        definition: 'the act or condition of laying flat as a sign of humility'
    },
    {
        word: 'PROTAGONIST',
        definition: 'the main character in a literary work or drama'
    },
    {
        word: 'PROTEGE',
        definition: 'a person guided and protected by a more prominent person'
    },
    {
        word: 'PROTÉGÉ',
        definition: 'a person guided and protected by a more prominent person'
    },
    {
        word: 'PROTOCOL',
        definition: 'the customs dealing with diplomatic formality'
    },
    { word: 'PROTOMARTYR', definition: 'any of the first christian martyrs' },
    {
        word: 'PROTOPLASM',
        definition:
            'the colloidal and liquid substance of which cells are formed'
    },
    {
        word: 'PROTOTYPE',
        definition: 'the original on which something else is based or formed'
    },
    { word: 'PROTRUSION', definition: 'the act of protruding' },
    {
        word: 'PROVERB',
        definition: 'a basic truth which may be applied to common situations'
    },
    { word: 'PROVISO', definition: 'a conditional provision to an agreement' },
    {
        word: 'PROVOCATION',
        definition: 'the act of annoying someone into doing something'
    },
    {
        word: 'PROWESS',
        definition: 'skillfulness and manual ability, adroitness or dexterity'
    },
    { word: 'PROXIMITY', definition: 'closeness' },
    {
        word: 'PROXY',
        definition:
            'the power of a person authorized to act in place of another'
    },
    { word: 'PRUDERY', definition: 'excessive propriety or modesty in speech' },
    {
        word: 'PSEUDAPOSTLE',
        definition: 'one falsely claiming to be an apostle'
    },
    {
        word: 'PSEUDONYM',
        definition: 'a fictitious name, often used by writers and movie stars'
    },
    { word: 'PSEUDONYMITY', definition: 'use of a false name' },
    {
        word: 'PSYCHIATRY',
        definition: 'the science of diagnosing and treating mental disorders'
    },
    {
        word: 'PSYCHOTHERAPY',
        definition: 'the treatment of psychological disorders'
    },
    { word: 'PULCHRITUDE', definition: 'physical beauty' },
    {
        word: 'PUNCTILIO',
        definition: 'a fine point or detail regarding conduct or procedure'
    },
    { word: 'PUNDIT', definition: 'a learned person, expert or authority' },
    { word: 'PUPILAGE', definition: 'the condition of being a pupil' },
    {
        word: 'PURGATORY',
        definition:
            'in catholicism, a place where souls are purified after death'
    },
    {
        word: 'PURVEYOR',
        definition: 'someone who supplies what is needed, especially food'
    },
    {
        word: 'PURVIEW',
        definition: 'the range of operation, authority, control, etc'
    },
    {
        word: 'PYRE',
        definition: 'a heap of wood or other combustible material'
    },
    { word: 'PYROMANIA', definition: 'an uncontrollable urge to start fires' },
    {
        word: 'PYX',
        definition: 'the small container used to hold the eucharist'
    },
    { word: 'QUACKERY', definition: 'the practice of fraudulent medicine' },
    { word: 'QUAGMIRE', definition: 'a swampy, soggy area of ground' },
    {
        word: 'QUALM',
        definition: 'a sickly feeling of being ill at ease, sudden queasiness'
    },
    { word: 'QUANDARY', definition: 'a state of not knowing what to decide' },
    {
        word: 'QUARANTINE',
        definition: 'isolation imposed to prevent the spread of disease'
    },
    {
        word: 'QUARRY',
        definition: 'a pit from which stone, slate, etc is obtained'
    },
    { word: 'QUARTET', definition: 'a music composition in four parts' },
    {
        word: 'QUARTO',
        definition: 'a book made up of four leaves, or eight pages'
    },
    {
        word: 'QUAY',
        definition:
            'a landing place for boats along the edge of a body of water'
    },
    {
        word: 'QUID PRO QUO',
        definition: 'one thing given in return for another'
    },
    { word: 'QUIESCENCE', definition: 'the state of being at rest' },
    { word: 'QUIETUS', definition: 'a finishing stroke' },
    {
        word: 'QUINTESSENCE',
        definition: 'a thing that is the most perfect example of its type'
    },
    { word: 'QUINTET', definition: '(music) a composition in five parts' },
    {
        word: 'QUIRK',
        definition: "something unusual about someone's manner or style"
    },
    {
        word: 'QUORUM',
        definition: 'the number of members of something required to do business'
    },
    {
        word: 'RACONTEUR',
        definition: 'a person who is skilled in relating stories and anecdotes'
    },
    { word: 'RADIANCE', definition: 'warm, cheerful brightness' },
    {
        word: 'RADIX',
        definition: 'a number taken as the base of a system of numbers'
    },
    { word: 'RAILLERY', definition: 'good-natured ridicule, jest or banter' },
    { word: 'RAIMENT', definition: 'clothing, garments, dress, material' },
    { word: 'RAMIFICATION', definition: 'a related problem or consequence' },
    {
        word: 'RAMPART',
        definition: 'a broad elevation used as fortification around a place'
    },
    { word: 'RANCOR', definition: 'bitter, rankling resentment or ill will' },
    {
        word: 'RAPACITY',
        definition: 'the quality of being rapacious, voracity'
    },
    {
        word: 'RAPINE',
        definition: "the seizure of one's property by force, plunder"
    },
    {
        word: 'RAPPORT',
        definition: 'a relationship of mutual trust and respect'
    },
    { word: 'RATION', definition: 'a fixed allowance of provisions or food' },
    {
        word: 'RATIONALE',
        definition: 'the fundamental reason serving to account for something'
    },
    {
        word: 'RAVINE',
        definition:
            "a deep narrow valley in the earth's surface caused by water"
    },
    {
        word: 'REALISM',
        definition: 'a concern for fact and rejection of the impractical'
    },
    {
        word: 'REALM',
        definition: 'an abstract sphere of influence, real or imagined'
    },
    { word: 'REAPER', definition: 'a machine for cutting standing grain' },
    {
        word: 'REBUTTAL',
        definition: 'the act of presenting a contrary argument, as in a debate'
    },
    { word: 'RECEPTACLE', definition: 'a container' },
    { word: 'RECESSION', definition: 'the act or an instance of receding' },
    { word: 'RECIDIVISM', definition: 'repeated or habitual relapse' },
    { word: 'RECIDIVIST', definition: 'a repeat offender' },
    {
        word: 'RECIPROCITY',
        definition: 'a mutual exchange in state or relation'
    },
    {
        word: 'RECITATION',
        definition:
            'the act of publicly reciting something previously memorized'
    },
    {
        word: 'RECLUSE',
        definition: 'a person who lives in seclusion or apart from society'
    },
    {
        word: 'RECLUSORY',
        definition: 'the habitation of a recluse, a hermitage'
    },
    { word: 'RECOGNIZANCE', definition: 'a form of bail' },
    {
        word: 'RECONNAISSANCE',
        definition: 'the act of scouting or exploring to gain information'
    },
    { word: 'RECOURSE', definition: 'the act of seeking assistance or advice' },
    { word: 'RECRIMINATION', definition: 'a retaliatory accusation' },
    { word: 'RECTITUDE', definition: 'rightness of principle or conduct' },
    { word: 'REDEMPTION', definition: 'deliverance, rescue' },
    {
        word: 'REDUNDANCE',
        definition: 'the state of being superfluous and unneeded'
    },
    {
        word: 'REFEREE',
        definition: 'in sports, an authority who governs the rules of the game'
    },
    {
        word: 'REFERENDUM',
        definition:
            'a general vote by the public on a single political question'
    },
    {
        word: 'REFERRER',
        definition: 'to direct for information or anything required'
    },
    {
        word: 'REFINERY',
        definition: 'an establishment for processing something'
    },
    {
        word: 'REFLECTION',
        definition: 'the throwing back of light, heat or sound by a surface'
    },
    {
        word: 'REFLECTOR',
        definition: 'something which throws back heat, light or sound'
    },
    {
        word: 'REFORMER',
        definition: 'a person devoted to bringing about change'
    },
    { word: 'REFUGE', definition: 'a state of safety, protection or shelter' },
    { word: 'REFUSAL', definition: 'the act of turning something down' },
    {
        word: 'REGALIA',
        definition:
            'the decorations or ceremonial clothes of any office or order'
    },
    { word: 'REGALITY', definition: 'royalty, sovereignty or kingship' },
    {
        word: 'REGENT',
        definition:
            'a person with power to rule in the absence of the sovereign'
    },
    { word: 'REGICIDE', definition: 'the killing of a king' },
    { word: 'REGIME', definition: 'mode of rule or management' },
    {
        word: 'REGIMEN',
        definition: 'orderly government, system of order, administration'
    },
    {
        word: 'REGRESSION',
        definition: 'an action of regressing, a return to a previous state'
    },
    {
        word: 'REIN',
        definition: 'a strap by which a rider or driver controls a horse'
    },
    { word: 'REJOINDER', definition: 'an answer to a reply' },
    {
        word: 'RELIANCE',
        definition: 'the act of depending on someone or something, trust'
    },
    {
        word: 'RELIC',
        definition: 'a surviving memorial of something from the past'
    },
    {
        word: 'RELIQUARY',
        definition: 'a container to hold or display religious relics'
    },
    { word: 'REMEMBRANCE', definition: 'a retained memory' },
    { word: 'REMONSTRANCE', definition: 'a protest' },
    {
        word: 'REMORSE',
        definition: 'a feeling of regret or sadness for doing wrong or sinning'
    },
    { word: 'RENAISSANCE', definition: 'a rebirth or revival' },
    {
        word: 'RENASCENCE',
        definition: 'a new beginning or rebirth, regeneration'
    },
    {
        word: 'RENDITION',
        definition: 'an interpretation, as of a role or a piece of music'
    },
    { word: 'RENEGADE', definition: 'an outlaw or rebel' },
    { word: 'RENOWN', definition: 'fame, celebrity, wide recognition' },
    {
        word: 'RENUNCIATION',
        definition: 'the act of rejecting or renouncing something as invalid'
    },
    {
        word: 'REPARATION',
        definition: 'the making of amends for wrong or injury done'
    },
    { word: 'REPARTEE', definition: 'a quick, witty reply' },
    { word: 'REPAST', definition: 'a meal' },
    { word: 'REPENTANCE', definition: 'deep sorrow for a past error' },
    {
        word: 'REPERCUSSION',
        definition: 'a consequence or ensuing result of some action'
    },
    {
        word: 'REPERTORY',
        definition: 'a presentation in which a company presents several works'
    },
    {
        word: 'REPETITION',
        definition: 'the act or an instance of doing something again'
    },
    { word: 'REPLICA', definition: 'an exact copy' },
    {
        word: 'REPOSITORY',
        definition: 'a location for storage, often for safety or preservation'
    },
    { word: 'REPRIEVE', definition: 'a respite from impending punishment' },
    { word: 'REPRISAL', definition: 'act of retaliation' },
    { word: 'REPROBATE', definition: 'a wicked person' },
    { word: 'REPROOF', definition: 'the act of rebuking' },
    {
        word: 'REQUIEM',
        definition: 'any musical service for the repose of the dead'
    },
    { word: 'REQUITAL', definition: 'a return or reward for service' },
    { word: 'RESEMBLANCE', definition: 'similarity' },
    {
        word: 'RESERVOIR',
        definition: 'a place where anything is kept in store'
    },
    {
        word: 'RESIDUE',
        definition: 'whatever remains after something else has been removed'
    },
    {
        word: 'RESIGNATION',
        definition: 'a formal statement that one gives up a position'
    },
    {
        word: 'RESONANCE',
        definition: 'the prolongation of sound by reflection'
    },
    {
        word: 'RESOURCE',
        definition: 'a source of aid that can be readily drawn upon when needed'
    },
    {
        word: 'RESPITE',
        definition: 'an interval of relief from something distressing or trying'
    },
    { word: 'RESPONDENT', definition: 'a person who makes reply' },
    {
        word: 'RESTITUTION',
        definition: 'reparation made by giving compensation for loss or damage'
    },
    { word: 'RESUMPTION', definition: 'the act of starting something again' },
    { word: 'RESURRECTION', definition: 'the act of arising from the dead' },
    { word: 'RETENTION', definition: 'the act of remembering' },
    {
        word: 'RETICENCE',
        definition: 'tight-lippedness, discretion, avoidance of saying too much'
    },
    { word: 'RETINUE', definition: 'a group of servants or attendants' },
    {
        word: 'RETRACTION',
        definition: 'withdrawal of a statement, opinion, promise, etc'
    },
    {
        word: 'RETRIBUTION',
        definition: 'punishment inflicted in the spirit of vengeance'
    },
    {
        word: 'REVELATION',
        definition: 'something disclosed, especially a shocking disclosure'
    },
    {
        word: 'REVERSION',
        definition: 'the act of turning something the reverse way'
    },
    { word: 'REVISAL', definition: 'the act of revising, a revision' },
    { word: 'REVOCATION', definition: 'nullification or withdrawal' },
    {
        word: 'RHAPSODY',
        definition: 'an ecstatic expression of feeling or enthusiasm'
    },
    {
        word: 'RHETORIC',
        definition: 'the art of using language as a means to persuade'
    },
    { word: 'RHETORICIAN', definition: 'an expert or student of language' },
    { word: 'RIDDANCE', definition: 'the act or fact of clearing away or out' },
    { word: 'RIFT', definition: 'an opening made by splitting, cleaving, etc' },
    {
        word: 'RIGHTEOUSNESS',
        definition: 'the quality or state of being just or rightful'
    },
    {
        word: 'RIGMAROLE',
        definition: 'complex, obsolete procedures, excess steps or activity'
    },
    { word: 'RIGOR', definition: 'strictness, severity or harshness' },
    { word: 'RIPPLET', definition: 'a small ripple' },
    { word: 'RIVULET', definition: 'a small brook or stream, a streamlet' },
    { word: 'ROGUE', definition: 'a dishonest, knavish person' },
    {
        word: 'RONDO',
        definition: 'music that returns to a main theme throughout the piece'
    },
    {
        word: 'ROOKERY',
        definition: 'a colony of breeding birds or other animals'
    },
    { word: 'ROUT', definition: 'an overwhelming defeat' },
    {
        word: 'RUDIMENTS',
        definition: 'the elements or first principles of a subject'
    },
    { word: 'RUFFIAN', definition: 'a tough, lawless person' },
    { word: 'RUSE', definition: 'a trick or artifice' },
    { word: 'RUTH', definition: 'pity or compassion' },
    {
        word: 'SACCHARIN',
        definition:
            'a white, crystalline powder used as an artificial sweetener'
    },
    {
        word: 'SACRILEGE',
        definition: 'misuse or violation of something regarded as sacred'
    },
    { word: 'SAGA', definition: 'any narrative or legend of heroic exploits' },
    {
        word: 'SAGACITY',
        definition: 'acuteness of mental discernment and soundness of judgement'
    },
    { word: 'SAGE', definition: 'a profoundly wise person' },
    {
        word: 'SALVE',
        definition:
            'a medical ointment for healing or relieving wounds and sores'
    },
    {
        word: 'SALVO',
        definition: 'a successive charge of artillery, bombs, etc'
    },
    {
        word: 'SANCTION',
        definition: 'authoritative permission or approval for an action'
    },
    {
        word: 'SANCTITY',
        definition: 'holiness of life or disposition, saintliness'
    },
    {
        word: 'SANGFROID',
        definition:
            'self-possession or imperturbability especially under strain'
    },
    { word: 'SARCASM', definition: 'harsh or bitter derision or irony' },
    {
        word: 'SARCOPHAGUS',
        definition:
            'a stone coffin, often inscribed or decorated with sculpture'
    },
    {
        word: 'SATIRE',
        definition: 'the use of irony,or sarcasm in exposing folly, vice'
    },
    {
        word: 'SATYR',
        definition: 'a woodland deity represented as half-man, half-horse'
    },
    { word: 'SAVAGE', definition: 'fierce, ferocious or cruel' },
    {
        word: 'SAVANT',
        definition: 'a person of profound or extensive learning'
    },
    { word: 'SCABBARD', definition: 'the sheath of a sword' },
    { word: 'SCARCITY', definition: 'insufficiency or shortness of supply' },
    {
        word: 'SCHISM',
        definition: 'division, especially into mutually opposed parties'
    },
    { word: 'SCINTILLA', definition: 'a small spark or flash, a trace' },
    { word: 'SCOUNDREL', definition: 'one without honor, a villain' },
    { word: 'SCOURGE', definition: 'to punish or criticize somebody severely' },
    {
        word: 'SCRIBE',
        definition: 'person who made copies of manuscripts before printing'
    },
    {
        word: 'SCRUPLE',
        definition: 'a moral standard that inhibits certain actions'
    },
    {
        word: 'SCURVY',
        definition: 'a disease caused by a diet lacking in vitamin c'
    },
    {
        word: 'SCYTHE',
        definition: 'a long, curved blade used for cutting grass and grain'
    },
    {
        word: 'SÉANCE',
        definition: 'meeting where a mystic tries to communicate with the dead'
    },
    {
        word: 'SECANT',
        definition:
            'a straight line that intersects a curve at 2 or more points'
    },
    { word: 'SECLUSION', definition: 'solitude' },
    {
        word: 'SEDIMENT',
        definition: 'particles that settle to the bottom of a liquid'
    },
    {
        word: 'SEDITION',
        definition: 'incitement of discontent or rebellion against movement'
    },
    { word: 'SEER', definition: 'a person who prophesies future events' },
    {
        word: 'SEIGNIOR',
        definition: 'a feudal lord, nobleman who held his lands by feudal grant'
    },
    {
        word: 'SEISMOGRAPH',
        definition: 'instrument for measuring the vibrations of earthquakes'
    },
    {
        word: 'SEMAPHORE',
        definition: 'an apparatus for conveying information by visual signals'
    },
    {
        word: 'SEMBLANCE',
        definition: 'likeness, similarity, the quality of being similar'
    },
    {
        word: 'SEMINAR',
        definition: 'a small group of students engaged in study'
    },
    {
        word: 'SEMINARY',
        definition:
            'a theological school to train rabbis, priests, or ministers'
    },
    { word: 'SENSATION', definition: 'perception or awareness of stimuli' },
    {
        word: 'SENSIBILITY',
        definition: 'the ability to sense, feel or perceive'
    },
    { word: 'SENSORIUM', definition: 'the sensory part of the brain' },
    {
        word: 'SENTINEL',
        definition: 'a person or thing that watches or guards'
    },
    { word: 'SEPULCHER', definition: 'a tomb, grave or burial place' },
    {
        word: 'SERENDIPITY',
        definition: 'an aptitude for making desirable discoveries by accident'
    },
    {
        word: 'SERGEANT',
        definition: 'an army officer above the rank of corporal'
    },
    {
        word: 'SERGEANT-AT-ARMS',
        definition: 'a person charged with keeping order at a meeting'
    },
    {
        word: 'SERGEANT-MAJOR',
        definition:
            'officer serving as chief administrative assistant in a unit'
    },
    { word: 'SERVITUDE', definition: 'slavery or bondage of any kind' },
    { word: 'SEVERANCE', definition: 'a breaking off' },
    { word: 'SEVERELY', definition: 'harshly' },
    { word: 'SEXTET', definition: 'any group or set of six' },
    {
        word: 'SHACKLE',
        definition: 'a ring of iron used to secure the wrist or ankle'
    },
    { word: 'SHAMBLES', definition: 'any scene of destruction' },
    { word: 'SHEER', definition: 'transparently thin' },
    {
        word: 'SHIBBOLETH',
        definition: 'a peculiarity that distinguishes a class of people'
    },
    { word: 'SHOAL', definition: 'a place where a body of water is shallow' },
    { word: 'SHRINKAGE', definition: 'the act of shrinking' },
    {
        word: 'SHROUD',
        definition: 'a cloth in which a corpse is wrapped for burial'
    },
    {
        word: 'SIEGE',
        definition: 'to attack a fortified place to isolate it from help'
    },
    { word: 'SIGNIFICATION', definition: 'an exact meaning or sense' },
    {
        word: 'SIMILE',
        definition: 'figure of speech in which 2 unlike things are compared'
    },
    { word: 'SIMILITUDE', definition: 'likeness, resemblance' },
    {
        word: 'SINECURE',
        definition:
            'a job that requires no work but still gives an ample payment'
    },
    { word: 'SINUOSITY', definition: 'a curve, bend or turn' },
    {
        word: 'SINUS',
        definition: 'a cavity in any organ or tissue, i.e. the nasal passage'
    },
    {
        word: 'SIROCCO',
        definition:
            'a hot, dry wind blowing from N. Africa into southern Europe'
    },
    {
        word: 'SKEPTIC',
        definition: 'a person who questions the validity of something'
    },
    { word: 'SKIFF', definition: 'a small flat-bottomed open boat' },
    { word: 'SLANDER', definition: 'defamation' },
    { word: 'SLEIGHT', definition: 'cunning, craft, artful practice' },
    { word: 'SLOTH', definition: 'laziness, slowness in the mindset' },
    {
        word: 'SLUGGARD',
        definition: 'a person who is lazy, stupid, or idle by habit'
    },
    { word: 'SMORGASBORD', definition: 'a buffet' },
    { word: 'SOBRIETY', definition: 'the quality or state of being sober' },
    { word: 'SOL', definition: 'the fifth step in the solfège scale of c' },
    { word: 'SOLACE', definition: 'comfort in sorrow, misfortune or trouble' },
    {
        word: 'SOLDER',
        definition: 'an alloy applied between metal objects to unite them'
    },
    { word: 'SOLECISM', definition: 'a nonstandard or ungrammatical usage' },
    { word: 'SOLICITUDE', definition: 'anxiety or concern' },
    {
        word: 'SOLILOQUY',
        definition: 'speech by a person talking to himself, disregarding others'
    },
    {
        word: 'SOLSTICE',
        definition: 'either the shortest or longest day of the year'
    },
    {
        word: 'SOLUBILITY',
        definition: 'the quality or property of being soluble'
    },
    { word: 'SOLUBLE', definition: 'capable of being dissolved or liquefied' },
    {
        word: 'SOLVENT',
        definition: 'a substance that dissolves another to form a solution'
    },
    {
        word: 'SOMNAMBULIST',
        definition: 'a person who walks about in his or her sleep'
    },
    {
        word: 'SONATA',
        definition: 'musical piece for 1 or more instruments in 3-4 movements'
    },
    {
        word: 'SONNET',
        definition:
            'a fixed verse form of 14 lines usually in iambic pentameter'
    },
    {
        word: 'SOOTHSAYER',
        definition: 'a person who professes or foretell events'
    },
    { word: 'SOPHISM', definition: 'any false argument' },
    {
        word: 'SOPHISTRY',
        definition: 'a superficially plausible, but false method of reasoning'
    },
    {
        word: 'SOPRANO',
        definition: 'the highest singing voice in women and boys'
    },
    { word: 'SORCERY', definition: 'magic done with the help of evil spirits' },
    {
        word: 'SOUVENIR',
        definition: 'an item to remember an event or location'
    },
    { word: 'SOVEREIGN', definition: 'a monarch' },
    { word: 'SPATE', definition: 'a sudden outpouring' },
    {
        word: 'SPECIMEN',
        definition: 'an individual instance that represents a class, an example'
    },
    { word: 'SPECTATOR', definition: 'one who observes an event, an observer' },
    { word: 'SPECTER', definition: 'a ghostly apparition' },
    {
        word: 'SPECTRUM',
        definition: 'a broad range of varied but related ideas or objects'
    },
    { word: 'SPECULATOR', definition: 'one who speculates' },
    {
        word: 'SPELUNKER',
        definition: 'one who explores caves, one who spelunks'
    },
    {
        word: 'SPENDTHRIFT',
        definition: 'a person who spends money extravagantly or wastefully'
    },
    { word: 'SPHERICITY', definition: 'the quality of being spherical' },
    {
        word: 'SPHEROID',
        definition: 'a solid geometrical figure similar in shape to a sphere'
    },
    {
        word: 'SPHEROMETER',
        definition: 'an instrument for measuring the curvature of surfaces'
    },
    {
        word: 'SPINSTER',
        definition: 'a woman still unmarried beyond the usual age of marriage'
    },
    { word: 'SQUALOR', definition: 'filth and misery' },
    {
        word: 'SQUATTER',
        definition: 'one who occupies a building or land without permission'
    },
    { word: 'STAGNATION', definition: 'inactivity' },
    { word: 'STALLION', definition: 'an uncastrated male horse' },
    {
        word: 'STAMINA',
        definition: 'the energy for continuing to do something for a long time'
    },
    {
        word: 'STANCHION',
        definition:
            'an upright bar or beam used as support in a window or stall'
    },
    { word: 'STANZA', definition: 'a unit of a poem, equivalent to a verse' },
    { word: 'STATECRAFT', definition: 'the art of government and diplomacy' },
    {
        word: 'STATICS',
        definition:
            'branch of mechanics dealing w/ forces in static equilibrium'
    },
    {
        word: 'STATISTICIAN',
        definition: 'a person who compiles, interprets, or studies statistics'
    },
    { word: 'STATUETTE', definition: 'a small statue' },
    {
        word: 'STATURE',
        definition: "a person or animal's natural height when standing upright"
    },
    {
        word: 'STATUTE',
        definition: 'written law, as laid down by the legislature'
    },
    { word: 'STEALTH', definition: 'secret or clandestine procedure' },
    { word: 'STEPPE', definition: 'the grasslands of eastern europe and asia' },
    {
        word: 'STEREOTYPE',
        definition: 'a simplified and standardised conception held by a group'
    },
    {
        word: 'STEVEDORE',
        definition:
            'firm or individual engaged in loading or unloading a vessel'
    },
    { word: 'STIGMA', definition: 'a mark of disgrace or infamy' },
    { word: 'STILETTO', definition: 'a short dagger with a thick blade' },
    {
        word: 'STIMULUS',
        definition: 'anything that may have an impact or influence on a system'
    },
    { word: 'STINT', definition: 'a period of time spent doing something' },
    { word: 'STIPEND', definition: 'a fixed payment, generally small' },
    {
        word: 'STOICISM',
        definition: '(school of philosophy) logic reflects cosmic reason'
    },
    {
        word: 'STRAIT',
        definition:
            'a narrow passage of water connecting 2 large bodies of water'
    },
    {
        word: 'STRATAGEM',
        definition: 'a deceptive tactic designed to gain the upper hand'
    },
    {
        word: 'STRATUM',
        definition: 'one of several parallel horizontal layers of materia'
    },
    { word: 'STREAMLET', definition: 'a small stream' },
    { word: 'STRICTURE', definition: 'a rule restricting behaviour or action' },
    {
        word: 'STRIDENCY',
        definition: 'the quality of being loud or making a harsh sound'
    },
    {
        word: 'STRIPLING',
        definition: 'a youth just passing from boyhood to manhood'
    },
    {
        word: 'STUPOR',
        definition: 'a state of reduced consciousness or sensibility'
    },
    {
        word: 'SUASION',
        definition: 'the act of urging or influencing, persuasion'
    },
    {
        word: 'SUBCONSCIOUS',
        definition: 'the mental processes of which the individual is not aware'
    },
    {
        word: 'SUBJECTION',
        definition: 'bringing something under the control of something else'
    },
    {
        word: 'SUBMARINE',
        definition: 'a vessel that can be submerged and navigated underwater'
    },
    {
        word: 'SUBMERSION',
        definition: 'the act of sinking until completely covered with water'
    },
    {
        word: 'SUBMISSION',
        definition: 'the act of yielding to the will or authority of another'
    },
    { word: 'SUBMITTAL', definition: 'the act of submitting' },
    {
        word: 'SUBPOENA',
        definition: 'the summoning of witnesses or evidence before a court'
    },
    { word: 'SUBSERVIENCE', definition: 'a subordinate place or function' },
    { word: 'SUBSISTENCE', definition: 'real being, existence' },
    {
        word: 'SUBTERFUGE',
        definition: 'an indirect or deceptive device or stratagem'
    },
    { word: 'SUBTEXT', definition: 'the underlying or implicit meaning' },
    {
        word: 'SUBTRAHEND',
        definition: 'a number or quantity to be subtracted from another'
    },
    {
        word: 'SUBVERSION',
        definition: 'the act of subverting or the condition of being overthrown'
    },
    {
        word: 'SUCCESSOR',
        definition: 'person that immediately follows another in holding a title'
    },
    { word: 'SUCCOR', definition: 'help, relief, aid' },
    {
        word: 'SUFFERANCE',
        definition: 'endurance, especially patiently, of pain or adversity'
    },
    {
        word: 'SUFFRAGE',
        definition: 'the right to vote, especially in a political election'
    },
    {
        word: 'SUFFRAGIST',
        definition:
            'advocate of granting the right to vote, especially to women'
    },
    { word: 'SUPERABUNDANCE', definition: 'more than sufficient, excessive' },
    {
        word: 'SUPERFLUITY',
        definition: 'the quality or state of being in excess'
    },
    { word: 'SUPPLIANT', definition: 'a petitioner' },
    { word: 'SUPPLICATION', definition: 'humble prayer, entreaty or petition' },
    { word: 'SUPPOSITION', definition: 'something that is assumed' },
    { word: 'SUPPRESSION', definition: 'the act or instance of repressing' },
    { word: 'SURCHARGE', definition: 'an additional charge, tax or cost' },
    {
        word: 'SURETY',
        definition: 'security against loss or damage, guarantee'
    },
    { word: 'SURFEIT', definition: 'excessive amount' },
    { word: 'SURFEIT', definition: 'an excessive amount of something' },
    { word: 'SURVEILLANCE', definition: 'a watch kept over a person' },
    {
        word: 'SURVEYOR',
        definition: 'a person whose occupation is to survey land or buildings'
    },
    { word: 'SUSCEPTIBILITY', definition: 'vulnerability' },
    {
        word: 'SUSPENSE',
        definition:
            'a state of uncertainty or excitement in awaiting an outcome'
    },
    {
        word: 'SUSTENANCE',
        definition: 'something that provides support or nourishment'
    },
    { word: 'SYBARITE', definition: 'a person devoted to luxury and pleasure' },
    { word: 'SYCOPHANT', definition: 'self-seeking, servile flatterer' },
    {
        word: 'SYLLABICATION',
        definition: 'the act of dividing something into syllables'
    },
    {
        word: 'SYLLABLE',
        definition: 'segment of speech: a vowel sound or syllabic consonant'
    },
    {
        word: 'SYLLABUS',
        definition: 'an outline of the contents of a curriculum'
    },
    { word: 'SYLPH', definition: 'a wood nymph' },
    {
        word: 'SYMBIOSIS',
        definition: 'any interdependent relationship between two things'
    },
    {
        word: 'SYMPHONY',
        definition:
            'an elaborate instrumental composition, written for orchestra'
    },
    {
        word: 'SYNAERESIS',
        definition: 'the contraction of two syllables or two vowels into one'
    },
    { word: 'SYNCHRONISM', definition: 'coincidence in time' },
    {
        word: 'SYNDICATE',
        definition:
            'a group of people making a joint effort to undertake a duty'
    },
    {
        word: 'SYNDROME',
        definition:
            'a recognizable pattern of signs, symptoms and/or behaviours'
    },
    {
        word: 'SYNERGY',
        definition: 'elements that make an effect greater than the sum of parts'
    },
    {
        word: 'SYNOD',
        definition: 'an ecclesiastic council to consult on church matters'
    },
    {
        word: 'SYNONYM',
        definition: 'a word having the same meaning as another in the language'
    },
    {
        word: 'SYNOPSIS',
        definition: 'a brief summary of the major points of a written work'
    },
    { word: 'SYNTAX', definition: 'a system or orderly arrangement' },
    {
        word: 'TABLEAU',
        definition: 'a picturesque grouping of persons or objects'
    },
    { word: 'TACK', definition: 'a short nail with a flat, broad head' },
    {
        word: 'TACT',
        definition: 'a keen sense of what to say or do to avoid giving offence'
    },
    {
        word: 'TACTICIAN',
        definition: 'a person skilled in the planning and execution of tactics'
    },
    {
        word: 'TACTICS',
        definition: 'the art of implementing means to achieve immediate goals'
    },
    {
        word: 'TALISMAN',
        definition:
            'an object supposed to possess occult powers, worn as a charm'
    },
    {
        word: 'TANNERY',
        definition: 'a place where people tan hides to make leather'
    },
    {
        word: 'TAPESTRY',
        definition:
            'fabric on which a picture is embroidered, for wall hangings'
    },
    {
        word: 'TARANTULA',
        definition: 'any large, hair spider of the family theraphosidae'
    },
    { word: 'TAUTOLOGY', definition: 'redundant use of words' },
    {
        word: 'TAXATION',
        definition: 'the act of imposing taxes and the fact of being taxed'
    },
    {
        word: 'TAXIDERMY',
        definition:
            'the art of stuffing the skins of dead animals to be lifelike'
    },
    {
        word: 'TECHNICALITY',
        definition:
            'a petty point coming from a strict interpretation of details'
    },
    {
        word: 'TECHNOGRAPHY',
        definition:
            'historical study of art and science in relation to geography'
    },
    {
        word: 'TECHNOLOGY',
        definition: 'a method that applies technical knowledge or tools'
    },
    { word: 'TEDIUM', definition: 'the quality or state of being wearisome' },
    {
        word: 'TELEPATHY',
        definition: 'the capability to communicate directly by psychic means'
    },
    {
        word: 'TELEPHONY',
        definition: 'sound transmission via the electromagnetic spectrum'
    },
    { word: 'TEMERITY', definition: 'reckless boldness' },
    {
        word: 'TEMPTER',
        definition: 'someone or something that tempts, especially to evil'
    },
    {
        word: 'TENACITY',
        definition: 'the quality or property of being persistent or stubborn'
    },
    { word: 'TENANT', definition: 'a person that rents or occupies land' },
    {
        word: 'TENDENCY',
        definition: 'a likelihood of behaving in a particular way'
    },
    {
        word: 'TENET',
        definition: 'any principle held as true by members of a group'
    },
    {
        word: 'TENOR',
        definition: 'the adult male voice between the bass and countertenor'
    },
    { word: 'TERMINUS', definition: 'the end or final point of something' },
    {
        word: 'TESTAMENT',
        definition: "a will, relating to one's personal property"
    },
    {
        word: 'TESTATOR',
        definition: 'one who dies having made a legally valid will'
    },
    {
        word: 'TESTIMONIAL',
        definition: 'a statement, especially one given under oath, testimony'
    },
    {
        word: 'TETHER',
        definition:
            'a rope or chain by which an animal is tied to a fixed object'
    },
    { word: 'THEARCHY', definition: 'the rule or government of a god' },
    {
        word: 'THEISM',
        definition: 'belief in the existence of at least one deity'
    },
    {
        word: 'THEOCRACY',
        definition: 'government under the control of a religion'
    },
    {
        word: 'THEOCRASY',
        definition:
            'interaction, admixture, and conflation of divine principles'
    },
    {
        word: 'THEOLOGIAN',
        definition: 'one who studies theology, especially christian'
    },
    {
        word: 'THEOLOGY',
        definition: 'the field of study and analysis of divine things'
    },
    { word: 'THEORIST', definition: 'someone who constructs theories' },
    {
        word: 'THERMOELECTRICITY',
        definition: 'electricity generated by heat or temperature'
    },
    { word: 'THESIS', definition: 'a subject for a composition or essay' },
    { word: 'THOROUGHFARE', definition: 'a passage, a way through' },
    { word: 'THRALL', definition: 'a person who is enslaved by some power' },
    {
        word: 'THRESHOLD',
        definition:
            'the bottom-most part of a doorway that one crosses to enter'
    },
    { word: 'THRONG', definition: 'a crowd' },
    { word: 'TILTH', definition: 'the act of tilling land for crop' },
    {
        word: 'TIMBRE',
        definition: 'the quality of a sound independent of its pitch and volume'
    },
    { word: 'TINCTURE', definition: 'a dye or pigment' },
    {
        word: 'TIRADE',
        definition: 'a long, angry or violent speech, a diatribe'
    },
    { word: 'TOADY', definition: 'a flatterer' },
    { word: 'TOME', definition: 'a very heavy or learned book' },
    {
        word: 'TOPOGRAPHY',
        definition: 'the detailed mapping of the features of a geological area'
    },
    { word: 'TORPOR', definition: 'sluggish activity, inertia' },
    { word: 'TOUCHSTONE', definition: 'a test for the qualities of something' },
    {
        word: 'TOURNIQUET',
        definition:
            'a device for stopping bleeding by compressing a blood vessel'
    },
    {
        word: 'TRAIT',
        definition: 'an identifying characteristic, habit or trend'
    },
    {
        word: 'TRAJECTORY',
        definition: 'the path of a body as it travels through space'
    },
    { word: 'TRAMMEL', definition: 'a restraint' },
    { word: 'TRANSCRIPT', definition: 'a written, or printed copy' },
    {
        word: 'TRANSFERENCE',
        definition: 'the act of conveying from one place to another'
    },
    {
        word: 'TRANSFERRER',
        definition: 'a person who, or thing that transfers'
    },
    {
        word: 'TRANSFUSION',
        definition: 'the transfer of blood from one individual to another'
    },
    {
        word: 'TRANSIENCE',
        definition:
            'the quality of being transient, temporary, brief or fleeting'
    },
    {
        word: 'TRANSMISSION',
        definition: 'the act of sending something forward'
    },
    {
        word: 'TRANSPOSITION',
        definition: 'a shift in a piece of music from one key to another'
    },
    {
        word: 'TRAPPINGS',
        definition: 'the dress or insignia associated with a position or status'
    },
    { word: 'TRAVAIL', definition: 'toil, painfully difficult work' },
    {
        word: 'TRAVESTY',
        definition: 'any grotesque likeness or imitation of something'
    },
    { word: 'TREACHERY', definition: 'betrayal of trust' },
    {
        word: 'TREATISE',
        definition:
            'a formal, usually lengthy, systematic discourse on a subject'
    },
    { word: 'TREBLE', definition: 'a high or shrill voice or sound' },
    { word: 'TREPIDATION', definition: 'tremulous fear' },
    {
        word: 'TRESTLE',
        definition: 'a frame with a horizontal beam supported by a pair of legs'
    },
    { word: 'TRIAD', definition: 'a grouping of three' },
    {
        word: 'TRIBUNE',
        definition: 'a person who upholds or defends the rights of the people'
    },
    { word: 'TRICKERY', definition: 'artifice, deception' },
    {
        word: 'TRICYCLE',
        definition: 'vehicle with 1 large front wheel and 2 smaller rear wheels'
    },
    {
        word: 'TRIDENT',
        definition: 'a three-pronged spear somewhat resembling a pitchfork'
    },
    {
        word: 'TRIMNESS',
        definition: 'the state of being well arranged or appearing neat'
    },
    { word: 'TRINITY', definition: 'a group of three people or things' },
    {
        word: 'TRINKET',
        definition: 'a small showy ornament or piece of jewelry'
    },
    {
        word: 'TRIPLICITY',
        definition: 'the state of being triple or threefold'
    },
    {
        word: 'TRIPOD',
        definition: 'a three-legged stand or support, as for a camera'
    },
    {
        word: 'TRIUMVIR',
        definition: '1 of 3 persons associated in any position of authority'
    },
    {
        word: 'TROUBADOUR',
        definition: 'one of a class of medieval lyric poets'
    },
    {
        word: 'TROUGH',
        definition: 'a long box used to hold food and water for animals'
    },
    {
        word: 'TRUANT',
        definition: 'a student who stays away from school without permission'
    },
    { word: 'TRUISM', definition: 'a self-evident or obvious truth' },
    { word: 'TRYST', definition: 'an arrangement between lovers to meet' },
    {
        word: 'TUMULT',
        definition: 'violent and noisy commotion of a crowd or mob'
    },
    {
        word: 'TURMOIL',
        definition: 'a state of great commotion, confusion or disturbance'
    },
    { word: 'TURPITUDE', definition: 'vile, shameful or base character' },
    {
        word: 'TUTELAGE',
        definition: 'the act of guarding or protecting, guardianship'
    },
    { word: 'TUTORSHIP', definition: 'the duty of a tutor, tutelage' },
    { word: 'TWINGE', definition: 'a sudden, sharp pain' },
    {
        word: 'TYPOGRAPHY',
        definition: 'the art or practice of setting and arranging type'
    },
    {
        word: 'TYRANNY',
        definition: 'arbitrary or unrestrained exercise of power'
    },
    { word: 'TYRO', definition: 'a learner or beginner' },
    {
        word: 'ULTIMATUM',
        definition: 'a final, uncompromising demand issued by a party'
    },
    { word: 'UMBRAGE', definition: 'offense, annoyance, displeasure' },
    {
        word: 'UMLAUT',
        definition:
            'a mark over a vowel used to indicate a different vowel sound'
    },
    {
        word: 'UNANIMITY',
        definition: 'the condition of complete agreement by all parties'
    },
    { word: 'UNBELIEF', definition: 'a lack (or rejection) of belief' },
    {
        word: 'UNCTION',
        definition: 'anointing, as a medical treatment or religious rite'
    },
    { word: 'UNDERLING', definition: 'a subordinate' },
    { word: 'UNDERPINNING', definition: 'a system of supports beneath a wall' },
    { word: 'UNDULATION', definition: 'a wavelike motion' },
    {
        word: 'UNGUENT',
        definition: 'therapeutic skin cream with medicinal ingredients'
    },
    { word: 'UNIFICATION', definition: 'the process of unifying or uniting' },
    { word: 'UNIFORM', definition: 'identical or consistent' },
    { word: 'UNITARIAN', definition: 'a supporter of unity or centralization' },
    {
        word: 'UNIVALENCE',
        definition: '(chemistry) the condition of having a valence of one'
    },
    {
        word: 'UP-KEEP',
        definition: 'the process of properly maintaining something'
    },
    { word: 'UPHEAVAL', definition: 'strong or violent change or disturbance' },
    { word: 'UPSHOT', definition: 'the final issue, conclusion or result' },
    {
        word: 'URBANITY',
        definition: 'behaviour that is polished, refined, courteous'
    },
    { word: 'URCHIN', definition: 'a mischievous child' },
    { word: 'URGENCY', definition: 'imperativeness' },
    { word: 'USAGE', definition: 'a customary way of doing something' },
    {
        word: 'USURY',
        definition: 'the practice of lending money at an exorbitant interest'
    },
    {
        word: 'UTILITY',
        definition: 'the state or condition of being useful, usefulness'
    },
    { word: 'UTOPIA', definition: 'an ideal place or state' },
    { word: 'VACUITY', definition: 'absent of thought or intelligence' },
    { word: 'VACUUM', definition: 'a space entirely devoid of matter' },
    {
        word: 'VAGABOND',
        definition: 'wandering from place to place without any settled home'
    },
    { word: 'VAGARY', definition: 'an erratic notion or action' },
    {
        word: 'VAGRANT',
        definition:
            'a person who wanders and has no permanent home or employment'
    },
    { word: 'VAINGLORY', definition: 'excessive vanity' },
    { word: 'VALE', definition: 'valley' },
    {
        word: 'VALEDICTION',
        definition: 'a speech made when leaving or parting company'
    },
    {
        word: 'VALEDICTORIAN',
        definition: 'the student who gives the farewell address at graduation'
    },
    {
        word: 'VANGUARD',
        definition: 'the foremost division or the front part of an army'
    },
    {
        word: 'VANTAGE',
        definition: 'a position affording some advantage or commanding view'
    },
    {
        word: 'VAPORIZER',
        definition: 'a device with a heating element, used to vaporize a liquid'
    },
    {
        word: 'VASSAL',
        definition:
            'a person granted land in exchange for loyalty to a superior'
    },
    {
        word: 'VAUDEVILLE',
        definition: 'a theatrical piece of light or amusing character'
    },
    {
        word: 'VEHEMENCE',
        definition: 'an intense concentration, force or power'
    },
    { word: 'VELOCITY', definition: 'rapidity of motion or operation' },
    {
        word: 'VENDETTA',
        definition: 'any prolonged and bitter feud, rivalry or contention'
    },
    { word: 'VENDITION', definition: 'the act of vending or selling, sale' },
    { word: 'VENDOR', definition: 'a person or a company that vends or sells' },
    { word: 'VENEER', definition: 'a thin layer of wood' },
    { word: 'VENGEANCE', definition: 'violent revenge' },
    { word: 'VENISON', definition: 'the meat of a deer' },
    {
        word: 'VENOM',
        definition: 'poisonous fluid that animals secrete by biting or stinging'
    },
    {
        word: 'VENTRILOQUIST',
        definition: 'an entertainer who can speak without moving his lips'
    },
    { word: 'VERACITY', definition: 'habitual observance of truth in speech' },
    { word: 'VERBIAGE', definition: 'overabundance of words' },
    { word: 'VERBOSITY', definition: 'superfluity of words' },
    {
        word: 'VERIFICATION',
        definition: 'evidence that confirms the truth of something'
    },
    {
        word: 'VERISIMILITUDE',
        definition: 'the appearance or semblance of truth'
    },
    { word: 'VERITY', definition: 'truth, fact or reality' },
    {
        word: 'VERMIN',
        definition: 'small animals or insects that harm people, property, crops'
    },
    { word: 'VERTEX', definition: 'the highest point of something' },
    {
        word: 'VERTIGO',
        definition: 'a dizzying sensation of tilting within stable surroundings'
    },
    {
        word: 'VESTIGE',
        definition: 'a mark or trace of something no longer in evidence'
    },
    { word: 'VESTMENT', definition: 'a garment, especially an outer garment' },
    {
        word: 'VETO',
        definition: 'the power to reject bills passed by the legislature'
    },
    {
        word: 'VEXATION',
        definition:
            'the state of being provoked to slight annoyance or distress'
    },
    {
        word: 'VICEROY',
        definition: 'one who governs a place as the representative of a monarch'
    },
    {
        word: 'VICISSITUDE',
        definition: 'a change or variation in the course of something'
    },
    {
        word: 'VICISSITUDES',
        definition: 'successive, alternating or changing phases of conditions'
    },
    {
        word: 'VIGNETTE',
        definition: 'a short descriptive piece of literary writing'
    },
    {
        word: 'VILIFICATION',
        definition:
            'slanderous or malicious defamation, character assassination'
    },
    { word: 'VINERY', definition: 'vineyard' },
    {
        word: 'VIOL',
        definition: 'a bowed instrument common in the 16th and 17th centuries'
    },
    {
        word: 'VIOLA',
        definition:
            'stringed instrument of the violin family, larger than violin'
    },
    { word: 'VIOLATION', definition: 'a breach of a law, rule or promise' },
    {
        word: 'VIOLATOR',
        definition: "one who infringes upon a rule, another person's body, etc"
    },
    {
        word: 'VIOLONCELLO',
        definition: 'a large stringed instrument of the violin family'
    },
    { word: 'VIPER', definition: 'a poisonous snake in the family viperidae' },
    { word: 'VIRTU', definition: 'knowledge of the fine arts' },
    {
        word: 'VIRTUOSO',
        definition: 'a person who has special knowledge or skill in a field'
    },
    { word: 'VIRULENCE', definition: 'the state of being actively poisonous' },
    { word: 'VISAGE', definition: "countenance, appearance, one's face" },
    {
        word: 'VISCOSITY',
        definition:
            'property of fluid that resists the force causing it to flow'
    },
    {
        word: 'VISCOUNT',
        definition: 'a member of the peerage above a baron but below a count'
    },
    { word: 'VISTA', definition: 'a distant view seen through some opening' },
    {
        word: 'VITRIOL',
        definition: 'something highly caustic or severe in effect, as criticism'
    },
    { word: 'VIVACITY', definition: 'liveliness' },
    {
        word: 'VIVISECTION',
        definition: 'the action of cutting into or dissecting a living body'
    },
    {
        word: 'VOCATION',
        definition: 'a particular occupation, business or profession, calling'
    },
    { word: 'VOGUE', definition: 'something in fashion at a particular time' },
    { word: 'VOLITION', definition: 'a conscious choice or decision' },
    {
        word: 'VORTEX',
        definition: 'a whirlwind, moving matter in the form of a spiral'
    },
    {
        word: 'VOTARY',
        definition: 'a person bound by solemn religious vows, as a monk or nun'
    },
    {
        word: 'VULGARITY',
        definition: 'the quality of being crude or tasteless'
    },
    {
        word: 'WAIF',
        definition: 'a person, especially a child, who has no home or friends'
    },
    {
        word: 'WAMPUM',
        definition: "formerly native american peoples' currency"
    },
    { word: 'WANTONNESS', definition: 'the state of being reckless' },
    {
        word: 'WARRANT',
        definition: 'something that gives formal assurance of something'
    },
    {
        word: 'WASTREL',
        definition: 'one who wastes time or resources extravagantly'
    },
    { word: 'WAVELET', definition: 'a small wave, ripple' },
    { word: 'WEAL', definition: 'well-being, prosperity or happiness' },
    { word: 'WEE', definition: 'little, very small' },
    { word: 'WHIM', definition: 'a fanciful impulse, or whimsical idea' },
    {
        word: 'WILE',
        definition:
            'a trick, artifice or stratagem meant to fool, trap or entice'
    },
    {
        word: 'WITLING',
        definition:
            'a person who feigns wit, pretending or aspiring to be witty'
    },
    { word: 'WITTICISM', definition: 'a witty remark, a quip' },
    { word: 'WRAITH', definition: 'a ghost or specter' },
    { word: 'WRATH', definition: 'strong or fierce anger' },
    {
        word: 'WRETCHEDNESS',
        definition: 'an unhappy state of mental or physical suffering'
    },
    {
        word: 'XENOPHOBIA',
        definition: 'an unreasonable fear of strangers or foreigners'
    },
    {
        word: 'YEARLING',
        definition: 'an animal that is between one and two years old'
    },
    {
        word: 'YOKE',
        definition: 'a device for joining together a pair of draft animals'
    },
    { word: 'ZEAL', definition: 'eager desire or endeavor' },
    { word: 'ZEALOT', definition: 'a fanatic' },
    {
        word: 'ZEITGEIST',
        definition: 'a trend of thought characteristic of a particular time'
    },
    { word: 'ZENITH', definition: 'a highest point or state' },
    { word: 'ZEPHYR', definition: 'a gentle, mild breeze' },
    { word: 'ZODIAC', definition: 'an astrological system' }
];
export default wordBank;
