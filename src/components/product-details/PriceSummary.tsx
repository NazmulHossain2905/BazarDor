interface PriceSummaryProps {
  minPrice: number;
  maxPrice: number;
  averagePrice: number;
  unit?: string;
}

const priceItems = [
  {
    key: "min",
    label: "সর্বনিম্ন দাম",
    description: "সবচেয়ে কম দামের বাজার",
    color: "text-success",
  },
  {
    key: "max",
    label: "সর্বাধিক দাম",
    description: "সবচেয়ে বেশি দামের বাজার",
    color: "text-error",
  },
  {
    key: "average",
    label: "গড় দাম",
    description: "গড় বাজারদর অনুযায়ী",
    color: "text-success",
  },
] as const;

export default function PriceSummary({
  minPrice,
  maxPrice,
  averagePrice,
  unit = "কেজি",
}: PriceSummaryProps) {
  const prices = {
    min: minPrice,
    max: maxPrice,
    average: averagePrice,
  };

  return (
    <section className="flex flex-col rounded-2xl border border-base-300 bg-base-100 p-5">
      <h3 className="text-lg font-semibold">দামের সারসংক্ষেপ</h3>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {priceItems.map((item) => (
          <div
            key={item.key}
            className="rounded-2xl border border-base-300 bg-base-100 px-6 py-4"
          >
            <p className="text-xs">{item.label}</p>

            <h4 className={`text-2xl font-bold ${item.color}`}>
              {Math.round(prices[item.key]).toLocaleString("bn-BD")}
              <span className="text-sm font-medium">টাকা</span>
            </h4>

            <p className="text-xs">
              {item.key === "average"
                ? `প্রতি ${unit}-এর হিসাবে`
                : item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
