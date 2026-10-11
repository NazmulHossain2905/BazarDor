import { IMarket } from "@/interfaces/IProduct";
import bengaliDigit from "@/utils/bengaliDigit";

interface MarketTableProps {
  markets: IMarket[];
}

export default function MarketTable({ markets }: MarketTableProps) {
  return (
    <div className="mt-3 w-full overflow-x-auto rounded-2xl border border-base-300">
      <table className="w-full min-w-162 table-fixed border-collapse bg-base-100">
        <colgroup>
          <col className="w-2/5" />
          <col className="w-1/5" />
          <col className="w-1/5" />
          <col className="w-1/5" />
          <col className="w-1/5" />
        </colgroup>

        <thead>
          <tr className="border-b border-base-300 bg-base-200">
            <th className="px-4 py-3 text-left text-sm font-bold text-base-content/70">
              বাজার
            </th>
            <th className="px-4 py-3 text-left text-sm font-bold text-base-content/70">
              বিভাগ
            </th>
            <th className="px-4 py-3 text-right text-sm font-bold text-base-content/70">
              সর্বনিম্ন
            </th>
            <th className="px-4 py-3 text-right text-sm font-bold text-base-content/70">
              সর্বাধিক
            </th>
            <th className="px-4 py-3 text-right text-sm font-bold text-base-content/70">
              গড়
            </th>
          </tr>
        </thead>

        <tbody>
          {markets
            .sort((a, b) => a.min + a.max - (b.min + b.max))
            .map((market) => (
              <tr
                key={market.market}
                className="border-b border-base-300 last:border-b-0 even:bg-base-200"
              >
                <td className="px-4 py-3 text-sm font-medium">
                  {market.market}
                </td>
                <td className="px-4 py-3 text-sm">{market.division}</td>
                <td className="px-4 py-3 text-right text-sm">
                  {bengaliDigit(market.min)} টাকা
                </td>
                <td className="px-4 py-3 text-right text-sm">
                  {bengaliDigit(market.max)} টাকা
                </td>
                <td className="px-4 py-3 text-right text-sm font-semibold">
                  {formatPrice((market.max + market.min) / 2)} টাকা
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export function formatPrice(price: number): string {
  return price.toLocaleString("bn-BD", {
    minimumFractionDigits: price % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  });
}
