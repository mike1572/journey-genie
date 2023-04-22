
export type Question = {
    question: string;
    answer_options: string[]
}

export let questions: Question[] = [  
    {    
        question: "When planning a trip, what kind of activities do you look for?",    
        answer_options: [ 
            "Adventure sports",      
            "Relaxation and leisure",      
            "Events and festivals",      
            "Historical and cultural tours"    
        ]
    },
    {
        question: "What kind of vacation would you prefer?",
        answer_options: [
            "Camping in the wilderness",
            "All-inclusive resort on a beach",
            "City tour and nightlife",
            "Culinary and wine tour"
        ]
        },
    {
    question: "What type of accommodation do you prefer?",
    answer_options: [
        "Hostels or camping sites",
        "Luxury resorts and villas",
        "Boutique hotels and B&Bs",
        "Budget hotels and motels"
    ]
    },
    {
    question: "What is your main reason for traveling?",
    answer_options: [
        "To explore and discover new places",
        "To unwind and relax",
        "To socialize and meet new people",
        "To learn about different cultures and traditions"
    ]
    },
    {
    question: "What kind of cuisine are you most interested in trying?",
    answer_options: [
        "Street food and local specialties",
        "Fine dining and Michelin-starred restaurants",
        "Fusion cuisine and experimental dishes",
        "Traditional and authentic regional dishes"
    ]
    },
    {
    question: "When traveling, what kind of scenery do you prefer?",
    answer_options: [
        "Mountains and forests",
        "Beaches and oceans",
        "Urban landscapes",
        "Countryside and farmlands"
    ]
    },
    {
    question: "What kind of souvenirs do you like to bring back home?",
    answer_options: [
        "Adventure gear or local handicrafts",
        "Luxury items or designer labels",
        "Local spirits or wine",
        "Traditional dress or jewelry"
    ]
    }
]