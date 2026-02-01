// index.js — Full SEO Keyword Expander with Built-in Proxy
// Deploy to Vercel: works on public domains with no CORS issues

import { NextRequest } from 'next/server';

// ====== COMPLETE LANGUAGE & COUNTRY DATA ======
const LANGUAGES = [
  { code: 'aa', name: 'Afar' }, { code: 'ab', name: 'Abkhazian' }, { code: 'ae', name: 'Avestan' },
  { code: 'af', name: 'Afrikaans' }, { code: 'ak', name: 'Akan' }, { code: 'am', name: 'Amharic' },
  { code: 'an', name: 'Aragonese' }, { code: 'ar', name: 'العربية (Arabic)' }, { code: 'as', name: 'Assamese' },
  { code: 'av', name: 'Avaric' }, { code: 'ay', name: 'Aymara' }, { code: 'az', name: 'Azerbaijani' },
  { code: 'ba', name: 'Bashkir' }, { code: 'be', name: 'Belarusian' }, { code: 'bg', name: 'Български' },
  { code: 'bh', name: 'Bihari' }, { code: 'bi', name: 'Bislama' }, { code: 'bm', name: 'Bambara' },
  { code: 'bn', name: 'বাংলা (Bengali)' }, { code: 'bo', name: 'Tibetan' }, { code: 'br', name: 'Breton' },
  { code: 'bs', name: 'Bosnian' }, { code: 'ca', name: 'Català' }, { code: 'ce', name: 'Chechen' },
  { code: 'ch', name: 'Chamorro' }, { code: 'co', name: 'Corsican' }, { code: 'cr', name: 'Cree' },
  { code: 'cs', name: 'Čeština' }, { code: 'cu', name: 'Church Slavic' }, { code: 'cv', name: 'Chuvash' },
  { code: 'cy', name: 'Cymraeg' }, { code: 'da', name: 'Dansk' }, { code: 'de', name: 'Deutsch' },
  { code: 'dv', name: 'Divehi' }, { code: 'dz', name: 'Dzongkha' }, { code: 'ee', name: 'Ewe' },
  { code: 'el', name: 'Ελληνικά' }, { code: 'en', name: 'English' }, { code: 'eo', name: 'Esperanto' },
  { code: 'es', name: 'Español' }, { code: 'et', name: 'Eesti' }, { code: 'eu', name: 'Euskara' },
  { code: 'fa', name: 'فارسی' }, { code: 'ff', name: 'Fulah' }, { code: 'fi', name: 'Suomi' },
  { code: 'fj', name: 'Fijian' }, { code: 'fo', name: 'Faroese' }, { code: 'fr', name: 'Français' },
  { code: 'fy', name: 'Frisian' }, { code: 'ga', name: 'Irish' }, { code: 'gd', name: 'Gaelic' },
  { code: 'gl', name: 'Galego' }, { code: 'gn', name: 'Guarani' }, { code: 'gu', name: 'Gujarati' },
  { code: 'gv', name: 'Manx' }, { code: 'ha', name: 'Hausa' }, { code: 'he', name: 'עברית' },
  { code: 'hi', name: 'हिन्दी' }, { code: 'ho', name: 'Hiri Motu' }, { code: 'hr', name: 'Hrvatski' },
  { code: 'ht', name: 'Haitian' }, { code: 'hu', name: 'Magyar' }, { code: 'hy', name: 'Armenian' },
  { code: 'hz', name: 'Herero' }, { code: 'ia', name: 'Interlingua' }, { code: 'id', name: 'Bahasa Indonesia' },
  { code: 'ie', name: 'Interlingue' }, { code: 'ig', name: 'Igbo' }, { code: 'ii', name: 'Sichuan Yi' },
  { code: 'ik', name: 'Inupiaq' }, { code: 'io', name: 'Ido' }, { code: 'is', name: 'Íslenska' },
  { code: 'it', name: 'Italiano' }, { code: 'iu', name: 'Inuktitut' }, { code: 'ja', name: '日本語' },
  { code: 'jv', name: 'Javanese' }, { code: 'ka', name: 'Georgian' }, { code: 'kg', name: 'Kongo' },
  { code: 'ki', name: 'Kikuyu' }, { code: 'kj', name: 'Kwanyama' }, { code: 'kk', name: 'Kazakh' },
  { code: 'kl', name: 'Kalaallisut' }, { code: 'km', name: 'Khmer' }, { code: 'kn', name: 'Kannada' },
  { code: 'ko', name: '한국어' }, { code: 'kr', name: 'Kanuri' }, { code: 'ks', name: 'Kashmiri' },
  { code: 'ku', name: 'Kurdish' }, { code: 'kv', name: 'Komi' }, { code: 'kw', name: 'Cornish' },
  { code: 'ky', name: 'Kyrgyz' }, { code: 'la', name: 'Latin' }, { code: 'lb', name: 'Luxembourgish' },
  { code: 'lg', name: 'Ganda' }, { code: 'li', name: 'Limburgish' }, { code: 'ln', name: 'Lingala' },
  { code: 'lo', name: 'Lao' }, { code: 'lt', name: 'Lietuvių' }, { code: 'lu', name: 'Luba-Katanga' },
  { code: 'lv', name: 'Latviešu' }, { code: 'mg', name: 'Malagasy' }, { code: 'mh', name: 'Marshallese' },
  { code: 'mi', name: 'Māori' }, { code: 'mk', name: 'Македонски' }, { code: 'ml', name: 'Malayalam' },
  { code: 'mn', name: 'Mongolian' }, { code: 'mr', name: 'मराठी' }, { code: 'ms', name: 'Bahasa Melayu' },
  { code: 'mt', name: 'Maltese' }, { code: 'my', name: 'Burmese' }, { code: 'na', name: 'Nauru' },
  { code: 'nb', name: 'Norwegian Bokmål' }, { code: 'nd', name: 'North Ndebele' }, { code: 'ne', name: 'नेपाली' },
  { code: 'ng', name: 'Ndonga' }, { code: 'nl', name: 'Nederlands' }, { code: 'nn', name: 'Norwegian Nynorsk' },
  { code: 'no', name: 'Norsk' }, { code: 'nr', name: 'South Ndebele' }, { code: 'nv', name: 'Navajo' },
  { code: 'ny', name: 'Chichewa' }, { code: 'oc', name: 'Occitan' }, { code: 'oj', name: 'Ojibwa' },
  { code: 'om', name: 'Oromo' }, { code: 'or', name: 'Oriya' }, { code: 'os', name: 'Ossetian' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ' }, { code: 'pi', name: 'Pali' }, { code: 'pl', name: 'Polski' },
  { code: 'ps', name: 'Pashto' }, { code: 'pt', name: 'Português' }, { code: 'qu', name: 'Quechua' },
  { code: 'rm', name: 'Romansh' }, { code: 'rn', name: 'Kirundi' }, { code: 'ro', name: 'Română' },
  { code: 'ru', name: 'Русский' }, { code: 'rw', name: 'Kinyarwanda' }, { code: 'sa', name: 'Sanskrit' },
  { code: 'sc', name: 'Sardinian' }, { code: 'sd', name: 'Sindhi' }, { code: 'se', name: 'Northern Sami' },
  { code: 'sg', name: 'Sango' }, { code: 'si', name: 'Sinhala' }, { code: 'sk', name: 'Slovenčina' },
  { code: 'sl', name: 'Slovenščina' }, { code: 'sm', name: 'Samoan' }, { code: 'sn', name: 'Shona' },
  { code: 'so', name: 'Somali' }, { code: 'sq', name: 'Shqip' }, { code: 'sr', name: 'Српски' },
  { code: 'ss', name: 'Swati' }, { code: 'st', name: 'Southern Sotho' }, { code: 'su', name: 'Sundanese' },
  { code: 'sv', name: 'Svenska' }, { code: 'sw', name: 'Kiswahili' }, { code: 'ta', name: 'தமிழ்' },
  { code: 'te', name: 'తెలుగు' }, { code: 'tg', name: 'Tajik' }, { code: 'th', name: 'ไทย' },
  { code: 'ti', name: 'Tigrinya' }, { code: 'tk', name: 'Turkmen' }, { code: 'tl', name: 'Tagalog' },
  { code: 'tn', name: 'Tswana' }, { code: 'to', name: 'Tonga' }, { code: 'tr', name: 'Türkçe' },
  { code: 'ts', name: 'Tsonga' }, { code: 'tt', name: 'Tatar' }, { code: 'tw', name: 'Twi' },
  { code: 'ty', name: 'Tahitian' }, { code: 'ug', name: 'Uyghur' }, { code: 'uk', name: 'Українська' },
  { code: 'ur', name: 'اردو' }, { code: 'uz', name: 'Uzbek' }, { code: 've', name: 'Venda' },
  { code: 'vi', name: 'Tiếng Việt' }, { code: 'vo', name: 'Volapük' }, { code: 'wa', name: 'Walloon' },
  { code: 'wo', name: 'Wolof' }, { code: 'xh', name: 'Xhosa' }, { code: 'yi', name: 'Yiddish' },
  { code: 'yo', name: 'Yoruba' }, { code: 'za', name: 'Zhuang' }, { code: 'zh', name: '中文' },
  { code: 'zu', name: 'Zulu' }
];

const COUNTRIES = [
  { code: 'AF', name: 'Afghanistan' }, { code: 'AX', name: 'Åland Islands' }, { code: 'AL', name: 'Albania' },
  { code: 'DZ', name: 'Algeria' }, { code: 'AS', name: 'American Samoa' }, { code: 'AD', name: 'Andorra' },
  { code: 'AO', name: 'Angola' }, { code: 'AI', name: 'Anguilla' }, { code: 'AQ', name: 'Antarctica' },
  { code: 'AG', name: 'Antigua and Barbuda' }, { code: 'AR', name: 'Argentina' }, { code: 'AM', name: 'Armenia' },
  { code: 'AW', name: 'Aruba' }, { code: 'AU', name: 'Australia' }, { code: 'AT', name: 'Austria' },
  { code: 'AZ', name: 'Azerbaijan' }, { code: 'BS', name: 'Bahamas' }, { code: 'BH', name: 'Bahrain' },
  { code: 'BD', name: 'Bangladesh' }, { code: 'BB', name: 'Barbados' }, { code: 'BY', name: 'Belarus' },
  { code: 'BE', name: 'Belgium' }, { code: 'BZ', name: 'Belize' }, { code: 'BJ', name: 'Benin' },
  { code: 'BM', name: 'Bermuda' }, { code: 'BT', name: 'Bhutan' }, { code: 'BO', name: 'Bolivia' },
  { code: 'BQ', name: 'Bonaire' }, { code: 'BA', name: 'Bosnia' }, { code: 'BW', name: 'Botswana' },
  { code: 'BV', name: 'Bouvet Island' }, { code: 'BR', name: 'Brazil' }, { code: 'IO', name: 'British Indian Ocean Territory' },
  { code: 'BN', name: 'Brunei' }, { code: 'BG', name: 'Bulgaria' }, { code: 'BF', name: 'Burkina Faso' },
  { code: 'BI', name: 'Burundi' }, { code: 'CV', name: 'Cabo Verde' }, { code: 'KH', name: 'Cambodia' },
  { code: 'CM', name: 'Cameroon' }, { code: 'CA', name: 'Canada' }, { code: 'KY', name: 'Cayman Islands' },
  { code: 'CF', name: 'Central African Republic' }, { code: 'TD', name: 'Chad' }, { code: 'CL', name: 'Chile' },
  { code: 'CN', name: 'China' }, { code: 'CX', name: 'Christmas Island' }, { code: 'CC', name: 'Cocos Islands' },
  { code: 'CO', name: 'Colombia' }, { code: 'KM', name: 'Comoros' }, { code: 'CD', name: 'Congo (DRC)' },
  { code: 'CG', name: 'Congo' }, { code: 'CK', name: 'Cook Islands' }, { code: 'CR', name: 'Costa Rica' },
  { code: 'CI', name: "Côte d'Ivoire" }, { code: 'HR', name: 'Croatia' }, { code: 'CU', name: 'Cuba' },
  { code: 'CW', name: 'Curaçao' }, { code: 'CY', name: 'Cyprus' }, { code: 'CZ', name: 'Czech Republic' },
  { code: 'DK', name: 'Denmark' }, { code: 'DJ', name: 'Djibouti' }, { code: 'DM', name: 'Dominica' },
  { code: 'DO', name: 'Dominican Republic' }, { code: 'EC', name: 'Ecuador' }, { code: 'EG', name: 'Egypt' },
  { code: 'SV', name: 'El Salvador' }, { code: 'GQ', name: 'Equatorial Guinea' }, { code: 'ER', name: 'Eritrea' },
  { code: 'EE', name: 'Estonia' }, { code: 'SZ', name: 'Eswatini' }, { code: 'ET', name: 'Ethiopia' },
  { code: 'FK', name: 'Falkland Islands' }, { code: 'FO', name: 'Faroe Islands' }, { code: 'FJ', name: 'Fiji' },
  { code: 'FI', name: 'Finland' }, { code: 'FR', name: 'France' }, { code: 'GF', name: 'French Guiana' },
  { code: 'PF', name: 'French Polynesia' }, { code: 'TF', name: 'French Southern Territories' }, { code: 'GA', name: 'Gabon' },
  { code: 'GM', name: 'Gambia' }, { code: 'GE', name: 'Georgia' }, { code: 'DE', name: 'Germany' },
  { code: 'GH', name: 'Ghana' }, { code: 'GI', name: 'Gibraltar' }, { code: 'GR', name: 'Greece' },
  { code: 'GL', name: 'Greenland' }, { code: 'GD', name: 'Grenada' }, { code: 'GP', name: 'Guadeloupe' },
  { code: 'GU', name: 'Guam' }, { code: 'GT', name: 'Guatemala' }, { code: 'GG', name: 'Guernsey' },
  { code: 'GN', name: 'Guinea' }, { code: 'GW', name: 'Guinea-Bissau' }, { code: 'GY', name: 'Guyana' },
  { code: 'HT', name: 'Haiti' }, { code: 'HM', name: 'Heard Island' }, { code: 'VA', name: 'Holy See' },
  { code: 'HN', name: 'Honduras' }, { code: 'HK', name: 'Hong Kong' }, { code: 'HU', name: 'Hungary' },
  { code: 'IS', name: 'Iceland' }, { code: 'IN', name: 'India' }, { code: 'ID', name: 'Indonesia' },
  { code: 'IR', name: 'Iran' }, { code: 'IQ', name: 'Iraq' }, { code: 'IE', name: 'Ireland' },
  { code: 'IM', name: 'Isle of Man' }, { code: 'IL', name: 'Israel' }, { code: 'IT', name: 'Italy' },
  { code: 'JM', name: 'Jamaica' }, { code: 'JP', name: 'Japan' }, { code: 'JE', name: 'Jersey' },
  { code: 'JO', name: 'Jordan' }, { code: 'KZ', name: 'Kazakhstan' }, { code: 'KE', name: 'Kenya' },
  { code: 'KI', name: 'Kiribati' }, { code: 'KP', name: 'North Korea' }, { code: 'KR', name: 'South Korea' },
  { code: 'KW', name: 'Kuwait' }, { code: 'KG', name: 'Kyrgyzstan' }, { code: 'LA', name: 'Laos' },
  { code: 'LV', name: 'Latvia' }, { code: 'LB', name: 'Lebanon' }, { code: 'LS', name: 'Lesotho' },
  { code: 'LR', name: 'Liberia' }, { code: 'LY', name: 'Libya' }, { code: 'LI', name: 'Liechtenstein' },
  { code: 'LT', name: 'Lithuania' }, { code: 'LU', name: 'Luxembourg' }, { code: 'MO', name: 'Macao' },
  { code: 'MG', name: 'Madagascar' }, { code: 'MW', name: 'Malawi' }, { code: 'MY', name: 'Malaysia' },
  { code: 'MV', name: 'Maldives' }, { code: 'ML', name: 'Mali' }, { code: 'MT', name: 'Malta' },
  { code: 'MH', name: 'Marshall Islands' }, { code: 'MQ', name: 'Martinique' }, { code: 'MR', name: 'Mauritania' },
  { code: 'MU', name: 'Mauritius' }, { code: 'YT', name: 'Mayotte' }, { code: 'MX', name: 'Mexico' },
  { code: 'FM', name: 'Micronesia' }, { code: 'MD', name: 'Moldova' }, { code: 'MC', name: 'Monaco' },
  { code: 'MN', name: 'Mongolia' }, { code: 'ME', name: 'Montenegro' }, { code: 'MS', name: 'Montserrat' },
  { code: 'MA', name: 'Morocco' }, { code: 'MZ', name: 'Mozambique' }, { code: 'MM', name: 'Myanmar' },
  { code: 'NA', name: 'Namibia' }, { code: 'NR', name: 'Nauru' }, { code: 'NP', name: 'Nepal' },
  { code: 'NL', name: 'Netherlands' }, { code: 'NC', name: 'New Caledonia' }, { code: 'NZ', name: 'New Zealand' },
  { code: 'NI', name: 'Nicaragua' }, { code: 'NE', name: 'Niger' }, { code: 'NG', name: 'Nigeria' },
  { code: 'NU', name: 'Niue' }, { code: 'NF', name: 'Norfolk Island' }, { code: 'MK', name: 'North Macedonia' },
  { code: 'MP', name: 'Northern Mariana Islands' }, { code: 'NO', name: 'Norway' }, { code: 'OM', name: 'Oman' },
  { code: 'PK', name: 'Pakistan' }, { code: 'PW', name: 'Palau' }, { code: 'PS', name: 'Palestine' },
  { code: 'PA', name: 'Panama' }, { code: 'PG', name: 'Papua New Guinea' }, { code: 'PY', name: 'Paraguay' },
  { code: 'PE', name: 'Peru' }, { code: 'PH', name: 'Philippines' }, { code: 'PN', name: 'Pitcairn' },
  { code: 'PL', name: 'Poland' }, { code: 'PT', name: 'Portugal' }, { code: 'PR', name: 'Puerto Rico' },
  { code: 'QA', name: 'Qatar' }, { code: 'RE', name: 'Réunion' }, { code: 'RO', name: 'Romania' },
  { code: 'RU', name: 'Russia' }, { code: 'RW', name: 'Rwanda' }, { code: 'BL', name: 'Saint Barthélemy' },
  { code: 'SH', name: 'Saint Helena' }, { code: 'KN', name: 'Saint Kitts' }, { code: 'LC', name: 'Saint Lucia' },
  { code: 'MF', name: 'Saint Martin' }, { code: 'PM', name: 'Saint Pierre' }, { code: 'VC', name: 'Saint Vincent' },
  { code: 'WS', name: 'Samoa' }, { code: 'SM', name: 'San Marino' }, { code: 'ST', name: 'Sao Tome' },
  { code: 'SA', name: 'Saudi Arabia' }, { code: 'SN', name: 'Senegal' }, { code: 'RS', name: 'Serbia' },
  { code: 'SC', name: 'Seychelles' }, { code: 'SL', name: 'Sierra Leone' }, { code: 'SG', name: 'Singapore' },
  { code: 'SX', name: 'Sint Maarten' }, { code: 'SK', name: 'Slovakia' }, { code: 'SI', name: 'Slovenia' },
  { code: 'SB', name: 'Solomon Islands' }, { code: 'SO', name: 'Somalia' }, { code: 'ZA', name: 'South Africa' },
  { code: 'GS', name: 'South Georgia' }, { code: 'SS', name: 'South Sudan' }, { code: 'ES', name: 'Spain' },
  { code: 'LK', name: 'Sri Lanka' }, { code: 'SD', name: 'Sudan' }, { code: 'SR', name: 'Suriname' },
  { code: 'SJ', name: 'Svalbard' }, { code: 'SE', name: 'Sweden' }, { code: 'CH', name: 'Switzerland' },
  { code: 'SY', name: 'Syria' }, { code: 'TW', name: 'Taiwan' }, { code: 'TJ', name: 'Tajikistan' },
  { code: 'TZ', name: 'Tanzania' }, { code: 'TH', name: 'Thailand' }, { code: 'TL', name: 'Timor-Leste' },
  { code: 'TG', name: 'Togo' }, { code: 'TK', name: 'Tokelau' }, { code: 'TO', name: 'Tonga' },
  { code: 'TT', name: 'Trinidad' }, { code: 'TN', name: 'Tunisia' }, { code: 'TR', name: 'Turkey' },
  { code: 'TM', name: 'Turkmenistan' }, { code: 'TC', name: 'Turks and Caicos' }, { code: 'TV', name: 'Tuvalu' },
  { code: 'UG', name: 'Uganda' }, { code: 'UA', name: 'Ukraine' }, { code: 'AE', name: 'United Arab Emirates' },
  { code: 'GB', name: 'United Kingdom' }, { code: 'US', name: 'United States' }, { code: 'UM', name: 'US Outlying Islands' },
  { code: 'UY', name: 'Uruguay' }, { code: 'UZ', name: 'Uzbekistan' }, { code: 'VU', name: 'Vanuatu' },
  { code: 'VE', name: 'Venezuela' }, { code: 'VN', name: 'Vietnam' }, { code: 'VG', name: 'Virgin Islands (UK)' },
  { code: 'VI', name: 'Virgin Islands (US)' }, { code: 'WF', name: 'Wallis and Futuna' }, { code: 'EH', name: 'Western Sahara' },
  { code: 'YE', name: 'Yemen' }, { code: 'ZM', name: 'Zambia' }, { code: 'ZW', name: 'Zimbabwe' }
];

// ====== ALPHABETS ======
function getAlphabetForLanguage(hl, excludeEnglish = false) {
  const english = 'abcdefghijklmnopqrstuvwxyz';
  if (excludeEnglish && hl === 'en') return english;

  const native = {
    bn: 'অআইঈউঊঋএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহড়ঢ়য়ৎ',
    hi: 'अआइईउऊऋएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह',
    mr: 'अआइईउऊऋएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह',
    ne: 'अआइईउऊऋएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह',
    ar: 'ابتجحدخذرزسشصضطظعغفقكلمنهويآةى',
    fa: 'ابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی',
    ur: 'ابپتثجچحخدذرڑزژسشصضطظعغفقکگلمنوہھیے',
    ru: 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя',
    uk: 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюя',
    bg: 'абвгдежзийклмнопрстуфхцчшщъьюя',
    el: 'αβγδεζηθικλμνξοπρστυφχψω',
    he: 'אבגדהוזחטיכלמנסעפצקרשת',
    ta: 'அஆஇஈஉஊஎஏஐஒஓஔகஙசஜஞடணதநனபமயரறலளழவஷஸஹ',
    te: 'అఆఇఈఉఊఋఎఏఐఒఓఔకఖగఘఙచఛజఝఞటఠడఢణతథదధనపఫబభమయరఱలళవశషసహ',
    kn: 'ಅಆಇಈಉಊಋಎಏಐಒಓಔಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಲವಶಷಸಹ',
    ml: 'അആഇഈഉഊഋഎഏഐഒഓഔകഖഗഘങചഛജഝഞടഠഡഢണതഥദധനപഫബഭമയരറലവശഷസഹ',
    ja: 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ',
    ko: '가나다라마바사아자차카타파하거너더러머버서어저처커터퍼허고노도로모보소오조초코토포호',
    th: 'กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮ',
    vi: 'aăâbcdđeêghiklmnoôơpqrstuưvxy'
  };

  if (excludeEnglish) {
    return native[hl] || english;
  }
  return english + (native[hl] || '');
}

// ====== PROXY HANDLER ======
async function handleProxy(req) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q');
  const hl = searchParams.get('hl') || 'en';
  const gl = searchParams.get('gl') || 'US';

  if (!q) {
    return new Response(JSON.stringify({ error: 'Missing q parameter' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const callback = `jQuery37108808087974703922_${Date.now()}`;
  const googleUrl = new URL('https://www.google.com/complete/search');
  googleUrl.searchParams.set('q', q);
  googleUrl.searchParams.set('hl', hl);
  googleUrl.searchParams.set('gl', gl);
  googleUrl.searchParams.set('xhr', '0');
  googleUrl.searchParams.set('client', 'psy-ab');
  googleUrl.searchParams.set('callback', callback);

  try {
    const response = await fetch(googleUrl.toString(), {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 13; SM-S908B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Mobile Safari/537.36',
        'Accept': '*/*',
        'Accept-Language': `${hl}-${gl},en;q=0.9`
      }
    });

    const text = await response.text();
    return new Response(text, {
      status: 200,
      headers: {
        'Content-Type': 'application/javascript; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Proxy failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// ====== FRONTEND HTML ======
function getHtml() {
  const langOptions = LANGUAGES.map(l => `<option value="${l.code}">${l.name} (${l.code})</option>`).join('');
  const countryOptions = COUNTRIES.map(c => `<option value="${c.code}">${c.name} (${c.code})</option>`).join('');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>SEO Keyword Expander (All Languages)</title>
  <style>
    body { font-family: sans-serif; max-width: 1200px; margin: 20px auto; padding: 20px; background: #fafafa; }
    h1 { text-align: center; }
    label { display: block; margin: 15px 0 5px; }
    input, textarea, select { width: 100%; padding: 8px; box-sizing: border-box; }
    .checkbox-group { margin: 15px 0; }
    button { padding: 10px 20px; margin-top: 10px; }
    .tables-container { display: flex; gap: 20px; flex-wrap: wrap; margin-top: 20px; }
    .table-panel { flex: 1; min-width: 300px; background: white; padding: 10px; }
    table { width: 100%; border-collapse: collapse; }
    th, td { border: 1px solid #ddd; padding: 6px; }
  </style>
</head>
<body>
  <h1>🌍 SEO Keyword Expander (All Languages & Countries)</h1>

  <label>Seed Keyword</label>
  <input type="text" id="seed" value="seo" />

  <label>Language (hl)</label>
  <select id="language">${langOptions}</select>

  <label>Country (gl)</select>
  <select id="country">${countryOptions}</select>

  <label>Custom Prefixes</label>
  <textarea id="customPrefixes" placeholder="best&#10;top"></textarea>

  <label>Custom Suffixes</label>
  <textarea id="customSuffixes" placeholder="tools&#10;meaning"></textarea>

  <div class="checkbox-group">
    <label><input type="checkbox" id="includeAlphabet" checked> Include alphabet</label>
    <label><input type="checkbox" id="latinOnlyOverride"> Language only (no English)</label>
    <label><input type="checkbox" id="includeSpace"> Space variants</label>
    <label><input type="checkbox" id="semanticFilter"> AI Semantic Filter</label>
  </div>

  <button id="startBtn">Generate & Fetch All</button>
  <div id="status"></div>

  <div class="tables-container">
    <div class="table-panel">
      <h3>Raw Suggestions</h3>
      <div id="rawResults"></div>
    </div>
    <div class="table-panel">
      <h3>AI Filtered</h3>
      <div id="filteredResults"></div>
    </div>
  </div>

  <button id="copyRawBtn" style="display:none;">📋 Copy Raw</button>
  <button id="copyBtn" style="display:none;">📋 Copy Filtered</button>

  <script>
    // Use relative proxy endpoint
    async function fetchSuggestions(query, hl, gl) {
      const proxyUrl = \`/api/proxy?q=\${encodeURIComponent(query)}&hl=\${hl}&gl=\${gl}\`;
      try {
        const response = await fetch(proxyUrl);
        const text = await response.text();
        const callback = text.match(/jQuery\\\\d+_\\\\d+/)?.[0];
        if (!callback) return [];
        const match = text.match(new RegExp(\`\${callback}\\\\((.*)\\\\)\`));
        if (!match) return [];
        const data = JSON.parse(match[1]);
        return (data[1] || []).map(item => 
          item[0].replace(/\\\\\\\\u003c/g, '<').replace(/\\\\\\\\u003e/g, '>').replace(/<\\\\/?b>/g, '')
        );
      } catch (e) {
        console.warn('Fetch failed:', e);
        return [];
      }
    }

    function getAlphabetForLanguage(hl, excludeEnglish = false) {
      const english = 'abcdefghijklmnopqrstuvwxyz';
      if (excludeEnglish && hl === 'en') return english;
      const native = {
        bn: 'অআইঈউঊঋএঐওঔকখগঘঙচছজঝঞটঠডঢণতথদধনপফবভমযরলশষসহড়ঢ়য়ৎ',
        hi: 'अआइईउऊऋएऐओऔकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह',
        ar: 'ابتجحدخذرزسشصضطظعغفقكلمنهويآةى',
        ja: 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん',
        ko: '가나다라마바사아자차카타파하거너더러머버서어저처커터퍼허고노도로모보소오조초코토포호'
      };
      if (excludeEnglish) return native[hl] || english;
      return english + (native[hl] || '');
    }

    function generateKeywordVariants(seed, hl) {
      const v = [{ query: seed, prefix: '', suffix: '' }];
      if (document.getElementById('includeSpace').checked) {
        v.push({ query: \` \${seed}\`, prefix: '(space)', suffix: '' });
        v.push({ query: \`\${seed} \`, prefix: '', suffix: '(space)' });
      }
      if (document.getElementById('includeAlphabet').checked) {
        const exclude = document.getElementById('latinOnlyOverride').checked;
        const chars = getAlphabetForLanguage(hl, exclude);
        for (const char of chars) {
          v.push({ query: \`\${char} \${seed}\`, prefix: char, suffix: '' });
          v.push({ query: \`\${seed} \${char}\`, prefix: '', suffix: char });
        }
      }
      ['customPrefixes', 'customSuffixes'].forEach((id, isSuffix) => {
        document.getElementById(id).value.split('\\n').map(s => s.trim()).filter(s => s)
          .forEach(term => {
            v.push({
              query: isSuffix ? \`\${seed} \${term}\` : \`\${term} \${seed}\`,
              prefix: isSuffix ? '' : term,
              suffix: isSuffix ? term : ''
            });
          });
      });
      return v;
    }

    function renderTable(container, rows) {
      if (rows.length === 0) {
        container.innerHTML = '<div>No data</div>';
        return;
      }
      const html = \`<table><thead><tr><th>prefix</th><th>suffix</th><th>query</th></tr></thead><tbody>\${rows.map(r => \`<tr><td>\${r[0] || '&nbsp;'}</td><td>\${r[1] || '&nbsp;'}</td><td>\${r[2]}</td></tr>\`).join('')}</tbody></table>\`;
      container.innerHTML = html;
    }

    function copyToClipboard(text) {
      if (navigator.clipboard) navigator.clipboard.writeText(text);
    }

    document.getElementById('startBtn').addEventListener('click', async () => {
      const seed = document.getElementById('seed').value.trim();
      const hl = document.getElementById('language').value;
      const gl = document.getElementById('country').value;
      const useSemantic = document.getElementById('semanticFilter').checked;

      if (!seed) return alert('Enter seed');

      const btn = document.getElementById('startBtn');
      const status = document.getElementById('status');
      const rawEl = document.getElementById('rawResults');
      const filteredEl = document.getElementById('filteredResults');
      const copyRaw = document.getElementById('copyRawBtn');
      const copyFiltered = document.getElementById('copyBtn');

      btn.disabled = true;
      status.textContent = 'Generating...';
      rawEl.innerHTML = 'Loading...';
      filteredEl.innerHTML = 'Loading...';
      copyRaw.style.display = 'none';
      copyFiltered.style.display = 'none';

      const variants = generateKeywordVariants(seed, hl);
      status.textContent = \`Fetching \${variants.length} queries...\`;

      const allRaw = [['prefix','suffix','query']];
      for (let i = 0; i < variants.length; i++) {
        const { query, prefix, suffix } = variants[i];
        const suggestions = await fetchSuggestions(query, hl, gl);
        suggestions.forEach(s => allRaw.push([prefix, suffix, s]));
        status.textContent = \`Fetched \${i+1}/\${variants.length}\`;
        await new Promise(r => setTimeout(r, 200));
      }

      const seen = new Set();
      const uniqueRaw = allRaw.filter(row => !seen.has(row[2]) && seen.add(row[2]));

      renderTable(rawEl, uniqueRaw.slice(1));
      const rawTsv = uniqueRaw.map(r => r.map(f => \`\\"\${String(f).replace(/"/g,'""')}\\").join('\\t')).join('\\n');
      copyRaw.onclick = () => { copyToClipboard(rawTsv); copyRaw.textContent = '✅ Copied!'; setTimeout(() => copyRaw.textContent = '📋 Copy Raw', 2000); };
      copyRaw.style.display = 'inline-block';

      if (useSemantic) {
        status.textContent = 'Loading AI model...';
        const { pipeline } = await import('https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2');
        const encoder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
        status.textContent = 'Filtering...';

        const seedEmb = (await encoder(seed)).data;
        const filtered = [['prefix','suffix','query']];
        for (const row of uniqueRaw.slice(1)) {
          const emb = (await encoder(row[2])).data;
          let dot = 0, nA = 0, nB = 0;
          for (let i = 0; i < seedEmb.length; i++) {
            dot += seedEmb[i] * emb[i];
            nA += seedEmb[i] * seedEmb[i];
            nB += emb[i] * emb[i];
          }
          const sim = dot / (Math.sqrt(nA) * Math.sqrt(nB));
          if (sim > 0.60) filtered.push(row);
        }

        renderTable(filteredEl, filtered.slice(1));
        const tsv = filtered.map(r => r.map(f => \`\\"\${String(f).replace(/"/g,'""')}\\").join('\\t')).join('\\n');
        copyFiltered.onclick = () => { copyToClipboard(tsv); copyFiltered.textContent = '✅ Copied!'; setTimeout(() => copyFiltered.textContent = '📋 Copy Filtered', 2000); };
        copyFiltered.style.display = 'inline-block';
        status.textContent = \`Done! Raw: \${uniqueRaw.length-1} | Filtered: \${filtered.length-1}\`;
      } else {
        filteredEl.innerHTML = '<div>Enable AI filter</div>';
      }

      btn.disabled = false;
    });

    // Set defaults
    document.getElementById('language').value = 'en';
    document.getElementById('country').value = 'US';
  </script>
</body>
</html>
  `;
}

// ====== MAIN EXPORT FOR VERCEL ======
export default async function handler(req) {
  const url = new URL(req.url, `https://${req.headers.get('host')}`);
  
  // Handle API proxy requests
  if (url.pathname === '/api/proxy') {
    return handleProxy(req);
  }

  // Serve frontend HTML
  return new Response(getHtml(), {
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  });
}
