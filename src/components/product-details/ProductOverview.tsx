import { IProduct } from "@/interfaces/IProduct";
import bengaliDigit from "@/utils/bengaliDigit";
import { getUnitInBangla } from "@/utils/getUnitInBangla";

interface ProductOverviewProps {
  product: IProduct;
}

export default function ProductOverview({ product }: ProductOverviewProps) {
  const { image, nameBn, unit, categoryNameBn, today, yesterday, change } =
    product;

  const isUp = change.dir === "up";
  const noChange = change.dir === "flat";

  const changeAmount = Math.abs(today - yesterday);

  const textStyle =
    change.dir === "up"
      ? "text-error"
      : change.dir === "down"
        ? "text-success"
        : "text-base-content";

  const directionIcon =
    change.dir === "up" ? "▲" : change.dir === "down" ? "▼" : "—";

  const changeLabel = noChange ? "অপরিবর্তিত" : isUp ? "বেড়েছে" : "কমেছে";

  return (
    <section className="flex flex-col justify-between gap-5 rounded-2xl border border-base-300 bg-base-100 p-5 sm:flex-row sm:items-center">
      <div className="flex min-w-0 flex-1 items-center gap-4">
        <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-base-200">
          <p className="text-[40px]">{image}</p>
        </div>
        <div className="min-w-0">
          <h3 className="text-3xl font-bold">{nameBn}</h3>

          <p className="text-sm text-base-content/70">
            প্রতি {getUnitInBangla(unit)} · {categoryNameBn}
          </p>

          <p className="mt-2 text-sm text-base-content">
            গতকালের তুলনায় আজ দাম
            <span className="font-semibold">{changeLabel}</span>
            {!noChange && <> • {bengaliDigit(changeAmount)} টাকা</>}
          </p>
        </div>
      </div>

      <div className="flex shrink-0 flex-col items-center justify-center rounded-2xl bg-base-200 px-5 py-4">
        <p className="text-sm text-base-content/70">আজকের দাম</p>

        <p className="text-3xl font-bold">{bengaliDigit(today)}</p>

        <p className="text-sm text-base-content/70">
          টাকা / {getUnitInBangla(unit)}
        </p>

        <span
          className={`rounded-xl bg-base-100 px-2 py-1 text-sm font-semibold ${textStyle}`}
        >
          {directionIcon}
          {bengaliDigit(Math.abs(change.pct), {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1,
          })}
          %
        </span>
      </div>
    </section>
  );
}
