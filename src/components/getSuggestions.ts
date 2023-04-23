export async function getSuggestions( personality: string, city: string ) {
    let attractions: string[] = [];
    const API_KEY_COHERE = process.env.REACT_APP_API_KEY_COHERE
    const prom = `Below are descriptions of travel personality\n\n1. The Explorer: These travelers are always on the lookout for their next adventure. They love discovering new places and are always up for trying new things.\n\n2. The Relaxer: These travelers are all about kicking back and enjoying their vacation. They love nothing more than a good book, a beach chair, and a cocktail.\n\n3. The Social Butterfly: These travelers love meeting new people and making new friends. They are always the life of the party and love to socialize.\n\n4. The Culture Seeker: These travelers are all about experiencing new cultures and learning about different ways of life. They love trying new foods, exploring historical sites, and learning about local customs.\n\n5. The Nature Lover: These travelers are all about getting back to nature. They love spending time outdoors and are always up for a hike or a nature walk.\n\n6. The Luxury Seeker: These travelers love nothing more than a good pampering. They are all about the finer things in life and love a good spa day or a fancy meal.\n\n7. The Budget Traveler: These travelers are all about saving money and getting the best deal. They love finding cheap flights and hotels and are always on the lookout for a good bargain.\n\n8. The Foodie:  These travelers loves discovering new culinary experiences and is willing to go off the beaten path to find hidden food gems. They plan their travels around food-related activities and savor the tastes and aromas of a new destination.\n\nBased on personality, what 5 places would a user like if he is of type ${personality} in ${city}? List only the 5 places and nothing else`
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
          generatedText = generatedText.substring(generatedText.indexOf('1'));
          //console.log('res is ', generatedText)
          //console.log('final list', attractions);
          return generatedText.split('\n')
        });
        return suggestions;
}
