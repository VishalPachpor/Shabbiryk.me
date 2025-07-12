export default function PublicationsPage() {
  // LinkedIn articles for Talks and Panels section
  const linkedInArticles = [
    {
      title: "Growing Convicted Sector: RWA",
      description:
        "Exploring the Real World Assets (RWA) sector and its growing conviction among investors. Analysis of tokenization trends and market opportunities.",
      url: "https://www.linkedin.com/posts/ugcPost-7305749466022584321-6rqG?utm_source=share&utm_medium=member_ios&rcm=ACoAACOXbm0B1apdlZER6b_xIWet9XbQGjLP8vQ",
      date: "2024",
    },
    {
      title:
        "Where The Smart Money Flows: VC Predictions For The DeFAI Frontier",
      description:
        "Venture capital insights on where smart money is flowing in the DeFi and AI intersection. Key predictions for the DeFAI frontier.",
      url: "https://www.linkedin.com/posts/nikilster_1-trillion-market-cap-25-trillion-aum-activity-7308957830160560129-nPE9?utm_source=share&utm_medium=member_ios&rcm=ACoAACOXbm0B1apdlZER6b_xIWet9XbQGjLP8vQ",
      date: "2024",
    },
    {
      title: "Blockchain Technologies and Entrepreneurship",
      description:
        "Insights into blockchain technologies and their impact on entrepreneurship. Exploring the intersection of innovation and business development.",
      url: "https://www.linkedin.com/posts/ugcPost-7305749466022584321-6rqG?utm_source=share&utm_medium=member_ios&rcm=ACoAACOXbm0B1apdlZER6b_xIWet9XbQGjLP8vQ",
      date: "2024",
    },
    {
      title: "2025 Crypto Plans",
      description:
        "Analysis of crypto plans and strategies for 2025. Insights into market trends and investment opportunities in the cryptocurrency space.",
      url: "https://www.linkedin.com/posts/nikilster_1-trillion-market-cap-25-trillion-aum-activity-7308957830160560129-nPE9?utm_source=share&utm_medium=member_ios&rcm=ACoAACOXbm0B1apdlZER6b_xIWet9XbQGjLP8vQ",
      date: "2024",
    },
    {
      title: "World Economic Forum: Session On Crypto",
      description:
        "Highlights and insights from the World Economic Forum session on cryptocurrency. Global perspectives on digital assets and blockchain technology.",
      url: "https://www.linkedin.com/posts/activity-7291279229785194496-RuKt?utm_source=share&utm_medium=member_ios&rcm=ACoAACOXbm0B1apdlZER6b_xIWet9XbQGjLP8vQ",
      date: "2024",
    },
    {
      title: "Building Investors Communities",
      description:
        "Strategies and insights on building strong investor communities. Best practices for community engagement and network development.",
      url: "https://www.linkedin.com/posts/activity-7270882888483504128-E3Fn?utm_source=share&utm_medium=member_ios&rcm=ACoAACOXbm0B1apdlZER6b_xIWet9XbQGjLP8vQ",
      date: "2024",
    },
    {
      title: "The case for diversified portfolios & no pro-rata",
      description:
        "Analysis of portfolio diversification strategies and the case against pro-rata rights in venture capital investments.",
      url: "https://www.linkedin.com/posts/s21-is_web3-venturecapital-istanbul-ugcPost-7346119028177817600-_qO4?utm_source=share&utm_medium=member_ios&rcm=ACoAACOXbm0B1apdlZER6b_xIWet9XbQGjLP8vQ",
      date: "2024",
    },
    {
      title: "Future of Fundraising and Liquidity in Web3",
      description:
        "Exploring the future of fundraising and liquidity mechanisms in Web3. Analysis of emerging trends and innovative approaches.",
      url: "https://www.linkedin.com/posts/joy-sim-kia_token2049-dubai-was-intense-telegram-ugcPost-7325795420704518144-Z7f6?utm_source=share&utm_medium=member_ios&rcm=ACoAACOXbm0B1apdlZER6b_xIWet9XbQGjLP8vQ",
      date: "2024",
    },
    {
      title: "Dealflow Den: $80B in AUM",
      description:
        "Insights into deal flow management and strategies for managing $80B in Assets Under Management (AUM).",
      url: "https://www.linkedin.com/posts/activity-7333469707385098241-0wzD?utm_source=share&utm_medium=member_ios&rcm=ACoAACOXbm0B1apdlZER6b_xIWet9XbQGjLP8vQ",
      date: "2024",
    },
    {
      title: "State Of Solana Consumer Apps",
      description:
        "Analysis of the current state of consumer applications on Solana blockchain. Market trends and development insights.",
      url: "https://www.linkedin.com/posts/activity-7303181245314711552-_PG4?utm_source=share&utm_medium=member_ios&rcm=ACoAACOXbm0B1apdlZER6b_xIWet9XbQGjLP8vQ",
      date: "2024",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Articles & Publications
          </h1>
          <p className="text-gray-600 mb-8 text-center">
            Technical writings on blockchain, DeFi, Web3, and the future of
            cyberspace.
          </p>

          <div className="space-y-8">
            {/* Featured Article */}
            <div className="border-l-4 border-green-600 pl-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    <a
                      href="https://dev.to/shabbirykk/overview-of-cyberconnect-on-chain-protocol-and-explore-the-potential-use-cases-4c04"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Overview of CyberConnect on-chain protocol and explore the
                      potential use cases
                    </a>
                  </h3>
                  <p className="text-gray-600 mb-3">
                    A comprehensive guide covering CyberConnect's decentralized
                    social graph protocol, middleware acceleration, and
                    practical use cases for Web3 developers.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>DEV Community</span>
                    <span>•</span>
                    <span>Beginners • Tutorial • Blockchain • Web3</span>
                  </div>
                </div>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  Featured
                </span>
              </div>
            </div>

            {/* Recent Articles */}
            <div className="grid gap-6 md:grid-cols-2 justify-items-center">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold mb-3">
                  <a
                    href="https://dev.to/shabbirykk/overview-of-common-did-methods-and-when-to-use-each-one-2lkn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    Overview of common DID methods and when to use each one
                  </a>
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  An in-depth exploration of Decentralized Identifier (DID)
                  methods, their use cases, and when to choose each approach for
                  different applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    DID
                  </span>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                    Identity
                  </span>
                  <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                    Web3
                  </span>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h4 className="text-lg font-semibold mb-3">
                  <a
                    href="https://dev.to/shabbirykk/creating-an-nft-with-stacks-3cg6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    Creating an NFT with Stacks
                  </a>
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  A practical tutorial on building and deploying NFTs using the
                  Stacks blockchain, covering smart contracts and deployment
                  processes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    NFT
                  </span>
                  <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                    Stacks
                  </span>
                  <span className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded">
                    Bitcoin
                  </span>
                </div>
              </div>
            </div>

            {/* Talks and Panels Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold mb-6">Talks and Panels</h3>
              <p className="text-gray-600 mb-6">
                Industry insights and thought leadership on crypto, venture
                capital, and investment strategies.
              </p>

              <div className="grid gap-6 md:grid-cols-2 justify-items-center">
                {linkedInArticles.map((article, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg bg-white p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center mb-3">
                      <span className="text-blue-600 mr-2">💼</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        LinkedIn
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold mb-3">
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        {article.title}
                      </a>
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                          Crypto
                        </span>
                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                          VC
                        </span>
                        <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                          Investment
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">
                        {article.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Resources */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold mb-4">
                Additional Resources
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-600">🔗</span>
                  <a
                    href="https://dev.to/shabbirykk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    DEV Community Profile
                  </a>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-600">
                    Follow for latest articles and insights
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-600">📚</span>
                  <span className="text-gray-600">
                    More publications and research papers coming soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
