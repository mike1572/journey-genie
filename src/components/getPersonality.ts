import { Question } from "../questions";

export async function getPersonality( questions: Question[], answers: string[] ) {
    if (questions.length !== answers.length) {
        console.error('questions and answers must be the same length');
        return;
    }

    const questionArr = questions.map(q=> q.question);
    const API_KEY_COHERE = process.env.REACT_APP_API_KEY_COHERE;

    const qaList = [];
    for (let i = 0; i < questionArr.length; i++) {
        const question = questionArr[i];
        const answer = answers[i];
        const pair = `${question}: ${answer}`;
        qaList.push(pair);
    }
    const qaPairs = qaList.join('\n');

    const prom = `Base on the below answers for each questions, determine the travel personality of the user. \n ${qaPairs} \n Below are descriptions of travel personality\n\n1. The Explorer: These travelers are always on the lookout for their next adventure. They love discovering new places and are always up for trying new things.\n\n2. The Relaxer: These travelers are all about kicking back and enjoying their vacation. They love nothing more than a good book, a beach chair, and a cocktail.\n\n3. The Social Butterfly: These travelers love meeting new people and making new friends. They are always the life of the party and love to socialize.\n\n4. The Culture Seeker: These travelers are all about experiencing new cultures and learning about different ways of life. They love trying new foods, exploring historical sites, and learning about local customs.\n\n5. The Nature Lover: These travelers are all about getting back to nature. They love spending time outdoors and are always up for a hike or a nature walk.\n\n6. The Luxury Seeker: These travelers love nothing more than a good pampering. They are all about the finer things in life and love a good spa day or a fancy meal.\n\n7. The Budget Traveler: These travelers are all about saving money and getting the best deal. They love finding cheap flights and hotels and are always on the lookout for a good bargain.\n\n8. The Foodie:  These travelers loves discovering new culinary experiences and is willing to go off the beaten path to find hidden food gems. They plan their travels around food-related activities and savor the tastes and aromas of a new destination.\n Determine the travel personality of the user in 3 words.`
    const modelSettings = JSON.stringify({ 
          model: "command-xlarge-20221108", 
          prompt: prom,
          max_tokens: 512,
          temperature: 0.9,
          k: 0,
          p: 0.75 
        });
        let response = await fetch("https://api.cohere.ai/generate", { 
          method: "POST",
          headers: {
          Authorization: `Bearer ${API_KEY_COHERE}`,
          "Content-Type": "application/json",
          "Cohere-Version": "2021-11-08",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
          "Access-Control-Allow-Headers":
          "Content-Type, Authorization, X-Requested-With"
          },
          body: modelSettings,
          redirect: "follow"
        });
        const suggestions = response.json().then((res) => {
          var generatedText = res.generations[0].text;
          //console.log('generated text', generatedText)
          return generatedText
        });
        return suggestions;
}
