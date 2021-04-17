# dougc89.github.io

Some thoughts on the righteousness and divine health available through Jesus Christ, in Q/A format. 

	utils.topic = {
	body: bool (is this related to divine health?),
	blood: bool (is this related to the righteousness of God?),
	question: string (naturally, ending in a ...?),
	answer: string (use ` for multi-line strings),
	scriptures: array 
		[{ref: string, text: string (use ` for multi-line strings)}, ... ]
	keywords: array
		['keyword_1', 'keyword_2', ...]
	}

Methods:

	utils.newTopic(): reset util.topic
	
	utils.setType(body, blood): set util.topic.body and util.topic.blood flags
	
	utils.setQuestion(question): set util.topic.question
	
	utils.setAnswer(answer): set util.topic.answer
	
	utils.addScripture(ref, text): append to the util.topic.scriptures array
	
	utils.addKeyword(keyword): append to the util.topic.keywords array
	
	utils.addTopic(): build the topic into html page content
