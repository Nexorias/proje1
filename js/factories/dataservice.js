/*
 * IIFE to keep code safe and outside the global namespace
 */
(function(){

    /*
     * Declaring a factory service as part of the existing turtleFacts Module.
     */
    angular
        .module("turtleFacts")
        .factory("DataService", DataService);

    /*
     * Actual definition of the function used for this factory
     */
    function DataService(){
        /*
         * dataObj is used to simulate getting the data from a backend server
         * The object will hold data which will then be returned to the other
         * factory declared in js/factory/quiz.js which has this factory
         * as a dependency
         */

        var dataObj = {
            turtlesData: turtlesData,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };

        // returning the dataObj to anything that uses this factory as a
        // dependency
        return dataObj;
    }

    /*
     * all of the below variables are simulating data that would typically be
     * retrieved using an HTTP call to an API endpoint.
     *
     * For simplicity sake this data is hardcoded into the app as this tutorial
     * is about building the angular app, not the backend.
     *
     * The correctAnswers variable would be retrieved when the user has
     * finished the quiz and would be used to mark the users answers against
     * the correct answers
     *
     * the quizQuestions is an array of objects, each containing data
     * pertaining to a single question. This includes:
     *                          - The type of question: image or text
     *                          - Text of the question (aka the actual question)
     *                          - A set of 4 possible answers, either text or
     *                              images as indicated above
     *                          - a selected flag which will be used to know if
     *                              the user has selected
     *                          an answer yet.
     *                          - Whether the user got the question correct or
     *                              not
     *
     * The final turtleData variable hold the information that will be
     * displayed in the list view when the app loads. This includes the name
     * and an image of each turtle as well as other information such as the
     * location and the size of the turtles
     *
     */

    var correctAnswers = [3, 2, 3, 0, 1, 0, 3, 2, 0];

    var quizQuestions  = [
        {
            type: "text",
            text: "Kediler günde kaç saat uyurlar?",
            possibilities: [
                {
                    answer: "7"
                },
                {
                    answer: "9"
                },
                {
                    answer: "11"
                },
                {
                    answer: "16"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Kedi Yaşı tahmini için aşağıdakilerden hangisi yanlıştır?",
            possibilities: [
                {
                    answer: "Diş yapısından kedi yaşı tahmini"
                },
                {
                    answer: "Gözlerin durumundan kedi yaşı tahmini"
                },
                {
                    answer: "Ayak yapısından kedi yaşı tahmini"
                },
                {
                    answer: "Tüylerin yapısından kedi yaşı tahmini"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Fotoğraftaki kedilerden hangisi siyam cinsidir?",
            possibilities: [
                {
                    answer: "https://www.enmama.com.tr/upload/blog/tam-bir-salon-kedisi-smokin-tuxedo-kedileri-1-37.jpg"
                },
                {
                    answer: "https://www.enmama.com.tr/upload/blog/tum-yonleri-ile-1-34.jpg"
                },
                {
                    answer: "https://www.enmama.com.tr/upload/blog/tum-dunyanin-goz-bebegi-van-kedileri-1-52.jpg"
                },
                {
                    answer: "https://www.enmama.com.tr/upload/blog/bir-asya-esintisi-siyam-kedileri-1-44.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Köpeklerin ortalama ömrü kaç yıldır?",
            possibilities: [
                {
                    answer: "12"
                },
                {
                    answer: "20"
                },
                {
                    answer: "8"
                },
                {
                    answer: "25"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Verilen bilgilerden hangisi yanlıştır? ",
            possibilities: [
                {
                    answer: "Sekiz hafta sonunda köpeklerin süt dişleri tam anlamıyla çıkmış olur."
                },
                {
                    answer: "Oniki ay sonunda tüm kalıcı dişleri çıkmış olur. Ve bu dişler beyaz ve temiz olur"
                },
                {
                    answer: "İki yaşında dişlerin rengi matlaşır. Arka dişlerin rengi sarı rengine döner."
                },
                {
                    answer: "Üç ve Beş ya arası tüm dişlerde sararma olur. Dişlerde tartar oluşur ve aşınma başlar"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Aşağıdaki köpeklerden hangisinin cinsi Rottweiler'dır?",
            possibilities: [
                {
                    answer: "https://www.petihtiyac.com/Data/Blog/1/120.jpg"
                },
                {
                    answer: "https://www.petihtiyac.com/Data/Blog/26.jpg"
                },
                {
                    answer: "https://www.petihtiyac.com/Data/Blog/20.jpg"
                },
                {
                    answer: "https://www.petihtiyac.com/Data/Blog/17.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Kuşların sulukları ne kadar sürede temizlenmelidir?",
            possibilities: [
                {
                    answer: "2 günde 1 kez"
                },
                {
                    answer: "Haftada 1 kez"
                },
                {
                    answer: "Günde 3 kez"
                },
                {
                    answer: "Hergün"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "image",
            text: "Aşağıdakilerden Hangisi muhabbet kuşu değildir?",
            possibilities: [
                {
                    answer: "https://www.petihtiyac.com/Data/EditorFiles/lutino-muhabbet-kusu.jpg"
                },
                {
                    answer: "https://www.petihtiyac.com/Data/EditorFiles/cekoslavak-muhabbet-kusu.jpg"
                },
                {
                    answer: "https://www.petihtiyac.com/Data/Blog/23.jpg"
                },
                {
                    answer: "https://www.petihtiyac.com/Data/EditorFiles/gok-mavi-muhabbet-kusu.jpg"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Aşağıdaiklerden hangisi muhabbet kuşları bakımı ile ilgili yanlış bir bilgidir?",
            possibilities: [
                {
                    answer: "Kuşların banyo yaptırılmasında sakınca yoktur."
                },
                {
                    answer: "Muhabbet kuşlarının kafesine ayna konulması duğru değildir."
                },
                {
                    answer: "Muhabbet kuşu çok bağırması sıkıldığına işarettir."
                },
                {
                    answer: "Muhabbet kuşları bir papağam cinsidir."
                }
            ],
            selected: null,
            correct: null
        },
            ];

    var turtlesData = [
        {
            type: "Green Turtle",
            image_url: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_300/v1538573240/Sea-Turtles-Habitat_kiipu7.jpg",
            locations: "Tropical and subtropical oceans worldwide",
            size: "Up to 1.5m and up to 300kg",
            lifespan: "Over 80 years",
            diet: "Herbivore",
            description: "The green turtle is a large, weighty sea turtle with a wide, smooth carapace, or shell. It inhabits tropical and subtropical coastal waters around the world and has been observed clambering onto land to sunbathe. It is named not for the color of its shell, which is normally brown or olive depending on its habitat, but for the greenish color of its skin. There are two types of green turtles—scientists are currently debating whether they are subspecies or separate species—including the Atlantic green turtle, normally found off the shores of Europe and North America, and the Eastern Pacific green turtle, which has been found in coastal waters from Alaska to Chile."
        },
        {
            type: "Loggerhead Turtle",
            image_url: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_300/v1538573757/loggerheadTurtle_2651448b_fuxtrz.jpg",
            locations: "Tropical and subtropical oceans worldwide",
            size: "90cm, 115kg",
            lifespan: "More than 50 years",
            diet: "Carnivore",
            description: "Loggerhead turtles are the most abundant of all the marine turtle species in U.S. waters. But persistent population declines due to pollution, shrimp trawling, and development in their nesting areas, among other factors, have kept this wide-ranging seagoer on the threatened species list since 1978. Their enormous range encompasses all but the most frigid waters of the world's oceans. They seem to prefer coastal habitats, but often frequent inland water bodies and will travel hundreds of miles out to sea."
        },
        {
            type: "Leatherback Turtle",
            image_url: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_300/v1538573717/Leatherback-turtle-007_p1qytx.jpg",
            locations: "All tropical and subtropical oceans",
            size: "Up to 2m, up to 900kg",
            lifespan: "45 years",
            diet: "Carnivore",
            description: "Leatherbacks are the largest turtles on Earth, growing up to seven feet (two meters) long and exceeding 2,000 pounds (900 kilograms). These reptilian relics are the only remaining representatives of a family of turtles that traces its evolutionary roots back more than 100 million years. Once prevalent in every ocean except the Arctic and Antarctic, the leatherback population is rapidly declining in many parts of the world. While all other sea turtles have hard, bony shells, the inky-blue carapace of the leatherback is somewhat flexible and almost rubbery to the touch. Ridges along the carapace help give it a more hydrodynamic structure. Leatherbacks can dive to depths of 4,200 feet (1,280 meters)—deeper than any other turtle—and can stay down for up to 85 minutes."
        },
        {
            type: "Hawksbill Sea Turtle",
            image_url: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_300/v1538573676/SCR_290360hawskbill-why-matter-LG_wqf0kl.jpg",
            locations: "Tropical Coastal areas around the world",
            size: "Over 1m, 45-68kg",
            lifespan: "30-50 Years",
            diet: "Carnivore",
            description: "Dolor possimus voluptas hic aliquam rem doloremque minus maiores accusantium? Laborum perferendis harum blanditiis quod quia? Aspernatur sunt et fuga delectus ab rem excepturi. Ipsa quibusdam facere consequuntur magnam vitae? Consectetur consectetur necessitatibus beatae delectus quibusdam in! Est nobis omnis iusto illum fugiat maxime! Neque fugiat reiciendis sequi corrupti minima facere distinctio aliquam est voluptatibus. Sint incidunt soluta atque ducimus."
        },
        {
            type: "Alligator Snapping Turtle",
          image_url: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_300/v1538573639/Alligator_snapping_turtle_-_Geierschildkr_C3_B6te_-_Alligatorschildkr_C3_B6te_-_Macrochelys_temminckii_01_uwqvbi.jpg",
            locations: "Along the Atlantic Coast of USA",
            size: "around 60cm, up to 100kg",
            lifespan: "20-70 years",
            diet: "Carnivore",
            description: "The prehistoric-looking alligator snapping turtle is the largest freshwater turtle in North America and among the largest in the world. With its spiked shell, beaklike jaws, and thick, scaled tail, this species is often referred to as the 'dinosaur of the turtle world.' Found almost exclusively in the rivers, canals, and lakes of the southeastern United States, alligator snappers can live to be 50 to 100 years old. Males average 26 inches (66 centimeters) in shell length and weigh about 175 pounds (80 kilograms), although they have been known to exceed 220 pounds (100 kilograms). The much smaller females top out at around 50 pounds (23 kilograms)."
        },
        {
            type: "Kemp's Ridley Sea Turtle",
            image_url: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_300/v1538573596/Kemp_s_Ridley_sea_turtle_nesting_jqe0fg.jpg",
            locations: "Coastal areas of the North Atlantic",
            size: "65cm, up to 45kg",
            lifespan: "Around 50 years",
            diet: "Omnivore",
            description: "The Kemp’s ridley turtle is the world’s most endangered sea turtle, and with a worldwide female nesting population roughly estimated at just 1,000 individuals, its survival truly hangs in the balance. Their perilous situation is attributed primarily to the over-harvesting of their eggs during the last century. And though their nesting grounds are protected and many commercial fishing fleets now use turtle excluder devices in their nets, these turtles have not been able to rebound. For this reason, their nesting processions, called arribadas, make for especially high drama. During an arribada, females take over entire portions of beaches, lugging their big bodies through the sand with their flippers until they find a satisfying spot to lay their eggs. Even more riveting is the later struggle to the ocean of each tiny, vulnerable hatchling. Beset by predators, hatchlings make this journey at night, breaking out of their shells using their caruncle, a single temporary tooth grown just for this purpose."
        },
        {
            type: "Olive Ridley Turtle",
            image_url: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_300/v1538573475/olive-ridley1_bdrbzh.jpg",
            locations: "Tropical coastal areas around the world",
            size: "70cm, 45kg",
            lifespan: "50 years",
            diet: "Omnivore",
            description: "The olive ridley turtle is named for the generally greenish color of its skin and shell, or carapace. It is closely related to the Kemp’s ridley, with the primary distinction being that olive ridleys are found only in warmer waters, including the southern Atlantic, Pacific and Indian Oceans. Olive and Kemp’s ridleys are the smallest of the sea turtles, weighing up to 100 pounds (45 kilograms) and reaching only about 2 feet (65 centimeters) in shell length. The olive ridley has a slightly smaller head and smaller shell than the Kemp’s."
        },
        {
            type: "Eastern Snake Necked Turtle",
            image_url: "https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_300/v1538573536/2399413165_bcc8031cac_z_fqaexq.jpg",
            locations: "Eastern Australia",
            size: "Up to 30cm",
            lifespan: "25 years",
            diet: "Carnivore",
            description: "Snake-necked turtles, as the name suggests, have an unusually long neck. Their necks may be up to 60 percent of their carapace length. Their carapace is oval and flattened, usually dark-brown to black measuring up to 11 inches (27.5 cm) in length. Scutes are shed as the animals grow. The males have a longer, thicker tail than females and a concave plastron. They are excellent swimmers; they have large, webbed feet with sharp claws used to tear apart food."
        }
    ];

})();
