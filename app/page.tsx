import Image from "next/image";
import { Metadata } from 'next';
import AnnouncementBanner from '../components/AnnouncementBanner';
import PackageComparisonTable from '@/components/PackageComparisonTable';

export const metadata: Metadata = {
  title: 'Horizon - Drone Footage Packages',
  description: 'Choose your perfect drone footage package for your next project.',
};

interface PricingCardProps {
  title: string;
  price: number;
  features: string[];
  isHighlighted?: boolean;
}

function PricingCard({ title, price, features, isHighlighted = false }: PricingCardProps) {
  return (
    <div className={`flex flex-col p-6 rounded-lg ${isHighlighted ? 'border-2 border-yellow-500' : 'border border-gray-200'} bg-white dark:bg-gray-800`}>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-3xl font-bold mb-4">{price}DKK</p>
      <ul className="mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <Image src="/check-icon.svg" alt="Check" width={16} height={16} className="mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
        Order now
      </button>
    </div>
  );
}

export default function Home() {
  const pricingPlans = [
    {
      title: "Standard Package (FPV)",
      price: 3999,
      features: [
        "FPV drone footage (single pass-through)",
        "Basic editing",
        "HD video delivery",
        "1 revision",
        "Video available in 'my material' section",
        "4K delivery"
      ]
    },
    {
      title: "Premium Package (FPV + Aerial)",
      price: 5999,
      features: [
        "FPV footage + aerial shots",
        "Advanced editing",
        "4K delivery",
        "2 revisions",
        "Multiple formats (social media ready)",
        "Available in 'my material' section",
        "One year unlimited storage on Horizon's platform"
      ],
      isHighlighted: true
    },
    {
      title: "Event Coverage Package",
      price: 8999,
      features: [
        "Full event coverage",
        "FPV + aerial footage",
        "Advanced editing",
        "4K delivery",
        "Custom editing",
        "3 revisions",
        "Guaranteed 48-hour delivery",
        "One year unlimited storage on Horizon's platform"
      ]
    }
  ];

  return (
    <div className="min-h-screen font-sans">
      <AnnouncementBanner />
      <main className="max-w-6xl mx-auto p-8 pb-20">
        <h1 className="text-3xl font-bold text-center mb-12">Choose Your Drone Footage Package</h1>
        
        {/* YouTube Video */}
        <div className="mb-12">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/qkIH2x0dnA4"
            title="Horizon Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        {/* Comparison Table */}
        <PackageComparisonTable textColor="text-black" headerColor="text-black" />

      </main>
    </div>
  );
}
