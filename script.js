const recipes = [
            {
                id: 1,
                title: "Classic Pancakes",
                description: "Fluffy, golden pancakes perfect for weekend mornings",
                category: "breakfast",
                image: "https://t3.ftcdn.net/jpg/08/02/71/36/360_F_802713634_PHdurpDemkPCTh6CsWrn4n9po94ux6MD.jpg",
                time: "15 mins",
                servings: "4",
                difficulty: "Easy",
                tags: ["breakfast", "quick", "family-friendly"],
                ingredients: [
                    "2 cups all-purpose flour",
                    "2 tablespoons sugar",
                    "2 teaspoons baking powder",
                    "1/2 teaspoon salt",
                    "2 large eggs",
                    "1 3/4 cups milk",
                    "1/4 cup melted butter",
                    "Honey or maple syrup for serving"
                ],
                instructions: [
                    "Mix dry ingredients in a large bowl",
                    "Whisk eggs, milk, and melted butter in another bowl",
                    "Combine wet and dry ingredients until just mixed",
                    "Heat griddle over medium heat",
                    "Pour batter and cook until bubbles form",
                    "Flip and cook until golden brown",
                    "Serve pancakes topped with sliced strawberries and drizzle with honey or maple syrup."
                ]
            },
            {
                id: 2,
                title: "Caesar Salad",
                description: "Crisp romaine with homemade dressing and croutons",
                category: "lunch",
                image: "https://media.istockphoto.com/id/669861628/photo/bowl-of-caesar-salad-closeup.jpg?s=612x612&w=0&k=20&c=2u8XtAiZA_mTwFxv-0aw1JAjWS0EJlYkrZ25fIWHsGk=",
                time: "20 mins",
                servings: "2",
                difficulty: "Medium",
                tags: ["lunch", "vegetarian", "healthy"],
                ingredients: [
                    "1 large head romaine lettuce",
                    "1/2 cup Caesar dressing",
                    "1/4 cup grated Parmesan cheese",
                    "1 cup croutons",
                    "2 anchovy fillets (optional)",
                    "Fresh ground black pepper"
                ],
                instructions: [
                    "Wash and chop romaine lettuce",
                    "Make homemade croutons by toasting bread cubes",
                    "Prepare Caesar dressing with anchovies",
                    "Toss lettuce with dressing",
                    "Add croutons and Parmesan cheese",
                    "Serve immediately with fresh pepper"
                ]
            },
            {
                id: 3,
                title: "Chicken Biryani",
                description: "Aromatic rice dish layered with marinated chicken and spices.",
                category: "dinner",
                image: "https://i.pinimg.com/564x/6a/1a/7a/6a1a7a72fb355453d7745975cdf9d26b.jpg", 
                time: "1 hour",
                servings: "4",
                difficulty: "Medium",
                tags: ["dinner", "indian", "non-vegetarian"],
                ingredients: [
                    "2 cups basmati rice",
                    "500g chicken, marinated with yogurt and spices",
                    "1 onion, sliced",
                    "2 tomatoes, chopped",
                    "2 tablespoons biryani masala",
                    "Mint and coriander leaves for garnish"
                ],
                instructions: [
                    "Soak rice for 30 minutes and drain.",
                    "Heat oil, add onions, and sauté until golden.",
                    "Add marinated chicken and cook until done.",
                    "Add tomatoes and biryani masala, cook for a few minutes.",
                    "Layer rice over chicken, add water, cover, and cook until rice is done.",
                    "Garnish with mint and coriander leaves before serving."
                ]
            },
            {
                id: 4,
                title: "Chocolate Lava Cake",
                description: "Rich chocolate cake with molten center",
                category: "dessert",
                image: "https://t3.ftcdn.net/jpg/09/75/02/32/360_F_975023282_puMO1eyFYBCOz0w3X7IfvAlTVFM3PEep.jpg",
                time: "25 mins",
                servings: "4",
                difficulty: "Hard",
                tags: ["dessert", "chocolate", "romantic"],
                ingredients: [
                    "4 oz dark chocolate, chopped",
                    "4 tablespoons butter",
                    "2 large eggs",
                    "2 tablespoons granulated sugar",
                    "2 tablespoons all-purpose flour",
                    "Butter for ramekins",
                    "Cocoa powder for dusting"
                ],
                instructions: [
                    "Preheat oven to 425°F",
                    "Butter and dust ramekins with cocoa",
                    "Melt chocolate and butter in double boiler",
                    "Whisk eggs and sugar until thick",
                    "Fold in chocolate mixture and flour",
                    "Bake for 12-14 minutes until edges are firm"
                ]
            },
            {
                id: 5,
                title: "Avocado Toast",
                description: "Perfectly ripe avocado on artisan bread",
                category: "breakfast",
                image: "https://media.istockphoto.com/id/1128813362/photo/healthy-toast-with-avocado-tomato-arugula.jpg?s=612x612&w=0&k=20&c=k4WuUtBFucL8eKSgnJO9oNmemcVIQ3Udr134mxKVZi4=",
                time: "10 mins",
                servings: "2",
                difficulty: "Easy",
                tags: ["breakfast", "vegetarian", "quick", "healthy"],
                ingredients: [
                    "2 slices artisan bread",
                    "1 ripe avocado",
                    "1 tablespoon lemon juice",
                    "Salt and pepper to taste",
                    "Optional: cherry tomatoes",
                    "Optional: feta cheese"
                ],
                instructions: [
                    "Toast bread slices until golden",
                    "Mash avocado with lemon juice",
                    "Season with salt and pepper",
                    "Spread avocado on toast",
                    "Top with tomatoes and feta if desired",
                    "Serve immediately"
                ]
            },
            {
                id: 6,
                title: "Thai Green Curry",
                description: "Aromatic coconut curry with vegetables",
                category: "dinner",
                image: "https://t4.ftcdn.net/jpg/13/73/47/53/360_F_1373475364_ws5cVanR1iJrEgy78sDvVIirly7if4In.jpg",
                time: "35 mins",
                servings: "4",
                difficulty: "Medium",
                tags: ["dinner", "vegetarian", "spicy", "thai"],
                ingredients: [
                    "2 tablespoons green curry paste",
                    "1 can coconut milk",
                    "2 cups mixed vegetables",
                    "1 bell pepper, sliced",
                    "1 onion, sliced",
                    "Fresh basil leaves",
                    "Jasmine rice for serving"
                ],
                instructions: [
                    "Cook jasmine rice separately",
                    "Heat curry paste in large pan",
                    "Add thick coconut milk and stir",
                    "Add vegetables and simmer",
                    "Pour in remaining coconut milk",
                    "Garnish with basil and serve over rice"
                ]
            },
            {
                id: 7,
                title: "Greek Salad",
                description: "Fresh Mediterranean salad with feta cheese",
                category: "lunch",
                image: "https://media.istockphoto.com/id/1366267246/photo/greek-salad-with-fresh-vegetables-feta-cheese-and-kalamata-olives-healthy-food.jpg?s=612x612&w=0&k=20&c=QyxvcOqnG0fWxZPvjIrIa6bGkK7qC2fs9DcdMkuvsm0=",
                time: "15 mins",
                servings: "4",
                difficulty: "Easy",
                tags: ["lunch", "vegetarian", "healthy", "mediterranean"],
                ingredients: [
                    "3 large tomatoes, chopped",
                    "1 cucumber, sliced",
                    "1/2 red onion, thinly sliced",
                    "1/2 cup Kalamata olives",
                    "4 oz feta cheese, cubed",
                    "1/4 cup olive oil",
                    "2 tablespoons red wine vinegar"
                ],
                instructions: [
                    "Chop tomatoes and cucumber",
                    "Slice red onion thinly",
                    "Combine vegetables in large bowl",
                    "Add olives and feta cheese",
                    "Whisk olive oil and vinegar",
                    "Drizzle dressing and toss gently"
                ]
            },
            {
                id: 8,
                title: "Chicken Stir-Fry",
                description: "Quick and healthy chicken with mixed vegetables",
                category: "dinner",
                image: "https://t4.ftcdn.net/jpg/00/79/02/59/360_F_79025966_lwBN0gsfQfawUg51ltqptMuy7DEqIIrt.jpg",
                time: "20 mins",
                servings: "4",
                difficulty: "Easy",
                tags: ["dinner", "quick", "healthy", "asian"],
                ingredients: [
                    "1 lb chicken breast, sliced",
                    "2 cups mixed vegetables",
                    "3 cloves garlic, minced",
                    "2 tablespoons soy sauce",
                    "1 tablespoon sesame oil",
                    "1 teaspoon cornstarch",
                    "Cooked rice for serving"
                ],
                instructions: [
                    "Marinate chicken in soy sauce",
                    "Heat oil in large wok or skillet",
                    "Stir-fry chicken until cooked",
                    "Add vegetables and garlic",
                    "Stir-fry until vegetables are crisp-tender",
                    "Serve immediately over rice"
                ]
            },
            {
                id: 9,
                title: "Banana Smoothie",
                description: "Creamy and nutritious breakfast smoothie",
                category: "breakfast",
                image: "https://t3.ftcdn.net/jpg/06/20/49/48/360_F_620494830_UlF1uV5CbIgL4LZHtHucURi5EXb00b9O.jpg",
                time: "5 mins",
                servings: "2",
                difficulty: "Easy",
                tags: ["breakfast", "vegetarian", "quick", "healthy"],
                ingredients: [
                    "2 ripe bananas",
                    "1 cup milk of choice",
                    "1/2 cup Greek yogurt",
                    "1 tablespoon honey",
                    "1/2 teaspoon vanilla extract",
                    "Ice cubes as needed"
                ],
                instructions: [
                    "Add all ingredients to blender",
                    "Blend until smooth and creamy",
                    "Add ice if thinner consistency desired",
                    "Taste and adjust sweetness",
                    "Pour into glasses",
                    "Serve immediately"
                ]
            },
            {
                id: 10,
                title: "Tiramisu",
                description: "Classic Italian coffee-flavored dessert",
                category: "dessert",
                image: "https://i1.wp.com/lakesfreerange.co.uk/wp-content/uploads/2019/08/egg-shutterstock_1725360061.jpg.jpg?fit=500%2C300&ssl=1",
                time: "30 mins + chilling",
                servings: "8",
                difficulty: "Hard",
                tags: ["dessert", "italian", "coffee", "elegant"],
                ingredients: [
                    "6 egg yolks",
                    "3/4 cup sugar",
                    "1 1/4 cups mascarpone cheese",
                    "1 3/4 cups heavy cream",
                    "2 packages ladyfinger cookies",
                    "1 1/2 cups strong coffee, cooled",
                    "Cocoa powder for dusting"
                ],
                instructions: [
                    "Whisk egg yolks and sugar until thick",
                    "Add mascarpone and mix until smooth",
                    "Whip cream to soft peaks and fold in",
                    "Quickly dip ladyfingers in coffee",
                    "Layer cookies and mascarpone mixture",
                    "Chill for at least 4 hours, dust with cocoa"
                ]
            },
            {
                id: 11,
                title: "Paneer Butter Masala",
                description: "Creamy and rich paneer dish in a tomato-based gravy",
                category: "dinner",
                image: "https://t4.ftcdn.net/jpg/12/13/02/97/360_F_1213029779_1vXbT9K6SDcj9KrhtMjo4j15XbDDQvc2.jpg",
                time: "30 mins",
                servings: "4",
                difficulty: "Medium",
                tags: ["dinner", "vegetarian", "indian"],
                ingredients: [
                    "250g paneer, cubed",
                    "2 tablespoons butter",
                    "1 onion, finely chopped",
                    "2 tomatoes, pureed",
                    "1/2 cup cream",
                    "1 tablespoon ginger-garlic paste",
                    "Spices: garam masala, chili powder, turmeric, salt"
                ],
                instructions: [
                    "Heat butter in a pan, add onions and sauté until golden.",
                    "Add ginger-garlic paste and sauté for a minute.",
                    "Add tomato puree and cook until oil separates.",
                    "Add spices and mix well.",
                    "Add paneer and cream, simmer for 5-7 minutes.",
                    "Serve hot with naan or rice."
                ]
            },
            {
                id: 12,
                title: "Aloo Gobi",
                description: "Spiced potatoes and cauliflower stir-fry",
                category: "dinner",
                image: "https://t3.ftcdn.net/jpg/15/72/70/00/360_F_1572700008_OAzX90jqCSgO63DGKdMnLBHq7i0dwoHJ.jpg", 
                time: "25 mins",
                servings: "4",
                difficulty: "Easy",
                tags: ["dinner", "vegetarian", "indian"],
                ingredients: [
                    "2 potatoes, cubed",
                    "1 cauliflower, cut into florets",
                    "1 onion, chopped",
                    "2 tomatoes, chopped",
                    "Spices: turmeric, cumin, coriander, salt"
                ],
                instructions: [
                    "Heat oil in a pan, add onions and sauté until translucent.",
                    "Add potatoes and cauliflower, sauté for a few minutes.",
                    "Add tomatoes and spices, cover and cook until vegetables are tender.",
                    "Serve hot with roti or rice."
                ]
            },
            {
                id: 13,
                title: "Pizza",
                description: "Homemade pizza with your choice of toppings.",
                category: "dinner",
                image: "https://hwnews.in/wp-content/uploads/2022/06/500x300_1341867-pizza.webp",
                time: "30 mins",
                servings: "4",
                difficulty: "Medium",
                tags: ["dinner", "italian", "comfort-food"],
                ingredients: [
                    "1 pizza dough",
                    "1 cup pizza sauce",
                    "2 cups shredded mozzarella cheese",
                    "Toppings: pepperoni, bell peppers, onions, olives, etc."
                ],
                instructions: [
                    "Preheat oven to 475°F (245°C).",
                    "Roll out the pizza dough on a floured surface.",
                    "Spread pizza sauce over the dough.",
                    "Add cheese and your choice of toppings.",
                    "Bake for 12-15 minutes until the crust is golden.",
                    "Slice and serve hot."
                ]
            },
            {
                id: 14,
                title: "Alfredo Pasta",
                description: "Creamy fettuccine pasta in a rich Alfredo sauce.",
                category: "dinner",
                image: "https://media.istockphoto.com/id/1398788293/photo/white-sauce-penne-pasta-directly-above-photo.jpg?s=612x612&w=0&k=20&c=azZJNRLTIPhniO6Rhk0MJVzAHlXOy5KMyr7JZNQCDxQ=",
                time: "20 mins",
                servings: "4",
                difficulty: "Easy",
                tags: ["dinner", "italian", "pasta"],
                ingredients: [
                    "12 oz fettuccine pasta",
                    "1/2 cup butter",
                    "1 cup heavy cream",
                    "1 1/2 cups grated Parmesan cheese",
                    "Salt and pepper to taste",
                    "Chopped parsley for garnish"
                ],
                instructions: [
                    "Cook fettuccine according to package instructions.",
                    "In a saucepan, melt butter and add heavy cream.",
                    "Stir in Parmesan cheese until melted.",
                    "Season with salt and pepper.",
                    "Toss cooked pasta in the sauce and serve with parsley."
                ]
            },
            {
                id: 15,
                title: "Chilli Paneer",
                description: "Spicy and tangy paneer cubes stir-fried with bell peppers.",
                category: "appetizer",
                image: "https://media.istockphoto.com/id/697316634/photo/spicy-paneer-or-chilli-paneer-or-paneer-tikka-or-cottage-cheese-served-in-white-dish-with.jpg?s=612x612&w=0&k=20&c=PRN-OSzxCma_aAR8-DCMpOHP5XePk6mzzhB-zG4tGrg=",
                time: "25 mins",
                servings: "4",
                difficulty: "Medium",
                tags: ["appetizer", "indian", "vegetarian"],
                ingredients: [
                    "250g paneer, cubed",
                    "1 bell pepper, sliced",
                    "1 onion, sliced",
                    "2 tablespoons soy sauce",
                    "2 tablespoons chili sauce",
                    "1 tablespoon ginger-garlic paste",
                    "Salt and pepper to taste"
                ],
                instructions: [
                    "Heat oil in a pan and sauté ginger-garlic paste.",
                    "Add onions and bell peppers, stir-fry until soft.",
                    "Add paneer, soy sauce, and chili sauce.",
                    "Cook for a few minutes until paneer is coated.",
                    "Serve hot as an appetizer."
                ]
            },
            {
                id: 16,
                title: "Aloo Paratha",
                description: "Stuffed flatbread with spiced mashed potatoes.",
                category: "breakfast",
                image: "https://kashkandhaba.com/wp-content/uploads/2025/01/ALOOParatha.jpeg",
                time: "30 mins",
                servings: "4",
                difficulty: "Medium",
                tags: ["breakfast", "indian", "vegetarian"],
                ingredients: [
                    "2 cups whole wheat flour",
                    "2 large potatoes, boiled and mashed",
                    "1 teaspoon cumin seeds",
                    "1 teaspoon garam masala",
                    "Salt to taste",
                    "Ghee or oil for cooking"
                ],
                instructions: [
                    "Mix flour with water to make a dough.",
                    "In a bowl, mix mashed potatoes with spices.",
                    "Roll out dough, place filling, and seal.",
                    "Roll out again and cook on a hot griddle with ghee.",
                    "Serve hot with yogurt or pickle."
                ]
            },
            {   
                id: 17,
                title: "Gulab Jamun",
                description: "Soft and syrupy Indian dessert made from milk solids.",
                category: "dessert",
                image: "https://t4.ftcdn.net/jpg/15/20/14/87/360_F_1520148715_SPDIhXHLKRxagHYAIXgpXBYPVpCpin3i.jpg",
                time: "45 mins",
                servings: "8",
                difficulty: "Medium",
                tags: ["dessert", "indian", "sweet"],
                ingredients: [
                    "1 cup khoya (milk solids)",
                    "1/4 cup all-purpose flour",
                    "1/4 teaspoon baking soda",
                    "1 cup sugar",
                    "1 cup water",
                    "Oil for frying"
                ],
                instructions: [
                    "Make a dough with khoya, flour, and baking soda.",
                    "Shape into small balls.",
                    "Heat oil and fry until golden brown.",
                    "In a pan, make sugar syrup with water and sugar.",
                    "Soak fried balls in syrup for a few hours before serving."
                ]
            },
            {
                id: 18,
                title: "Rabdi",
                description: "Rich and creamy Indian dessert made from condensed milk.",
                category: "dessert",
                image: "https://img.freepik.com/premium-photo/sweet-rabdi-lachha-rabri-basundi-made-with-pure-milk-garnished-with-dry-fruits-served-bowl-moody-background-selective-focus_466689-30381.jpg",
                time: "30 mins",
                servings: "4",
                difficulty: "Easy",
                tags: ["dessert", "indian", "sweet"],
                ingredients: [
                    "1 liter full-fat milk",
                    "1/2 cup sugar",
                    "1/4 teaspoon cardamom powder",
                    "Chopped nuts for garnish"
                ],
                instructions: [
                    "Boil milk in a heavy-bottomed pan.",
                    "Simmer until it reduces to half.",
                    "Add sugar and cardamom powder.",
                    "Garnish with nuts and serve chilled."
                ]
            },
            {
                id: 19,
                title: "French Fries",
                description: "Crispy and golden fried potatoes.",
                category: "snack",
                image: "https://t4.ftcdn.net/jpg/06/66/67/37/360_F_666673774_6QEWmVHpXMOmGnTp5eZK0qU533rK3qOF.jpg",
                time: "20 mins",
                servings: "4",
                difficulty: "Easy",
                tags: ["snack", "fast-food"],
                ingredients: [
                    "4 large potatoes",
                    "Oil for frying",
                    "Salt to taste"
                ],
                instructions: [
                    "Peel and cut potatoes into thin strips.",
                    "Soak in water for 30 minutes.",
                    "Heat oil in a pan and fry until golden brown.",
                    "Drain on paper towels and sprinkle with salt."
                ]
            },
            {
                id: 20,
                title: "Korean Corn Dog",
                description: "Delicious corn dogs coated with a sweet batter.",
                category: "snack",
                image: "https://braisedanddeglazed.com/wp-content/uploads/2022/01/Korean-Corn-Dog-13-500x500.jpg",
                time: "30 mins",
                servings: "4",
                difficulty: "Medium",
                tags: ["snack", "korean", "street-food"],
                ingredients: [
                    "4 Paneer and Cheese sticks" ,
                    "1 cup all-purpose flour",
                    "1/2 cup cornmeal",
                    "1 tablespoon sugar",
                    "1 teaspoon baking powder",
                    "1 cup milk",
                    "Oil for frying"
                ],
                instructions: [
                    "Mix flour, cornmeal, sugar, baking powder, and milk to make a batter.",
                    "Insert skewers into hot dogs and dip in batter.",
                    "Fry in hot oil until golden brown.",
                    "Serve with ketchup or mustard."
                ]
            },
            {
                id: 21,
                title: "Bubble Tea",
                description: "Refreshing tea drink with chewy tapioca pearls.",
                category: "beverage",
                image: "https://img.freepik.com/premium-photo/isolated-bubble-tea-black-background-generative-ai_94628-9200.jpg",
                time: "20 mins",
                servings: "2",
                difficulty: "Easy",
                tags: ["beverage", "taiwanese"],
                ingredients: [
                    "1 cup brewed tea (black or green)",
                    "1/2 cup milk or non-dairy milk",
                    "1/4 cup tapioca pearls",
                    "2 tablespoons sugar or sweetener"
                ],
                instructions: [
                    "Cook tapioca pearls according to package instructions.",
                    "Mix brewed tea with milk and sugar.",
                    "Add cooked tapioca pearls to the bottom of a glass.",
                    "Pour tea mixture over pearls and serve with a straw."
                ]
            },
            {
                id: 22,
                title: "Masala Chai",
                description: "Spiced Indian tea brewed with milk and spices.",
                category: "beverage",
                image: "https://cdn.shopify.com/s/files/1/0565/6340/0857/files/Screenshot_9_480x480.png?v=1696842324",
                time: "15 mins",
                servings: "2",
                difficulty: "Easy",
                tags: ["beverage", "indian"],
                ingredients: [
                    "2 cups water",
                    "1 cup milk",
                    "2 teaspoons tea leaves",
                    "1-2 tablespoons sugar",
                    "Spices: ginger, cardamom, cloves"
                ],
                instructions: [
                    "Boil water with spices.",
                    "Add tea leaves and simmer for a few minutes.",
                    "Add milk and sugar, bring to a boil.",
                    "Strain and serve hot."
                ]
            },
            {
                id: 23,
                title: "Poha",
                description: "Flattened rice cooked with spices and vegetables.",
                category: "breakfast",
                image: "https://t3.ftcdn.net/jpg/01/15/52/44/360_F_115524464_zomEhJZJg86ZgmBu3erQpocmVyeZBlv0.jpg",
                time: "20 mins",
                servings: "2",
                difficulty: "Easy",
                tags: ["breakfast", "indian", "vegetarian"],
                ingredients: [
                    "1 cup poha (flattened rice)",
                    "1 onion, chopped",
                    "1 potato, diced",
                    "2 green chilies, slit",
                    "1 teaspoon mustard seeds",
                    "Coriander leaves for garnish"
                ],
                instructions: [
                    "Rinse poha in water and drain.",
                    "Heat oil, add mustard seeds, and let them splutter.",
                    "Add onions, potatoes, and green chilies, sauté until soft.",
                    "Add poha, mix well, and cook for a few minutes.",
                    "Garnish with coriander leaves and serve."
                ]
            },
            {
                id: 24,
                title: "Pav Bhaji",
                description: "Spicy vegetable mash served with buttered bread rolls.",
                category: "snack",
                image: "https://i.ytimg.com/vi/dz6eh3U5zEM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBWpVw8rIwqa7pS7NHVCTuOnyBdcA",
                time: "30 mins",
                servings: "4",
                difficulty: "Medium",
                tags: ["snack", "indian", "vegetarian"],
                ingredients: [
                    "2 cups mixed vegetables (potatoes, peas, carrots)",
                    "1 onion, chopped",
                    "2 tomatoes, chopped",
                    "2 tablespoons pav bhaji masala",
                    "Butter for serving",
                    "Pav (bread rolls)"
                ],
                instructions: [
                    "Boil and mash the mixed vegetables.",
                    "Heat oil, add onions, and sauté until golden.",
                    "Add tomatoes and pav bhaji masala, cook until soft.",
                    "Mix in the mashed vegetables and cook for a few minutes.",
                    "Serve hot with buttered pav."
                ]
            },
            {
                id: 25,
                title: "Veg Biryani",
                description: "Fragrant rice dish cooked with mixed vegetables and spices.",
                category: "dinner",
                image: "https://t3.ftcdn.net/jpg/15/55/41/56/360_F_1555415658_od6d3dkK20l6KBwWkBYuNno6Grlidshd.jpg",
                time: "45 mins",
                servings: "4",
                difficulty: "Medium",
                tags: ["dinner", "indian", "vegetarian"],
                ingredients: [
                    "2 cups basmati rice",
                    "1 cup mixed vegetables (carrots, peas, beans)",
                    "1 onion, sliced",
                    "2 tomatoes, chopped",
                    "2 tablespoons biryani masala",
                    "Mint and coriander leaves for garnish"
                ],
                instructions: [
                    "Soak rice for 30 minutes and drain.",
                    "Heat oil, add onions, and sauté until golden.",
                    "Add tomatoes and mixed vegetables, cook until soft.",
                    "Add biryani masala and rice, mix well.",
                    "Add water, cover, and cook until rice is done.",
                    "Garnish with mint and coriander leaves before serving."
                ]
            },
            {
                id: 26,
                title: "Palak Paneer",
                description: "Creamy spinach curry with paneer cubes.",
                category: "dinner",
                image: "https://midwaytreatmangawan.com/wp-content/uploads/2020/03/Palak-paneer.jpg",
                time: "30 mins",
                servings: "4",
                difficulty: "Medium",
                tags: ["dinner", "indian", "vegetarian"],
                ingredients: [
                    "250g spinach, blanched",
                    "200g paneer, cubed",
                    "1 onion, chopped",
                    "2 tomatoes, pureed",
                    "1 tablespoon ginger-garlic paste",
                    "Spices: cumin, garam masala, salt"
                ],
                instructions: [
                    "Blend blanched spinach into a smooth paste.",
                    "Heat oil, add onions, and sauté until golden.",
                    "Add ginger-garlic paste and sauté for a minute.",
                    "Add tomato puree and spices, cook until oil separates.",
                    "Add spinach paste and paneer, simmer for a few minutes.",
                    "Serve hot with roti or rice."
                ]
            },
            {
                id: 27,
                title: "Sewaiyan",
                description: "Sweet vermicelli dessert cooked with milk and nuts.",
                category: "dessert",
                image: "https://i.ytimg.com/vi/5CRm7TGqMq0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCihzFeo0N3S1E9-Tn9FuA12Gp3DQ",
                time: "20 mins",
                servings: "4",
                difficulty: "Easy",
                tags: ["dessert", "indian", "sweet"],
                ingredients: [
                    "1 cup vermicelli",
                    "2 cups milk",
                    "1/2 cup sugar",
                    "1/4 cup nuts (cashews, almonds)",
                    "1/4 teaspoon cardamom powder",
                    "Ghee for frying"
                ],
                instructions: [
                    "Heat ghee in a pan, add vermicelli, and fry until golden.",
                    "Add milk and bring to a boil.",
                    "Stir in sugar and cardamom powder, cook until thick.",
                    "Garnish with nuts and serve warm."
                ]
            }
        ];


        let filteredRecipes = [...recipes];
        let favorites = [];
        let currentSection = 'home';
        let chatHistory = [];

        // Chef Chat functionality
        function toggleChefChat() {
            const chatPanel = document.getElementById('chefChatPanel');
            chatPanel.classList.toggle('active');
            
            if (chatPanel.classList.contains('active')) {
                document.getElementById('chatInput').focus();
            }
        }

        function sendMessage() {
            const input = document.getElementById('chatInput');
            const message = input.value.trim();
            
            if (message) {
                addUserMessage(message);
                input.value = '';
                
                // Show typing indicator
                showTypingIndicator();
                
                // Simulate chef response after a delay
                setTimeout(() => {
                    hideTypingIndicator();
                    generateChefResponse(message);
                }, 1500);
            }
        }

        function sendQuickMessage(message) {
            addUserMessage(message);
            showTypingIndicator();
            
            setTimeout(() => {
                hideTypingIndicator();
                generateChefResponse(message);
            }, 1200);
        }

        function addUserMessage(message) {
            const messagesContainer = document.getElementById('chatMessages');
            const messageElement = document.createElement('div');
            messageElement.className = 'message user-message';
            messageElement.innerHTML = `
                <div class="message-avatar">🙋</div>
                <div class="message-content">
                    <p>${message}</p>
                </div>
            `;
            messagesContainer.appendChild(messageElement);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
            
            chatHistory.push({ type: 'user', message: message });
        }

        function addChefMessage(message) {
            const messagesContainer = document.getElementById('chatMessages');
            const messageElement = document.createElement('div');
            messageElement.className = 'message chef-message';
            messageElement.innerHTML = `
                <div class="message-avatar">👨‍🍳</div>
                <div class="message-content">
                    ${message}
                </div>
            `;
            messagesContainer.appendChild(messageElement);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
            
            chatHistory.push({ type: 'chef', message: message });
        }

        function showTypingIndicator() {
            const messagesContainer = document.getElementById('chatMessages');
            const typingElement = document.createElement('div');
            typingElement.id = 'typingIndicator';
            typingElement.className = 'message chef-message';
            typingElement.innerHTML = `
                <div class="message-avatar">👨‍🍳</div>
                <div class="message-content">
                    <div class="typing-indicator">
                        <span>Chef is typing</span>
                        <div class="typing-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            `;
            messagesContainer.appendChild(typingElement);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        function hideTypingIndicator() {
            const typingIndicator = document.getElementById('typingIndicator');
            if (typingIndicator) {
                typingIndicator.remove();
            }
        }

        function generateChefResponse(userMessage) {
            const lowerMessage = userMessage.toLowerCase();
            let response = '';

            // Recipe suggestions based on keywords
            if (lowerMessage.includes('quick') || lowerMessage.includes('fast') || lowerMessage.includes('dinner')) {
                const quickRecipes = recipes.filter(r => r.tags.includes('quick') || r.time.includes('15') || r.time.includes('20'));
                if (quickRecipes.length > 0) {
                    const randomRecipe = quickRecipes[Math.floor(Math.random() * quickRecipes.length)];
                    response = `<p>For a quick dinner, I recommend <strong>${randomRecipe.title}</strong>! It takes only ${randomRecipe.time} and serves ${randomRecipe.servings} people.</p><p>${randomRecipe.description}</p><p>Would you like me to show you more quick recipes?</p>`;
                } else {
                    response = `<p>For quick dinners, I recommend simple stir-fries, pasta dishes, or grilled proteins with steamed vegetables. These can be prepared in 20-30 minutes!</p>`;
                }
            }
            else if (lowerMessage.includes('chicken')) {
                const chickenRecipes = recipes.filter(r => r.title.toLowerCase().includes('chicken') || r.ingredients.some(ing => ing.toLowerCase().includes('chicken')));
                if (chickenRecipes.length > 0) {
                    const recipes_list = chickenRecipes.map(r => `<li><strong>${r.title}</strong> - ${r.description}</li>`).join('');
                    response = `<p>Here are some delicious chicken recipes I have for you:</p><ul>${recipes_list}</ul><p>Which one sounds appealing to you?</p>`;
                } else {
                    response = `<p>Chicken is so versatile! You can grill it, bake it, stir-fry it, or make it into curry. Some popular preparations include:</p><ul><li>Grilled chicken with herbs</li><li>Chicken stir-fry with vegetables</li><li>Creamy chicken curry</li><li>Baked chicken with garlic and lemon</li></ul>`;
                }
            }
            else if (lowerMessage.includes('healthy') || lowerMessage.includes('diet')) {
                const healthyRecipes = recipes.filter(r => r.tags.includes('healthy') || r.tags.includes('vegetarian'));
                if (healthyRecipes.length > 0) {
                    const recipe = healthyRecipes[Math.floor(Math.random() * healthyRecipes.length)];
                    response = `<p>For healthy eating, try <strong>${recipe.title}</strong>! ${recipe.description}</p><p>It's packed with nutrition and takes only ${recipe.time} to prepare.</p><p>Other healthy options include salads, grilled proteins, steamed vegetables, and whole grain dishes.</p>`;
                } else {
                    response = `<p>For healthy meals, focus on:</p><ul><li>Fresh vegetables and fruits</li><li>Lean proteins like chicken, fish, or tofu</li><li>Whole grains</li><li>Minimal processed foods</li></ul><p>Grilling, steaming, and baking are great healthy cooking methods!</p>`;
                }
            }
            else if (lowerMessage.includes('dessert') || lowerMessage.includes('sweet')) {
                const desserts = recipes.filter(r => r.category === 'dessert');
                if (desserts.length > 0) {
                    const dessert = desserts[Math.floor(Math.random() * desserts.length)];
                    response = `<p>For dessert, how about <strong>${dessert.title}</strong>? ${dessert.description}</p><p>It's ${dessert.difficulty.toLowerCase()} to make and perfect for special occasions!</p>`;
                } else {
                    response = `<p>Sweet treats are always a good idea! Some classic dessert options include:</p><ul><li>Fresh fruit with whipped cream</li><li>Chocolate chip cookies</li><li>Ice cream sundaes</li><li>Fruit tarts</li></ul>`;
                }
            }
            else if (lowerMessage.includes('vegetarian') || lowerMessage.includes('vegan')) {
                const vegRecipes = recipes.filter(r => r.tags.includes('vegetarian'));
                if (vegRecipes.length > 0) {
                    const vegOptions = vegRecipes.slice(0, 2).map(r => `<li><strong>${r.title}</strong> - ${r.description}</li>`).join('');
                    response = `<p>Great vegetarian options from our collection:</p><ul>${vegOptions}</ul><p>Vegetarian cooking is all about celebrating vegetables, grains, and plant-based proteins!</p>`;
                } else {
                    response = `<p>Vegetarian cuisine is wonderfully diverse! Try:</p><ul><li>Pasta with fresh vegetables</li><li>Grain bowls with roasted veggies</li><li>Veggie stir-fries</li><li>Bean-based curries</li></ul>`;
                }
            }
            else if (lowerMessage.includes('breakfast')) {
                const breakfastRecipes = recipes.filter(r => r.category === 'breakfast');
                if (breakfastRecipes.length > 0) {
                    const breakfast = breakfastRecipes[Math.floor(Math.random() * breakfastRecipes.length)];
                    response = `<p>Start your day right with <strong>${breakfast.title}</strong>! ${breakfast.description}</p><p>It takes ${breakfast.time} and is ${breakfast.difficulty.toLowerCase()} to make. Perfect for a ${breakfast.tags.includes('quick') ? 'busy' : 'relaxed'} morning!</p>`;
                } else {
                    response = `<p>Breakfast is the most important meal! Some nutritious options:</p><ul><li>Oatmeal with fresh fruits</li><li>Scrambled eggs with vegetables</li><li>Smoothie bowls</li><li>Whole grain toast with avocado</li></ul>`;
                }
            }
            else if (lowerMessage.includes('ingredient') || lowerMessage.includes('substitute')) {
                response = `<p>Need ingredient substitutions? Here are some common ones:</p><ul><li><strong>Butter:</strong> Use vegetable oil, coconut oil, or applesauce</li><li><strong>Eggs:</strong> Try flax eggs, applesauce, or commercial egg replacer</li><li><strong>Milk:</strong> Almond, soy, or oat milk work great</li><li><strong>Sugar:</strong> Honey, maple syrup, or stevia are good alternatives</li></ul><p>What specific ingredient do you need to substitute?</p>`;
            }
            else if (lowerMessage.includes('tips') || lowerMessage.includes('advice')) {
                const tips = [
                    "Always read the entire recipe before starting to cook.",
                    "Prep all your ingredients first - this makes cooking much smoother!",
                    "Taste as you go and adjust seasonings accordingly.",
                    "Keep your knives sharp for safer and more efficient cooking.",
                    "Don't overcrowd your pans when sautéing or frying."
                ];
                const randomTip = tips[Math.floor(Math.random() * tips.length)];
                response = `<p><strong>Chef's Tip:</strong> ${randomTip}</p><p>Remember, cooking is about experimentation and having fun. Don't be afraid to try new flavors and techniques!</p>`;
            }
            else if (lowerMessage.includes('time') || lowerMessage.includes('how long')) {
                response = `<p>Cooking times vary by recipe, but here are general guidelines:</p><ul><li><strong>Quick meals:</strong> 15-30 minutes</li><li><strong>Regular meals:</strong> 30-60 minutes</li><li><strong>Complex dishes:</strong> 1-3 hours</li></ul><p>Always check for doneness rather than relying solely on time!</p>`;
            }
            else {
                const responses = [
                    `<p>That's an interesting question! Could you tell me more about what type of dish or cooking challenge you're facing? I'm here to help with recipes, techniques, and cooking advice.</p>`,
                    `<p>I'd love to help you with that! Are you looking for a specific type of recipe, cooking technique, or ingredient advice? Let me know what you'd like to explore!</p>`,
                    `<p>Great question! I can assist with recipe suggestions, cooking tips, meal planning, and ingredient substitutions. What specific culinary adventure are you planning?</p>`
                ];
                response = responses[Math.floor(Math.random() * responses.length)];
            }

            addChefMessage(response);
        }

        // Sidebar functionality
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebarOverlay');
            const hamburger = document.getElementById('hamburger');
            
            sidebar.classList.toggle('open');
            overlay.classList.toggle('active');
            hamburger.classList.toggle('active');
        }

        function closeSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebarOverlay');
            const hamburger = document.getElementById('hamburger');
            
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
            hamburger.classList.remove('active');
        }

        function showSection(sectionName) {
            // Hide all sections
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Remove active class from all menu items
            document.querySelectorAll('.menu-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Show selected section
            document.getElementById(sectionName).classList.add('active');
            
            // Add active class to clicked menu item
            event.target.classList.add('active');
            
            currentSection = sectionName;
            
            // Load content based on section
            if (sectionName === 'home') {
                renderRecipes(recipes);
            } else if (sectionName === 'favorites') {
                showFavorites();
            }
            
            closeSidebar();
        }

        function showFavorites() {
            const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));
            const favoritesGrid = document.getElementById('favoritesGrid');
            const noFavorites = document.getElementById('noFavorites');
            
            if (favoriteRecipes.length === 0) {
                favoritesGrid.style.display = 'none';
                noFavorites.style.display = 'block';
                return;
            }
            
            favoritesGrid.style.display = 'grid';
            noFavorites.style.display = 'none';
            
            renderRecipes(favoriteRecipes, 'favoritesGrid');
        }

        function renderRecipes(recipesToRender, gridId = 'recipesGrid') {
            const recipesGrid = document.getElementById(gridId);
            const noResults = document.getElementById('noResults');
            
            if (recipesToRender.length === 0 && gridId === 'recipesGrid') {
                recipesGrid.style.display = 'none';
                noResults.style.display = 'block';
                return;
            }
            
            if (gridId === 'recipesGrid') {
                recipesGrid.style.display = 'grid';
                noResults.style.display = 'none';
            }
            
            recipesGrid.innerHTML = recipesToRender.map(recipe => `
                <div class="recipe-card" onclick="openRecipe(${recipe.id})">
                    <div class="recipe-image" style="background-image: url('${recipe.image}');">
                        <div class="recipe-badge">${recipe.difficulty}</div>
                        <button class="favorite-btn" data-recipe-id="${recipe.id}" onclick="event.stopPropagation(); toggleFavorite(${recipe.id})">
                            ${favorites.includes(recipe.id) ? '❤️' : '🤍'}
                        </button>
                    </div>
                    <div class="recipe-info">
                        <h3 class="recipe-title">${recipe.title}</h3>
                        <p class="recipe-description">${recipe.description}</p>
                        <div class="recipe-stats">
                            <div class="stat-item">
                                <span>⏰</span>
                                <span>${recipe.time}</span>
                            </div>
                            <div class="stat-item">
                                <span>👥</span>
                                <span>${recipe.servings} servings</span>
                            </div>
                            <div class="stat-item">
                                <span>📊</span>
                                <span>${recipe.difficulty}</span>
                            </div>
                        </div>
                        <div class="recipe-tags">
                            ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                        <button class="view-recipe-btn">View Recipe</button>
                    </div>
                </div>
            `).join('');
        }

        function filterByCategory(category) {
            const categoryButtons = document.querySelectorAll('.category-btn');
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            if (category === 'all') {
                filteredRecipes = [...recipes];
            } else {
                filteredRecipes = recipes.filter(recipe => 
                    recipe.category === category || recipe.tags.includes(category)
                );
            }
            
            renderRecipes(filteredRecipes);
        }

        function searchRecipes(query) {
            const searchTerm = query.toLowerCase();
            filteredRecipes = recipes.filter(recipe =>
                recipe.title.toLowerCase().includes(searchTerm) ||
                recipe.description.toLowerCase().includes(searchTerm) ||
                recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
            renderRecipes(filteredRecipes);
        }

        function toggleFavorite(recipeId) {
            const index = favorites.indexOf(recipeId);
            if (index > -1) {
                favorites.splice(index, 1);
            } else {
                favorites.push(recipeId);
            }
            
            // Update favorite buttons across all grids
            updateFavoriteButtons();
            
            // If we're on favorites page, refresh it
            if (currentSection === 'favorites') {
                showFavorites();
            }
        }
        
        function updateFavoriteButtons() {
            document.querySelectorAll('.favorite-btn').forEach(btn => {
                const recipeId = parseInt(btn.dataset.recipeId);
                if (favorites.includes(recipeId)) {
                    btn.innerHTML = '❤️';
                    btn.classList.add('favorited');
                } else {
                    btn.innerHTML = '🤍';
                    btn.classList.remove('favorited');
                }
            });
        }

        function openRecipe(recipeId) {
            const recipe = recipes.find(r => r.id === recipeId);
            const modal = document.getElementById('recipeModal');
            const modalTitle = document.getElementById('modalTitle');
            const modalBody = document.getElementById('modalBody');
            
            modalTitle.textContent = recipe.title;
            modalBody.innerHTML = `
                <div class="recipe-image" style="background-image: url('${recipe.image}'); height: 250px; margin-bottom: 2rem; border-radius: 16px; background-size: cover; background-position: center;"></div>
                <p style="font-size: 1.1rem; color: rgba(255, 255, 255, 0.8); margin-bottom: 2rem; line-height: 1.6;">${recipe.description}</p>
                
                <div class="recipe-stats" style="margin-bottom: 2rem; padding: 1.5rem; background: rgba(255, 255, 255, 0.05); border-radius: 16px;">
                    <div class="stat-item"><span>⏰</span> <span>${recipe.time}</span></div>
                    <div class="stat-item"><span>👥</span> <span>${recipe.servings} servings</span></div>
                    <div class="stat-item"><span>📊</span> <span>${recipe.difficulty}</span></div>
                </div>
                
                <div class="ingredients-section" style="margin-bottom: 2rem;">
                    <h3 class="section-title">🛒 Ingredients</h3>
                    <ul class="ingredient-list">
                        ${recipe.ingredients.map(ingredient => `<li class="ingredient-item">${ingredient}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="instructions-section">
                    <h3 class="section-title">👨‍🍳 Instructions</h3>
                    <div class="instruction-list">
                        ${recipe.instructions.map((instruction, index) => `
                            <div class="instruction-item">
                                <div class="step-number">${index + 1}</div>
                                <div>${instruction}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('recipeModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function scrollToRecipes() {
            document.getElementById('recipes').scrollIntoView({ behavior: 'smooth' });
        }

        // Event listeners
        document.addEventListener('DOMContentLoaded', function() {
            renderRecipes(recipes);
            
            // Category filter buttons
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    if (e.target.dataset.category) {
                        filterByCategory(e.target.dataset.category);
                    }
                });
            });
            
            // Search functionality
            document.getElementById('searchInput').addEventListener('input', (e) => {
                searchRecipes(e.target.value);
            });
            
            // Modal close on outside click
            document.getElementById('recipeModal').addEventListener('click', (e) => {
                if (e.target === e.currentTarget) {
                    closeModal();
                }
            });
            
            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    if (document.getElementById('recipeModal').style.display === 'block') {
                        closeModal();
                    } else if (document.getElementById('sidebar').classList.contains('open')) {
                        closeSidebar();
                    }
                }
            });
        });
