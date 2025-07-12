import Image from "next/image";

export default function InvestmentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Investments</h1>
          <p className="text-gray-600 mb-8 text-center">
            Portfolio companies and strategic investments across the Web3
            ecosystem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {/* Inference Labs */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="w-32 h-32 flex items-center justify-center mb-4 shadow-md p-2">
                <Image
                  src="/inference.png"
                  alt="Inference Labs"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4 text-center">
                AI-powered blockchain infrastructure company focused on
                decentralized inference networks and machine learning on-chain.
              </p>
              <a
                href="https://inferencelabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website →
              </a>
            </div>
            {/* Xverse */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="w-32 h-32 flex items-center justify-center mb-4 shadow-md p-2">
                <Image
                  src="/xverse.png"
                  alt="Xverse"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4 text-center">
                Bitcoin wallet and DeFi platform enabling users to interact with
                Bitcoin DeFi protocols and manage digital assets seamlessly.
              </p>
              <a
                href="https://xverse.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website →
              </a>
            </div>
            {/* Zerolend */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="w-32 h-32 flex items-center justify-center mb-4 shadow-md p-2">
                <Image
                  src="/zerolend.png"
                  alt="Zerolend"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4 text-center">
                Decentralized lending protocol built on zkSync, offering
                zero-fee lending and borrowing with enhanced security and
                scalability.
              </p>
              <a
                href="https://zerolend.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website →
              </a>
            </div>
            {/* Bitflow */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="w-32 h-32 flex items-center justify-center mb-4 shadow-md p-2">
                <Image
                  src="/btiflow.png"
                  alt="Bitflow"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4 text-center">
                Cross-chain liquidity protocol enabling seamless asset transfers
                and liquidity provision across multiple blockchain networks.
              </p>
              <a
                href="https://bitflow.finance"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website →
              </a>
            </div>
            {/* Stacking DAO */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="w-32 h-32 flex items-center justify-center mb-4 shadow-md p-2">
                <Image
                  src="/stackingdao.png"
                  alt="Stacking DAO"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4 text-center">
                Decentralized autonomous organization focused on yield
                optimization and staking strategies across multiple blockchain
                protocols.
              </p>
              <a
                href="https://stackingdao.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website →
              </a>
            </div>
            {/* Arch Network */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="w-32 h-32 flex items-center justify-center mb-4 shadow-md p-2">
                <Image
                  src="/Arch.png"
                  alt="Arch Network"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4 text-center">
                Modular blockchain infrastructure platform providing scalable
                solutions for DeFi applications and cross-chain
                interoperability.
              </p>
              <a
                href="https://arch.network"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website →
              </a>
            </div>
            {/* Scroll */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="w-32 h-32 flex items-center justify-center mb-4 shadow-md p-2">
                <Image
                  src="/scroll.png"
                  alt="Scroll"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4 text-center">
                Ethereum Layer 2 scaling solution using zero-knowledge proofs to
                provide fast, secure, and cost-effective transactions.
              </p>
              <a
                href="https://scroll.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website →
              </a>
            </div>
            {/* Estate Protocol */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="w-32 h-32 flex items-center justify-center mb-4 shadow-md p-2">
                <Image
                  src="/estate.png"
                  alt="Estate Protocol"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4 text-center">
                Real estate tokenization platform enabling fractional ownership
                of properties through blockchain technology and smart contracts.
              </p>
              <a
                href="https://estateprotocol.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website →
              </a>
            </div>
            {/* Bitscrunch */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="w-32 h-32 flex items-center justify-center mb-4 shadow-md p-2">
                <Image
                  src="/bitcrunch.png"
                  alt="Bitscrunch"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4 text-center">
                AI-powered NFT analytics and data platform providing insights,
                valuation, and risk assessment for digital asset markets.
              </p>
              <a
                href="https://bitscrunch.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website →
              </a>
            </div>

            {/* New companies from image */}
            {/* SuperVerse */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="w-32 h-32 flex items-center justify-center mb-4 shadow-md p-2">
                <Image
                  src="/superverse.png"
                  alt="SuperVerse"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4 text-center">
                Web3 ecosystem powering NFT gaming and digital collectibles.
              </p>
              <a
                href="https://www.superverse.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website →
              </a>
            </div>
            {/* Manta Network */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="w-32 h-32 flex items-center justify-center mb-4 shadow-md p-2">
                <Image
                  src="/manta.png"
                  alt="Manta Network"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4 text-center">
                Modular blockchain focused on zero-knowledge privacy and
                scalability for Web3.
              </p>
              <a
                href="https://manta.network"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website →
              </a>
            </div>
            {/* Imaginary Ones */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="w-32 h-32 flex items-center justify-center mb-4 shadow-md p-2">
                <Image
                  src="/imaginary.png"
                  alt="Imaginary Ones"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4 text-center">
                NFT project and digital collectibles brand fostering creativity
                and positivity.
              </p>
              <a
                href="https://www.imaginaryones.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website →
              </a>
            </div>
            {/* Darewise */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="w-32 h-32 flex items-center justify-center mb-4 shadow-md p-2">
                <Image
                  src="/darewise.png"
                  alt="Darewise"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4 text-center">
                Web3 gaming studio building metaverse experiences and
                blockchain-powered games.
              </p>
              <a
                href="https://www.darewise.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website →
              </a>
            </div>
            {/* Opulous */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="w-32 h-32 flex items-center justify-center mb-4 shadow-md p-2">
                <Image
                  src="/opulous.png"
                  alt="Opulous"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4 text-center">
                Music NFT and DeFi platform enabling artists to tokenize music
                rights and access funding.
              </p>
              <a
                href="https://www.opulous.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website →
              </a>
            </div>
            {/* Storm */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="w-32 h-32 flex items-center justify-center mb-4 shadow-md p-2">
                <Image
                  src="/storm.png"
                  alt="Storm"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4 text-center">
                Blockchain-based platform for earning crypto rewards through
                micro-tasks and shopping.
              </p>
              <a
                href="https://www.stormx.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website →
              </a>
            </div>
            {/* Amber */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="w-32 h-32 flex items-center justify-center mb-4 shadow-md p-2">
                <Image
                  src="/amber.png"
                  alt="Amber"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4 text-center">
                Global digital asset trading, infrastructure, and financial
                services provider.
              </p>
              <a
                href="https://www.ambergroup.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website →
              </a>
            </div>
            {/* Alchemy */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="w-32 h-32 flex items-center justify-center mb-4 shadow-md p-2">
                <Image
                  src="/alchemy.png"
                  alt="Alchemy"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4 text-center">
                Leading Web3 developer platform and blockchain infrastructure
                provider.
              </p>
              <a
                href="https://www.alchemy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website →
              </a>
            </div>
            {/* Acala */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="w-32 h-32 flex items-center justify-center mb-4 shadow-md p-2">
                <Image
                  src="/acala.png"
                  alt="Acala"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4 text-center">
                DeFi hub and stablecoin platform for the Polkadot ecosystem.
              </p>
              <a
                href="https://acala.network"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website →
              </a>
            </div>
            {/* Balancer */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="w-32 h-32 flex items-center justify-center mb-4 shadow-md p-2">
                <Image
                  src="/balancer.png"
                  alt="Balancer"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4 text-center">
                Automated portfolio manager and decentralized trading platform
                for digital assets.
              </p>
              <a
                href="https://balancer.fi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website →
              </a>
            </div>
            {/* Ankr */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="w-32 h-32 flex items-center justify-center mb-4 shadow-md p-2">
                <Image
                  src="/ankr.png"
                  alt="Ankr"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4 text-center">
                Decentralized Web3 infrastructure and node provider for
                blockchain networks.
              </p>
              <a
                href="https://www.ankr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website →
              </a>
            </div>
            {/* 0x */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="w-32 h-32 flex items-center justify-center mb-4 shadow-md p-2">
                <Image
                  src="/0x.png"
                  alt="0x"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4 text-center">
                Open protocol for decentralized exchange of Ethereum-based
                tokens.
              </p>
              <a
                href="https://0x.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website →
              </a>
            </div>
            {/* 1inch */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="w-32 h-32 flex items-center justify-center mb-4 shadow-md p-2">
                <Image
                  src="/1inch.png"
                  alt="1inch"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4 text-center">
                Leading decentralized exchange aggregator for best crypto swap
                rates.
              </p>
              <a
                href="https://1inch.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website →
              </a>
            </div>
            {/* Bitso */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="w-32 h-32 flex items-center justify-center mb-4 shadow-md p-2">
                <Image
                  src="/bitso.png"
                  alt="Bitso"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4 text-center">
                Latin America’s largest cryptocurrency exchange.
              </p>
              <a
                href="https://bitso.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website →
              </a>
            </div>
            {/* Bitstamp */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center">
              <div className="w-32 h-32 flex items-center justify-center mb-4 shadow-md p-2">
                <Image
                  src="/bitstamp.png"
                  alt="Bitstamp"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 mb-4 text-center">
                One of the world’s longest-running and most trusted crypto
                exchanges.
              </p>
              <a
                href="https://www.bitstamp.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Visit Website →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
