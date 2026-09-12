import { ContactInfo, CourseModule, SoftwareTool, OutcomeItem, FAQItem, PortfolioItem, TestimonialItem } from '../types';

export const CONTACT_INFO: ContactInfo = {
  phone: '077762501',
  formattedPhone: '077 76 25 01',
  whatsapp: 'https://wa.me/37477762501',
  instagram: 'https://www.instagram.com/primecad.modeling?stkn=dGtkbW1lYWVyZGtq',
  address: 'Քաջազնունի 1',
  pricePerMonth: '150,000 դրամ / ամիս',
  totalPrice: '3 ամիս · ընդհանուր՝ 450,000 դրամ',
  duration: '3 ամիս',
  schedule: 'շաբաթական 3 անգամ',
  groupSize: '2–4 հոգի',
  instructorName: 'Անդրանիկ',
  instructorTitle: 'Authorized Rhino Trainer',
  instructorExperience: '20+ տարվա դասավանդման փորձ',
};

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 'jewelry-cad-modeling',
    title: 'Jewelry CAD Modeling',
    subtitle: 'Ճշգրիտ 3D մոդելավորման հիմունքներ',
    description: 'Սովորեք 3D զարդերի մոդելավորում՝ սկսած պարզ երկրաչափական ձևերից մինչև բարդ ոսկերչական կոմպոզիցիաներ, քարերի տեղադրման (setting) ճշգրիտ հաշվարկներ և չափսային ստանդարտներ։',
    features: [
      '3D երկրաչափության և NURBS մոդելավորման հիմունքներ',
      'Քարերի տեղադրման տեխնիկաներ (Pave, Prong, Bezel)',
      'Մատանիների, ականջօղերի և կախոցների ճշգրիտ չափագրում'
    ],
    iconName: 'Gem'
  },
  {
    id: 'production-workflow',
    title: 'Jewelry Production Workflow',
    subtitle: 'Իրական արտադրական standard-ներ',
    description: 'Հասկացեք, թե ինչպես է CAD մոդելը վերածվում իրական ոսկյա կամ արծաթյա զարդի։ Սովորեք հաշվի առնել մետաղի կծկումը (shrinkage), ձուլման (casting) և հղկման առանձնահատկությունները։',
    features: [
      'Մետաղի քաշի ճշգրիտ հաշվարկ նախքան ձուլումը',
      'Ձուլման (Casting) և հղկման տեխնոլոգիական պահանջներ',
      'Արտադրական սխալներից խուսափելու practical rules'
    ],
    iconName: 'Factory'
  },
  {
    id: 'stl-manufacturing',
    title: 'STL & Manufacturing Preparation',
    subtitle: '3D տպագրության և արտադրության պատրաստում',
    description: 'Սովորեք պատրաստել անթերի STL ֆայլեր 3D տպագրության (3D Printing / Wax Printing) և CNC ֆրեզերային մշակման համար՝ օգտագործելով մասնագիտական Magics ծրագիրը։',
    features: [
      'Mesh-երի վերանորոգում և watertight STL ֆայլերի ստեղծում',
      'Magics ծրագրով ֆայլերի դիագնոստիկա և սխալների ուղղում',
      '3D ավազային/մոմային տպիչների համար ֆայլերի օպտիմալացում'
    ],
    iconName: 'Printer'
  },
  {
    id: 'freelance-digital',
    title: 'Freelance & Digital Model Preparation',
    subtitle: 'Միջազգային շուկա և 3D Marketplace-ներ',
    description: 'Պատրաստվեք ինքնուրույն աշխատանքի։ Սովորեք ստեղծել վաճառքի համար պատրաստ digital 3D models, ձևավորել պրոֆեսիոնալ portfolio և աշխատել freelance պատվերների հետ։',
    features: [
      'Digital 3D models-ի պատրաստում online marketplace-ների համար',
      'Professional portfolio-ի ստեղծման սկզբունքներ',
      'Միջազգային պատվիրատուների հետ աշխատանքի առանձնահատկություններ'
    ],
    iconName: 'Briefcase'
  }
];

export const SOFTWARE_TOOLS: SoftwareTool[] = [
  {
    id: 'rhino',
    name: 'Rhino',
    role: 'Հիմնական 3D NURBS մոդելավորման միջավայր',
    description: 'Աշխարհում ամենատարածված ճշգրիտ 3D CAD ծրագիրը, որը թույլ է տալիս ստեղծել ցանկացած բարդության ոսկերչական երկրաչափություն։',
    tag: 'Core CAD Engine'
  },
  {
    id: 'matrix',
    name: 'Matrix 9',
    role: 'Մասնագիտական ոսկերչական CAD plugin/software',
    description: 'Ecosystem՝ հատուկ ոսկերիչների համար։ Ներառում է քարերի գրադարաններ, builder-ներ, զարդերի մասնագիտացված tools և արագ prototyping։',
    tag: 'Jewelry Specialized'
  },
  {
    id: 'zbrush',
    name: 'ZBrush',
    role: 'Օրգանական 3D քանդակագործություն (Digital Sculpting)',
    description: 'Անփոխարինելի գործիք օրգանական ձևերի, ռելիեֆների, կենդանիների, ֆիգուրների և բարդ artistic զարդանախշերի մոդելավորման համար։',
    tag: 'Digital Sculpting'
  },
  {
    id: 'magics',
    name: 'Magics',
    role: 'STL ֆայլերի ճշգրտում և 3D Printing պատրաստում',
    description: 'Արդյունաբերական ստանդարտ ծրագիր 3D models-ի mesh-երը ստուգելու, վերանորոգելու և տպագրության նախապատրաստելու համար։',
    tag: 'Pre-Print Diagnostics'
  }
];

export const STUDENT_OUTCOMES: OutcomeItem[] = [
  {
    id: 'zero-to-prod',
    title: 'Production-Ready Jewelry CAD',
    description: 'Կարողանալու եք ինքնուրույն նախագծել և ստեղծել արտադրության համար լիարժեք պատրաստ 3D զարդեր։'
  },
  {
    id: 'stl-prep',
    title: 'STL / Manufacturing Preparation',
    description: 'Պատրաստել անթերի 3D printing STL ֆայլեր՝ առանց տեխնիկական սխալների կամ խոտանների։'
  },
  {
    id: 'professional-portfolio',
    title: 'Professional Portfolio',
    description: 'Ձևավորել աշխատանքների պրոֆեսիոնալ պորտֆոլիո՝ հաճախորդներին և ընկերություններին ներկայանալու համար։'
  },
  {
    id: 'freelance-opportunities',
    title: 'Freelance & Digital Model Sales',
    description: 'Աշխատել որպես freelance CAD modeller կամ վաճառել 3D model-ներ միջազգային marketplace-ներում։'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Կարո՞ղ եմ սկսել զրոյից։',
    answer: 'Այո, դասընթացը նախատեսված է զրոյից սկսողների համար։ Նախնական CAD կամ 3D փորձ պարտադիր չէ։ Ուսուցումը սկսվում է ամենաբազային սկզբունքներից։'
  },
  {
    id: 'faq-2',
    question: 'Որքա՞ն է դասընթացի տևողությունը։',
    answer: 'Դասընթացի ընդհանուր տևողությունը 3 ամիս է։ Սա ինտենսիվ, практиկ ծրագիր է, որը ապահովում է անհրաժեշտ բոլոր գիտելիքները production-ready մակարդակի հասնելու համար։'
  },
  {
    id: 'faq-3',
    question: 'Շաբաթական քանի՞ դաս է անցկացվում։',
    answer: 'Դասերն անցկացվում են շաբաթական 3 անգամ։ Յուրաքանչյուր դաս ներառում է տեսական բացատրություն և практиկ աշխատանք դասավանդողի անմիջական հսկողությամբ։'
  },
  {
    id: 'faq-4',
    question: 'Online տարբերակ կա՞։',
    answer: 'Այո, ուսուցումը հասանելի է ինչպես Online (Live ֆորմատով), այնպես էլ Offline տարբերակով (Երևան, Քաջազնունի 1)։'
  },
  {
    id: 'faq-5',
    question: 'Ինչպիսի՞ համակարգիչ է անհրաժեշտ։',
    answer: 'Անհրաժեշտ է միջին հզորության Windows կամ Mac համակարգիչ։ Գրանցվելուց հետո PrimeCAD-ի մասնագետը կապ կհաստատի ձեզ հետ և կօգնի հասկանալ ձեր համակարգչի համապատասխանությունը։'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p-inst-1',
    category: 'instructor',
    title: 'High-Jewelry Solitaire & Halo Ring',
    subtitle: 'Դասավանդողի աշխատանք (CAD Wireframe & Render)',
    imageUrl: '',
    tags: ['Rhino', 'Matrix 9', 'Precision Setting'],
    isPlaceholder: true
  },
  {
    id: 'p-inst-2',
    category: 'instructor',
    title: 'Complex Organic Relief Pendant',
    subtitle: 'Դասավանդողի աշխատանք (ZBrush Sculpting)',
    imageUrl: '',
    tags: ['ZBrush', 'Organic Sculpting', 'STL Ready'],
    isPlaceholder: true
  },
  {
    id: 'p-inst-3',
    category: 'instructor',
    title: 'Multi-Stone Vintage Bracelet',
    subtitle: 'Դասավանդողի աշխատանք (Production-Ready Model)',
    imageUrl: '',
    tags: ['Rhino', 'Magics', 'Castable Mesh'],
    isPlaceholder: true
  },
  {
    id: 'p-stud-1',
    category: 'student',
    title: 'Classic Engagement Ring',
    subtitle: 'Ուսանողական աշխատանք',
    imageUrl: '',
    tags: ['Rhino', 'Prong Setting'],
    isPlaceholder: true
  },
  {
    id: 'p-stud-2',
    category: 'student',
    title: 'Modern Geometric Earrings',
    subtitle: 'Ուսանողական աշխատանք',
    imageUrl: '',
    tags: ['Matrix 9', '3D Print Ready'],
    isPlaceholder: true
  },
  {
    id: 'p-stud-3',
    category: 'student',
    title: 'Detailed Signet Ring',
    subtitle: 'Ուսանողական աշխատանք',
    imageUrl: '',
    tags: ['Rhino', 'ZBrush'],
    isPlaceholder: true
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [];
