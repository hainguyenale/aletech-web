import type { InvestorsPageData } from "@/lib/types/investors"

const TEAM_IMAGES = {
  hai: {
    url: "https://cdn.sanity.io/images/jspa4h9r/production/9a4b67cc3b6af445b3fdf36c431b37ae23fda74d-1024x1536.jpg",
    metadata: { dimensions: { width: 1024, height: 1536 } },
  },
  hieu: {
    url: "https://cdn.sanity.io/images/jspa4h9r/production/01f9972fc8926c26eecc80ef1c09d18d4664adaa-1024x1536.jpg",
    metadata: { dimensions: { width: 1024, height: 1536 } },
  },
  kien: {
    url: "https://cdn.sanity.io/images/jspa4h9r/production/6e3db2329666cfe2bcd2a311e05f326503bc9fa1-1024x1536.jpg",
    metadata: { dimensions: { width: 1024, height: 1536 } },
  },
  hoang: {
    url: "/images/hoang-nguyen.jpg",
    metadata: { dimensions: { width: 800, height: 800 } },
  },
}

const PLACEHOLDER_THUMBNAIL = {
  url: "https://placehold.co/800x450/1a1a2e/30C8C9?text=Presentation",
  metadata: { dimensions: { width: 800, height: 450 } },
}

const PLACEHOLDER_FILE = {
  url: "#",
  size: 2457600,
  originalFilename: "report.pdf",
}

const BCTC_2024 = {
  url: "https://cdn.sanity.io/files/jspa4h9r/production/ba25daf43fb33a2c9eaa21b5cd304f657ae5c9d1.pdf",
  size: 1048576,
  originalFilename: "Aletech-BCTC-2024.pdf",
}

const BCTC_2023 = {
  url: "https://cdn.sanity.io/files/jspa4h9r/production/dccfa43737bc65cb539968bd62ae9476a6e891a5.pdf",
  size: 1048576,
  originalFilename: "Aletech-BCTC-2023.pdf",
}

const BCTC_2022 = {
  url: "https://cdn.sanity.io/files/jspa4h9r/production/59f799cbb13a540e5001f840c99c4594100ee4b5.pdf",
  size: 1048576,
  originalFilename: "Aletech-BCTC-2022.pdf",
}

const investorsDataEN: InvestorsPageData = {
  heroBanner: {
    tagline: "Investor Relations",
    title: "Shareholder",
    highlightedText: "Relations",
    description:
      "Information about major shareholders involved in the financial management, governance, and growth strategy of Aletech JSC.",
    stats: [
      { number: "70%+", label: "Senior Engineers" },
      { number: "4x", label: "Team Growth (2 yrs)" },
      { number: "10+", label: "R&D Projects" },
    ],
  },
  companyStory: {
    tagline: "Company Overview",
    title: "Our Growth Story",
    narrative:
      "Aletech does not strive to be the largest service provider; we aim to be the most trusted partner. We believe that technology's value is not in its complexity, but in its ability to solve the \"Why\" behind every business challenge. Since establishment in 2021, Aletech has grown from a focused team in Buon Ma Thuot to a company with operations in Hanoi, Ho Chi Minh City, and international clients across UK and US markets.",
    milestones: [
      { year: "2021", title: "Company Founded", description: "Official establishment of Aletech JSC on June 30, 2021 in Buon Ma Thuot, Dak Lak" },
      { year: "2022", title: "National Presence", description: "Established business hubs in Hanoi and Ho Chi Minh City to optimize global client services" },
      { year: "2024", title: "Capital Stabilization", description: "Charter capital increased to 5,000,000,000 VND, reinforcing operations for large-scale international projects" },
      { year: "2025", title: "Exponential Growth", description: "Charter capital reached 30,600,000,000 VND (Dec 2025), reflecting 4x growth in team size within 2 years" },
    ],
  },
  financialHighlights: {
    tagline: "Strategic Indicators",
    title: "Financial Highlights",
    description: "Key financial and operational metrics demonstrating Aletech's disciplined execution and growth trajectory.",
    metrics: [
      { title: "ROS", value: "53-61%", growth: "Highly optimized", progressPercentage: 85, icon: "TrendingUp" },
      { title: "ROE", value: "118.8%", growth: "Exceptional capital mgmt", progressPercentage: 95, icon: "BarChart3" },
      { title: "Senior Staff", value: "70%+", growth: "Mid & Senior level", progressPercentage: 70, icon: "PieChart" },
      { title: "R&D Projects", value: "10+", growth: "Building proprietary IP", progressPercentage: 60, icon: "TrendingUp" },
    ],
  },
  shareholderStructure: {
    tagline: "Equity Structure",
    title: "Shareholder Composition",
    description: "Aletech maintains a balanced ownership structure aligned with the interests of founders and key management. Total outstanding shares: 3,060,000.",
    shareholders: [
      { name: "Nguyen Minh Hoang (Chairman)", percentage: 19.5, color: "#30C8C9" },
      { name: "Ho Hieu (Deputy Director)", percentage: 20, color: "#6366f1" },
      { name: "Nguyen Minh Hai (CEO)", percentage: 18.5, color: "#f59e0b" },
      { name: "Other Shareholders", percentage: 42, color: "#10b981" },
    ],
    lastUpdated: "2025-12-01",
  },
  financialReports: {
    tagline: "Reports & Filings",
    title: "Financial Reports & Documents",
    description: "Access our financial statements and corporate filings. All documents are prepared in accordance with Vietnamese Accounting Standards (VAS) and applicable regulatory requirements.",
    reports: [
      { title: "Annual Report 2025", date: "2026-02-28", file: PLACEHOLDER_FILE, type: "PDF", category: "annual", year: 2025 },
      { title: "Audited Financial Statement 2024", date: "2025-03-15", file: BCTC_2024, type: "PDF", category: "annual", year: 2024 },
      { title: "Audited Financial Statement 2023", date: "2024-03-15", file: BCTC_2023, type: "PDF", category: "annual", year: 2023 },
      { title: "Audited Financial Statement 2022", date: "2023-03-15", file: BCTC_2022, type: "PDF", category: "annual", year: 2022 },
      { title: "Q4 2025 Audited Financial Statement", date: "2026-01-15", file: PLACEHOLDER_FILE, type: "PDF", category: "quarterly", year: 2025 },
      { title: "Q3 2025 Financial Statement", date: "2025-10-15", file: PLACEHOLDER_FILE, type: "PDF", category: "quarterly", year: 2025 },
      { title: "Q2 2025 Financial Statement", date: "2025-07-15", file: PLACEHOLDER_FILE, type: "PDF", category: "quarterly", year: 2025 },
      { title: "Q1 2025 Financial Statement", date: "2025-04-15", file: PLACEHOLDER_FILE, type: "PDF", category: "quarterly", year: 2025 },
      { title: "Corporate Governance Report H2 2025", date: "2026-01-30", file: PLACEHOLDER_FILE, type: "PDF", category: "governance", year: 2025 },
      { title: "Corporate Governance Report H2 2024", date: "2025-01-30", file: PLACEHOLDER_FILE, type: "PDF", category: "governance", year: 2024 },
    ],
  },
  corporateGovernance: {
    tagline: "Governance Framework",
    title: "Corporate Governance",
    description: "Aletech is committed to maintaining the highest standards of corporate governance, ensuring transparency, protecting shareholder rights, and aligning management decisions with long-term stakeholder value.",
    documents: [
      { title: "Company Charter", description: "Articles of incorporation defining corporate structure, shareholder rights, and operational bylaws of Aletech JSC", icon: "FileText", url: "#" },
      { title: "Governance Regulations", description: "Internal governance framework covering board procedures, audit requirements, and disclosure policies", icon: "Shield", url: "#" },
    ],
  },
  boardOfDirectors: {
    tagline: "Leadership Team",
    title: "Board of Directors & Management",
    description: "Our leadership team brings decades of combined experience in technology, finance, and enterprise transformation.",
    members: [
      {
        name: "Mr. Hoang Nguyen",
        position: "Chairman of the Board",
        image: TEAM_IMAGES.hoang,
        bio: "Former Head of Department at KIS Vietnam Securities and Deputy Director at International Securities. Served as CFO at Aletech since 2018 before becoming Chairman in September 2025. Holds 19.5% of outstanding shares (595,800 shares).",
      },
      {
        name: "Ms. Hai Nguyen",
        position: "CEO & Board Member",
        image: TEAM_IMAGES.hai,
        bio: "9+ years as PM/BA specializing in automation. Previously led marketing and operations at MIDEAS. Founded Aletech with a mission to deeply understand core business pain points rather than just following tech trends. Holds 18.5% of outstanding shares (566,100 shares).",
      },
      {
        name: "Mr. Hieu Ho",
        position: "Deputy Director & Board Member",
        image: TEAM_IMAGES.hieu,
        bio: "Master of AI with 10+ years as Technical Advisor for multinational projects. Previously Software Solutions Engineer at Viettel Group and Technical Director at MIDEAS. Architect of Aletech's technical excellence. Holds 20% of outstanding shares (612,000 shares).",
      },
    ],
  },
  upcomingEvents: {
    tagline: "Investor Calendar",
    title: "Upcoming Events & Key Dates",
    description: "Stay informed about scheduled investor events, shareholder meetings, and corporate announcements.",
    events: [
      { title: "Annual General Meeting 2026", date: "2026-04-25", time: "09:00 AM", location: "Aletech HQ, Buon Ma Thuot", type: "meeting", description: "Annual shareholder meeting covering financial review, board elections, and strategic outlook" },
      { title: "Q1 2026 Financial Results", date: "2026-04-30", time: "02:00 PM", location: "Virtual (Zoom Webinar)", type: "earnings", description: "Presentation of Q1 2026 financial performance with management Q&A session" },
      { title: "Vietnam Tech Investment Forum 2026", date: "2026-06-15", time: "10:00 AM", location: "HCMC Convention Center", type: "conference", description: "Aletech presenting company overview and growth strategy at the annual technology investment forum" },
    ],
    presentation: {
      title: "Company Overview & Growth Strategy",
      description: "Our latest corporate presentation covering business model, financial performance, competitive advantages, and strategic roadmap toward IPO.",
      thumbnailImage: PLACEHOLDER_THUMBNAIL,
      file: PLACEHOLDER_FILE,
    },
  },
  newsDisclosures: {
    tagline: "News & Announcements",
    title: "Company News",
    description: "Stay updated with the latest news and announcements from Aletech.",
    items: [
      {
        title: "Charter Capital Reaches 30.6 Billion VND",
        slug: "charter-capital-reaches-30-6-billion-vnd",
        date: "2025-12-15",
        category: "announcement",
        summary: "Aletech JSC successfully increased charter capital to 30,600,000,000 VND, reflecting 4x team growth in 2 years and readiness for large-scale international projects.",
        body: "Aletech Technology Solutions JSC is pleased to announce the successful increase of its charter capital to 30,600,000,000 VND (approximately $1.2M USD) as of December 2025.\n\nThis milestone represents a significant step in the company's growth trajectory, reflecting a 4x increase in team size within just two years. The capital increase reinforces Aletech's operational foundation for large-scale international projects and demonstrates the confidence of shareholders in the company's strategic direction.\n\nKey highlights of this development:\n\n- Charter capital grew from 5 billion VND (2024) to 30.6 billion VND (2025)\n- Team size expanded 4x in 2 years, with 70%+ senior and mid-level engineers\n- The increased capital supports expansion into new markets and service verticals\n- Strengthens the company's position for upcoming IPO preparations\n\nMr. Nguyen Minh Hoang, Chairman of the Board, stated: \"This capital increase reflects our commitment to building a sustainable, well-capitalized technology company. We are positioning Aletech for the next phase of growth as we prepare for public listing.\"\n\nThe capital increase was approved by the General Meeting of Shareholders and has been duly registered with the relevant authorities in accordance with Vietnamese corporate law.",
      },
      {
        title: "Strategic AI Partnership with VHT System Integration JSC",
        slug: "strategic-ai-partnership-with-vht",
        date: "2025-11-10",
        category: "news",
        summary: "Aletech partners with VHT System Integration JSC to develop AI virtual assistant for digital transformation, serving internal advisory for defense sector.",
        body: "Aletech Technology Solutions JSC has entered into a strategic partnership with VHT System Integration JSC to co-develop an AI-powered virtual assistant platform for digital transformation initiatives.\n\nThe collaboration leverages Aletech's dedicated AI division and VHT's system integration expertise to deliver a comprehensive solution that combines natural language processing, data analytics, and automated advisory capabilities.\n\nProject scope and objectives:\n\n- Development of AI algorithms for automated question-answering on operational matters\n- Data analysis capabilities to support decision-making processes\n- Architecture designed for reusability across multiple organizations\n- Compliance with strict information security requirements\n\nThe virtual assistant platform is designed to serve as an internal advisory tool, reducing reliance on manual knowledge transfer and standardizing responses across the organization.\n\nMs. Nguyen Minh Hai, CEO of Aletech, commented: \"This partnership demonstrates our ability to deliver AI solutions in highly regulated environments. The project validates our approach of applying AI to solve real operational challenges rather than pursuing technology for its own sake.\"\n\nAletech's role in the project focuses on building and integrating AI algorithms, including the core intelligence features of the virtual assistant. The project is currently in the integration and testing phase, with planned expansion of features following initial deployment.\n\nThis partnership marks a significant milestone in Aletech's AI division, established in early 2025, and positions the company as a credible AI solutions provider for enterprise and institutional clients.",
      },
      {
        title: "Aletech Adopts Enhanced Corporate Governance Framework",
        slug: "aletech-adopts-enhanced-corporate-governance-framework",
        date: "2025-09-15",
        category: "announcement",
        summary: "Company converts to JSC and adopts international governance standards with 3-member Board of Directors and professional management structure.",
        body: "Aletech Technology Solutions has officially converted from a Limited Liability Company (LLC) to a Joint Stock Company (JSC) effective September 2025, adopting enhanced corporate governance standards aligned with Vietnamese Securities Law and international best practices.\n\nThe conversion establishes a formal governance structure designed to ensure transparency, protect shareholder rights, and prepare the company for future public listing.\n\nNew governance structure:\n\n- Board of Directors: 3 members\n  - Mr. Nguyen Minh Hoang — Chairman (previously CFO since 2018)\n  - Ms. Nguyen Minh Hai — CEO & Board Member (Founder)\n  - Mr. Ho Hieu — Deputy Director & Board Member (Master of AI)\n\n- Management Board:\n  - Ms. Nguyen Minh Hai — General Director\n  - Mr. Ho Hieu — Deputy Director\n\nThe Board of Directors is responsible for strategic oversight, while the Management Board handles day-to-day operations, business strategy execution, resource management, and market development in accordance with Board resolutions and applicable regulations.\n\nOrganizational departments include:\n- Software Development Department\n- Human Resources & Administration Department\n- Data & Analytics Department\n\nThe company maintains its headquarters in Buon Ma Thuot, Dak Lak Province, with business locations in Hanoi and Ho Chi Minh City.\n\nThis governance enhancement is a critical step in Aletech's roadmap toward IPO, demonstrating the company's commitment to institutional-grade management practices and stakeholder accountability.",
      },
      {
        title: "Expanding AI Capabilities for UK Parking Infrastructure Partner",
        slug: "expanding-ai-capabilities-for-uk-parking-infrastructure-partner",
        date: "2025-08-20",
        category: "news",
        summary: "Aletech expands AI capabilities for UKPC, developing violation analysis algorithms achieving improved processing efficiency while ensuring GDPR compliance.",
        body: "Aletech Technology Solutions JSC has expanded its AI capabilities for its long-term strategic partner UKPC, a leading parking management operator in the United Kingdom.\n\nThe expansion focuses on developing and training advanced AI algorithms to optimize the analysis of parking violations across UKPC's nationwide operational infrastructure. This project represents a deepening of the partnership that has been in place since Aletech's founding in 2021.\n\nKey technical achievements:\n\n- Enhanced AI algorithms for violation image analysis and classification\n- Improved processing efficiency for violation case handling\n- Reduced operational costs through automation of manual review processes\n- Increased accuracy in violation assessment and categorization\n- Full compliance with European data protection standards (GDPR)\n\nThe AI system operates on real-world data at significant scale, providing Aletech with valuable datasets that serve as strategic assets for future AI product development.\n\nMr. Ho Hieu, Deputy Director and CTO of Aletech, noted: \"Working with UKPC on real-world AI deployment has been instrumental in building our technical capabilities. The strict European compliance requirements have pushed us to develop solutions that are not only effective but also meet the highest standards of data privacy and security.\"\n\nThis project contributes to Aletech's strategic vision of transitioning from service-based revenue to product-based revenue through its AI Platform initiative planned for 2026-2031. The operational data and algorithms developed for UKPC form the foundation for Aletech's proprietary AI intellectual property.\n\nThe partnership with UKPC also serves as a key case study demonstrating Aletech's ability to deliver and operate technology solutions at international standards, a critical factor in the company's IPO preparation.",
      },
    ],
  },
  investmentRoadmap: {
    tagline: "Upcoming Events",
    title: "Investment Roadmap",
    description: "Below is the timeline for capital increase and public listing of Aletech:",
    milestones: [
      { title: "Capital Increase", date: "2025-06-27", description: "Additional share issuance to existing shareholders to increase capital to 30 billion VND. Expand development of company-owned products.", location: "Aletech HQ, Buon Ma Thuot" },
      { title: "Financial Audit", date: "2025-06-30", description: "Annual audit conducted by VNA Auditing Company to ensure compliance with regulatory standards.", location: "Aletech HQ, Buon Ma Thuot" },
      { title: "Public Company Registration", date: "2025-08-30", description: "Submit public company registration dossier to the State Securities Commission.", location: "State Securities Commission" },
      { title: "Listing Application", date: "2025-12-31", description: "Submit listing application to the Stock Exchange.", location: "Stock Exchange" },
    ],
    businessPlan: {
      title: "Latest Business Plan",
      cta: "View now",
      file: PLACEHOLDER_FILE,
    },
  },
  contactIR: {
    title: "Investor Relations",
    description: "For inquiries regarding Aletech's financial performance, corporate governance, shareholder services, or investment opportunities, please contact our Investor Relations team.",
    email: "ir@aletech.co",
    phone: "(+84) 947 058 209",
    address: ["Eco City Premia, Km7", "Tan An Ward, Buon Ma Thuot City", "Dak Lak Province, Vietnam"],
  },
}

const investorsDataVI: InvestorsPageData = {
  heroBanner: {
    tagline: "Quan hệ Nhà đầu tư",
    title: "Quan hệ",
    highlightedText: "Cổ đông",
    description:
      "Thông tin về các cổ đông lớn tham gia quản lý tài chính, quản trị và chiến lược tăng trưởng của Công ty CP Giải pháp Công nghệ Aletech.",
    stats: [
      { number: "70%+", label: "Kỹ sư cấp cao" },
      { number: "4x", label: "Tăng trưởng nhân sự (2 năm)" },
      { number: "10+", label: "Dự án R&D" },
    ],
  },
  companyStory: {
    tagline: "Tổng quan Công ty",
    title: "Câu chuyện Tăng trưởng",
    narrative:
      "Aletech không nỗ lực để trở thành nhà cung cấp dịch vụ lớn nhất; chúng tôi đặt mục tiêu trở thành đối tác đáng tin cậy nhất. Chúng tôi tin rằng giá trị của công nghệ không nằm ở sự phức tạp, mà ở khả năng giải quyết triệt để lý do \"Tại sao\" đằng sau mỗi thách thức của doanh nghiệp. Từ khi thành lập năm 2021, Aletech đã phát triển từ đội ngũ tập trung tại Buôn Ma Thuột đến công ty có hoạt động tại Hà Nội, TP.HCM và khách hàng quốc tế tại Anh, Mỹ.",
    milestones: [
      { year: "2021", title: "Thành lập Công ty", description: "Thành lập Công ty CP Giải pháp Công nghệ Aletech ngày 30/06/2021 tại Buôn Ma Thuột, Đắk Lắk" },
      { year: "2022", title: "Hiện diện Toàn quốc", description: "Thiết lập 2 địa điểm kinh doanh tại Hà Nội và TP. Hồ Chí Minh để tối ưu hóa việc phục vụ khách hàng toàn cầu" },
      { year: "2024", title: "Ổn định Vốn", description: "Tăng vốn điều lệ lên 5.000.000.000 VNĐ, củng cố nền tảng vận hành cho các dự án quốc tế quy mô lớn" },
      { year: "2025", title: "Bứt phá Tăng trưởng", description: "Vốn điều lệ đạt mốc 30.600.000.000 VNĐ (Tháng 12/2025), phản ánh tốc độ tăng trưởng quy mô nhân sự gấp 4 lần chỉ trong 2 năm" },
    ],
  },
  financialHighlights: {
    tagline: "Chỉ số Chiến lược",
    title: "Điểm nhấn Tài chính",
    description: "Các chỉ số tài chính và vận hành quan trọng thể hiện sự thực thi kỷ luật và quỹ đạo tăng trưởng của Aletech.",
    metrics: [
      { title: "ROS", value: "53-61%", growth: "Mô hình tối ưu", progressPercentage: 85, icon: "TrendingUp" },
      { title: "ROE", value: "118.8%", growth: "Quản trị vốn xuất sắc", progressPercentage: 95, icon: "BarChart3" },
      { title: "Nhân sự Cấp cao", value: "70%+", growth: "Trung & Cao cấp", progressPercentage: 70, icon: "PieChart" },
      { title: "Dự án R&D", value: "10+", growth: "Xây dựng tài sản trí tuệ", progressPercentage: 60, icon: "TrendingUp" },
    ],
  },
  shareholderStructure: {
    tagline: "Cơ cấu Vốn",
    title: "Cơ cấu Cổ đông",
    description: "Aletech duy trì cơ cấu sở hữu cân bằng nhằm hài hòa lợi ích giữa ban sáng lập và ban quản lý chủ chốt. Tổng số cổ phần đang lưu hành: 3.060.000.",
    shareholders: [
      { name: "Nguyễn Minh Hoàng (Chủ tịch HĐQT)", percentage: 19.5, color: "#30C8C9" },
      { name: "Hồ Hiếu (Phó Giám đốc)", percentage: 20, color: "#6366f1" },
      { name: "Nguyễn Minh Hải (TGĐ)", percentage: 18.5, color: "#f59e0b" },
      { name: "Cổ đông khác", percentage: 42, color: "#10b981" },
    ],
    lastUpdated: "2025-12-01",
  },
  financialReports: {
    tagline: "Báo cáo & Hồ sơ",
    title: "Báo cáo Tài chính & Tài liệu",
    description: "Truy cập báo cáo tài chính và hồ sơ doanh nghiệp. Tất cả tài liệu được lập theo Chuẩn mực Kế toán Việt Nam (VAS) và các quy định pháp luật hiện hành.",
    reports: [
      { title: "Báo cáo Thường niên 2025", date: "2026-02-28", file: PLACEHOLDER_FILE, type: "PDF", category: "annual", year: 2025 },
      { title: "Báo cáo Tài chính Kiểm toán 2024", date: "2025-03-15", file: BCTC_2024, type: "PDF", category: "annual", year: 2024 },
      { title: "Báo cáo Tài chính Kiểm toán 2023", date: "2024-03-15", file: BCTC_2023, type: "PDF", category: "annual", year: 2023 },
      { title: "Báo cáo Tài chính Kiểm toán 2022", date: "2023-03-15", file: BCTC_2022, type: "PDF", category: "annual", year: 2022 },
      { title: "BCTC đã Kiểm toán Q4 2025", date: "2026-01-15", file: PLACEHOLDER_FILE, type: "PDF", category: "quarterly", year: 2025 },
      { title: "Báo cáo Tài chính Q3 2025", date: "2025-10-15", file: PLACEHOLDER_FILE, type: "PDF", category: "quarterly", year: 2025 },
      { title: "Báo cáo Tài chính Q2 2025", date: "2025-07-15", file: PLACEHOLDER_FILE, type: "PDF", category: "quarterly", year: 2025 },
      { title: "Báo cáo Tài chính Q1 2025", date: "2025-04-15", file: PLACEHOLDER_FILE, type: "PDF", category: "quarterly", year: 2025 },
      { title: "Báo cáo Quản trị H2 2025", date: "2026-01-30", file: PLACEHOLDER_FILE, type: "PDF", category: "governance", year: 2025 },
      { title: "Báo cáo Quản trị H2 2024", date: "2025-01-30", file: PLACEHOLDER_FILE, type: "PDF", category: "governance", year: 2024 },
    ],
  },
  corporateGovernance: {
    tagline: "Khung Quản trị",
    title: "Quản trị Doanh nghiệp",
    description: "Aletech cam kết duy trì các tiêu chuẩn quản trị doanh nghiệp cao nhất, đảm bảo tính minh bạch, bảo vệ quyền lợi cổ đông và đảm bảo các quyết định quản lý phù hợp với giá trị dài hạn.",
    documents: [
      { title: "Điều lệ Công ty", description: "Văn bản thành lập quy định cơ cấu công ty, quyền cổ đông và quy chế hoạt động của Công ty CP GPCN Aletech", icon: "FileText", url: "#" },
      { title: "Quy chế Quản trị", description: "Khung quản trị nội bộ về quy trình hội đồng, yêu cầu kiểm toán và chính sách công bố thông tin", icon: "Shield", url: "#" },
    ],
  },
  boardOfDirectors: {
    tagline: "Đội ngũ Lãnh đạo",
    title: "Hội đồng Quản trị & Ban Điều hành",
    description: "Đội ngũ lãnh đạo mang đến hàng chục năm kinh nghiệm kết hợp trong lĩnh vực công nghệ, tài chính và chuyển đổi doanh nghiệp.",
    members: [
      {
        name: "Ông Nguyễn Minh Hoàng",
        position: "Chủ tịch HĐQT",
        image: TEAM_IMAGES.hoang,
        bio: "Nguyên Trưởng phòng tại CTCP Chứng khoán KIS Việt Nam, Phó Giám đốc CTCP Chứng khoán Quốc Tế. Giám đốc Tài chính tại Aletech từ 2018. Giữ chức Chủ tịch HĐQT từ tháng 9/2025. Sở hữu 19,5% cổ phần (595.800 cổ phiếu).",
      },
      {
        name: "Bà Nguyễn Minh Hải",
        position: "Tổng Giám đốc & Thành viên HĐQT",
        image: TEAM_IMAGES.hai,
        bio: "Hơn 9 năm kinh nghiệm PM/BA chuyên về tự động hóa. Từng là Trưởng bộ phận Marketing chi nhánh Hà Nội tại MIDEAS. Sáng lập Aletech với phương châm thấu hiểu sâu sắc \"nỗi đau\" cốt lõi của doanh nghiệp. Sở hữu 18,5% cổ phần (566.100 cổ phiếu).",
      },
      {
        name: "Ông Hồ Hiếu",
        position: "Phó Giám đốc & Thành viên HĐQT",
        image: TEAM_IMAGES.hieu,
        bio: "Thạc sĩ Trí tuệ nhân tạo (AI) với hơn 10 năm cố vấn kỹ thuật cho các dự án đa quốc gia. Từng là Kỹ sư giải pháp tại Tập đoàn Viettel và Giám đốc Kỹ thuật tại MIDEAS. Kiến trúc sư đảm bảo sự xuất sắc về công nghệ của Aletech. Sở hữu 20% cổ phần (612.000 cổ phiếu).",
      },
    ],
  },
  upcomingEvents: {
    tagline: "Lịch Nhà đầu tư",
    title: "Sự kiện & Ngày quan trọng Sắp tới",
    description: "Cập nhật về các sự kiện nhà đầu tư, đại hội cổ đông và thông báo doanh nghiệp theo lịch trình.",
    events: [
      { title: "Đại hội Cổ đông Thường niên 2026", date: "2026-04-25", time: "09:00", location: "Trụ sở Aletech, Buôn Ma Thuột", type: "meeting", description: "Đại hội cổ đông thường niên bao gồm đánh giá tài chính, bầu cử hội đồng và triển vọng chiến lược" },
      { title: "Kết quả Tài chính Q1 2026", date: "2026-04-30", time: "14:00", location: "Trực tuyến (Zoom Webinar)", type: "earnings", description: "Trình bày hiệu quả tài chính Q1 2026 kèm phiên hỏi đáp với ban điều hành" },
      { title: "Diễn đàn Đầu tư Công nghệ VN 2026", date: "2026-06-15", time: "10:00", location: "Trung tâm Hội nghị TP.HCM", type: "conference", description: "Aletech trình bày tổng quan công ty và chiến lược tăng trưởng tại diễn đàn đầu tư công nghệ thường niên" },
    ],
    presentation: {
      title: "Tổng quan Công ty & Chiến lược Tăng trưởng",
      description: "Bài trình bày doanh nghiệp mới nhất bao gồm mô hình kinh doanh, hiệu quả tài chính, lợi thế cạnh tranh và lộ trình chiến lược hướng tới IPO.",
      thumbnailImage: PLACEHOLDER_THUMBNAIL,
      file: PLACEHOLDER_FILE,
    },
  },
  newsDisclosures: {
    tagline: "Tin tức & Thông báo",
    title: "Tin tức Công ty",
    description: "Cập nhật những tin tức và thông báo mới nhất từ Aletech.",
    items: [
      {
        title: "Vốn Điều lệ Đạt 30,6 Tỷ VNĐ",
        slug: "von-dieu-le-dat-30-6-ty-vnd",
        date: "2025-12-15",
        category: "announcement",
        summary: "Công ty CP GPCN Aletech tăng vốn điều lệ thành công lên 30.600.000.000 VNĐ, phản ánh tốc độ tăng trưởng nhân sự gấp 4 lần trong 2 năm và sẵn sàng cho các dự án quốc tế quy mô lớn.",
        body: "Công ty CP Giải pháp Công nghệ Aletech trân trọng thông báo việc tăng vốn điều lệ thành công lên 30.600.000.000 VNĐ (khoảng 1,2 triệu USD) tính đến tháng 12/2025.\n\nCột mốc này đánh dấu bước tiến quan trọng trong quỹ đạo tăng trưởng của công ty, phản ánh tốc độ tăng trưởng quy mô nhân sự gấp 4 lần chỉ trong 2 năm. Việc tăng vốn củng cố nền tảng vận hành cho các dự án quốc tế quy mô lớn và thể hiện niềm tin của cổ đông vào định hướng chiến lược của công ty.\n\nĐiểm nổi bật:\n\n- Vốn điều lệ tăng từ 5 tỷ VNĐ (2024) lên 30,6 tỷ VNĐ (2025)\n- Quy mô nhân sự tăng gấp 4 lần trong 2 năm, với hơn 70% kỹ sư cấp trung và cao cấp\n- Vốn tăng hỗ trợ mở rộng sang thị trường và lĩnh vực dịch vụ mới\n- Củng cố vị thế cho quá trình chuẩn bị IPO\n\nÔng Nguyễn Minh Hoàng, Chủ tịch HĐQT, phát biểu: \"Việc tăng vốn phản ánh cam kết xây dựng một công ty công nghệ bền vững, có nền tảng vốn vững chắc. Chúng tôi đang định vị Aletech cho giai đoạn tăng trưởng tiếp theo khi chuẩn bị niêm yết đại chúng.\"\n\nViệc tăng vốn đã được Đại hội đồng Cổ đông phê duyệt và đăng ký đầy đủ với cơ quan chức năng theo quy định pháp luật Việt Nam.",
      },
      {
        title: "Hợp tác Chiến lược AI cùng CTCP Tích hợp Hệ thống VHT",
        slug: "hop-tac-chien-luoc-ai-cung-vht",
        date: "2025-11-10",
        category: "news",
        summary: "Aletech phối hợp cùng CTCP Tích hợp Hệ thống VHT phát triển trợ lý ảo AI phục vụ chuyển đổi số, triển khai cố vấn nội bộ cho Bộ Quốc phòng.",
        body: "Công ty CP Giải pháp Công nghệ Aletech đã ký kết hợp tác chiến lược với CTCP Tích hợp Hệ thống VHT để đồng phát triển nền tảng trợ lý ảo được hỗ trợ bởi AI phục vụ các sáng kiến chuyển đổi số.\n\nSự hợp tác kết hợp bộ phận AI chuyên biệt của Aletech và chuyên môn tích hợp hệ thống của VHT để cung cấp giải pháp toàn diện kết hợp xử lý ngôn ngữ tự nhiên, phân tích dữ liệu và khả năng cố vấn tự động.\n\nPhạm vi và mục tiêu dự án:\n\n- Phát triển thuật toán AI cho tự động trả lời câu hỏi nghiệp vụ\n- Khả năng phân tích dữ liệu hỗ trợ ra quyết định\n- Kiến trúc thiết kế có thể tái sử dụng cho nhiều tổ chức\n- Tuân thủ các yêu cầu nghiêm ngặt về an toàn thông tin\n\nNền tảng trợ lý ảo được thiết kế phục vụ cố vấn nội bộ, giảm phụ thuộc vào chuyển giao kiến thức thủ công và chuẩn hóa câu trả lời trong toàn tổ chức.\n\nBà Nguyễn Minh Hải, Tổng Giám đốc Aletech, chia sẻ: \"Hợp tác này chứng minh khả năng cung cấp giải pháp AI trong môi trường có quy định nghiêm ngặt. Dự án xác nhận phương pháp của chúng tôi trong việc ứng dụng AI giải quyết thách thức vận hành thực tế thay vì theo đuổi công nghệ vì mục đích tự thân.\"\n\nDự án hiện đang trong giai đoạn tích hợp và kiểm thử, với kế hoạch mở rộng tính năng sau triển khai ban đầu.",
      },
      {
        title: "Aletech Chuyển đổi Thành Công ty Cổ phần",
        slug: "aletech-chuyen-doi-thanh-cong-ty-co-phan",
        date: "2025-09-15",
        category: "announcement",
        summary: "Công ty chuyển đổi sang mô hình CTCP và áp dụng chuẩn quản trị quốc tế với HĐQT 3 thành viên và cơ cấu quản lý chuyên nghiệp.",
        body: "Công ty Giải pháp Công nghệ Aletech chính thức chuyển đổi từ Công ty TNHH sang Công ty Cổ phần (CTCP) từ tháng 9/2025, áp dụng chuẩn quản trị doanh nghiệp nâng cao phù hợp Luật Chứng khoán Việt Nam và thông lệ quốc tế.\n\nViệc chuyển đổi thiết lập cơ cấu quản trị chính thức nhằm đảm bảo tính minh bạch, bảo vệ quyền lợi cổ đông và chuẩn bị cho việc niêm yết đại chúng trong tương lai.\n\nCơ cấu quản trị mới:\n\n- Hội đồng Quản trị: 3 thành viên\n  - Ông Nguyễn Minh Hoàng — Chủ tịch (nguyên Giám đốc Tài chính từ 2018)\n  - Bà Nguyễn Minh Hải — TGĐ & Thành viên HĐQT (Nhà sáng lập)\n  - Ông Hồ Hiếu — Phó Giám đốc & Thành viên HĐQT (Thạc sĩ AI)\n\n- Ban Điều hành:\n  - Bà Nguyễn Minh Hải — Tổng Giám đốc\n  - Ông Hồ Hiếu — Phó Giám đốc\n\nCác phòng ban bao gồm:\n- Phòng Phát triển Phần mềm\n- Phòng Hành chính Nhân sự\n- Phòng Dữ liệu và Phân tích\n\nCông ty duy trì trụ sở chính tại Buôn Ma Thuột, tỉnh Đắk Lắk, với địa điểm kinh doanh tại Hà Nội và TP. Hồ Chí Minh.\n\nViệc nâng cao quản trị là bước quan trọng trong lộ trình IPO của Aletech, thể hiện cam kết áp dụng thực hành quản lý cấp tổ chức và trách nhiệm giải trình với các bên liên quan.",
      },
      {
        title: "Mở rộng Năng lực AI cho Đối tác Hạ tầng Đỗ xe tại Vương quốc Anh",
        slug: "mo-rong-nang-luc-ai-cho-doi-tac-ha-tang-do-xe-tai-vuong-quoc-anh",
        date: "2025-08-20",
        category: "news",
        summary: "Aletech mở rộng năng lực AI cho UKPC, phát triển thuật toán phân tích vi phạm đỗ xe đạt cải thiện hiệu suất xử lý, tuân thủ GDPR.",
        body: "Công ty CP Giải pháp Công nghệ Aletech đã mở rộng năng lực AI cho đối tác chiến lược dài hạn UKPC, đơn vị quản lý vận hành bãi đỗ xe hàng đầu tại Vương quốc Anh.\n\nViệc mở rộng tập trung vào phát triển và huấn luyện thuật toán AI nâng cao để tối ưu phân tích vi phạm đỗ xe trên hạ tầng vận hành quy mô quốc gia của UKPC. Dự án này đánh dấu sự hợp tác sâu hơn trong mối quan hệ đối tác đã có từ khi Aletech thành lập năm 2021.\n\nThành tựu kỹ thuật chính:\n\n- Thuật toán AI nâng cao cho phân tích và phân loại hình ảnh vi phạm\n- Cải thiện hiệu suất xử lý hồ sơ vi phạm\n- Giảm chi phí vận hành thông qua tự động hóa quy trình kiểm duyệt thủ công\n- Tăng độ chính xác trong đánh giá và phân loại vi phạm\n- Tuân thủ đầy đủ tiêu chuẩn bảo vệ dữ liệu Châu Âu (GDPR)\n\nÔng Hồ Hiếu, Phó Giám đốc kiêm CTO của Aletech, cho biết: \"Việc triển khai AI thực tế cùng UKPC là nền tảng quan trọng để xây dựng năng lực kỹ thuật. Các yêu cầu tuân thủ nghiêm ngặt của Châu Âu đã thúc đẩy chúng tôi phát triển giải pháp không chỉ hiệu quả mà còn đạt tiêu chuẩn cao nhất về bảo mật dữ liệu.\"\n\nDự án đóng góp vào tầm nhìn chiến lược chuyển đổi từ doanh thu dịch vụ sang doanh thu sản phẩm thông qua AI Platform dự kiến giai đoạn 2026-2031.",
      },
    ],
  },
  investmentRoadmap: {
    tagline: "Sự kiện sắp tới",
    title: "Kế hoạch đầu tư",
    description: "Dưới đây là thông tin về lịch trình tăng vốn và lên đại chúng của Aletech:",
    milestones: [
      { title: "Thực hiện tăng vốn", date: "2025-06-27", description: "Phát hành thêm cho cổ đông hiện hữu để tăng vốn lên 30 tỷ. Mở rộng phát triển sản phẩm thuộc sở hữu của công ty.", location: "Trụ sở Aletech, Buôn Ma Thuột" },
      { title: "Thực hiện kiểm toán tài chính", date: "2025-06-30", description: "Kiểm toán hàng năm được thực hiện bởi Công ty Kiểm toán VNA để đảm bảo tuân thủ các tiêu chuẩn quy định.", location: "Trụ sở Aletech, Buôn Ma Thuột" },
      { title: "Nộp hồ sơ đăng ký công ty đại chúng", date: "2025-08-30", description: "Nộp hồ sơ đăng ký công ty đại chúng lên Ủy ban Chứng khoán Nhà nước.", location: "Ủy ban Chứng khoán Nhà nước" },
      { title: "Nộp hồ sơ niêm yết", date: "2025-12-31", description: "Nộp đơn đăng ký lên Sở Giao dịch Chứng khoán.", location: "Sở Giao dịch Chứng khoán" },
    ],
    businessPlan: {
      title: "Bản kế hoạch kinh doanh mới nhất",
      cta: "Xem ngay",
      file: PLACEHOLDER_FILE,
    },
  },
  contactIR: {
    title: "Quan hệ Nhà đầu tư",
    description: "Đối với các thắc mắc về hiệu quả tài chính, quản trị doanh nghiệp, dịch vụ cổ đông hoặc cơ hội đầu tư, vui lòng liên hệ đội ngũ Quan hệ Nhà đầu tư.",
    email: "ir@aletech.co",
    phone: "(+84) 947 058 209",
    address: ["Eco City Premia, Km7", "Phường Tân An, TP. Buôn Ma Thuột", "Tỉnh Đắk Lắk, Việt Nam"],
  },
}

export const investorsMockData: Record<string, InvestorsPageData> = {
  en: investorsDataEN,
  vi: investorsDataVI,
}
