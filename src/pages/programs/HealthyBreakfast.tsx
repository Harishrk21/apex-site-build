    import { Link } from "react-router-dom";
    import SEO from "@/components/SEO";
    import { Card, CardContent } from "@/components/ui/card";
    import { Button } from "@/components/ui/button";
    import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
    import { CheckCircle2, Calendar, Coffee, Clock, Target, Users, Zap, AlertCircle, TrendingUp, Heart, Brain, Trophy } from "lucide-react";
    import ProgramHero from "@/components/ProgramHero";
    import PlanAccordion from "@/components/PlanAccordion";
    import PricingTable from "@/components/PricingTable";
    import aboutHero from "@/assets/about-hero.jpg";

    const HealthyBreakfast = () => {
    const dailyPlan = [
        {
        time: "Option 1: Quick Shake (Under 2 minutes)",
        meal: "Formula 1 Shake + Fruit + Protein Boost",
        products: ["Formula 1 Shake Mix", "Protein Drink Mix", "Fresh/Frozen Fruit"]
        },
        {
        time: "Option 2: Grab-and-Go (30 seconds)",
        meal: "Pre-made Formula 1 Shake + Protein Bar",
        products: ["Formula 1 Shake (prepared night before)", "Protein Bar"]
        },
        {
        time: "Option 3: Family Breakfast (5 minutes)",
        meal: "Formula 1 Shake Bowl with Toppings",
        products: ["Formula 1 Shake Mix", "Granola", "Fresh Fruits", "Nuts & Seeds"]
        },
        {
        time: "Option 4: Post-Workout (Under 2 minutes)",
        meal: "High-Protein Formula 1 Shake",
        products: ["Formula 1 Shake Mix", "Protein Drink Mix", "Herbal Aloe Concentrate"]
        },
        {
        time: "Complementary Products (Throughout Morning)",
        meal: "Hydration and Energy Support",
        products: ["Herbal Aloe Concentrate", "Herbal Tea Concentrate", "Daily Vitamins"]
        }
    ];

    const pricingTiers = [
        {
        name: "Quick Start",
        duration: "21 days",
        price: "Contact for price",
        features: [
            "Breakfast nutrition assessment",
            "Personalized breakfast plan",
            "21-day product bundle",
            "10+ breakfast recipes",
            "Email support"
        ]
        },
        {
        name: "Breakfast Mastery",
        duration: "1 month",
        price: "Contact for price",
        features: [
            "Comprehensive nutrition assessment",
            "Customized breakfast strategy",
            "1-month product pack",
            "30+ breakfast ideas & recipes",
            "Weekly check-ins",
            "WhatsApp support",
            "Meal prep guide",
            "Family planning included"
        ],
        popular: true
        },
        {
        name: "Complete Transformation",
        duration: "3 months",
        price: "Contact for price",
        features: [
            "Full lifestyle assessment",
            "Personalized nutrition plan",
            "3-month product pack",
            "Unlimited breakfast recipes",
            "Daily accountability",
            "WhatsApp group access",
            "Weekly coaching calls",
            "Progress tracking & adjustments",
            "Family meal planning",
            "Access to wellness challenges"
        ]
        }
    ];

    const faqItems = [
        {
        question: "I'm really not hungry in the morning. Should I force myself?",
        answer: "Start small with easily digestible options like a light shake. Your appetite will gradually increase as your body adjusts to eating in the morning. We'll work with you to train your body gently - many clients who weren't morning eaters find themselves naturally hungry within 2-3 weeks."
        },
        {
        question: "How long does preparation take?",
        answer: "Our solutions range from 30 seconds (grab-and-go) to 5 minutes (made fresh). Most Formula 1 shakes take under 2 minutes to prepare. We also provide make-ahead strategies so you can prep the night before for even faster mornings."
        },
        {
        question: "Can my whole family use the same breakfast solutions?",
        answer: "Absolutely! Formula 1 shakes are suitable for adults and children (ages 4+) with adjustable portions. We provide family-friendly options and recipes that everyone will enjoy, making morning nutrition easier for the entire household."
        },
        {
        question: "Will eating breakfast help with weight loss?",
        answer: "Yes! Regular breakfast eaters typically have better weight management success. A nutritious breakfast kickstarts your metabolism, stabilizes blood sugar, and reduces overeating later in the day. Studies show breakfast eaters have better long-term weight control."
        },
        {
        question: "What if I work night shifts?",
        answer: "We'll customize your 'breakfast' timing for whenever you wake up, regardless of the time of day. The principles remain the same - breaking your fast with balanced nutrition after sleep is what matters, not the clock time."
        },
        {
        question: "Are Herbalife shakes better than regular breakfast foods?",
        answer: "Formula 1 shakes provide complete, balanced nutrition with 114 essential nutrients, portion control, and convenience. While whole food breakfasts can be nutritious, most people struggle with preparation time and nutritional balance. Shakes offer consistency and completeness that's hard to achieve with traditional breakfast."
        },
        {
        question: "I eat the same thing every day and I'm bored. Can you help?",
        answer: "Yes! We provide 30+ varied breakfast ideas including different shake flavors, recipes, toppings, and combinations. You'll never get bored with the variety of options - from fruity shakes to chocolate treats, smoothie bowls to protein-packed options."
        },
        {
        question: "My kids refuse healthy breakfast. What can I do?",
        answer: "We provide kid-approved recipes that are nutritious but taste like treats! Formula 1 shakes can be flavored in countless ways - chocolate banana, strawberry cream, cookies and cream style. Kids often love helping to make their own shakes with fun toppings."
        },
        {
        question: "Can I still have my coffee?",
        answer: "Absolutely! Coffee is fine, but it shouldn't be your only breakfast. Have your nutritious breakfast first, then enjoy your coffee. We even have recipes that incorporate coffee into your Formula 1 shake for coffee lovers."
        },
        {
        question: "What makes Formula 1 different from other protein shakes?",
        answer: "Formula 1 is not just a protein shake - it's complete meal nutrition with 114 essential nutrients including vitamins, minerals, protein, fiber, and healthy carbohydrates. Most protein shakes lack the comprehensive nutrition needed for a complete breakfast replacement."
        }
    ];

    const mistakesData = [
        { mistake: "Skipping breakfast entirely", consequence: "Slows metabolism, increases hunger later", icon: <AlertCircle className="w-5 h-5" /> },
        { mistake: "High-sugar cereals", consequence: "Blood sugar spike and crash", icon: <TrendingUp className="w-5 h-5" /> },
        { mistake: "Only coffee", consequence: "Caffeine on empty stomach causes jitters", icon: <Coffee className="w-5 h-5" /> },
        { mistake: "Processed pastries/biscuits", consequence: "Empty calories, no nutrition", icon: <AlertCircle className="w-5 h-5" /> },
        { mistake: "Fruit juice only", consequence: "Sugar without fiber, not filling", icon: <TrendingUp className="w-5 h-5" /> },
        { mistake: "Unbalanced meals", consequence: "Carbs only without protein/fat", icon: <AlertCircle className="w-5 h-5" /> }
    ];

    return (
        <>
        <SEO
            title="Healthy Breakfast Program - Start Your Day Right | New Life Wellness Centre Kolathur, Chennai"
            description="Transform your mornings with complete, balanced nutrition in minutes at New Life Wellness Centre in Kolathur, Chennai, and Villivakkam. Herbalife Formula 1 breakfast solutions, expert coaching, and 30+ quick recipes. Best healthy breakfast program in Kolathur, Chennai. Book your free breakfast assessment today."
            canonical="/programs/healthy-breakfast"
            keywords="Healthy Breakfast Kolathur, Herbalife Formula 1 Chennai, Quick Breakfast Solutions Villivakkam, Breakfast Nutrition Kolathur, Morning Meal Planning Chennai, Best Breakfast Program Villivakkam, Healthy Breakfast Centre Kolathur, Nutrition Breakfast Chennai"
        />

        <ProgramHero
            image={aboutHero}
            title="Start Your Day Right - Nutrition in Minutes"
            tagline="Fuel your morning with complete, balanced nutrition that powers your entire day"
        />

        {/* Why Breakfast is Critical */}
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Foundation</p>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Why Breakfast is Critical for Your Health</h2>
                <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Breakfast literally means "breaking the fast" - it's your body's first fuel after 8-12 hours without food. Despite its importance, breakfast is the most commonly skipped meal.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
                {/* What Happens When You Skip */}
                <Card className="border-none shadow-wellness bg-red-50 dark:bg-red-950/20">
                <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/50 flex items-center justify-center mr-4">
                        <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-red-900 dark:text-red-100">What Happens When You Skip</h3>
                    </div>
                    <ul className="space-y-3">
                    {[
                        "Slowed metabolism (body enters conservation mode)",
                        "Mid-morning energy crash",
                        "Overeating at lunch and dinner",
                        "Poor concentration and productivity",
                        "Increased cortisol (stress hormone)",
                        "Blood sugar instability",
                        "Higher risk of weight gain",
                        "Reduced workout performance"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start text-red-800 dark:text-red-200">
                        <span className="text-red-600 dark:text-red-400 mr-2">✗</span>
                        <span>{item}</span>
                        </li>
                    ))}
                    </ul>
                </CardContent>
                </Card>

                {/* Benefits of Healthy Breakfast */}
                <Card className="border-none shadow-wellness bg-green-50 dark:bg-green-950/20">
                <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mr-4">
                        <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-900 dark:text-green-100">Benefits of Healthy Breakfast</h3>
                    </div>
                    <ul className="space-y-3">
                    {[
                        "Kickstarts metabolism for the day",
                        "Stabilizes blood sugar levels",
                        "Improves cognitive function and memory",
                        "Enhances mood and reduces irritability",
                        "Supports healthy weight management",
                        "Provides essential nutrients",
                        "Increases physical energy",
                        "Improves academic/work performance"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start text-green-800 dark:text-green-200">
                        <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                        </li>
                    ))}
                    </ul>
                </CardContent>
                </Card>
            </div>

            {/* Common Breakfast Mistakes */}
            <div className="mb-16">
                <h3 className="text-3xl font-bold mb-8 text-center">Common Breakfast Mistakes to Avoid</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mistakesData.map((item, i) => (
                    <Card key={i} className="border-none shadow-wellness hover:shadow-wellness-lg transition-shadow">
                    <CardContent className="p-6">
                        <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center mr-3 flex-shrink-0">
                            {item.icon}
                        </div>
                        <div>
                            <h4 className="font-bold mb-1 text-orange-900 dark:text-orange-100">❌ {item.mistake}</h4>
                            <p className="text-sm text-muted-foreground">{item.consequence}</p>
                        </div>
                        </div>
                    </CardContent>
                    </Card>
                ))}
                </div>
            </div>
            </div>
        </section>

        {/* Signs You Need This */}
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Perfect For</p>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Signs You Need Breakfast Support</h2>
                <p className="text-base text-gray-600 max-w-2xl mx-auto">
                This program is perfect if you recognize any of these challenges
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                "You regularly skip breakfast due to lack of time",
                "You don't feel hungry in the morning",
                "Your breakfast is high in sugar (cereals, pastries, juice)",
                "You experience mid-morning energy crashes",
                "You overeat at lunch because you're starving",
                "You grab unhealthy options on the go",
                "You lack breakfast ideas and eat the same thing daily",
                "Your children skip breakfast or eat poorly",
                "You want convenient but nutritious options",
                "You need portion-controlled, balanced nutrition"
                ].map((item, index) => (
                <Card key={index} className="border-none shadow-wellness hover:shadow-wellness-lg transition-all hover:scale-105">
                    <CardContent className="p-6 flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{item}</p>
                    </CardContent>
                </Card>
                ))}
            </div>
            </div>
        </section>

        {/* Challenge Solutions */}
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Solutions</p>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Common Breakfast Challenges - Solved</h2>
                <p className="text-base text-gray-600 max-w-2xl mx-auto">
                We have solutions for every breakfast obstacle
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {[
                {
                    challenge: '"I don\'t have time in the morning"',
                    solution: "We provide 60-second solutions and make-ahead options that take less time than stopping for coffee. Prep the night before or grab-and-go in under a minute."
                },
                {
                    challenge: '"I\'m not hungry when I wake up"',
                    solution: "We gradually train your body with light, easy-to-consume options like smoothies. Your appetite will naturally increase within 2-3 weeks as your metabolism adjusts."
                },
                {
                    challenge: '"I don\'t know what to eat"',
                    solution: "We provide 30+ varied, delicious ideas with complete recipes and ingredient lists. You'll have more options than you can try in a month."
                },
                {
                    challenge: '"Healthy breakfast is boring"',
                    solution: "We offer creative recipes with different flavors and textures - from chocolate treats to fruity refreshers, savory options to sweet indulgences."
                },
                {
                    challenge: '"My kids refuse healthy breakfast"',
                    solution: "We provide kid-friendly nutritious options they'll actually enjoy. Kids love helping make their own shakes with fun toppings and flavors."
                },
                {
                    challenge: '"I eat the same thing every day and I\'m bored"',
                    solution: "Our variety ensures you never get tired of breakfast. With dozens of combinations and flavors, every day can be different and exciting."
                }
                ].map((item, index) => (
                <Card key={index} className="border-none shadow-wellness">
                    <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-4 text-primary">{item.challenge}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-green-600 dark:text-green-400">→ Solution: </span>
                        {item.solution}
                    </p>
                    </CardContent>
                </Card>
                ))}
            </div>
            </div>
        </section>

        {/* What Makes a Breakfast "Healthy"? */}
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Nutrition Basics</p>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">What Makes a Breakfast "Healthy"?</h2>
                <p className="text-base text-gray-600 max-w-2xl mx-auto">
                A nutritionally complete breakfast should include these key components
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                {
                    title: "Quality Protein (15-25g)",
                    icon: <Trophy className="w-8 h-8" />,
                    benefits: [
                    "Builds and repairs tissues",
                    "Keeps you full for hours",
                    "Stabilizes blood sugar",
                    "Supports muscle maintenance"
                    ]
                },
                {
                    title: "Complex Carbohydrates",
                    icon: <Zap className="w-8 h-8" />,
                    benefits: [
                    "Provides sustained energy",
                    "Fiber for digestive health",
                    "Prevents mid-morning crashes",
                    "Fuels brain function"
                    ]
                },
                {
                    title: "Healthy Fats",
                    icon: <Heart className="w-8 h-8" />,
                    benefits: [
                    "Supports hormone production",
                    "Enhances nutrient absorption",
                    "Provides satiety",
                    "Brain and heart health"
                    ]
                },
                {
                    title: "Vitamins & Minerals",
                    icon: <Target className="w-8 h-8" />,
                    benefits: [
                    "Supports immune function",
                    "Cellular energy production",
                    "Overall health maintenance",
                    "Disease prevention"
                    ]
                },
                {
                    title: "Adequate Hydration",
                    icon: <Coffee className="w-8 h-8" />,
                    benefits: [
                    "Rehydrates after sleep",
                    "Supports metabolism",
                    "Aids digestion",
                    "Mental clarity"
                    ]
                },
                {
                    title: "Portion Control",
                    icon: <Clock className="w-8 h-8" />,
                    benefits: [
                    "Right calorie balance",
                    "No overeating or undereating",
                    "Consistent nutrition",
                    "Weight management support"
                    ]
                }
                ].map((item, index) => (
                <Card key={index} className="border-none shadow-wellness">
                    <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
                        {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <ul className="space-y-2">
                        {item.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{benefit}</span>
                        </li>
                        ))}
                    </ul>
                    </CardContent>
                </Card>
                ))}
            </div>
            </div>
        </section>

        {/* Why Formula 1 */}
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Why Formula 1</p>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Why Herbalife Formula 1 for Breakfast?</h2>
                <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Complete nutrition designed specifically for busy mornings
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="border-none shadow-wellness">
                <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                    <Trophy className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Complete Nutrition in Minutes</h3>
                    <p className="text-muted-foreground mb-4">
                    Formula 1 provides 114 essential nutrients including protein, fiber, vitamins, and minerals - everything your body needs for a complete breakfast, ready in under 2 minutes.
                    </p>
                    <ul className="space-y-2">
                    {[
                        "15-25g quality protein per serving",
                        "Essential vitamins A, C, D, E, and B-complex",
                        "Key minerals including calcium, iron, zinc",
                        "Dietary fiber for digestive health",
                        "Balanced carbohydrates for energy"
                    ].map((point, i) => (
                        <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{point}</span>
                        </li>
                    ))}
                    </ul>
                </CardContent>
                </Card>

                <Card className="border-none shadow-wellness">
                <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                    <Zap className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Convenience Without Compromise</h3>
                    <p className="text-muted-foreground mb-4">
                    Get restaurant-quality nutrition faster than making toast. No cooking, no cleanup, portable, and customizable to your taste preferences.
                    </p>
                    <ul className="space-y-2">
                    {[
                        "Preparation time: Under 2 minutes",
                        "Multiple flavors to choose from",
                        "Customizable with fruits, nuts, seeds",
                        "Portable for commuting or travel",
                        "Portion-controlled for consistency",
                        "Long shelf life, easy storage"
                    ].map((point, i) => (
                        <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{point}</span>
                        </li>
                    ))}
                    </ul>
                </CardContent>
                </Card>

                <Card className="border-none shadow-wellness">
                <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                    <Heart className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Weight Management Support</h3>
                    <p className="text-muted-foreground mb-4">
                    Portion-controlled, balanced nutrition that supports healthy weight goals. High protein and fiber keep you satisfied for hours, reducing unhealthy snacking.
                    </p>
                    <ul className="space-y-2">
                    {[
                        "Controlled calories with complete nutrition",
                        "High satiety factor - stays with you",
                        "Helps reduce overeating later",
                        "Supports metabolism activation",
                        "Stabilizes blood sugar levels"
                    ].map((point, i) => (
                        <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{point}</span>
                        </li>
                    ))}
                    </ul>
                </CardContent>
                </Card>

                <Card className="border-none shadow-wellness">
                <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                    <Brain className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Science-Backed Formula</h3>
                    <p className="text-muted-foreground mb-4">
                    Developed by nutrition scientists and backed by decades of research. Trusted by millions worldwide for quality, safety, and effectiveness.
                    </p>
                    <ul className="space-y-2">
                    {[
                        "Scientifically formulated nutrition",
                        "Quality-tested ingredients",
                        "No artificial colors or sweeteners",
                        "Soy and whey protein options",
                        "Suitable for vegetarians",
                        "Trusted by health professionals"
                    ].map((point, i) => (
                        <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{point}</span>
                        </li>
                    ))}
                    </ul>
                </CardContent>
                </Card>
            </div>

            <Card className="border-none shadow-wellness bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Formula 1 vs. Traditional Breakfast</h3>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div>
                    <div className="text-4xl mb-2">⏱️</div>
                    <h4 className="font-bold mb-2">Time</h4>
                    <p className="text-sm text-muted-foreground">Under 2 minutes vs. 15-30 minutes for traditional cooking</p>
                    </div>
                    <div>
                    <div className="text-4xl mb-2">🎯</div>
                    <h4 className="font-bold mb-2">Nutrition</h4>
                    <p className="text-sm text-muted-foreground">114 nutrients guaranteed vs. variable nutrition in home cooking</p>
                    </div>
                    <div>
                    <div className="text-4xl mb-2">💰</div>
                    <h4 className="font-bold mb-2">Value</h4>
                    <p className="text-sm text-muted-foreground">Cost-effective vs. expensive restaurant breakfasts or wasted ingredients</p>
                    </div>
                </div>
                </CardContent>
            </Card>
            </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Our Approach</p>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Our Healthy Breakfast Approach</h2>
                <p className="text-base text-gray-600 max-w-2xl mx-auto">Creating a sustainable breakfast routine through personalized support</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                {
                    title: "1. Personalized Assessment",
                    icon: <Target className="w-8 h-8" />,
                    items: [
                    "Understanding your morning schedule",
                    "Identifying barriers (time, appetite, preferences)",
                    "Analyzing current breakfast habits",
                    "Setting realistic breakfast goals"
                    ]
                },
                {
                    title: "2. Customized Solutions",
                    icon: <Zap className="w-8 h-8" />,
                    items: [
                    "Quick preparation options (under 2 minutes)",
                    "Make-ahead strategies for busy mornings",
                    "Portable breakfast solutions",
                    "Family-friendly options"
                    ]
                },
                {
                    title: "3. Nutritional Education",
                    icon: <Brain className="w-8 h-8" />,
                    items: [
                    "Teaching breakfast importance",
                    "Understanding balanced nutrition",
                    "Reading labels and smart choices",
                    "Portion guidance"
                    ]
                },
                {
                    title: "4. Product Integration",
                    icon: <Coffee className="w-8 h-8" />,
                    items: [
                    "Complete nutrition solutions",
                    "Shake recipes with variety",
                    "Quick breakfast alternatives",
                    "Grab-and-go options"
                    ]
                },
                {
                    title: "5. Habit Formation",
                    icon: <Clock className="w-8 h-8" />,
                    items: [
                    "Creating morning routines",
                    "Overcoming 'not hungry' syndrome",
                    "Time management strategies",
                    "Consistency building"
                    ]
                },
                {
                    title: "6. Ongoing Support",
                    icon: <Users className="w-8 h-8" />,
                    items: [
                    "Regular check-ins",
                    "WhatsApp guidance",
                    "Recipe ideas and inspiration",
                    "Troubleshooting challenges"
                    ]
                }
                ].map((step, index) => (
                <Card key={index} className="border-none shadow-wellness">
                    <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
                        {step.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <ul className="space-y-2">
                        {step.items.map((item, i) => (
                        <li key={i} className="flex items-start text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                        </li>
                        ))}
                    </ul>
                    </CardContent>
                </Card>
                ))}
            </div>
            </div>
        </section>

        {/* What's Included */}
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Program Details</p>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">What's Included in the Program</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {[
                {
                    title: "Breakfast Nutrition Assessment",
                    description: "Comprehensive analysis of your current habits and needs",
                    icon: <Target className="w-6 h-6" />
                },
                {
                    title: "Personalized Breakfast Plan",
                    description: "Customized strategy tailored to your schedule and preferences",
                    icon: <Calendar className="w-6 h-6" />
                },
                {
                    title: "30+ Quick Breakfast Ideas",
                    description: "Variety for every taste and time constraint",
                    icon: <Coffee className="w-6 h-6" />
                },
                {
                    title: "Shake Recipe Collection",
                    description: "Delicious, nutritious options you'll actually enjoy",
                    icon: <Zap className="w-6 h-6" />
                },
                {
                    title: "Meal Prep Guide",
                    description: "Time-saving strategies for efficient mornings",
                    icon: <Clock className="w-6 h-6" />
                },
                {
                    title: "Portable Solutions",
                    description: "For busy, on-the-go mornings",
                    icon: <CheckCircle2 className="w-6 h-6" />
                },
                {
                    title: "Product Recommendations",
                    description: "Based on your specific needs and goals",
                    icon: <Target className="w-6 h-6" />
                },
                {
                    title: "Family Breakfast Planning",
                    description: "Solutions for everyone in your household",
                    icon: <Users className="w-6 h-6" />
                },
                {
                    title: "Shopping List Templates",
                    description: "Make grocery shopping easy and efficient",
                    icon: <CheckCircle2 className="w-6 h-6" />
                },
                {
                    title: "Progress Tracking",
                    description: "Building consistent habits with accountability",
                    icon: <TrendingUp className="w-6 h-6" />
                },
                {
                    title: "WhatsApp Support",
                    description: "Quick answers to your breakfast questions",
                    icon: <Users className="w-6 h-6" />
                },
                {
                    title: "Weekly Check-ins",
                    description: "Regular support to keep you on track",
                    icon: <Calendar className="w-6 h-6" />
                }
                ].map((item, index) => (
                <Card key={index} className="border-none shadow-wellness hover:shadow-wellness-lg transition-all">
                    <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary mb-4">
                        {item.icon}
                    </div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                </Card>
                ))}
            </div>
            </div>
        </section>
        
        {/* Sample Breakfast Options */}
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Daily Schedule</p>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Sample Breakfast Options</h2>
                <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Quick, nutritious solutions that fit any morning schedule
                </p>
            </div>
            <PlanAccordion dailyPlan={dailyPlan} title="Flexible Breakfast Solutions" />
            </div>
        </section>

        {/* Breakfast Solutions for Different Lifestyles */}
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">For Everyone</p>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Breakfast Solutions for Every Lifestyle</h2>
                <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Tailored strategies that fit YOUR life
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {[
                {
                    title: "For Busy Professionals",
                    icon: "💼",
                    solutions: [
                    "60-second breakfast options",
                    "Desk-friendly portable meals",
                    "No-cook solutions",
                    "Weekend meal prep strategies"
                    ]
                },
                {
                    title: "For Parents",
                    icon: "👨‍👩‍👧‍👦",
                    solutions: [
                    "Kid-approved nutritious options",
                    "Quick family breakfasts",
                    "Lunchbox ideas",
                    "Picky eater solutions"
                    ]
                },
                {
                    title: "For Fitness Enthusiasts",
                    icon: "💪",
                    solutions: [
                    "High-protein pre-workout fuel",
                    "Post-workout recovery meals",
                    "Performance optimization",
                    "Muscle-building support"
                    ]
                },
                {
                    title: "For Weight Managers",
                    icon: "⚖️",
                    solutions: [
                    "Portion-controlled options",
                    "High satiety breakfasts",
                    "Low-calorie nutrient-dense meals",
                    "Metabolism-boosting strategies"
                    ]
                },
                {
                    title: "For 'Not Morning People'",
                    icon: "😴",
                    solutions: [
                    "Easy-to-consume options",
                    "Gradually building appetite",
                    "Smoothies and shakes",
                    "No heavy feeling solutions"
                    ]
                },
                {
                    title: "For Students",
                    icon: "📚",
                    solutions: [
                    "Brain-boosting nutrition",
                    "Exam-ready energy",
                    "Hostel-friendly options",
                    "Budget-conscious solutions"
                    ]
                }
                ].map((category, index) => (
                <Card key={index} className="border-none shadow-wellness">
                    <CardContent className="p-8">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                    <ul className="space-y-3">
                        {category.solutions.map((solution, i) => (
                        <li key={i} className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{solution}</span>
                        </li>
                        ))}
                    </ul>
                    </CardContent>
                </Card>
                ))}
            </div>
            </div>
        </section>

        {/* Expected Benefits Timeline */}
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Timeline</p>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Expected Benefits Timeline</h2>
                <p className="text-base text-gray-600 max-w-2xl mx-auto">
                See how your body transforms with consistent healthy breakfasts
                </p>
            </div>

            <div className="space-y-8">
                {[
                {
                    timeline: "Within 1 Week",
                    benefits: [
                    "More consistent energy levels throughout the morning",
                    "Reduced mid-morning hunger and cravings",
                    "Better focus and concentration at work/school",
                    "Improved mood and less irritability"
                    ]
                },
                {
                    timeline: "Within 2-4 Weeks",
                    benefits: [
                    "Established breakfast habit becomes natural",
                    "Better appetite regulation throughout the day",
                    "Potential weight management improvements",
                    "Enhanced productivity and mental clarity",
                    "More balanced eating patterns"
                    ]
                },
                {
                    timeline: "Long-term Benefits",
                    benefits: [
                    "Sustainable healthy habit for life",
                    "Improved overall nutrition and wellness",
                    "Better metabolic health markers",
                    "Enhanced quality of life and daily performance",
                    "Positive influence on family's eating habits"
                    ]
                }
                ].map((phase, index) => (
                <Card key={index} className="border-none shadow-wellness">
                    <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{phase.timeline}</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                        {phase.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{benefit}</span>
                        </div>
                        ))}
                    </div>
                    </CardContent>
                </Card>
                ))}
            </div>
            </div>
        </section>

        {/* Success Stories Teaser */}
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Success Stories</p>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Transform Your Mornings, Transform Your Life</h2>
                <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Join thousands who have made breakfast their secret weapon for success, energy, and wellness
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                {
                    stat: "2,500+",
                    label: "Happy Breakfast Eaters",
                    description: "People who transformed their mornings with our program"
                },
                {
                    stat: "89%",
                    label: "Report More Energy",
                    description: "Clients experience sustained energy throughout the day"
                },
                {
                    stat: "Under 2 Min",
                    label: "Average Prep Time",
                    description: "Quick, convenient, complete nutrition every morning"
                }
                ].map((item, index) => (
                <Card key={index} className="border-none shadow-wellness text-center">
                    <CardContent className="p-8">
                    <div className="text-5xl font-bold text-primary mb-2">{item.stat}</div>
                    <h3 className="text-xl font-bold mb-2">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                </Card>
                ))}
            </div>
            </div>
        </section>
        
        {/* Pricing */}
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Investment</p>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Program Packages</h2>
                <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Choose the plan that works best for your lifestyle
                </p>
            </div>
            <PricingTable tiers={pricingTiers} />
            </div>
        </section>
        
        {/* FAQ */}
        <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <p className="text-green-600 font-semibold text-xs uppercase tracking-wider mb-2">Got Questions?</p>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Frequently Asked Questions</h2>
                <p className="text-base text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about our Healthy Breakfast program
                </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold">
                    {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                    {item.answer}
                    </AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>
            </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1600')] bg-cover bg-center opacity-10"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full font-semibold text-sm mb-4">
                🎯 Limited Spots Available
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
                Ready to Start Your Mornings Right?
            </h2>
            
            <p className="text-base sm:text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Book your free breakfast assessment and discover how easy healthy mornings can be. Transform your energy, focus, and overall wellness - one breakfast at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 shadow-wellness-lg">
                <Link to="/book-consultation">
                    <Calendar className="mr-2 w-5 h-5" />
                    Book Free Breakfast Assessment
                </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Link to="/contact">
                    <Users className="mr-2 w-5 h-5" />
                    Contact Us
                </Link>
                </Button>
            </div>
            <p className="mt-8 text-white/80 text-sm">
                ⏰ Limited spots available this month | 💯 No commitment required for assessment | 🎁 Get free breakfast recipe guide
            </p>
            </div>
        </section>
        </>
    );
    };

    export default HealthyBreakfast;