import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ClientsCredentials() {
  const navigate = useNavigate();

  const clients = [
    "Kalpataru Limited, Mumbai",
    "Gesco Corporation Ltd. (Presently Mahindra Lifespaces Ltd.), Mumbai",
    "ITD Cementation India Limited, Mumbai",
    "Mahindra & Mahindra Realty & Infrastructures Ltd., Mumbai",
    "Everest Developers, Thane",
    "Evershine Builders Pvt. Ltd., Mumbai",
    "Puranik Developers, Thane",
    "Peninsula Land Limited, Mumbai",
    "Heritage Real Estate Developers, Goa",
    "Vishwa Lad Parishad Trust, Mumbai",
    "Vesta Exim Pvt. Ltd., Surat",
    "Jay Ambe Developers, Surat",
    "Sheetal Manufacturing Co. (KIAH Diamonds), Mumbai",
    "S. Vinod Kumar Diamond Pvt. Ltd., Surat",
    "Laxmi Jewellers Pvt. Ltd. (Cygnus Diamonds), Mumbai",
    "Patvin Corporation, Mumbai",
    "New Kem Engineering Pvt. Ltd., Mumbai",
    "Bearlocher, Fort, Mumbai",
    "B.C.M. Group, Indore",
    "Apollo Princes Realty Pvt. Ltd., Indore",
    "Apollo Creations Pvt. Ltd., Indore",
    "Shakti Pumps Pvt. Ltd., Dhar, M.P.",
    "Pitampur Poly Product Ltd., Indore",
    "Silver Realty & Infrastructure Ltd., Indore",
    "Narmada Construction Company, Andheri (W), Mumbai",
    "Circle View Apartment (Kamalji Karnavat), Udaipur",
    "Hotel Raj Darshan, Udaipur",
    "Heritage Hotel, Nathdwara Road, Udaipur",
  ];

  const architects = [
    "Shashi Prabhu & Associates, Wankhede Stadium, Mumbai",
    "Deepak Mehta & Associates, Andheri (E), Mumbai",
    "Architectural Consultants, Goregaon (E), Mumbai",
    "PATT & Panchal Associates, Malad (E), Mumbai",
    "Sanjay Puri Architects, Mahim, Mumbai",
    "Hafeez Contractor, Fort, Mumbai",
    "Access Architects, Hutatma Chowk, Mumbai",
    "Shirali & Associates, Mulund (E), Mumbai",
    "R.M.J.M, Hong Kong",
    "Nimish Choksi & Associates, Athwagate, Surat",
    "Sanjeev Siraskar & Associates, Mapusa, Goa",
    "Sanjay Shrivastava & Associates, Indore",
    "S.S. Ghodke & Associates, Indore",
    "Sanjay Chahjed & Associates, Indore",
    "Ratan Kumar Sachhar, Indore",
    "B.S. Suthakar & Associates, Vashi, Navi Mumbai",
    "V. Paraz & Associates, Mapusa, Goa",
    "Bimal Jariwala & Associates, Ghod Dod Road, Surat",
    "Kalpesh Shah & Associates, Surat",
    "Amitabh Dar & Associates, Manorma Ganj, Indore",
  ];

  const consultants = [
    "Vakil Mehta Seth Consulting Engineers, Fort, Mumbai",
    "Mahimtura Consultants Pvt. Ltd., Brelvi Road, Mumbai",
    "Chempro Expertise Pvt. Ltd., Andheri (E), Mumbai",
    "Mesacon Consulting Engineers, Mumbai",
    "P.K. Sura & Associates, Andheri (E), Mumbai",
    "Sharad R. Shah Consulting Engineers, Fort, Mumbai",
    "Y. N. Sane, Pune (J W Consultants LLP)",
  ];

  const projects = [
    {
      slNo: 28,
      client: "ITD Cementation India Limited",
      clientAddress: "National Plastic Building, A-Subash Road, Vile Parle (East), Mumbai 400057",
      projectName: "Club House Building for Lodha Builders at New Cuffe Parade, Wadala, Mumbai",
      areaOfConstruction: "2,00,000 Sft",
      status: "Completed",
      completionDate: "July 2016",
      architect: "Hafeez Contractor, Mumbai",
      consultant: "JSW Consultants LLP, Pune"
    },
    {
      slNo: 27,
      client: "Peninsula Land Limited (Ashok Piramal Group)",
      clientAddress: "Lower Parel, Mumbai 400013",
      projectName: "Ashok Astoria, Nashik",
      areaOfConstruction: "1,05,000 Sft + 4 Nos. Bldgs of G+4 Floor + 8 Nos. Row Houses",
      status: "Completed",
      completionDate: "May 2014",
      architect: "Hafeez Contractor, Fort, Mumbai",
      consultant: "Y. N. Sane (JSW), Pune"
    },
    {
      slNo: 26,
      client: "Vishwa Lad Parishad",
      clientAddress: "Lad wadi, 2nd floor-terrace, 26-A, V.P. Road, Near C.P. Tank, Mumbai 400004",
      projectName: "Trust Building at Lad Wadi Road No. 04, Near Liberty Garden, Malad (W), Mumbai",
      areaOfConstruction: "42,000 Sft",
      status: "Completed",
      completionDate: "2012",
      architect: "Patt & Panchal Associates, Malad (E), Mumbai",
      consultant: "J.J. KIKANI ASSOCIATES, Kandivali (E), Mumbai"
    },
    {
      slNo: 25,
      client: "Silver Realty & Infrastructure Ltd.",
      clientAddress: "Indore (M.P.)",
      projectName: "Silver Springs, Indore",
      areaOfConstruction: "6 x 10500 = 63,000 Sft",
      status: "Completed",
      completionDate: "2011",
      architect: "R.M.J.M., Hongkong",
      consultant: "Ratan Kumar Sachhar, Indore"
    },
    {
      slNo: 24,
      client: "S. Vinod Kumar Diamonds Pvt. Ltd.",
      clientAddress: "Vardan bldg., Dalagia Muhalla, Mahidhar Pura, Surat (Guj.)",
      projectName: "Diamond factory cum office building at Umiya Chowk, Surat (2 basement + 6 floors)",
      areaOfConstruction: "1,30,000 Sft",
      status: "Completed",
      completionDate: "2011",
      architect: "Nimish Choksi & Associates, Surat",
      consultant: "Bimal Jariwala & Associates, Surat"
    },
    {
      slNo: 23,
      client: "Jay Ambe Developers",
      clientAddress: "Iris Shopping Mall, Opp. Valentine Cinema, Dumas Road, Surat (Guj.)",
      projectName: "Iris Shopping Mall with 3 Multiplex, Dumas Road, Surat (2 basement + 6 floors)",
      areaOfConstruction: "4,10,000 Sft",
      status: "Completed",
      completionDate: "2011",
      architect: "Nimish Choksi & Associates, Surat",
      consultant: "Kapesh Shah & Associates, Surat"
    },
    {
      slNo: 22,
      client: "Vesta Exim Pvt. Ltd.",
      clientAddress: "3rd floor, Dr. Mansukh Lal Tower, Athwa Lines, Surat",
      projectName: "Victoria Palms, Dumas Rd. Nr Airport, Surat (21 units of independent bungalows)",
      areaOfConstruction: "48,300 Sft",
      status: "Completed",
      completionDate: "2010",
      architect: "Nimish Choksi & Associates, Surat",
      consultant: "Bimal Jariwala & Associates, Surat"
    },
    {
      slNo: 21,
      client: "Heritage Real Estate Developers Pvt. Ltd.",
      clientAddress: "303, Kamat Tower, Panjim, Goa",
      projectName: "Heritage Princess, Commercial + Residential Building (basement + 9 floors)",
      areaOfConstruction: "1,15,000 Sft",
      status: "Completed",
      completionDate: "July 2010",
      architect: "Sanjeev Sirasakar & Associates, Goa",
      consultant: "V. Paraz Associates, Mapusa, Goa"
    },
    {
      slNo: 20,
      client: "Apollo Princes Realty Pvt. Ltd.",
      clientAddress: "L.G. Apollo Arcade, Opp Palasia Police Station, Indore (M.P.)",
      projectName: "Commercial Complex at New Siya Gunj, Nava Pura, Indore (M.P.)",
      areaOfConstruction: "1,45,000 Sft",
      status: "Completed",
      completionDate: "August 2007",
      architect: "Sanjay Shrivastav & Associates, Indore",
      consultant: "Abhay Gupta & Associates, Indore"
    },
    {
      slNo: 19,
      client: "Apollo Creations Pvt. Ltd.",
      clientAddress: "L.G. Apollo Arcade, Opp Palasia Police Station, Indore (M.P.)",
      projectName: "Row Houses at Bicholi, Indore (M.P.)",
      areaOfConstruction: "50 Units",
      status: "Completed",
      completionDate: "September 2007",
      architect: "Sanjay Shrivastav & Assts, Indore (M.P.)",
      consultant: "Sanjay Shrivastav & Assts, Indore (M.P.)"
    },
    {
      slNo: 18,
      client: "Laxmi Jewels (Cygnus Diamonds)",
      clientAddress: "SDF-VII, GJ-06, SEZ, Andheri (E), Mumbai",
      projectName: "Office building (Basement + 4 floors), Plot 55, Road No. 15, MIDC Andheri (E), Mumbai",
      areaOfConstruction: "37,000 Sft",
      status: "Completed",
      completionDate: "October 2006",
      architect: "Patt & Panchal Associates, Malad (E), Mumbai",
      consultant: "P.K. Sura & Associates, Andheri (E), Mumbai"
    },
    {
      slNo: 17,
      client: "Patvin Corporation Ltd.",
      clientAddress: "Veena Kelekar Industrial Estate, Byculla (W), Mumbai",
      projectName: "Office building (G + 4 floors) at W-193, MIDC, Kharine, New Mumbai",
      areaOfConstruction: "42,000 Sft",
      status: "Completed",
      completionDate: "January 2006",
      architect: "Vinayak Kharade & Assts, Nerul, New Mumbai",
      consultant: "B.S. Suthankar & Assts, Vashi, New Mumbai"
    },
    {
      slNo: 16,
      client: "Sheetal Manufacturing Co. (Kiah Diamonds)",
      clientAddress: "1001, Prasad Chambers, Opera House, Mumbai",
      projectName: "Office + Factory building at GJ-7, SEZ, Andheri (E), Mumbai (Basement + 7 floors)",
      areaOfConstruction: "95,000 Sft",
      status: "Completed",
      completionDate: "March 2006",
      architect: "Nimish Choksi & Associates, Surat",
      consultant: "Bimal Jariwala & Associates, Surat"
    },
    {
      slNo: 15,
      client: "Evershine Builders & Developers Pvt. Ltd.",
      clientAddress: "Veena Beena Complex, Bandra (West), Mumbai",
      projectName: "Sub-structure work for 44 Nos. residential buildings required for Mivan shuttering super structure works, Vasai (E)",
      areaOfConstruction: "4,50,000 Sft",
      status: "Completed",
      completionDate: "April 2004",
      architect: "Sanjay Puri & Associates, Mahim, Mumbai",
      consultant: "Measacon Consulting Engineers, Mumbai"
    },
    {
      slNo: 14,
      client: "New Kem Engineers Pvt. Ltd.",
      clientAddress: "Mumbai",
      projectName: "M.P. Cricket Stadium, Race Course Road, Indore (M.P.)",
      areaOfConstruction: "For 40,000 seating",
      status: "Completed",
      completionDate: "July 2004",
      architect: "Shashi Prabhu & Associates, Wankhede Stadium, Mumbai",
      consultant: "Shashi Prabhu & Associates, Wankhede Stadium, Mumbai"
    },
    {
      slNo: 13,
      client: "Mahindra Gesco Ltd.",
      clientAddress: "5th floor, Mahindra Tower, Worli, Mumbai",
      projectName: "2 Residential buildings (Substructure works) at Mahindra Garden, Goregaon (West), Mumbai",
      areaOfConstruction: "1,20,000 Sft",
      status: "Completed",
      completionDate: "April 2003",
      architect: "Hafeez Contractor, Fort, Mumbai",
      consultant: "Y. N. Sane, Pune"
    },
    {
      slNo: 12,
      client: "Gesco Corporation Ltd.",
      clientAddress: "World Trade Center, 8th floor, Cuffe Parade, Mumbai",
      projectName: "Great Eastern Links, 5 Nos. residential buildings, Ram Mandir Road, Goregaon (West), Mumbai",
      areaOfConstruction: "2,50,000 Sft",
      status: "Completed",
      completionDate: "June 2002",
      architect: "Access Architects, Hutatma Chowk, Mumbai",
      consultant: "Mahimtura Consultants Pvt. Ltd., Brelvi Road, Mumbai"
    },
    {
      slNo: 11,
      client: "Barlocher",
      clientAddress: "Fort, Mumbai",
      projectName: "Factory Shed, Dewas (M.P.)",
      areaOfConstruction: "28,000 Sft",
      status: "Completed",
      completionDate: "2002",
      architect: "CHEMPRO Expertise Pvt. Ltd., Naka, Andheri (E), Mumbai",
      consultant: "CHEMPRO Expertise Pvt. Ltd., Naka, Andheri (E), Mumbai"
    },
    {
      slNo: 10,
      client: "Kalpataru Soham Property Developers Pvt. Ltd.",
      clientAddress: "111 Maker Chambers IV, Nariman Point, Mumbai",
      projectName: "Siddhachal Ph-III, Residential buildings No. 16, 17 & 18, Pokhran Road No. 02, Thane",
      areaOfConstruction: "1,60,000 Sft",
      status: "Completed",
      completionDate: "September 2001",
      architect: "Shirali & Associates, Mulund (E), Mumbai",
      consultant: "Sharad R. Shah Consulting Engineers, Fort, Mumbai"
    },
    {
      slNo: 9,
      client: "Shakti Pumps Pvt. Ltd.",
      clientAddress: "Sector-01, Pitampur, Dhar (M.P.)",
      projectName: "Factory Extension Work, Sector-01, Pitampur, Dhar (M.P.)",
      areaOfConstruction: "35,000 Sft",
      status: "Completed",
      completionDate: "2001",
      architect: "Sanjay Chajed & Associates, Indore (M.P.)",
      consultant: "Sanjay Chajed & Associates, Indore (M.P.)"
    },
    {
      slNo: 8,
      client: "B.C.M Group",
      clientAddress: "BCM House, Navlakha, A.B. Road, Indore (M.P.)",
      projectName: "Shanti Niketan Club House, Swimming Pool & S. Nos. Bungalows, Bicholi Hapsi, Indore",
      areaOfConstruction: "75,000 Sft",
      status: "Completed",
      completionDate: "November 2001",
      architect: "S.S. Ghodke & Associates, Indore (M.P.)",
      consultant: "S.S. Ghodke & Associates, Indore (M.P.)"
    },
    {
      slNo: 7,
      client: "Kalpataru Overseas Constructions Pvt. Ltd.",
      clientAddress: "111 Maker Chambers IV, Nariman Point, Mumbai",
      projectName: "Office building (Asian Paints head office) at Vakola, Santacruz (E), Mumbai",
      areaOfConstruction: "97,000 Sft",
      status: "Completed",
      completionDate: "March 2001",
      architect: "Architectural Consultants, Goregaon (E), Mumbai",
      consultant: "Vakil Mehta Seth (VMS) Consulting Engineers, Fort, Mumbai"
    },
    {
      slNo: 6,
      client: "Pithampur Ply Product Ltd.",
      clientAddress: "Geeta Bhavan, Choraha, Indore",
      projectName: "Factory building at Sector-3, Pithampur, Dist. Dhar (M.P.)",
      areaOfConstruction: "65,000 Sft",
      status: "Completed",
      completionDate: "November 1997",
      architect: "Amitabh Dar & Associates, A.B. Road, Indore",
      consultant: "Amitabh Dar & Associates, A.B. Road, Indore"
    },
    {
      slNo: 5,
      client: "M/s Narmada Construction Co.",
      clientAddress: "Andheri (W), Mumbai",
      projectName: "3 Nos. (G + 18) Residential, Plot No. 28, Sector-18, Nerul, Navi Mumbai",
      areaOfConstruction: "2,10,000 Sft",
      status: "Completed",
      completionDate: "1997",
      architect: "",
      consultant: ""
    },
    {
      slNo: 4,
      client: "Mahindra & Mahindra Ltd.",
      clientAddress: "Mahindra Tower, Worli, Mumbai",
      projectName: "Mahindra Park (Residential building Stilt + 5 floors), Ghatkopar, Mumbai",
      areaOfConstruction: "1,40,000 Sft",
      status: "Completed",
      completionDate: "1996",
      architect: "Deepak Mehta & Associates, Andheri (E), Mumbai",
      consultant: "Mahimtura Consultants Pvt. Ltd., Brelvi Road, Mumbai"
    },
    {
      slNo: 3,
      client: "Shri Kamal Kamavat",
      clientAddress: "Udaipur, Rajasthan",
      projectName: "Circle View Apartments, Near Sukhadia Circle, Udaipur",
      areaOfConstruction: "75,000 Sft",
      status: "Completed",
      completionDate: "September 1994",
      architect: "Deepak Mehta & Associates, Andheri (E), Mumbai",
      consultant: ""
    },
    {
      slNo: 2,
      client: "Hotel Raj Darshan",
      clientAddress: "Udaipur",
      projectName: "Hotel Raj Darshan, Udaipur",
      areaOfConstruction: "40,000 Sft",
      status: "Completed",
      completionDate: "1995",
      architect: "",
      consultant: ""
    },
    {
      slNo: 1,
      client: "Shri Jaswant Singh Bhandari",
      clientAddress: "Udaipur",
      projectName: "Hotel Heritage, Udaipur Nathdwara Road, Udaipur",
      areaOfConstruction: "50,000 Sft",
      status: "Completed",
      completionDate: "1994",
      architect: "",
      consultant: ""
    }
  ];

  return (
    <main className="pt-24 min-h-screen bg-white text-gray-900 font-sans">
      
      {/* Header */}
      <div className="bg-gray-50 border-b border-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto">
           <button 
            onClick={() => navigate(-1)} 
            className="flex items-center text-gray-500 hover:text-[var(--about-accent)] mb-6 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Clients & Credentials</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Our professional network, distinguished associations, and track record of delivering excellence.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">
        
        {/* SECTION 1: CLIENTS */}
        <section>
          <div className="mb-10 border-l-4 border-[var(--about-accent)] pl-6">
            <h2 className="text-3xl font-bold text-gray-900">Prominent Clients</h2>
            <p className="text-gray-500 mt-2">Trusted by industry leaders across sectors</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="py-3 px-4 bg-gray-50 rounded border border-gray-100 text-gray-700 hover:shadow-sm hover:border-gray-300 transition-all duration-300 text-sm md:text-base"
              >
                {client}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: ARCHITECTS & CONSULTANTS */}
        <section>
          <div className="mb-10 border-l-4 border-[var(--about-accent)] pl-6">
            <h2 className="text-3xl font-bold text-gray-900">Architects & Consultants We Have Worked With</h2>
            <p className="text-gray-500 mt-2">Collaborating with the best minds in design and engineering</p>
          </div>

          <div className="space-y-16">
            {/* Architects */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                Architects
              </h3>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 pl-5">
                {architects.map((name, index) => (
                  <div key={index} className="flex items-start border-b border-gray-100 pb-2">
                    <span className="text-gray-600">{name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Consultants */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                Consultants
              </h3>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 pl-5">
                 {consultants.map((name, index) => (
                  <div key={index} className="flex items-start border-b border-gray-100 pb-2">
                    <span className="text-gray-600">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: PROJECTS (TABLE) */}
        <section>
          <div className="mb-10 border-l-4 border-[var(--about-accent)] pl-6">
            <h2 className="text-3xl font-bold text-gray-900">Selected Projects</h2>
            <p className="text-gray-500 mt-2">A snapshot of our project portfolio</p>
          </div>

          <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
            <table className="w-full text-sm text-left text-gray-600 min-w-[1000px]">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100 sticky top-0 z-10">
                <tr>
                  <th scope="col" className="px-6 py-4 font-bold">Sl. No.</th>
                  <th scope="col" className="px-6 py-4 font-bold">Client</th>
                  <th scope="col" className="px-6 py-4 font-bold">Project Name</th>
                  <th scope="col" className="px-6 py-4 font-bold">Area of Construction</th>
                  <th scope="col" className="px-6 py-4 font-bold">Status</th>
                  <th scope="col" className="px-6 py-4 font-bold">Date of Completion</th>
                  <th scope="col" className="px-6 py-4 font-bold">Architect</th>
                  <th scope="col" className="px-6 py-4 font-bold">Consultant</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((item, index) => (
                  <tr key={index} className="bg-white border-b hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium">{item.slNo}</td>
                    <td className="px-6 py-4">{item.client}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{item.projectName}</td>
                    <td className="px-6 py-4">{item.areaOfConstruction}</td>
                    <td className="px-6 py-4">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">{item.status}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-500">{item.completionDate}</td>
                    <td className="px-6 py-4">{item.architect}</td>
                    <td className="px-6 py-4">{item.consultant}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        
        {/* Contact CTA */}
        <section className="bg-gray-50 rounded-2xl p-10 text-center border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Want to know more?</h3>
          <p className="text-gray-600 mb-6">Contact us for a detailed portfolio and credentials.</p>
        </section>
      </div>

    </main>
  );
}
