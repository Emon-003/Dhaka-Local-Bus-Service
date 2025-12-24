const fareIncrements = {
    "01": 2.5,
    "02": 2.5,
    "03": 2.5,
    "04": 2.5,
    "05": 2.5,
    "06": 2.5,
    "07": 2.5,
    "08": 2.5,
    "09": 2.5,
    "10": 2.5,
    "11": 2.5,
    "12": 2.5,
    "13": 2.5,
    "14": 2.5,
    "15": 2.5,
    "16": 2.5,
    "17": 2.5,
    "18": 2.5,
    "19": 2.5,
    "20": 2.5,
    "21": 2.5,
    "22": 2.5,
    "23": 2.5
};

// Added baseFares object for fare calculation
const baseFares = {
    "01": 10,
    "02": 10,
    "03": 10,
    "04": 10,
    "05": 10,
    "06": 10,
    "07": 10,
    "08": 10,
    "09": 10,
    "10": 10,
    "11": 10,
    "12": 10,
    "13": 10,
    "14": 10,
    "15": 10,
    "16": 10,
    "17": 10,
    "18": 10,
    "19": 10,
    "20": 10,
    "21": 10,
    "22": 10,
    "23": 10
};

const busRoutes = [
    {
      "number": "01",
      "name": "6-no",
      "stops": [
        "Kamalapur (কমলাপুর)",
        "Motijheel (মতিঝিল)",
        "Gulistan (গুলিস্তান)",
        "GPO (জিপিও)",
        "Paltan (পল্টন)",
        "Kakrail (কাকরাইল)",
        "Shantinagar (শান্তিনগর)",
        "Malibaag Moor (মালিবাগ মোড়)",
        "Mouchak (মৌচাক)",
        "Mogbazar (মগবাজার)",
        "Kawran Bazar (কাওরান বাজার)",
        "Farmgate (ফার্মগেট)",
        "Jahangir Gate (জাহাঙ্গীর গেট)",
        "Bijoy Sarani (বিজয় সারাণী)",
        "Mohakhali (মহাখালী)",
        "Gulshan 1 (গুলশান ১)",
        "Gulshan 2 (গুলশান ২)",
        "Notun Bazar (নতুন বাজার)"
      ]
    },
    {
      "number": "02",
      "name": "Airport",
      "stops": [
        "Fulbaria (ফুলবাড়িয়া)",
        "Golap Shah Mazar (গোলাপ শাহ মাজার)",
        "GPO (জিপিও)",
        "Paltan (পল্টন)",
        "Press Club (প্রেস ক্লাব)",
        "High Court (উচ্চ আদালত)",
        "Matsya Bhaban (মৎস্য ভবন)",
        "Shahbag (শাহবাগ)",
        "Bangla Motor (বাংলা মোটর)",
        "Kawran Bazar (কাওরান বাজার)",
        "Farmgate (ফার্মগেট)",
        "Bijoy Sarani (বিজয় সারাণী)",
        "Jahangir Gate (জাহাঙ্গীর গেট)",
        "Mohakhali (মহাখালী)",
        "Chairman Bari (চেয়ারম্যান বাড়ী)",
        "Sainik Club (সৈনিক ক্লাব)",
        "Banani (বনানী)",
        "Kakali (কাকলী)",
        "Staff Road (স্টাফ রোড)",
        "MES (এমইএস)",
        "Kurmitola (কুর্মিটোলা)",
        "Shewra (শেওড়া)",
        "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
        "Khilkhet (খিলক্ষেত)",
        "Airport (বিমানবন্দর)",
        "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
        "Rajlakshmi (রাজলক্ষ্মী)",
        "House Building (হাউজ বিল্ডিং)",
        "Abdullahpur (আব্দুল্লাহপুর)"
      ]
    },
    {
        "number": "03",
        "name": "Akash",
        "stops": [
          "Kadamtali (কদমতলী)",
          "Keraniganj (কেরাণীগঞ্জ)",
          "Babubazar (বাবুবাজার)",
          "Naya Bazar (নয়া বাজার)",
          "Golap Shah Mazar (গোলাপ শাহ মাজার)",
          "GPO (জিপিও)",
          "Paltan (পল্টন)",
          "Kakrail (কাকরাইল)",
          "Shantinagar (শান্তিনগর)",
          "Malibagh (মালিবাগ)",
          "Mouchak (মৌচাক)",
          "Malibagh Railgate (মালিবাগ রেলগেট)",
          "Hazipara (হাজীপাড়া)",
          "Rampura Bazar (রামপুরা বাজার)",
          "Merul Badda (মেরুল বাড্ডা)",
          "Badda (বাড্ডা)",
          "Shahjadpur (শাহজাদপুর)",
          "Bashtola (বাঁশতলা)",
          "Notun Bazar (নতুন বাজার)",
          "Nadda (নদ্দা)",
          "Bashundhara (বসুন্ধরা)",
          "Jamuna Future Park (যমুনা ফিউচার পার্ক)",
          "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
          "Khilkhet (খিলক্ষেত)",
          "Airport (বিমানবন্দর)",
          "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
          "Rajlakshmi (রাজলক্ষ্মী)",
          "Azampur (আজমপুর)",
          "House Building (হাউজ বিল্ডিং)",
          "Abdullahpur (আব্দুল্লাহপুর)",
          "Tongi (টঙ্গী)"
        ]
    },
    {
      "number": "04",
      "name": "Al-Makka",
      "stops": [
        "Motijheel (মতিঝিল)",
        "Gulistan (গুলিস্তান)",
        "GPO (জিপিও)",
        "Paltan (পল্টন)",
        "Kakrail (কাকরাইল)",
        "Shantinagar (শান্তিনগর)",
        "Malibagh (মালিবাগ)",
        "Mouchak (মৌচাক)",
        "Mogbazar (মগবাজার)",
        "Nabisco (নাবিস্কো)",
        "Mohakhali (মহাখালী)",
        "Chairman Bari (চেয়ারম্যান বাড়ী)",
        "Kakali (কাকলী)",
        "Banani (বনানী)",
        "ECB Square (ইসিবি স্কয়ার)",
        "Kalshi (কালশী)",
        "Purobi (পুরবী)",
        "Mirpur 10 (মিরপুর ১০)",
        "Mirpur 2 (মিরপুর ২)",
        "Mirpur 1 (মিরপুর ১)"
      ]
    },
    {
      "number": "05",
      "name": "Alif",
      "stops": [
        "Mirpur 14 (মিরপুর ১৪)",
        "Mirpur 10 (মিরপুর ১০)",
        "Mirpur 2 (মিরপুর ২)",
        "Sony Cinema Hall (সনি সিনেমা হল)",
        "Mirpur 1 (মিরপুর ১)",
        "Mazar Road (মাজার রোড)",
        "Konabari (কোনাবাড়ি)",
        "Rupnagar (রূপনগর)",
        "Beribadh (বেড়িবাঁধ)",
        "Birulia (বিরুলিয়া)",
        "Ashulia (আশুলিয়া)",
        "Zirabo (জিরাবো)",
        "Fantasy Kingdom (ফ্যান্টাসি কিংডম)",
        "Nandan Park (নন্দন পার্ক)"
      ]
    },
    {
      "number": "06",
      "name": "Anabil",
      "stops": [
        "Sign Board (সাইন বোর্ড)",
        "Shonir Akhra (শনির আখরা)",
        "Jatrabari (যাত্রাবাড়ি)",
        "Mugdapara (মুগদাপাড়া)",
        "Bashabo (বাসাবো)",
        "Khilgaon (খিলগাঁও)",
        "Malibagh Railgate (মালিবাগ রেলগেট)",
        "Hazipara (হাজীপাড়া)",
        "Rampura Bazar (রামপুরা বাজার)",
        "Rampura Bridge (রামপুরা ব্রিজ)",
        "Merul Badda (মেরুল বাড্ডা)",
        "Uttar Badda (উত্তর বাড্ডা)",
        "Shahjadpur (শাহজাদপুর)",
        "Nadda (নদ্দা)",
        "Bashtola (বাঁশতলা)",
        "Notun Bazar (নতুন বাজার)",
        "Nadda (নদ্দা)",
        "Khilkhet (খিলক্ষেত)",
        "Bashundhara (বসুন্ধরা)",
        "Jamuna Future Park (যমুনা ফিউচার পার্ক)",
        "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
        "Khilkhet (খিলক্ষেত)",
        "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
        "Airport (বিমানবন্দর)",
        "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
        "Rajlakshmi (রাজলক্ষ্মী)",
        "Azampur (আজমপুর)",
        "House Building (হাউজ বিল্ডিং)",
        "Abdullahpur (আব্দুল্লাহপুর)",
        "Tongi (টঙ্গী)",
        "Tongi Station Road (টঙ্গী স্টেশন রোড)",
        "Mill Gate (মিল গেট)",
        "Board Bazar (বোর্ড বাজার)",
        "Gazipur Bypass (গাজীপুর বাইপাস)",
        "Gazipur Chourasta (গাজীপুর চৌরাস্তা)"
      ]
    },
    {
      "number": "07",
      "name": "Ashulia-Classic",
      "stops": [
        "Nobinagar (নবীনগর)",
        "Baipayl (বাইপাইল)",
        "Jamgora (জামগড়া)",
        "Fantasy Kingdom (ফ্যান্টাসি কিংডম)",
        "Zirabo (জিরাবো)",
        "Asulia Bazar (আশুলিয়া বাজার)",
        "Kamarpara (কামারপাড়া)",
        "Abdullahpur (আব্দুল্লাহপুর)",
        "House Building (হাউজ বিল্ডিং)",
        "Azampur (আজমপুর)",
        "Rajlakshmi (রাজলক্ষ্মী)",
        "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
        "Airport (বিমানবন্দর)",
        "Khilkhet (খিলক্ষেত)",
        "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
        "Shewra (শেওড়া)",
        "MES (এমইএস)",
        "Kakali (কাকলী)",
        "Banani (বনানী)",
        "Chairman Bari (চেয়ারম্যান বাড়ী)",
        "Mohakhali (মহাখালী)",
        "Nabisco (নাবিস্কো)",
        "Sat rasta (সাত রাস্তা)"
      ]
    },
    {
      "number": "08",
      "name": "Asmani",
      "stops": [
        "Dhour (ঢাউর)",
        "Abdullahpur (আব্দুল্লাহপুর)",
        "House Building (হাউজ বিল্ডিং)",
        "Azampur (আজমপুর)",
        "Rajlakshmi (রাজলক্ষ্মী)",
        "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
        "Airport (বিমানবন্দর)",
        "Khilkhet (খিলক্ষেত)",
        "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
        "Jamuna Future Park (যমুনা ফিউচার পার্ক)",
        "Bashundhara (বসুন্ধরা)",
        "Nadda (নদ্দা)",
        "Notun Bazar (নতুন বাজার)",
        "Bashtola (বাঁশতলা)",
        "Shahjadpur (শাহজাদপুর)",
        "Uttar Badda (উত্তর বাড্ডা)",
        "Badda (বাড্ডা)",
        "Madhya Badda (মধ্য বাড্ডা)",
        "Merul Badda (মেরুল বাড্ডা)",
        "Rampura Bridge (রামপুরা ব্রিজ)",
        "Banasree (বনশ্রী)",
        "Demra Staff Quarter (ডেমরা স্টাফ কোয়ার্টার)",
        "Tarabo (তারাবো)",
        "Madanpur (মদনপুর)"
      ]
    },
    {
      "number": "09",
      "name": "Ayat",
      "stops": [
        "Chiriyakhana (চিরিয়াখানা)",
        "Sony Cinema Hall (সনি সিনেমা হল)",
        "Mirpur 2 (মিরপুর ২)",
        "Mirpur 10 (মিরপুর ১০)",
        "Kazipara (কাজীপাড়া)",
        "Shewrapara (শেওড়াপাড়া)",
        "Taltola (তালতলা)",
        "Agargaon (আগারগাঁও)",
        "Khamar Bari (খামার বাড়ি)",
        "Farmgate (ফার্মগেট)",
        "Kawran Bazar (কাওরান বাজার)",
        "Bangla Motor (বাংলা মোটর)",
        "Mogbazar (মগবাজার)",
        "Mouchak (মৌচাক)",
        "Malibaag Moor (মালিবাগ মোড়)",
        "Rajarbag (রাজারবাগ)",
        "Kamalapur (কমলাপুর)"
      ]
    },
    {
      "number": "10",
      "name": "Azmeri-Glory",
      "stops": [
        "Sadarghat (সদরঘাট)",
        "Ray Saheb Bazar (রায় সাহেব বাজার)",
        "Naya Bazar (নয়া বাজার)",
        "Golap Shah Mazar (গোলাপ শাহ মাজার)",
        "GPO (জিপিও)",
        "Paltan (পল্টন)",
        "Kakrail (কাকরাইল)",
        "Shantinagar (শান্তিনগর)",
        "Malibagh (মালিবাগ)",
        "Mouchak (মৌচাক)",
        "Nabisco (নাবিস্কো)",
        "Mohakhali (মহাখালী)",
        "Sainik Club (সৈনিক ক্লাব)",
        "Banani (বনানী)",
        "Kakali (কাকলী)",
        "Staff Road (স্টাফ রোড)",
        "MES (এমইএস)",
        "Shewra (শেওড়া)",
        "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
        "Khilkhet (খিলক্ষেত)",
        "Airport (বিমানবন্দর)",
        "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
        "Rajlakshmi (রাজলক্ষ্মী)",
        "Azampur (আজমপুর)",
        "House Building (হাউজ বিল্ডিং)",
        "Abdullahpur (আব্দুল্লাহপুর)",
        "Tongi (টঙ্গী)",
        "Tongi Station Road (টঙ্গী স্টেশন রোড)",
        "Mill Gate (মিল গেট)",
        "Board Bazar (বোর্ড বাজার)",
        "Gazipur Bypass (গাজীপুর বাইপাস)",
        "Konabari (কোনাবাড়ি)",
        "Chandra (চন্দ্রা)"
      ]
    },
    {
      "number": "11",
      "name": "Bahon",
      "stops": [
        "Mirpur 14 (মিরপুর ১৪)",
        "Mirpur 10 (মিরপুর ১০)",
        "Mirpur 2 (মিরপুর ২)",
        "Mirpur 1 (মিরপুর ১)",
        "Ansar Camp (আনসার ক্যাম্প)",
        "Bangla College (বাংলা কলেজ)",
        "Technical (টেকনিক্যাল)",
        "Darussalam (দারুস্সালাম)",
        "Kallyanpur (কল্যাণপুর)",
        "Shyamoli (শ্যামলী)",
        "Asad Gate (আসাদ গেট)",
        "Dhanmondi 27 (ধানমন্ডি ২৭)",
        "Dhanmondi 32 (ধানমন্ডি ৩২)",
        "Kalabagan (কলাবাগান)",
        "Science Lab (বিজ্ঞান গবেষণা প্রযুক্তি)",
        "Katabon (কাটাবন)",
        "Shahbag (শাহবাগ)",
        "High Court (উচ্চ আদালত)",
        "Press Club (প্রেস ক্লাব)",
        "Paltan (পল্টন)",
        "Dainik Bangla Moor (দৈনিক বাংলা মোড়)",
        "Motijheel (মতিঝিল)",
        "Arambagh (আরামবাগ)",
        "Kamalapur (কমলাপুর)",
        "Mugdapara (মুগদাপাড়া)",
        "Bashabo (বাসাবো)",
        "Khilgaon (খিলগাঁও)"
      ]
    },
    {
      "number": "12",
      "name": "Baishakhi",
      "stops": [
        "Mirpur 14 (মিরপুর ১৪)",
        "Mirpur 10 (মিরপুর ১০)",
        "Mirpur 2 (মিরপুর ২)",
        "Mirpur 1 (মিরপুর ১)",
        "Ansar Camp (আনসার ক্যাম্প)",
        "Bangla College (বাংলা কলেজ)",
        "Technical (টেকনিক্যাল)",
        "Darussalam (দারুস্সালাম)",
        "Kallyanpur (কল্যাণপুর)",
        "Shyamoli (শ্যামলী)",
        "Asad Gate (আসাদ গেট)",
        "Dhanmondi 27 (ধানমন্ডি ২৭)",
        "Dhanmondi 32 (ধানমন্ডি ৩২)",
        "Kalabagan (কলাবাগান)",
        "Science Lab (বিজ্ঞান গবেষণা প্রযুক্তি)",
        "Katabon (কাটাবন)",
        "Shahbag (শাহবাগ)",
        "High Court (উচ্চ আদালত)",
        "Press Club (প্রেস ক্লাব)",
        "Paltan (পল্টন)",
        "Dainik Bangla Moor (দৈনিক বাংলা মোড়)",
        "Motijheel (মতিঝিল)",
        "Arambagh (আরামবাগ)",
        "Kamalapur (কমলাপুর)",
        "Mugdapara (মুগদাপাড়া)",
        "Bashabo (বাসাবো)",
        "Khilgaon (খিলগাঁও)"
      ]
    },
    {
      "number": "13",
      "name": "Balaka",
      "stops": [
        "Sayapabad (সায়দাবাদ)",
        "Manik Nagar (মানিক নগর)",
        "TT Para (টিটি পাড়া)",
        "Kamalapur (কমলাপুর)",
        "Malibaag Moor (মালিবাগ মোড়)",
        "Mouchak (মৌচাক)",
        "Mogbazar (মগবাজার)",
        "Sat rasta (সাত রাস্তা)",
        "Nabisco (নাবিস্কো)",
        "Mohakhali (মহাখালী)",
        "Chairman Bari (চেয়ারম্যান বাড়ী)",
        "Banani (বনানী)",
        "Kakali (কাকলী)",
        "Staff Road (স্টাফ রোড)",
        "MES (এমইএস)",
        "Shewra (শেওড়া)",
        "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
        "Khilkhet (খিলক্ষেত)",
        "Airport (বিমানবন্দর)",
        "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
        "Rajlakshmi (রাজলক্ষ্মী)",
        "Azampur (আজমপুর)",
        "House Building (হাউজ বিল্ডিং)",
        "Abdullahpur (আব্দুল্লাহপুর)",
        "Tongi (টঙ্গী)",
        "Tongi Station Road (টঙ্গী স্টেশন রোড)",
        "Mill Gate (মিল গেট)",
        "Board Bazar (বোর্ড বাজার)",
        "Gazipur Bypass (গাজীপুর বাইপাস)",
        "Gazipur Chourasta (গাজীপুর চৌরাস্তা)"
      ]
    },
    {
      "number": "14",
      "name": "Basumati-Transport",
      "stops": [
        "Gabtoli (গাবতলি)",
        "Mirpur 1 (মিরপুর ১)",
        "Sony Cinema Hall (সনি সিনেমা হল)",
        "Mirpur 2 (মিরপুর ২)",
        "Mirpur 10 (মিরপুর ১০)",
        "Mirpur 11 (মিরপুর ১১)",
        "Purobi (পুরবী)",
        "Kalshi (কালশী)",
        "ECB Square (ইসিবি স্কয়ার)",
        "MES (এমইএস)",
        "Shewra (শেওড়া)",
        "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
        "Khilkhet (খিলক্ষেত)",
        "Airport (বিমানবন্দর)",
        "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
        "Rajlakshmi (রাজলক্ষ্মী)",
        "Azampur (আজমপুর)",
        "House Building (হাউজ বিল্ডিং)",
        "Abdullahpur (আব্দুল্লাহপুর)",
        "Tongi (টঙ্গী)",
        "Tongi Station Road (টঙ্গী স্টেশন রোড)",
        "Mill Gate (মিল গেট)",
        "Board Bazar (বোর্ড বাজার)",
        "Gazipur Chourasta (গাজীপুর চৌরাস্তা)"
      ]
    },
    {
      "number": "15",
      "name": "Basumati",
      "stops": [
        "Gabtoli (গাবতলি)",
        "Technical (টেকনিক্যাল)",
        "Kallyanpur (কল্যাণপুর)",
        "Shyamoli (শ্যামলী)",
        "Shishu Mela (শিশু মেলা)",
        "College Gate (কলেজ গেট)",
        "Asad Gate (আসাদ গেট)",
        "Manik Mia Avenue (মানিক মিয়া এভিনিউ)",
        "Khamar Bari (খামার বাড়ি)",
        "Farmgate (ফার্মগেট)",
        "Kawran Bazar (কাওরান বাজার)",
        "Bangla Motor (বাংলা মোটর)",
        "Shahbag (শাহবাগ)",
        "Matsya Bhaban (মৎস্য ভবন)",
        "High Court (উচ্চ আদালত)",
        "Press Club (প্রেস ক্লাব)",
        "Paltan (পল্টন)",
        "GPO (জিপিও)",
        "Golap Shah Mazar (গোলাপ শাহ মাজার)",
        "Naya Bazar (নয়া বাজার)",
        "Babubazar (বাবুবাজার)",
        "Keraniganj (কেরাণীগঞ্জ)",
        "Maowa (মাওয়া)"
      ]
    },
    {
      "number": "16",
      "name": "Best-Satabdi",
      "stops": [
        "Azimpur (আজিমপুর)",
        "Nilkhet (নীলক্ষেত)",
        "New Market (নিউ মার্কেট)",
        "City College (সিটি কলেজ)",
        "Kalabagan (কলাবাগান)",
        "Dhanmondi 27 (ধানমন্ডি ২৭)",
        "Dhanmondi 32 (ধানমন্ডি ৩২)",
        "Khamar Bari (খামার বাড়ি)",
        "Farmgate (ফার্মগেট)",
        "Jahangir Gate (জাহাঙ্গীর গেট)",
        "Mohakhali (মহাখালী)",
        "Chairman Bari (চেয়ারম্যান বাড়ী)",
        "Sainik Club (সৈনিক ক্লাব)",
        "Banani (বনানী)",
        "Kakali (কাকলী)",
        "Staff Road (স্টাফ রোড)",
        "MES (এমইএস)",
        "Shewra (শেওড়া)",
        "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
        "Khilkhet (খিলক্ষেত)",
        "Airport (বিমানবন্দর)",
        "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
        "Rajlakshmi (রাজলক্ষ্মী)",
        "Azampur (আজমপুর)",
        "House Building (হাউজ বিল্ডিং)",
        "Abdullahpur (আব্দুল্লাহপুর)",
        "Kamarpara (কামারপাড়া)",
        "Dhour (ঢাউর)",
        "Dia Bari (দিয়া বাড়ি)"
      ]
    },
    {
      "number": "17",
      "name": "Bhuiyan",
      "stops": [
        "Japan Garden City (জাপান গার্ডেন সিটি)",
        "Mirpur 10 (মিরপুর ১০)",
        "Kazipara (কাজীপাড়া)",
        "Shewrapara (শেওড়াপাড়া)",
        "Agargaon (আগারগাঁও)",
        "Bijoy Sarani (বিজয় সারাণী)",
        "Farmgate (ফার্মগেট)",
        "Kawran Bazar (কাওরান বাজার)",
        "Bangla Motor (বাংলা মোটর)",
        "Shahbag (শাহবাগ)",
        "Matsya Bhaban (মৎস্য ভবন)",
        "High Court (উচ্চ আদালত)",
        "Press Club (প্রেস ক্লাব)",
        "Paltan (পল্টন)",
        "GPO (জিপিও)",
        "Gulistan (গুলিস্তান)",
        "Motijheel (মতিঝিল)",
        "Kamalapur (কমলাপুর)",
        "Sign Board (সাইন বোর্ড)",
        "Matuail (মাতুয়াইল)",
        "Rayerbag (রায়েরবাগ)",
        "Shonir Akhra (শনির আখরা)",
        "Jatrabari (যাত্রাবাড়ি)",
        "Sayapabad (সায়াপাবাদ)",
        "Abdullahpur (আব্দুল্লাহপুর)"
      ]
    },
    {
      "number": "18",
      "name": "Bihanga",
      "stops": [
        "Mirpur 12 (মিরপুর ১২)",
        "Mirpur 11 (মিরপুর ১১)",
        "Mirpur 10 (মিরপুর ১০)",
        "Mirpur 10 (মিরপুর ১০)",
        "Kazipara (কাজীপাড়া)",
        "Shewrapara (শেওড়াপাড়া)",
        "Agargaon (আগারগাঁও)",
        "Bijoy Sarani (বিজয় সারাণী)",
        "Jahangir Gate (জাহাঙ্গীর গেট)",
        "Mohakhali (মহাখালী)",
        "Wireless (ওয়্যারলেস)",
        "Gulshan Bridge (গুলশান ব্রিজ)",
        "Gulshan 1 (গুলশান ১)",
        "Badda (বাড্ডা)",
        "Notun Bazar (নতুন বাজার)"
      ]
    },
    {
      "number": "19",
      "name": "Bikalpa-Super",
      "stops": [
        "Mirpur 12 (মিরপুর ১২)",
        "Pallabi (পল্লবী)",
        "Purobi (পুরবী)",
        "Mirpur 11 (মিরপুর ১১)",
        "Mirpur 10 (মিরপুর ১০)",
        "Kazipara (কাজীপাড়া)",
        "Shewrapara (শেওড়াপাড়া)",
        "Taltola (তালতলা)",
        "Agargaon (আগারগাঁও)",
        "Shyamoli (শ্যামলী)",
        "Shishu Mela (শিশু মেলা)",
        "College Gate (কলেজ গেট)",
        "Asad Gate (আসাদ গেট)",
        "Dhanmondi 27 (ধানমন্ডি ২৭)",
        "Dhanmondi 32 (ধানমন্ডি ৩২)",
        "Kalabagan (কলাবাগান)",
        "City College (সিটি কলেজ)",
        "New Market (নিউ মার্কেট)",
        "Nilkhet (নীলক্ষেত)",
        "Azimpur (আজিমপুর)",
        "Dhakeshwari (ঢাকেশ্বরী)"
      ]
    },
    {
      "number": "20",
      "name": "Bikalpa",
      "stops": [
        "Mirpur 12 (মিরপুর ১২)",
        "Pallabi (পল্লবী)",
        "Purobi (পুরবী)",
        "Mirpur 11 (মিরপুর ১১)",
        "Mirpur 1 (মিরপুর ১)",
        "Kazipara (কাজীপাড়া)",
        "Shewrapara (শেওড়াপাড়া)",
        "Taltola (তালতলা)",
        "Agargaon (আগারগাঁও)",
        "Bijoy Sarani (বিজয় সারাণী)",
        "Farmgate (ফার্মগেট)",
        "Kawran Bazar (কাওরান বাজার)",
        "Bangla Motor (বাংলা মোটর)",
        "Shahbag (শাহবাগ)",
        "Matsya Bhaban (মৎস্য ভবন)",
        "High Court (উচ্চ আদালত)",
        "Press Club (প্রেস ক্লাব)",
        "Paltan (পল্টন)",
        "GPO (জিপিও)",
        "Gulistan (গুলিস্তান)",
        "Motijheel (মতিঝিল)"
      ]
    },
    {
      "number": "21",
      "name": "Bikash-Paribahan",
      "stops": [
        "Azimpur (আজিমপুর)",
        "Nilkhet (নীলক্ষেত)",
        "New Market (নিউ মার্কেট)",
        "City College (সিটি কলেজ)",
        "Kalabagan (কলাবাগান)",
        "Dhanmondi 27 (ধানমন্ডি ২৭)",
        "Dhanmondi 32 (ধানমন্ডি ৩২)",
        "Khamar Bari (খামার বাড়ি)",
        "Farmgate (ফার্মগেট)",
        "Jahangir Gate (জাহাঙ্গীর গেট)",
        "Mohakhali (মহাখালী)",
        "Sainik Club (সৈনিক ক্লাব)",
        "Banani (বনানী)",
        "Kakali (কাকলী)",
        "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
        "Khilkhet (খিলক্ষেত)",
        "Airport (বিমানবন্দর)",
        "Abdullahpur (আব্দুল্লাহপুর)",
        "Kamarpara (কামারপাড়া)"
      ]
    },
    {
      "number": "22",
      "name": "Bikash",
      "stops": [
        "Sign Board (সাইন বোর্ড)",
        "Matuail (মাতুয়াইল)",
        "Rayerbag (রায়েরবাগ)",
        "Shonir Akhra (শনির আখরা)",
        "Jatrabari (যাত্রাবাড়ি)",
        "Sayapabad (সায়াপাবাদ)",
        "Gulistan (গুলিস্তান)",
        "Chankhar Pul (চাঁকহার পুল)",
        "Bakshi Bazar (বকশী বাজার)",
        "Azimpur (আজিমপুর)",
        "Nilkhet (নীলক্ষেত)",
        "New Market (নিউ মার্কেট)",
        "City College (সিটি কলেজ)",
        "Kalabagan (কলাবাগান)",
        "Dhanmondi 32 (ধানমন্ডি ৩২)",
        "Dhanmondi 27 (ধানমন্ডি ২৭)",
        "Asad Gate (আসাদ গেট)",
        "College Gate (কলেজ গেট)",
        "Shishu Mela (শিশু মেলা)",
        "Shyamoli (শ্যামলী)",
        "Kallyanpur (কল্যাণপুর)",
        "Darussalam (দারুস্সালাম)",
        "Technical (টেকনিক্যাল)",
        "Gabtoli (গাবতলি)",
        "Amin Bazar (আমিন বাজার)",
        "Hemayetpur (হেমায়েতপুর)",
        "Savar (সাভার)",
        "Nobinagar (নবীনগর)",
        "Baipayl (বাইপাইল)",
        "Zirani Bazar (জিরানী বাজার)",
        "Nandan Park (নন্দন পার্ক)",
        "Chandra (চন্দ্রা)"
      ]
    },
    {
      "number": "23",
      "name": "BRTC-Articulated",
      "stops": [
        "Balughat (বালুঘাট)",
        "Cantonment (ক্যান্টনমেন্ট)",
        "Bijoy Sarani (বিজয় সারাণী)",
        "Farmgate (ফার্মগেট)",
        "Bangla Motor (বাংলা মোটর)",
        "Shahbag (শাহবাগ)",
        "Paltan (পল্টন)",
        "Gulistan (গুলিস্তান)",
        "Motijheel (মতিঝিল)"
      ]
    },
    {
      "number": "24",
      "name": "BRTC-Elevated",
      "stops": [
        "Rajlakshmi (রাজলক্ষ্মী)",
        "Airport (বিমানবন্দর)",
        "Kawlar (কাওলার)",
        "Elevated Express Way (এলিভেটেড এক্সপ্রেস ওয়ে)",
        "Tejgaon College (Farmgate) (তেজগাঁও কলেজ - ফার্মগেট)",
        "Khejur Bagan (খেজুর বাগান)",
        "Songsod Bhaban (সংসদ ভবন)",
        "Bijoy Sarani (বিজয় সারাণী)",
        "Elevated Express Way (এলিভেটেড এক্সপ্রেস ওয়ে)",
        "Kawlar (কাওলার)",
        "Airport (বিমানবন্দর)",
        "Rajlakshmi (রাজলক্ষ্মী)"
      ]
    },
    {
      "number": "25",
      "name": "BRTC-Motijheel",
      "stops": [
        "Motijheel (মতিঝিল)",
        "Gulistan (গুলিস্তান)",
        "GPO (জিপিও)",
        "Paltan (পল্টন)",
        "Press Club (প্রেস ক্লাব)",
        "High Court (উচ্চ আদালত)",
        "Matsya Bhaban (মৎস্য ভবন)",
        "Shahbag (শাহবাগ)",
        "Bangla Motor (বাংলা মোটর)",
        "Kawran Bazar (কাওরান বাজার)",
        "Farmgate (ফার্মগেট)",
        "Khamar Bari (খামার বাড়ি)",
        "Asad Gate (আসাদ গেট)",
        "College Gate (কলেজ গেট)",
        "Shishu Mela (শিশু মেলা)",
        "Shyamoli (শ্যামলী)",
        "Kallyanpur (কল্যাণপুর)",
        "Technical (টেকনিক্যাল)",
        "Gabtoli (গাবতলি)",
        "Amin Bazar (আমিন বাজার)",
        "Hemayetpur (হেমায়েতপুর)",
        "Baipayl (বাইপাইল)",
        "Zirani Bazar (জিরানী বাজার)",
        "Chandra (চন্দ্রা)"
      ]
    },
    {
      "number": "26",
      "name": "BRTC-Savar",
      "stops": [
        "Madanpur (মদনপুর)",
        "Kanchpur (কাঁচপুর)",
        "Chittagong Road (চট্টগ্রাম রোড)",
        "Sign Board (সাইন বোর্ড)",
        "Matuail (মাতুয়াইল)",
        "Rayerbag (রায়েরবাগ)",
        "Shonir Akhra (শনির আখরা)",
        "Jatrabari (যাত্রাবাড়ি)",
        "Sayapabad (সায়াপাবাদ)",
        "Gulistan (গুলিস্তান)",
        "GPO (জিপিও)",
        "Paltan (পল্টন)",
        "Press Club (প্রেস ক্লাব)",
        "High Court (উচ্চ আদালত)",
        "Matsya Bhaban (মৎস্য ভবন)",
        "Shahbag (শাহবাগ)",
        "Bangla Motor (বাংলা মোটর)",
        "Kawran Bazar (কাওরান বাজার)",
        "Farmgate (ফার্মগেট)",
        "Khamar Bari (খামার বাড়ি)",
        "Asad Gate (আসাদ গেট)",
        "College Gate (কলেজ গেট)",
        "Shishu Mela (শিশু মেলা)",
        "Shyamoli (শ্যামলী)",
        "Kallyanpur (কল্যাণপুর)",
        "Technical (টেকনিক্যাল)",
        "Gabtoli (গাবতলি)",
        "Amin Bazar (আমিন বাজার)",
        "Hemayetpur (হেমায়েতপুর)",
        "Savar (সাভার)"
      ]
    },
    {
      "number": "27",
      "name": "Dhakar-Chaka",
      "stops": [
        "Police Plaza (পুলিস প্লাজা)",
        "Gulshan 1 (গুলশান ১)",
        "Gulshan 2 (গুলশান ২)"
      ]
    },
    {
      "number": "28",
      "name": "Gazipur-Paribahan",
      "stops": [
        "Motijheel (মতিঝিল)",
        "Paltan (পল্টন)",
        "Kakrail (কাকরাইল)",
        "Shantinagar (শান্তিনগর)",
        "Malibaag Moor (মালিবাগ মোড়)",
        "Mouchak (মৌচাক)",
        "Mogbazar (মগবাজার)",
        "Sat rasta (সাত রাস্তা)",
        "Nabisco (নাবিস্কো)",
        "Mohakhali (মহাখালী)",
        "Chairman Bari (চেয়ারম্যান বাড়ী)",
        "Sainik Club (সৈনিক ক্লাব)",
        "Kakali (কাকলী)",
        "Banani (বনানী)",
        "Staff Road (স্টাফ রোড)",
        "MES (এমইএস)",
        "Shewra (শেওড়া)",
        "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
        "Khilkhet (খিলক্ষেত)",
        "Airport (বিমানবন্দর)",
        "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
        "Rajlakshmi (রাজলক্ষ্মী)",
        "Azampur (আজমপুর)",
        "House Building (হাউজ বিল্ডিং)",
        "Abdullahpur (আব্দুল্লাহপুর)",
        "Tongi (টঙ্গী)",
        "Tongi Station Road (টঙ্গী স্টেশন রোড)",
        "Mill Gate (মিল গেট)",
        "Board Bazar (বোর্ড বাজার)",
        "Gazipur Chourasta (গাজীপুর চৌরাস্তা)",
        "Shib Bari (শিব বাড়ি)"
      ]
    },
    {
      "number": "29",
      "name": "Gulshan-Chaka",
      "stops": [
        "Banani (বনানী)",
        "Gulshan 2 (গুলশান ২)",
        "Notun Bazar (নতুন বাজার)"
      ]
    },
    {
      "number": "30",
      "name": "Itihash (ইতিহাস)",
      "stops": [
        "Mirpur 14 (মিরপুর ১৪)",
        "Mirpur 10 (মিরপুর ১০)",
        "Mirpur 2 (মিরপুর ২)",
        "Sony Cinema Hall (সনি সিনেমা হল)",
        "Ansar Camp (আনসার ক্যাম্প)",
        "Technical (টেকনিক্যাল)",
        "Gabtoli (গাবতলি)",
        "Amin Bazar (আমিন বাজার)",
        "Hemayetpur (হেমায়েতপুর)",
        "Savar (সাভার)",
        "Nobinagar (নবীনগর)",
        "Baipayl (বাইপাইল)",
        "Zirani Bazar (জিরানী বাজার)",
        "Nandan Park (নন্দন পার্ক)",
        "Chandra (চন্দ্রা)"
      ]
    },
    {
      "number": "31",
      "name": "Malancha",
      "stops": [
        "Mohammadpur (মোহাম্মদপুর)",
        "Shankar (শঙ্কর)",
        "Star Kabab (স্টার কাবাব)",
        "Dhanmondi 15 (ধানমন্ডি ১৫)",
        "Jigatola (জিগাতোলা)",
        "City College (সিটি কলেজ)",
        "Science Lab (বিজ্ঞান গবেষণা প্রযুক্তি)",
        "Bata Signal (বাটা সিগন্যাল)",
        "Shahbag (শাহবাগ)",
        "Matsya Bhaban (মৎস্য ভবন)",
        "High Court (উচ্চ আদালত)",
        "Press Club (প্রেস ক্লাব)",
        "Paltan (পল্টন)",
        "GPO (জিপিও)",
        "Gulistan (গুলিস্তান)",
        "Dayagonj (দয়াগঞ্জ)",
        "Dhupkhola (ধুপখোলা)"
      ]
    },
    {
      "number": "32",
      "name": "Manjil",
      "stops": [
        "Chittagong Road (চট্টগ্রাম রোড)",
        "Sign Board (সাইন বোর্ড)",
        "Matuail (মাতুয়াইল)",
        "Rayerbag (রায়েরবাগ)",
        "Shonir Akhra (শনির আখরা)",
        "Jatrabari (যাত্রাবাড়ি)",
        "Sayapabad (সায়াপাবাদ)",
        "Gulistan (গুলিস্তান)",
        "GPO (জিপিও)",
        "Paltan (পল্টন)",
        "Kakrail (কাকরাইল)",
        "Malibaag Moor (মালিবাগ মোড়)",
        "Mouchak (মৌচাক)",
        "Mogbazar (মগবাজার)"
      ]
    },
    {
      "number": "33",
      "name": "Modhumita",
      "stops": [
        "Chiriyakhana (চিরিয়াখানা)",
        "Sony Cinema Hall (সনি সিনেমা হল)",
        "Mirpur 2 (মিরপুর ২)",
        "Mirpur 1 (মিরপুর ১)",
        "Ansar Camp (আনসার ক্যাম্প)",
        "Technical (টেকনিক্যাল)",
        "Kallyanpur (কল্যাণপুর)",
        "Shyamoli (শ্যামলী)",
        "Shishu Mela (শিশু মেলা)",
        "Agargaon (আগারগাঁও)",
        "Bijoy Sarani (বিজয় সারাণী)",
        "Jahangir Gate (জাহাঙ্গীর গেট)",
        "Mohakhali (মহাখালী)",
        "Wireless (ওয়্যারলেস)",
        "Abdullahpur (আব্দুল্লাহপুর)",
        "Badda Link Road (বাড্ডা লিংক রোড)",
        "Merul Badda (মেরুল বাড্ডা)",
        "Rampura Bridge (রামপুরা ব্রিজ)",
        "Banasree (বনশ্রী)"
      ]
    },
    {
      "number": "34",
      "name": "Moumita",
      "stops": [
        "Chasara (চাষারা)",
        "Shibu Market (শিবু মার্কেট)",
        "Jalkuri (জলকুড়ি)",
        "Sign Board (সাইন বোর্ড)",
        "Matuail (মাতুয়াইল)",
        "Rayerbag (রায়েরবাগ)",
        "Shonir Akhra (শনির আখরা)",
        "Jatrabari (যাত্রাবাড়ি)",
        "Sayapabad (সায়াপাবাদ)",
        "Gulistan (গুলিস্তান)",
        "Chankhar Pul (চাঁকহার পুল)",
        "Bakshi Bazar (বকশী বাজার)",
        "Azimpur (আজিমপুর)",
        "Nilkhet (নীলক্ষেত)",
        "New Market (নিউ মার্কেট)",
        "City College (সিটি কলেজ)",
        "Kalabagan (কলাবাগান)",
        "Dhanmondi 32 (ধানমন্ডি ৩২)",
        "Dhanmondi 27 (ধানমন্ডি ২৭)",
        "Asad Gate (আসাদ গেট)",
        "College Gate (কলেজ গেট)",
        "Shishu Mela (শিশু মেলা)",
        "Shyamoli (শ্যামলী)",
        "Kallyanpur (কল্যাণপুর)",
        "Darussalam (দারুস্সালাম)",
        "Technical (টেকনিক্যাল)",
        "Gabtoli (গাবতলি)",
        "Amin Bazar (আমিন বাজার)",
        "Hemayetpur (হেমায়েতপুর)",
        "Savar (সাভার)",
        "Baipayl (বাইপাইল)",
        "Zirani Bazar (জিরানী বাজার)",
        "Nandan Park (নন্দন পার্ক)",
        "Chandra (চন্দ্রা)"
      ]
    },
    {
      "number": "35",
      "name": "Paristhan",
      "stops": [
        "Bosila (বসিলা)",
        "Mohammadpur (মোহাম্মদপুর)",
        "Asad Gate (আসাদ গেট)",
        "College Gate (কলেজ গেট)",
        "Shyamoli (শ্যামলী)",
        "Kallyanpur (কল্যাণপুর)",
        "Darussalam (দারুস্সালাম)",
        "Technical (টেকনিক্যাল)",
        "Bangla College (বাংলা কলেজ)",
        "Tolarbag (টোলারবাগ)",
        "Ansar Camp (আনসার ক্যাম্প)",
        "Mirpur 1 (মিরপুর ১)",
        "Mirpur 2 (মিরপুর ২)",
        "Mirpur 10 (মিরপুর ১০)",
        "Mirpur 11 (মিরপুর ১১)",
        "Purobi (পুরবী)",
        "Kalshi (কালশী)",
        "ECB Square (ইসিবি স্কয়ার)",
        "MES (এমইএস)",
        "Shewra (শেওড়া)",
        "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
        "Khilkhet (খিলক্ষেত)",
        "Airport (বিমানবন্দর)",
        "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
        "Rajlakshmi (রাজলক্ষ্মী)",
        "House Building (হাউজ বিল্ডিং)",
        "Abdullahpur (আব্দুল্লাহপুর)"
      ]
    },
    {
      "number": "36",
      "name": "Projapati",
      "stops": [
        "Bosila (বসিলা)",
        "Mohammadpur (মোহাম্মদপুর)",
        "Asad Gate (আসাদ গেট)",
        "College Gate (কলেজ গেট)",
        "Shyamoli (শ্যামলী)",
        "Kallyanpur (কল্যাণপুর)",
        "Darussalam (দারুস্সালাম)",
        "Technical (টেকনিক্যাল)",
        "Bangla College (বাংলা কলেজ)",
        "Ansar Camp (আনসার ক্যাম্প)",
        "Mirpur 1 (মিরপুর ১)",
        "Mirpur 2 (মিরপুর ২)",
        "Mirpur 10 (মিরপুর ১০)",
        "Mirpur 11 (মিরপুর ১১)",
        "Purobi (পুরবী)",
        "Kalshi (কালশী)",
        "ECB Square (ইসিবি স্কয়ার)",
        "MES (এমইএস)",
        "Shewra (শেওড়া)",
        "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
        "Khilkhet (খিলক্ষেত)",
        "Airport (বিমানবন্দর)",
        "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
        "Rajlakshmi (রাজলক্ষ্মী)",
        "House Building (হাউজ বিল্ডিং)",
        "Abdullahpur (আব্দুল্লাহপুর)",
        "Kamarpara (কামারপাড়া)"
      ]
    },
    {
      "number": "37",
      "name": "Provati-Banasree",
      "stops": [
        "Fulbaria (ফুলবাড়িয়া)",
        "Golap Shah Mazar (গোলাপ শাহ মাজার)",
        "GPO (জিপিও)",
        "Paltan (পল্টন)",
        "Kakrail (কাকরাইল)",
        "Shantinagar (শান্তিনগর)",
        "Malibaag Moor (মালিবাগ মোড়)",
        "Mouchak (মৌচাক)",
        "Mogbazar (মগবাজার)",
        "Sat rasta (সাত রাস্তা)",
        "Nabisco (নাবিস্কো)",
        "Mohakhali (মহাখালী)",
        "Chairman Bari (চেয়ারম্যান বাড়ী)",
        "Banani (বনানী)",
        "Kakali (কাকলী)",
        "Staff Road (স্টাফ রোড)",
        "MES (এমইএস)",
        "Shewra (শেওড়া)",
        "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
        "Khilkhet (খিলক্ষেত)",
        "Airport (বিমানবন্দর)",
        "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
        "Rajlakshmi (রাজলক্ষ্মী)",
        "Azampur (আজমপুর)",
        "House Building (হাউজ বিল্ডিং)",
        "Abdullahpur (আব্দুল্লাহপুর)",
        "Tongi (টঙ্গী)",
        "Tongi Station Road (টঙ্গী স্টেশন রোড)",
        "Mill Gate (মিল গেট)",
        "Board Bazar (বোর্ড বাজার)",
        "Gazipur Chourasta (গাজীপুর চৌরাস্তা)",
        "Joydebpur (জয়দেবপুর)",
        "Sreepur (শ্রীপুর)",
        "Barmi (বরমী)"
      ]
    },
    {
      "number": "38",
      "name": "Raida",
      "stops": [
        "Postogola (পোস্তগোলা)",
        "Dholairpar (ধলাইড়পাড়)",
        "Jatrabari (যাত্রাবাড়ি)",
        "Janapoth Moor (জনপথ মোড়)",
        "Sayapabad (সায়াপাবাদ)",
        "Mugdapara (মুগদাপাড়া)",
        "Bashabo (বাসাবো)",
        "Khilgaon (খিলগাঁও)",
        "Malibagh Railgate (মালিবাগ রেলগেট)",
        "Rampura Bazar (রামপুরা বাজার)",
        "Rampura Bridge (রামপুরা ব্রিজ)",
        "Merul Badda (মেরুল বাড্ডা)",
        "Badda (বাড্ডা)",
        "Uttar Badda (উত্তর বাড্ডা)",
        "Bashtola (বাঁশতলা)",
        "Notun Bazar (নতুন বাজার)",
        "Nadda (নদ্দা)",
        "Bashundhara (বসুন্ধরা)",
        "Jamuna Future Park (যমুনা ফিউচার পার্ক)",
        "Kuril Chourasta (কুড়িল চৌরাস্তা)",
        "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
        "Khilkhet (খিলক্ষেত)",
        "Airport (বিমানবন্দর)",
        "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
        "Rajlakshmi (রাজলক্ষ্মী)",
        "Azampur (আজমপুর)",
        "House Building (হাউজ বিল্ডিং)",
        "Dia Bari (দিয়া বাড়ি)"
      ]
    },
    {
      "number": "39",
      "name": "Rajdhani",
      "stops": [
        "Hemayetpur (হেমায়েতপুর)",
        "Gabtoli (গাবতলি)",
        "Technical (টেকনিক্যাল)",
        "Ansar Camp (আনসার ক্যাম্প)",
        "Mirpur 1 (মিরপুর ১)",
        "Sony Cinema Hall (সনি সিনেমা হল)",
        "Mirpur 2 (মিরপুর ২)",
        "Mirpur 10 (মিরপুর ১০)",
        "Mirpur 11 (মিরপুর ১১)",
        "Purobi (পুরবী)",
        "Kalshi (কালশী)",
        "ECB Square (ইসিবি স্কয়ার)",
        "MES (এমইএস)",
        "Shewra (শেওড়া)",
        "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
        "Jamuna Future Park (যমুনা ফিউচার পার্ক)",
        "Bashundhara (বসুন্ধরা)",
        "Nadda (নদ্দা)",
        "Notun Bazar (নতুন বাজার)",
        "Bashtola (বাঁশতলা)",
        "Shahjadpur (শাহজাদপুর)",
        "Uttar Badda (উত্তর বাড্ডা)",
        "Badda (বাড্ডা)",
        "Madhya Badda (মধ্য বাড্ডা)",
        "Merul Badda (মেরুল বাড্ডা)",
        "Rampura Bridge (রামপুরা ব্রিজ)",
        "Banasree (বনশ্রী)",
        "Demra Staff Quarter (ডেমরা স্টাফ কোয়ার্টার)"
      ]
    },
    {
      "number": "40",
      "name": "Robrob",
      "stops": [
        "Gabtoli (গাবতলি)",
        "Technical (টেকনিক্যাল)",
        "Ansar Camp (আনসার ক্যাম্প)",
        "Mirpur 1 (মিরপুর ১)",
        "Mirpur 2 (মিরপুর ২)",
        "Mirpur 10 (মিরপুর ১০)",
        "Purobi (পুরবী)",
        "Kalshi (কালশী)",
        "ECB Square (ইসিবি স্কয়ার)",
        "MES (এমইএস)",
        "Banani (বনানী)",
        "Kakali (কাকলী)",
        "Abdullahpur (আব্দুল্লাহপুর)",
        "Abdullahpur (আব্দুল্লাহপুর)",
        "Badda Link Road (বাড্ডা লিংক রোড)",
        "Merul Badda (মেরুল বাড্ডা)",
        "Rampura Bridge (রামপুরা ব্রিজ)",
        "Banasree (বনশ্রী)"
      ]
    },
    {
      "number": "41",
      "name": "Shatabdi",
      "stops": [
        "Motijheel (মতিঝিল)",
        "Paltan (পল্টন)",
        "Kakrail (কাকরাইল)",
        "Malibaag Moor (মালিবাগ মোড়)",
        "Mouchak (মৌচাক)",
        "Mogbazar (মগবাজার)",
        "Sat rasta (সাত রাস্তা)",
        "Nabisco (নাবিস্কো)",
        "Mohakhali (মহাখালী)",
        "Chairman Bari (চেয়ারম্যান বাড়ী)",
        "Banani (বনানী)",
        "Kakali (কাকলী)",
        "Staff Road (স্টাফ রোড)",
        "MES (এমইএস)",
        "Shewra (শেওড়া)",
        "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
        "Khilkhet (খিলক্ষেত)",
        "Airport (বিমানবন্দর)",
        "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
        "Rajlakshmi (রাজলক্ষ্মী)",
        "Azampur (আজমপুর)",
        "House Building (হাউজ বিল্ডিং)",
        "Abdullahpur (আব্দুল্লাহপুর)",
        "Kamarpara (কামারপাড়া)"
      ]
    },
    {
      "number": "42",
      "name": "Shikhor",
      "stops": [
        "Mirpur 12 (মিরপুর ১২)",
        "Pallabi (পল্লবী)",
        "Purobi (পুরবী)",
        "Mirpur 11 (মিরপুর ১১)",
        "Mirpur 10 (মিরপুর ১০)",
        "Kazipara (কাজীপাড়া)",
        "Shewrapara (শেওড়াপাড়া)",
        "Taltola (তালতলা)",
        "Agargaon (আগারগাঁও)",
        "Bijoy Sarani (বিজয় সারাণী)",
        "Farmgate (ফার্মগেট)",
        "Kawran Bazar (কাওরান বাজার)",
        "Bangla Motor (বাংলা মোটর)",
        "Shahbag (শাহবাগ)",
        "Matsya Bhaban (মৎস্য ভবন)",
        "High Court (উচ্চ আদালত)",
        "Press Club (প্রেস ক্লাব)",
        "Paltan (পল্টন)",
        "GPO (জিপিও)",
        "Gulistan (গুলিস্তান)",
        "Janapoth Moor (জনপথ মোড়)",
        "Jatrabari (যাত্রাবাড়ি)"
      ]
    },
    {
      "number": "43",
      "name": "Siam",
      "stops": [
        "Banasree (বনশ্রী)",
        "Rampura Bridge (রামপুরা ব্রিজ)",
        "Merul Badda (মেরুল বাড্ডা)",
        "Badda (বাড্ডা)",
        "Shahjadpur (শাহজাদপুর)",
        "Bashtola (বাঁশতলা)",
        "Notun Bazar (নতুন বাজার)",
        "Nadda (নদ্দা)",
        "Bashundhara (বসুন্ধরা)",
        "Jamuna Future Park (যমুনা ফিউচার পার্ক)",
        "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
        "Khilkhet (খিলক্ষেত)",
        "Airport (বিমানবন্দর)",
        "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
        "Rajlakshmi (রাজলক্ষ্মী)",
        "Azampur (আজমপুর)",
        "House Building (হাউজ বিল্ডিং)",
        "Abdullahpur (আব্দুল্লাহপুর)",
        "Kamarpara (কামারপাড়া)",
        "Dhour (ঢাউর)",
        "Beribadh (বেড়িবাঁধ)",
        "Ashulia (আশুলিয়া)",
        "Zirabo (জিরাবো)",
        "Fantasy Kingdom (ফ্যান্টাসি কিংডম)",
        "Jamgora (জামগড়া)",
        "Shimultola (সিমুলতলা)",
        "Baipayl (বাইপাইল)",
        "Palli Bidyut (পল্লী বিদ্যুৎ)",
        "Savar Cantonment (সাভার ক্যান্টনমেন্ট)",
        "Nobinagar (নবীনগর)"
      ]
    },
    {
      "number": "44",
      "name": "Thikana",
      "stops": [
        "Shonbari Sreenagar (শনবাড়ি শ্রীনগর)",
        "Nimtola (নিমতলা)",
        "Kuchimura (কুচিমুড়া)",
        "Rajendrapur (রাজেন্দ্রপুর)",
        "Hasnabad (হাসনাবাদ)",
        "Postogola (পোস্তগোলা)",
        "Jurain (জুরাইন)",
        "Dholairpar (ধলাইড়পাড়)",
        "Jatrabari (যাত্রাবাড়ি)",
        "Sayapabad (সায়াপাবাদ)",
        "Gulistan (গুলিস্তান)",
        "Chankhar Pul (চাঁকহার পুল)",
        "Bakshi Bazar (বকশী বাজার)",
        "Azimpur (আজিমপুর)",
        "Nilkhet (নীলক্ষেত)",
        "New Market (নিউ মার্কেট)",
        "City College (সিটি কলেজ)",
        "Kalabagan (কলাবাগান)",
        "Dhanmondi 32 (ধানমন্ডি ৩২)",
        "Dhanmondi 27 (ধানমন্ডি ২৭)",
        "Asad Gate (আসাদ গেট)",
        "College Gate (কলেজ গেট)",
        "Shishu Mela (শিশু মেলা)",
        "Shyamoli (শ্যামলী)",
        "Kallyanpur (কল্যাণপুর)",
        "Darussalam (দারুস্সালাম)",
        "Technical (টেকনিক্যাল)",
        "Gabtoli (গাবতলি)",
        "Amin Bazar (আমিন বাজার)",
        "Hemayetpur (হেমায়েতপুর)",
        "Savar (সাভার)",
        "Baipayl (বাইপাইল)",
        "Zirani Bazar (জিরানী বাজার)",
        "Nandan Park (নন্দন পার্ক)",
        "Chandra (চন্দ্রা)"
      ]
    },
    {
      "number": "45",
      "name": "Trust Transport Services",
      "stops": [
        "Mirpur 10 (মিরপুর ১০)",
        "Mirpur 13 (মিরপুর ১৩)",
        "Mirpur 14 (মিরপুর ১৪)",
        "Kochukhet (কচুক্ষেত)",
        "Sainik Club (সৈনিক ক্লাব)",
        "Banani (বনানী)"
      ]
    },
    {
      "number": "46",
      "name": "Trust Transport",
      "stops": [
        "Mirpur (DOHS) (মিরপুর - ডিওএইচএস)",
        "Kalshi (কালশী)",
        "ECB Square (ইসিবি স্কয়ার)",
        "Garrison (Cantonment) (গ্যারিসন - ক্যান্টনমেন্ট)",
        "Adamjee School (আদমজী স্কুল)",
        "Workshop (ওয়ার্কশপ)",
        "Saudi Colony (সৌদি কলোনি)",
        "Jahangir Gate (জাহাঙ্গীর গেট)",
        "Farmgate (ফার্মগেট)",
        "Kawran Bazar (কাওরান বাজার)"
      ]
    },
    {
      "number": "47",
      "name": "Turag",
      "stops": [
        "Jatrabari (যাত্রাবাড়ি)",
        "Sayapabad (সায়াপাবাদ)",
        "Mugdapara (মুগদাপাড়া)",
        "Bashabo (বাসাবো)",
        "Khilgaon (খিলগাঁও)",
        "Malibaag Moor (মালিবাগ মোড়)",
        "Rampura Bazar (রামপুরা বাজার)",
        "Rampura Bridge (রামপুরা ব্রিজ)",
        "Merul Badda (মেরুল বাড্ডা)",
        "Badda (বাড্ডা)",
        "Uttar Badda (উত্তর বাড্ডা)",
        "Bashtola (বাঁশতলা)",
        "Notun Bazar (নতুন বাজার)",
        "Nadda (নদ্দা)",
        "Bashundhara (বসুন্ধরা)",
        "Jamuna Future Park (যমুনা ফিউচার পার্ক)",
        "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
        "Khilkhet (খিলক্ষেত)",
        "Airport (বিমানবন্দর)",
        "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
        "Rajlakshmi (রাজলক্ষ্মী)",
        "Azampur (আজমপুর)",
        "House Building (হাউজ বিল্ডিং)",
        "Abdullahpur (আব্দুল্লাহপুর)",
        "Tongi (টঙ্গী)",
        "Tongi Station Road (টঙ্গী স্টেশন রোড)"
      ]
    },
    {
      "number": "48",
      "name": "Victor Classic",
      "stops": [
        "Sadarghat (সদরঘাট)",
        "Ray Saheb Bazar (রায় সাহেব বাজার)",
        "Naya Bazar (নয়া বাজার)",
        "Golap Shah Mazar (গোলাপ শাহ মাজার)",
        "GPO (জিপিও)",
        "Paltan (পল্টন)",
        "Kakrail (কাকরাইল)",
        "Shantinagar (শান্তিনগর)",
        "Malibaag Moor (মালিবাগ মোড়)",
        "Mouchak (মৌচাক)",
        "Malibagh Railgate (মালিবাগ রেলগেট)",
        "Hazipara (হাজীপাড়া)",
        "Rampura Bazar (রামপুরা বাজার)",
        "Rampura Bridge (রামপুরা ব্রিজ)",
        "Merul Badda (মেরুল বাড্ডা)",
        "Badda (বাড্ডা)",
        "Shahjadpur (শাহজাদপুর)",
        "Bashtola (বাঁশতলা)",
        "Notun Bazar (নতুন বাজার)",
        "Nadda (নদ্দা)",
        "Bashundhara (বসুন্ধরা)",
        "Jamuna Future Park (যমুনা ফিউচার পার্ক)",
        "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
        "Khilkhet (খিলক্ষেত)",
        "Airport (বিমানবন্দর)",
        "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
        "Rajlakshmi (রাজলক্ষ্মী)",
        "House Building (হাউজ বিল্ডিং)",
        "Abdullahpur (আব্দুল্লাহপুর)",
        "Kamarpara (কামারপাড়া)"
      ]
    },
    {
      "number": "49",
      "name": "VIP",
      "stops": [
        "Azimpur (আজিমপুর)",
        "Nilkhet (নীলক্ষেত)",
        "New Market (নিউ মার্কেট)",
        "City College (সিটি কলেজ)",
        "Kalabagan (কলাবাগান)",
        "Banani (বনানী)",
        "Kakali (কাকলী)",
        "MES (এমইএস)",
        "Shewra (শেওড়া)",
        "Kuril Bishwa Road (কুড়িল বিশ্ব রোড)",
        "Khilkhet (খিলক্ষেত)",
        "Airport (বিমানবন্দর)",
        "Jashimuddin (Uttara) (জসিমউদ্দিন - উত্তরা)",
        "Rajlakshmi (রাজলক্ষ্মী)",
        "Azampur (আজমপুর)",
        "House Building (হাউজ বিল্ডিং)",
        "Abdullahpur (আব্দুল্লাহপুর)",
        "Tongi (টঙ্গী)",
        "Tongi Station Road (টঙ্গী স্টেশন রোড)",
        "Mill Gate (মিল গেট)",
        "Board Bazar (বোর্ড বাজার)",
        "Gazipur Chourasta (গাজীপুর চৌরাস্তা)"
      ]
    },
    {
      "number": "50",
      "name": "Welcome",
      "stops": [
        "Nandan Park (নন্দন পার্ক)",
        "Zirani Bazar (জিরানী বাজার)",
        "Baipayl (বাইপাইল)",
        "Nobinagar (নবীনগর)",
        "Savar (সাভার)",
        "Hemayetpur (হেমায়েতপুর)",
        "Amin Bazar (আমিন বাজার)",
        "Gabtoli (গাবতলি)",
        "Technical (টেকনিক্যাল)",
        "Kallyanpur (কল্যাণপুর)",
        "Shyamoli (শ্যামলী)",
        "Shishu Mela (শিশু মেলা)",
        "College Gate (কলেজ গেট)",
        "Asad Gate (আসাদ গেট)",
        "Khamar Bari (খামার বাড়ি)",
        "Farmgate (ফার্মগেট)",
        "Kawran Bazar (কাওরান বাজার)",
        "Bangla Motor (বাংলা মোটর)",
        "Shahbag (শাহবাগ)",
        "High Court (উচ্চ আদালত)",
        "Press Club (প্রেস ক্লাব)",
        "Paltan (পল্টন)",
        "GPO (জিপিও)",
        "Gulistan (গুলিস্তান)",
        "Motijheel (মতিঝিল)"
      ]
    }
  ];

function findRoutes(from, to) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    const matchingRoutes = busRoutes.filter(route => {
        const fromIndex = route.stops.indexOf(from);
        const toIndex = route.stops.indexOf(to);
        return fromIndex !== -1 && toIndex !== -1 && fromIndex !== toIndex;
    });

    if (matchingRoutes.length > 0) {
        resultsDiv.innerHTML = `
            <div class="section-header">
                <h3>বাস তালিকা (${matchingRoutes.length}):</h3>
            </div>
            <div class="bus-cards search-bus-cards"></div>    
        `;
        
        const cardsContainer = resultsDiv.querySelector('.search-bus-cards');
        matchingRoutes.forEach(route => {
            const fromIndex = route.stops.indexOf(from);
            const toIndex = route.stops.indexOf(to);
            let stopsInRoute, stopCount;
            
            if (fromIndex < toIndex) {
                stopsInRoute = route.stops.slice(fromIndex, toIndex + 1);
                stopCount = toIndex - fromIndex;
            } else {
                stopsInRoute = route.stops.slice(toIndex, fromIndex + 1).reverse();
                stopCount = fromIndex - toIndex;
            }
            
            const fare = calculateFare(route.number, stopCount);
            const detailsFile = routeNameToFile(route.name);
            const detailsHref = `bus_routes/${detailsFile}`;
            const travelTime = calculateTravelTime(route, fromIndex, toIndex, stopCount);
            
            const routeElement = document.createElement('div');
            routeElement.className = 'bus-find';
            routeElement.innerHTML = `
                <div class="bus-card-header">
                    <h3>Route ${route.number}: ${route.name}</h3>
                </div>
                <div class="bus-card-content">
                    <div class="info-row">
                        <span class="info-label" style="font-weight: bold;">Stops:</span>
                        <span class="info-value">${formatStops(stopsInRoute, from, to)}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label" style="font-weight: bold;">Fare:</span>
                        <span class="info-value">৳${fare.toFixed(2)}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label" style="font-weight: bold;">Half Pass:</span>
                        <span class="info-value">Allow (Student Only)</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label" style="font-weight: bold;">Average time:</span>
                        <span class="info-value">${travelTime}</span>
                    </div>
                </div>
                <div class="bus-card-footer">
                    <a class="btn view-details" href="${detailsHref}">View Details</a>
                </div>
            `;
            cardsContainer.appendChild(routeElement);
        });
    } else {
        resultsDiv.innerHTML = `
            <div class="error">
                <h3>No Direct Service Available</h3>
                <p>We couldn't find direct buses between ${from} and ${to}.</p>
                <p>Please try different stations or consider changing routes.</p>
            </div>
        `;
    }
}

function calculateFare(routeNumber, stopCount) {
    const baseFare = baseFares[routeNumber] || 10;
    const increment = fareIncrements[routeNumber] || 2.5;
    
    // Calculate distance-based fare
    let fare = baseFare + (increment * stopCount);
    
    // Apply peak hour surcharge (7-10 AM and 4-8 PM)
    const currentHour = new Date().getHours();
    const isPeakHour = (currentHour >= 7 && currentHour <= 10) || (currentHour >= 16 && currentHour <= 20);
    if (isPeakHour) {
        fare *= 1.1; // 10% surcharge during peak hours
    }
    
    // Apply minimum fare
    const minimumFare = 10;
    fare = Math.max(fare, minimumFare);
    
    // Round to nearest 0.5
    return Math.ceil(fare * 2) / 2;
}

function formatStops(stops, from, to) {
    if (stops.length === 0) return '';
    const first = stops[0];
    const last = stops[stops.length - 1];
    const highlight = stop => `<span class="highlight">${stop}</span>`;
    return `${highlight(first)} → ${highlight(last)}`;
}

function calculateTime(stopCount) {
    return stopCount * 5 + Math.floor(Math.random() * 5 * stopCount);
}

function showError(message) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <div class="error">
            ${message}
        </div>
    `;
}

function routeNameToFile(name) {
    const specialCases = {
        'Azmeri Glory Limited': 'azmeri-glory.html',
        '6 No. Motijheel Banani Transport': '6-no.html',
        'Basumati Transport': 'basumati-transport.html',
        'Best Satabdi': 'best-satabdi.html',
        'Trust Transport Services': 'trust-transport-services.html',
        'Bikalpa Super': 'bikalpa-super.html',
        'Bikash Paribahan': 'bikash-paribahan.html',
        'Provati Banasree': 'provati-banasree.html',
        'VIP': 'vip.html'
    };
    
    let baseName = name.replace(/\s*\(.*?\)/, '').trim();
    if (specialCases[baseName]) {
        return specialCases[baseName];
    }
    return baseName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '') + '.html';
}

function calculateTravelTime(route, fromIndex, toIndex, stopCount) {
    const baseTimePerStop = 3; // minutes
    const trafficDelay = getTrafficDelay();
    
    // Calculate basic travel time
    let totalTime = stopCount * baseTimePerStop;
    
    // Add traffic delay
    totalTime += trafficDelay;
    
    // Add buffer for terminal stops
    if (fromIndex === 0 || toIndex === route.stops.length - 1) {
        totalTime += 5;
    }
    
    // Format the time
    if (totalTime >= 60) {
        const hours = Math.floor(totalTime / 60);
        const minutes = Math.round(totalTime % 60);
        return minutes > 0 ? `${hours} hr ${minutes} mins` : `${hours} hr`;
    }
    return `${Math.round(totalTime)} mins`;
}

function getTrafficDelay() {
    const currentHour = new Date().getHours();
    
    // Morning rush hour (8-10 AM)
    if (currentHour >= 8 && currentHour <= 10) {
        return 15;
    }
    
    // Evening rush hour (5-8 PM)
    if (currentHour >= 17 && currentHour <= 20) {
        return 20;
    }
    
    // Regular hours
    if (currentHour >= 6 && currentHour <= 22) {
        return 10;
    }
    
    // Late night/early morning
    return 5;
}

// Initialize the application
function initializeApp() {
    // Get all unique stops from all routes
    const allStops = [...new Set(busRoutes.flatMap(route => route.stops))];
    allStops.sort();

    // Populate From dropdown
    const fromSelect = document.getElementById('from');
    allStops.forEach(stop => {
        const option = new Option(stop, stop);
        fromSelect.add(option);
    });

    // Populate To dropdown
    const toSelect = document.getElementById('to');
    allStops.forEach(stop => {
        const option = new Option(stop, stop);
        toSelect.add(option);
    });

    // Initialize stop times for routes
    initializeRouteTimes();
}

// Initialize route times
function initializeRouteTimes() {
    busRoutes.forEach(route => {
        if (!route.stopTimes || route.stopTimes.length !== route.stops.length) {
            route.stopTimes = route.stops.map((_, i) => i === 0 ? "Starting Point" : `${i * 5} mins`);
        }
    });

    // Update Gazipur Paribahan route times
    initializeGazipurRoute();
}

// Initialize Gazipur route times
function initializeGazipurRoute() {
    const gazipurRoute = busRoutes.find(r => r.number === "21");
    if (!gazipurRoute) return;

    const abdullahpurIdx = gazipurRoute.stops.indexOf("Abdullahpur (আব্দুল্লাহপুর)");
    const airportIdx = gazipurRoute.stops.indexOf("Airport (বিমানবন্দর)");
    
    if (abdullahpurIdx === -1 || airportIdx === -1) return;

    let abdTime = 0;
    if (gazipurRoute.stopTimes && gazipurRoute.stopTimes[abdullahpurIdx]) {
        abdTime = parseTimeToMinutes(gazipurRoute.stopTimes[abdullahpurIdx]);
    }

    const newAirportTime = abdTime + 25;
    let airportTimeStr = formatTime(newAirportTime);

    if (!gazipurRoute.stopTimes) {
        gazipurRoute.stopTimes = gazipurRoute.stops.map((_, i) => i === 0 ? "Starting Point" : `${i * 5} mins`);
    }

    gazipurRoute.stopTimes[airportIdx] = airportTimeStr;
    let lastTime = newAirportTime;

    for (let i = airportIdx + 1; i < gazipurRoute.stops.length; i++) {
        lastTime += 5;
        gazipurRoute.stopTimes[i] = formatTime(lastTime);
    }
}

// Format time helper
function formatTime(minutes) {
    if (minutes >= 60) {
        const hr = Math.floor(minutes / 60);
        const min = minutes % 60;
        return min > 0 ? `${hr} hr ${min} mins` : `${hr} hr`;
    }
    return `${minutes} mins`;
}

// Call initialization when DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp);

        
